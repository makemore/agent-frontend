/**
 * API utilities for the chat widget
 */

import { getCSRFToken, keysToSnake, keysToCamel } from './helpers.js';

export function createApiClient(config, getState, setState) {
  /**
   * Transform request body based on apiCaseStyle config
   */
  const transformRequest = (body) => {
    if (!body || typeof body !== 'object') return body;
    // For 'snake' or 'auto', convert to snake_case
    // For 'camel', keep as-is (frontend already uses camelCase)
    if (config.apiCaseStyle === 'camel') return body;
    return keysToSnake(body);
  };

  /**
   * Transform response data based on apiCaseStyle config
   * For 'auto', we normalize to camelCase for consistent internal use
   */
  const transformResponse = (data) => {
    if (!data || typeof data !== 'object') return data;
    // For 'camel' or 'auto', normalize to camelCase
    // For 'snake', keep as-is (but this is unusual for frontend)
    if (config.apiCaseStyle === 'snake') return data;
    return keysToCamel(data);
  };
  const getAuthStrategy = () => {
    if (config.authStrategy) return config.authStrategy;
    if (config.authToken) return 'token';
    if (config.apiPaths.anonymousSession || config.anonymousSessionEndpoint) return 'anonymous';
    return 'none';
  };

  const getAuthHeaders = (overrideToken = null) => {
    const strategy = getAuthStrategy();
    const headers = {};
    // Use override token if provided (fixes race condition with async state updates)
    const token = overrideToken || config.authToken || getState().authToken;

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

  const getFetchOptions = (options = {}, overrideToken = null) => {
    const strategy = getAuthStrategy();
    const fetchOptions = { ...options };
    const authHeaders = getAuthHeaders(overrideToken);
    console.log('[ChatWidget] getFetchOptions - strategy:', strategy, 'overrideToken:', overrideToken, 'authHeaders:', authHeaders);
    fetchOptions.headers = { ...fetchOptions.headers, ...authHeaders };
    if (strategy === 'session') fetchOptions.credentials = 'include';
    return fetchOptions;
  };

  const getOrCreateSession = async (forceRefresh = false) => {
    const strategy = getAuthStrategy();
    const state = getState();
    const storageKey = config.anonymousTokenKey || config.sessionTokenKey;

    if (strategy !== 'anonymous') return config.authToken || state.authToken;

    // If not forcing refresh, try existing tokens
    if (!forceRefresh) {
      if (state.authToken) return state.authToken;
      const stored = state.storage?.get(storageKey);
      if (stored) {
        setState(s => ({ ...s, authToken: stored }));
        return stored;
      }
    }

    // Fetch new token (either first time or forced refresh)
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

  // Clear stored token (call on 401 to force refresh)
  const clearSession = () => {
    const storageKey = config.anonymousTokenKey || config.sessionTokenKey;
    const state = getState();
    setState(s => ({ ...s, authToken: null }));
    state.storage?.set(storageKey, null);
  };

  return {
    getAuthStrategy,
    getAuthHeaders,
    getFetchOptions,
    getOrCreateSession,
    clearSession,
    transformRequest,
    transformResponse,
  };
}

