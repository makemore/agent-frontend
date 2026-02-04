var ye=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertyNames;var Qe=Object.prototype.hasOwnProperty;var et=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tt=(e,t)=>{for(var n in t)ye(e,n,{get:t[n],enumerable:!0})},nt=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ze(t))!Qe.call(e,o)&&o!==n&&ye(e,o,{get:()=>t[o],enumerable:!(a=Ye(t,o))||a.enumerable});return e};var st=e=>nt(ye({},"__esModule",{value:!0}),e);var je=(e,t,n)=>(et(e,typeof t!="symbol"?t+"":t,n),n);var Ct={};tt(Ct,{ChatWidget:()=>pe,ChatWidgetAPI:()=>Le,DEFAULT_CONFIG:()=>Oe,Header:()=>Ce,InputForm:()=>_e,Message:()=>Se,MessageList:()=>Te,ModelSelector:()=>xe,Sidebar:()=>Me,TaskList:()=>Ie,camelToSnake:()=>he,createApiClient:()=>Fe,createStorage:()=>ve,default:()=>bt,formatDate:()=>we,formatFileSize:()=>ce,generateId:()=>le,getCSRFToken:()=>be,getFileTypeIcon:()=>de,keysToCamel:()=>re,keysToSnake:()=>ie,mergeConfig:()=>De,parseMarkdown:()=>ke,snakeToCamel:()=>We,useChat:()=>Ee,useModels:()=>Re,useTasks:()=>Ae});module.exports=st(Ct);var q=require("htm/preact"),E=require("preact/compat");var Q=require("htm/preact");function We(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function he(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function re(e){return Array.isArray(e)?e.map(re):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[We(t),re(n)])):e}function ie(e){return Array.isArray(e)?e.map(ie):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[he(t),ie(n)])):e}function le(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function L(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function we(e){if(!e)return"";try{let t=new Date(e),a=new Date-t,o=Math.floor(a/6e4),l=Math.floor(a/36e5),h=Math.floor(a/864e5);return o<1?"Just now":o<60?`${o}m ago`:l<24?`${l}h ago`:h<7?`${h}d ago`:t.toLocaleDateString()}catch{return""}}function ke(e,t=null){if(t)return t(e);let n=L(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function ve(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,a){try{let o=t(n);a===null?localStorage.removeItem(o):localStorage.setItem(o,a)}catch{}}}}function be(e="csrftoken"){let t=document.cookie.split(";");for(let a of t){let[o,l]=a.trim().split("=");if(o===e)return decodeURIComponent(l)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function ce(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,a)).toFixed(1))+" "+n[a]}function de(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function at(e){if(!e||typeof e!="string")return 0;let t=e.replace("#","");if(t.length!==6&&t.length!==3)return 0;let n=t.length===3?t.split("").map(u=>u+u).join(""):t,a=parseInt(n.substr(0,2),16)/255,o=parseInt(n.substr(2,2),16)/255,l=parseInt(n.substr(4,2),16)/255,h=u=>u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4);return .2126*h(a)+.7152*h(o)+.0722*h(l)}function Je(e){return at(e)>.179?"#000000":"#ffffff"}function Ce({config:e,debugMode:t,isExpanded:n,isSpeaking:a,messagesCount:o,isLoading:l,currentAgent:h,onClose:u,onToggleExpand:m,onToggleDebug:y,onToggleTTS:f,onClear:k,onToggleSidebar:d}){let{title:v,primaryColor:c,embedded:p,showConversationSidebar:g,showClearButton:$,showDebugButton:S,enableDebugMode:R,showTTSButton:W,showExpandButton:N,enableTTS:J,elevenLabsApiKey:H,ttsProxyUrl:U}=e,B=H||U;return Q.html`
    <div class="cw-header" style=${{backgroundColor:c}}>
      ${g&&Q.html`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${d}
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
        <span class="cw-title">${L(v)}</span>
        ${h&&Q.html`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${L(h.name||h.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${$&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${l||o===0}
          >🗑️</button>
        `}
        
        ${S&&R&&Q.html`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${y}
            title="Debug"
          >🐛</button>
        `}
        
        ${W&&B&&Q.html`
          <button 
            class="cw-header-btn ${J?"cw-btn-active":""}" 
            onClick=${f}
            title="TTS"
          >${J?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${N&&!p&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${m}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!p&&Q.html`
          <button 
            class="cw-header-btn" 
            onClick=${u}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}var se=require("htm/preact"),ue=require("preact/compat");var P=require("htm/preact"),ee=require("preact/compat");function Ke({msg:e,show:t,onToggle:n}){return t?P.html`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:P.html`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function ze({onEdit:e,onRetry:t,isLoading:n,position:a,showEdit:o=!0}){return n?null:P.html`
    <div class="cw-message-actions cw-message-actions-${a||"left"}">
      ${o&&P.html`
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
  `}function ot({initialContent:e,onSave:t,onCancel:n}){let[a,o]=(0,ee.useState)(e),l=(0,ee.useRef)(null);return(0,ee.useEffect)(()=>{l.current&&(l.current.focus(),l.current.setSelectionRange(a.length,a.length),l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[]),P.html`
    <div class="cw-inline-edit">
      <textarea
        ref=${l}
        class="cw-inline-edit-input"
        value=${a}
        onInput=${m=>{o(m.target.value),m.target.style.height="auto",m.target.style.height=m.target.scrollHeight+"px"}}
        onKeyDown=${m=>{m.key==="Enter"&&!m.shiftKey?(m.preventDefault(),a.trim()&&t(a.trim())):m.key==="Escape"&&n()}}
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
          onClick=${()=>a.trim()&&t(a.trim())}
          disabled=${!a.trim()}
          title="Save & Resend (Enter)"
        >Save & Send</button>
      </div>
    </div>
  `}function Se({msg:e,debugMode:t,markdownParser:n,onEdit:a,onRetry:o,isLoading:l,messageIndex:h}){let[u,m]=(0,ee.useState)(!1),[y,f]=(0,ee.useState)(!1),[k,d]=(0,ee.useState)(!1),v=e.role==="user",c=e.role==="system",p=e.type==="tool_call",g=e.type==="tool_result",$=e.type==="error",S=e.type==="sub_agent_start",R=e.type==="sub_agent_end",W=e.type==="agent_context";if(c&&!t)return null;if(S||R||W)return P.html`
      <div class="cw-agent-context ${S?"cw-agent-delegating":""} ${R?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${S?"\u{1F517}":R?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&P.html`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&P.html`<${Ke} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `;if(p||g){let b=e.metadata?.arguments||e.metadata?.result,M=i=>{if(typeof i=="string")try{return JSON.stringify(JSON.parse(i),null,2)}catch{return i}return JSON.stringify(i,null,2)};return P.html`
      <div class="cw-tool-message ${g?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&m(!u)}>
          ${e.content}
          ${b&&P.html`<span class="cw-tool-expand">${u?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${u&&b&&P.html`
          <pre class="cw-tool-details">${L(M(p?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&P.html`<${Ke} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `}let N=["cw-message",v&&"cw-message-user",$&&"cw-message-error"].filter(Boolean).join(" "),J=`cw-message-row ${v?"cw-message-row-user":""}`,H=e.role==="assistant"?ke(e.content,n):L(e.content),U=e.files&&e.files.length>0,B=()=>U?P.html`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?P.html`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:P.html`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${de(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${ce(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,Z=b=>{d(!1),a&&a(h,b)},z=()=>{o&&o(h)};if(v&&k)return P.html`
      <div class=${J} style="position: relative;">
        ${B()}
        <${ot}
          initialContent=${e.content}
          onSave=${Z}
          onCancel=${()=>d(!1)}
        />
      </div>
    `;let s=v&&a&&o,T=e.role==="assistant"&&o&&!l;return P.html`
    <div class="${J} ${s||T?"cw-message-row-with-actions":""}">
      ${B()}
      ${s&&P.html`
        <div class="cw-user-actions-wrapper">
          <${ze}
            onEdit=${()=>d(!0)}
            onRetry=${z}
            isLoading=${l}
            position="left"
            showEdit=${!0}
          />
          <div class=${N} dangerouslySetInnerHTML=${{__html:H}} />
        </div>
      `}
      ${!s&&P.html`
        <div class=${N} dangerouslySetInnerHTML=${{__html:H}} />
      `}
      ${T&&P.html`
        <${ze}
          onRetry=${z}
          isLoading=${l}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&P.html`<${Ke} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
    </div>
  `}function Te({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:a,onLoadMore:o,onEditMessage:l,onRetryMessage:h,debugMode:u,markdownParser:m,emptyStateTitle:y,emptyStateMessage:f}){let k=(0,ue.useRef)(null),d=(0,ue.useRef)(!0),v=p=>{let g=p.target,$=g.scrollHeight-g.scrollTop-g.clientHeight<100;if(d.current=$,g.scrollTop<50&&n&&!a){let S=g.scrollHeight;o().then(()=>{let R=g.scrollHeight;g.scrollTop=R-S+g.scrollTop})}};(0,ue.useEffect)(()=>{let p=k.current;p&&d.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),(0,ue.useEffect)(()=>{let p=k.current;p&&e.length<=2&&(d.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let c=e.length===0;return se.html`
    <div class="cw-messages" ref=${k} onScroll=${v}>
      ${c&&se.html`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${L(y)}</h3>
          <p>${L(f)}</p>
        </div>
      `}
      
      ${!c&&n&&se.html`
        <div class="cw-load-more" onClick=${o}>
          ${a?se.html`<span class="cw-spinner"></span><span>Loading...</span>`:se.html`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((p,g)=>se.html`
        <${Se}
          key=${p.id}
          msg=${p}
          messageIndex=${g}
          debugMode=${u}
          markdownParser=${m}
          onEdit=${l}
          onRetry=${h}
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
  `}var X=require("htm/preact"),K=require("preact/compat");var Ne=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function _e({onSend:e,onCancel:t,isLoading:n,placeholder:a,primaryColor:o,enableVoice:l=!0,enableFiles:h=!0}){let[u,m]=(0,K.useState)(""),[y,f]=(0,K.useState)([]),[k,d]=(0,K.useState)(!1),[v,c]=(0,K.useState)(!1),[p]=(0,K.useState)(()=>!!Ne),g=(0,K.useRef)(null),$=(0,K.useRef)(null),S=(0,K.useRef)(null),R=(0,K.useRef)(!1);(0,K.useEffect)(()=>{!n&&g.current&&g.current.focus()},[n]),(0,K.useEffect)(()=>{g.current&&(g.current.style.height="auto",g.current.style.height=Math.min(g.current.scrollHeight,150)+"px")},[u]),(0,K.useEffect)(()=>()=>{R.current=!1,S.current&&S.current.abort()},[]);let W=i=>{i.preventDefault(),(u.trim()||y.length>0)&&!n&&(e(u,y),m(""),f([]),g.current&&(g.current.style.height="auto"),$.current&&($.current.value=""))},N=i=>{let I=Array.from(i.target.files||[]);I.length>0&&f(A=>[...A,...I])},J=i=>{f(I=>I.filter((A,r)=>r!==i))},H=i=>{i.preventDefault(),$.current&&!n&&$.current.click()},U=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),W(i))},B=i=>{n&&t&&(i.preventDefault(),t())},Z=()=>{if(!Ne||n)return;R.current=!0;let i=new Ne;i.continuous=!0,i.interimResults=!0,i.lang=navigator.language||"en-US";let I=u,A="";i.onstart=()=>{c(!0)},i.onresult=r=>{A="";for(let x=r.resultIndex;x<r.results.length;x++){let w=r.results[x][0].transcript;r.results[x].isFinal?I+=(I?" ":"")+w:A+=w}m(I+(A?" "+A:""))},i.onerror=r=>{if(r.error==="no-speech"||r.error==="aborted"){console.log("[ChatWidget] Speech recognition:",r.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",r.error),R.current=!1,c(!1),m(I||u)},i.onend=()=>{if(R.current){console.log("[ChatWidget] Recognition paused, restarting...");try{i.start();return}catch(r){console.warn("[ChatWidget] Could not restart recognition:",r)}}c(!1),I&&m(I),S.current=null},S.current=i,i.start()},z=()=>{R.current=!1,S.current&&S.current.stop()},s=i=>{i.preventDefault(),v?z():Z()},C=X.html`
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
  `,b=l&&p,M=h;return X.html`
    <form class="cw-input-form" onSubmit=${W}>
      <input
        type="file"
        ref=${$}
        style="display: none"
        multiple
        onChange=${N}
      />
      ${y.length>0&&X.html`
        <div class="cw-file-chips">
          ${y.map((i,I)=>X.html`
            <div class="cw-file-chip" key=${I}>
              <span class="cw-file-chip-icon">${de(i.type)}</span>
              <span class="cw-file-chip-name" title=${i.name}>${i.name.length>20?i.name.substring(0,17)+"...":i.name}</span>
              <span class="cw-file-chip-size">(${ce(i.size)})</span>
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
        ref=${g}
        class="cw-input"
        placeholder=${L(a)}
        value=${u}
        onInput=${i=>m(i.target.value)}
        onKeyDown=${U}
        disabled=${n}
        rows="1"
      />
      ${M&&X.html`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${H}
          disabled=${n}
          title="Attach files"
        >
          ${_}
        </button>
      `}
      ${b&&X.html`
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
        style=${{backgroundColor:n&&k?"#dc2626":o}}
        onClick=${B}
        onMouseEnter=${()=>d(!0)}
        onMouseLeave=${()=>d(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?C:X.html`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}var me=require("htm/preact");function Me({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:a,onClose:o,onNewConversation:l,onSwitchConversation:h}){return me.html`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${o}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${l}>
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
        
        ${t.map(u=>me.html`
          <div 
            key=${u.id}
            class="cw-conversation-item ${u.id===a?"cw-conversation-active":""}"
            onClick=${()=>h(u.id)}
          >
            <div class="cw-conversation-title">${L(u.title||"Untitled")}</div>
            <div class="cw-conversation-date">${we(u.updatedAt||u.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${o}
    />
  `}var oe=require("htm/preact"),Ve=require("preact/compat");function xe({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:a,onToggleThinking:o,disabled:l}){let[h,u]=(0,Ve.useState)(!1);if(!e||e.length===0)return null;let m=e.find(c=>c.id===t),y=m?.name||"Select Model",f=m?.supports_thinking||!1,k=()=>{l||u(!h)},d=c=>{n(c),u(!1)},v=c=>{c.stopPropagation(),o&&f&&o(!a)};return oe.html`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${k}
        disabled=${l}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${L(y)}</span>
        <span class="cw-model-chevron">${h?"\u25B2":"\u25BC"}</span>
      </button>

      ${f&&o&&oe.html`
        <button
          class="cw-thinking-toggle ${a?"cw-thinking-enabled":""}"
          onClick=${v}
          disabled=${l}
          title=${a?"Thinking enabled - click to disable":"Enable extended thinking"}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${h&&oe.html`
        <div class="cw-model-dropdown">
          ${e.map(c=>oe.html`
            <button
              key=${c.id}
              class="cw-model-option ${c.id===t?"cw-model-option-selected":""}"
              onClick=${()=>d(c.id)}
            >
              <span class="cw-model-option-name">
                ${L(c.name)}
                ${c.supports_thinking&&oe.html`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${L(c.provider)}</span>
              ${c.description&&oe.html`
                <span class="cw-model-option-desc">${L(c.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var Y=require("htm/preact"),te=require("preact/compat"),rt={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},it={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function lt({task:e,onUpdate:t,onRemove:n,depth:a=0}){let[o,l]=(0,te.useState)(!1),[h,u]=(0,te.useState)(e.name),m=(0,te.useCallback)(()=>{let d={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:d[e.state]||"not_started"})},[e,t]),y=(0,te.useCallback)(()=>{h.trim()&&h!==e.name&&t(e.id,{name:h.trim()}),l(!1)},[e,h,t]),f=(0,te.useCallback)(d=>{d.key==="Enter"&&y(),d.key==="Escape"&&(u(e.name),l(!1))},[y,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return Y.html`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${a*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${m}
        title=${it[e.state]}
      >
        ${rt[e.state]}
      </button>
      
      ${o?Y.html`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${h}
          onInput=${d=>u(d.target.value)}
          onBlur=${y}
          onKeyDown=${f}
          autoFocus
        />
      `:Y.html`
        <span 
          class="cw-task-name" 
          onClick=${()=>l(!0)}
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
  `}function Ie({tasks:e,progress:t,isLoading:n,error:a,onUpdate:o,onRemove:l,onClear:h,onRefresh:u}){let m=(0,te.useCallback)(k=>{let d=new Map,v=[];return k.forEach(c=>{d.set(c.id,{...c,children:[]})}),k.forEach(c=>{let p=d.get(c.id);c.parent_id&&d.has(c.parent_id)?d.get(c.parent_id).children.push(p):v.push(p)}),v},[]),y=(0,te.useCallback)((k,d=0)=>Y.html`
      <${lt}
        key=${k.id}
        task=${k}
        depth=${d}
        onUpdate=${o}
        onRemove=${l}
      />
      ${k.children?.map(v=>y(v,d+1))}
    `,[o,l]),f=m(e);return n&&e.length===0?Y.html`<div class="cw-tasks-loading">Loading tasks...</div>`:Y.html`
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
          <button class="cw-tasks-action-btn" onClick=${u} title="Refresh">↻</button>
          ${e.length>0&&Y.html`
            <button class="cw-tasks-action-btn" onClick=${h} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${a&&Y.html`<div class="cw-tasks-error">${a}</div>`}
      
      <div class="cw-tasks-list">
        ${f.length===0?Y.html`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:f.map(k=>y(k))}
      </div>
    </div>
  `}var D=require("preact/compat");function Ee(e,t,n){let[a,o]=(0,D.useState)([]),[l,h]=(0,D.useState)(!1),[u,m]=(0,D.useState)(null),[y,f]=(0,D.useState)(()=>n?.get(e.conversationIdKey)||null),[k,d]=(0,D.useState)(!1),[v,c]=(0,D.useState)(!1),[p,g]=(0,D.useState)(0),$=(0,D.useRef)(null),S=(0,D.useRef)(null);(0,D.useEffect)(()=>{y&&n?.set(e.conversationIdKey,y)},[y,e.conversationIdKey,n]);let R=(0,D.useCallback)(async(s,C,T)=>{$.current&&$.current.close();let _=e.apiPaths.runEvents.replace("{runId}",s),b=`${e.backendUrl}${_}`;C&&(b+=`?anonymous_token=${encodeURIComponent(C)}`);let M=new EventSource(b);$.current=M;let i="";M.addEventListener("assistant.message",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("assistant.message",r.payload);let x=r.payload.content;x&&(i+=x,o(w=>{let O=w[w.length-1];return O?.role==="assistant"&&O.id.startsWith("assistant-stream-")?[...w.slice(0,-1),{...O,content:i}]:[...w,{id:"assistant-stream-"+Date.now(),role:"assistant",content:i,timestamp:new Date,type:"message"}]}))}catch(r){console.error("[ChatWidget] Parse error:",r)}}),M.addEventListener("tool.call",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.call",r.payload),o(x=>[...x,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${r.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:r.payload.name,arguments:r.payload.arguments,toolCallId:r.payload.id}}])}catch(r){console.error("[ChatWidget] Parse error:",r)}}),M.addEventListener("tool.result",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("tool.result",r.payload);let x=r.payload.result,w=x?.error;o(O=>[...O,{id:"tool-result-"+Date.now(),role:"system",content:w?`\u274C ${x.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:r.payload.name,result:x,toolCallId:r.payload.tool_call_id}}])}catch(r){console.error("[ChatWidget] Parse error:",r)}}),M.addEventListener("custom",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("custom",r.payload),r.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(r.payload),r.payload?.type==="agent_context"&&o(x=>[...x,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${r.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:r.payload.agent_key,agentName:r.payload.agent_name,action:r.payload.action}}])}catch(r){console.error("[ChatWidget] Parse error:",r)}}),M.addEventListener("sub_agent.start",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.start",r.payload),o(x=>[...x,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${r.payload.agent_name||r.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:r.payload.sub_agent_key,agentName:r.payload.agent_name,invocationMode:r.payload.invocation_mode}}])}catch(r){console.error("[ChatWidget] Parse error:",r)}}),M.addEventListener("sub_agent.end",A=>{try{let r=JSON.parse(A.data);e.onEvent&&e.onEvent("sub_agent.end",r.payload),o(x=>[...x,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${r.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:r.payload.sub_agent_key,agentName:r.payload.agent_name}}])}catch(r){console.error("[ChatWidget] Parse error:",r)}});let I=A=>{try{let r=JSON.parse(A.data);if(e.onEvent&&e.onEvent(r.type,r.payload),r.type==="run.failed"){let x=r.payload.error||"Agent run failed";m(x),o(w=>[...w,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${x}`,timestamp:new Date,type:"error"}])}}catch(r){console.error("[ChatWidget] Parse error:",r)}h(!1),M.close(),$.current=null,i&&T&&T(i)};M.addEventListener("run.succeeded",I),M.addEventListener("run.failed",I),M.addEventListener("run.cancelled",I),M.addEventListener("run.timed_out",I),M.onerror=()=>{h(!1),M.close(),$.current=null}},[e]),W=(0,D.useCallback)(async(s,C={},T={})=>{if(!s.trim()||l)return;let _=[],b={};typeof C=="function"?b={onAssistantMessage:C}:Array.isArray(C)?(_=C,b=T):b=C||{};let{model:M,thinking:i,onAssistantMessage:I,supersedeFromMessageIndex:A}=b;h(!0),m(null);let r={id:le(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:_.length>0?_.map(x=>({name:x.name,size:x.size,type:x.type})):void 0};o(x=>[...x,r]);try{let x=await t.getOrCreateSession(),w;if(_.length>0){let V=e.apiCaseStyle!=="camel",Be=$e=>V?he($e):$e,ne=new FormData;ne.append(Be("agentKey"),e.agentKey),y&&ne.append(Be("conversationId"),y),ne.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),ne.append("metadata",JSON.stringify(V?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&ne.append("model",M),i&&ne.append("thinking","true"),_.forEach($e=>{ne.append("files",$e)}),w=t.getFetchOptions({method:"POST",body:ne},x)}else{let V=t.transformRequest({agentKey:e.agentKey,conversationId:y,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...i&&{thinking:!0},...A!==void 0&&{supersedeFromMessageIndex:A}});w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)},x)}let O=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w),ae=x;if(O.status===401){t.clearSession();let V=await t.getOrCreateSession(!0);V&&(ae=V,_.length>0?w=t.getFetchOptions({method:"POST",body:w.body},V):w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:w.body},V),O=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w))}if(!O.ok){let V=await O.json().catch(()=>({}));throw new Error(V.error||V.detail||`HTTP ${O.status}`)}let fe=await O.json(),ge=t.transformResponse(fe);S.current=ge.id,!y&&ge.conversationId&&f(ge.conversationId),await R(ge.id,ae,I)}catch(x){m(x.message||"Failed to send message"),h(!1)}finally{S.current=null}},[e,t,y,l,R]),N=(0,D.useCallback)(async()=>{let s=S.current;if(!(!s||!l))try{let C=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${C}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&($.current&&($.current.close(),$.current=null),h(!1),S.current=null,o(_=>[..._,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(C){console.error("[ChatWidget] Failed to cancel run:",C)}},[e,t,l]),J=(0,D.useCallback)(()=>{o([]),f(null),m(null),d(!1),g(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),H=s=>{let C={id:le(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...C,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(_=>({id:le(),role:"assistant",content:`\u{1F527} ${_.function?.name||_.name||"tool"}`,timestamp:C.timestamp,type:"tool_call",metadata:{toolName:_.function?.name||_.name,arguments:_.function?.arguments||_.arguments,toolCallId:_.id}}));let T=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!T?.trim()?null:{...C,content:T,type:"message"}},U=(0,D.useCallback)(async s=>{console.log("[ChatWidget] loadConversation called with:",s),h(!0),o([]),f(s);try{let C=await t.getOrCreateSession(),_=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`;console.log("[ChatWidget] Fetching conversation from:",_);let b=await fetch(_,t.getFetchOptions({method:"GET"},C));if(console.log("[ChatWidget] Response status:",b.status),b.ok){let M=await b.json();console.log("[ChatWidget] Raw conversation:",M);let i=t.transformResponse(M);if(console.log("[ChatWidget] Transformed conversation:",i),i.messages){let I=i.messages.flatMap(H).filter(Boolean);console.log("[ChatWidget] Mapped messages:",I),o(I)}d(i.hasMore||!1),g(i.messages?.length||0)}else b.status===404?(console.log("[ChatWidget] Conversation not found, clearing"),f(null),n?.set(e.conversationIdKey,null)):console.error("[ChatWidget] Unexpected response status:",b.status)}catch(C){console.error("[ChatWidget] Failed to load conversation:",C)}finally{h(!1)}},[e,t,n]),B=(0,D.useCallback)(async()=>{if(!(!y||v||!k)){c(!0);try{let s=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${y}/?limit=10&offset=${p}`,_=await fetch(T,t.getFetchOptions({method:"GET"},s));if(_.ok){let b=await _.json(),M=t.transformResponse(b);if(M.messages?.length>0){let i=M.messages.flatMap(H).filter(Boolean);o(I=>[...i,...I]),g(I=>I+M.messages.length),d(M.hasMore||!1)}else d(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{c(!1)}}},[e,t,y,p,v,k]),Z=(0,D.useCallback)(async(s,C,T={})=>{if(l)return;let _=a[s];if(!_||_.role!=="user")return;let b=a.slice(0,s);o(b),await W(C,{...T,supersedeFromMessageIndex:s})},[a,l,W]),z=(0,D.useCallback)(async(s,C={})=>{if(l)return;let T=a[s];if(!T)return;let _=s,b=T;if(T.role==="assistant"){for(let i=s-1;i>=0;i--)if(a[i].role==="user"){_=i,b=a[i];break}if(b.role!=="user")return}else if(T.role!=="user")return;let M=a.slice(0,_);o(M),await W(b.content,{...C,supersedeFromMessageIndex:_})},[a,l,W]);return(0,D.useEffect)(()=>()=>{$.current&&$.current.close()},[]),{messages:a,isLoading:l,error:u,conversationId:y,hasMoreMessages:k,loadingMoreMessages:v,sendMessage:W,cancelRun:N,clearMessages:J,loadConversation:U,loadMoreMessages:B,setConversationId:f,editMessage:Z,retryMessage:z}}var j=require("preact/compat"),Ge="cw_thinking_enabled";function Re(e,t,n){let[a,o]=(0,j.useState)([]),[l,h]=(0,j.useState)(null),[u,m]=(0,j.useState)(null),[y,f]=(0,j.useState)(!1),[k,d]=(0,j.useState)(!1);(0,j.useEffect)(()=>{(async()=>{if(e.showModelSelector){f(!0);try{let S=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(S.ok){let R=await S.json(),W=R.models||[];o(W),m(R.default);let N=n?.get(e.modelKey);N&&W.some(H=>H.id===N)?h(N):h(R.default),n?.get(Ge)==="true"&&d(!0)}}catch(S){console.warn("[ChatWidget] Failed to load models:",S)}finally{f(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let v=(0,j.useCallback)($=>{h($),n?.set(e.modelKey,$)},[e.modelKey,n]),c=(0,j.useCallback)($=>{d($),n?.set(Ge,$?"true":"false")},[n]),p=(0,j.useCallback)(()=>a.find($=>$.id===l)||null,[a,l]),g=(0,j.useCallback)(()=>p()?.supports_thinking||!1,[p]);return{availableModels:a,selectedModel:l,defaultModel:u,isLoading:y,selectModel:v,getSelectedModelInfo:p,thinkingEnabled:k,toggleThinking:c,supportsThinking:g}}var G=require("preact/compat");function Ae(e,t){let[n,a]=(0,G.useState)(null),[o,l]=(0,G.useState)(!1),[h,u]=(0,G.useState)(null),m=e.apiPaths?.tasks||"/api/agent/tasks/",y=(0,G.useCallback)(async()=>{l(!0),u(null);try{let p=`${e.backendUrl}${m}`,g=await fetch(p,t.getFetchOptions({method:"GET"}));if(g.ok){let $=await g.json();a($)}else{let $=await g.json().catch(()=>({}));u($.error||"Failed to load tasks")}}catch(p){console.error("[useTasks] Failed to load task list:",p),u("Failed to load tasks")}finally{l(!1)}},[e.backendUrl,m,t]),f=(0,G.useCallback)(async p=>{if(!n)return null;try{let g=`${e.backendUrl}${m}${n.id}/add_task/`,$=await fetch(g,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));if($.ok){let S=await $.json();return await y(),S}else{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to add task"),null}}catch(g){return console.error("[useTasks] Failed to add task:",g),u("Failed to add task"),null}},[e.backendUrl,m,n,t,y]),k=(0,G.useCallback)(async(p,g)=>{if(!n)return null;try{let $=`${e.backendUrl}${m}${n.id}/update_task/${p}/`,S=await fetch($,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}));if(S.ok){let R=await S.json();return await y(),R}else{let R=await S.json().catch(()=>({}));return u(R.error||"Failed to update task"),null}}catch($){return console.error("[useTasks] Failed to update task:",$),u("Failed to update task"),null}},[e.backendUrl,m,n,t,y]),d=(0,G.useCallback)(async p=>{if(!n)return!1;try{let g=`${e.backendUrl}${m}${n.id}/remove_task/${p}/`,$=await fetch(g,t.getFetchOptions({method:"DELETE"}));if($.ok)return await y(),!0;{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to remove task"),!1}}catch(g){return console.error("[useTasks] Failed to remove task:",g),u("Failed to remove task"),!1}},[e.backendUrl,m,n,t,y]),v=(0,G.useCallback)(async()=>{if(!n)return!1;try{let p=`${e.backendUrl}${m}${n.id}/clear/`,g=await fetch(p,t.getFetchOptions({method:"POST"}));if(g.ok)return await y(),!0;{let $=await g.json().catch(()=>({}));return u($.error||"Failed to clear tasks"),!1}}catch(p){return console.error("[useTasks] Failed to clear tasks:",p),u("Failed to clear tasks"),!1}},[e.backendUrl,m,n,t,y]),c=(0,G.useCallback)(()=>u(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:o,error:h,loadTaskList:y,addTask:f,updateTask:k,removeTask:d,clearTasks:v,clearError:c}}function Fe(e,t,n){let a=f=>!f||typeof f!="object"||e.apiCaseStyle==="camel"?f:ie(f),o=f=>!f||typeof f!="object"||e.apiCaseStyle==="snake"?f:re(f),l=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",h=(f=null)=>{let k=l(),d={},v=f||e.authToken||t().authToken;if(k==="token"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";d[c]=p?`${p} ${v}`:v}else if(k==="jwt"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";d[c]=p?`${p} ${v}`:v}else if(k==="anonymous"&&v){let c=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";d[c]=v}if(k==="session"){let c=be(e.csrfCookieName);c&&(d["X-CSRFToken"]=c)}return d};return{getAuthStrategy:l,getAuthHeaders:h,getFetchOptions:(f={},k=null)=>{let d=l(),v={...f},c=h(k);return console.log("[ChatWidget] getFetchOptions - strategy:",d,"overrideToken:",k,"authHeaders:",c),v.headers={...v.headers,...c},d==="session"&&(v.credentials="include"),v},getOrCreateSession:async(f=!1)=>{let k=l(),d=t(),v=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||d.authToken;if(!f){if(d.authToken)return d.authToken;let c=d.storage?.get(v);if(c)return n(p=>({...p,authToken:c})),c}try{let c=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${c}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let g=await p.json();return n($=>({...$,authToken:g.token})),d.storage?.set(v,g.token),g.token}}catch(c){console.warn("[ChatWidget] Failed to create session:",c)}return null},clearSession:()=>{let f=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(d=>({...d,authToken:null})),k.storage?.set(f,null)},transformRequest:a,transformResponse:o}}function pe({config:e,onStateChange:t,markdownParser:n,apiRef:a}){console.log("[ChatWidget] Config:",{showConversationSidebar:e.showConversationSidebar,apiPaths:e.apiPaths});let[o,l]=(0,E.useState)(e.embedded||e.forceOpen===!0),[h,u]=(0,E.useState)(!1),[m,y]=(0,E.useState)(!1),[f,k]=(0,E.useState)(!1),[d,v]=(0,E.useState)([]),[c,p]=(0,E.useState)("chat"),[g,$]=(0,E.useState)(!1),[S,R]=(0,E.useState)(e.enableTTS),[W,N]=(0,E.useState)(!1),[J,H]=(0,E.useState)(null);(0,E.useEffect)(()=>{e.forceOpen!==void 0&&l(e.forceOpen)},[e.forceOpen]);let U=(0,E.useMemo)(()=>ve(e.containerId),[e.containerId]),[B,Z]=(0,E.useState)(e.authToken||null),z=(0,E.useMemo)(()=>Fe(e,()=>({authToken:B,storage:U}),ae=>{let fe=ae({authToken:B,storage:U});fe.authToken!==B&&Z(fe.authToken)}),[e,B,U]),s=Ee(e,z,U),C=Re(e,z,U),T=Ae(e,z);(0,E.useEffect)(()=>{for(let w=s.messages.length-1;w>=0;w--){let O=s.messages[w];if(O.type==="sub_agent_start"){H({key:O.metadata?.subAgentKey,name:O.metadata?.agentName});return}if(O.type==="sub_agent_end"){H(null);return}}},[s.messages]),(0,E.useEffect)(()=>{let w=U.get(e.conversationIdKey);console.log("[ChatWidget] Initial load - storedConvId:",w,"key:",e.conversationIdKey),console.log("[ChatWidget] apiPaths.conversations:",e.apiPaths.conversations),w&&(console.log("[ChatWidget] Loading conversation:",w),s.loadConversation(w))},[]),(0,E.useEffect)(()=>{t&&t({isOpen:o,isExpanded:h,debugMode:m,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[o,h,m,s.messages,s.conversationId,s.isLoading,s.error]);let _=(0,E.useCallback)(async()=>{if(e.showConversationSidebar){$(!0);try{let w=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,O=await fetch(w,z.getFetchOptions({method:"GET"}));if(O.ok){let ae=await O.json();v(ae.results||ae)}}catch(w){console.error("[ChatWidget] Failed to load conversations:",w),v([])}finally{$(!1)}}},[e,z]),b=(0,E.useCallback)(()=>{let w=!f;k(w),w&&_()},[f,_]),M=(0,E.useCallback)(w=>{w!==s.conversationId&&s.loadConversation(w),k(!1)},[s]),i=(0,E.useCallback)(()=>{s.clearMessages(),k(!1)},[s]),I=(0,E.useCallback)(w=>{s.sendMessage(w,{model:C.selectedModel,thinking:C.thinkingEnabled&&C.supportsThinking(),onAssistantMessage:O=>{}})},[s,S,C.selectedModel,C.thinkingEnabled,C.supportsThinking]),A=(0,E.useCallback)(w=>{p(w),w==="tasks"&&T.loadTaskList()},[T]);if((0,E.useEffect)(()=>{a&&(a.current={open:()=>l(!0),close:()=>l(!1),send:w=>I(w),clearMessages:()=>s.clearMessages(),toggleTTS:()=>R(w=>!w),stopSpeech:()=>N(!1),setAuth:w=>{w.token!==void 0&&Z(w.token)},clearAuth:()=>Z(null)})},[s,a,I]),!e.embedded&&!o)return q.html`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>l(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let r=["cw-widget",h&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" "),x=e.headerTextColor||Je(e.primaryColor);return q.html`
    <div class=${r} style=${{"--cw-primary":e.primaryColor,"--cw-header-text":x}}>
      ${e.showConversationSidebar&&q.html`
        <${Me}
          isOpen=${f}
          conversations=${d}
          conversationsLoading=${g}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${i}
          onSwitchConversation=${M}
        />
      `}
      
      <${Ce}
        config=${e}
        debugMode=${m}
        isExpanded=${h}
        isSpeaking=${W}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${J}
        onClose=${()=>l(!1)}
        onToggleExpand=${()=>u(!h)}
        onToggleDebug=${()=>y(!m)}
        onToggleTTS=${()=>R(!S)}
        onClear=${s.clearMessages}
        onToggleSidebar=${b}
      />

      ${e.showTasksTab!==!1&&q.html`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${c==="chat"?"cw-tab-active":""}`}
            onClick=${()=>A("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${c==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>A("tasks")}
          >
            Tasks ${T.progress.total>0?q.html`<span class="cw-tab-badge">${T.progress.completed}/${T.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${m&&q.html`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${c==="chat"?q.html`
        <${Te}
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

        ${s.error&&q.html`<div class="cw-error-bar">${s.error}</div>`}

        ${e.showModelSelector&&C.availableModels.length>0&&q.html`
          <${xe}
            availableModels=${C.availableModels}
            selectedModel=${C.selectedModel}
            onSelectModel=${C.selectModel}
            thinkingEnabled=${C.thinkingEnabled}
            onToggleThinking=${C.toggleThinking}
            disabled=${s.isLoading}
          />
        `}

        <${_e}
          onSend=${I}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:q.html`
        <${Ie}
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
  `}var Oe={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",headerTextColor:null,position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function De(e){let t={...Oe.apiPaths,...e.apiPaths||{}};return{...Oe,...e,apiPaths:t}}var He=require("preact/compat"),qe=require("htm/preact");var Pe=new Map,ct=0,F=null,Ue=class{constructor(t={}){je(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++ct}`,this.config=De(t),this.container=null,this._state={},this._apiRef={current:null},Pe.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&(0,He.render)(qe.html`<${pe}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Le._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&((0,He.render)(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),Pe.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Xe(e={}){return new Ue(e).init()}function dt(e={}){return F&&F.destroy(),F=Xe(e),F}function ut(){F&&(F.destroy(),F=null)}function pt(){F&&F.open()}function ht(){F&&F.close()}function mt(e){F&&F.send(e)}function ft(){F&&F.clearMessages()}function gt(){F&&F.toggleTTS()}function $t(){F&&F.stopSpeech()}function yt(e){F&&F.setAuth(e)}function wt(){F&&F.clearAuth()}function kt(){return F?F.getState():null}function vt(){return F?F.getConfig():null}var Le={createInstance:Xe,getInstance:e=>Pe.get(e),getAllInstances:()=>Array.from(Pe.values()),init:dt,destroy:ut,open:pt,close:ht,send:mt,clearMessages:ft,toggleTTS:gt,stopSpeech:$t,setAuth:yt,clearAuth:wt,getState:kt,getConfig:vt,_enhancedMarkdownParser:null};typeof window<"u"&&(window.ChatWidget=Le);var bt=pe;
