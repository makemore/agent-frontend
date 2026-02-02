var $e=Object.defineProperty;var Xe=Object.getOwnPropertyDescriptor;var Ye=Object.getOwnPropertyNames;var Ze=Object.prototype.hasOwnProperty;var Qe=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var et=(e,t)=>{for(var n in t)$e(e,n,{get:t[n],enumerable:!0})},tt=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ye(t))!Ze.call(e,r)&&r!==n&&$e(e,r,{get:()=>t[r],enumerable:!(o=Xe(t,r))||o.enumerable});return e};var nt=e=>tt($e({},"__esModule",{value:!0}),e);var Ue=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);var vt={};et(vt,{ChatWidget:()=>ue,ChatWidgetAPI:()=>Pe,DEFAULT_CONFIG:()=>Fe,Header:()=>be,InputForm:()=>Te,Message:()=>Ce,MessageList:()=>Se,ModelSelector:()=>Me,Sidebar:()=>_e,TaskList:()=>xe,camelToSnake:()=>he,createApiClient:()=>Ae,createStorage:()=>ke,default:()=>kt,formatDate:()=>ye,formatFileSize:()=>le,generateId:()=>ie,getCSRFToken:()=>ve,getFileTypeIcon:()=>ce,keysToCamel:()=>oe,keysToSnake:()=>re,mergeConfig:()=>Oe,parseMarkdown:()=>we,snakeToCamel:()=>Le,useChat:()=>Ie,useModels:()=>Ee,useTasks:()=>Re});module.exports=nt(vt);var q=require("htm/preact"),E=require("preact/compat");var Q=require("htm/preact");function Le(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function he(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function oe(e){return Array.isArray(e)?e.map(oe):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Le(t),oe(n)])):e}function re(e){return Array.isArray(e)?e.map(re):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[he(t),re(n)])):e}function ie(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function P(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function ye(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,r=Math.floor(o/6e4),d=Math.floor(o/36e5),y=Math.floor(o/864e5);return r<1?"Just now":r<60?`${r}m ago`:d<24?`${d}h ago`:y<7?`${y}d ago`:t.toLocaleDateString()}catch{return""}}function we(e,t=null){if(t)return t(e);let n=P(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function ke(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let r=t(n);o===null?localStorage.removeItem(r):localStorage.setItem(r,o)}catch{}}}}function ve(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[r,d]=o.trim().split("=");if(r===e)return decodeURIComponent(d)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function le(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function ce(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function be({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:r,isLoading:d,currentAgent:y,onClose:w,onToggleExpand:h,onToggleDebug:$,onToggleTTS:m,onClear:k,onToggleSidebar:u}){let{title:v,primaryColor:l,embedded:p,showConversationSidebar:f,showClearButton:g,showDebugButton:S,enableDebugMode:R,showTTSButton:L,showExpandButton:H,enableTTS:J,elevenLabsApiKey:W,ttsProxyUrl:B}=e,U=W||B;return Q.html`
    <div class="cw-header" style=${{backgroundColor:l}}>
      ${f&&Q.html`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${u}
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
        <span class="cw-title">${P(v)}</span>
        ${y&&Q.html`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${P(y.name||y.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${g&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${d||r===0}
          >🗑️</button>
        `}
        
        ${S&&R&&Q.html`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${$}
            title="Debug"
          >🐛</button>
        `}
        
        ${L&&U&&Q.html`
          <button 
            class="cw-header-btn ${J?"cw-btn-active":""}" 
            onClick=${m}
            title="TTS"
          >${J?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${H&&!p&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${h}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!p&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${w}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}var se=require("htm/preact"),de=require("preact/compat");var D=require("htm/preact"),ee=require("preact/compat");function Ke({msg:e,show:t,onToggle:n}){return t?D.html`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:D.html`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function je({onEdit:e,onRetry:t,isLoading:n,position:o,showEdit:r=!0}){return n?null:D.html`
    <div class="cw-message-actions cw-message-actions-${o||"left"}">
      ${r&&D.html`
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
  `}function st({initialContent:e,onSave:t,onCancel:n}){let[o,r]=(0,ee.useState)(e),d=(0,ee.useRef)(null);return(0,ee.useEffect)(()=>{d.current&&(d.current.focus(),d.current.setSelectionRange(o.length,o.length),d.current.style.height="auto",d.current.style.height=d.current.scrollHeight+"px")},[]),D.html`
    <div class="cw-inline-edit">
      <textarea
        ref=${d}
        class="cw-inline-edit-input"
        value=${o}
        onInput=${h=>{r(h.target.value),h.target.style.height="auto",h.target.style.height=h.target.scrollHeight+"px"}}
        onKeyDown=${h=>{h.key==="Enter"&&!h.shiftKey?(h.preventDefault(),o.trim()&&t(o.trim())):h.key==="Escape"&&n()}}
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
          onClick=${()=>o.trim()&&t(o.trim())}
          disabled=${!o.trim()}
          title="Save & Resend (Enter)"
        >Save & Send</button>
      </div>
    </div>
  `}function Ce({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:r,isLoading:d,messageIndex:y}){let[w,h]=(0,ee.useState)(!1),[$,m]=(0,ee.useState)(!1),[k,u]=(0,ee.useState)(!1),v=e.role==="user",l=e.role==="system",p=e.type==="tool_call",f=e.type==="tool_result",g=e.type==="error",S=e.type==="sub_agent_start",R=e.type==="sub_agent_end",L=e.type==="agent_context";if(l&&!t)return null;if(S||R||L)return D.html`
      <div class="cw-agent-context ${S?"cw-agent-delegating":""} ${R?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${S?"\u{1F517}":R?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&D.html`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&D.html`<${Ke} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
      </div>
    `;if(p||f){let C=e.metadata?.arguments||e.metadata?.result,M=i=>{if(typeof i=="string")try{return JSON.stringify(JSON.parse(i),null,2)}catch{return i}return JSON.stringify(i,null,2)};return D.html`
      <div class="cw-tool-message ${f?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>C&&h(!w)}>
          ${e.content}
          ${C&&D.html`<span class="cw-tool-expand">${w?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${w&&C&&D.html`
          <pre class="cw-tool-details">${P(M(p?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&D.html`<${Ke} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
      </div>
    `}let H=["cw-message",v&&"cw-message-user",g&&"cw-message-error"].filter(Boolean).join(" "),J=`cw-message-row ${v?"cw-message-row-user":""}`,W=e.role==="assistant"?we(e.content,n):P(e.content),B=e.files&&e.files.length>0,U=()=>B?D.html`
      <div class="cw-message-attachments">
        ${e.files.map(C=>C.type&&C.type.startsWith("image/")?D.html`
              <a class="cw-attachment-thumbnail" href=${C.url} target="_blank" title=${C.name}>
                <img src=${C.url} alt=${C.name} />
              </a>
            `:D.html`
            <a class="cw-attachment-file" href=${C.url} target="_blank" title=${C.name}>
              <span class="cw-attachment-icon">${ce(C.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${C.name}</span>
                <span class="cw-attachment-size">${le(C.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,Z=C=>{u(!1),o&&o(y,C)},z=()=>{r&&r(y)};if(v&&k)return D.html`
      <div class=${J} style="position: relative;">
        ${U()}
        <${st}
          initialContent=${e.content}
          onSave=${Z}
          onCancel=${()=>u(!1)}
        />
      </div>
    `;let s=v&&o&&r,T=e.role==="assistant"&&r&&!d;return D.html`
    <div class="${J} ${s||T?"cw-message-row-with-actions":""}">
      ${U()}
      ${s&&D.html`
        <div class="cw-user-actions-wrapper">
          <${je}
            onEdit=${()=>u(!0)}
            onRetry=${z}
            isLoading=${d}
            position="left"
            showEdit=${!0}
          />
          <div class=${H} dangerouslySetInnerHTML=${{__html:W}} />
        </div>
      `}
      ${!s&&D.html`
        <div class=${H} dangerouslySetInnerHTML=${{__html:W}} />
      `}
      ${T&&D.html`
        <${je}
          onRetry=${z}
          isLoading=${d}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&D.html`<${Ke} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
    </div>
  `}function Se({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:r,onEditMessage:d,onRetryMessage:y,debugMode:w,markdownParser:h,emptyStateTitle:$,emptyStateMessage:m}){let k=(0,de.useRef)(null),u=(0,de.useRef)(!0),v=p=>{let f=p.target,g=f.scrollHeight-f.scrollTop-f.clientHeight<100;if(u.current=g,f.scrollTop<50&&n&&!o){let S=f.scrollHeight;r().then(()=>{let R=f.scrollHeight;f.scrollTop=R-S+f.scrollTop})}};(0,de.useEffect)(()=>{let p=k.current;p&&u.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),(0,de.useEffect)(()=>{let p=k.current;p&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let l=e.length===0;return se.html`
    <div class="cw-messages" ref=${k} onScroll=${v}>
      ${l&&se.html`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${P($)}</h3>
          <p>${P(m)}</p>
        </div>
      `}
      
      ${!l&&n&&se.html`
        <div class="cw-load-more" onClick=${r}>
          ${o?se.html`<span class="cw-spinner"></span><span>Loading...</span>`:se.html`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((p,f)=>se.html`
        <${Ce}
          key=${p.id}
          msg=${p}
          messageIndex=${f}
          debugMode=${w}
          markdownParser=${h}
          onEdit=${d}
          onRetry=${y}
          isLoading=${t}
        />
      `)}
      
      ${t&&se.html`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}var X=require("htm/preact"),N=require("preact/compat");var Ne=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Te({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:r,enableVoice:d=!0,enableFiles:y=!0}){let[w,h]=(0,N.useState)(""),[$,m]=(0,N.useState)([]),[k,u]=(0,N.useState)(!1),[v,l]=(0,N.useState)(!1),[p]=(0,N.useState)(()=>!!Ne),f=(0,N.useRef)(null),g=(0,N.useRef)(null),S=(0,N.useRef)(null),R=(0,N.useRef)(!1);(0,N.useEffect)(()=>{!n&&f.current&&f.current.focus()},[n]),(0,N.useEffect)(()=>{f.current&&(f.current.style.height="auto",f.current.style.height=Math.min(f.current.scrollHeight,150)+"px")},[w]),(0,N.useEffect)(()=>()=>{R.current=!1,S.current&&S.current.abort()},[]);let L=i=>{i.preventDefault(),(w.trim()||$.length>0)&&!n&&(e(w,$),h(""),m([]),f.current&&(f.current.style.height="auto"),g.current&&(g.current.value=""))},H=i=>{let I=Array.from(i.target.files||[]);I.length>0&&m(A=>[...A,...I])},J=i=>{m(I=>I.filter((A,a)=>a!==i))},W=i=>{i.preventDefault(),g.current&&!n&&g.current.click()},B=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),L(i))},U=i=>{n&&t&&(i.preventDefault(),t())},Z=()=>{if(!Ne||n)return;R.current=!0;let i=new Ne;i.continuous=!0,i.interimResults=!0,i.lang=navigator.language||"en-US";let I=w,A="";i.onstart=()=>{l(!0)},i.onresult=a=>{A="";for(let c=a.resultIndex;c<a.results.length;c++){let x=a.results[c][0].transcript;a.results[c].isFinal?I+=(I?" ":"")+x:A+=x}h(I+(A?" "+A:""))},i.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),R.current=!1,l(!1),h(I||w)},i.onend=()=>{if(R.current){console.log("[ChatWidget] Recognition paused, restarting...");try{i.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}l(!1),I&&h(I),S.current=null},S.current=i,i.start()},z=()=>{R.current=!1,S.current&&S.current.stop()},s=i=>{i.preventDefault(),v?z():Z()},b=X.html`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,T=X.html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,_=X.html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,C=d&&p,M=y;return X.html`
    <form class="cw-input-form" onSubmit=${L}>
      <input
        type="file"
        ref=${g}
        style="display: none"
        multiple
        onChange=${H}
      />
      ${$.length>0&&X.html`
        <div class="cw-file-chips">
          ${$.map((i,I)=>X.html`
            <div class="cw-file-chip" key=${I}>
              <span class="cw-file-chip-icon">${ce(i.type)}</span>
              <span class="cw-file-chip-name" title=${i.name}>${i.name.length>20?i.name.substring(0,17)+"...":i.name}</span>
              <span class="cw-file-chip-size">(${le(i.size)})</span>
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
        ref=${f}
        class="cw-input"
        placeholder=${P(o)}
        value=${w}
        onInput=${i=>h(i.target.value)}
        onKeyDown=${B}
        disabled=${n}
        rows="1"
      />
      ${M&&X.html`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${W}
          disabled=${n}
          title="Attach files"
        >
          ${_}
        </button>
      `}
      ${C&&X.html`
        <button
          type="button"
          class=${`cw-voice-btn ${v?"cw-voice-btn-recording":""}`}
          onClick=${s}
          disabled=${n}
          title=${v?"Stop recording":"Voice input"}
        >
          ${T}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&k?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&k?"#dc2626":r}}
        onClick=${U}
        onMouseEnter=${()=>u(!0)}
        onMouseLeave=${()=>u(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?b:X.html`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}var me=require("htm/preact");function _e({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:r,onNewConversation:d,onSwitchConversation:y}){return me.html`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${r}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${d}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&me.html`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&me.html`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(w=>me.html`
          <div 
            key=${w.id}
            class="cw-conversation-item ${w.id===o?"cw-conversation-active":""}"
            onClick=${()=>y(w.id)}
          >
            <div class="cw-conversation-title">${P(w.title||"Untitled")}</div>
            <div class="cw-conversation-date">${ye(w.updatedAt||w.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${r}
    />
  `}var ae=require("htm/preact"),Je=require("preact/compat");function Me({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:o,onToggleThinking:r,disabled:d}){let[y,w]=(0,Je.useState)(!1);if(!e||e.length===0)return null;let h=e.find(l=>l.id===t),$=h?.name||"Select Model",m=h?.supports_thinking||!1,k=()=>{d||w(!y)},u=l=>{n(l),w(!1)},v=l=>{l.stopPropagation(),r&&m&&r(!o)};return ae.html`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${k}
        disabled=${d}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${P($)}</span>
        <span class="cw-model-chevron">${y?"\u25B2":"\u25BC"}</span>
      </button>

      ${m&&r&&ae.html`
        <button
          class="cw-thinking-toggle ${o?"cw-thinking-enabled":""}"
          onClick=${v}
          disabled=${d}
          title=${o?"Thinking enabled - click to disable":"Enable extended thinking"}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${y&&ae.html`
        <div class="cw-model-dropdown">
          ${e.map(l=>ae.html`
            <button
              key=${l.id}
              class="cw-model-option ${l.id===t?"cw-model-option-selected":""}"
              onClick=${()=>u(l.id)}
            >
              <span class="cw-model-option-name">
                ${P(l.name)}
                ${l.supports_thinking&&ae.html`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${P(l.provider)}</span>
              ${l.description&&ae.html`
                <span class="cw-model-option-desc">${P(l.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var Y=require("htm/preact"),te=require("preact/compat"),at={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},ot={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function rt({task:e,onUpdate:t,onRemove:n,depth:o=0}){let[r,d]=(0,te.useState)(!1),[y,w]=(0,te.useState)(e.name),h=(0,te.useCallback)(()=>{let u={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:u[e.state]||"not_started"})},[e,t]),$=(0,te.useCallback)(()=>{y.trim()&&y!==e.name&&t(e.id,{name:y.trim()}),d(!1)},[e,y,t]),m=(0,te.useCallback)(u=>{u.key==="Enter"&&$(),u.key==="Escape"&&(w(e.name),d(!1))},[$,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return Y.html`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${o*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${h}
        title=${ot[e.state]}
      >
        ${at[e.state]}
      </button>
      
      ${r?Y.html`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${y}
          onInput=${u=>w(u.target.value)}
          onBlur=${$}
          onKeyDown=${m}
          autoFocus
        />
      `:Y.html`
        <span 
          class="cw-task-name" 
          onClick=${()=>d(!0)}
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
  `}function xe({tasks:e,progress:t,isLoading:n,error:o,onUpdate:r,onRemove:d,onClear:y,onRefresh:w}){let h=(0,te.useCallback)(k=>{let u=new Map,v=[];return k.forEach(l=>{u.set(l.id,{...l,children:[]})}),k.forEach(l=>{let p=u.get(l.id);l.parent_id&&u.has(l.parent_id)?u.get(l.parent_id).children.push(p):v.push(p)}),v},[]),$=(0,te.useCallback)((k,u=0)=>Y.html`
      <${rt}
        key=${k.id}
        task=${k}
        depth=${u}
        onUpdate=${r}
        onRemove=${d}
      />
      ${k.children?.map(v=>$(v,u+1))}
    `,[r,d]),m=h(e);return n&&e.length===0?Y.html`<div class="cw-tasks-loading">Loading tasks...</div>`:Y.html`
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
          <button class="cw-tasks-action-btn" onClick=${w} title="Refresh">↻</button>
          ${e.length>0&&Y.html`
            <button class="cw-tasks-action-btn" onClick=${y} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${o&&Y.html`<div class="cw-tasks-error">${o}</div>`}
      
      <div class="cw-tasks-list">
        ${m.length===0?Y.html`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:m.map(k=>$(k))}
      </div>
    </div>
  `}var O=require("preact/compat");function Ie(e,t,n){let[o,r]=(0,O.useState)([]),[d,y]=(0,O.useState)(!1),[w,h]=(0,O.useState)(null),[$,m]=(0,O.useState)(()=>n?.get(e.conversationIdKey)||null),[k,u]=(0,O.useState)(!1),[v,l]=(0,O.useState)(!1),[p,f]=(0,O.useState)(0),g=(0,O.useRef)(null),S=(0,O.useRef)(null);(0,O.useEffect)(()=>{$&&n?.set(e.conversationIdKey,$)},[$,e.conversationIdKey,n]);let R=(0,O.useCallback)(async(s,b,T)=>{g.current&&g.current.close();let _=e.apiPaths.runEvents.replace("{runId}",s),C=`${e.backendUrl}${_}`;b&&(C+=`?anonymous_token=${encodeURIComponent(b)}`);let M=new EventSource(C);g.current=M;let i="";M.addEventListener("assistant.message",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let c=a.payload.content;c&&(i+=c,r(x=>{let K=x[x.length-1];return K?.role==="assistant"&&K.id.startsWith("assistant-stream-")?[...x.slice(0,-1),{...K,content:i}]:[...x,{id:"assistant-stream-"+Date.now(),role:"assistant",content:i,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.call",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.call",a.payload),r(c=>[...c,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.result",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.result",a.payload);let c=a.payload.result,x=c?.error;r(K=>[...K,{id:"tool-result-"+Date.now(),role:"system",content:x?`\u274C ${c.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:c,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("custom",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&r(c=>[...c,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.start",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),r(c=>[...c,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.end",A=>{try{let a=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),r(c=>[...c,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let I=A=>{try{let a=JSON.parse(A.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let c=a.payload.error||"Agent run failed";h(c),r(x=>[...x,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${c}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}y(!1),M.close(),g.current=null,i&&T&&T(i)};M.addEventListener("run.succeeded",I),M.addEventListener("run.failed",I),M.addEventListener("run.cancelled",I),M.addEventListener("run.timed_out",I),M.onerror=()=>{y(!1),M.close(),g.current=null}},[e]),L=(0,O.useCallback)(async(s,b={},T={})=>{if(!s.trim()||d)return;let _=[],C={};typeof b=="function"?C={onAssistantMessage:b}:Array.isArray(b)?(_=b,C=T):C=b||{};let{model:M,thinking:i,onAssistantMessage:I,supersedeFromMessageIndex:A}=C;y(!0),h(null);let a={id:ie(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:_.length>0?_.map(c=>({name:c.name,size:c.size,type:c.type})):void 0};r(c=>[...c,a]);try{let c=await t.getOrCreateSession(),x;if(_.length>0){let V=e.apiCaseStyle!=="camel",Be=ge=>V?he(ge):ge,ne=new FormData;ne.append(Be("agentKey"),e.agentKey),$&&ne.append(Be("conversationId"),$),ne.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),ne.append("metadata",JSON.stringify(V?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&ne.append("model",M),i&&ne.append("thinking","true"),_.forEach(ge=>{ne.append("files",ge)}),x=t.getFetchOptions({method:"POST",body:ne},c)}else{let V=t.transformRequest({agentKey:e.agentKey,conversationId:$,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...i&&{thinking:!0},...A!==void 0&&{supersedeFromMessageIndex:A}});x=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)},c)}let K=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,x),pe=c;if(K.status===401){t.clearSession();let V=await t.getOrCreateSession(!0);V&&(pe=V,_.length>0?x=t.getFetchOptions({method:"POST",body:x.body},V):x=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:x.body},V),K=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,x))}if(!K.ok){let V=await K.json().catch(()=>({}));throw new Error(V.error||V.detail||`HTTP ${K.status}`)}let qe=await K.json(),fe=t.transformResponse(qe);S.current=fe.id,!$&&fe.conversationId&&m(fe.conversationId),await R(fe.id,pe,I)}catch(c){h(c.message||"Failed to send message"),y(!1)}finally{S.current=null}},[e,t,$,d,R]),H=(0,O.useCallback)(async()=>{let s=S.current;if(!(!s||!d))try{let b=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${b}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),y(!1),S.current=null,r(_=>[..._,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(b){console.error("[ChatWidget] Failed to cancel run:",b)}},[e,t,d]),J=(0,O.useCallback)(()=>{r([]),m(null),h(null),u(!1),f(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),W=s=>{let b={id:ie(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...b,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(_=>({id:ie(),role:"assistant",content:`\u{1F527} ${_.function?.name||_.name||"tool"}`,timestamp:b.timestamp,type:"tool_call",metadata:{toolName:_.function?.name||_.name,arguments:_.function?.arguments||_.arguments,toolCallId:_.id}}));let T=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!T?.trim()?null:{...b,content:T,type:"message"}},B=(0,O.useCallback)(async s=>{y(!0),r([]),m(s);try{let b=await t.getOrCreateSession(),_=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`,C=await fetch(_,t.getFetchOptions({method:"GET"},b));if(C.ok){let M=await C.json(),i=t.transformResponse(M);i.messages&&r(i.messages.flatMap(W).filter(Boolean)),u(i.hasMore||!1),f(i.messages?.length||0)}else C.status===404&&(m(null),n?.set(e.conversationIdKey,null))}catch(b){console.error("[ChatWidget] Failed to load conversation:",b)}finally{y(!1)}},[e,t,n]),U=(0,O.useCallback)(async()=>{if(!(!$||v||!k)){l(!0);try{let s=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${$}/?limit=10&offset=${p}`,_=await fetch(T,t.getFetchOptions({method:"GET"},s));if(_.ok){let C=await _.json(),M=t.transformResponse(C);if(M.messages?.length>0){let i=M.messages.flatMap(W).filter(Boolean);r(I=>[...i,...I]),f(I=>I+M.messages.length),u(M.hasMore||!1)}else u(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{l(!1)}}},[e,t,$,p,v,k]),Z=(0,O.useCallback)(async(s,b,T={})=>{if(d)return;let _=o[s];if(!_||_.role!=="user")return;let C=o.slice(0,s);r(C),await L(b,{...T,supersedeFromMessageIndex:s})},[o,d,L]),z=(0,O.useCallback)(async(s,b={})=>{if(d)return;let T=o[s];if(!T)return;let _=s,C=T;if(T.role==="assistant"){for(let i=s-1;i>=0;i--)if(o[i].role==="user"){_=i,C=o[i];break}if(C.role!=="user")return}else if(T.role!=="user")return;let M=o.slice(0,_);r(M),await L(C.content,{...b,supersedeFromMessageIndex:_})},[o,d,L]);return(0,O.useEffect)(()=>()=>{g.current&&g.current.close()},[]),{messages:o,isLoading:d,error:w,conversationId:$,hasMoreMessages:k,loadingMoreMessages:v,sendMessage:L,cancelRun:H,clearMessages:J,loadConversation:B,loadMoreMessages:U,setConversationId:m,editMessage:Z,retryMessage:z}}var j=require("preact/compat"),ze="cw_thinking_enabled";function Ee(e,t,n){let[o,r]=(0,j.useState)([]),[d,y]=(0,j.useState)(null),[w,h]=(0,j.useState)(null),[$,m]=(0,j.useState)(!1),[k,u]=(0,j.useState)(!1);(0,j.useEffect)(()=>{(async()=>{if(e.showModelSelector){m(!0);try{let S=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(S.ok){let R=await S.json(),L=R.models||[];r(L),h(R.default);let H=n?.get(e.modelKey);H&&L.some(W=>W.id===H)?y(H):y(R.default),n?.get(ze)==="true"&&u(!0)}}catch(S){console.warn("[ChatWidget] Failed to load models:",S)}finally{m(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let v=(0,j.useCallback)(g=>{y(g),n?.set(e.modelKey,g)},[e.modelKey,n]),l=(0,j.useCallback)(g=>{u(g),n?.set(ze,g?"true":"false")},[n]),p=(0,j.useCallback)(()=>o.find(g=>g.id===d)||null,[o,d]),f=(0,j.useCallback)(()=>p()?.supports_thinking||!1,[p]);return{availableModels:o,selectedModel:d,defaultModel:w,isLoading:$,selectModel:v,getSelectedModelInfo:p,thinkingEnabled:k,toggleThinking:l,supportsThinking:f}}var G=require("preact/compat");function Re(e,t){let[n,o]=(0,G.useState)(null),[r,d]=(0,G.useState)(!1),[y,w]=(0,G.useState)(null),h=e.apiPaths?.tasks||"/api/agent/tasks/",$=(0,G.useCallback)(async()=>{d(!0),w(null);try{let p=`${e.backendUrl}${h}`,f=await fetch(p,t.getFetchOptions({method:"GET"}));if(f.ok){let g=await f.json();o(g)}else{let g=await f.json().catch(()=>({}));w(g.error||"Failed to load tasks")}}catch(p){console.error("[useTasks] Failed to load task list:",p),w("Failed to load tasks")}finally{d(!1)}},[e.backendUrl,h,t]),m=(0,G.useCallback)(async p=>{if(!n)return null;try{let f=`${e.backendUrl}${h}${n.id}/add_task/`,g=await fetch(f,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));if(g.ok){let S=await g.json();return await $(),S}else{let S=await g.json().catch(()=>({}));return w(S.error||"Failed to add task"),null}}catch(f){return console.error("[useTasks] Failed to add task:",f),w("Failed to add task"),null}},[e.backendUrl,h,n,t,$]),k=(0,G.useCallback)(async(p,f)=>{if(!n)return null;try{let g=`${e.backendUrl}${h}${n.id}/update_task/${p}/`,S=await fetch(g,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}));if(S.ok){let R=await S.json();return await $(),R}else{let R=await S.json().catch(()=>({}));return w(R.error||"Failed to update task"),null}}catch(g){return console.error("[useTasks] Failed to update task:",g),w("Failed to update task"),null}},[e.backendUrl,h,n,t,$]),u=(0,G.useCallback)(async p=>{if(!n)return!1;try{let f=`${e.backendUrl}${h}${n.id}/remove_task/${p}/`,g=await fetch(f,t.getFetchOptions({method:"DELETE"}));if(g.ok)return await $(),!0;{let S=await g.json().catch(()=>({}));return w(S.error||"Failed to remove task"),!1}}catch(f){return console.error("[useTasks] Failed to remove task:",f),w("Failed to remove task"),!1}},[e.backendUrl,h,n,t,$]),v=(0,G.useCallback)(async()=>{if(!n)return!1;try{let p=`${e.backendUrl}${h}${n.id}/clear/`,f=await fetch(p,t.getFetchOptions({method:"POST"}));if(f.ok)return await $(),!0;{let g=await f.json().catch(()=>({}));return w(g.error||"Failed to clear tasks"),!1}}catch(p){return console.error("[useTasks] Failed to clear tasks:",p),w("Failed to clear tasks"),!1}},[e.backendUrl,h,n,t,$]),l=(0,G.useCallback)(()=>w(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:r,error:y,loadTaskList:$,addTask:m,updateTask:k,removeTask:u,clearTasks:v,clearError:l}}function Ae(e,t,n){let o=m=>!m||typeof m!="object"||e.apiCaseStyle==="camel"?m:re(m),r=m=>!m||typeof m!="object"||e.apiCaseStyle==="snake"?m:oe(m),d=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",y=(m=null)=>{let k=d(),u={},v=m||e.authToken||t().authToken;if(k==="token"&&v){let l=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";u[l]=p?`${p} ${v}`:v}else if(k==="jwt"&&v){let l=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";u[l]=p?`${p} ${v}`:v}else if(k==="anonymous"&&v){let l=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";u[l]=v}if(k==="session"){let l=ve(e.csrfCookieName);l&&(u["X-CSRFToken"]=l)}return u};return{getAuthStrategy:d,getAuthHeaders:y,getFetchOptions:(m={},k=null)=>{let u=d(),v={...m},l=y(k);return console.log("[ChatWidget] getFetchOptions - strategy:",u,"overrideToken:",k,"authHeaders:",l),v.headers={...v.headers,...l},u==="session"&&(v.credentials="include"),v},getOrCreateSession:async(m=!1)=>{let k=d(),u=t(),v=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||u.authToken;if(!m){if(u.authToken)return u.authToken;let l=u.storage?.get(v);if(l)return n(p=>({...p,authToken:l})),l}try{let l=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${l}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let f=await p.json();return n(g=>({...g,authToken:f.token})),u.storage?.set(v,f.token),f.token}}catch(l){console.warn("[ChatWidget] Failed to create session:",l)}return null},clearSession:()=>{let m=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(u=>({...u,authToken:null})),k.storage?.set(m,null)},transformRequest:o,transformResponse:r}}function ue({config:e,onStateChange:t,markdownParser:n,apiRef:o}){let[r,d]=(0,E.useState)(e.embedded||e.forceOpen===!0),[y,w]=(0,E.useState)(!1),[h,$]=(0,E.useState)(!1),[m,k]=(0,E.useState)(!1),[u,v]=(0,E.useState)([]),[l,p]=(0,E.useState)("chat"),[f,g]=(0,E.useState)(!1),[S,R]=(0,E.useState)(e.enableTTS),[L,H]=(0,E.useState)(!1),[J,W]=(0,E.useState)(null);(0,E.useEffect)(()=>{e.forceOpen!==void 0&&d(e.forceOpen)},[e.forceOpen]);let B=(0,E.useMemo)(()=>ke(e.containerId),[e.containerId]),[U,Z]=(0,E.useState)(e.authToken||null),z=(0,E.useMemo)(()=>Ae(e,()=>({authToken:U,storage:B}),K=>{let pe=K({authToken:U,storage:B});pe.authToken!==U&&Z(pe.authToken)}),[e,U,B]),s=Ie(e,z,B),b=Ee(e,z,B),T=Re(e,z);(0,E.useEffect)(()=>{for(let c=s.messages.length-1;c>=0;c--){let x=s.messages[c];if(x.type==="sub_agent_start"){W({key:x.metadata?.subAgentKey,name:x.metadata?.agentName});return}if(x.type==="sub_agent_end"){W(null);return}}},[s.messages]),(0,E.useEffect)(()=>{let c=B.get(e.conversationIdKey);c&&s.loadConversation(c)},[]),(0,E.useEffect)(()=>{t&&t({isOpen:r,isExpanded:y,debugMode:h,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[r,y,h,s.messages,s.conversationId,s.isLoading,s.error]);let _=(0,E.useCallback)(async()=>{if(e.showConversationSidebar){g(!0);try{let c=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,x=await fetch(c,z.getFetchOptions({method:"GET"}));if(x.ok){let K=await x.json();v(K.results||K)}}catch(c){console.error("[ChatWidget] Failed to load conversations:",c),v([])}finally{g(!1)}}},[e,z]),C=(0,E.useCallback)(()=>{let c=!m;k(c),c&&_()},[m,_]),M=(0,E.useCallback)(c=>{c!==s.conversationId&&s.loadConversation(c),k(!1)},[s]),i=(0,E.useCallback)(()=>{s.clearMessages(),k(!1)},[s]),I=(0,E.useCallback)(c=>{s.sendMessage(c,{model:b.selectedModel,thinking:b.thinkingEnabled&&b.supportsThinking(),onAssistantMessage:x=>{}})},[s,S,b.selectedModel,b.thinkingEnabled,b.supportsThinking]),A=(0,E.useCallback)(c=>{p(c),c==="tasks"&&T.loadTaskList()},[T]);if((0,E.useEffect)(()=>{o&&(o.current={open:()=>d(!0),close:()=>d(!1),send:c=>I(c),clearMessages:()=>s.clearMessages(),toggleTTS:()=>R(c=>!c),stopSpeech:()=>H(!1),setAuth:c=>{c.token!==void 0&&Z(c.token)},clearAuth:()=>Z(null)})},[s,o,I]),!e.embedded&&!r)return q.html`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>d(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",y&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return q.html`
    <div class=${a} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&q.html`
        <${_e}
          isOpen=${m}
          conversations=${u}
          conversationsLoading=${f}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${i}
          onSwitchConversation=${M}
        />
      `}
      
      <${be}
        config=${e}
        debugMode=${h}
        isExpanded=${y}
        isSpeaking=${L}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${J}
        onClose=${()=>d(!1)}
        onToggleExpand=${()=>w(!y)}
        onToggleDebug=${()=>$(!h)}
        onToggleTTS=${()=>R(!S)}
        onClear=${s.clearMessages}
        onToggleSidebar=${C}
      />

      ${e.showTasksTab!==!1&&q.html`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${l==="chat"?"cw-tab-active":""}`}
            onClick=${()=>A("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${l==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>A("tasks")}
          >
            Tasks ${T.progress.total>0?q.html`<span class="cw-tab-badge">${T.progress.completed}/${T.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${h&&q.html`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${l==="chat"?q.html`
        <${Se}
          messages=${s.messages}
          isLoading=${s.isLoading}
          hasMoreMessages=${s.hasMoreMessages}
          loadingMoreMessages=${s.loadingMoreMessages}
          onLoadMore=${s.loadMoreMessages}
          onEditMessage=${s.editMessage}
          onRetryMessage=${s.retryMessage}
          debugMode=${h}
          markdownParser=${n}
          emptyStateTitle=${e.emptyStateTitle}
          emptyStateMessage=${e.emptyStateMessage}
        />

        ${s.error&&q.html`<div class="cw-error-bar">${s.error}</div>`}

        ${e.showModelSelector&&b.availableModels.length>0&&q.html`
          <${Me}
            availableModels=${b.availableModels}
            selectedModel=${b.selectedModel}
            onSelectModel=${b.selectModel}
            thinkingEnabled=${b.thinkingEnabled}
            onToggleThinking=${b.toggleThinking}
            disabled=${s.isLoading}
          />
        `}

        <${Te}
          onSend=${I}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:q.html`
        <${xe}
          tasks=${T.tasks}
          progress=${T.progress}
          isLoading=${T.isLoading}
          error=${T.error}
          onUpdate=${T.updateTask}
          onRemove=${T.removeTask}
          onClear=${T.clearTasks}
          onRefresh=${T.loadTaskList}
        />
      `}
    </div>
  `}var Fe={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Oe(e){let t={...Fe.apiPaths,...e.apiPaths||{}};return{...Fe,...e,apiPaths:t}}var He=require("preact/compat"),Ve=require("htm/preact");var De=new Map,it=0,F=null,We=class{constructor(t={}){Ue(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++it}`,this.config=Oe(t),this.container=null,this._state={},this._apiRef={current:null},De.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&(0,He.render)(Ve.html`<${ue}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Pe._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&((0,He.render)(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),De.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Ge(e={}){return new We(e).init()}function lt(e={}){return F&&F.destroy(),F=Ge(e),F}function ct(){F&&(F.destroy(),F=null)}function dt(){F&&F.open()}function ut(){F&&F.close()}function pt(e){F&&F.send(e)}function ht(){F&&F.clearMessages()}function mt(){F&&F.toggleTTS()}function ft(){F&&F.stopSpeech()}function gt(e){F&&F.setAuth(e)}function $t(){F&&F.clearAuth()}function yt(){return F?F.getState():null}function wt(){return F?F.getConfig():null}var Pe={createInstance:Ge,getInstance:e=>De.get(e),getAllInstances:()=>Array.from(De.values()),init:lt,destroy:ct,open:dt,close:ut,send:pt,clearMessages:ht,toggleTTS:mt,stopSpeech:ft,setAuth:gt,clearAuth:$t,getState:yt,getConfig:wt,_enhancedMarkdownParser:null};typeof window<"u"&&(window.ChatWidget=Pe);var kt=ue;
