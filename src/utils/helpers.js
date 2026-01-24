/**
 * Utility functions for the chat widget
 */

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

