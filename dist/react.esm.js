var rt=Object.defineProperty;var it=(e,t,n)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ve=(e,t,n)=>(it(e,typeof t!="symbol"?t+"":t,n),n);import{html as J}from"htm/preact";import{useState as j,useEffect as pe,useCallback as se,useMemo as st}from"preact/compat";import{html as X}from"htm/preact";function Ge(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function $e(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ae(e){return Array.isArray(e)?e.map(ae):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Ge(t),ae(n)])):e}function oe(e){return Array.isArray(e)?e.map(oe):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[$e(t),oe(n)])):e}function re(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function D(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function Ce(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,i=Math.floor(o/6e4),l=Math.floor(o/36e5),h=Math.floor(o/864e5);return i<1?"Just now":i<60?`${i}m ago`:l<24?`${l}h ago`:h<7?`${h}d ago`:t.toLocaleDateString()}catch{return""}}function Se(e,t=null){if(t)return t(e);let n=D(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function Te(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let i=t(n);o===null?localStorage.removeItem(i):localStorage.setItem(i,o)}catch{}}}}function _e(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[i,l]=o.trim().split("=");if(i===e)return decodeURIComponent(l)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function ie(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function le(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function lt(e){if(!e||typeof e!="string")return 0;let t=e.replace("#","");if(t.length!==6&&t.length!==3)return 0;let n=t.length===3?t.split("").map(u=>u+u).join(""):t,o=parseInt(n.substr(0,2),16)/255,i=parseInt(n.substr(2,2),16)/255,l=parseInt(n.substr(4,2),16)/255,h=u=>u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4);return .2126*h(o)+.7152*h(i)+.0722*h(l)}function qe(e){return lt(e)>.179?"#000000":"#ffffff"}function Me({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:i,isLoading:l,currentAgent:h,onClose:u,onToggleExpand:m,onToggleDebug:y,onToggleTTS:f,onClear:k,onToggleSidebar:d}){let{title:v,primaryColor:c,embedded:p,showConversationSidebar:g,showClearButton:$,showDebugButton:S,enableDebugMode:E,showTTSButton:P,showExpandButton:L,enableTTS:H,elevenLabsApiKey:W,ttsProxyUrl:K}=e,N=W||K;return X`
    <div class="cw-header" style=${{backgroundColor:c}}>
      ${g&&X`
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
        <span class="cw-title">${D(v)}</span>
        ${h&&X`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${D(h.name||h.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${$&&X`
          <button 
            class="cw-header-btn" 
            onClick=${k}
            title="Clear"
            disabled=${l||i===0}
          >🗑️</button>
        `}
        
        ${S&&E&&X`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${y}
            title="Debug"
          >🐛</button>
        `}
        
        ${P&&N&&X`
          <button 
            class="cw-header-btn ${H?"cw-btn-active":""}" 
            onClick=${f}
            title="TTS"
          >${H?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${L&&!p&&X`
          <button 
            class="cw-header-btn" 
            onClick=${m}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!p&&X`
          <button 
            class="cw-header-btn" 
            onClick=${u}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}import{html as Q}from"htm/preact";import{useRef as Ye,useEffect as Ze}from"preact/compat";import{html as O}from"htm/preact";import{useState as ye,useRef as ct,useEffect as dt}from"preact/compat";function xe({msg:e,show:t,onToggle:n}){return t?O`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:O`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function Xe({onEdit:e,onRetry:t,isLoading:n,position:o,showEdit:i=!0}){return n?null:O`
    <div class="cw-message-actions cw-message-actions-${o||"left"}">
      ${i&&O`
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
  `}function ut({initialContent:e,onSave:t,onCancel:n}){let[o,i]=ye(e),l=ct(null);return dt(()=>{l.current&&(l.current.focus(),l.current.setSelectionRange(o.length,o.length),l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[]),O`
    <div class="cw-inline-edit">
      <textarea
        ref=${l}
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
  `}function Ie({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:i,isLoading:l,messageIndex:h}){let[u,m]=ye(!1),[y,f]=ye(!1),[k,d]=ye(!1),v=e.role==="user",c=e.role==="system",p=e.type==="tool_call",g=e.type==="tool_result",$=e.type==="error",S=e.type==="sub_agent_start",E=e.type==="sub_agent_end",P=e.type==="agent_context";if(c&&!t)return null;if(S||E||P)return O`
      <div class="cw-agent-context ${S?"cw-agent-delegating":""} ${E?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${S?"\u{1F517}":E?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&O`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&O`<${xe} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `;if(p||g){let b=e.metadata?.arguments||e.metadata?.result,M=r=>{if(typeof r=="string")try{return JSON.stringify(JSON.parse(r),null,2)}catch{return r}return JSON.stringify(r,null,2)};return O`
      <div class="cw-tool-message ${g?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&m(!u)}>
          ${e.content}
          ${b&&O`<span class="cw-tool-expand">${u?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${u&&b&&O`
          <pre class="cw-tool-details">${D(M(p?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&O`<${xe} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `}let L=["cw-message",v&&"cw-message-user",$&&"cw-message-error"].filter(Boolean).join(" "),H=`cw-message-row ${v?"cw-message-row-user":""}`,W=e.role==="assistant"?Se(e.content,n):D(e.content),K=e.files&&e.files.length>0,N=()=>K?O`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?O`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:O`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${le(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${ie(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,z=b=>{d(!1),o&&o(h,b)},U=()=>{i&&i(h)};if(v&&k)return O`
      <div class=${H} style="position: relative;">
        ${N()}
        <${ut}
          initialContent=${e.content}
          onSave=${z}
          onCancel=${()=>d(!1)}
        />
      </div>
    `;let s=v&&o&&i,T=e.role==="assistant"&&i&&!l;return O`
    <div class="${H} ${s||T?"cw-message-row-with-actions":""}">
      ${N()}
      ${s&&O`
        <div class="cw-user-actions-wrapper">
          <${Xe}
            onEdit=${()=>d(!0)}
            onRetry=${U}
            isLoading=${l}
            position="left"
            showEdit=${!0}
          />
          <div class=${L} dangerouslySetInnerHTML=${{__html:W}} />
        </div>
      `}
      ${!s&&O`
        <div class=${L} dangerouslySetInnerHTML=${{__html:W}} />
      `}
      ${T&&O`
        <${Xe}
          onRetry=${U}
          isLoading=${l}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&O`<${xe} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
    </div>
  `}function Ee({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:i,onEditMessage:l,onRetryMessage:h,debugMode:u,markdownParser:m,emptyStateTitle:y,emptyStateMessage:f}){let k=Ye(null),d=Ye(!0),v=p=>{let g=p.target,$=g.scrollHeight-g.scrollTop-g.clientHeight<100;if(d.current=$,g.scrollTop<50&&n&&!o){let S=g.scrollHeight;i().then(()=>{let E=g.scrollHeight;g.scrollTop=E-S+g.scrollTop})}};Ze(()=>{let p=k.current;p&&d.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),Ze(()=>{let p=k.current;p&&e.length<=2&&(d.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let c=e.length===0;return Q`
    <div class="cw-messages" ref=${k} onScroll=${v}>
      ${c&&Q`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${D(y)}</h3>
          <p>${D(f)}</p>
        </div>
      `}
      
      ${!c&&n&&Q`
        <div class="cw-load-more" onClick=${i}>
          ${o?Q`<span class="cw-spinner"></span><span>Loading...</span>`:Q`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((p,g)=>Q`
        <${Ie}
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
      
      ${t&&Q`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}import{html as V}from"htm/preact";import{useState as ce,useRef as we,useEffect as Re}from"preact/compat";var Ae=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Fe({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:i,enableVoice:l=!0,enableFiles:h=!0}){let[u,m]=ce(""),[y,f]=ce([]),[k,d]=ce(!1),[v,c]=ce(!1),[p]=ce(()=>!!Ae),g=we(null),$=we(null),S=we(null),E=we(!1);Re(()=>{!n&&g.current&&g.current.focus()},[n]),Re(()=>{g.current&&(g.current.style.height="auto",g.current.style.height=Math.min(g.current.scrollHeight,150)+"px")},[u]),Re(()=>()=>{E.current=!1,S.current&&S.current.abort()},[]);let P=r=>{r.preventDefault(),(u.trim()||y.length>0)&&!n&&(e(u,y),m(""),f([]),g.current&&(g.current.style.height="auto"),$.current&&($.current.value=""))},L=r=>{let I=Array.from(r.target.files||[]);I.length>0&&f(R=>[...R,...I])},H=r=>{f(I=>I.filter((R,a)=>a!==r))},W=r=>{r.preventDefault(),$.current&&!n&&$.current.click()},K=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),P(r))},N=r=>{n&&t&&(r.preventDefault(),t())},z=()=>{if(!Ae||n)return;E.current=!0;let r=new Ae;r.continuous=!0,r.interimResults=!0,r.lang=navigator.language||"en-US";let I=u,R="";r.onstart=()=>{c(!0)},r.onresult=a=>{R="";for(let x=a.resultIndex;x<a.results.length;x++){let w=a.results[x][0].transcript;a.results[x].isFinal?I+=(I?" ":"")+w:R+=w}m(I+(R?" "+R:""))},r.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),E.current=!1,c(!1),m(I||u)},r.onend=()=>{if(E.current){console.log("[ChatWidget] Recognition paused, restarting...");try{r.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}c(!1),I&&m(I),S.current=null},S.current=r,r.start()},U=()=>{E.current=!1,S.current&&S.current.stop()},s=r=>{r.preventDefault(),v?U():z()},C=V`
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
  `,b=l&&p,M=h;return V`
    <form class="cw-input-form" onSubmit=${P}>
      <input
        type="file"
        ref=${$}
        style="display: none"
        multiple
        onChange=${L}
      />
      ${y.length>0&&V`
        <div class="cw-file-chips">
          ${y.map((r,I)=>V`
            <div class="cw-file-chip" key=${I}>
              <span class="cw-file-chip-icon">${le(r.type)}</span>
              <span class="cw-file-chip-name" title=${r.name}>${r.name.length>20?r.name.substring(0,17)+"...":r.name}</span>
              <span class="cw-file-chip-size">(${ie(r.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>H(I)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${g}
        class="cw-input"
        placeholder=${D(o)}
        value=${u}
        onInput=${r=>m(r.target.value)}
        onKeyDown=${K}
        disabled=${n}
        rows="1"
      />
      ${M&&V`
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
      ${b&&V`
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
        style=${{backgroundColor:n&&k?"#dc2626":i}}
        onClick=${N}
        onMouseEnter=${()=>d(!0)}
        onMouseLeave=${()=>d(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?C:V`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}import{html as ke}from"htm/preact";function Oe({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:i,onNewConversation:l,onSwitchConversation:h}){return ke`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${i}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${l}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&ke`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&ke`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(u=>ke`
          <div 
            key=${u.id}
            class="cw-conversation-item ${u.id===o?"cw-conversation-active":""}"
            onClick=${()=>h(u.id)}
          >
            <div class="cw-conversation-title">${D(u.title||"Untitled")}</div>
            <div class="cw-conversation-date">${Ce(u.updatedAt||u.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${i}
    />
  `}import{html as te}from"htm/preact";import{useState as pt}from"preact/compat";function De({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:o,onToggleThinking:i,disabled:l}){let[h,u]=pt(!1);if(!e||e.length===0)return null;let m=e.find(c=>c.id===t),y=m?.name||"Select Model",f=m?.supports_thinking||!1,k=()=>{l||u(!h)},d=c=>{n(c),u(!1)},v=c=>{c.stopPropagation(),i&&f&&i(!o)};return te`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${k}
        disabled=${l}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${D(y)}</span>
        <span class="cw-model-chevron">${h?"\u25B2":"\u25BC"}</span>
      </button>

      ${f&&i&&te`
        <button
          class="cw-thinking-toggle ${o?"cw-thinking-enabled":""}"
          onClick=${v}
          disabled=${l}
          title=${o?"Thinking enabled - click to disable":"Enable extended thinking"}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${h&&te`
        <div class="cw-model-dropdown">
          ${e.map(c=>te`
            <button
              key=${c.id}
              class="cw-model-option ${c.id===t?"cw-model-option-selected":""}"
              onClick=${()=>d(c.id)}
            >
              <span class="cw-model-option-name">
                ${D(c.name)}
                ${c.supports_thinking&&te`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${D(c.provider)}</span>
              ${c.description&&te`
                <span class="cw-model-option-desc">${D(c.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}import{html as G}from"htm/preact";import{useState as Qe,useCallback as de}from"preact/compat";var ht={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},mt={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function ft({task:e,onUpdate:t,onRemove:n,depth:o=0}){let[i,l]=Qe(!1),[h,u]=Qe(e.name),m=de(()=>{let d={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:d[e.state]||"not_started"})},[e,t]),y=de(()=>{h.trim()&&h!==e.name&&t(e.id,{name:h.trim()}),l(!1)},[e,h,t]),f=de(d=>{d.key==="Enter"&&y(),d.key==="Escape"&&(u(e.name),l(!1))},[y,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return G`
    <div class="cw-task-item ${k}" style=${{paddingLeft:`${o*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${m}
        title=${mt[e.state]}
      >
        ${ht[e.state]}
      </button>
      
      ${i?G`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${h}
          onInput=${d=>u(d.target.value)}
          onBlur=${y}
          onKeyDown=${f}
          autoFocus
        />
      `:G`
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
  `}function Pe({tasks:e,progress:t,isLoading:n,error:o,onUpdate:i,onRemove:l,onClear:h,onRefresh:u}){let m=de(k=>{let d=new Map,v=[];return k.forEach(c=>{d.set(c.id,{...c,children:[]})}),k.forEach(c=>{let p=d.get(c.id);c.parent_id&&d.has(c.parent_id)?d.get(c.parent_id).children.push(p):v.push(p)}),v},[]),y=de((k,d=0)=>G`
      <${ft}
        key=${k.id}
        task=${k}
        depth=${d}
        onUpdate=${i}
        onRemove=${l}
      />
      ${k.children?.map(v=>y(v,d+1))}
    `,[i,l]),f=m(e);return n&&e.length===0?G`<div class="cw-tasks-loading">Loading tasks...</div>`:G`
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
          ${e.length>0&&G`
            <button class="cw-tasks-action-btn" onClick=${h} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${o&&G`<div class="cw-tasks-error">${o}</div>`}
      
      <div class="cw-tasks-list">
        ${f.length===0?G`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:f.map(k=>y(k))}
      </div>
    </div>
  `}import{useState as ee,useCallback as Y,useRef as et,useEffect as tt}from"preact/compat";function Le(e,t,n){let[o,i]=ee([]),[l,h]=ee(!1),[u,m]=ee(null),[y,f]=ee(()=>n?.get(e.conversationIdKey)||null),[k,d]=ee(!1),[v,c]=ee(!1),[p,g]=ee(0),$=et(null),S=et(null);tt(()=>{y&&n?.set(e.conversationIdKey,y)},[y,e.conversationIdKey,n]);let E=Y(async(s,C,T)=>{$.current&&$.current.close();let _=e.apiPaths.runEvents.replace("{runId}",s),b=`${e.backendUrl}${_}`;C&&(b+=`?anonymous_token=${encodeURIComponent(C)}`);let M=new EventSource(b);$.current=M;let r="";M.addEventListener("assistant.message",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let x=a.payload.content;x&&(r+=x,i(w=>{let F=w[w.length-1];return F?.role==="assistant"&&F.id.startsWith("assistant-stream-")?[...w.slice(0,-1),{...F,content:r}]:[...w,{id:"assistant-stream-"+Date.now(),role:"assistant",content:r,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.call",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.call",a.payload),i(x=>[...x,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.result",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.result",a.payload);let x=a.payload.result,w=x?.error;i(F=>[...F,{id:"tool-result-"+Date.now(),role:"system",content:w?`\u274C ${x.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:x,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("custom",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&i(x=>[...x,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.start",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),i(x=>[...x,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.end",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),i(x=>[...x,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let I=R=>{try{let a=JSON.parse(R.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let x=a.payload.error||"Agent run failed";m(x),i(w=>[...w,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${x}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}h(!1),M.close(),$.current=null,r&&T&&T(r)};M.addEventListener("run.succeeded",I),M.addEventListener("run.failed",I),M.addEventListener("run.cancelled",I),M.addEventListener("run.timed_out",I),M.onerror=()=>{h(!1),M.close(),$.current=null}},[e]),P=Y(async(s,C={},T={})=>{if(!s.trim()||l)return;let _=[],b={};typeof C=="function"?b={onAssistantMessage:C}:Array.isArray(C)?(_=C,b=T):b=C||{};let{model:M,thinking:r,onAssistantMessage:I,supersedeFromMessageIndex:R}=b;h(!0),m(null);let a={id:re(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:_.length>0?_.map(x=>({name:x.name,size:x.size,type:x.type})):void 0};i(x=>[...x,a]);try{let x=await t.getOrCreateSession(),w;if(_.length>0){let B=e.apiCaseStyle!=="camel",ze=ge=>B?$e(ge):ge,q=new FormData;q.append(ze("agentKey"),e.agentKey),y&&q.append(ze("conversationId"),y),q.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),q.append("metadata",JSON.stringify(B?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&q.append("model",M),r&&q.append("thinking","true"),_.forEach(ge=>{q.append("files",ge)}),w=t.getFetchOptions({method:"POST",body:q},x)}else{let B=t.transformRequest({agentKey:e.agentKey,conversationId:y,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...r&&{thinking:!0},...R!==void 0&&{supersedeFromMessageIndex:R}});w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)},x)}let F=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w),Z=x;if(F.status===401){t.clearSession();let B=await t.getOrCreateSession(!0);B&&(Z=B,_.length>0?w=t.getFetchOptions({method:"POST",body:w.body},B):w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:w.body},B),F=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w))}if(!F.ok){let B=await F.json().catch(()=>({}));throw new Error(B.error||B.detail||`HTTP ${F.status}`)}let me=await F.json(),fe=t.transformResponse(me);S.current=fe.id,!y&&fe.conversationId&&f(fe.conversationId),await E(fe.id,Z,I)}catch(x){m(x.message||"Failed to send message"),h(!1)}finally{S.current=null}},[e,t,y,l,E]),L=Y(async()=>{let s=S.current;if(!(!s||!l))try{let C=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${C}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&($.current&&($.current.close(),$.current=null),h(!1),S.current=null,i(_=>[..._,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(C){console.error("[ChatWidget] Failed to cancel run:",C)}},[e,t,l]),H=Y(()=>{i([]),f(null),m(null),d(!1),g(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),W=s=>{let C={id:re(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...C,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(_=>({id:re(),role:"assistant",content:`\u{1F527} ${_.function?.name||_.name||"tool"}`,timestamp:C.timestamp,type:"tool_call",metadata:{toolName:_.function?.name||_.name,arguments:_.function?.arguments||_.arguments,toolCallId:_.id}}));let T=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!T?.trim()?null:{...C,content:T,type:"message"}},K=Y(async s=>{console.log("[ChatWidget] loadConversation called with:",s),h(!0),i([]),f(s);try{let C=await t.getOrCreateSession(),_=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`;console.log("[ChatWidget] Fetching conversation from:",_);let b=await fetch(_,t.getFetchOptions({method:"GET"},C));if(console.log("[ChatWidget] Response status:",b.status),b.ok){let M=await b.json();console.log("[ChatWidget] Raw conversation:",M);let r=t.transformResponse(M);if(console.log("[ChatWidget] Transformed conversation:",r),r.messages){let I=r.messages.flatMap(W).filter(Boolean);console.log("[ChatWidget] Mapped messages:",I),i(I)}d(r.hasMore||!1),g(r.messages?.length||0)}else b.status===404?(console.log("[ChatWidget] Conversation not found, clearing"),f(null),n?.set(e.conversationIdKey,null)):console.error("[ChatWidget] Unexpected response status:",b.status)}catch(C){console.error("[ChatWidget] Failed to load conversation:",C)}finally{h(!1)}},[e,t,n]),N=Y(async()=>{if(!(!y||v||!k)){c(!0);try{let s=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${y}/?limit=10&offset=${p}`,_=await fetch(T,t.getFetchOptions({method:"GET"},s));if(_.ok){let b=await _.json(),M=t.transformResponse(b);if(M.messages?.length>0){let r=M.messages.flatMap(W).filter(Boolean);i(I=>[...r,...I]),g(I=>I+M.messages.length),d(M.hasMore||!1)}else d(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{c(!1)}}},[e,t,y,p,v,k]),z=Y(async(s,C,T={})=>{if(l)return;let _=o[s];if(!_||_.role!=="user")return;let b=o.slice(0,s);i(b),await P(C,{...T,supersedeFromMessageIndex:s})},[o,l,P]),U=Y(async(s,C={})=>{if(l)return;let T=o[s];if(!T)return;let _=s,b=T;if(T.role==="assistant"){for(let r=s-1;r>=0;r--)if(o[r].role==="user"){_=r,b=o[r];break}if(b.role!=="user")return}else if(T.role!=="user")return;let M=o.slice(0,_);i(M),await P(b.content,{...C,supersedeFromMessageIndex:_})},[o,l,P]);return tt(()=>()=>{$.current&&$.current.close()},[]),{messages:o,isLoading:l,error:u,conversationId:y,hasMoreMessages:k,loadingMoreMessages:v,sendMessage:P,cancelRun:L,clearMessages:H,loadConversation:K,loadMoreMessages:N,setConversationId:f,editMessage:z,retryMessage:U}}import{useState as ue,useEffect as gt,useCallback as ve}from"preact/compat";var nt="cw_thinking_enabled";function We(e,t,n){let[o,i]=ue([]),[l,h]=ue(null),[u,m]=ue(null),[y,f]=ue(!1),[k,d]=ue(!1);gt(()=>{(async()=>{if(e.showModelSelector){f(!0);try{let S=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(S.ok){let E=await S.json(),P=E.models||[];i(P),m(E.default);let L=n?.get(e.modelKey);L&&P.some(W=>W.id===L)?h(L):h(E.default),n?.get(nt)==="true"&&d(!0)}}catch(S){console.warn("[ChatWidget] Failed to load models:",S)}finally{f(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let v=ve($=>{h($),n?.set(e.modelKey,$)},[e.modelKey,n]),c=ve($=>{d($),n?.set(nt,$?"true":"false")},[n]),p=ve(()=>o.find($=>$.id===l)||null,[o,l]),g=ve(()=>p()?.supports_thinking||!1,[p]);return{availableModels:o,selectedModel:l,defaultModel:u,isLoading:y,selectModel:v,getSelectedModelInfo:p,thinkingEnabled:k,toggleThinking:c,supportsThinking:g}}import{useState as Ke,useCallback as ne}from"preact/compat";function Ne(e,t){let[n,o]=Ke(null),[i,l]=Ke(!1),[h,u]=Ke(null),m=e.apiPaths?.tasks||"/api/agent/tasks/",y=ne(async()=>{l(!0),u(null);try{let p=`${e.backendUrl}${m}`,g=await fetch(p,t.getFetchOptions({method:"GET"}));if(g.ok){let $=await g.json();o($)}else{let $=await g.json().catch(()=>({}));u($.error||"Failed to load tasks")}}catch(p){console.error("[useTasks] Failed to load task list:",p),u("Failed to load tasks")}finally{l(!1)}},[e.backendUrl,m,t]),f=ne(async p=>{if(!n)return null;try{let g=`${e.backendUrl}${m}${n.id}/add_task/`,$=await fetch(g,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));if($.ok){let S=await $.json();return await y(),S}else{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to add task"),null}}catch(g){return console.error("[useTasks] Failed to add task:",g),u("Failed to add task"),null}},[e.backendUrl,m,n,t,y]),k=ne(async(p,g)=>{if(!n)return null;try{let $=`${e.backendUrl}${m}${n.id}/update_task/${p}/`,S=await fetch($,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}));if(S.ok){let E=await S.json();return await y(),E}else{let E=await S.json().catch(()=>({}));return u(E.error||"Failed to update task"),null}}catch($){return console.error("[useTasks] Failed to update task:",$),u("Failed to update task"),null}},[e.backendUrl,m,n,t,y]),d=ne(async p=>{if(!n)return!1;try{let g=`${e.backendUrl}${m}${n.id}/remove_task/${p}/`,$=await fetch(g,t.getFetchOptions({method:"DELETE"}));if($.ok)return await y(),!0;{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to remove task"),!1}}catch(g){return console.error("[useTasks] Failed to remove task:",g),u("Failed to remove task"),!1}},[e.backendUrl,m,n,t,y]),v=ne(async()=>{if(!n)return!1;try{let p=`${e.backendUrl}${m}${n.id}/clear/`,g=await fetch(p,t.getFetchOptions({method:"POST"}));if(g.ok)return await y(),!0;{let $=await g.json().catch(()=>({}));return u($.error||"Failed to clear tasks"),!1}}catch(p){return console.error("[useTasks] Failed to clear tasks:",p),u("Failed to clear tasks"),!1}},[e.backendUrl,m,n,t,y]),c=ne(()=>u(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:i,error:h,loadTaskList:y,addTask:f,updateTask:k,removeTask:d,clearTasks:v,clearError:c}}function He(e,t,n){let o=f=>!f||typeof f!="object"||e.apiCaseStyle==="camel"?f:oe(f),i=f=>!f||typeof f!="object"||e.apiCaseStyle==="snake"?f:ae(f),l=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",h=(f=null)=>{let k=l(),d={},v=f||e.authToken||t().authToken;if(k==="token"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";d[c]=p?`${p} ${v}`:v}else if(k==="jwt"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";d[c]=p?`${p} ${v}`:v}else if(k==="anonymous"&&v){let c=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";d[c]=v}if(k==="session"){let c=_e(e.csrfCookieName);c&&(d["X-CSRFToken"]=c)}return d};return{getAuthStrategy:l,getAuthHeaders:h,getFetchOptions:(f={},k=null)=>{let d=l(),v={...f},c=h(k);return console.log("[ChatWidget] getFetchOptions - strategy:",d,"overrideToken:",k,"authHeaders:",c),v.headers={...v.headers,...c},d==="session"&&(v.credentials="include"),v},getOrCreateSession:async(f=!1)=>{let k=l(),d=t(),v=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||d.authToken;if(!f){if(d.authToken)return d.authToken;let c=d.storage?.get(v);if(c)return n(p=>({...p,authToken:c})),c}try{let c=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${c}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let g=await p.json();return n($=>({...$,authToken:g.token})),d.storage?.set(v,g.token),g.token}}catch(c){console.warn("[ChatWidget] Failed to create session:",c)}return null},clearSession:()=>{let f=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(d=>({...d,authToken:null})),k.storage?.set(f,null)},transformRequest:o,transformResponse:i}}function he({config:e,onStateChange:t,markdownParser:n,apiRef:o}){console.log("[ChatWidget] Config:",{showConversationSidebar:e.showConversationSidebar,apiPaths:e.apiPaths});let[i,l]=j(e.embedded||e.forceOpen===!0),[h,u]=j(!1),[m,y]=j(!1),[f,k]=j(!1),[d,v]=j([]),[c,p]=j("chat"),[g,$]=j(!1),[S,E]=j(e.enableTTS),[P,L]=j(!1),[H,W]=j(null);pe(()=>{e.forceOpen!==void 0&&l(e.forceOpen)},[e.forceOpen]);let K=st(()=>Te(e.containerId),[e.containerId]),[N,z]=j(e.authToken||null),U=st(()=>He(e,()=>({authToken:N,storage:K}),Z=>{let me=Z({authToken:N,storage:K});me.authToken!==N&&z(me.authToken)}),[e,N,K]),s=Le(e,U,K),C=We(e,U,K),T=Ne(e,U);pe(()=>{for(let w=s.messages.length-1;w>=0;w--){let F=s.messages[w];if(F.type==="sub_agent_start"){W({key:F.metadata?.subAgentKey,name:F.metadata?.agentName});return}if(F.type==="sub_agent_end"){W(null);return}}},[s.messages]),pe(()=>{let w=K.get(e.conversationIdKey);console.log("[ChatWidget] Initial load - storedConvId:",w,"key:",e.conversationIdKey),console.log("[ChatWidget] apiPaths.conversations:",e.apiPaths.conversations),w&&(console.log("[ChatWidget] Loading conversation:",w),s.loadConversation(w))},[]),pe(()=>{t&&t({isOpen:i,isExpanded:h,debugMode:m,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[i,h,m,s.messages,s.conversationId,s.isLoading,s.error]);let _=se(async()=>{if(e.showConversationSidebar){$(!0);try{let w=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,F=await fetch(w,U.getFetchOptions({method:"GET"}));if(F.ok){let Z=await F.json();v(Z.results||Z)}}catch(w){console.error("[ChatWidget] Failed to load conversations:",w),v([])}finally{$(!1)}}},[e,U]),b=se(()=>{let w=!f;k(w),w&&_()},[f,_]),M=se(w=>{w!==s.conversationId&&s.loadConversation(w),k(!1)},[s]),r=se(()=>{s.clearMessages(),k(!1)},[s]),I=se(w=>{s.sendMessage(w,{model:C.selectedModel,thinking:C.thinkingEnabled&&C.supportsThinking(),onAssistantMessage:F=>{}})},[s,S,C.selectedModel,C.thinkingEnabled,C.supportsThinking]),R=se(w=>{p(w),w==="tasks"&&T.loadTaskList()},[T]);if(pe(()=>{o&&(o.current={open:()=>l(!0),close:()=>l(!1),send:w=>I(w),clearMessages:()=>s.clearMessages(),toggleTTS:()=>E(w=>!w),stopSpeech:()=>L(!1),setAuth:w=>{w.token!==void 0&&z(w.token)},clearAuth:()=>z(null)})},[s,o,I]),!e.embedded&&!i)return J`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>l(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",h&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" "),x=e.headerTextColor||qe(e.primaryColor);return J`
    <div class=${a} style=${{"--cw-primary":e.primaryColor,"--cw-header-text":x}}>
      ${e.showConversationSidebar&&J`
        <${Oe}
          isOpen=${f}
          conversations=${d}
          conversationsLoading=${g}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${r}
          onSwitchConversation=${M}
        />
      `}
      
      <${Me}
        config=${e}
        debugMode=${m}
        isExpanded=${h}
        isSpeaking=${P}
        messagesCount=${s.messages.length}
        isLoading=${s.isLoading}
        currentAgent=${H}
        onClose=${()=>l(!1)}
        onToggleExpand=${()=>u(!h)}
        onToggleDebug=${()=>y(!m)}
        onToggleTTS=${()=>E(!S)}
        onClear=${s.clearMessages}
        onToggleSidebar=${b}
      />

      ${e.showTasksTab!==!1&&J`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${c==="chat"?"cw-tab-active":""}`}
            onClick=${()=>R("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${c==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>R("tasks")}
          >
            Tasks ${T.progress.total>0?J`<span class="cw-tab-badge">${T.progress.completed}/${T.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${m&&J`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${c==="chat"?J`
        <${Ee}
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

        ${e.showModelSelector&&C.availableModels.length>0&&J`
          <${De}
            availableModels=${C.availableModels}
            selectedModel=${C.selectedModel}
            onSelectModel=${C.selectModel}
            thinkingEnabled=${C.thinkingEnabled}
            onToggleThinking=${C.toggleThinking}
            disabled=${s.isLoading}
          />
        `}

        <${Fe}
          onSend=${I}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:J`
        <${Pe}
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
  `}var Ue={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",headerTextColor:null,position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Be(e){let t={...Ue.apiPaths,...e.apiPaths||{}};return{...Ue,...e,apiPaths:t}}import{render as at}from"preact/compat";import{html as $t}from"htm/preact";var be=new Map,yt=0,A=null,je=class{constructor(t={}){Ve(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++yt}`,this.config=Be(t),this.container=null,this._state={},this._apiRef={current:null},be.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&at($t`<${he}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Je._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(at(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),be.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function ot(e={}){return new je(e).init()}function wt(e={}){return A&&A.destroy(),A=ot(e),A}function kt(){A&&(A.destroy(),A=null)}function vt(){A&&A.open()}function bt(){A&&A.close()}function Ct(e){A&&A.send(e)}function St(){A&&A.clearMessages()}function Tt(){A&&A.toggleTTS()}function _t(){A&&A.stopSpeech()}function Mt(e){A&&A.setAuth(e)}function xt(){A&&A.clearAuth()}function It(){return A?A.getState():null}function Et(){return A?A.getConfig():null}var Je={createInstance:ot,getInstance:e=>be.get(e),getAllInstances:()=>Array.from(be.values()),init:wt,destroy:kt,open:vt,close:bt,send:Ct,clearMessages:St,toggleTTS:Tt,stopSpeech:_t,setAuth:Mt,clearAuth:xt,getState:It,getConfig:Et,_enhancedMarkdownParser:null};typeof window<"u"&&(window.ChatWidget=Je);var Kn=he;export{he as ChatWidget,Je as ChatWidgetAPI,Ue as DEFAULT_CONFIG,Me as Header,Fe as InputForm,Ie as Message,Ee as MessageList,De as ModelSelector,Oe as Sidebar,Pe as TaskList,$e as camelToSnake,He as createApiClient,Te as createStorage,Kn as default,Ce as formatDate,ie as formatFileSize,re as generateId,_e as getCSRFToken,le as getFileTypeIcon,ae as keysToCamel,oe as keysToSnake,Be as mergeConfig,Se as parseMarkdown,Ge as snakeToCamel,Le as useChat,We as useModels,Ne as useTasks};
