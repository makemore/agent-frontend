/**
 * Utility functions for the chat widget
 */

// =============================================================================
// Case Conversion Utilities
// =============================================================================

/**
 * Convert a string from snake_case to camelCase
 */
export function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convert a string from camelCase to snake_case
 */
export function camelToSnake(str) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Recursively convert all keys in an object from snake_case to camelCase
 */
export function keysToCamel(obj) {
  if (Array.isArray(obj)) {
    return obj.map(keysToCamel);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        snakeToCamel(key),
        keysToCamel(value)
      ])
    );
  }
  return obj;
}

/**
 * Recursively convert all keys in an object from camelCase to snake_case
 */
export function keysToSnake(obj) {
  if (Array.isArray(obj)) {
    return obj.map(keysToSnake);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        camelToSnake(key),
        keysToSnake(value)
      ])
    );
  }
  return obj;
}

/**
 * Get a value from an object supporting both camelCase and snake_case keys
 */
export function getAnyCase(obj, camelKey) {
  if (!obj || typeof obj !== 'object') return undefined;
  if (camelKey in obj) return obj[camelKey];
  const snakeKey = camelToSnake(camelKey);
  if (snakeKey in obj) return obj[snakeKey];
  return undefined;
}

// =============================================================================
// ID Generation
// =============================================================================

export function generateId() {
  return 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

export function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  } catch (e) {
    return '';
  }
}

export function parseMarkdown(text, enhancedParser = null) {
  if (enhancedParser) {
    return enhancedParser(text);
  }
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

// Storage helpers
export function createStorage(prefix = '') {
  const storageKey = (key) => prefix ? `${key}_${prefix}` : key;
  
  return {
    get(key) {
      try { return localStorage.getItem(storageKey(key)); } catch (e) { return null; }
    },
    set(key, value) {
      try {
        const k = storageKey(key);
        value === null ? localStorage.removeItem(k) : localStorage.setItem(k, value);
      } catch (e) {}
    }
  };
}

// CSRF token helper
export function getCSRFToken(cookieName = 'csrftoken') {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  if (metaTag) {
    return metaTag.getAttribute('content');
  }
  return null;
}

// Format file size for display
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Get file type icon based on mime type
export function getFileTypeIcon(mimeType) {
  if (!mimeType) return '📄';
  if (mimeType.startsWith('image/')) return '🖼️';
  if (mimeType.startsWith('video/')) return '🎬';
  if (mimeType.startsWith('audio/')) return '🎵';
  if (mimeType.includes('pdf')) return '📕';
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel')) return '📊';
  if (mimeType.includes('document') || mimeType.includes('word')) return '📝';
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return '📽️';
  if (mimeType.includes('zip') || mimeType.includes('compressed')) return '🗜️';
  if (mimeType.includes('text/')) return '📄';
  return '📄';
}
