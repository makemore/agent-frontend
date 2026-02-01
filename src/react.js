/**
 * React-compatible exports for @makemore/agent-frontend
 * 
 * This module provides React-compatible components and hooks.
 * It uses preact/compat under the hood, which provides full React API compatibility.
 * 
 * Usage in React projects:
 * 
 *   import { ChatWidget, useChat, useModels } from '@makemore/agent-frontend/react';
 *   
 *   function App() {
 *     return (
 *       <ChatWidget 
 *         config={{
 *           backendUrl: 'https://api.example.com',
 *           agentKey: 'my-agent',
 *         }}
 *       />
 *     );
 *   }
 * 
 * Or use hooks directly for custom UI:
 * 
 *   import { useChat, createApiClient, mergeConfig } from '@makemore/agent-frontend/react';
 *   
 *   function CustomChat() {
 *     const config = mergeConfig({ backendUrl: '...', agentKey: '...' });
 *     const api = createApiClient(config, () => ({}), () => {});
 *     const chat = useChat(config, api, null);
 *     
 *     return (
 *       <div>
 *         {chat.messages.map(msg => <div key={msg.id}>{msg.content}</div>)}
 *         <button onClick={() => chat.sendMessage('Hello!')}>Send</button>
 *       </div>
 *     );
 *   }
 */

// Components
export { ChatWidget } from './components/ChatWidget.js';
export { Header } from './components/Header.js';
export { MessageList } from './components/MessageList.js';
export { Message } from './components/Message.js';
export { InputForm } from './components/InputForm.js';
export { Sidebar } from './components/Sidebar.js';
export { ModelSelector } from './components/ModelSelector.js';
export { TaskList } from './components/TaskList.js';

// Hooks
export { useChat } from './hooks/useChat.js';
export { useModels } from './hooks/useModels.js';
export { useTasks } from './hooks/useTasks.js';

// Utilities
export { createApiClient } from './utils/api.js';
export { mergeConfig, DEFAULT_CONFIG } from './utils/config.js';
export {
  generateId,
  createStorage,
  camelToSnake,
  snakeToCamel,
  keysToCamel,
  keysToSnake,
  parseMarkdown,
  formatDate,
  formatFileSize,
  getFileTypeIcon,
  getCSRFToken,
} from './utils/helpers.js';

// Re-export the imperative API for backwards compatibility
export { ChatWidget as ChatWidgetAPI } from './index.js';

// Default export is the main ChatWidget component
import { ChatWidget as ChatWidgetComponent } from './components/ChatWidget.js';
export default ChatWidgetComponent;

