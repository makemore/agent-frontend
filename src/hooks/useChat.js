/**
 * Chat hook - manages messages, sending, and SSE streaming
 */

import { useState, useCallback, useRef, useEffect } from 'preact/hooks';
import { generateId } from '../utils/helpers.js';

export function useChat(config, api, storage) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversationId, setConversationId] = useState(() => storage?.get(config.conversationIdKey) || null);
  const [hasMoreMessages, setHasMoreMessages] = useState(false);
  const [loadingMoreMessages, setLoadingMoreMessages] = useState(false);
  const [messagesOffset, setMessagesOffset] = useState(0);

  const eventSourceRef = useRef(null);
  const currentRunIdRef = useRef(null);

  // Save conversation ID to storage when it changes
  useEffect(() => {
    if (conversationId) {
      storage?.set(config.conversationIdKey, conversationId);
    }
  }, [conversationId, config.conversationIdKey, storage]);

  const subscribeToEvents = useCallback(async (runId, token, onAssistantMessage) => {
    if (eventSourceRef.current) eventSourceRef.current.close();

    const eventPath = config.apiPaths.runEvents.replace('{runId}', runId);
    let url = `${config.backendUrl}${eventPath}`;
    if (token) url += `?anonymous_token=${encodeURIComponent(token)}`;

    const eventSource = new EventSource(url);
    eventSourceRef.current = eventSource;
    let assistantContent = '';

    eventSource.addEventListener('assistant.message', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('assistant.message', data.payload);
        const content = data.payload.content;
        if (content) {
          assistantContent += content;
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (last?.role === 'assistant' && last.id.startsWith('assistant-stream-')) {
              return [...prev.slice(0, -1), { ...last, content: assistantContent }];
            }
            return [...prev, {
              id: 'assistant-stream-' + Date.now(),
              role: 'assistant',
              content: assistantContent,
              timestamp: new Date(),
              type: 'message',
            }];
          });
        }
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    eventSource.addEventListener('tool.call', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('tool.call', data.payload);
        // Add tool call to messages
        setMessages(prev => [...prev, {
          id: 'tool-call-' + Date.now(),
          role: 'assistant',
          content: `🔧 ${data.payload.name}`,
          timestamp: new Date(),
          type: 'tool_call',
          metadata: {
            toolName: data.payload.name,
            arguments: data.payload.arguments,
            toolCallId: data.payload.id,
          },
        }]);
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    eventSource.addEventListener('tool.result', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('tool.result', data.payload);
        // Add tool result to messages
        const result = data.payload.result;
        const isError = result?.error;
        setMessages(prev => [...prev, {
          id: 'tool-result-' + Date.now(),
          role: 'system',
          content: isError ? `❌ ${result.error}` : `✓ Done`,
          timestamp: new Date(),
          type: 'tool_result',
          metadata: {
            toolName: data.payload.name,
            result: result,
            toolCallId: data.payload.tool_call_id,
          },
        }]);
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    // Handle custom events (e.g., UI control from builder agent)
    eventSource.addEventListener('custom', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('custom', data.payload);
        // Custom events can be used for UI control, agent switching, etc.
        if (data.payload?.type === 'ui_control') {
          // Emit a special callback for UI control events
          if (config.onUIControl) {
            config.onUIControl(data.payload);
          }
        }
        // Handle sub-agent context changes
        if (data.payload?.type === 'agent_context') {
          setMessages(prev => [...prev, {
            id: 'agent-context-' + Date.now(),
            role: 'system',
            content: `🔗 ${data.payload.agent_name || 'Sub-agent'} is now handling this request`,
            timestamp: new Date(),
            type: 'agent_context',
            metadata: {
              agentKey: data.payload.agent_key,
              agentName: data.payload.agent_name,
              action: data.payload.action,
            },
          }]);
        }
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    // Handle sub-agent invocation events
    eventSource.addEventListener('sub_agent.start', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('sub_agent.start', data.payload);
        setMessages(prev => [...prev, {
          id: 'sub-agent-start-' + Date.now(),
          role: 'system',
          content: `🔗 Delegating to ${data.payload.agent_name || data.payload.sub_agent_key || 'sub-agent'}...`,
          timestamp: new Date(),
          type: 'sub_agent_start',
          metadata: {
            subAgentKey: data.payload.sub_agent_key,
            agentName: data.payload.agent_name,
            invocationMode: data.payload.invocation_mode,
          },
        }]);
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    eventSource.addEventListener('sub_agent.end', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent('sub_agent.end', data.payload);
        setMessages(prev => [...prev, {
          id: 'sub-agent-end-' + Date.now(),
          role: 'system',
          content: `✓ ${data.payload.agent_name || 'Sub-agent'} completed`,
          timestamp: new Date(),
          type: 'sub_agent_end',
          metadata: {
            subAgentKey: data.payload.sub_agent_key,
            agentName: data.payload.agent_name,
          },
        }]);
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
    });

    const handleTerminal = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (config.onEvent) config.onEvent(data.type, data.payload);
        if (data.type === 'run.failed') {
          const errMsg = data.payload.error || 'Agent run failed';
          setError(errMsg);
          setMessages(prev => [...prev, {
            id: 'error-' + Date.now(),
            role: 'system',
            content: `❌ Error: ${errMsg}`,
            timestamp: new Date(),
            type: 'error',
          }]);
        }
      } catch (err) { console.error('[ChatWidget] Parse error:', err); }
      setIsLoading(false);
      eventSource.close();
      eventSourceRef.current = null;
      if (assistantContent && onAssistantMessage) {
        onAssistantMessage(assistantContent);
      }
    };

    eventSource.addEventListener('run.succeeded', handleTerminal);
    eventSource.addEventListener('run.failed', handleTerminal);
    eventSource.addEventListener('run.cancelled', handleTerminal);
    eventSource.addEventListener('run.timed_out', handleTerminal);

    eventSource.onerror = () => {
      setIsLoading(false);
      eventSource.close();
      eventSourceRef.current = null;
    };
  }, [config]);

  const sendMessage = useCallback(async (content, options = {}) => {
    if (!content.trim() || isLoading) return;

    const { model, onAssistantMessage } = typeof options === 'function'
      ? { onAssistantMessage: options }
      : options;

    setIsLoading(true);
    setError(null);

    const userMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
      type: 'message',
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const token = await api.getOrCreateSession();

      const requestBody = {
        agentKey: config.agentKey,
        conversationId: conversationId,
        messages: [{ role: 'user', content: content.trim() }],
        metadata: { ...config.metadata, journeyType: config.defaultJourneyType },
      };

      // Include model if specified
      if (model) {
        requestBody.model = model;
      }

      const response = await fetch(`${config.backendUrl}${config.apiPaths.runs}`, api.getFetchOptions({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      }));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const run = await response.json();
      currentRunIdRef.current = run.id;
      const runConversationId = run.conversationId || run.conversation_id;
      if (!conversationId && runConversationId) {
        setConversationId(runConversationId);
      }

      await subscribeToEvents(run.id, token, onAssistantMessage);
    } catch (err) {
      setError(err.message || 'Failed to send message');
      setIsLoading(false);
    } finally {
      currentRunIdRef.current = null;
    }
  }, [config, api, conversationId, isLoading, subscribeToEvents]);

  const cancelRun = useCallback(async () => {
    const runId = currentRunIdRef.current;
    if (!runId || !isLoading) return;

    try {
      // Build the cancel URL - replace {runId} placeholder or append to runs path
      const cancelPath = config.apiPaths.cancelRun
        ? config.apiPaths.cancelRun.replace('{runId}', runId)
        : `${config.apiPaths.runs}${runId}/cancel/`;

      const response = await fetch(`${config.backendUrl}${cancelPath}`, api.getFetchOptions({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }));

      if (response.ok) {
        // Close the event source immediately
        if (eventSourceRef.current) {
          eventSourceRef.current.close();
          eventSourceRef.current = null;
        }
        setIsLoading(false);
        currentRunIdRef.current = null;

        // Add a cancelled message
        setMessages(prev => [...prev, {
          id: 'cancelled-' + Date.now(),
          role: 'system',
          content: '⏹ Run cancelled',
          timestamp: new Date(),
          type: 'cancelled',
        }]);
      }
    } catch (err) {
      console.error('[ChatWidget] Failed to cancel run:', err);
    }
  }, [config, api, isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setConversationId(null);
    setError(null);
    setHasMoreMessages(false);
    setMessagesOffset(0);
    storage?.set(config.conversationIdKey, null);
  }, [config.conversationIdKey, storage]);

  // Map API message format to internal message format with proper types
  const mapApiMessage = (m) => {
    const base = {
      id: generateId(),
      role: m.role,
      timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
    };

    // Tool result messages (role: "tool")
    if (m.role === 'tool') {
      return {
        ...base,
        role: 'system',
        content: '✓ Done',
        type: 'tool_result',
        metadata: {
          result: m.content,
          toolCallId: m.tool_call_id,
        },
      };
    }

    // Assistant messages with tool calls
    if (m.role === 'assistant' && m.tool_calls && m.tool_calls.length > 0) {
      // Return an array of tool call messages (will be flattened)
      return m.tool_calls.map(tc => ({
        id: generateId(),
        role: 'assistant',
        content: `🔧 ${tc.function?.name || tc.name || 'tool'}`,
        timestamp: base.timestamp,
        type: 'tool_call',
        metadata: {
          toolName: tc.function?.name || tc.name,
          arguments: tc.function?.arguments || tc.arguments,
          toolCallId: tc.id,
        },
      }));
    }

    // Skip empty assistant messages (e.g., tool-call-only responses)
    const content = typeof m.content === 'string' ? m.content : JSON.stringify(m.content);
    if (m.role === 'assistant' && !content?.trim()) {
      return null; // Will be filtered out
    }

    // Regular messages
    return {
      ...base,
      content,
      type: 'message',
    };
  };

  const loadConversation = useCallback(async (convId) => {
    setIsLoading(true);
    setMessages([]);
    setConversationId(convId);

    try {
      const token = await api.getOrCreateSession();
      const limit = 10;
      const url = `${config.backendUrl}${config.apiPaths.conversations}${convId}/?limit=${limit}&offset=0`;

      const response = await fetch(url, api.getFetchOptions({ method: 'GET' }));

      if (response.ok) {
        const conversation = await response.json();
        if (conversation.messages) {
          // Use flatMap to handle tool_calls which return arrays, filter out nulls (empty messages)
          setMessages(conversation.messages.flatMap(mapApiMessage).filter(Boolean));
        }
        setHasMoreMessages(conversation.has_more || conversation.hasMore || false);
        setMessagesOffset(conversation.messages?.length || 0);
      } else if (response.status === 404) {
        setConversationId(null);
        storage?.set(config.conversationIdKey, null);
      }
    } catch (err) {
      console.error('[ChatWidget] Failed to load conversation:', err);
    } finally {
      setIsLoading(false);
    }
  }, [config, api, storage]);

  const loadMoreMessages = useCallback(async () => {
    if (!conversationId || loadingMoreMessages || !hasMoreMessages) return;

    setLoadingMoreMessages(true);

    try {
      const limit = 10;
      const url = `${config.backendUrl}${config.apiPaths.conversations}${conversationId}/?limit=${limit}&offset=${messagesOffset}`;

      const response = await fetch(url, api.getFetchOptions({ method: 'GET' }));

      if (response.ok) {
        const conversation = await response.json();
        if (conversation.messages?.length > 0) {
          // Use flatMap to handle tool_calls which return arrays, filter out nulls (empty messages)
          const olderMessages = conversation.messages.flatMap(mapApiMessage).filter(Boolean);
          setMessages(prev => [...olderMessages, ...prev]);
          // Use original message count for offset, not flattened count
          setMessagesOffset(prev => prev + conversation.messages.length);
          setHasMoreMessages(conversation.has_more || conversation.hasMore || false);
        } else {
          setHasMoreMessages(false);
        }
      }
    } catch (err) {
      console.error('[ChatWidget] Failed to load more messages:', err);
    } finally {
      setLoadingMoreMessages(false);
    }
  }, [config, api, conversationId, messagesOffset, loadingMoreMessages, hasMoreMessages]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  return {
    messages,
    isLoading,
    error,
    conversationId,
    hasMoreMessages,
    loadingMoreMessages,
    sendMessage,
    cancelRun,
    clearMessages,
    loadConversation,
    loadMoreMessages,
    setConversationId,
  };
}

