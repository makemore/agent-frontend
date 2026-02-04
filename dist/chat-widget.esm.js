var ot=Object.defineProperty;var rt=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ee=(e,t,n)=>(rt(e,typeof t!="symbol"?t+"":t,n),n);import{render as st}from"preact";import{html as $t}from"htm/preact";import{html as J}from"htm/preact";import{useState as j,useEffect as ie,useCallback as se,useMemo as Qe}from"preact/hooks";import{html as X}from"htm/preact";function it(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function ve(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ue(e){return Array.isArray(e)?e.map(ue):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[it(t),ue(n)])):e}function pe(e){return Array.isArray(e)?e.map(pe):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[ve(t),pe(n)])):e}function he(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function D(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function xe(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,i=Math.floor(o/6e4),l=Math.floor(o/36e5),h=Math.floor(o/864e5);return i<1?"Just now":i<60?`${i}m ago`:l<24?`${l}h ago`:h<7?`${h}d ago`:t.toLocaleDateString()}catch{return""}}function Re(e,t=null){if(t)return t(e);let n=D(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function Ae(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let i=t(n);o===null?localStorage.removeItem(i):localStorage.setItem(i,o)}catch{}}}}function Oe(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[i,l]=o.trim().split("=");if(i===e)return decodeURIComponent(l)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function me(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function fe(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function lt(e){if(!e||typeof e!="string")return 0;let t=e.replace("#","");if(t.length!==6&&t.length!==3)return 0;let n=t.length===3?t.split("").map(u=>u+u).join(""):t,o=parseInt(n.substr(0,2),16)/255,i=parseInt(n.substr(2,2),16)/255,l=parseInt(n.substr(4,2),16)/255,h=u=>u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4);return .2126*h(o)+.7152*h(i)+.0722*h(l)}function Fe(e){return lt(e)>.179?"#000000":"#ffffff"}function De({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:i,isLoading:l,currentAgent:h,onClose:u,onToggleExpand:m,onToggleDebug:y,onToggleTTS:f,onClear:k,onToggleSidebar:d}){let{title:v,primaryColor:c,embedded:p,showConversationSidebar:g,showClearButton:$,showDebugButton:S,enableDebugMode:x,showTTSButton:P,showExpandButton:L,enableTTS:H,elevenLabsApiKey:K,ttsProxyUrl:N}=e,W=K||N;return X`
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
        
        ${S&&x&&X`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${y}
            title="Debug"
          >🐛</button>
        `}
        
        ${P&&W&&X`
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
  `}import{html as Q}from"htm/preact";import{useRef as Ke,useEffect as Ne}from"preact/hooks";import{html as F}from"htm/preact";import{useState as ge,useRef as ct,useEffect as dt}from"preact/hooks";function be({msg:e,show:t,onToggle:n}){return t?F`
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
    `}function Pe({onEdit:e,onRetry:t,isLoading:n,position:o,showEdit:i=!0}){return n?null:F`
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
  `}function ut({initialContent:e,onSave:t,onCancel:n}){let[o,i]=ge(e),l=ct(null);return dt(()=>{l.current&&(l.current.focus(),l.current.setSelectionRange(o.length,o.length),l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[]),F`
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
  `}function Le({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:i,isLoading:l,messageIndex:h}){let[u,m]=ge(!1),[y,f]=ge(!1),[k,d]=ge(!1),v=e.role==="user",c=e.role==="system",p=e.type==="tool_call",g=e.type==="tool_result",$=e.type==="error",S=e.type==="sub_agent_start",x=e.type==="sub_agent_end",P=e.type==="agent_context";if(c&&!t)return null;if(S||x||P)return F`
      <div class="cw-agent-context ${S?"cw-agent-delegating":""} ${x?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${S?"\u{1F517}":x?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&F`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&F`<${be} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `;if(p||g){let b=e.metadata?.arguments||e.metadata?.result,M=r=>{if(typeof r=="string")try{return JSON.stringify(JSON.parse(r),null,2)}catch{return r}return JSON.stringify(r,null,2)};return F`
      <div class="cw-tool-message ${g?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&m(!u)}>
          ${e.content}
          ${b&&F`<span class="cw-tool-expand">${u?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${u&&b&&F`
          <pre class="cw-tool-details">${D(M(p?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&F`<${be} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
      </div>
    `}let L=["cw-message",v&&"cw-message-user",$&&"cw-message-error"].filter(Boolean).join(" "),H=`cw-message-row ${v?"cw-message-row-user":""}`,K=e.role==="assistant"?Re(e.content,n):D(e.content),N=e.files&&e.files.length>0,W=()=>N?F`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?F`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:F`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${fe(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${me(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,z=b=>{d(!1),o&&o(h,b)},B=()=>{i&&i(h)};if(v&&k)return F`
      <div class=${H} style="position: relative;">
        ${W()}
        <${ut}
          initialContent=${e.content}
          onSave=${z}
          onCancel=${()=>d(!1)}
        />
      </div>
    `;let s=v&&o&&i,T=e.role==="assistant"&&i&&!l;return F`
    <div class="${H} ${s||T?"cw-message-row-with-actions":""}">
      ${W()}
      ${s&&F`
        <div class="cw-user-actions-wrapper">
          <${Pe}
            onEdit=${()=>d(!0)}
            onRetry=${B}
            isLoading=${l}
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
        <${Pe}
          onRetry=${B}
          isLoading=${l}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&F`<${be} msg=${e} show=${y} onToggle=${()=>f(!y)} />`}
    </div>
  `}function We({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:i,onEditMessage:l,onRetryMessage:h,debugMode:u,markdownParser:m,emptyStateTitle:y,emptyStateMessage:f}){let k=Ke(null),d=Ke(!0),v=p=>{let g=p.target,$=g.scrollHeight-g.scrollTop-g.clientHeight<100;if(d.current=$,g.scrollTop<50&&n&&!o){let S=g.scrollHeight;i().then(()=>{let x=g.scrollHeight;g.scrollTop=x-S+g.scrollTop})}};Ne(()=>{let p=k.current;p&&d.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),Ne(()=>{let p=k.current;p&&e.length<=2&&(d.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let c=e.length===0;return Q`
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
        <${Le}
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
  `}import{html as V}from"htm/preact";import{useState as ae,useRef as $e,useEffect as Ce}from"preact/hooks";var Se=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function He({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:i,enableVoice:l=!0,enableFiles:h=!0}){let[u,m]=ae(""),[y,f]=ae([]),[k,d]=ae(!1),[v,c]=ae(!1),[p]=ae(()=>!!Se),g=$e(null),$=$e(null),S=$e(null),x=$e(!1);Ce(()=>{!n&&g.current&&g.current.focus()},[n]),Ce(()=>{g.current&&(g.current.style.height="auto",g.current.style.height=Math.min(g.current.scrollHeight,150)+"px")},[u]),Ce(()=>()=>{x.current=!1,S.current&&S.current.abort()},[]);let P=r=>{r.preventDefault(),(u.trim()||y.length>0)&&!n&&(e(u,y),m(""),f([]),g.current&&(g.current.style.height="auto"),$.current&&($.current.value=""))},L=r=>{let E=Array.from(r.target.files||[]);E.length>0&&f(R=>[...R,...E])},H=r=>{f(E=>E.filter((R,a)=>a!==r))},K=r=>{r.preventDefault(),$.current&&!n&&$.current.click()},N=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),P(r))},W=r=>{n&&t&&(r.preventDefault(),t())},z=()=>{if(!Se||n)return;x.current=!0;let r=new Se;r.continuous=!0,r.interimResults=!0,r.lang=navigator.language||"en-US";let E=u,R="";r.onstart=()=>{c(!0)},r.onresult=a=>{R="";for(let I=a.resultIndex;I<a.results.length;I++){let w=a.results[I][0].transcript;a.results[I].isFinal?E+=(E?" ":"")+w:R+=w}m(E+(R?" "+R:""))},r.onerror=a=>{if(a.error==="no-speech"||a.error==="aborted"){console.log("[ChatWidget] Speech recognition:",a.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",a.error),x.current=!1,c(!1),m(E||u)},r.onend=()=>{if(x.current){console.log("[ChatWidget] Recognition paused, restarting...");try{r.start();return}catch(a){console.warn("[ChatWidget] Could not restart recognition:",a)}}c(!1),E&&m(E),S.current=null},S.current=r,r.start()},B=()=>{x.current=!1,S.current&&S.current.stop()},s=r=>{r.preventDefault(),v?B():z()},C=V`
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
          ${y.map((r,E)=>V`
            <div class="cw-file-chip" key=${E}>
              <span class="cw-file-chip-icon">${fe(r.type)}</span>
              <span class="cw-file-chip-name" title=${r.name}>${r.name.length>20?r.name.substring(0,17)+"...":r.name}</span>
              <span class="cw-file-chip-size">(${me(r.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>H(E)}
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
        onClick=${W}
        onMouseEnter=${()=>d(!0)}
        onMouseLeave=${()=>d(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?k?C:V`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}import{html as ye}from"htm/preact";function Be({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:i,onNewConversation:l,onSwitchConversation:h}){return ye`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${i}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${l}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&ye`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&ye`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(u=>ye`
          <div 
            key=${u.id}
            class="cw-conversation-item ${u.id===o?"cw-conversation-active":""}"
            onClick=${()=>h(u.id)}
          >
            <div class="cw-conversation-title">${D(u.title||"Untitled")}</div>
            <div class="cw-conversation-date">${xe(u.updatedAt||u.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${i}
    />
  `}import{html as te}from"htm/preact";import{useState as pt}from"preact/hooks";function Ue({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:o,onToggleThinking:i,disabled:l}){let[h,u]=pt(!1);if(!e||e.length===0)return null;let m=e.find(c=>c.id===t),y=m?.name||"Select Model",f=m?.supports_thinking||!1,k=()=>{l||u(!h)},d=c=>{n(c),u(!1)},v=c=>{c.stopPropagation(),i&&f&&i(!o)};return te`
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
  `}import{html as G}from"htm/preact";import{useState as je,useCallback as oe}from"preact/hooks";var ht={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},mt={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function ft({task:e,onUpdate:t,onRemove:n,depth:o=0}){let[i,l]=je(!1),[h,u]=je(e.name),m=oe(()=>{let d={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:d[e.state]||"not_started"})},[e,t]),y=oe(()=>{h.trim()&&h!==e.name&&t(e.id,{name:h.trim()}),l(!1)},[e,h,t]),f=oe(d=>{d.key==="Enter"&&y(),d.key==="Escape"&&(u(e.name),l(!1))},[y,e.name]),k=`cw-task-state-${e.state.replace("_","-")}`;return G`
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
  `}function Je({tasks:e,progress:t,isLoading:n,error:o,onUpdate:i,onRemove:l,onClear:h,onRefresh:u}){let m=oe(k=>{let d=new Map,v=[];return k.forEach(c=>{d.set(c.id,{...c,children:[]})}),k.forEach(c=>{let p=d.get(c.id);c.parent_id&&d.has(c.parent_id)?d.get(c.parent_id).children.push(p):v.push(p)}),v},[]),y=oe((k,d=0)=>G`
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
  `}import{useState as ee,useCallback as Y,useRef as ze,useEffect as Ve}from"preact/hooks";function Ge(e,t,n){let[o,i]=ee([]),[l,h]=ee(!1),[u,m]=ee(null),[y,f]=ee(()=>n?.get(e.conversationIdKey)||null),[k,d]=ee(!1),[v,c]=ee(!1),[p,g]=ee(0),$=ze(null),S=ze(null);Ve(()=>{y&&n?.set(e.conversationIdKey,y)},[y,e.conversationIdKey,n]);let x=Y(async(s,C,T)=>{$.current&&$.current.close();let _=e.apiPaths.runEvents.replace("{runId}",s),b=`${e.backendUrl}${_}`;C&&(b+=`?anonymous_token=${encodeURIComponent(C)}`);let M=new EventSource(b);$.current=M;let r="";M.addEventListener("assistant.message",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("assistant.message",a.payload);let I=a.payload.content;I&&(r+=I,i(w=>{let O=w[w.length-1];return O?.role==="assistant"&&O.id.startsWith("assistant-stream-")?[...w.slice(0,-1),{...O,content:r}]:[...w,{id:"assistant-stream-"+Date.now(),role:"assistant",content:r,timestamp:new Date,type:"message"}]}))}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.call",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.call",a.payload),i(I=>[...I,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${a.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:a.payload.name,arguments:a.payload.arguments,toolCallId:a.payload.id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("tool.result",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.result",a.payload);let I=a.payload.result,w=I?.error;i(O=>[...O,{id:"tool-result-"+Date.now(),role:"system",content:w?`\u274C ${I.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:a.payload.name,result:I,toolCallId:a.payload.tool_call_id}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("custom",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("custom",a.payload),a.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(a.payload),a.payload?.type==="agent_context"&&i(I=>[...I,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${a.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:a.payload.agent_key,agentName:a.payload.agent_name,action:a.payload.action}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.start",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.start",a.payload),i(I=>[...I,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${a.payload.agent_name||a.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name,invocationMode:a.payload.invocation_mode}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}}),M.addEventListener("sub_agent.end",R=>{try{let a=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.end",a.payload),i(I=>[...I,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${a.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:a.payload.sub_agent_key,agentName:a.payload.agent_name}}])}catch(a){console.error("[ChatWidget] Parse error:",a)}});let E=R=>{try{let a=JSON.parse(R.data);if(e.onEvent&&e.onEvent(a.type,a.payload),a.type==="run.failed"){let I=a.payload.error||"Agent run failed";m(I),i(w=>[...w,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${I}`,timestamp:new Date,type:"error"}])}}catch(a){console.error("[ChatWidget] Parse error:",a)}h(!1),M.close(),$.current=null,r&&T&&T(r)};M.addEventListener("run.succeeded",E),M.addEventListener("run.failed",E),M.addEventListener("run.cancelled",E),M.addEventListener("run.timed_out",E),M.onerror=()=>{h(!1),M.close(),$.current=null}},[e]),P=Y(async(s,C={},T={})=>{if(!s.trim()||l)return;let _=[],b={};typeof C=="function"?b={onAssistantMessage:C}:Array.isArray(C)?(_=C,b=T):b=C||{};let{model:M,thinking:r,onAssistantMessage:E,supersedeFromMessageIndex:R}=b;h(!0),m(null);let a={id:he(),role:"user",content:s.trim(),timestamp:new Date,type:"message",files:_.length>0?_.map(I=>({name:I.name,size:I.size,type:I.type})):void 0};i(I=>[...I,a]);try{let I=await t.getOrCreateSession(),w;if(_.length>0){let U=e.apiCaseStyle!=="camel",Ie=de=>U?ve(de):de,q=new FormData;q.append(Ie("agentKey"),e.agentKey),y&&q.append(Ie("conversationId"),y),q.append("messages",JSON.stringify([{role:"user",content:s.trim()}])),q.append("metadata",JSON.stringify(U?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&q.append("model",M),r&&q.append("thinking","true"),_.forEach(de=>{q.append("files",de)}),w=t.getFetchOptions({method:"POST",body:q},I)}else{let U=t.transformRequest({agentKey:e.agentKey,conversationId:y,messages:[{role:"user",content:s.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M},...r&&{thinking:!0},...R!==void 0&&{supersedeFromMessageIndex:R}});w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)},I)}let O=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w),Z=I;if(O.status===401){t.clearSession();let U=await t.getOrCreateSession(!0);U&&(Z=U,_.length>0?w=t.getFetchOptions({method:"POST",body:w.body},U):w=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:w.body},U),O=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,w))}if(!O.ok){let U=await O.json().catch(()=>({}));throw new Error(U.error||U.detail||`HTTP ${O.status}`)}let le=await O.json(),ce=t.transformResponse(le);S.current=ce.id,!y&&ce.conversationId&&f(ce.conversationId),await x(ce.id,Z,E)}catch(I){m(I.message||"Failed to send message"),h(!1)}finally{S.current=null}},[e,t,y,l,x]),L=Y(async()=>{let s=S.current;if(!(!s||!l))try{let C=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",s):`${e.apiPaths.runs}${s}/cancel/`;(await fetch(`${e.backendUrl}${C}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&($.current&&($.current.close(),$.current=null),h(!1),S.current=null,i(_=>[..._,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(C){console.error("[ChatWidget] Failed to cancel run:",C)}},[e,t,l]),H=Y(()=>{i([]),f(null),m(null),d(!1),g(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),K=s=>{let C={id:he(),role:s.role,timestamp:s.timestamp?new Date(s.timestamp):new Date};if(s.role==="tool")return{...C,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:s.content,toolCallId:s.toolCallId}};if(s.role==="assistant"&&s.toolCalls&&s.toolCalls.length>0)return s.toolCalls.map(_=>({id:he(),role:"assistant",content:`\u{1F527} ${_.function?.name||_.name||"tool"}`,timestamp:C.timestamp,type:"tool_call",metadata:{toolName:_.function?.name||_.name,arguments:_.function?.arguments||_.arguments,toolCallId:_.id}}));let T=typeof s.content=="string"?s.content:JSON.stringify(s.content);return s.role==="assistant"&&!T?.trim()?null:{...C,content:T,type:"message"}},N=Y(async s=>{console.log("[ChatWidget] loadConversation called with:",s),h(!0),i([]),f(s);try{let C=await t.getOrCreateSession(),_=`${e.backendUrl}${e.apiPaths.conversations}${s}/?limit=10&offset=0`;console.log("[ChatWidget] Fetching conversation from:",_);let b=await fetch(_,t.getFetchOptions({method:"GET"},C));if(console.log("[ChatWidget] Response status:",b.status),b.ok){let M=await b.json();console.log("[ChatWidget] Raw conversation:",M);let r=t.transformResponse(M);if(console.log("[ChatWidget] Transformed conversation:",r),r.messages){let E=r.messages.flatMap(K).filter(Boolean);console.log("[ChatWidget] Mapped messages:",E),i(E)}d(r.hasMore||!1),g(r.messages?.length||0)}else b.status===404?(console.log("[ChatWidget] Conversation not found, clearing"),f(null),n?.set(e.conversationIdKey,null)):console.error("[ChatWidget] Unexpected response status:",b.status)}catch(C){console.error("[ChatWidget] Failed to load conversation:",C)}finally{h(!1)}},[e,t,n]),W=Y(async()=>{if(!(!y||v||!k)){c(!0);try{let s=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${y}/?limit=10&offset=${p}`,_=await fetch(T,t.getFetchOptions({method:"GET"},s));if(_.ok){let b=await _.json(),M=t.transformResponse(b);if(M.messages?.length>0){let r=M.messages.flatMap(K).filter(Boolean);i(E=>[...r,...E]),g(E=>E+M.messages.length),d(M.hasMore||!1)}else d(!1)}}catch(s){console.error("[ChatWidget] Failed to load more messages:",s)}finally{c(!1)}}},[e,t,y,p,v,k]),z=Y(async(s,C,T={})=>{if(l)return;let _=o[s];if(!_||_.role!=="user")return;let b=o.slice(0,s);i(b),await P(C,{...T,supersedeFromMessageIndex:s})},[o,l,P]),B=Y(async(s,C={})=>{if(l)return;let T=o[s];if(!T)return;let _=s,b=T;if(T.role==="assistant"){for(let r=s-1;r>=0;r--)if(o[r].role==="user"){_=r,b=o[r];break}if(b.role!=="user")return}else if(T.role!=="user")return;let M=o.slice(0,_);i(M),await P(b.content,{...C,supersedeFromMessageIndex:_})},[o,l,P]);return Ve(()=>()=>{$.current&&$.current.close()},[]),{messages:o,isLoading:l,error:u,conversationId:y,hasMoreMessages:k,loadingMoreMessages:v,sendMessage:P,cancelRun:L,clearMessages:H,loadConversation:N,loadMoreMessages:W,setConversationId:f,editMessage:z,retryMessage:B}}import{useState as re,useEffect as gt,useCallback as we}from"preact/hooks";var qe="cw_thinking_enabled";function Xe(e,t,n){let[o,i]=re([]),[l,h]=re(null),[u,m]=re(null),[y,f]=re(!1),[k,d]=re(!1);gt(()=>{(async()=>{if(e.showModelSelector){f(!0);try{let S=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(S.ok){let x=await S.json(),P=x.models||[];i(P),m(x.default);let L=n?.get(e.modelKey);L&&P.some(K=>K.id===L)?h(L):h(x.default),n?.get(qe)==="true"&&d(!0)}}catch(S){console.warn("[ChatWidget] Failed to load models:",S)}finally{f(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let v=we($=>{h($),n?.set(e.modelKey,$)},[e.modelKey,n]),c=we($=>{d($),n?.set(qe,$?"true":"false")},[n]),p=we(()=>o.find($=>$.id===l)||null,[o,l]),g=we(()=>p()?.supports_thinking||!1,[p]);return{availableModels:o,selectedModel:l,defaultModel:u,isLoading:y,selectModel:v,getSelectedModelInfo:p,thinkingEnabled:k,toggleThinking:c,supportsThinking:g}}import{useState as Te,useCallback as ne}from"preact/hooks";function Ye(e,t){let[n,o]=Te(null),[i,l]=Te(!1),[h,u]=Te(null),m=e.apiPaths?.tasks||"/api/agent/tasks/",y=ne(async()=>{l(!0),u(null);try{let p=`${e.backendUrl}${m}`,g=await fetch(p,t.getFetchOptions({method:"GET"}));if(g.ok){let $=await g.json();o($)}else{let $=await g.json().catch(()=>({}));u($.error||"Failed to load tasks")}}catch(p){console.error("[useTasks] Failed to load task list:",p),u("Failed to load tasks")}finally{l(!1)}},[e.backendUrl,m,t]),f=ne(async p=>{if(!n)return null;try{let g=`${e.backendUrl}${m}${n.id}/add_task/`,$=await fetch(g,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}));if($.ok){let S=await $.json();return await y(),S}else{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to add task"),null}}catch(g){return console.error("[useTasks] Failed to add task:",g),u("Failed to add task"),null}},[e.backendUrl,m,n,t,y]),k=ne(async(p,g)=>{if(!n)return null;try{let $=`${e.backendUrl}${m}${n.id}/update_task/${p}/`,S=await fetch($,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}));if(S.ok){let x=await S.json();return await y(),x}else{let x=await S.json().catch(()=>({}));return u(x.error||"Failed to update task"),null}}catch($){return console.error("[useTasks] Failed to update task:",$),u("Failed to update task"),null}},[e.backendUrl,m,n,t,y]),d=ne(async p=>{if(!n)return!1;try{let g=`${e.backendUrl}${m}${n.id}/remove_task/${p}/`,$=await fetch(g,t.getFetchOptions({method:"DELETE"}));if($.ok)return await y(),!0;{let S=await $.json().catch(()=>({}));return u(S.error||"Failed to remove task"),!1}}catch(g){return console.error("[useTasks] Failed to remove task:",g),u("Failed to remove task"),!1}},[e.backendUrl,m,n,t,y]),v=ne(async()=>{if(!n)return!1;try{let p=`${e.backendUrl}${m}${n.id}/clear/`,g=await fetch(p,t.getFetchOptions({method:"POST"}));if(g.ok)return await y(),!0;{let $=await g.json().catch(()=>({}));return u($.error||"Failed to clear tasks"),!1}}catch(p){return console.error("[useTasks] Failed to clear tasks:",p),u("Failed to clear tasks"),!1}},[e.backendUrl,m,n,t,y]),c=ne(()=>u(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:i,error:h,loadTaskList:y,addTask:f,updateTask:k,removeTask:d,clearTasks:v,clearError:c}}function Ze(e,t,n){let o=f=>!f||typeof f!="object"||e.apiCaseStyle==="camel"?f:pe(f),i=f=>!f||typeof f!="object"||e.apiCaseStyle==="snake"?f:ue(f),l=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",h=(f=null)=>{let k=l(),d={},v=f||e.authToken||t().authToken;if(k==="token"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";d[c]=p?`${p} ${v}`:v}else if(k==="jwt"&&v){let c=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";d[c]=p?`${p} ${v}`:v}else if(k==="anonymous"&&v){let c=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";d[c]=v}if(k==="session"){let c=Oe(e.csrfCookieName);c&&(d["X-CSRFToken"]=c)}return d};return{getAuthStrategy:l,getAuthHeaders:h,getFetchOptions:(f={},k=null)=>{let d=l(),v={...f},c=h(k);return console.log("[ChatWidget] getFetchOptions - strategy:",d,"overrideToken:",k,"authHeaders:",c),v.headers={...v.headers,...c},d==="session"&&(v.credentials="include"),v},getOrCreateSession:async(f=!1)=>{let k=l(),d=t(),v=e.anonymousTokenKey||e.sessionTokenKey;if(k!=="anonymous")return e.authToken||d.authToken;if(!f){if(d.authToken)return d.authToken;let c=d.storage?.get(v);if(c)return n(p=>({...p,authToken:c})),c}try{let c=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${c}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let g=await p.json();return n($=>({...$,authToken:g.token})),d.storage?.set(v,g.token),g.token}}catch(c){console.warn("[ChatWidget] Failed to create session:",c)}return null},clearSession:()=>{let f=e.anonymousTokenKey||e.sessionTokenKey,k=t();n(d=>({...d,authToken:null})),k.storage?.set(f,null)},transformRequest:o,transformResponse:i}}function et({config:e,onStateChange:t,markdownParser:n,apiRef:o}){console.log("[ChatWidget] Config:",{showConversationSidebar:e.showConversationSidebar,apiPaths:e.apiPaths});let[i,l]=j(e.embedded||e.forceOpen===!0),[h,u]=j(!1),[m,y]=j(!1),[f,k]=j(!1),[d,v]=j([]),[c,p]=j("chat"),[g,$]=j(!1),[S,x]=j(e.enableTTS),[P,L]=j(!1),[H,K]=j(null);ie(()=>{e.forceOpen!==void 0&&l(e.forceOpen)},[e.forceOpen]);let N=Qe(()=>Ae(e.containerId),[e.containerId]),[W,z]=j(e.authToken||null),B=Qe(()=>Ze(e,()=>({authToken:W,storage:N}),Z=>{let le=Z({authToken:W,storage:N});le.authToken!==W&&z(le.authToken)}),[e,W,N]),s=Ge(e,B,N),C=Xe(e,B,N),T=Ye(e,B);ie(()=>{for(let w=s.messages.length-1;w>=0;w--){let O=s.messages[w];if(O.type==="sub_agent_start"){K({key:O.metadata?.subAgentKey,name:O.metadata?.agentName});return}if(O.type==="sub_agent_end"){K(null);return}}},[s.messages]),ie(()=>{let w=N.get(e.conversationIdKey);console.log("[ChatWidget] Initial load - storedConvId:",w,"key:",e.conversationIdKey),console.log("[ChatWidget] apiPaths.conversations:",e.apiPaths.conversations),w&&(console.log("[ChatWidget] Loading conversation:",w),s.loadConversation(w))},[]),ie(()=>{t&&t({isOpen:i,isExpanded:h,debugMode:m,messages:s.messages,conversationId:s.conversationId,isLoading:s.isLoading,error:s.error})},[i,h,m,s.messages,s.conversationId,s.isLoading,s.error]);let _=se(async()=>{if(e.showConversationSidebar){$(!0);try{let w=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,O=await fetch(w,B.getFetchOptions({method:"GET"}));if(O.ok){let Z=await O.json();v(Z.results||Z)}}catch(w){console.error("[ChatWidget] Failed to load conversations:",w),v([])}finally{$(!1)}}},[e,B]),b=se(()=>{let w=!f;k(w),w&&_()},[f,_]),M=se(w=>{w!==s.conversationId&&s.loadConversation(w),k(!1)},[s]),r=se(()=>{s.clearMessages(),k(!1)},[s]),E=se(w=>{s.sendMessage(w,{model:C.selectedModel,thinking:C.thinkingEnabled&&C.supportsThinking(),onAssistantMessage:O=>{}})},[s,S,C.selectedModel,C.thinkingEnabled,C.supportsThinking]),R=se(w=>{p(w),w==="tasks"&&T.loadTaskList()},[T]);if(ie(()=>{o&&(o.current={open:()=>l(!0),close:()=>l(!1),send:w=>E(w),clearMessages:()=>s.clearMessages(),toggleTTS:()=>x(w=>!w),stopSpeech:()=>L(!1),setAuth:w=>{w.token!==void 0&&z(w.token)},clearAuth:()=>z(null)})},[s,o,E]),!e.embedded&&!i)return J`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>l(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let a=["cw-widget",h&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" "),I=e.headerTextColor||Fe(e.primaryColor);return J`
    <div class=${a} style=${{"--cw-primary":e.primaryColor,"--cw-header-text":I}}>
      ${e.showConversationSidebar&&J`
        <${Be}
          isOpen=${f}
          conversations=${d}
          conversationsLoading=${g}
          currentConversationId=${s.conversationId}
          onClose=${()=>k(!1)}
          onNewConversation=${r}
          onSwitchConversation=${M}
        />
      `}
      
      <${De}
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
        onToggleTTS=${()=>x(!S)}
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
        <${We}
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
          <${Ue}
            availableModels=${C.availableModels}
            selectedModel=${C.selectedModel}
            onSelectModel=${C.selectModel}
            thinkingEnabled=${C.thinkingEnabled}
            onToggleThinking=${C.toggleThinking}
            disabled=${s.isLoading}
          />
        `}

        <${He}
          onSend=${E}
          onCancel=${s.cancelRun}
          isLoading=${s.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:J`
        <${Je}
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
  `}var tt={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",headerTextColor:null,position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function nt(e){let t={...tt.apiPaths,...e.apiPaths||{}};return{...tt,...e,apiPaths:t}}var ke=new Map,yt=0,A=null,_e=class{constructor(t={}){Ee(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++yt}`,this.config=nt(t),this.container=null,this._state={},this._apiRef={current:null},ke.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&st($t`<${et}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Me._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(st(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),ke.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function at(e={}){return new _e(e).init()}function wt(e={}){return A&&A.destroy(),A=at(e),A}function kt(){A&&(A.destroy(),A=null)}function vt(){A&&A.open()}function bt(){A&&A.close()}function Ct(e){A&&A.send(e)}function St(){A&&A.clearMessages()}function Tt(){A&&A.toggleTTS()}function _t(){A&&A.stopSpeech()}function Mt(e){A&&A.setAuth(e)}function It(){A&&A.clearAuth()}function Et(){return A?A.getState():null}function xt(){return A?A.getConfig():null}var Me={createInstance:at,getInstance:e=>ke.get(e),getAllInstances:()=>Array.from(ke.values()),init:wt,destroy:kt,open:vt,close:bt,send:Ct,clearMessages:St,toggleTTS:Tt,stopSpeech:_t,setAuth:Mt,clearAuth:It,getState:Et,getConfig:xt,_enhancedMarkdownParser:null};var Pn=Me;typeof window<"u"&&(window.ChatWidget=Me);export{Me as ChatWidget,Pn as default};
