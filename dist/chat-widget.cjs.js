var de=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Ge=Object.prototype.hasOwnProperty;var Xe=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ze=(e,t)=>{for(var n in t)de(e,n,{get:t[n],enumerable:!0})},Qe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of qe(t))!Ge.call(e,o)&&o!==n&&de(e,o,{get:()=>t[o],enumerable:!(r=Ve(t,o))||r.enumerable});return e};var Ye=e=>Qe(de({},"__esModule",{value:!0}),e);var Se=(e,t,n)=>(Xe(e,typeof t!="symbol"?t+"":t,n),n);var wt={};Ze(wt,{ChatWidget:()=>$e,default:()=>yt});module.exports=Ye(wt);var ke=require("preact"),Je=require("htm/preact");var V=require("htm/preact"),x=require("preact/hooks");var Y=require("htm/preact");function et(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function ye(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ue(e){return Array.isArray(e)?e.map(ue):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[et(t),ue(n)])):e}function pe(e){return Array.isArray(e)?e.map(pe):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[ye(t),pe(n)])):e}function he(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function P(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function Te(e){if(!e)return"";try{let t=new Date(e),r=new Date-t,o=Math.floor(r/6e4),c=Math.floor(r/36e5),w=Math.floor(r/864e5);return o<1?"Just now":o<60?`${o}m ago`:c<24?`${c}h ago`:w<7?`${w}d ago`:t.toLocaleDateString()}catch{return""}}function _e(e,t=null){if(t)return t(e);let n=P(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function Me(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,r){try{let o=t(n);r===null?localStorage.removeItem(o):localStorage.setItem(o,r)}catch{}}}}function Ie(e="csrftoken"){let t=document.cookie.split(";");for(let r of t){let[o,c]=r.trim().split("=");if(o===e)return decodeURIComponent(c)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function me(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,r)).toFixed(1))+" "+n[r]}function fe(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function Ee({config:e,debugMode:t,isExpanded:n,isSpeaking:r,messagesCount:o,isLoading:c,currentAgent:w,onClose:$,onToggleExpand:m,onToggleDebug:f,onToggleTTS:l,onClear:k,onToggleSidebar:p}){let{title:y,primaryColor:g,embedded:u,showConversationSidebar:h,showClearButton:v,showDebugButton:T,enableDebugMode:O,showTTSButton:K,showExpandButton:q,enableTTS:J,elevenLabsApiKey:U,ttsProxyUrl:N}=e,H=U||N;return Y.html`
    <div class="cw-header" style=${{backgroundColor:g}}>
      ${h&&Y.html`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${p}
          title="Conversations"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      `}

      <div class="cw-title-container">
        <span class="cw-title">${P(y)}</span>
        ${w&&Y.html`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${P(w.name||w.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${v&&Y.html`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${c||o===0}
          >🗑️</button>
        `}
        
        ${T&&O&&Y.html`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${f}
            title="Debug"
          >🐛</button>
        `}
        
        ${K&&H&&Y.html`
          <button 
            class="cw-header-btn ${J?"cw-btn-active":""}" 
            onClick=${l}
            title="TTS"
          >${J?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${q&&!u&&Y.html`
          <button 
            class="cw-header-btn" 
            onClick=${m}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!u&&Y.html`
          <button 
            class="cw-header-btn" 
            onClick=${$}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}var ne=require("htm/preact"),ae=require("preact/hooks");var F=require("htm/preact"),ee=require("preact/hooks");function we({msg:e,show:t,onToggle:n}){return t?F.html`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:F.html`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function xe({onEdit:e,onRetry:t,isLoading:n,position:r,showEdit:o=!0}){return n?null:F.html`
    <div class="cw-message-actions cw-message-actions-${r||"left"}">
      ${o&&F.html`
        <button
          class="cw-message-action-btn"
          onClick=${e}
          title="Edit message"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </button>
      `}
      <button
        class="cw-message-action-btn"
        onClick=${t}
        title="Retry from here"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 2v6h-6"></path>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
          <path d="M3 22v-6h6"></path>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
        </svg>
      </button>
    </div>
  `}function tt({initialContent:e,onSave:t,onCancel:n}){let[r,o]=(0,ee.useState)(e),c=(0,ee.useRef)(null);return(0,ee.useEffect)(()=>{c.current&&(c.current.focus(),c.current.setSelectionRange(r.length,r.length),c.current.style.height="auto",c.current.style.height=c.current.scrollHeight+"px")},[]),F.html`
    <div class="cw-inline-edit">
      <textarea
        ref=${c}
        class="cw-inline-edit-input"
        value=${r}
        onInput=${m=>{o(m.target.value),m.target.style.height="auto",m.target.style.height=m.target.scrollHeight+"px"}}
        onKeyDown=${m=>{m.key==="Enter"&&!m.shiftKey?(m.preventDefault(),r.trim()&&t(r.trim())):m.key==="Escape"&&n()}}
        rows="1"
      />
      <div class="cw-inline-edit-actions">
        <button
          class="cw-inline-edit-btn cw-inline-edit-cancel"
          onClick=${n}
          title="Cancel (Esc)"
        >Cancel</button>
        <button
          class="cw-inline-edit-btn cw-inline-edit-save"
          onClick=${()=>r.trim()&&t(r.trim())}
          disabled=${!r.trim()}
          title="Save & Resend (Enter)"
        >Save & Send</button>
      </div>
    </div>
  `}function Re({msg:e,debugMode:t,markdownParser:n,onEdit:r,onRetry:o,isLoading:c,messageIndex:w}){let[$,m]=(0,ee.useState)(!1),[f,l]=(0,ee.useState)(!1),[k,p]=(0,ee.useState)(!1),y=e.role==="user",g=e.role==="system",u=e.type==="tool_call",h=e.type==="tool_result",v=e.type==="error",T=e.type==="sub_agent_start",O=e.type==="sub_agent_end",K=e.type==="agent_context";if(g&&!t)return null;if(T||O||K)return F.html`
      <div class="cw-agent-context ${T?"cw-agent-delegating":""} ${O?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${T?"\u{1F517}":O?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&F.html`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&F.html`<${we} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
      </div>
    `;if(u||h){let b=e.metadata?.arguments||e.metadata?.result,M=i=>{if(typeof i=="string")try{return JSON.stringify(JSON.parse(i),null,2)}catch{return i}return JSON.stringify(i,null,2)};return F.html`
      <div class="cw-tool-message ${h?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&m(!$)}>
          ${e.content}
          ${b&&F.html`<span class="cw-tool-expand">${$?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${$&&b&&F.html`
          <pre class="cw-tool-details">${P(M(u?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&F.html`<${we} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
      </div>
    `}let q=["cw-message",y&&"cw-message-user",v&&"cw-message-error"].filter(Boolean).join(" "),J=`cw-message-row ${y?"cw-message-row-user":""}`,U=e.role==="assistant"?_e(e.content,n):P(e.content),N=e.files&&e.files.length>0,H=()=>N?F.html`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?F.html`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:F.html`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${fe(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${me(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,Q=b=>{p(!1),r&&r(w,b)},W=()=>{o&&o(w)};if(y&&k)return F.html`
      <div class=${J} style="position: relative;">
        ${H()}
        <${tt}
          initialContent=${e.content}
          onSave=${Q}
          onCancel=${()=>p(!1)}
        />
      </div>
    `;let s=y&&r&&o,C=e.role==="assistant"&&o&&!c;return F.html`
    <div class="${J} ${s||C?"cw-message-row-with-actions":""}">
      ${H()}
      ${s&&F.html`
        <div class="cw-user-actions-wrapper">
          <${xe}
            onEdit=${()=>p(!0)}
            onRetry=${W}
            isLoading=${c}
            position="left"
            showEdit=${!0}
          />
          <div class=${q} dangerouslySetInnerHTML=${{__html:U}} />
        </div>
      `}
      ${!s&&F.html`
        <div class=${q} dangerouslySetInnerHTML=${{__html:U}} />
      `}
      ${C&&F.html`
        <${xe}
          onRetry=${W}
          isLoading=${c}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&F.html`<${we} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
    </div>
  `}function Ae({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:r,onLoadMore:o,onEditMessage:c,onRetryMessage:w,debugMode:$,markdownParser:m,emptyStateTitle:f,emptyStateMessage:l}){let k=(0,ae.useRef)(null),p=(0,ae.useRef)(!0),y=u=>{let h=u.target,v=h.scrollHeight-h.scrollTop-h.clientHeight<100;if(p.current=v,h.scrollTop<50&&n&&!r){let T=h.scrollHeight;o().then(()=>{let O=h.scrollHeight;h.scrollTop=O-T+h.scrollTop})}};(0,ae.useEffect)(()=>{let u=k.current;u&&p.current&&requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight})},[e,t]),(0,ae.useEffect)(()=>{let u=k.current;u&&e.length<=2&&(p.current=!0,requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight}))},[e.length]);let g=e.length===0;return ne.html`
    <div class="cw-messages" ref=${k} onScroll=${y}>
      ${g&&ne.html`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${P(f)}</h3>
          <p>${P(l)}</p>
        </div>
      `}
      
      ${!g&&n&&ne.html`
        <div class="cw-load-more" onClick=${o}>
          ${r?ne.html`<span class="cw-spinner"></span><span>Loading...</span>`:ne.html`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((u,h)=>ne.html`
        <${Re}
          key=${u.id}
          msg=${u}
          messageIndex=${h}
          debugMode=${$}
          markdownParser=${m}
          onEdit=${c}
          onRetry=${w}
          isLoading=${t}
        />
      `)}
      
      ${t&&ne.html`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}var G=require("htm/preact"),L=require("preact/hooks");var ve=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Oe({onSend:e,onCancel:t,isLoading:n,placeholder:r,primaryColor:o,enableVoice:c=!0,enableFiles:w=!0}){let[$,m]=(0,L.useState)(""),[f,l]=(0,L.useState)([]),[k,p]=(0,L.useState)(!1),[y,g]=(0,L.useState)(!1),[u]=(0,L.useState)(()=>!!ve),h=(0,L.useRef)(null),v=(0,L.useRef)(null),T=(0,L.useRef)(null),O=(0,L.useRef)(!1);(0,L.useEffect)(()=>{!n&&h.current&&h.current.focus()},[n]),(0,L.useEffect)(()=>{h.current&&(h.current.style.height="auto",h.current.style.height=Math.min(h.current.scrollHeight,150)+"px")},[$]),(0,L.useEffect)(()=>()=>{O.current=!1,T.current&&T.current.abort()},[]);let K=i=>{i.preventDefault(),($.trim()||f.length>0)&&!n&&(e($,f),m(""),l([]),h.current&&(h.current.style.height="auto"),v.current&&(v.current.value=""))},q=i=>{let I=Array.from(i.target.files||[]);I.length>0&&l(A=>[...A,...I])},J=i=>{l(I=>I.filter((A,a)=>a!==i))},U=i=>{i.preventDefault(),v.current&&!n&&v.current.click()},N=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),K(i))},H=i=>{n&&t&&(i.preventDefault(),t())},Q=()=>{if(!ve||n)return;O.current=!0;let i=new ve;i.continuous=!0,i.interimResults=!0,i.lang=navigator.language||"en-US";let I=$,A="";i.onstart=()=>{g(!0)},i.onresult=a=>{A="";for(let d=a.resultIndex;d<a.results.length;d++){let E=a.results[d][0].transcript;a.results[d].isFinal?I+=(I?" ":"")+E:A+=E}m(I+(A?" "+A:""))},i.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),O.current=!1,g(!1),m(I||$)},i.onend=()=>{if(O.current){console.log("[ChatWidget] Recognition paused, restarting...");try{i.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}g(!1),I&&m(I),T.current=null},T.current=i,i.start()},W=()=>{O.current=!1,T.current&&T.current.stop()},s=i=>{i.preventDefault(),y?W():Q()},_=G.html`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,C=G.html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,S=G.html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,b=c&&u,M=w;return G.html`
    <form class="cw-input-form" onSubmit=${K}>
      <input
        type="file"
        ref=${v}
        style="display: none"
        multiple
        onChange=${q}
      />
      ${f.length>0&&G.html`
        <div class="cw-file-chips">
          ${f.map((i,I)=>G.html`
            <div class="cw-file-chip" key=${I}>
              <span class="cw-file-chip-icon">${fe(i.type)}</span>
              <span class="cw-file-chip-name" title=${i.name}>${i.name.length>20?i.name.substring(0,17)+"...":i.name}</span>
              <span class="cw-file-chip-size">(${me(i.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>J(I)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${h}
        class="cw-input"
        placeholder=${P(r)}
        value=${$}
        onInput=${i=>m(i.target.value)}
        onKeyDown=${N}
        disabled=${n}
        rows="1"
      />
      ${M&&G.html`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${U}
          disabled=${n}
          title="Attach files"
        >
          ${S}
        </button>
      `}
      ${b&&G.html`
        <button
          type="button"
          class=${`cw-voice-btn ${y?"cw-voice-btn-recording":""}`}
          onClick=${s}
          disabled=${n}
          title=${y?"Stop recording":"Voice input"}
        >
          ${C}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&k?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&k?"#dc2626":o}}
        onClick=${H}
        onMouseEnter=${()=>p(!0)}
        onMouseLeave=${()=>p(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?_:G.html`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}var oe=require("htm/preact");function De({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:r,onClose:o,onNewConversation:c,onSwitchConversation:w}){return oe.html`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${o}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${c}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&oe.html`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&oe.html`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map($=>oe.html`
          <div 
            key=${$.id}
            class="cw-conversation-item ${$.id===r?"cw-conversation-active":""}"
            onClick=${()=>w($.id)}
          >
            <div class="cw-conversation-title">${P($.title||"Untitled")}</div>
            <div class="cw-conversation-date">${Te($.updatedAt||$.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${o}
    />
  `}var re=require("htm/preact"),Fe=require("preact/hooks");function Pe({availableModels:e,selectedModel:t,onSelectModel:n,disabled:r}){let[o,c]=(0,Fe.useState)(!1);if(!e||e.length===0)return null;let $=e.find(l=>l.id===t)?.name||"Select Model",m=()=>{r||c(!o)},f=l=>{n(l),c(!1)};return re.html`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${m}
        disabled=${r}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${P($)}</span>
        <span class="cw-model-chevron">${o?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${o&&re.html`
        <div class="cw-model-dropdown">
          ${e.map(l=>re.html`
            <button 
              key=${l.id}
              class="cw-model-option ${l.id===t?"cw-model-option-selected":""}"
              onClick=${()=>f(l.id)}
            >
              <span class="cw-model-option-name">${P(l.name)}</span>
              <span class="cw-model-option-provider">${P(l.provider)}</span>
              ${l.description&&re.html`
                <span class="cw-model-option-desc">${P(l.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var X=require("htm/preact"),te=require("preact/hooks"),nt={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},st={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function at({task:e,onUpdate:t,onRemove:n,depth:r=0}){let[o,c]=(0,te.useState)(!1),[w,$]=(0,te.useState)(e.name),m=(0,te.useCallback)(()=>{let p={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:p[e.state]||"not_started"})},[e,t]),f=(0,te.useCallback)(()=>{w.trim()&&w!==e.name&&t(e.id,{name:w.trim()}),c(!1)},[e,w,t]),l=(0,te.useCallback)(p=>{p.key==="Enter"&&f(),p.key==="Escape"&&($(e.name),c(!1))},[f,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return X.html`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${r*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${m}
        title=${st[e.state]}
      >
        ${nt[e.state]}
      </button>
      
      ${o?X.html`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${w}
          onInput=${p=>$(p.target.value)}
          onBlur=${f}
          onKeyDown=${l}
          autoFocus
        />
      `:X.html`
        <span 
          class="cw-task-name" 
          onClick=${()=>c(!0)}
          title="Click to edit"
        >
          ${e.name}
        </span>
      `}
      
      <button 
        class="cw-task-remove-btn" 
        onClick=${()=>n(e.id)}
        title="Remove task"
      >
        ×
      </button>
    </div>
  `}function Le({tasks:e,progress:t,isLoading:n,error:r,onUpdate:o,onRemove:c,onClear:w,onRefresh:$}){let m=(0,te.useCallback)(k=>{let p=new Map,y=[];return k.forEach(g=>{p.set(g.id,{...g,children:[]})}),k.forEach(g=>{let u=p.get(g.id);g.parent_id&&p.has(g.parent_id)?p.get(g.parent_id).children.push(u):y.push(u)}),y},[]),f=(0,te.useCallback)((k,p=0)=>X.html`
      <${at}
        key=${k.id}
        task=${k}
        depth=${p}
        onUpdate=${o}
        onRemove=${c}
      />
      ${k.children?.map(y=>f(y,p+1))}
    `,[o,c]),l=m(e);return n&&e.length===0?X.html`<div class="cw-tasks-loading">Loading tasks...</div>`:X.html`
    <div class="cw-tasks-container">
      <div class="cw-tasks-header">
        <div class="cw-tasks-progress">
          <span class="cw-tasks-progress-text">
            ${t.completed}/${t.total} complete
          </span>
          <div class="cw-tasks-progress-bar">
            <div 
              class="cw-tasks-progress-fill" 
              style=${{width:`${t.percent_complete}%`}}
            />
          </div>
        </div>
        <div class="cw-tasks-actions">
          <button class="cw-tasks-action-btn" onClick=${$} title="Refresh">↻</button>
          ${e.length>0&&X.html`
            <button class="cw-tasks-action-btn" onClick=${w} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${r&&X.html`<div class="cw-tasks-error">${r}</div>`}
      
      <div class="cw-tasks-list">
        ${l.length===0?X.html`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:l.map(k=>f(k))}
      </div>
    </div>
  `}var D=require("preact/hooks");function Ke(e,t,n){let[r,o]=(0,D.useState)([]),[c,w]=(0,D.useState)(!1),[$,m]=(0,D.useState)(null),[f,l]=(0,D.useState)(()=>n?.get(e.conversationIdKey)||null),[k,p]=(0,D.useState)(!1),[y,g]=(0,D.useState)(!1),[u,h]=(0,D.useState)(0),v=(0,D.useRef)(null),T=(0,D.useRef)(null);(0,D.useEffect)(()=>{f&&n?.set(e.conversationIdKey,f)},[f,e.conversationIdKey,n]);let O=(0,D.useCallback)(async(s,_,C)=>{v.current&&v.current.close();let S=e.apiPaths.runEvents.replace("{runId}",s),b=`${e.backendUrl}${S}`;_&&(b+=`?anonymous_token=${encodeURIComponent(_)}`);let M=new EventSource(b);v.current=M;let i="";M.addEventListener("assistant.message",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let d=a.payload.content;d&&(i+=d,o(E=>{let B=E[E.length-1];return B?.role==="assistant"&&B.id.startsWith("assistant-stream-")?[...E.slice(0,-1),{...B,content:i}]:[...E,{id:"assistant-stream-"+Date.now(),role:"assistant",content:i,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.call",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.call",a.payload),o(d=>[...d,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.result",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.result",a.payload);let d=a.payload.result,E=d?.error;o(B=>[...B,{id:"tool-result-"+Date.now(),role:"system",content:E?`\u274C ${d.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:d,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("custom",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&o(d=>[...d,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.start",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),o(d=>[...d,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.end",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),o(d=>[...d,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let I=A=>{try{let a=JSON.parse(A.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let d=a.payload.error||"Agent run failed";m(d),o(E=>[...E,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${d}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}w(!1),M.close(),v.current=null,i&&C&&C(i)};M.addEventListener("run.succeeded",I),M.addEventListener("run.failed",I),M.addEventListener("run.cancelled",I),M.addEventListener("run.timed_out",I),M.onerror=()=>{w(!1),M.close(),v.current=null}},[e]),K=(0,D.useCallback)(async(s,_={},C={})=>{if(!s.trim()||c)return;let S=[],b={};typeof _=="function"?b={onAssistantMessage:_}:Array.isArray(_)?(S=_,b=C):b=_||{};let{model:M,onAssistantMessage:i,supersedeFromMessageIndex:I}=b;w(!0),m(null);let A={id:he(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:S.length>0?S.map(a=>({name:a.name,size:a.size,type:a.type})):void 0};o(a=>[...a,A]);try{let a=await t.getOrCreateSession(),d;if(S.length>0){let j=e.apiCaseStyle!=="camel",Ce=ce=>j?ye(ce):ce,se=new FormData;se.append(Ce("agentKey"),e.agentKey),f&&se.append(Ce("conversationId"),f),se.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),se.append("metadata",JSON.stringify(j?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&se.append("model",M),S.forEach(ce=>{se.append("files",ce)}),d=t.getFetchOptions({method:"POST",body:se},a)}else{let j=t.transformRequest({agentKey:e.agentKey,conversationId:f,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...I!==void 0&&{supersedeFromMessageIndex:I}});d=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)},a)}let E=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,d),B=a;if(E.status===401){t.clearSession();let j=await t.getOrCreateSession(!0);j&&(B=j,S.length>0?d=t.getFetchOptions({method:"POST",body:d.body},j):d=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:d.body},j),E=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,d))}if(!E.ok){let j=await E.json().catch(()=>({}));throw new Error(j.error||j.detail||`HTTP ${E.status}`)}let ie=await E.json(),le=t.transformResponse(ie);T.current=le.id,!f&&le.conversationId&&l(le.conversationId),await O(le.id,B,i)}catch(a){m(a.message||"Failed to send message"),w(!1)}finally{T.current=null}},[e,t,f,c,O]),q=(0,D.useCallback)(async()=>{let s=T.current;if(!(!s||!c))try{let _=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${_}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(v.current&&(v.current.close(),v.current=null),w(!1),T.current=null,o(S=>[...S,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(_){console.error("[ChatWidget] Failed to cancel run:",_)}},[e,t,c]),J=(0,D.useCallback)(()=>{o([]),l(null),m(null),p(!1),h(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),U=s=>{let _={id:he(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{..._,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(S=>({id:he(),role:"assistant",content:`\u{1F527} ${S.function?.name||S.name||"tool"}`,timestamp:_.timestamp,type:"tool_call",metadata:{toolName:S.function?.name||S.name,arguments:S.function?.arguments||S.arguments,toolCallId:S.id}}));let C=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!C?.trim()?null:{..._,content:C,type:"message"}},N=(0,D.useCallback)(async s=>{w(!0),o([]),l(s);try{let _=await t.getOrCreateSession(),S=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`,b=await fetch(S,t.getFetchOptions({method:"GET"},_));if(b.ok){let M=await b.json(),i=t.transformResponse(M);i.messages&&o(i.messages.flatMap(U).filter(Boolean)),p(i.hasMore||!1),h(i.messages?.length||0)}else b.status===404&&(l(null),n?.set(e.conversationIdKey,null))}catch(_){console.error("[ChatWidget] Failed to load conversation:",_)}finally{w(!1)}},[e,t,n]),H=(0,D.useCallback)(async()=>{if(!(!f||y||!k)){g(!0);try{let s=await t.getOrCreateSession(),C=`${e.backendUrl}${e.apiPaths.conversations}${f}/?limit=10&offset=${u}`,S=await fetch(C,t.getFetchOptions({method:"GET"},s));if(S.ok){let b=await S.json(),M=t.transformResponse(b);if(M.messages?.length>0){let i=M.messages.flatMap(U).filter(Boolean);o(I=>[...i,...I]),h(I=>I+M.messages.length),p(M.hasMore||!1)}else p(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{g(!1)}}},[e,t,f,u,y,k]),Q=(0,D.useCallback)(async(s,_,C={})=>{if(c)return;let S=r[s];if(!S||S.role!=="user")return;let b=r.slice(0,s);o(b),await K(_,{...C,supersedeFromMessageIndex:s})},[r,c,K]),W=(0,D.useCallback)(async(s,_={})=>{if(c)return;let C=r[s];if(!C)return;let S=s,b=C;if(C.role==="assistant"){for(let i=s-1;i>=0;i--)if(r[i].role==="user"){S=i,b=r[i];break}if(b.role!=="user")return}else if(C.role!=="user")return;let M=r.slice(0,S);o(M),await K(b.content,{..._,supersedeFromMessageIndex:S})},[r,c,K]);return(0,D.useEffect)(()=>()=>{v.current&&v.current.close()},[]),{messages:r,isLoading:c,error:$,conversationId:f,hasMoreMessages:k,loadingMoreMessages:y,sendMessage:K,cancelRun:q,clearMessages:J,loadConversation:N,loadMoreMessages:H,setConversationId:l,editMessage:Q,retryMessage:W}}var Z=require("preact/hooks");function Ne(e,t,n){let[r,o]=(0,Z.useState)([]),[c,w]=(0,Z.useState)(null),[$,m]=(0,Z.useState)(null),[f,l]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{(async()=>{if(e.showModelSelector){l(!0);try{let g=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(g.ok){let u=await g.json(),h=u.models||[];o(h),m(u.default);let v=n?.get(e.modelKey);v&&h.some(T=>T.id===v)?w(v):w(u.default)}}catch(g){console.warn("[ChatWidget] Failed to load models:",g)}finally{l(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let k=(0,Z.useCallback)(y=>{w(y),n?.set(e.modelKey,y)},[e.modelKey,n]),p=(0,Z.useCallback)(()=>r.find(y=>y.id===c)||null,[r,c]);return{availableModels:r,selectedModel:c,defaultModel:$,isLoading:f,selectModel:k,getSelectedModelInfo:p}}var z=require("preact/hooks");function He(e,t){let[n,r]=(0,z.useState)(null),[o,c]=(0,z.useState)(!1),[w,$]=(0,z.useState)(null),m=e.apiPaths?.tasks||"/api/agent/tasks/",f=(0,z.useCallback)(async()=>{c(!0),$(null);try{let u=`${e.backendUrl}${m}`,h=await fetch(u,t.getFetchOptions({method:"GET"}));if(h.ok){let v=await h.json();r(v)}else{let v=await h.json().catch(()=>({}));$(v.error||"Failed to load tasks")}}catch(u){console.error("[useTasks] Failed to load task list:",u),$("Failed to load tasks")}finally{c(!1)}},[e.backendUrl,m,t]),l=(0,z.useCallback)(async u=>{if(!n)return null;try{let h=`${e.backendUrl}${m}${n.id}/add_task/`,v=await fetch(h,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}));if(v.ok){let T=await v.json();return await f(),T}else{let T=await v.json().catch(()=>({}));return $(T.error||"Failed to add task"),null}}catch(h){return console.error("[useTasks] Failed to add task:",h),$("Failed to add task"),null}},[e.backendUrl,m,n,t,f]),k=(0,z.useCallback)(async(u,h)=>{if(!n)return null;try{let v=`${e.backendUrl}${m}${n.id}/update_task/${u}/`,T=await fetch(v,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}));if(T.ok){let O=await T.json();return await f(),O}else{let O=await T.json().catch(()=>({}));return $(O.error||"Failed to update task"),null}}catch(v){return console.error("[useTasks] Failed to update task:",v),$("Failed to update task"),null}},[e.backendUrl,m,n,t,f]),p=(0,z.useCallback)(async u=>{if(!n)return!1;try{let h=`${e.backendUrl}${m}${n.id}/remove_task/${u}/`,v=await fetch(h,t.getFetchOptions({method:"DELETE"}));if(v.ok)return await f(),!0;{let T=await v.json().catch(()=>({}));return $(T.error||"Failed to remove task"),!1}}catch(h){return console.error("[useTasks] Failed to remove task:",h),$("Failed to remove task"),!1}},[e.backendUrl,m,n,t,f]),y=(0,z.useCallback)(async()=>{if(!n)return!1;try{let u=`${e.backendUrl}${m}${n.id}/clear/`,h=await fetch(u,t.getFetchOptions({method:"POST"}));if(h.ok)return await f(),!0;{let v=await h.json().catch(()=>({}));return $(v.error||"Failed to clear tasks"),!1}}catch(u){return console.error("[useTasks] Failed to clear tasks:",u),$("Failed to clear tasks"),!1}},[e.backendUrl,m,n,t,f]),g=(0,z.useCallback)(()=>$(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:o,error:w,loadTaskList:f,addTask:l,updateTask:k,removeTask:p,clearTasks:y,clearError:g}}function Be(e,t,n){let r=l=>!l||typeof l!="object"||e.apiCaseStyle==="camel"?l:pe(l),o=l=>!l||typeof l!="object"||e.apiCaseStyle==="snake"?l:ue(l),c=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",w=(l=null)=>{let k=c(),p={},y=l||e.authToken||t().authToken;if(k==="token"&&y){let g=e.authHeader||"Authorization",u=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";p[g]=u?`${u} ${y}`:y}else if(k==="jwt"&&y){let g=e.authHeader||"Authorization",u=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";p[g]=u?`${u} ${y}`:y}else if(k==="anonymous"&&y){let g=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";p[g]=y}if(k==="session"){let g=Ie(e.csrfCookieName);g&&(p["X-CSRFToken"]=g)}return p};return{getAuthStrategy:c,getAuthHeaders:w,getFetchOptions:(l={},k=null)=>{let p=c(),y={...l},g=w(k);return console.log("[ChatWidget] getFetchOptions - strategy:",p,"overrideToken:",k,"authHeaders:",g),y.headers={...y.headers,...g},p==="session"&&(y.credentials="include"),y},getOrCreateSession:async(l=!1)=>{let k=c(),p=t(),y=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||p.authToken;if(!l){if(p.authToken)return p.authToken;let g=p.storage?.get(y);if(g)return n(u=>({...u,authToken:g})),g}try{let g=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,u=await fetch(`${e.backendUrl}${g}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(u.ok){let h=await u.json();return n(v=>({...v,authToken:h.token})),p.storage?.set(y,h.token),h.token}}catch(g){console.warn("[ChatWidget] Failed to create session:",g)}return null},clearSession:()=>{let l=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(p=>({...p,authToken:null})),k.storage?.set(l,null)},transformRequest:r,transformResponse:o}}function Ue({config:e,onStateChange:t,markdownParser:n,apiRef:r}){let[o,c]=(0,x.useState)(e.embedded||e.forceOpen===!0),[w,$]=(0,x.useState)(!1),[m,f]=(0,x.useState)(!1),[l,k]=(0,x.useState)(!1),[p,y]=(0,x.useState)([]),[g,u]=(0,x.useState)("chat"),[h,v]=(0,x.useState)(!1),[T,O]=(0,x.useState)(e.enableTTS),[K,q]=(0,x.useState)(!1),[J,U]=(0,x.useState)(null);(0,x.useEffect)(()=>{e.forceOpen!==void 0&&c(e.forceOpen)},[e.forceOpen]);let N=(0,x.useMemo)(()=>Me(e.containerId),[e.containerId]),[H,Q]=(0,x.useState)(e.authToken||null),W=(0,x.useMemo)(()=>Be(e,()=>({authToken:H,storage:N}),B=>{let ie=B({authToken:H,storage:N});ie.authToken!==H&&Q(ie.authToken)}),[e,H,N]),s=Ke(e,W,N),_=Ne(e,W,N),C=He(e,W);(0,x.useEffect)(()=>{for(let d=s.messages.length-1;d>=0;d--){let E=s.messages[d];if(E.type==="sub_agent_start"){U({key:E.metadata?.subAgentKey,name:E.metadata?.agentName});return}if(E.type==="sub_agent_end"){U(null);return}}},[s.messages]),(0,x.useEffect)(()=>{let d=N.get(e.conversationIdKey);d&&s.loadConversation(d)},[]),(0,x.useEffect)(()=>{t&&t({isOpen:o,isExpanded:w,debugMode:m,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[o,w,m,s.messages,s.conversationId,s.isLoading,s.error]);let S=(0,x.useCallback)(async()=>{if(e.showConversationSidebar){v(!0);try{let d=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,E=await fetch(d,W.getFetchOptions({method:"GET"}));if(E.ok){let B=await E.json();y(B.results||B)}}catch(d){console.error("[ChatWidget] Failed to load conversations:",d),y([])}finally{v(!1)}}},[e,W]),b=(0,x.useCallback)(()=>{let d=!l;k(d),d&&S()},[l,S]),M=(0,x.useCallback)(d=>{d!==s.conversationId&&s.loadConversation(d),k(!1)},[s]),i=(0,x.useCallback)(()=>{s.clearMessages(),k(!1)},[s]),I=(0,x.useCallback)(d=>{s.sendMessage(d,{model:_.selectedModel,onAssistantMessage:E=>{}})},[s,T,_.selectedModel]),A=(0,x.useCallback)(d=>{u(d),d==="tasks"&&C.loadTaskList()},[C]);if((0,x.useEffect)(()=>{r&&(r.current={open:()=>c(!0),close:()=>c(!1),send:d=>I(d),clearMessages:()=>s.clearMessages(),toggleTTS:()=>O(d=>!d),stopSpeech:()=>q(!1),setAuth:d=>{d.token!==void 0&&Q(d.token)},clearAuth:()=>Q(null)})},[s,r,I]),!e.embedded&&!o)return V.html`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>c(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",w&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return V.html`
    <div class=${a} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&V.html`
        <${De}
          isOpen=${l}
          conversations=${p}
          conversationsLoading=${h}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${i}
          onSwitchConversation=${M}
        />
      `}
      
      <${Ee}
        config=${e}
        debugMode=${m}
        isExpanded=${w}
        isSpeaking=${K}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${J}
        onClose=${()=>c(!1)}
        onToggleExpand=${()=>$(!w)}
        onToggleDebug=${()=>f(!m)}
        onToggleTTS=${()=>O(!T)}
        onClear=${s.clearMessages}
        onToggleSidebar=${b}
      />

      ${e.showTasksTab!==!1&&V.html`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${g==="chat"?"cw-tab-active":""}`}
            onClick=${()=>A("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${g==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>A("tasks")}
          >
            Tasks ${C.progress.total>0?V.html`<span class="cw-tab-badge">${C.progress.completed}/${C.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${m&&V.html`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${g==="chat"?V.html`
        <${Ae}
          messages=${s.messages}
          isLoading=${s.isLoading}
          hasMoreMessages=${s.hasMoreMessages}
          loadingMoreMessages=${s.loadingMoreMessages}
          onLoadMore=${s.loadMoreMessages}
          onEditMessage=${s.editMessage}
          onRetryMessage=${s.retryMessage}
          debugMode=${m}
          markdownParser=${n}
          emptyStateTitle=${e.emptyStateTitle}
          emptyStateMessage=${e.emptyStateMessage}
        />

        ${s.error&&V.html`<div class="cw-error-bar">${s.error}</div>`}

        ${e.showModelSelector&&_.availableModels.length>0&&V.html`
          <${Pe}
            availableModels=${_.availableModels}
            selectedModel=${_.selectedModel}
            onSelectModel=${_.selectModel}
            disabled=${s.isLoading}
          />
        `}

        <${Oe}
          onSend=${I}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:V.html`
        <${Le}
          tasks=${C.tasks}
          progress=${C.progress}
          isLoading=${C.isLoading}
          error=${C.error}
          onUpdate=${C.updateTask}
          onRemove=${C.removeTask}
          onClear=${C.clearTasks}
          onRefresh=${C.loadTaskList}
        />
      `}
    </div>
  `}var We={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function je(e){let t={...We.apiPaths,...e.apiPaths||{}};return{...We,...e,apiPaths:t}}var ge=new Map,ot=0,R=null,be=class{constructor(t={}){Se(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++ot}`,this.config=je(t),this.container=null,this._state={},this._apiRef={current:null},ge.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&(0,ke.render)(Je.html`<${Ue}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${$e._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&((0,ke.render)(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),ge.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function ze(e={}){return new be(e).init()}function rt(e={}){return R&&R.destroy(),R=ze(e),R}function it(){R&&(R.destroy(),R=null)}function lt(){R&&R.open()}function ct(){R&&R.close()}function dt(e){R&&R.send(e)}function ut(){R&&R.clearMessages()}function pt(){R&&R.toggleTTS()}function ht(){R&&R.stopSpeech()}function mt(e){R&&R.setAuth(e)}function ft(){R&&R.clearAuth()}function gt(){return R?R.getState():null}function $t(){return R?R.getConfig():null}var $e={createInstance:ze,getInstance:e=>ge.get(e),getAllInstances:()=>Array.from(ge.values()),init:rt,destroy:it,open:lt,close:ct,send:dt,clearMessages:ut,toggleTTS:pt,stopSpeech:ht,setAuth:mt,clearAuth:ft,getState:gt,getConfig:$t,_enhancedMarkdownParser:null};var yt=$e;typeof window<"u"&&(window.ChatWidget=$e);
