var ChatWidgetModule=(()=>{var he=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var $t=Object.getOwnPropertyNames;var bt=Object.prototype.hasOwnProperty;var kt=(e,t)=>{for(var n in t)he(e,n,{get:t[n],enumerable:!0})},Ct=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of $t(t))!bt.call(e,a)&&a!==n&&he(e,a,{get:()=>t[a],enumerable:!(s=wt(t,a))||s.enumerable});return e};var St=e=>Ct(he({},"__esModule",{value:!0}),e);var Xt={};kt(Xt,{ChatWidget:()=>fe,default:()=>Gt});var re,M,De,Tt,G,xe,He,Ae,Ne,ve,me,ye,Mt,Z={},Oe=[],xt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function q(e,t){for(var n in t)e[n]=t[n];return e}function we(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t,n){var s,a,o,l={};for(o in t)o=="key"?s=t[o]:o=="ref"?a=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?re.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return se(e,l,s,a,null)}function se(e,t,n,s,a){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++De,__i:-1,__u:0};return a==null&&M.vnode!=null&&M.vnode(o),o}function ce(e){return e.children}function Y(e,t){this.props=e,this.context=t}function X(e,t){if(t==null)return e.__?X(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?X(e):null}function Re(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Re(e)}}function Ee(e){(!e.__d&&(e.__d=!0)&&G.push(e)&&!ae.__r++||xe!=M.debounceRendering)&&((xe=M.debounceRendering)||He)(ae)}function ae(){for(var e,t,n,s,a,o,l,c=1;G.length;)G.length>c&&G.sort(Ae),e=G.shift(),c=G.length,e.__d&&(n=void 0,s=void 0,a=(s=(t=e).__v).__e,o=[],l=[],t.__P&&((n=q({},s)).__v=s.__v+1,M.vnode&&M.vnode(n),$e(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[a]:null,o,a??X(s),!!(32&s.__u),l),n.__v=s.__v,n.__.__k[n.__i]=n,Le(o,n,l),s.__e=s.__=null,n.__e!=a&&Re(n)));ae.__r=0}function Ue(e,t,n,s,a,o,l,c,_,i,u){var r,p,d,m,S,b,g,w=s&&s.__k||Oe,N=t.length;for(_=Et(n,t,w,_,N),r=0;r<N;r++)(d=n.__k[r])!=null&&(p=d.__i==-1?Z:w[d.__i]||Z,d.__i=r,b=$e(e,d,p,a,o,l,c,_,i,u),m=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&be(p.ref,null,d),u.push(d.ref,d.__c||m,d)),S==null&&m!=null&&(S=m),(g=!!(4&d.__u))||p.__k===d.__k?_=Fe(d,_,e,g):typeof d.type=="function"&&b!==void 0?_=b:m&&(_=m.nextSibling),d.__u&=-7);return n.__e=S,_}function Et(e,t,n,s,a){var o,l,c,_,i,u=n.length,r=u,p=0;for(e.__k=new Array(a),o=0;o<a;o++)(l=t[o])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[o]=se(null,l,null,null,null):le(l)?l=e.__k[o]=se(ce,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[o]=se(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[o]=l,_=o+p,l.__=e,l.__b=e.__b+1,c=null,(i=l.__i=It(l,n,_,r))!=-1&&(r--,(c=n[i])&&(c.__u|=2)),c==null||c.__v==null?(i==-1&&(a>u?p--:a<u&&p++),typeof l.type!="function"&&(l.__u|=4)):i!=_&&(i==_-1?p--:i==_+1?p++:(i>_?p--:p++,l.__u|=4))):e.__k[o]=null;if(r)for(o=0;o<u;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=X(c)),Ke(c,c));return s}function Fe(e,t,n,s){var a,o;if(typeof e.type=="function"){for(a=e.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=e,t=Fe(a[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=X(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function It(e,t,n,s){var a,o,l,c=e.key,_=e.type,i=t[n],u=i!=null&&(2&i.__u)==0;if(i===null&&c==null||u&&c==i.key&&_==i.type)return n;if(s>(u?1:0)){for(a=n-1,o=n+1;a>=0||o<t.length;)if((i=t[l=a>=0?a--:o++])!=null&&!(2&i.__u)&&c==i.key&&_==i.type)return l}return-1}function Ie(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||xt.test(t)?n:n+"px"}function oe(e,t,n,s,a){var o,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Ie(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Ie(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Ne,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=ve,e.addEventListener(t,o?ye:me,o)):e.removeEventListener(t,o?ye:me,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Pe(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ve++;else if(t.t<n.u)return;return n(M.event?M.event(t):t)}}}function $e(e,t,n,s,a,o,l,c,_,i){var u,r,p,d,m,S,b,g,w,N,A,j,O,K,B,W,f,$=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(_=!!(32&n.__u),o=[c=t.__e=n.__e]),(u=M.__b)&&u(t);e:if(typeof $=="function")try{if(g=t.props,w="prototype"in $&&$.prototype.render,N=(u=$.contextType)&&s[u.__c],A=u?N?N.props.value:u.__:s,n.__c?b=(r=t.__c=n.__c).__=r.__E:(w?t.__c=r=new $(g,A):(t.__c=r=new Y(g,A),r.constructor=$,r.render=Dt),N&&N.sub(r),r.state||(r.state={}),r.__n=s,p=r.__d=!0,r.__h=[],r._sb=[]),w&&r.__s==null&&(r.__s=r.state),w&&$.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=q({},r.__s)),q(r.__s,$.getDerivedStateFromProps(g,r.__s))),d=r.props,m=r.state,r.__v=t,p)w&&$.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),w&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(w&&$.getDerivedStateFromProps==null&&g!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,A),t.__v==n.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,A)===!1){for(t.__v!=n.__v&&(r.props=g,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(E){E&&(E.__=t)}),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,A),w&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,m,S)})}if(r.context=A,r.props=g,r.__P=e,r.__e=!1,O=M.__r,K=0,w){for(r.state=r.__s,r.__d=!1,O&&O(t),u=r.render(r.props,r.state,r.context),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[]}else do r.__d=!1,O&&O(t),u=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++K<25);r.state=r.__s,r.getChildContext!=null&&(s=q(q({},s),r.getChildContext())),w&&!p&&r.getSnapshotBeforeUpdate!=null&&(S=r.getSnapshotBeforeUpdate(d,m)),W=u,u!=null&&u.type===ce&&u.key==null&&(W=We(u.props.children)),c=Ue(e,le(W)?W:[W],t,n,s,a,o,l,c,_,i),r.base=t.__e,t.__u&=-161,r.__h.length&&l.push(r),b&&(r.__E=r.__=null)}catch(E){if(t.__v=null,_||o!=null)if(E.then){for(t.__u|=_?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(f=o.length;f--;)we(o[f]);ge(t)}else t.__e=n.__e,t.__k=n.__k,E.then||ge(t);M.__e(E,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Pt(n.__e,t,n,s,a,o,l,_,i);return(u=M.diffed)&&u(t),128&t.__u?void 0:c}function ge(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ge)}function Le(e,t,n){for(var s=0;s<n.length;s++)be(n[s],n[++s],n[++s]);M.__c&&M.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){M.__e(o,a.__v)}})}function We(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:le(e)?e.map(We):q({},e)}function Pt(e,t,n,s,a,o,l,c,_){var i,u,r,p,d,m,S,b=n.props||Z,g=t.props,w=t.type;if(w=="svg"?a="http://www.w3.org/2000/svg":w=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(i=0;i<o.length;i++)if((d=o[i])&&"setAttribute"in d==!!w&&(w?d.localName==w:d.nodeType==3)){e=d,o[i]=null;break}}if(e==null){if(w==null)return document.createTextNode(g);e=document.createElementNS(a,w,g.is&&g),c&&(M.__m&&M.__m(t,o),c=!1),o=null}if(w==null)b===g||c&&e.data==g||(e.data=g);else{if(o=o&&re.call(e.childNodes),!c&&o!=null)for(b={},i=0;i<e.attributes.length;i++)b[(d=e.attributes[i]).name]=d.value;for(i in b)if(d=b[i],i!="children"){if(i=="dangerouslySetInnerHTML")r=d;else if(!(i in g)){if(i=="value"&&"defaultValue"in g||i=="checked"&&"defaultChecked"in g)continue;oe(e,i,null,d,a)}}for(i in g)d=g[i],i=="children"?p=d:i=="dangerouslySetInnerHTML"?u=d:i=="value"?m=d:i=="checked"?S=d:c&&typeof d!="function"||b[i]===d||oe(e,i,d,b[i],a);if(u)c||r&&(u.__html==r.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(r&&(e.innerHTML=""),Ue(t.type=="template"?e.content:e,le(p)?p:[p],t,n,s,w=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,l,o?o[0]:n.__k&&X(n,0),c,_),o!=null)for(i=o.length;i--;)we(o[i]);c||(i="value",w=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[i]||w=="progress"&&!m||w=="option"&&m!=b[i])&&oe(e,i,m,b[i],a),i="checked",S!=null&&S!=e[i]&&oe(e,i,S,b[i],a))}return e}function be(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(a){M.__e(a,n)}}function Ke(e,t,n){var s,a;if(M.unmount&&M.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||be(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){M.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&Ke(s[a],t,n||typeof e.type!="function");n||we(e.__e),e.__c=e.__=e.__e=void 0}function Dt(e,t,n){return this.constructor(e,n)}function ue(e,t,n){var s,a,o,l;t==document&&(t=document.documentElement),M.__&&M.__(e,t),a=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],l=[],$e(t,e=(!s&&n||t).__k=ie(ce,null,[e]),a||Z,Z,t.namespaceURI,!s&&n?[n]:a?null:t.firstChild?re.call(t.childNodes):null,o,!s&&n?n:a?a.__e:t.firstChild,s,l),Le(o,e,l)}re=Oe.slice,M={__e:function(e,t,n,s){for(var a,o,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,s||{}),l=a.__d),l)return a.__E=a}catch(c){e=c}throw e}},De=0,Tt=function(e){return e!=null&&e.constructor===void 0},Y.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},n),this.props)),e&&q(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ee(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ee(this))},Y.prototype.render=ce,G=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ae=function(e,t){return e.__v.__b-t.__v.__b},ae.__r=0,Ne=/(PointerCapture)$|Capture$/i,ve=0,me=Pe(!1),ye=Pe(!0),Mt=0;var je=function(e,t,n,s){var a;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],c=t[o]?(t[0]|=l?1:2,n[t[o++]]):t[++o];l===3?s[0]=c:l===4?s[1]=Object.assign(s[1]||{},c):l===5?(s[1]=s[1]||{})[t[++o]]=c:l===6?s[1][t[++o]]+=c+"":l?(a=e.apply(c,je(e,c,n,["",null])),s.push(a),c[0]?t[0]|=2:(t[o-2]=0,t[o]=a)):s.push(c)}return s},Be=new Map;function Je(e){var t=Be.get(this);return t||(t=new Map,Be.set(this,t)),(t=je(this,t.get(e)||(t.set(e,t=function(n){for(var s,a,o=1,l="",c="",_=[0],i=function(p){o===1&&(p||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,p,l):o===3&&(p||l)?(_.push(3,p,l),o=2):o===2&&l==="..."&&p?_.push(4,p,0):o===2&&l&&!p?_.push(5,0,!0,l):o>=5&&((l||!p&&o===5)&&(_.push(o,0,l,a),o=6),p&&(_.push(o,p,0,a),o=6)),l=""},u=0;u<n.length;u++){u&&(o===1&&i(),i(u));for(var r=0;r<n[u].length;r++)s=n[u][r],o===1?s==="<"?(i(),_=[_],o=3):l+=s:o===4?l==="--"&&s===">"?(o=1,l=""):l=s+l[0]:c?s===c?c="":l+=s:s==='"'||s==="'"?c=s:s===">"?(i(),o=1):o&&(s==="="?(o=5,a=l,l=""):s==="/"&&(o<5||n[u][r+1]===">")?(i(),o===3&&(_=_[0]),o=_,(_=_[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(i(),o=2):l+=s),o===3&&l==="!--"&&(o=4,_=_[0])}return i(),_}(e)),t),arguments,[])).length>1?t:t[0]}var y=Je.bind(ie);var ee,I,ke,Ve,te=0,et=[],D=M,qe=D.__b,ze=D.__r,Ge=D.diffed,Xe=D.__c,Qe=D.unmount,Ye=D.__;function Se(e,t){D.__h&&D.__h(I,e,te||t),te=0;var n=I.__H||(I.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return te=1,Ht(nt,e)}function Ht(e,t,n){var s=Se(ee++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):nt(void 0,t),function(c){var _=s.__N?s.__N[0]:s.__[0],i=s.t(_,c);_!==i&&(s.__N=[i,s.__[1]],s.__c.setState({}))}],s.__c=I,!I.__f)){var a=function(c,_,i){if(!s.__c.__H)return!0;var u=s.__c.__H.__.filter(function(p){return!!p.__c});if(u.every(function(p){return!p.__N}))return!o||o.call(this,c,_,i);var r=s.__c.props!==c;return u.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(r=!0)}}),o&&o.call(this,c,_,i)||r};I.__f=!0;var o=I.shouldComponentUpdate,l=I.componentWillUpdate;I.componentWillUpdate=function(c,_,i){if(this.__e){var u=o;o=void 0,a(c,_,i),o=u}l&&l.call(this,c,_,i)},I.shouldComponentUpdate=a}return s.__N||s.__}function R(e,t){var n=Se(ee++,3);!D.__s&&tt(n.__H,t)&&(n.__=e,n.u=t,I.__H.__h.push(n))}function z(e){return te=5,ne(function(){return{current:e}},[])}function ne(e,t){var n=Se(ee++,7);return tt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function L(e,t){return te=8,ne(function(){return e},t)}function At(){for(var e;e=et.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(t){e.__H.__h=[],D.__e(t,e.__v)}}D.__b=function(e){I=null,qe&&qe(e)},D.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ye&&Ye(e,t)},D.__r=function(e){ze&&ze(e),ee=0;var t=(I=e.__c).__H;t&&(ke===I?(t.__h=[],I.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(_e),t.__h.forEach(Ce),t.__h=[],ee=0)),ke=I},D.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(et.push(t)!==1&&Ve===D.requestAnimationFrame||((Ve=D.requestAnimationFrame)||Nt)(At)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ke=I=null},D.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(s){return!s.__||Ce(s)})}catch(s){t.some(function(a){a.__h&&(a.__h=[])}),t=[],D.__e(s,n.__v)}}),Xe&&Xe(e,t)},D.unmount=function(e){Qe&&Qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{_e(s)}catch(a){t=a}}),n.__H=void 0,t&&D.__e(t,n.__v))};var Ze=typeof requestAnimationFrame=="function";function Nt(e){var t,n=function(){clearTimeout(s),Ze&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);Ze&&(t=requestAnimationFrame(n))}function _e(e){var t=I,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),I=t}function Ce(e){var t=I;e.__c=e.__(),I=t}function tt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function nt(e,t){return typeof t=="function"?t(e):t}function de(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function H(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function ot(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,a=Math.floor(s/6e4),o=Math.floor(s/36e5),l=Math.floor(s/864e5);return a<1?"Just now":a<60?`${a}m ago`:o<24?`${o}h ago`:l<7?`${l}d ago`:t.toLocaleDateString()}catch{return""}}function st(e,t=null){if(t)return t(e);let n=H(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function at(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let a=t(n);s===null?localStorage.removeItem(a):localStorage.setItem(a,s)}catch{}}}}function rt(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[a,o]=s.trim().split("=");if(a===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function lt({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:a,isLoading:o,currentAgent:l,onClose:c,onToggleExpand:_,onToggleDebug:i,onToggleTTS:u,onClear:r,onToggleSidebar:p}){let{title:d,primaryColor:m,embedded:S,showConversationSidebar:b,showClearButton:g,showDebugButton:w,enableDebugMode:N,showTTSButton:A,showExpandButton:j,enableTTS:O,elevenLabsApiKey:K,ttsProxyUrl:B}=e,W=K||B;return y`
    <div class="cw-header" style=${{backgroundColor:m}}>
      ${b&&y`
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
        <span class="cw-title">${H(d)}</span>
        ${l&&y`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${H(l.name||l.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${g&&y`
          <button 
            class="cw-header-btn" 
            onClick=${r}
            title="Clear"
            disabled=${o||a===0}
          >🗑️</button>
        `}
        
        ${w&&N&&y`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${i}
            title="Debug"
          >🐛</button>
        `}
        
        ${A&&W&&y`
          <button 
            class="cw-header-btn ${O?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${O?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${j&&!S&&y`
          <button 
            class="cw-header-btn" 
            onClick=${_}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!S&&y`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Te({msg:e,show:t,onToggle:n}){return t?y`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:y`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function it({msg:e,debugMode:t,markdownParser:n}){let[s,a]=k(!1),[o,l]=k(!1),c=e.role==="user",_=e.role==="system",i=e.type==="tool_call",u=e.type==="tool_result",r=e.type==="error",p=e.type==="sub_agent_start",d=e.type==="sub_agent_end",m=e.type==="agent_context";if(_&&!t)return null;if(p||d||m)return y`
      <div class="cw-agent-context ${p?"cw-agent-delegating":""} ${d?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${p?"\u{1F517}":d?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&y`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&y`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
      </div>
    `;if(i||u){let w=e.metadata?.arguments||e.metadata?.result,N=A=>{if(typeof A=="string")try{return JSON.stringify(JSON.parse(A),null,2)}catch{return A}return JSON.stringify(A,null,2)};return y`
      <div class="cw-tool-message ${u?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>w&&a(!s)}>
          ${e.content}
          ${w&&y`<span class="cw-tool-expand">${s?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${s&&w&&y`
          <pre class="cw-tool-details">${H(N(i?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&y`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
      </div>
    `}let S=["cw-message",c&&"cw-message-user",r&&"cw-message-error"].filter(Boolean).join(" "),b=`cw-message-row ${c?"cw-message-row-user":""}`,g=e.role==="assistant"?st(e.content,n):H(e.content);return y`
    <div class=${b} style="position: relative;">
      <div class=${S} dangerouslySetInnerHTML=${{__html:g}} />
      ${t&&y`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
    </div>
  `}function ct({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:a,debugMode:o,markdownParser:l,emptyStateTitle:c,emptyStateMessage:_}){let i=z(null),u=z(!0),r=d=>{let m=d.target,S=m.scrollHeight-m.scrollTop-m.clientHeight<100;if(u.current=S,m.scrollTop<50&&n&&!s){let b=m.scrollHeight;a().then(()=>{let g=m.scrollHeight;m.scrollTop=g-b+m.scrollTop})}};R(()=>{let d=i.current;d&&u.current&&requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight})},[e,t]),R(()=>{let d=i.current;d&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight}))},[e.length]);let p=e.length===0;return y`
    <div class="cw-messages" ref=${i} onScroll=${r}>
      ${p&&y`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${H(c)}</h3>
          <p>${H(_)}</p>
        </div>
      `}
      
      ${!p&&n&&y`
        <div class="cw-load-more" onClick=${a}>
          ${s?y`<span class="cw-spinner"></span><span>Loading...</span>`:y`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map(d=>y`
        <${it} 
          key=${d.id} 
          msg=${d} 
          debugMode=${o}
          markdownParser=${l}
        />
      `)}
      
      ${t&&y`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}function ut({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:a}){let[o,l]=k(""),[c,_]=k(!1),i=z(null);R(()=>{!n&&i.current&&i.current.focus()},[n]),R(()=>{i.current&&(i.current.style.height="auto",i.current.style.height=Math.min(i.current.scrollHeight,150)+"px")},[o]);let u=m=>{m.preventDefault(),o.trim()&&!n&&(e(o),l(""),i.current&&(i.current.style.height="auto"))},r=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),u(m))},p=m=>{n&&t&&(m.preventDefault(),t())},d=y`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `;return y`
    <form class="cw-input-form" onSubmit=${u}>
      <textarea
        ref=${i}
        class="cw-input"
        placeholder=${H(s)}
        value=${o}
        onInput=${m=>l(m.target.value)}
        onKeyDown=${r}
        disabled=${n}
        rows="1"
      />
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&c?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&c?"#dc2626":a}}
        onClick=${p}
        onMouseEnter=${()=>_(!0)}
        onMouseLeave=${()=>_(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?c?d:y`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function _t({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:s,onClose:a,onNewConversation:o,onSwitchConversation:l}){return y`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${a}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${o}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&y`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&y`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(c=>y`
          <div 
            key=${c.id}
            class="cw-conversation-item ${c.id===s?"cw-conversation-active":""}"
            onClick=${()=>l(c.id)}
          >
            <div class="cw-conversation-title">${H(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${ot(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${a}
    />
  `}function dt({availableModels:e,selectedModel:t,onSelectModel:n,disabled:s}){let[a,o]=k(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",_=()=>{s||o(!a)},i=u=>{n(u),o(!1)};return y`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${_}
        disabled=${s}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${H(c)}</span>
        <span class="cw-model-chevron">${a?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${a&&y`
        <div class="cw-model-dropdown">
          ${e.map(u=>y`
            <button 
              key=${u.id}
              class="cw-model-option ${u.id===t?"cw-model-option-selected":""}"
              onClick=${()=>i(u.id)}
            >
              <span class="cw-model-option-name">${H(u.name)}</span>
              <span class="cw-model-option-provider">${H(u.provider)}</span>
              ${u.description&&y`
                <span class="cw-model-option-desc">${H(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}function pt(e,t,n){let[s,a]=k([]),[o,l]=k(!1),[c,_]=k(null),[i,u]=k(()=>n?.get(e.conversationIdKey)||null),[r,p]=k(!1),[d,m]=k(!1),[S,b]=k(0),g=z(null),w=z(null);R(()=>{i&&n?.set(e.conversationIdKey,i)},[i,e.conversationIdKey,n]);let N=L(async(f,$,E)=>{g.current&&g.current.close();let P=e.apiPaths.runEvents.replace("{runId}",f),U=`${e.backendUrl}${P}`;$&&(U+=`?anonymous_token=${encodeURIComponent($)}`);let C=new EventSource(U);g.current=C;let F="";C.addEventListener("assistant.message",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("assistant.message",h.payload);let x=h.payload.content;x&&(F+=x,a(V=>{let Q=V[V.length-1];return Q?.role==="assistant"&&Q.id.startsWith("assistant-stream-")?[...V.slice(0,-1),{...Q,content:F}]:[...V,{id:"assistant-stream-"+Date.now(),role:"assistant",content:F,timestamp:new Date,type:"message"}]}))}catch(h){console.error("[ChatWidget] Parse error:",h)}}),C.addEventListener("tool.call",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("tool.call",h.payload),a(x=>[...x,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${h.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:h.payload.name,arguments:h.payload.arguments,toolCallId:h.payload.id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),C.addEventListener("tool.result",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("tool.result",h.payload);let x=h.payload.result,V=x?.error;a(Q=>[...Q,{id:"tool-result-"+Date.now(),role:"system",content:V?`\u274C ${x.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:h.payload.name,result:x,toolCallId:h.payload.tool_call_id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),C.addEventListener("custom",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("custom",h.payload),h.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(h.payload),h.payload?.type==="agent_context"&&a(x=>[...x,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${h.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:h.payload.agent_key,agentName:h.payload.agent_name,action:h.payload.action}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),C.addEventListener("sub_agent.start",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("sub_agent.start",h.payload),a(x=>[...x,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${h.payload.agent_name||h.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name,invocationMode:h.payload.invocation_mode}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),C.addEventListener("sub_agent.end",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("sub_agent.end",h.payload),a(x=>[...x,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${h.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}});let J=v=>{try{let h=JSON.parse(v.data);if(e.onEvent&&e.onEvent(h.type,h.payload),h.type==="run.failed"){let x=h.payload.error||"Agent run failed";_(x),a(V=>[...V,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${x}`,timestamp:new Date,type:"error"}])}}catch(h){console.error("[ChatWidget] Parse error:",h)}l(!1),C.close(),g.current=null,F&&E&&E(F)};C.addEventListener("run.succeeded",J),C.addEventListener("run.failed",J),C.addEventListener("run.cancelled",J),C.addEventListener("run.timed_out",J),C.onerror=()=>{l(!1),C.close(),g.current=null}},[e]),A=L(async(f,$={})=>{if(!f.trim()||o)return;let{model:E,onAssistantMessage:P}=typeof $=="function"?{onAssistantMessage:$}:$;l(!0),_(null);let U={id:de(),role:"user",content:f.trim(),timestamp:new Date,type:"message"};a(C=>[...C,U]);try{let C=await t.getOrCreateSession(),F={agentKey:e.agentKey,conversationId:i,messages:[{role:"user",content:f.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType}};E&&(F.model=E);let J=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)},C));if(!J.ok){let x=await J.json().catch(()=>({}));throw new Error(x.error||`HTTP ${J.status}`)}let v=await J.json();w.current=v.id;let h=v.conversationId||v.conversation_id;!i&&h&&u(h),await N(v.id,C,P)}catch(C){_(C.message||"Failed to send message"),l(!1)}finally{w.current=null}},[e,t,i,o,N]),j=L(async()=>{let f=w.current;if(!(!f||!o))try{let $=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",f):`${e.apiPaths.runs}${f}/cancel/`;(await fetch(`${e.backendUrl}${$}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),l(!1),w.current=null,a(P=>[...P,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch($){console.error("[ChatWidget] Failed to cancel run:",$)}},[e,t,o]),O=L(()=>{a([]),u(null),_(null),p(!1),b(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),K=f=>{let $={id:de(),role:f.role,timestamp:f.timestamp?new Date(f.timestamp):new Date};if(f.role==="tool")return{...$,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:f.content,toolCallId:f.tool_call_id}};if(f.role==="assistant"&&f.tool_calls&&f.tool_calls.length>0)return f.tool_calls.map(P=>({id:de(),role:"assistant",content:`\u{1F527} ${P.function?.name||P.name||"tool"}`,timestamp:$.timestamp,type:"tool_call",metadata:{toolName:P.function?.name||P.name,arguments:P.function?.arguments||P.arguments,toolCallId:P.id}}));let E=typeof f.content=="string"?f.content:JSON.stringify(f.content);return f.role==="assistant"&&!E?.trim()?null:{...$,content:E,type:"message"}},B=L(async f=>{l(!0),a([]),u(f);try{let $=await t.getOrCreateSession(),P=`${e.backendUrl}${e.apiPaths.conversations}${f}/?limit=10&offset=0`,U=await fetch(P,t.getFetchOptions({method:"GET"},$));if(U.ok){let C=await U.json();C.messages&&a(C.messages.flatMap(K).filter(Boolean)),p(C.has_more||C.hasMore||!1),b(C.messages?.length||0)}else U.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch($){console.error("[ChatWidget] Failed to load conversation:",$)}finally{l(!1)}},[e,t,n]),W=L(async()=>{if(!(!i||d||!r)){m(!0);try{let f=await t.getOrCreateSession(),E=`${e.backendUrl}${e.apiPaths.conversations}${i}/?limit=10&offset=${S}`,P=await fetch(E,t.getFetchOptions({method:"GET"},f));if(P.ok){let U=await P.json();if(U.messages?.length>0){let C=U.messages.flatMap(K).filter(Boolean);a(F=>[...C,...F]),b(F=>F+U.messages.length),p(U.has_more||U.hasMore||!1)}else p(!1)}}catch(f){console.error("[ChatWidget] Failed to load more messages:",f)}finally{m(!1)}}},[e,t,i,S,d,r]);return R(()=>()=>{g.current&&g.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:i,hasMoreMessages:r,loadingMoreMessages:d,sendMessage:A,cancelRun:j,clearMessages:O,loadConversation:B,loadMoreMessages:W,setConversationId:u}}function ft(e,t,n){let[s,a]=k([]),[o,l]=k(null),[c,_]=k(null),[i,u]=k(!1);R(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let m=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(m.ok){let S=await m.json(),b=S.models||[];a(b),_(S.default);let g=n?.get(e.modelKey);g&&b.some(w=>w.id===g)?l(g):l(S.default)}}catch(m){console.warn("[ChatWidget] Failed to load models:",m)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let r=L(d=>{l(d),n?.set(e.modelKey,d)},[e.modelKey,n]),p=L(()=>s.find(d=>d.id===o)||null,[s,o]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:i,selectModel:r,getSelectedModelInfo:p}}function ht(e,t,n){let s=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",a=(c=null)=>{let _=s(),i={},u=c||e.authToken||t().authToken;if(_==="token"&&u){let r=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";i[r]=p?`${p} ${u}`:u}else if(_==="jwt"&&u){let r=e.authHeader||"Authorization",p=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";i[r]=p?`${p} ${u}`:u}else if(_==="anonymous"&&u){let r=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";i[r]=u}if(_==="session"){let r=rt(e.csrfCookieName);r&&(i["X-CSRFToken"]=r)}return i};return{getAuthStrategy:s,getAuthHeaders:a,getFetchOptions:(c={},_=null)=>{let i=s(),u={...c};return u.headers={...u.headers,...a(_)},i==="session"&&(u.credentials="include"),u},getOrCreateSession:async()=>{let c=s(),_=t();if(c!=="anonymous")return e.authToken||_.authToken;if(_.authToken)return _.authToken;let i=e.anonymousTokenKey||e.sessionTokenKey,u=_.storage?.get(i);if(u)return n(r=>({...r,authToken:u})),u;try{let r=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,p=await fetch(`${e.backendUrl}${r}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(p.ok){let d=await p.json();return n(m=>({...m,authToken:d.token})),_.storage?.set(i,d.token),d.token}}catch(r){console.warn("[ChatWidget] Failed to create session:",r)}return null}}}function mt({config:e,onStateChange:t,markdownParser:n,apiRef:s}){let[a,o]=k(e.embedded||e.forceOpen===!0),[l,c]=k(!1),[_,i]=k(!1),[u,r]=k(!1),[p,d]=k([]),[m,S]=k(!1),[b,g]=k(e.enableTTS),[w,N]=k(!1),[A,j]=k(null);R(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let O=ne(()=>at(e.containerId),[e.containerId]),[K,B]=k(e.authToken||null),W=ne(()=>ht(e,()=>({authToken:K,storage:O}),x=>{let V=x({authToken:K,storage:O});V.authToken!==K&&B(V.authToken)}),[e,K,O]),f=pt(e,W,O),$=ft(e,W,O);R(()=>{for(let v=f.messages.length-1;v>=0;v--){let h=f.messages[v];if(h.type==="sub_agent_start"){j({key:h.metadata?.subAgentKey,name:h.metadata?.agentName});return}if(h.type==="sub_agent_end"){j(null);return}}},[f.messages]),R(()=>{let v=O.get(e.conversationIdKey);v&&f.loadConversation(v)},[]),R(()=>{t&&t({isOpen:a,isExpanded:l,debugMode:_,messages:f.messages,conversationId:f.conversationId,isLoading:f.isLoading,error:f.error})},[a,l,_,f.messages,f.conversationId,f.isLoading,f.error]);let E=L(async()=>{if(e.showConversationSidebar){S(!0);try{let v=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,h=await fetch(v,W.getFetchOptions({method:"GET"}));if(h.ok){let x=await h.json();d(x.results||x)}}catch(v){console.error("[ChatWidget] Failed to load conversations:",v),d([])}finally{S(!1)}}},[e,W]),P=L(()=>{let v=!u;r(v),v&&E()},[u,E]),U=L(v=>{v!==f.conversationId&&f.loadConversation(v),r(!1)},[f]),C=L(()=>{f.clearMessages(),r(!1)},[f]),F=L(v=>{f.sendMessage(v,{model:$.selectedModel,onAssistantMessage:h=>{}})},[f,b,$.selectedModel]);if(R(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:v=>F(v),clearMessages:()=>f.clearMessages(),toggleTTS:()=>g(v=>!v),stopSpeech:()=>N(!1),setAuth:v=>{v.token!==void 0&&B(v.token)},clearAuth:()=>B(null)})},[f,s,F]),!e.embedded&&!a)return y`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let J=["cw-widget",l&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return y`
    <div class=${J} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&y`
        <${_t}
          isOpen=${u}
          conversations=${p}
          conversationsLoading=${m}
          currentConversationId=${f.conversationId}
          onClose=${()=>r(!1)}
          onNewConversation=${C}
          onSwitchConversation=${U}
        />
      `}
      
      <${lt}
        config=${e}
        debugMode=${_}
        isExpanded=${l}
        isSpeaking=${w}
        messagesCount=${f.messages.length}
        isLoading=${f.isLoading}
        currentAgent=${A}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!l)}
        onToggleDebug=${()=>i(!_)}
        onToggleTTS=${()=>g(!b)}
        onClear=${f.clearMessages}
        onToggleSidebar=${P}
      />

      ${_&&y`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${ct}
        messages=${f.messages}
        isLoading=${f.isLoading}
        hasMoreMessages=${f.hasMoreMessages}
        loadingMoreMessages=${f.loadingMoreMessages}
        onLoadMore=${f.loadMoreMessages}
        debugMode=${_}
        markdownParser=${n}
        emptyStateTitle=${e.emptyStateTitle}
        emptyStateMessage=${e.emptyStateMessage}
      />

      ${f.error&&y`<div class="cw-error-bar">${f.error}</div>`}

      ${e.showModelSelector&&$.availableModels.length>0&&y`
        <${dt}
          availableModels=${$.availableModels}
          selectedModel=${$.selectedModel}
          onSelectModel=${$.selectModel}
          disabled=${f.isLoading}
        />
      `}

      <${ut}
        onSend=${F}
        onCancel=${f.cancelRun}
        isLoading=${f.isLoading}
        placeholder=${e.placeholder}
        primaryColor=${e.primaryColor}
      />
    </div>
  `}var yt={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function gt(e){let t={...yt.apiPaths,...e.apiPaths||{}};return{...yt,...e,apiPaths:t}}var pe=new Map,Ot=0,T=null,Me=class{constructor(t={}){this.instanceId=`cw-${++Ot}`,this.config=gt(t),this.container=null,this._state={},this._apiRef={current:null},pe.set(this.instanceId,this)}_handleStateChange=t=>{this._state=t};init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&ue(y`<${mt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${fe._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(ue(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),pe.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}};function vt(e={}){return new Me(e).init()}function Rt(e={}){return T&&T.destroy(),T=vt(e),T}function Ut(){T&&(T.destroy(),T=null)}function Ft(){T&&T.open()}function Lt(){T&&T.close()}function Wt(e){T&&T.send(e)}function Kt(){T&&T.clearMessages()}function Bt(){T&&T.toggleTTS()}function jt(){T&&T.stopSpeech()}function Jt(e){T&&T.setAuth(e)}function Vt(){T&&T.clearAuth()}function qt(){return T?T.getState():null}function zt(){return T?T.getConfig():null}var fe={createInstance:vt,getInstance:e=>pe.get(e),getAllInstances:()=>Array.from(pe.values()),init:Rt,destroy:Ut,open:Ft,close:Lt,send:Wt,clearMessages:Kt,toggleTTS:Bt,stopSpeech:jt,setAuth:Jt,clearAuth:Vt,getState:qt,getConfig:zt,_enhancedMarkdownParser:null};var Gt=fe;typeof window<"u"&&(window.ChatWidget=fe);return St(Xt);})();
