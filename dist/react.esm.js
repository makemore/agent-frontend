var ot=Object.defineProperty;var rt=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ze=(e,t,n)=>(rt(e,typeof t!="symbol"?t+"":t,n),n);import{html as J}from"htm/preact";import{useState as j,useEffect as pe,useCallback as ne,useMemo as tt}from"preact/compat";import{html as X}from"htm/preact";function Ve(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function ge(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ae(e){return Array.isArray(e)?e.map(ae):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Ve(t),ae(n)])):e}function oe(e){return Array.isArray(e)?e.map(oe):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[ge(t),oe(n)])):e}function re(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function O(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function be(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,c=Math.floor(o/6e4),d=Math.floor(o/36e5),y=Math.floor(o/864e5);return c<1?"Just now":c<60?`${c}m ago`:d<24?`${d}h ago`:y<7?`${y}d ago`:t.toLocaleDateString()}catch{return""}}function Ce(e,t=null){if(t)return t(e);let n=O(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function Se(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let c=t(n);o===null?localStorage.removeItem(c):localStorage.setItem(c,o)}catch{}}}}function Te(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[c,d]=o.trim().split("=");if(c===e)return decodeURIComponent(d)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function ie(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function le(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function _e({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:c,isLoading:d,currentAgent:y,onClose:w,onToggleExpand:h,onToggleDebug:$,onToggleTTS:m,onClear:k,onToggleSidebar:u}){let{title:v,primaryColor:i,embedded:p,showConversationSidebar:f,showClearButton:g,showDebugButton:S,enableDebugMode:E,showTTSButton:D,showExpandButton:L,enableTTS:W,elevenLabsApiKey:K,ttsProxyUrl:N}=e,H=K||N;return X`
    <div class="cw-header" style=${{backgroundColor:i}}>
      ${f&&X`
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
        <span class="cw-title">${O(v)}</span>
        ${y&&X`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${O(y.name||y.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${g&&X`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${d||c===0}
          >🗑️</button>
        `}
        
        ${S&&E&&X`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${$}
            title="Debug"
          >🐛</button>
        `}
        
        ${D&&H&&X`
          <button 
            class="cw-header-btn ${W?"cw-btn-active":""}" 
            onClick=${m}
            title="TTS"
          >${W?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${L&&!p&&X`
          <button 
            class="cw-header-btn" 
            onClick=${h}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!p&&X`
          <button 
            class="cw-header-btn" 
            onClick=${w}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}import{html as Z}from"htm/preact";import{useRef as qe,useEffect as Xe}from"preact/compat";import{html as F}from"htm/preact";import{useState as $e,useRef as it,useEffect as lt}from"preact/compat";function Me({msg:e,show:t,onToggle:n}){return t?F`
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
    `}function Ge({onEdit:e,onRetry:t,isLoading:n,position:o,showEdit:c=!0}){return n?null:F`
    <div class="cw-message-actions cw-message-actions-${o||"left"}">
      ${c&&F`
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
  `}function ct({initialContent:e,onSave:t,onCancel:n}){let[o,c]=$e(e),d=it(null);return lt(()=>{d.current&&(d.current.focus(),d.current.setSelectionRange(o.length,o.length),d.current.style.height="auto",d.current.style.height=d.current.scrollHeight+"px")},[]),F`
    <div class="cw-inline-edit">
      <textarea
        ref=${d}
        class="cw-inline-edit-input"
        value=${o}
        onInput=${h=>{c(h.target.value),h.target.style.height="auto",h.target.style.height=h.target.scrollHeight+"px"}}
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
  `}function xe({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:c,isLoading:d,messageIndex:y}){let[w,h]=$e(!1),[$,m]=$e(!1),[k,u]=$e(!1),v=e.role==="user",i=e.role==="system",p=e.type==="tool_call",f=e.type==="tool_result",g=e.type==="error",S=e.type==="sub_agent_start",E=e.type==="sub_agent_end",D=e.type==="agent_context";if(i&&!t)return null;if(S||E||D)return F`
      <div class="cw-agent-context ${S?"cw-agent-delegating":""} ${E?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${S?"\u{1F517}":E?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&F`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&F`<${Me} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
      </div>
    `;if(p||f){let C=e.metadata?.arguments||e.metadata?.result,M=r=>{if(typeof r=="string")try{return JSON.stringify(JSON.parse(r),null,2)}catch{return r}return JSON.stringify(r,null,2)};return F`
      <div class="cw-tool-message ${f?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>C&&h(!w)}>
          ${e.content}
          ${C&&F`<span class="cw-tool-expand">${w?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${w&&C&&F`
          <pre class="cw-tool-details">${O(M(p?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&F`<${Me} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
      </div>
    `}let L=["cw-message",v&&"cw-message-user",g&&"cw-message-error"].filter(Boolean).join(" "),W=`cw-message-row ${v?"cw-message-row-user":""}`,K=e.role==="assistant"?Ce(e.content,n):O(e.content),N=e.files&&e.files.length>0,H=()=>N?F`
      <div class="cw-message-attachments">
        ${e.files.map(C=>C.type&&C.type.startsWith("image/")?F`
              <a class="cw-attachment-thumbnail" href=${C.url} target="_blank" title=${C.name}>
                <img src=${C.url} alt=${C.name} />
              </a>
            `:F`
            <a class="cw-attachment-file" href=${C.url} target="_blank" title=${C.name}>
              <span class="cw-attachment-icon">${le(C.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${C.name}</span>
                <span class="cw-attachment-size">${ie(C.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,z=C=>{u(!1),o&&o(y,C)},B=()=>{c&&c(y)};if(v&&k)return F`
      <div class=${W} style="position: relative;">
        ${H()}
        <${ct}
          initialContent=${e.content}
          onSave=${z}
          onCancel=${()=>u(!1)}
        />
      </div>
    `;let s=v&&o&&c,T=e.role==="assistant"&&c&&!d;return F`
    <div class="${W} ${s||T?"cw-message-row-with-actions":""}">
      ${H()}
      ${s&&F`
        <div class="cw-user-actions-wrapper">
          <${Ge}
            onEdit=${()=>u(!0)}
            onRetry=${B}
            isLoading=${d}
            position="left"
            showEdit=${!0}
          />
          <div class=${L} dangerouslySetInnerHTML=${{__html:K}} />
        </div>
      `}
      ${!s&&F`
        <div class=${L} dangerouslySetInnerHTML=${{__html:K}} />
      `}
      ${T&&F`
        <${Ge}
          onRetry=${B}
          isLoading=${d}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&F`<${Me} msg=${e} show=${$} onToggle=${()=>m(!$)} />`}
    </div>
  `}function Ie({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:c,onEditMessage:d,onRetryMessage:y,debugMode:w,markdownParser:h,emptyStateTitle:$,emptyStateMessage:m}){let k=qe(null),u=qe(!0),v=p=>{let f=p.target,g=f.scrollHeight-f.scrollTop-f.clientHeight<100;if(u.current=g,f.scrollTop<50&&n&&!o){let S=f.scrollHeight;c().then(()=>{let E=f.scrollHeight;f.scrollTop=E-S+f.scrollTop})}};Xe(()=>{let p=k.current;p&&u.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),Xe(()=>{let p=k.current;p&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let i=e.length===0;return Z`
    <div class="cw-messages" ref=${k} onScroll=${v}>
      ${i&&Z`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${O($)}</h3>
          <p>${O(m)}</p>
        </div>
      `}
      
      ${!i&&n&&Z`
        <div class="cw-load-more" onClick=${c}>
          ${o?Z`<span class="cw-spinner"></span><span>Loading...</span>`:Z`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((p,f)=>Z`
        <${xe}
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
      
      ${t&&Z`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}import{html as V}from"htm/preact";import{useState as ce,useRef as ye,useEffect as Ee}from"preact/compat";var Re=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Ae({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:c,enableVoice:d=!0,enableFiles:y=!0}){let[w,h]=ce(""),[$,m]=ce([]),[k,u]=ce(!1),[v,i]=ce(!1),[p]=ce(()=>!!Re),f=ye(null),g=ye(null),S=ye(null),E=ye(!1);Ee(()=>{!n&&f.current&&f.current.focus()},[n]),Ee(()=>{f.current&&(f.current.style.height="auto",f.current.style.height=Math.min(f.current.scrollHeight,150)+"px")},[w]),Ee(()=>()=>{E.current=!1,S.current&&S.current.abort()},[]);let D=r=>{r.preventDefault(),(w.trim()||$.length>0)&&!n&&(e(w,$),h(""),m([]),f.current&&(f.current.style.height="auto"),g.current&&(g.current.value=""))},L=r=>{let I=Array.from(r.target.files||[]);I.length>0&&m(R=>[...R,...I])},W=r=>{m(I=>I.filter((R,a)=>a!==r))},K=r=>{r.preventDefault(),g.current&&!n&&g.current.click()},N=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),D(r))},H=r=>{n&&t&&(r.preventDefault(),t())},z=()=>{if(!Re||n)return;E.current=!0;let r=new Re;r.continuous=!0,r.interimResults=!0,r.lang=navigator.language||"en-US";let I=w,R="";r.onstart=()=>{i(!0)},r.onresult=a=>{R="";for(let l=a.resultIndex;l<a.results.length;l++){let x=a.results[l][0].transcript;a.results[l].isFinal?I+=(I?" ":"")+x:R+=x}h(I+(R?" "+R:""))},r.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),E.current=!1,i(!1),h(I||w)},r.onend=()=>{if(E.current){console.log("[ChatWidget] Recognition paused, restarting...");try{r.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}i(!1),I&&h(I),S.current=null},S.current=r,r.start()},B=()=>{E.current=!1,S.current&&S.current.stop()},s=r=>{r.preventDefault(),v?B():z()},b=V`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,T=V`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,_=V`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,C=d&&p,M=y;return V`
    <form class="cw-input-form" onSubmit=${D}>
      <input
        type="file"
        ref=${g}
        style="display: none"
        multiple
        onChange=${L}
      />
      ${$.length>0&&V`
        <div class="cw-file-chips">
          ${$.map((r,I)=>V`
            <div class="cw-file-chip" key=${I}>
              <span class="cw-file-chip-icon">${le(r.type)}</span>
              <span class="cw-file-chip-name" title=${r.name}>${r.name.length>20?r.name.substring(0,17)+"...":r.name}</span>
              <span class="cw-file-chip-size">(${ie(r.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>W(I)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${f}
        class="cw-input"
        placeholder=${O(o)}
        value=${w}
        onInput=${r=>h(r.target.value)}
        onKeyDown=${N}
        disabled=${n}
        rows="1"
      />
      ${M&&V`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${K}
          disabled=${n}
          title="Attach files"
        >
          ${_}
        </button>
      `}
      ${C&&V`
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
        style=${{backgroundColor:n&&k?"#dc2626":c}}
        onClick=${H}
        onMouseEnter=${()=>u(!0)}
        onMouseLeave=${()=>u(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?b:V`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}import{html as we}from"htm/preact";function Fe({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:c,onNewConversation:d,onSwitchConversation:y}){return we`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${c}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${d}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&we`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&we`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(w=>we`
          <div 
            key=${w.id}
            class="cw-conversation-item ${w.id===o?"cw-conversation-active":""}"
            onClick=${()=>y(w.id)}
          >
            <div class="cw-conversation-title">${O(w.title||"Untitled")}</div>
            <div class="cw-conversation-date">${be(w.updatedAt||w.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${c}
    />
  `}import{html as ee}from"htm/preact";import{useState as dt}from"preact/compat";function Oe({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:o,onToggleThinking:c,disabled:d}){let[y,w]=dt(!1);if(!e||e.length===0)return null;let h=e.find(i=>i.id===t),$=h?.name||"Select Model",m=h?.supports_thinking||!1,k=()=>{d||w(!y)},u=i=>{n(i),w(!1)},v=i=>{i.stopPropagation(),c&&m&&c(!o)};return ee`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${k}
        disabled=${d}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${O($)}</span>
        <span class="cw-model-chevron">${y?"\u25B2":"\u25BC"}</span>
      </button>

      ${m&&c&&ee`
        <button
          class="cw-thinking-toggle ${o?"cw-thinking-enabled":""}"
          onClick=${v}
          disabled=${d}
          title=${o?"Thinking enabled - click to disable":"Enable extended thinking"}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${y&&ee`
        <div class="cw-model-dropdown">
          ${e.map(i=>ee`
            <button
              key=${i.id}
              class="cw-model-option ${i.id===t?"cw-model-option-selected":""}"
              onClick=${()=>u(i.id)}
            >
              <span class="cw-model-option-name">
                ${O(i.name)}
                ${i.supports_thinking&&ee`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${O(i.provider)}</span>
              ${i.description&&ee`
                <span class="cw-model-option-desc">${O(i.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}import{html as G}from"htm/preact";import{useState as Ye,useCallback as de}from"preact/compat";var ut={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},pt={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function ht({task:e,onUpdate:t,onRemove:n,depth:o=0}){let[c,d]=Ye(!1),[y,w]=Ye(e.name),h=de(()=>{let u={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:u[e.state]||"not_started"})},[e,t]),$=de(()=>{y.trim()&&y!==e.name&&t(e.id,{name:y.trim()}),d(!1)},[e,y,t]),m=de(u=>{u.key==="Enter"&&$(),u.key==="Escape"&&(w(e.name),d(!1))},[$,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return G`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${o*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${h}
        title=${pt[e.state]}
      >
        ${ut[e.state]}
      </button>
      
      ${c?G`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${y}
          onInput=${u=>w(u.target.value)}
          onBlur=${$}
          onKeyDown=${m}
          autoFocus
        />
      `:G`
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
  `}function De({tasks:e,progress:t,isLoading:n,error:o,onUpdate:c,onRemove:d,onClear:y,onRefresh:w}){let h=de(k=>{let u=new Map,v=[];return k.forEach(i=>{u.set(i.id,{...i,children:[]})}),k.forEach(i=>{let p=u.get(i.id);i.parent_id&&u.has(i.parent_id)?u.get(i.parent_id).children.push(p):v.push(p)}),v},[]),$=de((k,u=0)=>G`
      <${ht}
        key=${k.id}
        task=${k}
        depth=${u}
        onUpdate=${c}
        onRemove=${d}
      />
      ${k.children?.map(v=>$(v,u+1))}
    `,[c,d]),m=h(e);return n&&e.length===0?G`<div class="cw-tasks-loading">Loading tasks...</div>`:G`
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
          ${e.length>0&&G`
            <button class="cw-tasks-action-btn" onClick=${y} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${o&&G`<div class="cw-tasks-error">${o}</div>`}
      
      <div class="cw-tasks-list">
        ${m.length===0?G`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:m.map(k=>$(k))}
      </div>
    </div>
  `}import{useState as Q,useCallback as Y,useRef as Ze,useEffect as Qe}from"preact/compat";function Pe(e,t,n){let[o,c]=Q([]),[d,y]=Q(!1),[w,h]=Q(null),[$,m]=Q(()=>n?.get(e.conversationIdKey)||null),[k,u]=Q(!1),[v,i]=Q(!1),[p,f]=Q(0),g=Ze(null),S=Ze(null);Qe(()=>{$&&n?.set(e.conversationIdKey,$)},[$,e.conversationIdKey,n]);let E=Y(async(s,b,T)=>{g.current&&g.current.close();let _=e.apiPaths.runEvents.replace("{runId}",s),C=`${e.backendUrl}${_}`;b&&(C+=`?anonymous_token=${encodeURIComponent(b)}`);let M=new EventSource(C);g.current=M;let r="";M.addEventListener("assistant.message",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let l=a.payload.content;l&&(r+=l,c(x=>{let P=x[x.length-1];return P?.role==="assistant"&&P.id.startsWith("assistant-stream-")?[...x.slice(0,-1),{...P,content:r}]:[...x,{id:"assistant-stream-"+Date.now(),role:"assistant",content:r,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.call",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.call",a.payload),c(l=>[...l,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.result",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.result",a.payload);let l=a.payload.result,x=l?.error;c(P=>[...P,{id:"tool-result-"+Date.now(),role:"system",content:x?`\u274C ${l.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:l,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("custom",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&c(l=>[...l,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.start",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),c(l=>[...l,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.end",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),c(l=>[...l,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let I=R=>{try{let a=JSON.parse(R.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let l=a.payload.error||"Agent run failed";h(l),c(x=>[...x,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${l}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}y(!1),M.close(),g.current=null,r&&T&&T(r)};M.addEventListener("run.succeeded",I),M.addEventListener("run.failed",I),M.addEventListener("run.cancelled",I),M.addEventListener("run.timed_out",I),M.onerror=()=>{y(!1),M.close(),g.current=null}},[e]),D=Y(async(s,b={},T={})=>{if(!s.trim()||d)return;let _=[],C={};typeof b=="function"?C={onAssistantMessage:b}:Array.isArray(b)?(_=b,C=T):C=b||{};let{model:M,thinking:r,onAssistantMessage:I,supersedeFromMessageIndex:R}=C;y(!0),h(null);let a={id:re(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:_.length>0?_.map(l=>({name:l.name,size:l.size,type:l.type})):void 0};c(l=>[...l,a]);try{let l=await t.getOrCreateSession(),x;if(_.length>0){let U=e.apiCaseStyle!=="camel",Je=fe=>U?ge(fe):fe,q=new FormData;q.append(Je("agentKey"),e.agentKey),$&&q.append(Je("conversationId"),$),q.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),q.append("metadata",JSON.stringify(U?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&q.append("model",M),r&&q.append("thinking","true"),_.forEach(fe=>{q.append("files",fe)}),x=t.getFetchOptions({method:"POST",body:q},l)}else{let U=t.transformRequest({agentKey:e.agentKey,conversationId:$,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...r&&{thinking:!0},...R!==void 0&&{supersedeFromMessageIndex:R}});x=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)},l)}let P=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,x),se=l;if(P.status===401){t.clearSession();let U=await t.getOrCreateSession(!0);U&&(se=U,_.length>0?x=t.getFetchOptions({method:"POST",body:x.body},U):x=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:x.body},U),P=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,x))}if(!P.ok){let U=await P.json().catch(()=>({}));throw new Error(U.error||U.detail||`HTTP ${P.status}`)}let at=await P.json(),me=t.transformResponse(at);S.current=me.id,!$&&me.conversationId&&m(me.conversationId),await E(me.id,se,I)}catch(l){h(l.message||"Failed to send message"),y(!1)}finally{S.current=null}},[e,t,$,d,E]),L=Y(async()=>{let s=S.current;if(!(!s||!d))try{let b=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${b}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),y(!1),S.current=null,c(_=>[..._,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(b){console.error("[ChatWidget] Failed to cancel run:",b)}},[e,t,d]),W=Y(()=>{c([]),m(null),h(null),u(!1),f(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),K=s=>{let b={id:re(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...b,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(_=>({id:re(),role:"assistant",content:`\u{1F527} ${_.function?.name||_.name||"tool"}`,timestamp:b.timestamp,type:"tool_call",metadata:{toolName:_.function?.name||_.name,arguments:_.function?.arguments||_.arguments,toolCallId:_.id}}));let T=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!T?.trim()?null:{...b,content:T,type:"message"}},N=Y(async s=>{y(!0),c([]),m(s);try{let b=await t.getOrCreateSession(),_=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`,C=await fetch(_,t.getFetchOptions({method:"GET"},b));if(C.ok){let M=await C.json(),r=t.transformResponse(M);r.messages&&c(r.messages.flatMap(K).filter(Boolean)),u(r.hasMore||!1),f(r.messages?.length||0)}else C.status===404&&(m(null),n?.set(e.conversationIdKey,null))}catch(b){console.error("[ChatWidget] Failed to load conversation:",b)}finally{y(!1)}},[e,t,n]),H=Y(async()=>{if(!(!$||v||!k)){i(!0);try{let s=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${$}/?limit=10&offset=${p}`,_=await fetch(T,t.getFetchOptions({method:"GET"},s));if(_.ok){let C=await _.json(),M=t.transformResponse(C);if(M.messages?.length>0){let r=M.messages.flatMap(K).filter(Boolean);c(I=>[...r,...I]),f(I=>I+M.messages.length),u(M.hasMore||!1)}else u(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{i(!1)}}},[e,t,$,p,v,k]),z=Y(async(s,b,T={})=>{if(d)return;let _=o[s];if(!_||_.role!=="user")return;let C=o.slice(0,s);c(C),await D(b,{...T,supersedeFromMessageIndex:s})},[o,d,D]),B=Y(async(s,b={})=>{if(d)return;let T=o[s];if(!T)return;let _=s,C=T;if(T.role==="assistant"){for(let r=s-1;r>=0;r--)if(o[r].role==="user"){_=r,C=o[r];break}if(C.role!=="user")return}else if(T.role!=="user")return;let M=o.slice(0,_);c(M),await D(C.content,{...b,supersedeFromMessageIndex:_})},[o,d,D]);return Qe(()=>()=>{g.current&&g.current.close()},[]),{messages:o,isLoading:d,error:w,conversationId:$,hasMoreMessages:k,loadingMoreMessages:v,sendMessage:D,cancelRun:L,clearMessages:W,loadConversation:N,loadMoreMessages:H,setConversationId:m,editMessage:z,retryMessage:B}}import{useState as ue,useEffect as mt,useCallback as ke}from"preact/compat";var et="cw_thinking_enabled";function Le(e,t,n){let[o,c]=ue([]),[d,y]=ue(null),[w,h]=ue(null),[$,m]=ue(!1),[k,u]=ue(!1);mt(()=>{(async()=>{if(e.showModelSelector){m(!0);try{let S=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(S.ok){let E=await S.json(),D=E.models||[];c(D),h(E.default);let L=n?.get(e.modelKey);L&&D.some(K=>K.id===L)?y(L):y(E.default),n?.get(et)==="true"&&u(!0)}}catch(S){console.warn("[ChatWidget] Failed to load models:",S)}finally{m(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let v=ke(g=>{y(g),n?.set(e.modelKey,g)},[e.modelKey,n]),i=ke(g=>{u(g),n?.set(et,g?"true":"false")},[n]),p=ke(()=>o.find(g=>g.id===d)||null,[o,d]),f=ke(()=>p()?.supports_thinking||!1,[p]);return{availableModels:o,selectedModel:d,defaultModel:w,isLoading:$,selectModel:v,getSelectedModelInfo:p,thinkingEnabled:k,toggleThinking:i,supportsThinking:f}}import{useState as Ke,useCallback as te}from"preact/compat";function Ne(e,t){let[n,o]=Ke(null),[c,d]=Ke(!1),[y,w]=Ke(null),h=e.apiPaths?.tasks||"/api/agent/tasks/",$=te(async()=>{d(!0),w(null);try{let p=`${e.backendUrl}${h}`,f=await fetch(p,t.getFetchOptions({method:"GET"}));if(f.ok){let g=await f.json();o(g)}else{let g=await f.json().catch(()=>({}));w(g.error||"Failed to load tasks")}}catch(p){console.error("[useTasks] Failed to load task list:",p),w("Failed to load tasks")}finally{d(!1)}},[e.backendUrl,h,t]),m=te(async p=>{if(!n)return null;try{let f=`${e.backendUrl}${h}${n.id}/add_task/`,g=await fetch(f,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));if(g.ok){let S=await g.json();return await $(),S}else{let S=await g.json().catch(()=>({}));return w(S.error||"Failed to add task"),null}}catch(f){return console.error("[useTasks] Failed to add task:",f),w("Failed to add task"),null}},[e.backendUrl,h,n,t,$]),k=te(async(p,f)=>{if(!n)return null;try{let g=`${e.backendUrl}${h}${n.id}/update_task/${p}/`,S=await fetch(g,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}));if(S.ok){let E=await S.json();return await $(),E}else{let E=await S.json().catch(()=>({}));return w(E.error||"Failed to update task"),null}}catch(g){return console.error("[useTasks] Failed to update task:",g),w("Failed to update task"),null}},[e.backendUrl,h,n,t,$]),u=te(async p=>{if(!n)return!1;try{let f=`${e.backendUrl}${h}${n.id}/remove_task/${p}/`,g=await fetch(f,t.getFetchOptions({method:"DELETE"}));if(g.ok)return await $(),!0;{let S=await g.json().catch(()=>({}));return w(S.error||"Failed to remove task"),!1}}catch(f){return console.error("[useTasks] Failed to remove task:",f),w("Failed to remove task"),!1}},[e.backendUrl,h,n,t,$]),v=te(async()=>{if(!n)return!1;try{let p=`${e.backendUrl}${h}${n.id}/clear/`,f=await fetch(p,t.getFetchOptions({method:"POST"}));if(f.ok)return await $(),!0;{let g=await f.json().catch(()=>({}));return w(g.error||"Failed to clear tasks"),!1}}catch(p){return console.error("[useTasks] Failed to clear tasks:",p),w("Failed to clear tasks"),!1}},[e.backendUrl,h,n,t,$]),i=te(()=>w(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:c,error:y,loadTaskList:$,addTask:m,updateTask:k,removeTask:u,clearTasks:v,clearError:i}}function He(e,t,n){let o=m=>!m||typeof m!="object"||e.apiCaseStyle==="camel"?m:oe(m),c=m=>!m||typeof m!="object"||e.apiCaseStyle==="snake"?m:ae(m),d=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",y=(m=null)=>{let k=d(),u={},v=m||e.authToken||t().authToken;if(k==="token"&&v){let i=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";u[i]=p?`${p} ${v}`:v}else if(k==="jwt"&&v){let i=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";u[i]=p?`${p} ${v}`:v}else if(k==="anonymous"&&v){let i=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";u[i]=v}if(k==="session"){let i=Te(e.csrfCookieName);i&&(u["X-CSRFToken"]=i)}return u};return{getAuthStrategy:d,getAuthHeaders:y,getFetchOptions:(m={},k=null)=>{let u=d(),v={...m},i=y(k);return console.log("[ChatWidget] getFetchOptions - strategy:",u,"overrideToken:",k,"authHeaders:",i),v.headers={...v.headers,...i},u==="session"&&(v.credentials="include"),v},getOrCreateSession:async(m=!1)=>{let k=d(),u=t(),v=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||u.authToken;if(!m){if(u.authToken)return u.authToken;let i=u.storage?.get(v);if(i)return n(p=>({...p,authToken:i})),i}try{let i=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${i}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let f=await p.json();return n(g=>({...g,authToken:f.token})),u.storage?.set(v,f.token),f.token}}catch(i){console.warn("[ChatWidget] Failed to create session:",i)}return null},clearSession:()=>{let m=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(u=>({...u,authToken:null})),k.storage?.set(m,null)},transformRequest:o,transformResponse:c}}function he({config:e,onStateChange:t,markdownParser:n,apiRef:o}){let[c,d]=j(e.embedded||e.forceOpen===!0),[y,w]=j(!1),[h,$]=j(!1),[m,k]=j(!1),[u,v]=j([]),[i,p]=j("chat"),[f,g]=j(!1),[S,E]=j(e.enableTTS),[D,L]=j(!1),[W,K]=j(null);pe(()=>{e.forceOpen!==void 0&&d(e.forceOpen)},[e.forceOpen]);let N=tt(()=>Se(e.containerId),[e.containerId]),[H,z]=j(e.authToken||null),B=tt(()=>He(e,()=>({authToken:H,storage:N}),P=>{let se=P({authToken:H,storage:N});se.authToken!==H&&z(se.authToken)}),[e,H,N]),s=Pe(e,B,N),b=Le(e,B,N),T=Ne(e,B);pe(()=>{for(let l=s.messages.length-1;l>=0;l--){let x=s.messages[l];if(x.type==="sub_agent_start"){K({key:x.metadata?.subAgentKey,name:x.metadata?.agentName});return}if(x.type==="sub_agent_end"){K(null);return}}},[s.messages]),pe(()=>{let l=N.get(e.conversationIdKey);l&&s.loadConversation(l)},[]),pe(()=>{t&&t({isOpen:c,isExpanded:y,debugMode:h,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[c,y,h,s.messages,s.conversationId,s.isLoading,s.error]);let _=ne(async()=>{if(e.showConversationSidebar){g(!0);try{let l=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,x=await fetch(l,B.getFetchOptions({method:"GET"}));if(x.ok){let P=await x.json();v(P.results||P)}}catch(l){console.error("[ChatWidget] Failed to load conversations:",l),v([])}finally{g(!1)}}},[e,B]),C=ne(()=>{let l=!m;k(l),l&&_()},[m,_]),M=ne(l=>{l!==s.conversationId&&s.loadConversation(l),k(!1)},[s]),r=ne(()=>{s.clearMessages(),k(!1)},[s]),I=ne(l=>{s.sendMessage(l,{model:b.selectedModel,thinking:b.thinkingEnabled&&b.supportsThinking(),onAssistantMessage:x=>{}})},[s,S,b.selectedModel,b.thinkingEnabled,b.supportsThinking]),R=ne(l=>{p(l),l==="tasks"&&T.loadTaskList()},[T]);if(pe(()=>{o&&(o.current={open:()=>d(!0),close:()=>d(!1),send:l=>I(l),clearMessages:()=>s.clearMessages(),toggleTTS:()=>E(l=>!l),stopSpeech:()=>L(!1),setAuth:l=>{l.token!==void 0&&z(l.token)},clearAuth:()=>z(null)})},[s,o,I]),!e.embedded&&!c)return J`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>d(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",y&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return J`
    <div class=${a} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&J`
        <${Fe}
          isOpen=${m}
          conversations=${u}
          conversationsLoading=${f}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${r}
          onSwitchConversation=${M}
        />
      `}
      
      <${_e}
        config=${e}
        debugMode=${h}
        isExpanded=${y}
        isSpeaking=${D}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${W}
        onClose=${()=>d(!1)}
        onToggleExpand=${()=>w(!y)}
        onToggleDebug=${()=>$(!h)}
        onToggleTTS=${()=>E(!S)}
        onClear=${s.clearMessages}
        onToggleSidebar=${C}
      />

      ${e.showTasksTab!==!1&&J`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${i==="chat"?"cw-tab-active":""}`}
            onClick=${()=>R("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${i==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>R("tasks")}
          >
            Tasks ${T.progress.total>0?J`<span class="cw-tab-badge">${T.progress.completed}/${T.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${h&&J`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${i==="chat"?J`
        <${Ie}
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

        ${s.error&&J`<div class="cw-error-bar">${s.error}</div>`}

        ${e.showModelSelector&&b.availableModels.length>0&&J`
          <${Oe}
            availableModels=${b.availableModels}
            selectedModel=${b.selectedModel}
            onSelectModel=${b.selectModel}
            thinkingEnabled=${b.thinkingEnabled}
            onToggleThinking=${b.toggleThinking}
            disabled=${s.isLoading}
          />
        `}

        <${Ae}
          onSend=${I}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:J`
        <${De}
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
  `}var We={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Be(e){let t={...We.apiPaths,...e.apiPaths||{}};return{...We,...e,apiPaths:t}}import{render as nt}from"preact/compat";import{html as ft}from"htm/preact";var ve=new Map,gt=0,A=null,Ue=class{constructor(t={}){ze(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++gt}`,this.config=Be(t),this.container=null,this._state={},this._apiRef={current:null},ve.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&nt(ft`<${he}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${je._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(nt(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),ve.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function st(e={}){return new Ue(e).init()}function $t(e={}){return A&&A.destroy(),A=st(e),A}function yt(){A&&(A.destroy(),A=null)}function wt(){A&&A.open()}function kt(){A&&A.close()}function vt(e){A&&A.send(e)}function bt(){A&&A.clearMessages()}function Ct(){A&&A.toggleTTS()}function St(){A&&A.stopSpeech()}function Tt(e){A&&A.setAuth(e)}function _t(){A&&A.clearAuth()}function Mt(){return A?A.getState():null}function xt(){return A?A.getConfig():null}var je={createInstance:st,getInstance:e=>ve.get(e),getAllInstances:()=>Array.from(ve.values()),init:$t,destroy:yt,open:wt,close:kt,send:vt,clearMessages:bt,toggleTTS:Ct,stopSpeech:St,setAuth:Tt,clearAuth:_t,getState:Mt,getConfig:xt,_enhancedMarkdownParser:null};typeof window<"u"&&(window.ChatWidget=je);var Ln=he;export{he as ChatWidget,je as ChatWidgetAPI,We as DEFAULT_CONFIG,_e as Header,Ae as InputForm,xe as Message,Ie as MessageList,Oe as ModelSelector,Fe as Sidebar,De as TaskList,ge as camelToSnake,He as createApiClient,Se as createStorage,Ln as default,be as formatDate,ie as formatFileSize,re as generateId,Te as getCSRFToken,le as getFileTypeIcon,ae as keysToCamel,oe as keysToSnake,Be as mergeConfig,Ce as parseMarkdown,Ve as snakeToCamel,Pe as useChat,Le as useModels,Ne as useTasks};
