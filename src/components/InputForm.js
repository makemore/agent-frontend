/**
 * InputForm component - message input, voice input, and send button
 * Supports multiline input with Shift+Enter for newlines, Enter to send
 * Shows a stop button when loading that can cancel the current run
 * Voice input uses Web Speech API for speech-to-text
 */

import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { escapeHtml } from '../utils/helpers.js';

// Check if Web Speech API is available
const SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

export function InputForm({ onSend, onCancel, isLoading, placeholder, primaryColor, enableVoice = true }) {
  const [value, setValue] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSupported] = useState(() => !!SpeechRecognition);
  const textareaRef = useRef(null);
  const recognitionRef = useRef(null);

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

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

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

  const startRecording = () => {
    if (!SpeechRecognition || isLoading) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = navigator.language || 'en-US';

    let finalTranscript = '';
    let interimTranscript = '';

    recognition.onstart = () => {
      setIsRecording(true);
      finalTranscript = value; // Start with existing text
    };

    recognition.onresult = (event) => {
      interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += (finalTranscript ? ' ' : '') + transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      // Show both final and interim results
      setValue(finalTranscript + (interimTranscript ? ' ' + interimTranscript : ''));
    };

    recognition.onerror = (event) => {
      console.warn('[ChatWidget] Speech recognition error:', event.error);
      setIsRecording(false);
      // Keep whatever text we have
      setValue(finalTranscript || value);
    };

    recognition.onend = () => {
      setIsRecording(false);
      // Ensure we have the final transcript
      if (finalTranscript) {
        setValue(finalTranscript);
      }
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const toggleRecording = (e) => {
    e.preventDefault();
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Stop icon (square)
  const stopIcon = html`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `;

  // Microphone icon
  const micIcon = html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `;

  const showVoiceButton = enableVoice && voiceSupported;

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
      ${showVoiceButton && html`
        <button
          type="button"
          class=${`cw-voice-btn ${isRecording ? 'cw-voice-btn-recording' : ''}`}
          onClick=${toggleRecording}
          disabled=${isLoading}
          title=${isRecording ? 'Stop recording' : 'Voice input'}
        >
          ${micIcon}
        </button>
      `}
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

