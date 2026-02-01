var st=Object.defineProperty;var at=(e,t,n)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Je=(e,t,n)=>(at(e,typeof t!="symbol"?t+"":t,n),n);import{html as J}from"htm/preact";import{useState as U,useEffect as ce,useCallback as te,useMemo as et}from"preact/compat";import{html as q}from"htm/preact";function ze(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function me(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ne(e){return Array.isArray(e)?e.map(ne):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[ze(t),ne(n)])):e}function se(e){return Array.isArray(e)?e.map(se):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[me(t),se(n)])):e}function ae(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function O(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function ke(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,i=Math.floor(o/6e4),c=Math.floor(o/36e5),w=Math.floor(o/864e5);return i<1?"Just now":i<60?`${i}m ago`:c<24?`${c}h ago`:w<7?`${w}d ago`:t.toLocaleDateString()}catch{return""}}function be(e,t=null){if(t)return t(e);let n=O(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function Ce(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let i=t(n);o===null?localStorage.removeItem(i):localStorage.setItem(i,o)}catch{}}}}function Se(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[i,c]=o.trim().split("=");if(i===e)return decodeURIComponent(c)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function oe(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function re(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function Te({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:i,isLoading:c,currentAgent:w,onClose:$,onToggleExpand:m,onToggleDebug:f,onToggleTTS:l,onClear:k,onToggleSidebar:p}){let{title:y,primaryColor:g,embedded:u,showConversationSidebar:h,showClearButton:v,showDebugButton:T,enableDebugMode:A,showTTSButton:D,showExpandButton:j,enableTTS:B,elevenLabsApiKey:N,ttsProxyUrl:P}=e,L=N||P;return q`
    <div class="cw-header" style=${{backgroundColor:g}}>
      ${h&&q`
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
        <span class="cw-title">${O(y)}</span>
        ${w&&q`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${O(w.name||w.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${v&&q`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${c||i===0}
          >🗑️</button>
        `}
        
        ${T&&A&&q`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${f}
            title="Debug"
          >🐛</button>
        `}
        
        ${D&&L&&q`
          <button 
            class="cw-header-btn ${B?"cw-btn-active":""}" 
            onClick=${l}
            title="TTS"
          >${B?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${j&&!u&&q`
          <button 
            class="cw-header-btn" 
            onClick=${m}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!u&&q`
          <button 
            class="cw-header-btn" 
            onClick=${$}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}import{html as Q}from"htm/preact";import{useRef as Ge,useEffect as qe}from"preact/compat";import{html as F}from"htm/preact";import{useState as fe,useRef as ot,useEffect as rt}from"preact/compat";function Me({msg:e,show:t,onToggle:n}){return t?F`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:F`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function Ve({onEdit:e,onRetry:t,isLoading:n,position:o,showEdit:i=!0}){return n?null:F`
    <div class="cw-message-actions cw-message-actions-${o||"left"}">
      ${i&&F`
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
  `}function it({initialContent:e,onSave:t,onCancel:n}){let[o,i]=fe(e),c=ot(null);return rt(()=>{c.current&&(c.current.focus(),c.current.setSelectionRange(o.length,o.length),c.current.style.height="auto",c.current.style.height=c.current.scrollHeight+"px")},[]),F`
    <div class="cw-inline-edit">
      <textarea
        ref=${c}
        class="cw-inline-edit-input"
        value=${o}
        onInput=${m=>{i(m.target.value),m.target.style.height="auto",m.target.style.height=m.target.scrollHeight+"px"}}
        onKeyDown=${m=>{m.key==="Enter"&&!m.shiftKey?(m.preventDefault(),o.trim()&&t(o.trim())):m.key==="Escape"&&n()}}
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
  `}function _e({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:i,isLoading:c,messageIndex:w}){let[$,m]=fe(!1),[f,l]=fe(!1),[k,p]=fe(!1),y=e.role==="user",g=e.role==="system",u=e.type==="tool_call",h=e.type==="tool_result",v=e.type==="error",T=e.type==="sub_agent_start",A=e.type==="sub_agent_end",D=e.type==="agent_context";if(g&&!t)return null;if(T||A||D)return F`
      <div class="cw-agent-context ${T?"cw-agent-delegating":""} ${A?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${T?"\u{1F517}":A?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&F`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&F`<${Me} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
      </div>
    `;if(u||h){let b=e.metadata?.arguments||e.metadata?.result,_=r=>{if(typeof r=="string")try{return JSON.stringify(JSON.parse(r),null,2)}catch{return r}return JSON.stringify(r,null,2)};return F`
      <div class="cw-tool-message ${h?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&m(!$)}>
          ${e.content}
          ${b&&F`<span class="cw-tool-expand">${$?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${$&&b&&F`
          <pre class="cw-tool-details">${O(_(u?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&F`<${Me} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
      </div>
    `}let j=["cw-message",y&&"cw-message-user",v&&"cw-message-error"].filter(Boolean).join(" "),B=`cw-message-row ${y?"cw-message-row-user":""}`,N=e.role==="assistant"?be(e.content,n):O(e.content),P=e.files&&e.files.length>0,L=()=>P?F`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?F`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:F`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${re(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${oe(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,z=b=>{p(!1),o&&o(w,b)},H=()=>{i&&i(w)};if(y&&k)return F`
      <div class=${B} style="position: relative;">
        ${L()}
        <${it}
          initialContent=${e.content}
          onSave=${z}
          onCancel=${()=>p(!1)}
        />
      </div>
    `;let s=y&&o&&i,C=e.role==="assistant"&&i&&!c;return F`
    <div class="${B} ${s||C?"cw-message-row-with-actions":""}">
      ${L()}
      ${s&&F`
        <div class="cw-user-actions-wrapper">
          <${Ve}
            onEdit=${()=>p(!0)}
            onRetry=${H}
            isLoading=${c}
            position="left"
            showEdit=${!0}
          />
          <div class=${j} dangerouslySetInnerHTML=${{__html:N}} />
        </div>
      `}
      ${!s&&F`
        <div class=${j} dangerouslySetInnerHTML=${{__html:N}} />
      `}
      ${C&&F`
        <${Ve}
          onRetry=${H}
          isLoading=${c}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&F`<${Me} msg=${e} show=${f} onToggle=${()=>l(!f)} />`}
    </div>
  `}function xe({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:i,onEditMessage:c,onRetryMessage:w,debugMode:$,markdownParser:m,emptyStateTitle:f,emptyStateMessage:l}){let k=Ge(null),p=Ge(!0),y=u=>{let h=u.target,v=h.scrollHeight-h.scrollTop-h.clientHeight<100;if(p.current=v,h.scrollTop<50&&n&&!o){let T=h.scrollHeight;i().then(()=>{let A=h.scrollHeight;h.scrollTop=A-T+h.scrollTop})}};qe(()=>{let u=k.current;u&&p.current&&requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight})},[e,t]),qe(()=>{let u=k.current;u&&e.length<=2&&(p.current=!0,requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight}))},[e.length]);let g=e.length===0;return Q`
    <div class="cw-messages" ref=${k} onScroll=${y}>
      ${g&&Q`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${O(f)}</h3>
          <p>${O(l)}</p>
        </div>
      `}
      
      ${!g&&n&&Q`
        <div class="cw-load-more" onClick=${i}>
          ${o?Q`<span class="cw-spinner"></span><span>Loading...</span>`:Q`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((u,h)=>Q`
        <${_e}
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
      
      ${t&&Q`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}import{html as V}from"htm/preact";import{useState as ie,useRef as ge,useEffect as Ie}from"preact/compat";var Ee=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Re({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:i,enableVoice:c=!0,enableFiles:w=!0}){let[$,m]=ie(""),[f,l]=ie([]),[k,p]=ie(!1),[y,g]=ie(!1),[u]=ie(()=>!!Ee),h=ge(null),v=ge(null),T=ge(null),A=ge(!1);Ie(()=>{!n&&h.current&&h.current.focus()},[n]),Ie(()=>{h.current&&(h.current.style.height="auto",h.current.style.height=Math.min(h.current.scrollHeight,150)+"px")},[$]),Ie(()=>()=>{A.current=!1,T.current&&T.current.abort()},[]);let D=r=>{r.preventDefault(),($.trim()||f.length>0)&&!n&&(e($,f),m(""),l([]),h.current&&(h.current.style.height="auto"),v.current&&(v.current.value=""))},j=r=>{let x=Array.from(r.target.files||[]);x.length>0&&l(R=>[...R,...x])},B=r=>{l(x=>x.filter((R,a)=>a!==r))},N=r=>{r.preventDefault(),v.current&&!n&&v.current.click()},P=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),D(r))},L=r=>{n&&t&&(r.preventDefault(),t())},z=()=>{if(!Ee||n)return;A.current=!0;let r=new Ee;r.continuous=!0,r.interimResults=!0,r.lang=navigator.language||"en-US";let x=$,R="";r.onstart=()=>{g(!0)},r.onresult=a=>{R="";for(let d=a.resultIndex;d<a.results.length;d++){let I=a.results[d][0].transcript;a.results[d].isFinal?x+=(x?" ":"")+I:R+=I}m(x+(R?" "+R:""))},r.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),A.current=!1,g(!1),m(x||$)},r.onend=()=>{if(A.current){console.log("[ChatWidget] Recognition paused, restarting...");try{r.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}g(!1),x&&m(x),T.current=null},T.current=r,r.start()},H=()=>{A.current=!1,T.current&&T.current.stop()},s=r=>{r.preventDefault(),y?H():z()},M=V`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,C=V`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,S=V`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,b=c&&u,_=w;return V`
    <form class="cw-input-form" onSubmit=${D}>
      <input
        type="file"
        ref=${v}
        style="display: none"
        multiple
        onChange=${j}
      />
      ${f.length>0&&V`
        <div class="cw-file-chips">
          ${f.map((r,x)=>V`
            <div class="cw-file-chip" key=${x}>
              <span class="cw-file-chip-icon">${re(r.type)}</span>
              <span class="cw-file-chip-name" title=${r.name}>${r.name.length>20?r.name.substring(0,17)+"...":r.name}</span>
              <span class="cw-file-chip-size">(${oe(r.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>B(x)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${h}
        class="cw-input"
        placeholder=${O(o)}
        value=${$}
        onInput=${r=>m(r.target.value)}
        onKeyDown=${P}
        disabled=${n}
        rows="1"
      />
      ${_&&V`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${N}
          disabled=${n}
          title="Attach files"
        >
          ${S}
        </button>
      `}
      ${b&&V`
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
        style=${{backgroundColor:n&&k?"#dc2626":i}}
        onClick=${L}
        onMouseEnter=${()=>p(!0)}
        onMouseLeave=${()=>p(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?M:V`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}import{html as $e}from"htm/preact";function Ae({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:i,onNewConversation:c,onSwitchConversation:w}){return $e`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${i}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${c}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&$e`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&$e`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map($=>$e`
          <div 
            key=${$.id}
            class="cw-conversation-item ${$.id===o?"cw-conversation-active":""}"
            onClick=${()=>w($.id)}
          >
            <div class="cw-conversation-title">${O($.title||"Untitled")}</div>
            <div class="cw-conversation-date">${ke($.updatedAt||$.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${i}
    />
  `}import{html as ye}from"htm/preact";import{useState as lt}from"preact/compat";function Fe({availableModels:e,selectedModel:t,onSelectModel:n,disabled:o}){let[i,c]=lt(!1);if(!e||e.length===0)return null;let $=e.find(l=>l.id===t)?.name||"Select Model",m=()=>{o||c(!i)},f=l=>{n(l),c(!1)};return ye`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${m}
        disabled=${o}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${O($)}</span>
        <span class="cw-model-chevron">${i?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${i&&ye`
        <div class="cw-model-dropdown">
          ${e.map(l=>ye`
            <button 
              key=${l.id}
              class="cw-model-option ${l.id===t?"cw-model-option-selected":""}"
              onClick=${()=>f(l.id)}
            >
              <span class="cw-model-option-name">${O(l.name)}</span>
              <span class="cw-model-option-provider">${O(l.provider)}</span>
              ${l.description&&ye`
                <span class="cw-model-option-desc">${O(l.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}import{html as G}from"htm/preact";import{useState as Xe,useCallback as le}from"preact/compat";var ct={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},dt={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function ut({task:e,onUpdate:t,onRemove:n,depth:o=0}){let[i,c]=Xe(!1),[w,$]=Xe(e.name),m=le(()=>{let p={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:p[e.state]||"not_started"})},[e,t]),f=le(()=>{w.trim()&&w!==e.name&&t(e.id,{name:w.trim()}),c(!1)},[e,w,t]),l=le(p=>{p.key==="Enter"&&f(),p.key==="Escape"&&($(e.name),c(!1))},[f,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return G`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${o*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${m}
        title=${dt[e.state]}
      >
        ${ct[e.state]}
      </button>
      
      ${i?G`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${w}
          onInput=${p=>$(p.target.value)}
          onBlur=${f}
          onKeyDown=${l}
          autoFocus
        />
      `:G`
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
  `}function Oe({tasks:e,progress:t,isLoading:n,error:o,onUpdate:i,onRemove:c,onClear:w,onRefresh:$}){let m=le(k=>{let p=new Map,y=[];return k.forEach(g=>{p.set(g.id,{...g,children:[]})}),k.forEach(g=>{let u=p.get(g.id);g.parent_id&&p.has(g.parent_id)?p.get(g.parent_id).children.push(u):y.push(u)}),y},[]),f=le((k,p=0)=>G`
      <${ut}
        key=${k.id}
        task=${k}
        depth=${p}
        onUpdate=${i}
        onRemove=${c}
      />
      ${k.children?.map(y=>f(y,p+1))}
    `,[i,c]),l=m(e);return n&&e.length===0?G`<div class="cw-tasks-loading">Loading tasks...</div>`:G`
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
          ${e.length>0&&G`
            <button class="cw-tasks-action-btn" onClick=${w} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${o&&G`<div class="cw-tasks-error">${o}</div>`}
      
      <div class="cw-tasks-list">
        ${l.length===0?G`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:l.map(k=>f(k))}
      </div>
    </div>
  `}import{useState as Y,useCallback as X,useRef as Ze,useEffect as Qe}from"preact/compat";function De(e,t,n){let[o,i]=Y([]),[c,w]=Y(!1),[$,m]=Y(null),[f,l]=Y(()=>n?.get(e.conversationIdKey)||null),[k,p]=Y(!1),[y,g]=Y(!1),[u,h]=Y(0),v=Ze(null),T=Ze(null);Qe(()=>{f&&n?.set(e.conversationIdKey,f)},[f,e.conversationIdKey,n]);let A=X(async(s,M,C)=>{v.current&&v.current.close();let S=e.apiPaths.runEvents.replace("{runId}",s),b=`${e.backendUrl}${S}`;M&&(b+=`?anonymous_token=${encodeURIComponent(M)}`);let _=new EventSource(b);v.current=_;let r="";_.addEventListener("assistant.message",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let d=a.payload.content;d&&(r+=d,i(I=>{let K=I[I.length-1];return K?.role==="assistant"&&K.id.startsWith("assistant-stream-")?[...I.slice(0,-1),{...K,content:r}]:[...I,{id:"assistant-stream-"+Date.now(),role:"assistant",content:r,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),_.addEventListener("tool.call",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.call",a.payload),i(d=>[...d,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),_.addEventListener("tool.result",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.result",a.payload);let d=a.payload.result,I=d?.error;i(K=>[...K,{id:"tool-result-"+Date.now(),role:"system",content:I?`\u274C ${d.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:d,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),_.addEventListener("custom",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&i(d=>[...d,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),_.addEventListener("sub_agent.start",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),i(d=>[...d,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),_.addEventListener("sub_agent.end",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),i(d=>[...d,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let x=R=>{try{let a=JSON.parse(R.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let d=a.payload.error||"Agent run failed";m(d),i(I=>[...I,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${d}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}w(!1),_.close(),v.current=null,r&&C&&C(r)};_.addEventListener("run.succeeded",x),_.addEventListener("run.failed",x),_.addEventListener("run.cancelled",x),_.addEventListener("run.timed_out",x),_.onerror=()=>{w(!1),_.close(),v.current=null}},[e]),D=X(async(s,M={},C={})=>{if(!s.trim()||c)return;let S=[],b={};typeof M=="function"?b={onAssistantMessage:M}:Array.isArray(M)?(S=M,b=C):b=M||{};let{model:_,onAssistantMessage:r,supersedeFromMessageIndex:x}=b;w(!0),m(null);let R={id:ae(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:S.length>0?S.map(a=>({name:a.name,size:a.size,type:a.type})):void 0};i(a=>[...a,R]);try{let a=await t.getOrCreateSession(),d;if(S.length>0){let W=e.apiCaseStyle!=="camel",je=he=>W?me(he):he,Z=new FormData;Z.append(je("agentKey"),e.agentKey),f&&Z.append(je("conversationId"),f),Z.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),Z.append("metadata",JSON.stringify(W?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),_&&Z.append("model",_),S.forEach(he=>{Z.append("files",he)}),d=t.getFetchOptions({method:"POST",body:Z},a)}else{let W=t.transformRequest({agentKey:e.agentKey,conversationId:f,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},..._&&{model:_},...x!==void 0&&{supersedeFromMessageIndex:x}});d=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)},a)}let I=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,d),K=a;if(I.status===401){t.clearSession();let W=await t.getOrCreateSession(!0);W&&(K=W,S.length>0?d=t.getFetchOptions({method:"POST",body:d.body},W):d=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:d.body},W),I=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,d))}if(!I.ok){let W=await I.json().catch(()=>({}));throw new Error(W.error||W.detail||`HTTP ${I.status}`)}let ue=await I.json(),pe=t.transformResponse(ue);T.current=pe.id,!f&&pe.conversationId&&l(pe.conversationId),await A(pe.id,K,r)}catch(a){m(a.message||"Failed to send message"),w(!1)}finally{T.current=null}},[e,t,f,c,A]),j=X(async()=>{let s=T.current;if(!(!s||!c))try{let M=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${M}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(v.current&&(v.current.close(),v.current=null),w(!1),T.current=null,i(S=>[...S,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(M){console.error("[ChatWidget] Failed to cancel run:",M)}},[e,t,c]),B=X(()=>{i([]),l(null),m(null),p(!1),h(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),N=s=>{let M={id:ae(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...M,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(S=>({id:ae(),role:"assistant",content:`\u{1F527} ${S.function?.name||S.name||"tool"}`,timestamp:M.timestamp,type:"tool_call",metadata:{toolName:S.function?.name||S.name,arguments:S.function?.arguments||S.arguments,toolCallId:S.id}}));let C=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!C?.trim()?null:{...M,content:C,type:"message"}},P=X(async s=>{w(!0),i([]),l(s);try{let M=await t.getOrCreateSession(),S=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`,b=await fetch(S,t.getFetchOptions({method:"GET"},M));if(b.ok){let _=await b.json(),r=t.transformResponse(_);r.messages&&i(r.messages.flatMap(N).filter(Boolean)),p(r.hasMore||!1),h(r.messages?.length||0)}else b.status===404&&(l(null),n?.set(e.conversationIdKey,null))}catch(M){console.error("[ChatWidget] Failed to load conversation:",M)}finally{w(!1)}},[e,t,n]),L=X(async()=>{if(!(!f||y||!k)){g(!0);try{let s=await t.getOrCreateSession(),C=`${e.backendUrl}${e.apiPaths.conversations}${f}/?limit=10&offset=${u}`,S=await fetch(C,t.getFetchOptions({method:"GET"},s));if(S.ok){let b=await S.json(),_=t.transformResponse(b);if(_.messages?.length>0){let r=_.messages.flatMap(N).filter(Boolean);i(x=>[...r,...x]),h(x=>x+_.messages.length),p(_.hasMore||!1)}else p(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{g(!1)}}},[e,t,f,u,y,k]),z=X(async(s,M,C={})=>{if(c)return;let S=o[s];if(!S||S.role!=="user")return;let b=o.slice(0,s);i(b),await D(M,{...C,supersedeFromMessageIndex:s})},[o,c,D]),H=X(async(s,M={})=>{if(c)return;let C=o[s];if(!C)return;let S=s,b=C;if(C.role==="assistant"){for(let r=s-1;r>=0;r--)if(o[r].role==="user"){S=r,b=o[r];break}if(b.role!=="user")return}else if(C.role!=="user")return;let _=o.slice(0,S);i(_),await D(b.content,{...M,supersedeFromMessageIndex:S})},[o,c,D]);return Qe(()=>()=>{v.current&&v.current.close()},[]),{messages:o,isLoading:c,error:$,conversationId:f,hasMoreMessages:k,loadingMoreMessages:y,sendMessage:D,cancelRun:j,clearMessages:B,loadConversation:P,loadMoreMessages:L,setConversationId:l,editMessage:z,retryMessage:H}}import{useState as we,useEffect as pt,useCallback as Ye}from"preact/compat";function Pe(e,t,n){let[o,i]=we([]),[c,w]=we(null),[$,m]=we(null),[f,l]=we(!1);pt(()=>{(async()=>{if(e.showModelSelector){l(!0);try{let g=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(g.ok){let u=await g.json(),h=u.models||[];i(h),m(u.default);let v=n?.get(e.modelKey);v&&h.some(T=>T.id===v)?w(v):w(u.default)}}catch(g){console.warn("[ChatWidget] Failed to load models:",g)}finally{l(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let k=Ye(y=>{w(y),n?.set(e.modelKey,y)},[e.modelKey,n]),p=Ye(()=>o.find(y=>y.id===c)||null,[o,c]);return{availableModels:o,selectedModel:c,defaultModel:$,isLoading:f,selectModel:k,getSelectedModelInfo:p}}import{useState as Le,useCallback as ee}from"preact/compat";function Ke(e,t){let[n,o]=Le(null),[i,c]=Le(!1),[w,$]=Le(null),m=e.apiPaths?.tasks||"/api/agent/tasks/",f=ee(async()=>{c(!0),$(null);try{let u=`${e.backendUrl}${m}`,h=await fetch(u,t.getFetchOptions({method:"GET"}));if(h.ok){let v=await h.json();o(v)}else{let v=await h.json().catch(()=>({}));$(v.error||"Failed to load tasks")}}catch(u){console.error("[useTasks] Failed to load task list:",u),$("Failed to load tasks")}finally{c(!1)}},[e.backendUrl,m,t]),l=ee(async u=>{if(!n)return null;try{let h=`${e.backendUrl}${m}${n.id}/add_task/`,v=await fetch(h,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}));if(v.ok){let T=await v.json();return await f(),T}else{let T=await v.json().catch(()=>({}));return $(T.error||"Failed to add task"),null}}catch(h){return console.error("[useTasks] Failed to add task:",h),$("Failed to add task"),null}},[e.backendUrl,m,n,t,f]),k=ee(async(u,h)=>{if(!n)return null;try{let v=`${e.backendUrl}${m}${n.id}/update_task/${u}/`,T=await fetch(v,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}));if(T.ok){let A=await T.json();return await f(),A}else{let A=await T.json().catch(()=>({}));return $(A.error||"Failed to update task"),null}}catch(v){return console.error("[useTasks] Failed to update task:",v),$("Failed to update task"),null}},[e.backendUrl,m,n,t,f]),p=ee(async u=>{if(!n)return!1;try{let h=`${e.backendUrl}${m}${n.id}/remove_task/${u}/`,v=await fetch(h,t.getFetchOptions({method:"DELETE"}));if(v.ok)return await f(),!0;{let T=await v.json().catch(()=>({}));return $(T.error||"Failed to remove task"),!1}}catch(h){return console.error("[useTasks] Failed to remove task:",h),$("Failed to remove task"),!1}},[e.backendUrl,m,n,t,f]),y=ee(async()=>{if(!n)return!1;try{let u=`${e.backendUrl}${m}${n.id}/clear/`,h=await fetch(u,t.getFetchOptions({method:"POST"}));if(h.ok)return await f(),!0;{let v=await h.json().catch(()=>({}));return $(v.error||"Failed to clear tasks"),!1}}catch(u){return console.error("[useTasks] Failed to clear tasks:",u),$("Failed to clear tasks"),!1}},[e.backendUrl,m,n,t,f]),g=ee(()=>$(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:i,error:w,loadTaskList:f,addTask:l,updateTask:k,removeTask:p,clearTasks:y,clearError:g}}function Ne(e,t,n){let o=l=>!l||typeof l!="object"||e.apiCaseStyle==="camel"?l:se(l),i=l=>!l||typeof l!="object"||e.apiCaseStyle==="snake"?l:ne(l),c=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",w=(l=null)=>{let k=c(),p={},y=l||e.authToken||t().authToken;if(k==="token"&&y){let g=e.authHeader||"Authorization",u=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";p[g]=u?`${u} ${y}`:y}else if(k==="jwt"&&y){let g=e.authHeader||"Authorization",u=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";p[g]=u?`${u} ${y}`:y}else if(k==="anonymous"&&y){let g=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";p[g]=y}if(k==="session"){let g=Se(e.csrfCookieName);g&&(p["X-CSRFToken"]=g)}return p};return{getAuthStrategy:c,getAuthHeaders:w,getFetchOptions:(l={},k=null)=>{let p=c(),y={...l},g=w(k);return console.log("[ChatWidget] getFetchOptions - strategy:",p,"overrideToken:",k,"authHeaders:",g),y.headers={...y.headers,...g},p==="session"&&(y.credentials="include"),y},getOrCreateSession:async(l=!1)=>{let k=c(),p=t(),y=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||p.authToken;if(!l){if(p.authToken)return p.authToken;let g=p.storage?.get(y);if(g)return n(u=>({...u,authToken:g})),g}try{let g=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,u=await fetch(`${e.backendUrl}${g}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(u.ok){let h=await u.json();return n(v=>({...v,authToken:h.token})),p.storage?.set(y,h.token),h.token}}catch(g){console.warn("[ChatWidget] Failed to create session:",g)}return null},clearSession:()=>{let l=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(p=>({...p,authToken:null})),k.storage?.set(l,null)},transformRequest:o,transformResponse:i}}function de({config:e,onStateChange:t,markdownParser:n,apiRef:o}){let[i,c]=U(e.embedded||e.forceOpen===!0),[w,$]=U(!1),[m,f]=U(!1),[l,k]=U(!1),[p,y]=U([]),[g,u]=U("chat"),[h,v]=U(!1),[T,A]=U(e.enableTTS),[D,j]=U(!1),[B,N]=U(null);ce(()=>{e.forceOpen!==void 0&&c(e.forceOpen)},[e.forceOpen]);let P=et(()=>Ce(e.containerId),[e.containerId]),[L,z]=U(e.authToken||null),H=et(()=>Ne(e,()=>({authToken:L,storage:P}),K=>{let ue=K({authToken:L,storage:P});ue.authToken!==L&&z(ue.authToken)}),[e,L,P]),s=De(e,H,P),M=Pe(e,H,P),C=Ke(e,H);ce(()=>{for(let d=s.messages.length-1;d>=0;d--){let I=s.messages[d];if(I.type==="sub_agent_start"){N({key:I.metadata?.subAgentKey,name:I.metadata?.agentName});return}if(I.type==="sub_agent_end"){N(null);return}}},[s.messages]),ce(()=>{let d=P.get(e.conversationIdKey);d&&s.loadConversation(d)},[]),ce(()=>{t&&t({isOpen:i,isExpanded:w,debugMode:m,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[i,w,m,s.messages,s.conversationId,s.isLoading,s.error]);let S=te(async()=>{if(e.showConversationSidebar){v(!0);try{let d=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,I=await fetch(d,H.getFetchOptions({method:"GET"}));if(I.ok){let K=await I.json();y(K.results||K)}}catch(d){console.error("[ChatWidget] Failed to load conversations:",d),y([])}finally{v(!1)}}},[e,H]),b=te(()=>{let d=!l;k(d),d&&S()},[l,S]),_=te(d=>{d!==s.conversationId&&s.loadConversation(d),k(!1)},[s]),r=te(()=>{s.clearMessages(),k(!1)},[s]),x=te(d=>{s.sendMessage(d,{model:M.selectedModel,onAssistantMessage:I=>{}})},[s,T,M.selectedModel]),R=te(d=>{u(d),d==="tasks"&&C.loadTaskList()},[C]);if(ce(()=>{o&&(o.current={open:()=>c(!0),close:()=>c(!1),send:d=>x(d),clearMessages:()=>s.clearMessages(),toggleTTS:()=>A(d=>!d),stopSpeech:()=>j(!1),setAuth:d=>{d.token!==void 0&&z(d.token)},clearAuth:()=>z(null)})},[s,o,x]),!e.embedded&&!i)return J`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>c(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",w&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return J`
    <div class=${a} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&J`
        <${Ae}
          isOpen=${l}
          conversations=${p}
          conversationsLoading=${h}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${r}
          onSwitchConversation=${_}
        />
      `}
      
      <${Te}
        config=${e}
        debugMode=${m}
        isExpanded=${w}
        isSpeaking=${D}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${B}
        onClose=${()=>c(!1)}
        onToggleExpand=${()=>$(!w)}
        onToggleDebug=${()=>f(!m)}
        onToggleTTS=${()=>A(!T)}
        onClear=${s.clearMessages}
        onToggleSidebar=${b}
      />

      ${e.showTasksTab!==!1&&J`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${g==="chat"?"cw-tab-active":""}`}
            onClick=${()=>R("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${g==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>R("tasks")}
          >
            Tasks ${C.progress.total>0?J`<span class="cw-tab-badge">${C.progress.completed}/${C.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${m&&J`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${g==="chat"?J`
        <${xe}
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

        ${s.error&&J`<div class="cw-error-bar">${s.error}</div>`}

        ${e.showModelSelector&&M.availableModels.length>0&&J`
          <${Fe}
            availableModels=${M.availableModels}
            selectedModel=${M.selectedModel}
            onSelectModel=${M.selectModel}
            disabled=${s.isLoading}
          />
        `}

        <${Re}
          onSend=${x}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:J`
        <${Oe}
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
  `}var He={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function We(e){let t={...He.apiPaths,...e.apiPaths||{}};return{...He,...e,apiPaths:t}}import{render as tt}from"preact/compat";import{html as ht}from"htm/preact";var ve=new Map,mt=0,E=null,Be=class{constructor(t={}){Je(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++mt}`,this.config=We(t),this.container=null,this._state={},this._apiRef={current:null},ve.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&tt(ht`<${de}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Ue._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(tt(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),ve.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function nt(e={}){return new Be(e).init()}function ft(e={}){return E&&E.destroy(),E=nt(e),E}function gt(){E&&(E.destroy(),E=null)}function $t(){E&&E.open()}function yt(){E&&E.close()}function wt(e){E&&E.send(e)}function vt(){E&&E.clearMessages()}function kt(){E&&E.toggleTTS()}function bt(){E&&E.stopSpeech()}function Ct(e){E&&E.setAuth(e)}function St(){E&&E.clearAuth()}function Tt(){return E?E.getState():null}function Mt(){return E?E.getConfig():null}var Ue={createInstance:nt,getInstance:e=>ve.get(e),getAllInstances:()=>Array.from(ve.values()),init:ft,destroy:gt,open:$t,close:yt,send:wt,clearMessages:vt,toggleTTS:kt,stopSpeech:bt,setAuth:Ct,clearAuth:St,getState:Tt,getConfig:Mt,_enhancedMarkdownParser:null};typeof window<"u"&&(window.ChatWidget=Ue);var Dn=de;export{de as ChatWidget,Ue as ChatWidgetAPI,He as DEFAULT_CONFIG,Te as Header,Re as InputForm,_e as Message,xe as MessageList,Fe as ModelSelector,Ae as Sidebar,Oe as TaskList,me as camelToSnake,Ne as createApiClient,Ce as createStorage,Dn as default,ke as formatDate,oe as formatFileSize,ae as generateId,Se as getCSRFToken,re as getFileTypeIcon,ne as keysToCamel,se as keysToSnake,We as mergeConfig,be as parseMarkdown,ze as snakeToCamel,De as useChat,Pe as useModels,Ke as useTasks};
