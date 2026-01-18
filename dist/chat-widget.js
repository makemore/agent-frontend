/**
 * Embeddable Chat Widget
 * A standalone chat widget that can be embedded in any website.
 * 
 * Usage:
 *   <script src="chat-widget.js"></script>
 *   <link rel="stylesheet" href="chat-widget.css">
 *   <script>
 *     ChatWidget.init({
 *       backendUrl: 'https://your-api.com',
 *       agentKey: 'your-agent',
 *       title: 'Support Chat',
 *       primaryColor: '#0066cc',
 *     });
 *   </script>
 */
(function(global) {
  'use strict';

  // Default configuration
  const DEFAULT_CONFIG = {
    backendUrl: 'http://localhost:8000',
    agentKey: 'insurance-agent',
    title: 'Chat Assistant',
    subtitle: 'How can we help you today?',
    primaryColor: '#0066cc',
    position: 'bottom-right', // bottom-right, bottom-left
    defaultJourneyType: 'general',
    enableDebugMode: true,
    enableAutoRun: true,
    journeyTypes: {},
    customerPrompts: {},
    placeholder: 'Type your message...',
    emptyStateTitle: 'Start a Conversation',
    emptyStateMessage: 'Send a message to get started.',
    anonymousTokenHeader: 'X-Anonymous-Token',
    conversationIdKey: 'chat_widget_conversation_id',
    sessionTokenKey: 'chat_widget_session_token',
    // API endpoint paths (can be customized for different backend setups)
    apiPaths: {
      anonymousSession: '/api/accounts/anonymous-session/',
      runs: '/api/agent-runtime/runs/',
      runEvents: '/api/agent-runtime/runs/{runId}/events/',
      simulateCustomer: '/api/agent-runtime/simulate-customer/',
      ttsVoices: '/api/tts/voices/', // For fetching available voices (proxy mode)
      ttsSetVoice: '/api/tts/set-voice/', // For setting voice (proxy mode)
    },
    // Demo flow control
    autoRunDelay: 1000, // Delay in ms before auto-generating next message
    autoRunMode: 'automatic', // 'automatic', 'confirm', or 'manual'
    // Text-to-speech (ElevenLabs)
    enableTTS: false,
    ttsProxyUrl: null, // If set, uses Django proxy instead of direct API calls
    elevenLabsApiKey: null, // Only needed if not using proxy
    ttsVoices: {
      assistant: null, // ElevenLabs voice ID for assistant (not needed if using proxy)
      user: null, // ElevenLabs voice ID for simulated user (not needed if using proxy)
    },
    ttsModel: 'eleven_turbo_v2_5', // ElevenLabs model (not needed if using proxy)
    ttsSettings: {
      stability: 0.5,
      similarity_boost: 0.75,
      style: 0.0,
      use_speaker_boost: true,
    },
    availableVoices: [], // List of available voices for UI dropdown
    // UI visibility controls
    showClearButton: true,
    showDebugButton: true,
    showTTSButton: true,
    showVoiceSettings: true,
    showExpandButton: true,
  };

  // State
  let config = { ...DEFAULT_CONFIG };
  let state = {
    isOpen: false,
    isExpanded: false,
    isLoading: false,
    isSimulating: false,
    autoRunActive: false,
    autoRunPaused: false,
    debugMode: false,
    journeyType: 'general',
    messages: [],
    conversationId: null,
    sessionToken: null,
    error: null,
    eventSource: null,
    currentAudio: null,
    isSpeaking: false,
    speechQueue: [],
    voiceSettingsOpen: false,
  };

  // DOM elements
  let container = null;
  let widgetEl = null;
  let fabEl = null;

  // ============================================================================
  // Utility Functions
  // ============================================================================

  function generateId() {
    return 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function parseMarkdown(text) {
    // Check if enhanced markdown parser is available (from chat-widget-markdown.js)
    if (global.ChatWidget && global.ChatWidget._enhancedMarkdownParser) {
      return global.ChatWidget._enhancedMarkdownParser(text);
    }

    // Fallback: Simple markdown parsing for common patterns
    let html = escapeHtml(text);

    // Bold: **text** or __text__
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic: *text* or _text_
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Code: `code`
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');

    // Links: [text](url)
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Line breaks
    html = html.replace(/\n/g, '<br>');

    // Lists: - item or * item
    html = html.replace(/^[\-\*]\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    return html;
  }

  function getStoredValue(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function setStoredValue(key, value) {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      // Ignore storage errors
    }
  }

  // ============================================================================
  // Text-to-Speech (ElevenLabs)
  // ============================================================================

  async function speakText(text, role) {
    if (!config.enableTTS) return;

    // Check if we have either proxy or direct API access
    if (!config.ttsProxyUrl && !config.elevenLabsApiKey) return;

    // If using direct API, check for voice ID
    if (!config.ttsProxyUrl) {
      const voiceId = role === 'assistant' ? config.ttsVoices.assistant : config.ttsVoices.user;
      if (!voiceId) return;
    }

    // Add to queue
    state.speechQueue.push({ text, role });

    // Process queue if not already speaking
    if (!state.isSpeaking) {
      processSpeechQueue();
    }
  }

  async function processSpeechQueue() {
    if (state.speechQueue.length === 0) {
      state.isSpeaking = false;
      render();

      // If auto-run is waiting for speech to finish, continue
      if (state.autoRunActive && state.autoRunPaused && config.autoRunMode === 'automatic') {
        setTimeout(() => {
          if (state.autoRunActive && !state.isSpeaking) {
            continueAutoRun();
          }
        }, config.autoRunDelay);
      }
      return;
    }

    state.isSpeaking = true;
    render();

    const { text, role } = state.speechQueue.shift();

    try {
      let response;

      if (config.ttsProxyUrl) {
        // Use Django proxy
        response = await fetch(config.ttsProxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(state.sessionToken ? { [config.anonymousTokenHeader]: state.sessionToken } : {}),
          },
          body: JSON.stringify({
            text: text,
            role: role,
          }),
        });
      } else {
        // Direct ElevenLabs API call
        const voiceId = role === 'assistant' ? config.ttsVoices.assistant : config.ttsVoices.user;
        response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': config.elevenLabsApiKey,
          },
          body: JSON.stringify({
            text: text,
            model_id: config.ttsModel,
            voice_settings: config.ttsSettings,
          }),
        });
      }

      if (!response.ok) {
        throw new Error(`TTS API error: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      state.currentAudio = audio;

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        state.currentAudio = null;
        processSpeechQueue();
      };

      audio.onerror = () => {
        console.error('[ChatWidget] Audio playback error');
        URL.revokeObjectURL(audioUrl);
        state.currentAudio = null;
        processSpeechQueue();
      };

      await audio.play();
    } catch (err) {
      console.error('[ChatWidget] TTS error:', err);
      state.currentAudio = null;
      processSpeechQueue();
    }
  }

  function stopSpeech() {
    if (state.currentAudio) {
      state.currentAudio.pause();
      state.currentAudio = null;
    }
    state.speechQueue = [];
    state.isSpeaking = false;
    render();
  }

  function toggleTTS() {
    config.enableTTS = !config.enableTTS;
    if (!config.enableTTS) {
      stopSpeech();
    }
    render();
  }

  function toggleVoiceSettings() {
    state.voiceSettingsOpen = !state.voiceSettingsOpen;
    render();
  }

  async function setVoice(role, voiceId) {
    config.ttsVoices[role] = voiceId;

    // If using proxy, notify backend of voice change
    if (config.ttsProxyUrl) {
      try {
        const token = await getOrCreateSession();
        const headers = {
          'Content-Type': 'application/json',
        };
        if (token) {
          headers[config.anonymousTokenHeader] = token;
        }

        await fetch(`${config.backendUrl}${config.apiPaths.ttsSetVoice}`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ role, voice_id: voiceId }),
        });
      } catch (err) {
        console.error('[ChatWidget] Failed to set voice on backend:', err);
      }
    }

    render();
  }

  async function fetchAvailableVoices() {
    try {
      let voices = [];

      if (config.ttsProxyUrl) {
        // Fetch voices from Django backend
        const token = await getOrCreateSession();
        const headers = {};
        if (token) {
          headers[config.anonymousTokenHeader] = token;
        }

        const response = await fetch(`${config.backendUrl}${config.apiPaths.ttsVoices}`, {
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          voices = data.voices || [];
        }
      } else if (config.elevenLabsApiKey) {
        // Fetch voices directly from ElevenLabs
        const response = await fetch('https://api.elevenlabs.io/v1/voices', {
          headers: {
            'xi-api-key': config.elevenLabsApiKey,
          },
        });

        if (response.ok) {
          const data = await response.json();
          voices = data.voices || [];
        }
      }

      config.availableVoices = voices;
      render(); // Re-render to update dropdowns
    } catch (err) {
      console.error('[ChatWidget] Failed to fetch voices:', err);
    }
  }

  // ============================================================================
  // Session Management
  // ============================================================================

  async function getOrCreateSession() {
    if (state.sessionToken) {
      return state.sessionToken;
    }

    // Try to restore from storage
    const stored = getStoredValue(config.sessionTokenKey);
    if (stored) {
      state.sessionToken = stored;
      return stored;
    }

    // Create new anonymous session
    try {
      const response = await fetch(`${config.backendUrl}${config.apiPaths.anonymousSession}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        state.sessionToken = data.token;
        setStoredValue(config.sessionTokenKey, data.token);
        return data.token;
      }
    } catch (e) {
      console.warn('[ChatWidget] Failed to create session:', e);
    }

    return null;
  }

  // ============================================================================
  // API Functions
  // ============================================================================

  async function sendMessage(content) {
    if (!content.trim() || state.isLoading) return;

    state.isLoading = true;
    state.error = null;

    // Add user message immediately
    const userMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
      type: 'message',
    };
    state.messages.push(userMessage);
    render();

    try {
      const token = await getOrCreateSession();
      const headers = { 'Content-Type': 'application/json' };
      if (token) {
        headers[config.anonymousTokenHeader] = token;
      }

      // Restore conversation ID from storage if not set
      if (!state.conversationId) {
        state.conversationId = getStoredValue(config.conversationIdKey);
      }

      const response = await fetch(`${config.backendUrl}${config.apiPaths.runs}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          agentKey: config.agentKey,
          conversationId: state.conversationId,
          messages: [{ role: 'user', content: content.trim() }],
          metadata: { journey_type: state.journeyType },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const run = await response.json();

      // Store conversation ID
      if (!state.conversationId && run.conversationId) {
        state.conversationId = run.conversationId;
        setStoredValue(config.conversationIdKey, run.conversationId);
      }

      // Subscribe to SSE events
      await subscribeToEvents(run.id, token);

    } catch (err) {
      state.error = err.message || 'Failed to send message';
      state.isLoading = false;
      render();
    }
  }

  async function subscribeToEvents(runId, token) {
    // Close existing connection
    if (state.eventSource) {
      state.eventSource.close();
    }

    const eventPath = config.apiPaths.runEvents.replace('{runId}', runId);
    let url = `${config.backendUrl}${eventPath}`;
    if (token) {
      url += `?anonymous_token=${encodeURIComponent(token)}`;
    }

    const eventSource = new EventSource(url);
    state.eventSource = eventSource;

    let assistantContent = '';

    // Handler for assistant messages
    eventSource.addEventListener('assistant.message', (event) => {
      try {
        const data = JSON.parse(event.data);
        const content = data.payload.content;
        if (content) {
          assistantContent += content;

          // Update or add assistant message
          const lastMsg = state.messages[state.messages.length - 1];
          if (lastMsg?.role === 'assistant' && lastMsg.id.startsWith('assistant-stream-')) {
            lastMsg.content = assistantContent;
          } else {
            state.messages.push({
              id: 'assistant-stream-' + Date.now(),
              role: 'assistant',
              content: assistantContent,
              timestamp: new Date(),
              type: 'message',
            });
          }
          render();
        }
      } catch (err) {
        console.error('[ChatWidget] Failed to parse assistant.message:', err);
      }
    });

    // Handler for tool calls (debug mode)
    eventSource.addEventListener('tool.call', (event) => {
      if (!state.debugMode) return;
      try {
        const data = JSON.parse(event.data);
        state.messages.push({
          id: 'tool-call-' + Date.now(),
          role: 'system',
          content: `🔧 Tool: ${data.payload.name}`,
          timestamp: new Date(),
          type: 'tool_call',
          metadata: { name: data.payload.name, arguments: data.payload.arguments },
        });
        render();
      } catch (err) {
        console.error('[ChatWidget] Failed to parse tool.call:', err);
      }
    });

    // Handler for tool results (debug mode)
    eventSource.addEventListener('tool.result', (event) => {
      if (!state.debugMode) return;
      try {
        const data = JSON.parse(event.data);
        const result = data.payload.result || '';
        state.messages.push({
          id: 'tool-result-' + Date.now(),
          role: 'system',
          content: `✅ Result: ${result.substring(0, 100)}${result.length > 100 ? '...' : ''}`,
          timestamp: new Date(),
          type: 'tool_result',
          metadata: { result },
        });
        render();
      } catch (err) {
        console.error('[ChatWidget] Failed to parse tool.result:', err);
      }
    });

    // Terminal event handlers
    const handleTerminal = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'run.failed') {
          state.error = data.payload.error || 'Agent run failed';
          state.messages.push({
            id: 'error-' + Date.now(),
            role: 'system',
            content: `❌ Error: ${state.error}`,
            timestamp: new Date(),
            type: 'error',
          });
        }
      } catch (err) {
        console.error('[ChatWidget] Failed to parse terminal event:', err);
      }
      state.isLoading = false;
      eventSource.close();
      state.eventSource = null;
      render();

      // Speak assistant message if TTS enabled
      if (assistantContent && !state.error) {
        speakText(assistantContent, 'assistant');
      }

      // Trigger auto-run if enabled
      if (state.autoRunActive && !state.error) {
        if (config.autoRunMode === 'automatic') {
          // Wait for speech to finish before continuing
          if (config.enableTTS && assistantContent) {
            state.autoRunPaused = true;
            // processSpeechQueue will continue when done
          } else {
            setTimeout(() => triggerAutoRun(), config.autoRunDelay);
          }
        } else if (config.autoRunMode === 'confirm') {
          state.autoRunPaused = true;
          render();
        }
      }
    };

    eventSource.addEventListener('run.succeeded', handleTerminal);
    eventSource.addEventListener('run.failed', handleTerminal);
    eventSource.addEventListener('run.cancelled', handleTerminal);
    eventSource.addEventListener('run.timed_out', handleTerminal);

    eventSource.onerror = () => {
      if (eventSource.readyState !== EventSource.CLOSED) {
        console.debug('[ChatWidget] SSE connection closed');
      }
      state.isLoading = false;
      eventSource.close();
      state.eventSource = null;
      render();
    };
  }

  // ============================================================================
  // Auto-Run / Demo Mode
  // ============================================================================

  async function triggerAutoRun() {
    if (!state.autoRunActive || state.isLoading || state.isSimulating) return;

    const lastMessage = state.messages[state.messages.length - 1];
    if (lastMessage?.role !== 'assistant') return;

    state.isSimulating = true;
    state.autoRunPaused = false;
    render();

    try {
      const response = await fetch(`${config.backendUrl}${config.apiPaths.simulateCustomer}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: state.messages.map(m => ({ role: m.role, content: m.content })),
          journey_type: state.journeyType,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.response) {
          state.isSimulating = false;

          // Speak simulated user message if TTS enabled
          if (config.enableTTS) {
            await speakText(data.response, 'user');
          }

          await sendMessage(data.response);
          return;
        }
      }
    } catch (err) {
      console.error('[ChatWidget] Failed to simulate customer:', err);
    }

    state.isSimulating = false;
    render();
  }

  async function startDemoFlow(journeyType) {
    clearMessages();
    state.journeyType = journeyType;
    state.autoRunActive = true;
    state.autoRunPaused = false;
    render();

    const journey = config.journeyTypes[journeyType];
    if (journey?.initialMessage) {
      setTimeout(async () => {
        state.isSimulating = true;
        render();

        // Speak initial message if TTS enabled
        if (config.enableTTS) {
          await speakText(journey.initialMessage, 'user');
        }

        sendMessage(journey.initialMessage).then(() => {
          state.isSimulating = false;
          render();
        });
      }, 100);
    }
  }

  function stopAutoRun() {
    state.autoRunActive = false;
    state.autoRunPaused = false;
    render();
  }

  function continueAutoRun() {
    if (state.autoRunActive && state.autoRunPaused) {
      triggerAutoRun();
    }
  }

  function setAutoRunMode(mode) {
    if (['automatic', 'confirm', 'manual'].includes(mode)) {
      config.autoRunMode = mode;
      render();
    }
  }

  function setAutoRunDelay(delay) {
    config.autoRunDelay = Math.max(0, parseInt(delay) || 1000);
    render();
  }

  // ============================================================================
  // UI Actions
  // ============================================================================

  function openWidget() {
    state.isOpen = true;
    getOrCreateSession();
    render();
  }

  function closeWidget() {
    state.isOpen = false;
    state.autoRunActive = false;
    state.autoRunPaused = false;
    render();
  }

  function toggleExpand() {
    state.isExpanded = !state.isExpanded;
    render();
  }

  function toggleDebugMode() {
    state.debugMode = !state.debugMode;
    render();
  }

  function clearMessages() {
    state.messages = [];
    state.conversationId = null;
    state.error = null;
    state.autoRunActive = false;
    state.autoRunPaused = false;
    setStoredValue(config.conversationIdKey, null);
    render();
  }

  // ============================================================================
  // Render Functions
  // ============================================================================

  function renderMessage(msg) {
    const isUser = msg.role === 'user';
    const isToolCall = msg.type === 'tool_call';
    const isToolResult = msg.type === 'tool_result';
    const isError = msg.type === 'error';

    // Hide debug messages if debug mode is off
    if ((isToolCall || isToolResult) && !state.debugMode) {
      return '';
    }

    let classes = 'cw-message';
    if (isUser) classes += ' cw-message-user';
    if (isToolCall) classes += ' cw-message-tool-call';
    if (isToolResult) classes += ' cw-message-tool-result';
    if (isError) classes += ' cw-message-error';

    let content = msg.role === 'assistant' ? parseMarkdown(msg.content) : escapeHtml(msg.content);

    // Add tool arguments for tool calls
    if (isToolCall && msg.metadata?.arguments) {
      content += `<pre class="cw-tool-args">${escapeHtml(JSON.stringify(msg.metadata.arguments, null, 2))}</pre>`;
    }

    return `
      <div class="cw-message-row ${isUser ? 'cw-message-row-user' : ''}">
        <div class="${classes}">${content}</div>
      </div>
    `;
  }

  function renderVoiceSettings() {
    if (!state.voiceSettingsOpen) return '';

    const voiceOptions = (role) => {
      if (config.availableVoices.length === 0) {
        return '<option value="">Loading voices...</option>';
      }
      return config.availableVoices.map(voice => `
        <option value="${voice.voice_id}" ${config.ttsVoices[role] === voice.voice_id ? 'selected' : ''}>
          ${escapeHtml(voice.name)}
        </option>
      `).join('');
    };

    return `
      <div class="cw-voice-settings">
        <div class="cw-voice-settings-header">
          <span>🎙️ Voice Settings</span>
          <button class="cw-voice-settings-close" data-action="toggle-voice-settings">✕</button>
        </div>
        <div class="cw-voice-settings-content">
          <div class="cw-voice-setting">
            <label>Assistant Voice</label>
            <select class="cw-voice-select" data-role="assistant" onchange="ChatWidget.setVoice('assistant', this.value)">
              ${voiceOptions('assistant')}
            </select>
          </div>
          <div class="cw-voice-setting">
            <label>Customer Voice (Demo)</label>
            <select class="cw-voice-select" data-role="user" onchange="ChatWidget.setVoice('user', this.value)">
              ${voiceOptions('user')}
            </select>
          </div>
        </div>
      </div>
    `;
  }

  function renderJourneyDropdown() {
    if (!config.enableAutoRun || Object.keys(config.journeyTypes).length === 0) {
      return '';
    }

    const journeyItems = Object.entries(config.journeyTypes).map(([key, journey]) => `
      <button class="cw-dropdown-item" data-journey="${key}">
        ${escapeHtml(journey.label)}
      </button>
    `).join('');

    const controlsSection = state.autoRunActive ? `
      <div class="cw-dropdown-separator"></div>
      <div class="cw-dropdown-label">Demo Controls</div>
      <div class="cw-autorun-controls">
        <label class="cw-control-label">
          <input type="radio" name="autorun-mode" value="automatic"
                 ${config.autoRunMode === 'automatic' ? 'checked' : ''}
                 onchange="ChatWidget.setAutoRunMode('automatic')">
          <span>⚡ Automatic</span>
        </label>
        <label class="cw-control-label">
          <input type="radio" name="autorun-mode" value="confirm"
                 ${config.autoRunMode === 'confirm' ? 'checked' : ''}
                 onchange="ChatWidget.setAutoRunMode('confirm')">
          <span>👆 Confirm Next</span>
        </label>
        <label class="cw-control-label">
          <input type="radio" name="autorun-mode" value="manual"
                 ${config.autoRunMode === 'manual' ? 'checked' : ''}
                 onchange="ChatWidget.setAutoRunMode('manual')">
          <span>✋ Manual</span>
        </label>
      </div>
      ${config.autoRunMode === 'automatic' ? `
        <div class="cw-delay-control">
          <label class="cw-control-label">
            <span>Delay: ${config.autoRunDelay}ms</span>
            <input type="range" min="0" max="5000" step="100"
                   value="${config.autoRunDelay}"
                   oninput="ChatWidget.setAutoRunDelay(this.value)">
          </label>
        </div>
      ` : ''}
      <div class="cw-dropdown-separator"></div>
      <button class="cw-dropdown-item cw-dropdown-item-danger" data-action="stop-autorun">
        ⏹️ Stop Demo
      </button>
    ` : '';

    return `
      <div class="cw-dropdown">
        <button class="cw-header-btn ${state.autoRunActive ? 'cw-btn-active' : ''}"
                data-action="toggle-journey-dropdown"
                title="Demo Flows"
                ${state.isLoading || state.isSimulating ? 'disabled' : ''}>
          ${state.isSimulating ? '<span class="cw-spinner"></span>' : '▶'}
        </button>
        <div class="cw-dropdown-menu cw-dropdown-hidden" id="cw-journey-dropdown">
          <div class="cw-dropdown-label">Demo Flows</div>
          <div class="cw-dropdown-separator"></div>
          ${journeyItems}
          ${controlsSection}
        </div>
      </div>
    `;
  }

  function render() {
    if (!container) return;

    // Render FAB (floating action button)
    if (!state.isOpen) {
      container.innerHTML = `
        <button class="cw-fab" style="background-color: ${config.primaryColor}">
          <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      `;
      container.querySelector('.cw-fab').addEventListener('click', openWidget);
      return;
    }

    // Render chat widget
    const messagesHtml = state.messages.length === 0
      ? `
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${escapeHtml(config.emptyStateTitle)}</h3>
          <p>${escapeHtml(config.emptyStateMessage)}</p>
        </div>
      `
      : state.messages.map(renderMessage).join('');

    const typingIndicator = state.isLoading ? `
      <div class="cw-message-row">
        <div class="cw-typing">
          <span class="cw-spinner"></span>
          <span>Thinking...</span>
        </div>
      </div>
    ` : '';

    const continueButton = (state.autoRunActive && state.autoRunPaused && config.autoRunMode === 'confirm') ? `
      <div class="cw-continue-bar">
        <button class="cw-continue-btn" data-action="continue-autorun" style="background-color: ${config.primaryColor}">
          ▶️ Continue Demo
        </button>
      </div>
    ` : '';

    const statusBar = (state.autoRunActive || state.debugMode) ? `
      <div class="cw-status-bar">
        ${state.autoRunActive ? `<span>🤖 Demo: ${config.journeyTypes[state.journeyType]?.label || state.journeyType} (${config.autoRunMode})</span>` : ''}
        ${state.debugMode ? '<span>🐛 Debug</span>' : ''}
      </div>
    ` : '';

    const errorBar = state.error ? `
      <div class="cw-error-bar">${escapeHtml(state.error)}</div>
    ` : '';

    container.innerHTML = `
      <div class="cw-widget ${state.isExpanded ? 'cw-widget-expanded' : ''}" style="--cw-primary: ${config.primaryColor}">
        <div class="cw-header" style="background-color: ${config.primaryColor}">
          <span class="cw-title">${escapeHtml(config.title)}</span>
          <div class="cw-header-actions">
            ${config.showClearButton ? `
              <button class="cw-header-btn" data-action="clear" title="Clear Conversation" ${state.isLoading || state.messages.length === 0 ? 'disabled' : ''}>
                <svg class="cw-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            ` : ''}
            ${config.showDebugButton && config.enableDebugMode ? `
              <button class="cw-header-btn ${state.debugMode ? 'cw-btn-active' : ''}" data-action="toggle-debug" title="${state.debugMode ? 'Hide Debug Info' : 'Show Debug Info'}">
                <svg class="cw-icon-sm ${state.debugMode ? 'cw-icon-warning' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            ` : ''}
            ${config.showTTSButton && (config.elevenLabsApiKey || config.ttsProxyUrl) ? `
              <button class="cw-header-btn ${config.enableTTS ? 'cw-btn-active' : ''} ${state.isSpeaking ? 'cw-btn-speaking' : ''}"
                      data-action="toggle-tts"
                      title="${config.enableTTS ? (state.isSpeaking ? 'Speaking...' : 'TTS Enabled') : 'TTS Disabled'}">
                ${state.isSpeaking ? '🔊' : (config.enableTTS ? '🔉' : '🔇')}
              </button>
            ` : ''}
            ${config.showVoiceSettings && (config.elevenLabsApiKey || config.ttsProxyUrl) ? `
              <button class="cw-header-btn ${state.voiceSettingsOpen ? 'cw-btn-active' : ''}" data-action="toggle-voice-settings" title="Voice Settings">
                🎙️
              </button>
            ` : ''}
            ${renderJourneyDropdown()}
            ${config.showExpandButton ? `
              <button class="cw-header-btn" data-action="toggle-expand" title="${state.isExpanded ? 'Minimize' : 'Expand'}">
                ${state.isExpanded ? '⊖' : '⊕'}
              </button>
            ` : ''}
            <button class="cw-header-btn" data-action="close" title="Close">
              ✕
            </button>
          </div>
        </div>
        ${renderVoiceSettings()}
        ${statusBar}
        <div class="cw-messages" id="cw-messages">
          ${messagesHtml}
          ${typingIndicator}
        </div>
        ${continueButton}
        ${errorBar}
        <form class="cw-input-form" id="cw-input-form">
          <input type="text" class="cw-input" placeholder="${escapeHtml(config.placeholder)}" ${state.isLoading ? 'disabled' : ''}>
          <button type="submit" class="cw-send-btn" style="background-color: ${config.primaryColor}" ${state.isLoading ? 'disabled' : ''}>
            ${state.isLoading ? '<span class="cw-spinner"></span>' : '➤'}
          </button>
        </form>
      </div>
    `;

    // Attach event listeners
    attachEventListeners();

    // Scroll to bottom
    const messagesEl = document.getElementById('cw-messages');
    if (messagesEl) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }

  function attachEventListeners() {
    // Header buttons
    container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = btn.dataset.action;

        switch (action) {
          case 'close': closeWidget(); break;
          case 'toggle-expand': toggleExpand(); break;
          case 'toggle-debug': toggleDebugMode(); break;
          case 'toggle-tts': toggleTTS(); break;
          case 'toggle-voice-settings': toggleVoiceSettings(); break;
          case 'clear': clearMessages(); break;
          case 'stop-autorun': stopAutoRun(); break;
          case 'continue-autorun': continueAutoRun(); break;
          case 'toggle-journey-dropdown':
            const dropdown = document.getElementById('cw-journey-dropdown');
            if (dropdown) {
              dropdown.classList.toggle('cw-dropdown-hidden');
            }
            break;
        }
      });
    });

    // Journey selection
    container.querySelectorAll('[data-journey]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const journeyType = btn.dataset.journey;
        const dropdown = document.getElementById('cw-journey-dropdown');
        if (dropdown) dropdown.classList.add('cw-dropdown-hidden');
        startDemoFlow(journeyType);
      });
    });

    // Form submission
    const form = document.getElementById('cw-input-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.cw-input');
        if (input && input.value.trim()) {
          sendMessage(input.value);
          input.value = '';
        }
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cw-dropdown')) {
        const dropdown = document.getElementById('cw-journey-dropdown');
        if (dropdown) dropdown.classList.add('cw-dropdown-hidden');
      }
    });
  }

  // ============================================================================
  // Public API
  // ============================================================================

  function init(userConfig = {}) {
    // Deep merge apiPaths to allow partial overrides
    const mergedApiPaths = {
      ...DEFAULT_CONFIG.apiPaths,
      ...(userConfig.apiPaths || {}),
    };

    config = {
      ...DEFAULT_CONFIG,
      ...userConfig,
      apiPaths: mergedApiPaths,
    };
    state.journeyType = config.defaultJourneyType;

    // Restore conversation ID
    state.conversationId = getStoredValue(config.conversationIdKey);

    // Create container
    container = document.createElement('div');
    container.id = 'chat-widget-container';
    container.className = `cw-container cw-position-${config.position}`;
    document.body.appendChild(container);

    // Initial render
    render();

    // Fetch available voices if TTS is configured
    if (config.elevenLabsApiKey || config.ttsProxyUrl) {
      fetchAvailableVoices();
    }

    console.log('[ChatWidget] Initialized with config:', config);
  }

  function destroy() {
    if (state.eventSource) {
      state.eventSource.close();
    }
    if (container) {
      container.remove();
      container = null;
    }
  }

  function open() {
    openWidget();
  }

  function close() {
    closeWidget();
  }

  function send(message) {
    if (!state.isOpen) {
      openWidget();
    }
    sendMessage(message);
  }

  // Export public API
  global.ChatWidget = {
    init,
    destroy,
    open,
    close,
    send,
    clearMessages,
    startDemoFlow,
    stopAutoRun,
    continueAutoRun,
    setAutoRunMode,
    setAutoRunDelay,
    toggleTTS,
    stopSpeech,
    setVoice,
    getState: () => ({ ...state }),
    getConfig: () => ({ ...config }),
  };

})(typeof window !== 'undefined' ? window : this);
