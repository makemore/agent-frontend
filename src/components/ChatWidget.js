/**
 * ChatWidget component - main widget container
 */

import { html } from 'htm/preact';
import { useState, useEffect, useCallback, useMemo } from 'preact/hooks';
import { Header } from './Header.js';
import { MessageList } from './MessageList.js';
import { InputForm } from './InputForm.js';
import { Sidebar } from './Sidebar.js';
import { ModelSelector } from './ModelSelector.js';
import { useChat } from '../hooks/useChat.js';
import { useModels } from '../hooks/useModels.js';
import { createApiClient } from '../utils/api.js';
import { createStorage } from '../utils/helpers.js';

export function ChatWidget({ config, onStateChange, markdownParser, apiRef }) {
  // UI state
  const [isOpen, setIsOpen] = useState(config.embedded || config.forceOpen === true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [conversationsLoading, setConversationsLoading] = useState(false);

  // TTS state
  const [enableTTS, setEnableTTS] = useState(config.enableTTS);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Current agent state (for multi-agent systems)
  const [currentAgent, setCurrentAgent] = useState(null);

  // Handle forceOpen changes from parent
  useEffect(() => {
    if (config.forceOpen !== undefined) {
      setIsOpen(config.forceOpen);
    }
  }, [config.forceOpen]);

  // Create storage helper
  const storage = useMemo(() => createStorage(config.containerId), [config.containerId]);

  // Create API client
  const [authToken, setAuthToken] = useState(config.authToken || null);
  const api = useMemo(() => {
    const getState = () => ({ authToken, storage });
    const setState = (fn) => {
      const newState = fn({ authToken, storage });
      if (newState.authToken !== authToken) setAuthToken(newState.authToken);
    };
    return createApiClient(config, getState, setState);
  }, [config, authToken, storage]);

  // Chat hook
  const chat = useChat(config, api, storage);

  // Models hook
  const models = useModels(config, api, storage);

  // Track current agent from messages (for multi-agent systems)
  useEffect(() => {
    // Look for the most recent sub_agent_start or sub_agent_end message
    for (let i = chat.messages.length - 1; i >= 0; i--) {
      const msg = chat.messages[i];
      if (msg.type === 'sub_agent_start') {
        setCurrentAgent({
          key: msg.metadata?.subAgentKey,
          name: msg.metadata?.agentName,
        });
        return;
      }
      if (msg.type === 'sub_agent_end') {
        // Sub-agent finished, clear the current agent indicator
        setCurrentAgent(null);
        return;
      }
    }
  }, [chat.messages]);

  // Load initial conversation if stored
  useEffect(() => {
    const storedConvId = storage.get(config.conversationIdKey);
    if (storedConvId) {
      chat.loadConversation(storedConvId);
    }
  }, []);

  // Notify parent of state changes
  useEffect(() => {
    if (onStateChange) {
      onStateChange({
        isOpen,
        isExpanded,
        debugMode,
        messages: chat.messages,
        conversationId: chat.conversationId,
        isLoading: chat.isLoading,
        error: chat.error,
      });
    }
  }, [isOpen, isExpanded, debugMode, chat.messages, chat.conversationId, chat.isLoading, chat.error]);

  // Load conversations for sidebar
  const loadConversations = useCallback(async () => {
    if (!config.showConversationSidebar) return;
    
    setConversationsLoading(true);
    try {
      const url = `${config.backendUrl}${config.apiPaths.conversations}?agent_key=${encodeURIComponent(config.agentKey)}`;
      const response = await fetch(url, api.getFetchOptions({ method: 'GET' }));
      
      if (response.ok) {
        const data = await response.json();
        setConversations(data.results || data);
      }
    } catch (err) {
      console.error('[ChatWidget] Failed to load conversations:', err);
      setConversations([]);
    } finally {
      setConversationsLoading(false);
    }
  }, [config, api]);

  // Handlers
  const handleToggleSidebar = useCallback(() => {
    const newOpen = !sidebarOpen;
    setSidebarOpen(newOpen);
    if (newOpen) loadConversations();
  }, [sidebarOpen, loadConversations]);

  const handleSwitchConversation = useCallback((convId) => {
    if (convId !== chat.conversationId) {
      chat.loadConversation(convId);
    }
    setSidebarOpen(false);
  }, [chat]);

  const handleNewConversation = useCallback(() => {
    chat.clearMessages();
    setSidebarOpen(false);
  }, [chat]);

  const handleSend = useCallback((content) => {
    chat.sendMessage(content, {
      model: models.selectedModel,
      onAssistantMessage: (assistantContent) => {
        // TTS callback when assistant finishes
        if (enableTTS && assistantContent) {
          // TTS would be handled here
        }
      }
    });
  }, [chat, enableTTS, models.selectedModel]);

  // Expose imperative API to parent
  useEffect(() => {
    if (apiRef) {
      apiRef.current = {
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        send: (msg) => handleSend(msg),
        clearMessages: () => chat.clearMessages(),
        toggleTTS: () => setEnableTTS(v => !v),
        stopSpeech: () => setIsSpeaking(false),
        setAuth: (cfg) => {
          if (cfg.token !== undefined) setAuthToken(cfg.token);
        },
        clearAuth: () => setAuthToken(null),
      };
    }
  }, [chat, apiRef, handleSend]);

  // Floating mode: show FAB when closed
  if (!config.embedded && !isOpen) {
    return html`
      <button 
        class="cw-fab" 
        style=${{ backgroundColor: config.primaryColor }}
        onClick=${() => setIsOpen(true)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;
  }

  const widgetClasses = [
    'cw-widget',
    isExpanded && 'cw-widget-expanded',
    config.embedded && 'cw-widget-embedded',
  ].filter(Boolean).join(' ');

  return html`
    <div class=${widgetClasses} style=${{ '--cw-primary': config.primaryColor }}>
      ${config.showConversationSidebar && html`
        <${Sidebar}
          isOpen=${sidebarOpen}
          conversations=${conversations}
          conversationsLoading=${conversationsLoading}
          currentConversationId=${chat.conversationId}
          onClose=${() => setSidebarOpen(false)}
          onNewConversation=${handleNewConversation}
          onSwitchConversation=${handleSwitchConversation}
        />
      `}
      
      <${Header}
        config=${config}
        debugMode=${debugMode}
        isExpanded=${isExpanded}
        isSpeaking=${isSpeaking}
        messagesCount=${chat.messages.length}
        isLoading=${chat.isLoading}
        currentAgent=${currentAgent}
        onClose=${() => setIsOpen(false)}
        onToggleExpand=${() => setIsExpanded(!isExpanded)}
        onToggleDebug=${() => setDebugMode(!debugMode)}
        onToggleTTS=${() => setEnableTTS(!enableTTS)}
        onClear=${chat.clearMessages}
        onToggleSidebar=${handleToggleSidebar}
      />

      ${debugMode && html`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${MessageList}
        messages=${chat.messages}
        isLoading=${chat.isLoading}
        hasMoreMessages=${chat.hasMoreMessages}
        loadingMoreMessages=${chat.loadingMoreMessages}
        onLoadMore=${chat.loadMoreMessages}
        onEditMessage=${chat.editMessage}
        onRetryMessage=${chat.retryMessage}
        debugMode=${debugMode}
        markdownParser=${markdownParser}
        emptyStateTitle=${config.emptyStateTitle}
        emptyStateMessage=${config.emptyStateMessage}
      />

      ${chat.error && html`<div class="cw-error-bar">${chat.error}</div>`}

      ${config.showModelSelector && models.availableModels.length > 0 && html`
        <${ModelSelector}
          availableModels=${models.availableModels}
          selectedModel=${models.selectedModel}
          onSelectModel=${models.selectModel}
          disabled=${chat.isLoading}
        />
      `}

      <${InputForm}
        onSend=${handleSend}
        onCancel=${chat.cancelRun}
        isLoading=${chat.isLoading}
        placeholder=${config.placeholder}
        primaryColor=${config.primaryColor}
        enableVoice=${config.enableVoice}
      />
    </div>
  `;
}

