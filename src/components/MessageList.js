/**
 * MessageList component - renders the scrollable message container
 */

import { html } from 'htm/preact';
import { useRef, useEffect } from 'preact/hooks';
import { Message } from './Message.js';
import { escapeHtml } from '../utils/helpers.js';

export function MessageList({
  messages,
  isLoading,
  hasMoreMessages,
  loadingMoreMessages,
  onLoadMore,
  onEditMessage,
  onRetryMessage,
  debugMode,
  markdownParser,
  emptyStateTitle,
  emptyStateMessage,
}) {
  const containerRef = useRef(null);
  const shouldAutoScrollRef = useRef(true);

  // Track if user scrolls away from bottom
  const handleScroll = (e) => {
    const el = e.target;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
    shouldAutoScrollRef.current = isNearBottom;

    // Load more when scrolling to top
    if (el.scrollTop < 50 && hasMoreMessages && !loadingMoreMessages) {
      const prevScrollHeight = el.scrollHeight;
      onLoadMore().then(() => {
        // Maintain scroll position after loading
        const newScrollHeight = el.scrollHeight;
        el.scrollTop = newScrollHeight - prevScrollHeight + el.scrollTop;
      });
    }
  };

  // Auto-scroll to bottom when messages change or loading state changes
  useEffect(() => {
    const el = containerRef.current;
    if (el && shouldAutoScrollRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages, isLoading]);

  // Always scroll to bottom on initial load or when first message added
  useEffect(() => {
    const el = containerRef.current;
    if (el && messages.length <= 2) {
      shouldAutoScrollRef.current = true;
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages.length]);

  const isEmpty = messages.length === 0;

  return html`
    <div class="cw-messages" ref=${containerRef} onScroll=${handleScroll}>
      ${isEmpty && html`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${escapeHtml(emptyStateTitle)}</h3>
          <p>${escapeHtml(emptyStateMessage)}</p>
        </div>
      `}
      
      ${!isEmpty && hasMoreMessages && html`
        <div class="cw-load-more" onClick=${onLoadMore}>
          ${loadingMoreMessages 
            ? html`<span class="cw-spinner"></span><span>Loading...</span>`
            : html`<span>↑ Scroll up or click to load older messages</span>`
          }
        </div>
      `}
      
      ${messages.map((msg, index) => html`
        <${Message}
          key=${msg.id}
          msg=${msg}
          messageIndex=${index}
          debugMode=${debugMode}
          markdownParser=${markdownParser}
          onEdit=${onEditMessage}
          onRetry=${onRetryMessage}
          isLoading=${isLoading}
        />
      `)}
      
      ${isLoading && html`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `;
}

