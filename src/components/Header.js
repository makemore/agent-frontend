/**
 * Header component - title bar with action buttons
 */

import { html } from 'htm/preact';
import { escapeHtml } from '../utils/helpers.js';

export function Header({
  config,
  debugMode,
  isExpanded,
  isSpeaking,
  messagesCount,
  isLoading,
  currentAgent,
  onClose,
  onToggleExpand,
  onToggleDebug,
  onToggleTTS,
  onClear,
  onToggleSidebar,
}) {
  const {
    title,
    primaryColor,
    embedded,
    showConversationSidebar,
    showClearButton,
    showDebugButton,
    enableDebugMode,
    showTTSButton,
    showExpandButton,
    enableTTS,
    elevenLabsApiKey,
    ttsProxyUrl,
  } = config;

  const hasTTS = elevenLabsApiKey || ttsProxyUrl;

  return html`
    <div class="cw-header" style=${{ backgroundColor: primaryColor }}>
      ${showConversationSidebar && html`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${onToggleSidebar}
          title="Conversations"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      `}

      <div class="cw-title-container">
        <span class="cw-title">${escapeHtml(title)}</span>
        ${currentAgent && html`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${escapeHtml(currentAgent.name || currentAgent.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${showClearButton && html`
          <button 
            class="cw-header-btn" 
            onClick=${onClear}
            title="Clear"
            disabled=${isLoading || messagesCount === 0}
          >🗑️</button>
        `}
        
        ${showDebugButton && enableDebugMode && html`
          <button 
            class="cw-header-btn ${debugMode ? 'cw-btn-active' : ''}" 
            onClick=${onToggleDebug}
            title="Debug"
          >🐛</button>
        `}
        
        ${showTTSButton && hasTTS && html`
          <button 
            class="cw-header-btn ${enableTTS ? 'cw-btn-active' : ''}" 
            onClick=${onToggleTTS}
            title="TTS"
          >${enableTTS ? '🔊' : '🔇'}</button>
        `}
        
        ${showExpandButton && !embedded && html`
          <button 
            class="cw-header-btn" 
            onClick=${onToggleExpand}
            title=${isExpanded ? 'Minimize' : 'Expand'}
          >${isExpanded ? '⊖' : '⊕'}</button>
        `}
        
        ${!embedded && html`
          <button 
            class="cw-header-btn" 
            onClick=${onClose}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `;
}

