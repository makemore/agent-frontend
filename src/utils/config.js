/**
 * Default configuration for the chat widget
 */

export const DEFAULT_CONFIG = {
  backendUrl: 'http://localhost:8000',
  agentKey: 'default-agent',
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
  
  // Auth
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
  
  // API paths
  apiPaths: {
    anonymousSession: '/api/accounts/anonymous-session/',
    conversations: '/api/agent-runtime/conversations/',
    runs: '/api/agent-runtime/runs/',
    runEvents: '/api/agent-runtime/runs/{runId}/events/',
    simulateCustomer: '/api/agent-runtime/simulate-customer/',
    ttsVoices: '/api/tts/voices/',
    ttsSetVoice: '/api/tts/set-voice/',
    models: '/api/agent-runtime/models/',
  },

  // UI options
  showConversationSidebar: true,
  showClearButton: true,
  showDebugButton: true,
  showTTSButton: true,
  showVoiceSettings: true,
  showExpandButton: true,
  showModelSelector: false,

  // Model selection
  modelKey: 'chat_widget_selected_model',
  
  // Auto-run
  autoRunDelay: 1000,
  autoRunMode: 'automatic',
  
  // TTS
  enableTTS: false,
  ttsProxyUrl: null,
  elevenLabsApiKey: null,
  ttsVoices: { assistant: null, user: null },
  ttsModel: 'eleven_turbo_v2_5',
  ttsSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true },
  availableVoices: [],
  
  // Callbacks
  onEvent: null,
  
  // Multi-instance options
  containerId: null,
  embedded: false,
  metadata: {},
};

export function mergeConfig(userConfig) {
  const mergedApiPaths = { ...DEFAULT_CONFIG.apiPaths, ...(userConfig.apiPaths || {}) };
  return { ...DEFAULT_CONFIG, ...userConfig, apiPaths: mergedApiPaths };
}

