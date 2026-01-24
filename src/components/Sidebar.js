/**
 * Sidebar component - conversation list
 */

import { html } from 'htm/preact';
import { escapeHtml, formatDate } from '../utils/helpers.js';

export function Sidebar({ 
  isOpen, 
  conversations, 
  conversationsLoading,
  currentConversationId,
  onClose,
  onNewConversation,
  onSwitchConversation,
}) {
  return html`
    <div class="cw-sidebar ${isOpen ? 'cw-sidebar-open' : ''}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${onClose}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${onNewConversation}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${conversationsLoading && html`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!conversationsLoading && conversations.length === 0 && html`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${conversations.map(conv => html`
          <div 
            key=${conv.id}
            class="cw-conversation-item ${conv.id === currentConversationId ? 'cw-conversation-active' : ''}"
            onClick=${() => onSwitchConversation(conv.id)}
          >
            <div class="cw-conversation-title">${escapeHtml(conv.title || 'Untitled')}</div>
            <div class="cw-conversation-date">${formatDate(conv.updatedAt || conv.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${isOpen ? 'cw-sidebar-overlay-visible' : ''}" 
      onClick=${onClose}
    />
  `;
}

