/**
 * Embeddable Chat Widget
 * A standalone chat widget that can be embedded in any website.
 * 
 * Usage (Single Instance - Original API):
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
 * 
 * Usage (Multiple Instances):
 *   <script>
 *     const widget1 = ChatWidget.createInstance({
 *       containerId: 'chat-container-1',
 *       backendUrl: 'https://your-api.com',
 *       agentKey: 'agent-1',
 *       embedded: true,
 *     });
 *     
 *     const widget2 = ChatWidget.createInstance({
 *       containerId: 'chat-container-2',
 *       backendUrl: 'https://your-api.com',
 *       agentKey: 'agent-2',
 *       embedded: true,
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
    position: 'bottom-right',
    defaultJourneyType: 'general',
    enableDebugMode: true,
    enableAutoRun: true,
    journeyTypes: {},
    customerPrompts: {},
    placeholder: 'Type your message...',
    emptyStateTitle: 'Start a Conversation',
    emptyStateMessage: 'Send a message to get started.',
    authStrategy: null,
    authToken: null,
    authHeader: null,
    authTokenPrefix: null,
    anonymousSessionEndpoint: null,
    anonymousTokenKey: 'chat_widget_anonymous_token',
    onAuthError: null,
    anonymousTokenHeader: 'X-Anonymous-Token',
    conversationIdKey: 'chat_widget_conversation_id',
    sessionTokenKey: 'chat_widget_session_token',
    apiPaths: {
      anonymousSession: '/api/accounts/anonymous-session/',
      runs: '/api/agent-runtime/runs/',
      runEvents: '/api/agent-runtime/runs/{runId}/events/',
      simulateCustomer: '/api/agent-runtime/simulate-customer/',
      ttsVoices: '/api/tts/voices/',
      ttsSetVoice: '/api/tts/set-voice/',
    },
    autoRunDelay: 1000,
    autoRunMode: 'automatic',
    enableTTS: false,
    ttsProxyUrl: null,
    elevenLabsApiKey: null,
    ttsVoices: { assistant: null, user: null },
    ttsModel: 'eleven_turbo_v2_5',
    ttsSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true },
    availableVoices: [],
    showClearButton: true,
    showDebugButton: true,
    showTTSButton: true,
    showVoiceSettings: true,
    showExpandButton: true,
    onEvent: null,
    // Multi-instance options
    containerId: null,
    embedded: false,
    metadata: {},
  };

  // Track instances
  const instances = new Map();
  let instanceCounter = 0;
  let defaultInstance = null;

  // ============================================================================
  // ChatWidgetInstance Class
  // ============================================================================

  class ChatWidgetInstance {
    constructor(userConfig = {}) {
      this.instanceId = `cw-${++instanceCounter}`;
      
      const mergedApiPaths = { ...DEFAULT_CONFIG.apiPaths, ...(userConfig.apiPaths || {}) };
      this.config = { ...DEFAULT_CONFIG, ...userConfig, apiPaths: mergedApiPaths };

      this.state = {
        isOpen: this.config.embedded,
        isExpanded: false,
        isLoading: false,
        isSimulating: false,
        autoRunActive: false,
        autoRunPaused: false,
        debugMode: false,
        journeyType: this.config.defaultJourneyType,
        messages: [],
        conversationId: null,
        authToken: this.config.authToken || null,
        error: null,
        eventSource: null,
        currentAudio: null,
        isSpeaking: false,
        speechQueue: [],
        voiceSettingsOpen: false,
      };

      this.container = null;
      instances.set(this.instanceId, this);
    }

    // Storage helpers with instance-specific keys
    _storageKey(key) {
      return this.config.containerId ? `${key}_${this.config.containerId}` : key;
    }

    _getStored(key) {
      try { return localStorage.getItem(this._storageKey(key)); } catch (e) { return null; }
    }

    _setStored(key, value) {
      try {
        const k = this._storageKey(key);
        value === null ? localStorage.removeItem(k) : localStorage.setItem(k, value);
      } catch (e) {}
    }

    // Utility
    _generateId() {
      return 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    _escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    _parseMarkdown(text) {
      if (global.ChatWidget && global.ChatWidget._enhancedMarkdownParser) {
        return global.ChatWidget._enhancedMarkdownParser(text);
      }
      let html = this._escapeHtml(text);
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
      html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
      html = html.replace(/_(.+?)_/g, '<em>$1</em>');
      html = html.replace(/`(.+?)`/g, '<code>$1</code>');
      html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
      html = html.replace(/\n/g, '<br>');
      return html;
    }

    // Authentication
    _getAuthStrategy() {
      if (this.config.authStrategy) return this.config.authStrategy;
      if (this.config.authToken) return 'token';
      if (this.config.apiPaths.anonymousSession || this.config.anonymousSessionEndpoint) return 'anonymous';
      return 'none';
    }

    _getAuthHeaders() {
      const strategy = this._getAuthStrategy();
      const headers = {};
      const token = this.config.authToken || this.state.authToken;

      if (strategy === 'token' && token) {
        const headerName = this.config.authHeader || 'Authorization';
        const prefix = this.config.authTokenPrefix !== undefined ? this.config.authTokenPrefix : 'Token';
        headers[headerName] = prefix ? `${prefix} ${token}` : token;
      } else if (strategy === 'jwt' && token) {
        const headerName = this.config.authHeader || 'Authorization';
        const prefix = this.config.authTokenPrefix !== undefined ? this.config.authTokenPrefix : 'Bearer';
        headers[headerName] = prefix ? `${prefix} ${token}` : token;
      } else if (strategy === 'anonymous' && token) {
        const headerName = this.config.authHeader || this.config.anonymousTokenHeader || 'X-Anonymous-Token';
        headers[headerName] = token;
      }
      return headers;
    }

    _getFetchOptions(options = {}) {
      const strategy = this._getAuthStrategy();
      const fetchOptions = { ...options };
      fetchOptions.headers = { ...fetchOptions.headers, ...this._getAuthHeaders() };
      if (strategy === 'session') fetchOptions.credentials = 'include';
      return fetchOptions;
    }

    async _getOrCreateSession() {
      const strategy = this._getAuthStrategy();
      if (strategy !== 'anonymous') return this.config.authToken || this.state.authToken;
      if (this.state.authToken) return this.state.authToken;

      const storageKey = this.config.anonymousTokenKey || this.config.sessionTokenKey;
      const stored = this._getStored(storageKey);
      if (stored) { this.state.authToken = stored; return stored; }

      try {
        const endpoint = this.config.anonymousSessionEndpoint || this.config.apiPaths.anonymousSession;
        const response = await fetch(`${this.config.backendUrl}${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          this.state.authToken = data.token;
          this._setStored(storageKey, data.token);
          return data.token;
        }
      } catch (e) {
        console.warn('[ChatWidget] Failed to create session:', e);
      }
      return null;
    }

    // TTS
    async speakText(text, role) {
      if (!this.config.enableTTS) return;
      if (!this.config.ttsProxyUrl && !this.config.elevenLabsApiKey) return;
      this.state.speechQueue.push({ text, role });
      if (!this.state.isSpeaking) this._processSpeechQueue();
    }

    async _processSpeechQueue() {
      if (this.state.speechQueue.length === 0) {
        this.state.isSpeaking = false;
        this.render();
        return;
      }
      this.state.isSpeaking = true;
      this.render();

      const { text, role } = this.state.speechQueue.shift();
      try {
        let response;
        if (this.config.ttsProxyUrl) {
          response = await fetch(this.config.ttsProxyUrl, this._getFetchOptions({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, role }),
          }));
        } else {
          const voiceId = role === 'assistant' ? this.config.ttsVoices.assistant : this.config.ttsVoices.user;
          response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: { 'Accept': 'audio/mpeg', 'Content-Type': 'application/json', 'xi-api-key': this.config.elevenLabsApiKey },
            body: JSON.stringify({ text, model_id: this.config.ttsModel, voice_settings: this.config.ttsSettings }),
          });
        }
        if (!response.ok) throw new Error(`TTS API error: ${response.status}`);
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        this.state.currentAudio = audio;
        audio.onended = () => { URL.revokeObjectURL(audioUrl); this.state.currentAudio = null; this._processSpeechQueue(); };
        audio.onerror = () => { URL.revokeObjectURL(audioUrl); this.state.currentAudio = null; this._processSpeechQueue(); };
        await audio.play();
      } catch (err) {
        console.error('[ChatWidget] TTS error:', err);
        this.state.currentAudio = null;
        this._processSpeechQueue();
      }
    }

    stopSpeech() {
      if (this.state.currentAudio) { this.state.currentAudio.pause(); this.state.currentAudio = null; }
      this.state.speechQueue = [];
      this.state.isSpeaking = false;
      this.render();
    }

    toggleTTS() {
      this.config.enableTTS = !this.config.enableTTS;
      if (!this.config.enableTTS) this.stopSpeech();
      this.render();
    }

    // API Functions
    async sendMessage(content) {
      if (!content.trim() || this.state.isLoading) return;

      this.state.isLoading = true;
      this.state.error = null;

      const userMessage = {
        id: this._generateId(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
        type: 'message',
      };
      this.state.messages.push(userMessage);
      this.render();

      try {
        const token = await this._getOrCreateSession();
        if (!this.state.conversationId) {
          this.state.conversationId = this._getStored(this.config.conversationIdKey);
        }

        const response = await fetch(`${this.config.backendUrl}${this.config.apiPaths.runs}`, this._getFetchOptions({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            agentKey: this.config.agentKey,
            conversationId: this.state.conversationId,
            messages: [{ role: 'user', content: content.trim() }],
            metadata: { ...this.config.metadata, journey_type: this.state.journeyType },
          }),
        }));

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }

        const run = await response.json();
        if (!this.state.conversationId && run.conversationId) {
          this.state.conversationId = run.conversationId;
          this._setStored(this.config.conversationIdKey, run.conversationId);
        }

        await this._subscribeToEvents(run.id, token);
      } catch (err) {
        this.state.error = err.message || 'Failed to send message';
        this.state.isLoading = false;
        this.render();
      }
    }

    async _subscribeToEvents(runId, token) {
      if (this.state.eventSource) this.state.eventSource.close();

      const eventPath = this.config.apiPaths.runEvents.replace('{runId}', runId);
      let url = `${this.config.backendUrl}${eventPath}`;
      if (token) url += `?anonymous_token=${encodeURIComponent(token)}`;

      const eventSource = new EventSource(url);
      this.state.eventSource = eventSource;
      let assistantContent = '';
      const self = this;

      eventSource.addEventListener('assistant.message', (event) => {
        try {
          const data = JSON.parse(event.data);
          if (self.config.onEvent) self.config.onEvent('assistant.message', data.payload);
          const content = data.payload.content;
          if (content) {
            assistantContent += content;
            const lastMsg = self.state.messages[self.state.messages.length - 1];
            if (lastMsg?.role === 'assistant' && lastMsg.id.startsWith('assistant-stream-')) {
              lastMsg.content = assistantContent;
            } else {
              self.state.messages.push({
                id: 'assistant-stream-' + Date.now(),
                role: 'assistant',
                content: assistantContent,
                timestamp: new Date(),
                type: 'message',
              });
            }
            self.render();
          }
        } catch (err) { console.error('[ChatWidget] Parse error:', err); }
      });

      eventSource.addEventListener('tool.call', (event) => {
        try {
          const data = JSON.parse(event.data);
          if (self.config.onEvent) self.config.onEvent('tool.call', data.payload);
          if (self.state.debugMode) {
            self.state.messages.push({
              id: 'tool-call-' + Date.now(),
              role: 'system',
              content: `🔧 Tool: ${data.payload.name}`,
              timestamp: new Date(),
              type: 'tool_call',
              metadata: { name: data.payload.name, arguments: data.payload.arguments },
            });
            self.render();
          }
        } catch (err) { console.error('[ChatWidget] Parse error:', err); }
      });

      eventSource.addEventListener('tool.result', (event) => {
        try {
          const data = JSON.parse(event.data);
          if (self.config.onEvent) self.config.onEvent('tool.result', data.payload);
          if (self.state.debugMode) {
            const result = data.payload.result || '';
            self.state.messages.push({
              id: 'tool-result-' + Date.now(),
              role: 'system',
              content: `✅ Result: ${result.substring(0, 100)}${result.length > 100 ? '...' : ''}`,
              timestamp: new Date(),
              type: 'tool_result',
              metadata: { result },
            });
            self.render();
          }
        } catch (err) { console.error('[ChatWidget] Parse error:', err); }
      });

      const handleTerminal = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (self.config.onEvent) self.config.onEvent(data.type, data.payload);
          if (data.type === 'run.failed') {
            self.state.error = data.payload.error || 'Agent run failed';
            self.state.messages.push({
              id: 'error-' + Date.now(),
              role: 'system',
              content: `❌ Error: ${self.state.error}`,
              timestamp: new Date(),
              type: 'error',
            });
          }
        } catch (err) { console.error('[ChatWidget] Parse error:', err); }
        self.state.isLoading = false;
        eventSource.close();
        self.state.eventSource = null;
        self.render();
        if (assistantContent && !self.state.error) self.speakText(assistantContent, 'assistant');
      };

      eventSource.addEventListener('run.succeeded', handleTerminal);
      eventSource.addEventListener('run.failed', handleTerminal);
      eventSource.addEventListener('run.cancelled', handleTerminal);
      eventSource.addEventListener('run.timed_out', handleTerminal);

      eventSource.onerror = () => {
        self.state.isLoading = false;
        eventSource.close();
        self.state.eventSource = null;
        self.render();
      };
    }

    // UI Actions
    open() {
      this.state.isOpen = true;
      this._getOrCreateSession();
      this.render();
    }

    close() {
      this.state.isOpen = false;
      this.state.autoRunActive = false;
      this.state.autoRunPaused = false;
      this.render();
    }

    toggleExpand() {
      this.state.isExpanded = !this.state.isExpanded;
      this.render();
    }

    toggleDebugMode() {
      this.state.debugMode = !this.state.debugMode;
      this.render();
    }

    clearMessages() {
      this.state.messages = [];
      this.state.conversationId = null;
      this.state.error = null;
      this.state.autoRunActive = false;
      this.state.autoRunPaused = false;
      this._setStored(this.config.conversationIdKey, null);
      this.render();
    }

    send(message) {
      if (!this.state.isOpen) this.open();
      this.sendMessage(message);
    }

    setAuth(authConfig = {}) {
      if (authConfig.strategy) this.config.authStrategy = authConfig.strategy;
      if (authConfig.token !== undefined) {
        this.config.authToken = authConfig.token;
        this.state.authToken = authConfig.token;
      }
    }

    clearAuth() {
      this.config.authToken = null;
      this.state.authToken = null;
      this._setStored(this.config.anonymousTokenKey, null);
    }

    getState() { return { ...this.state }; }
    getConfig() { return { ...this.config }; }

    // Render
    _renderMessage(msg) {
      const isUser = msg.role === 'user';
      const isToolCall = msg.type === 'tool_call';
      const isToolResult = msg.type === 'tool_result';
      const isError = msg.type === 'error';

      if ((isToolCall || isToolResult) && !this.state.debugMode) return '';

      let classes = 'cw-message';
      if (isUser) classes += ' cw-message-user';
      if (isToolCall) classes += ' cw-message-tool-call';
      if (isToolResult) classes += ' cw-message-tool-result';
      if (isError) classes += ' cw-message-error';

      let content = msg.role === 'assistant' ? this._parseMarkdown(msg.content) : this._escapeHtml(msg.content);
      if (isToolCall && msg.metadata?.arguments) {
        content += `<pre class="cw-tool-args">${this._escapeHtml(JSON.stringify(msg.metadata.arguments, null, 2))}</pre>`;
      }

      return `<div class="cw-message-row ${isUser ? 'cw-message-row-user' : ''}"><div class="${classes}">${content}</div></div>`;
    }

    render() {
      if (!this.container) return;
      const cfg = this.config;
      const st = this.state;

      // Embedded mode: always show widget inline
      if (cfg.embedded) {
        this._renderWidget();
        return;
      }

      // Floating mode: show FAB or widget
      if (!st.isOpen) {
        this.container.innerHTML = `
          <button class="cw-fab" style="background-color: ${cfg.primaryColor}">
            <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        `;
        this.container.querySelector('.cw-fab').addEventListener('click', () => this.open());
        return;
      }

      this._renderWidget();
    }

    _renderWidget() {
      const cfg = this.config;
      const st = this.state;
      const self = this;

      const messagesHtml = st.messages.length === 0
        ? `<div class="cw-empty-state">
            <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3>${this._escapeHtml(cfg.emptyStateTitle)}</h3>
            <p>${this._escapeHtml(cfg.emptyStateMessage)}</p>
          </div>`
        : st.messages.map(m => this._renderMessage(m)).join('');

      const typingIndicator = st.isLoading ? `
        <div class="cw-message-row">
          <div class="cw-typing"><span class="cw-spinner"></span><span>Thinking...</span></div>
        </div>
      ` : '';

      const statusBar = st.debugMode ? '<div class="cw-status-bar"><span>🐛 Debug</span></div>' : '';
      const errorBar = st.error ? `<div class="cw-error-bar">${this._escapeHtml(st.error)}</div>` : '';

      this.container.innerHTML = `
        <div class="cw-widget ${st.isExpanded ? 'cw-widget-expanded' : ''} ${cfg.embedded ? 'cw-widget-embedded' : ''}" style="--cw-primary: ${cfg.primaryColor}">
          <div class="cw-header" style="background-color: ${cfg.primaryColor}">
            <span class="cw-title">${this._escapeHtml(cfg.title)}</span>
            <div class="cw-header-actions">
              ${cfg.showClearButton ? `<button class="cw-header-btn" data-action="clear" title="Clear" ${st.isLoading || st.messages.length === 0 ? 'disabled' : ''}>🗑️</button>` : ''}
              ${cfg.showDebugButton && cfg.enableDebugMode ? `<button class="cw-header-btn ${st.debugMode ? 'cw-btn-active' : ''}" data-action="toggle-debug" title="Debug">🐛</button>` : ''}
              ${cfg.showTTSButton && (cfg.elevenLabsApiKey || cfg.ttsProxyUrl) ? `<button class="cw-header-btn ${cfg.enableTTS ? 'cw-btn-active' : ''}" data-action="toggle-tts" title="TTS">${cfg.enableTTS ? '🔊' : '🔇'}</button>` : ''}
              ${cfg.showExpandButton && !cfg.embedded ? `<button class="cw-header-btn" data-action="toggle-expand" title="${st.isExpanded ? 'Minimize' : 'Expand'}">${st.isExpanded ? '⊖' : '⊕'}</button>` : ''}
              ${!cfg.embedded ? '<button class="cw-header-btn" data-action="close" title="Close">✕</button>' : ''}
            </div>
          </div>
          ${statusBar}
          <div class="cw-messages" id="${this.instanceId}-messages">
            ${messagesHtml}
            ${typingIndicator}
          </div>
          ${errorBar}
          <form class="cw-input-form" id="${this.instanceId}-form">
            <input type="text" class="cw-input" placeholder="${this._escapeHtml(cfg.placeholder)}" ${st.isLoading ? 'disabled' : ''}>
            <button type="submit" class="cw-send-btn" style="background-color: ${cfg.primaryColor}" ${st.isLoading ? 'disabled' : ''}>
              ${st.isLoading ? '<span class="cw-spinner"></span>' : '➤'}
            </button>
          </form>
        </div>
      `;

      // Attach event listeners
      this.container.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const action = btn.dataset.action;
          if (action === 'close') self.close();
          else if (action === 'toggle-expand') self.toggleExpand();
          else if (action === 'toggle-debug') self.toggleDebugMode();
          else if (action === 'toggle-tts') self.toggleTTS();
          else if (action === 'clear') self.clearMessages();
        });
      });

      const form = document.getElementById(`${this.instanceId}-form`);
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const input = form.querySelector('.cw-input');
          if (input && input.value.trim()) {
            self.sendMessage(input.value);
            input.value = '';
            input.focus();
          }
        });
      }

      // Scroll to bottom
      const messagesEl = document.getElementById(`${this.instanceId}-messages`);
      if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;

      // Focus input
      const inputEl = this.container.querySelector('.cw-input');
      if (inputEl && !st.isLoading) setTimeout(() => inputEl.focus(), 0);
    }

    // Initialize
    init() {
      this.state.conversationId = this._getStored(this.config.conversationIdKey);

      if (this.config.containerId) {
        // Embedded mode: use existing container
        this.container = document.getElementById(this.config.containerId);
        if (!this.container) {
          console.error(`[ChatWidget] Container not found: ${this.config.containerId}`);
          return this;
        }
        this.container.classList.add('cw-container-embedded');
      } else {
        // Floating mode: create container
        this.container = document.createElement('div');
        this.container.id = this.instanceId;
        this.container.className = `cw-container cw-position-${this.config.position}`;
        document.body.appendChild(this.container);
      }

      this.render();
      console.log(`[ChatWidget] Instance ${this.instanceId} initialized`);
      return this;
    }

    destroy() {
      if (this.state.eventSource) this.state.eventSource.close();
      if (this.state.currentAudio) { this.state.currentAudio.pause(); this.state.currentAudio = null; }

      if (this.container) {
        if (this.config.containerId) {
          // Embedded: just clear the container
          this.container.innerHTML = '';
          this.container.classList.remove('cw-container-embedded');
        } else {
          // Floating: remove the container
          this.container.remove();
        }
        this.container = null;
      }

      instances.delete(this.instanceId);
      console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`);
    }
  }

  // ============================================================================
  // Public API
  // ============================================================================

  /**
   * Create a new chat widget instance.
   * Use this for multiple widgets on the same page.
   */
  function createInstance(config = {}) {
    const instance = new ChatWidgetInstance(config);
    return instance.init();
  }

  /**
   * Initialize the default (singleton) chat widget.
   * For backwards compatibility with the original API.
   */
  function init(config = {}) {
    if (defaultInstance) {
      defaultInstance.destroy();
    }
    defaultInstance = createInstance(config);
    return defaultInstance;
  }

  /**
   * Destroy the default instance.
   */
  function destroy() {
    if (defaultInstance) {
      defaultInstance.destroy();
      defaultInstance = null;
    }
  }

  // Proxy methods to default instance for backwards compatibility
  function open() { if (defaultInstance) defaultInstance.open(); }
  function close() { if (defaultInstance) defaultInstance.close(); }
  function send(message) { if (defaultInstance) defaultInstance.send(message); }
  function clearMessages() { if (defaultInstance) defaultInstance.clearMessages(); }
  function toggleTTS() { if (defaultInstance) defaultInstance.toggleTTS(); }
  function stopSpeech() { if (defaultInstance) defaultInstance.stopSpeech(); }
  function setAuth(config) { if (defaultInstance) defaultInstance.setAuth(config); }
  function clearAuth() { if (defaultInstance) defaultInstance.clearAuth(); }
  function getState() { return defaultInstance ? defaultInstance.getState() : null; }
  function getConfig() { return defaultInstance ? defaultInstance.getConfig() : null; }

  // Export public API
  global.ChatWidget = {
    // Multi-instance API
    createInstance,
    getInstance: (id) => instances.get(id),
    getAllInstances: () => Array.from(instances.values()),

    // Singleton API (backwards compatible)
    init,
    destroy,
    open,
    close,
    send,
    clearMessages,
    toggleTTS,
    stopSpeech,
    setAuth,
    clearAuth,
    getState,
    getConfig,

    // For markdown plugin
    _enhancedMarkdownParser: null,
  };

})(typeof window !== 'undefined' ? window : this);
