/**
 * Message component - renders a single chat message
 */

import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { escapeHtml, parseMarkdown, formatFileSize, getFileTypeIcon } from '../utils/helpers.js';

// Debug payload viewer component
function DebugPayload({ msg, show, onToggle }) {
  if (!show) {
    return html`
      <button
        class="cw-debug-payload-btn"
        onClick=${onToggle}
        title="Show message payload"
      >{ }</button>
    `;
  }

  return html`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${onToggle}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(msg, null, 2)}</pre>
    </div>
  `;
}

// Edit/Retry action buttons for user messages
function MessageActions({ onEdit, onRetry, isLoading }) {
  if (isLoading) return null;

  return html`
    <div class="cw-message-actions">
      <button
        class="cw-message-action-btn"
        onClick=${onEdit}
        title="Edit message"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
      <button
        class="cw-message-action-btn"
        onClick=${onRetry}
        title="Retry from here"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1 4 1 10 7 10"></polyline>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </svg>
      </button>
    </div>
  `;
}

// Inline edit form for editing a message
function InlineEditForm({ initialContent, onSave, onCancel }) {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(content.length, content.length);
      // Auto-resize
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, []);

  const handleInput = (e) => {
    setContent(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (content.trim()) {
        onSave(content.trim());
      }
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return html`
    <div class="cw-inline-edit">
      <textarea
        ref=${textareaRef}
        class="cw-inline-edit-input"
        value=${content}
        onInput=${handleInput}
        onKeyDown=${handleKeyDown}
        rows="1"
      />
      <div class="cw-inline-edit-actions">
        <button
          class="cw-inline-edit-btn cw-inline-edit-cancel"
          onClick=${onCancel}
          title="Cancel (Esc)"
        >Cancel</button>
        <button
          class="cw-inline-edit-btn cw-inline-edit-save"
          onClick=${() => content.trim() && onSave(content.trim())}
          disabled=${!content.trim()}
          title="Save & Resend (Enter)"
        >Save & Send</button>
      </div>
    </div>
  `;
}

export function Message({ msg, debugMode, markdownParser, onEdit, onRetry, isLoading, messageIndex }) {
  const [expanded, setExpanded] = useState(false);
  const [showPayload, setShowPayload] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const isUser = msg.role === 'user';
  const isSystem = msg.role === 'system';
  const isToolCall = msg.type === 'tool_call';
  const isToolResult = msg.type === 'tool_result';
  const isError = msg.type === 'error';
  const isSubAgentStart = msg.type === 'sub_agent_start';
  const isSubAgentEnd = msg.type === 'sub_agent_end';
  const isAgentContext = msg.type === 'agent_context';

  // Hide system messages unless debug mode is on
  if (isSystem && !debugMode) {
    return null;
  }

  // Sub-agent delegation messages - show as a distinct visual element
  if (isSubAgentStart || isSubAgentEnd || isAgentContext) {
    return html`
      <div class="cw-agent-context ${isSubAgentStart ? 'cw-agent-delegating' : ''} ${isSubAgentEnd ? 'cw-agent-returned' : ''}" style="position: relative;">
        <span class="cw-agent-context-icon">${isSubAgentStart ? '🔗' : isSubAgentEnd ? '✓' : '🤖'}</span>
        <span class="cw-agent-context-text">${msg.content}</span>
        ${msg.metadata?.agentName && html`
          <span class="cw-agent-context-name">${msg.metadata.agentName}</span>
        `}
        ${debugMode && html`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
      </div>
    `;
  }

  // Tool call/result: show compact inline version
  if (isToolCall || isToolResult) {
    const hasDetails = msg.metadata?.arguments || msg.metadata?.result;

    // Format details - handle case where data is already a JSON string
    const formatDetails = (data) => {
      if (typeof data === 'string') {
        try {
          // Try to parse and re-stringify for proper formatting
          return JSON.stringify(JSON.parse(data), null, 2);
        } catch {
          // Not valid JSON, return as-is
          return data;
        }
      }
      return JSON.stringify(data, null, 2);
    };

    return html`
      <div class="cw-tool-message ${isToolResult ? 'cw-tool-result' : 'cw-tool-call'}" style="position: relative;">
        <span class="cw-tool-label" onClick=${() => hasDetails && setExpanded(!expanded)}>
          ${msg.content}
          ${hasDetails && html`<span class="cw-tool-expand">${expanded ? '▼' : '▶'}</span>`}
        </span>
        ${expanded && hasDetails && html`
          <pre class="cw-tool-details">${escapeHtml(formatDetails(
            isToolCall ? msg.metadata.arguments : msg.metadata.result
          ))}</pre>
        `}
        ${debugMode && html`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
      </div>
    `;
  }

  const classes = [
    'cw-message',
    isUser && 'cw-message-user',
    isError && 'cw-message-error',
  ].filter(Boolean).join(' ');

  const rowClasses = `cw-message-row ${isUser ? 'cw-message-row-user' : ''}`;

  // Parse content
  let content = msg.role === 'assistant'
    ? parseMarkdown(msg.content, markdownParser)
    : escapeHtml(msg.content);

  // Check if message has file attachments
  const hasFiles = msg.files && msg.files.length > 0;

  // Render file attachments
  const renderAttachments = () => {
    if (!hasFiles) return null;

    return html`
      <div class="cw-message-attachments">
        ${msg.files.map(file => {
          const isImage = file.type && file.type.startsWith('image/');

          if (isImage) {
            return html`
              <a class="cw-attachment-thumbnail" href=${file.url} target="_blank" title=${file.name}>
                <img src=${file.url} alt=${file.name} />
              </a>
            `;
          }

          return html`
            <a class="cw-attachment-file" href=${file.url} target="_blank" title=${file.name}>
              <span class="cw-attachment-icon">${getFileTypeIcon(file.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${file.name}</span>
                <span class="cw-attachment-size">${formatFileSize(file.size)}</span>
              </span>
            </a>
          `;
        })}
      </div>
    `;
  };

  // Handle edit save
  const handleEditSave = (newContent) => {
    setIsEditing(false);
    if (onEdit && newContent !== msg.content) {
      onEdit(messageIndex, newContent);
    }
  };

  // Handle retry (resend same message)
  const handleRetry = () => {
    if (onRetry) {
      onRetry(messageIndex);
    }
  };

  // Show inline edit form for user messages in edit mode
  if (isUser && isEditing) {
    return html`
      <div class=${rowClasses} style="position: relative;">
        ${renderAttachments()}
        <${InlineEditForm}
          initialContent=${msg.content}
          onSave=${handleEditSave}
          onCancel=${() => setIsEditing(false)}
        />
      </div>
    `;
  }

  // Show edit/retry actions for user messages
  const showActions = isUser && onEdit && onRetry;

  return html`
    <div class="${rowClasses} ${showActions ? 'cw-message-row-with-actions' : ''}" style="position: relative;">
      ${renderAttachments()}
      <div class=${classes} dangerouslySetInnerHTML=${{ __html: content }} />
      ${showActions && html`
        <${MessageActions}
          onEdit=${() => setIsEditing(true)}
          onRetry=${handleRetry}
          isLoading=${isLoading}
        />
      `}
      ${debugMode && html`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
    </div>
  `;
}

