/**
 * InputForm component - message input, voice input, and send button
 * Supports multiline input with Shift+Enter for newlines, Enter to send
 * Shows a stop button when loading that can cancel the current run
 * Voice input uses Web Speech API for speech-to-text
 */

import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { escapeHtml, formatFileSize, getFileTypeIcon } from '../utils/helpers.js';

// Check if Web Speech API is available
const SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

export function InputForm({ onSend, onCancel, isLoading, placeholder, primaryColor, enableVoice = true, enableFiles = true }) {
  const [value, setValue] = useState('');
  const [files, setFiles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSupported] = useState(() => !!SpeechRecognition);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const shouldKeepListeningRef = useRef(false);  // Track if we should keep listening

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
      shouldKeepListeningRef.current = false;
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((value.trim() || files.length > 0) && !isLoading) {
      onSend(value, files);
      setValue('');
      setFiles([]);
      // Reset height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = (e) => {
    e.preventDefault();
    if (fileInputRef.current && !isLoading) {
      fileInputRef.current.click();
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

    shouldKeepListeningRef.current = true;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;  // Keep listening until manually stopped
    recognition.interimResults = true;
    recognition.lang = navigator.language || 'en-US';

    let finalTranscript = value; // Start with existing text
    let interimTranscript = '';

    recognition.onstart = () => {
      setIsRecording(true);
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
      // Don't stop on "no-speech" or "aborted" - just keep listening
      if (event.error === 'no-speech' || event.error === 'aborted') {
        console.log('[ChatWidget] Speech recognition:', event.error, '- continuing...');
        return;
      }
      console.warn('[ChatWidget] Speech recognition error:', event.error);
      shouldKeepListeningRef.current = false;
      setIsRecording(false);
      // Keep whatever text we have
      setValue(finalTranscript || value);
    };

    recognition.onend = () => {
      // If we should keep listening, restart (handles browser auto-stop after silence)
      if (shouldKeepListeningRef.current) {
        console.log('[ChatWidget] Recognition paused, restarting...');
        try {
          recognition.start();
          return;
        } catch (e) {
          console.warn('[ChatWidget] Could not restart recognition:', e);
        }
      }
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
    shouldKeepListeningRef.current = false;  // Signal to not restart
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

  // Paperclip/attach icon
  const attachIcon = html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `;

  const showVoiceButton = enableVoice && voiceSupported;
  const showAttachButton = enableFiles;

  return html`
    <form class="cw-input-form" onSubmit=${handleSubmit}>
      <input
        type="file"
        ref=${fileInputRef}
        style="display: none"
        multiple
        onChange=${handleFileSelect}
      />
      ${files.length > 0 && html`
        <div class="cw-file-chips">
          ${files.map((file, index) => html`
            <div class="cw-file-chip" key=${index}>
              <span class="cw-file-chip-icon">${getFileTypeIcon(file.type)}</span>
              <span class="cw-file-chip-name" title=${file.name}>${file.name.length > 20 ? file.name.substring(0, 17) + '...' : file.name}</span>
              <span class="cw-file-chip-size">(${formatFileSize(file.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${() => removeFile(index)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
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
      ${showAttachButton && html`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${triggerFileInput}
          disabled=${isLoading}
          title="Attach files"
        >
          ${attachIcon}
        </button>
      `}
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

