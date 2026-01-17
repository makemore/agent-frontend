# Agent Frontend

A standalone, zero-dependency chat widget for AI agents. Embed conversational AI into any website with a single script tag.

<p align="center">
  <img src="https://img.shields.io/badge/vanilla-JavaScript-yellow" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/size-~15kb-green" alt="Size">
  <img src="https://img.shields.io/badge/dependencies-0-blue" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/license-MIT-purple" alt="MIT License">
</p>

## Why Agent Frontend?

Most chat widgets are tightly coupled to specific frameworks or require complex build setups. Agent Frontend is different:

- **Zero dependencies** - Pure vanilla JavaScript, no React/Vue/Angular required
- **CSS isolated** - Won't conflict with your existing styles (uses `all: initial` reset)
- **SSE streaming** - Real-time token-by-token responses, not polling
- **Production ready** - Session management, error handling, conversation persistence

## Features

| Feature | Description |
|---------|-------------|
| 💬 **Real-time Streaming** | SSE-based message streaming for instant, token-by-token responses |
| 🎨 **Theming** | Customize colors, titles, messages, and position |
| 🌙 **Dark Mode** | Automatic dark mode based on system preferences |
| 📱 **Responsive** | Works seamlessly on desktop and mobile |
| 🔧 **Debug Mode** | Toggle visibility of tool calls and results |
| 🤖 **Demo Flows** | Built-in auto-run mode for showcasing agent journeys |
| 🔒 **Sessions** | Automatic anonymous session creation and management |
| 💾 **Persistence** | Conversations persist across page reloads via localStorage |
| 🛡️ **Isolated CSS** | Scoped styles that won't leak into or from your page |

## Installation

### Via npm

```bash
npm install @makemore/agent-frontend
```

Then include in your HTML:

```html
<link rel="stylesheet" href="node_modules/@makemore/agent-frontend/dist/chat-widget.css">
<script src="node_modules/@makemore/agent-frontend/dist/chat-widget.js"></script>
```

### Via CDN (unpkg)

```html
<link rel="stylesheet" href="https://unpkg.com/@makemore/agent-frontend/dist/chat-widget.css">
<script src="https://unpkg.com/@makemore/agent-frontend/dist/chat-widget.js"></script>
```

### Via CDN (jsDelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@makemore/agent-frontend/dist/chat-widget.css">
<script src="https://cdn.jsdelivr.net/npm/@makemore/agent-frontend/dist/chat-widget.js"></script>
```

### Optional: Enhanced Markdown Support

For full-featured markdown rendering (tables, code blocks with syntax highlighting, etc.), include the optional markdown addon:

```html
<!-- Core widget -->
<link rel="stylesheet" href="https://unpkg.com/@makemore/agent-frontend/dist/chat-widget.css">
<script src="https://unpkg.com/@makemore/agent-frontend/dist/chat-widget.js"></script>

<!-- Optional: Enhanced markdown with marked.js -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://unpkg.com/@makemore/agent-frontend/dist/chat-widget-markdown.js"></script>

<!-- Optional: Syntax highlighting for code blocks -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"></script>
```

The widget automatically detects and uses the enhanced markdown parser if available. Without it, a basic markdown parser is used.

## Quick Start

### Initialize the widget

```html
<script>
  ChatWidget.init({
    backendUrl: 'https://your-api.com',
    agentKey: 'your-agent',
    title: 'Support Chat',
    primaryColor: '#0066cc',
  });
</script>
```

### With custom API paths

```html
<script>
  ChatWidget.init({
    backendUrl: 'https://your-api.com',
    agentKey: 'your-agent',
    title: 'Support Chat',
    primaryColor: '#0066cc',
    apiPaths: {
      anonymousSession: '/api/auth/session/',
      runs: '/api/chat/runs/',
      runEvents: '/api/chat/runs/{runId}/events/',
    },
  });
</script>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `backendUrl` | string | `'http://localhost:8000'` | Backend API URL |
| `agentKey` | string | `'insurance-agent'` | Agent identifier |
| `title` | string | `'Chat Assistant'` | Widget header title |
| `subtitle` | string | `'How can we help you today?'` | Widget subtitle |
| `primaryColor` | string | `'#0066cc'` | Primary theme color |
| `position` | string | `'bottom-right'` | Widget position (`bottom-right` or `bottom-left`) |
| `defaultJourneyType` | string | `'general'` | Default journey type |
| `enableDebugMode` | boolean | `true` | Show debug toggle button |
| `enableAutoRun` | boolean | `true` | Show demo flows dropdown |
| `placeholder` | string | `'Type your message...'` | Input placeholder text |
| `emptyStateTitle` | string | `'Start a Conversation'` | Empty state heading |
| `emptyStateMessage` | string | `'Send a message to get started.'` | Empty state description |
| `journeyTypes` | object | `{}` | Journey type definitions for demo flows |
| `anonymousTokenHeader` | string | `'X-Anonymous-Token'` | Header name for auth token |
| `conversationIdKey` | string | `'chat_widget_conversation_id'` | localStorage key for conversation ID |
| `sessionTokenKey` | string | `'chat_widget_session_token'` | localStorage key for session token |
| `apiPaths` | object | See below | API endpoint paths (customizable for different backends) |
| `autoRunMode` | string | `'automatic'` | Demo flow mode: `'automatic'`, `'confirm'`, or `'manual'` |
| `autoRunDelay` | number | `1000` | Delay in milliseconds before auto-generating next message (automatic mode) |

### Demo Flow Control

The widget supports three modes for demo flows:

- **Automatic** (`autoRunMode: 'automatic'`): Continuously generates customer responses with a configurable delay
- **Confirm Next** (`autoRunMode: 'confirm'`): Pauses after each assistant response and waits for user to click "Continue"
- **Manual** (`autoRunMode: 'manual'`): Stops auto-generation; user must manually type responses

These settings can be changed in real-time via the demo controls dropdown (visible when a demo is running).

```javascript
ChatWidget.init({
  autoRunMode: 'confirm',  // Start in confirm mode
  autoRunDelay: 2000,      // 2 second delay in automatic mode
});

// Change mode programmatically
ChatWidget.setAutoRunMode('automatic');
ChatWidget.setAutoRunDelay(500);  // 0.5 second delay
```

### API Paths Configuration

The `apiPaths` option allows you to customize the backend API endpoints. This is useful when integrating with different backend frameworks or URL structures.

**Default values:**
```javascript
apiPaths: {
  anonymousSession: '/api/accounts/anonymous-session/',
  runs: '/api/agent-runtime/runs/',
  runEvents: '/api/agent-runtime/runs/{runId}/events/',
  simulateCustomer: '/api/agent-runtime/simulate-customer/',
}
```

**Example - Custom Django backend:**
```javascript
ChatWidget.init({
  backendUrl: 'https://your-api.com',
  agentKey: 'chat-agent',
  apiPaths: {
    anonymousSession: '/api/ai/agent/anonymous-session/',
    runs: '/api/ai/agent/runs/',
    runEvents: '/api/ai/agent/runs/{runId}/events/',
    // simulateCustomer uses default value
  },
});
```

You only need to specify the paths you want to override; unspecified paths will use the defaults.

## Journey Types Configuration

Define demo flows that users can trigger from the dropdown:

```javascript
ChatWidget.init({
  // ... other options
  journeyTypes: {
    quote: {
      label: '🏠 Get a Quote',
      description: 'Get an insurance quote',
      initialMessage: "Hi, I'd like to get a quote for home insurance.",
    },
    claim: {
      label: '📋 File a Claim',
      description: 'File an insurance claim',
      initialMessage: 'Hi, I need to file a claim.',
    },
  },
});
```

## JavaScript API

### Methods

```javascript
// Initialize the widget
ChatWidget.init(config);

// Open the chat widget
ChatWidget.open();

// Close the chat widget
ChatWidget.close();

// Send a message programmatically
ChatWidget.send('Hello, I need help!');

// Clear the conversation
ChatWidget.clearMessages();

// Start a demo flow
ChatWidget.startDemoFlow('quote');

// Stop demo flow
ChatWidget.stopAutoRun();

// Continue demo flow (when in confirm mode and paused)
ChatWidget.continueAutoRun();

// Change demo flow mode
ChatWidget.setAutoRunMode('automatic');  // 'automatic', 'confirm', or 'manual'

// Change auto-run delay (in milliseconds)
ChatWidget.setAutoRunDelay(2000);

// Remove the widget from the page
ChatWidget.destroy();

// Get current state (read-only)
const state = ChatWidget.getState();

// Get current config (read-only)
const config = ChatWidget.getConfig();
```

## Markdown Support

The widget includes built-in markdown rendering for assistant messages:

### Basic Markdown (Built-in)

The widget includes a lightweight markdown parser that supports:
- **Bold** (`**text**` or `__text__`)
- *Italic* (`*text*` or `_text_`)
- `Inline code` (`` `code` ``)
- [Links](url) (`[text](url)`)
- Lists (`- item` or `* item`)
- Line breaks

### Enhanced Markdown (Optional)

Include `chat-widget-markdown.js` for full-featured markdown:
- **Tables** - Full GFM table support
- **Code blocks** - Multi-line code with syntax highlighting
- **Blockquotes** - `> quoted text`
- **Headings** - `# H1` through `###### H6`
- **Horizontal rules** - `---` or `***`
- **Task lists** - `- [ ] todo` and `- [x] done`
- **Strikethrough** - `~~text~~`

**Supported languages for syntax highlighting:**
Add highlight.js language modules as needed (JavaScript, Python, TypeScript, Go, Rust, etc.)

## Backend Requirements

The widget expects a backend API with the following endpoints:

### Create Anonymous Session
```
POST /api/accounts/anonymous-session/
Response: { "token": "..." }
```

### Create Agent Run
```
POST /api/agent-runtime/runs/
Headers: { "X-Anonymous-Token": "..." }
Body: {
  "agentKey": "...",
  "conversationId": "...",
  "messages": [{ "role": "user", "content": "..." }],
  "metadata": { "journey_type": "..." }
}
Response: { "id": "...", "conversationId": "..." }
```

### SSE Events Stream
```
GET /api/agent-runtime/runs/{runId}/events/?anonymous_token=...
Events: assistant.message, tool.call, tool.result, run.succeeded, run.failed
```

### Simulate Customer (for demo flows)
```
POST /api/agent-runtime/simulate-customer/
Body: { "messages": [...], "journey_type": "..." }
Response: { "response": "..." }
```

## CSS Isolation

The widget uses multiple techniques to prevent style conflicts:

```css
.cw-container {
  all: initial;           /* Reset all inherited styles */
  /* ... widget styles scoped here */
}

.cw-container *,
.cw-container *::before,
.cw-container *::after {
  box-sizing: border-box; /* Consistent box model */
}
```

- All CSS classes prefixed with `cw-`
- CSS variables scoped to `.cw-container`, not `:root`
- High z-index (99999) to stay above host page content
- Font smoothing reset for consistent text rendering

## Development

```bash
# Clone and serve locally
git clone <repo-url>
cd agent-frontend
python -m http.server 8080

# Open http://localhost:8080/demo.html
```

### File Structure

```
agent-frontend/
├── dist/
│   ├── chat-widget.js    # Main library (~750 lines, ~15kb)
│   └── chat-widget.css   # Styles (~500 lines, ~8kb)
├── demo.html             # Interactive demo page
└── README.md
```

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 11+ |
| Edge | 79+ |

Requires: `EventSource` (SSE), `fetch`, `localStorage`

## License

MIT © 2024
