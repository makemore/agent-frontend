/**
 * ModelSelector component - dropdown for selecting LLM model with thinking toggle
 */

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import { escapeHtml } from '../utils/helpers.js';

export function ModelSelector({
  availableModels,
  selectedModel,
  onSelectModel,
  thinkingEnabled,
  onToggleThinking,
  disabled
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!availableModels || availableModels.length === 0) {
    return null;
  }

  const selectedModelInfo = availableModels.find(m => m.id === selectedModel);
  const displayName = selectedModelInfo?.name || 'Select Model';
  const supportsThinking = selectedModelInfo?.supports_thinking || false;

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (modelId) => {
    onSelectModel(modelId);
    setIsOpen(false);
  };

  const handleThinkingToggle = (e) => {
    e.stopPropagation();
    if (onToggleThinking && supportsThinking) {
      onToggleThinking(!thinkingEnabled);
    }
  };

  return html`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${handleToggle}
        disabled=${disabled}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${escapeHtml(displayName)}</span>
        <span class="cw-model-chevron">${isOpen ? '▲' : '▼'}</span>
      </button>

      ${supportsThinking && onToggleThinking && html`
        <button
          class="cw-thinking-toggle ${thinkingEnabled ? 'cw-thinking-enabled' : ''}"
          onClick=${handleThinkingToggle}
          disabled=${disabled}
          title=${thinkingEnabled ? 'Thinking enabled - click to disable' : 'Enable extended thinking'}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${isOpen && html`
        <div class="cw-model-dropdown">
          ${availableModels.map(model => html`
            <button
              key=${model.id}
              class="cw-model-option ${model.id === selectedModel ? 'cw-model-option-selected' : ''}"
              onClick=${() => handleSelect(model.id)}
            >
              <span class="cw-model-option-name">
                ${escapeHtml(model.name)}
                ${model.supports_thinking && html`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${escapeHtml(model.provider)}</span>
              ${model.description && html`
                <span class="cw-model-option-desc">${escapeHtml(model.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `;
}

