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
| 🔊 **Text-to-Speech** | ElevenLabs integration with secure Django proxy support |
| 🎨 **Theming** | Customize colors, titles, messages, and position |
| 🌙 **Dark Mode** | Automatic dark mode based on system preferences |
| 📱 **Responsive** | Works seamlessly on desktop and mobile |
| 🔧 **Debug Mode** | Toggle visibility of tool calls and results |
| 🤖 **Demo Flows** | Built-in auto-run mode with automatic, confirm, and manual modes |
| 🔒 **Sessions** | Automatic anonymous session creation and management |
| 💾 **Persistence** | Conversations persist across page reloads via localStorage |
| 🛡️ **Isolated CSS** | Scoped styles that won't leak into or from your page |
| 🎯 **Configurable APIs** | Customize backend endpoints to match your server structure |
| 📝 **Enhanced Markdown** | Optional rich markdown with tables, code blocks, and syntax highlighting |

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

### Basic Setup

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

### With Text-to-Speech (Recommended: Django Proxy)

```html
<script>
  ChatWidget.init({
    backendUrl: 'https://your-api.com',
    agentKey: 'your-agent',
    title: 'Voice-Enabled Chat',
    primaryColor: '#0066cc',
    enableTTS: true,
    ttsProxyUrl: 'https://your-api.com/api/tts/speak/',
  });
</script>
```

See `django-tts-example.py` for the complete Django backend implementation.

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
      simulateCustomer: '/api/chat/simulate-customer/',
      ttsVoices: '/api/tts/voices/',           // For voice settings UI (proxy mode)
      ttsSetVoice: '/api/tts/set-voice/',      // For voice settings UI (proxy mode)
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
| `enableTTS` | boolean | `false` | Enable text-to-speech for messages |
| `ttsProxyUrl` | string | `null` | Django proxy URL for TTS (recommended for security) |
| `elevenLabsApiKey` | string | `null` | ElevenLabs API key (only if not using proxy) |
| `ttsVoices` | object | `{ assistant: null, user: null }` | Voice IDs (only if not using proxy) |
| `ttsModel` | string | `'eleven_turbo_v2_5'` | ElevenLabs model (only if not using proxy) |
| `ttsSettings` | object | See below | ElevenLabs voice settings (only if not using proxy) |
| `availableVoices` | array | `[]` | List of available voices (auto-populated from ElevenLabs API) |
| `showClearButton` | boolean | `true` | Show clear conversation button in header |
| `showDebugButton` | boolean | `true` | Show debug mode toggle button in header |
| `showTTSButton` | boolean | `true` | Show TTS toggle button in header |
| `showVoiceSettings` | boolean | `true` | Show voice settings button in header (works with proxy and direct API) |
| `showExpandButton` | boolean | `true` | Show expand/minimize button in header |
| `onEvent` | function | `null` | Callback for SSE events: `(eventType, payload) => void` |

### Event Callback

The `onEvent` callback allows your application to react to all SSE events from the agent:

```javascript
ChatWidget.init({
  backendUrl: 'http://localhost:8000',
  agentKey: 'your-agent',
  onEvent: (eventType, payload) => {
    console.log('Event:', eventType, payload);

    // Example: Navigate when a session is created
    if (eventType === 'tool.result' && payload.result?.session_id) {
      window.location.href = `/session/${payload.result.session_id}`;
    }

    // Example: Track tool usage
    if (eventType === 'tool.call') {
      analytics.track('Tool Called', { tool: payload.name });
    }
  },
});
```

**Event Types:**
- `assistant.message` - Streaming assistant responses (payload: `{ content: string }`)
- `tool.call` - Tool being called (payload: `{ name: string, arguments: object }`)
- `tool.result` - Tool result (payload: `{ result: any }`)
- `run.succeeded` - Run completed successfully
- `run.failed` - Run failed (payload: `{ error: string }`)
- `run.cancelled` - Run was cancelled
- `run.timed_out` - Run timed out
- Custom events emitted by your agent

### Text-to-Speech (ElevenLabs)

Add realistic voice narration to your chat widget using ElevenLabs. Two integration options:

#### Option 1: Secure Django Proxy (Recommended)

Keep your API key secure on the server:

```javascript
ChatWidget.init({
  enableTTS: true,
  ttsProxyUrl: 'https://your-backend.com/api/tts/speak/',
  // No API key or voice IDs needed - configured on server
});
```

**Django Setup:**

See `django-tts-example.py` for a complete Django REST Framework implementation. Quick setup:

1. Install: `pip install requests`
2. Add to `settings.py`:
```python
ELEVENLABS_API_KEY = 'your_api_key_here'
ELEVENLABS_VOICES = {
    'assistant': 'EXAVITQu4vr4xnSDxMaL',  # Bella
    'user': 'pNInz6obpgDQGcFmaJgB',       # Adam
}
```
3. Add views from `django-tts-example.py` to your Django app
4. Add URL routes:
```python
path('api/tts/speak/', views.text_to_speech),
path('api/tts/voices/', views.get_voices),      # For voice settings UI
path('api/tts/set-voice/', views.set_voice),    # For voice settings UI
```

**Voice Settings Support:**

The widget now supports voice settings UI in proxy mode! Add these endpoints to enable the voice picker:

```python
# Get available voices
@api_view(['GET'])
def get_voices(request):
    """Fetch available voices from ElevenLabs"""
    try:
        response = requests.get(
            'https://api.elevenlabs.io/v1/voices',
            headers={'xi-api-key': settings.ELEVENLABS_API_KEY}
        )
        return JsonResponse(response.json())
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

# Set voice for user session
@api_view(['POST'])
def set_voice(request):
    """Update voice preference for user's session"""
    role = request.data.get('role')  # 'assistant' or 'user'
    voice_id = request.data.get('voice_id')

    # Store in session or database
    if not hasattr(request, 'session'):
        return JsonResponse({'error': 'Session not available'}, status=400)

    if role not in ['assistant', 'user']:
        return JsonResponse({'error': 'Invalid role'}, status=400)

    # Store voice preference in session
    if 'tts_voices' not in request.session:
        request.session['tts_voices'] = {}
    request.session['tts_voices'][role] = voice_id
    request.session.modified = True

    return JsonResponse({'success': True, 'role': role, 'voice_id': voice_id})

# Update text_to_speech view to use session voices
@api_view(['POST'])
def text_to_speech(request):
    text = request.data.get('text', '')
    role = request.data.get('role', 'assistant')

    # Get voice from session or fall back to settings
    session_voices = request.session.get('tts_voices', {})
    voice_id = session_voices.get(role) or settings.ELEVENLABS_VOICES.get(role)

    # ... rest of TTS implementation
```

#### Option 2: Direct API (Client-Side)

For testing or simple deployments:

```javascript
ChatWidget.init({
  enableTTS: true,
  elevenLabsApiKey: 'your_elevenlabs_api_key',  // ⚠️ Exposed to client
  ttsVoices: {
    assistant: 'EXAVITQu4vr4xnSDxMaL',  // Bella
    user: 'pNInz6obpgDQGcFmaJgB',       // Adam
  },
  ttsModel: 'eleven_turbo_v2_5',
  ttsSettings: {
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.0,
    use_speaker_boost: true,
  },
});
```

**Features:**
- Speaks assistant responses automatically
- Speaks simulated user messages in demo mode
- Queues messages to prevent overlap
- Waits for speech to finish before continuing demo (automatic mode)
- Toggle TTS on/off with button in header
- Visual indicator when speaking (pulsing icon)

**Get Voice IDs:**
1. Go to https://elevenlabs.io/app/voice-library
2. Choose voices and copy their IDs
3. Or use the API: https://api.elevenlabs.io/v1/voices

**Control TTS:**
```javascript
ChatWidget.toggleTTS();  // Toggle on/off
ChatWidget.stopSpeech(); // Stop current speech and clear queue
ChatWidget.setVoice('assistant', 'voice_id'); // Change assistant voice
ChatWidget.setVoice('user', 'voice_id'); // Change user voice
```

**Voice Settings UI:**

A voice settings button (🎙️) appears in the header when TTS is enabled. Click it to:
- Select assistant voice from dropdown
- Select customer voice for demo mode
- Voices are automatically fetched from your ElevenLabs account (direct API) or Django backend (proxy mode)

**Works with both proxy and direct API modes!** Just implement the `/api/tts/voices/` and `/api/tts/set-voice/` endpoints in your Django backend (see above).

**Customize Header Buttons:**
```javascript
ChatWidget.init({
  showClearButton: true,      // Show/hide clear button
  showDebugButton: true,       // Show/hide debug button
  showTTSButton: true,         // Show/hide TTS toggle
  showVoiceSettings: true,     // Show/hide voice settings (direct API only)
  showExpandButton: true,      // Show/hide expand button
});
```

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

// Text-to-speech controls
ChatWidget.toggleTTS();  // Toggle TTS on/off
ChatWidget.stopSpeech(); // Stop current speech and clear queue
ChatWidget.setVoice('assistant', 'voice_id'); // Change assistant voice
ChatWidget.setVoice('user', 'voice_id'); // Change user voice

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

## Version History

### v1.4.0 (Latest)
- ✨ **Text-to-Speech**: ElevenLabs integration with secure Django proxy support
- 🔊 Automatic speech for assistant and simulated user messages
- 🎛️ Smart speech queuing to prevent overlap
- 🔐 Secure proxy approach keeps API keys on server

### v1.3.0
- 🎮 **Demo Flow Control**: Three modes (automatic, confirm-next, manual)
- ⏱️ Configurable delay for automatic mode (0-5000ms)
- 🎯 Real-time mode switching via dropdown menu
- ▶️ Continue button for confirm mode

### v1.2.0
- 📝 **Enhanced Markdown**: Optional rich markdown with tables and code blocks
- 🎨 Syntax highlighting support via highlight.js
- 🔧 Automatic detection of markdown addon

### v1.1.0
- 🔌 **Configurable API Paths**: Customize backend endpoints
- 🛠️ Support for different backend URL structures

### v1.0.0
- 🎉 Initial release
- 💬 Real-time SSE streaming
- 🎨 Theming and customization
- 🤖 Demo flows
- 🔒 Session management

## License

MIT © 2024
