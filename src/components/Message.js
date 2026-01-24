/**
 * Message component - renders a single chat message
 */

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import { escapeHtml, parseMarkdown } from '../utils/helpers.js';

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

export function Message({ msg, debugMode, markdownParser }) {
  const [expanded, setExpanded] = useState(false);
  const [showPayload, setShowPayload] = useState(false);

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

  return html`
    <div class=${rowClasses} style="position: relative;">
      <div class=${classes} dangerouslySetInnerHTML=${{ __html: content }} />
      ${debugMode && html`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
    </div>
  `;
}

