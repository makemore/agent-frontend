/**
 * API utilities for the chat widget
 */

import { getCSRFToken } from './helpers.js';

export function createApiClient(config, getState, setState) {
  const getAuthStrategy = () => {
    if (config.authStrategy) return config.authStrategy;
    if (config.authToken) return 'token';
    if (config.apiPaths.anonymousSession || config.anonymousSessionEndpoint) return 'anonymous';
    return 'none';
  };

  const getAuthHeaders = () => {
    const strategy = getAuthStrategy();
    const headers = {};
    const token = config.authToken || getState().authToken;

    if (strategy === 'token' && token) {
      const headerName = config.authHeader || 'Authorization';
      const prefix = config.authTokenPrefix !== undefined ? config.authTokenPrefix : 'Token';
      headers[headerName] = prefix ? `${prefix} ${token}` : token;
    } else if (strategy === 'jwt' && token) {
      const headerName = config.authHeader || 'Authorization';
      const prefix = config.authTokenPrefix !== undefined ? config.authTokenPrefix : 'Bearer';
      headers[headerName] = prefix ? `${prefix} ${token}` : token;
    } else if (strategy === 'anonymous' && token) {
      const headerName = config.authHeader || config.anonymousTokenHeader || 'X-Anonymous-Token';
      headers[headerName] = token;
    }

    if (strategy === 'session') {
      const csrfToken = getCSRFToken(config.csrfCookieName);
      if (csrfToken) {
        headers['X-CSRFToken'] = csrfToken;
      }
    }

    return headers;
  };

  const getFetchOptions = (options = {}) => {
    const strategy = getAuthStrategy();
    const fetchOptions = { ...options };
    fetchOptions.headers = { ...fetchOptions.headers, ...getAuthHeaders() };
    if (strategy === 'session') fetchOptions.credentials = 'include';
    return fetchOptions;
  };

  const getOrCreateSession = async () => {
    const strategy = getAuthStrategy();
    const state = getState();
    
    if (strategy !== 'anonymous') return config.authToken || state.authToken;
    if (state.authToken) return state.authToken;

    const storageKey = config.anonymousTokenKey || config.sessionTokenKey;
    const stored = state.storage?.get(storageKey);
    if (stored) {
      setState(s => ({ ...s, authToken: stored }));
      return stored;
    }

    try {
      const endpoint = config.anonymousSessionEndpoint || config.apiPaths.anonymousSession;
      const response = await fetch(`${config.backendUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setState(s => ({ ...s, authToken: data.token }));
        state.storage?.set(storageKey, data.token);
        return data.token;
      }
    } catch (e) {
      console.warn('[ChatWidget] Failed to create session:', e);
    }
    return null;
  };

  return {
    getAuthStrategy,
    getAuthHeaders,
    getFetchOptions,
    getOrCreateSession,
  };
}

