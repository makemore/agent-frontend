/**
 * InputForm component - message input and send button
 * Supports multiline input with Shift+Enter for newlines, Enter to send
 * Shows a stop button when loading that can cancel the current run
 */

import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { escapeHtml } from '../utils/helpers.js';

export function InputForm({ onSend, onCancel, isLoading, placeholder, primaryColor }) {
  const [value, setValue] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const textareaRef = useRef(null);

  // Focus input when not loading
  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSend(value);
      setValue('');
      // Reset height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    // Enter without Shift sends the message
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
    // Shift+Enter allows newline (default behavior)
  };

  const handleButtonClick = (e) => {
    if (isLoading && onCancel) {
      e.preventDefault();
      onCancel();
    }
  };

  // Stop icon (square)
  const stopIcon = html`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `;

  return html`
    <form class="cw-input-form" onSubmit=${handleSubmit}>
      <textarea
        ref=${textareaRef}
        class="cw-input"
        placeholder=${escapeHtml(placeholder)}
        value=${value}
        onInput=${e => setValue(e.target.value)}
        onKeyDown=${handleKeyDown}
        disabled=${isLoading}
        rows="1"
      />
      <button
        type=${isLoading ? 'button' : 'submit'}
        class=${`cw-send-btn ${isLoading ? 'cw-send-btn-loading' : ''} ${isLoading && isHovering ? 'cw-send-btn-stop' : ''}`}
        style=${{ backgroundColor: isLoading && isHovering ? '#dc2626' : primaryColor }}
        onClick=${handleButtonClick}
        onMouseEnter=${() => setIsHovering(true)}
        onMouseLeave=${() => setIsHovering(false)}
        title=${isLoading ? 'Stop' : 'Send'}
      >
        ${isLoading
          ? (isHovering ? stopIcon : html`<span class="cw-spinner"></span>`)
          : '➤'
        }
      </button>
    </form>
  `;
}

