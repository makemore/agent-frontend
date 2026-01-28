/**
 * Chat Widget - Main Entry Point
 * 
 * Provides the same public API as the original vanilla JS version:
 * - ChatWidget.init(config) - Initialize singleton instance
 * - ChatWidget.createInstance(config) - Create multiple instances
 * - ChatWidget.open/close/send/etc - Control the widget
 */

import { render, h } from 'preact';
import { html } from 'htm/preact';
import { ChatWidget as ChatWidgetComponent } from './components/ChatWidget.js';
import { mergeConfig } from './utils/config.js';

// Track instances
const instances = new Map();
let instanceCounter = 0;
let defaultInstance = null;

/**
 * Widget instance wrapper - provides imperative API around the Preact component
 */
class ChatWidgetInstance {
  constructor(userConfig = {}) {
    this.instanceId = `cw-${++instanceCounter}`;
    this.config = mergeConfig(userConfig);
    this.container = null;
    this._state = {};
    this._apiRef = { current: null };

    instances.set(this.instanceId, this);
  }

  _handleStateChange = (state) => {
    this._state = state;
  };

  init() {
    if (this.config.containerId) {
      // Embedded mode: use existing container
      this.container = document.getElementById(this.config.containerId);
      if (!this.container) {
        console.error(`[ChatWidget] Container not found: ${this.config.containerId}`);
        return this;
      }
      this.container.classList.add('cw-container-embedded');
    } else {
      // Floating mode: create container
      this.container = document.createElement('div');
      this.container.id = this.instanceId;
      this.container.className = `cw-container cw-position-${this.config.position}`;
      document.body.appendChild(this.container);
    }

    // Render the Preact component
    this._render();

    console.log(`[ChatWidget] Instance ${this.instanceId} initialized`);
    return this;
  }

  _render(configOverrides = {}) {
    if (!this.container) return;
    render(
      html`<${ChatWidgetComponent}
        config=${{ ...this.config, ...configOverrides }}
        onStateChange=${this._handleStateChange}
        markdownParser=${ChatWidget._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,
      this.container
    );
  }

  destroy() {
    if (this.container) {
      render(null, this.container);
      
      if (this.config.containerId) {
        this.container.classList.remove('cw-container-embedded');
      } else {
        this.container.remove();
      }
      this.container = null;
    }

    instances.delete(this.instanceId);
    console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`);
  }

  // Public API methods - delegate to component via apiRef
  open() {
    if (this._apiRef.current) {
      this._apiRef.current.open();
    } else {
      this._render({ forceOpen: true });
    }
  }

  close() {
    if (this._apiRef.current) {
      this._apiRef.current.close();
    } else {
      this._render({ forceOpen: false });
    }
  }

  send(message) {
    if (this._apiRef.current) {
      this._apiRef.current.send(message);
    }
  }

  clearMessages() {
    if (this._apiRef.current) {
      this._apiRef.current.clearMessages();
    }
  }

  toggleTTS() {
    if (this._apiRef.current) {
      this._apiRef.current.toggleTTS();
    }
  }

  stopSpeech() {
    if (this._apiRef.current) {
      this._apiRef.current.stopSpeech();
    }
  }

  setAuth(config) {
    if (this._apiRef.current) {
      this._apiRef.current.setAuth(config);
    }
  }

  clearAuth() {
    if (this._apiRef.current) {
      this._apiRef.current.clearAuth();
    }
  }

  getState() {
    return { ...this._state };
  }

  getConfig() {
    return { ...this.config };
  }

  /**
   * Update metadata without destroying the widget.
   * This allows changing the agent_id or other metadata while preserving the chat history.
   */
  updateMetadata(newMetadata) {
    this.config.metadata = {
      ...this.config.metadata,
      ...newMetadata,
    };
    // Re-render with updated config
    this._render();
    console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`, newMetadata);
  }

  /**
   * Update config without destroying the widget.
   * Useful for changing settings like title, colors, etc.
   */
  updateConfig(configUpdates) {
    this.config = {
      ...this.config,
      ...configUpdates,
    };
    // Re-render with updated config
    this._render();
    console.log(`[ChatWidget] Instance ${this.instanceId} config updated`);
  }
}

// ============================================================================
// Public API
// ============================================================================

function createInstance(config = {}) {
  const instance = new ChatWidgetInstance(config);
  return instance.init();
}

function init(config = {}) {
  if (defaultInstance) {
    defaultInstance.destroy();
  }
  defaultInstance = createInstance(config);
  return defaultInstance;
}

function destroy() {
  if (defaultInstance) {
    defaultInstance.destroy();
    defaultInstance = null;
  }
}

// Proxy methods to default instance
function open() { if (defaultInstance) defaultInstance.open(); }
function close() { if (defaultInstance) defaultInstance.close(); }
function send(message) { if (defaultInstance) defaultInstance.send(message); }
function clearMessages() { if (defaultInstance) defaultInstance.clearMessages(); }
function toggleTTS() { if (defaultInstance) defaultInstance.toggleTTS(); }
function stopSpeech() { if (defaultInstance) defaultInstance.stopSpeech(); }
function setAuth(config) { if (defaultInstance) defaultInstance.setAuth(config); }
function clearAuth() { if (defaultInstance) defaultInstance.clearAuth(); }
function getState() { return defaultInstance ? defaultInstance.getState() : null; }
function getConfig() { return defaultInstance ? defaultInstance.getConfig() : null; }

// Export public API
const ChatWidget = {
  // Multi-instance API
  createInstance,
  getInstance: (id) => instances.get(id),
  getAllInstances: () => Array.from(instances.values()),

  // Singleton API (backwards compatible)
  init,
  destroy,
  open,
  close,
  send,
  clearMessages,
  toggleTTS,
  stopSpeech,
  setAuth,
  clearAuth,
  getState,
  getConfig,

  // For markdown plugin
  _enhancedMarkdownParser: null,
};

// Export for both module and global usage
export { ChatWidget };
export default ChatWidget;

// Also attach to window for script tag usage
if (typeof window !== 'undefined') {
  window.ChatWidget = ChatWidget;
}

