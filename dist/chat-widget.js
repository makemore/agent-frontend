var ChatWidgetModule=(()=>{var ue=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Wt=Object.prototype.hasOwnProperty;var Bt=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var jt=(e,t)=>{for(var n in t)ue(e,n,{get:t[n],enumerable:!0})},zt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Kt(t))!Wt.call(e,a)&&a!==n&&ue(e,a,{get:()=>t[a],enumerable:!(s=Ut(t,a))||s.enumerable});return e};var Jt=e=>zt(ue({},"__esModule",{value:!0}),e);var We=(e,t,n)=>(Bt(e,typeof t!="symbol"?t+"":t,n),n);var bn={};jt(bn,{ChatWidget:()=>Te,default:()=>kn});var he,H,Ve,Vt,ee,Be,qe,Ge,Xe,Ie,Me,Ee,qt,oe={},Qe=[],Gt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function Y(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function me(e,t,n){var s,a,o,i={};for(o in t)o=="key"?s=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?he.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return pe(e,i,s,a,null)}function pe(e,t,n,s,a){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++Ve,__i:-1,__u:0};return a==null&&H.vnode!=null&&H.vnode(o),o}function ge(e){return e.children}function se(e,t){this.props=e,this.context=t}function te(e,t){if(t==null)return e.__?te(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?te(e):null}function Ye(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ye(e)}}function je(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!_e.__r++||Be!=H.debounceRendering)&&((Be=H.debounceRendering)||qe)(_e)}function _e(){for(var e,t,n,s,a,o,i,c=1;ee.length;)ee.length>c&&ee.sort(Ge),e=ee.shift(),c=ee.length,e.__d&&(n=void 0,s=void 0,a=(s=(t=e).__v).__e,o=[],i=[],t.__P&&((n=Y({},s)).__v=s.__v+1,H.vnode&&H.vnode(n),De(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[a]:null,o,a??te(s),!!(32&s.__u),i),n.__v=s.__v,n.__.__k[n.__i]=n,tt(o,n,i),s.__e=s.__=null,n.__e!=a&&Ye(n)));_e.__r=0}function Ze(e,t,n,s,a,o,i,c,u,l,p){var r,d,_,m,$,y,g,w=s&&s.__k||Qe,E=t.length;for(u=Xt(n,t,w,u,E),r=0;r<E;r++)(_=n.__k[r])!=null&&(d=_.__i==-1?oe:w[_.__i]||oe,_.__i=r,y=De(e,_,d,a,o,i,c,u,l,p),m=_.__e,_.ref&&d.ref!=_.ref&&(d.ref&&Pe(d.ref,null,_),p.push(_.ref,_.__c||m,_)),$==null&&m!=null&&($=m),(g=!!(4&_.__u))||d.__k===_.__k?u=et(_,u,e,g):typeof _.type=="function"&&y!==void 0?u=y:m&&(u=m.nextSibling),_.__u&=-7);return n.__e=$,u}function Xt(e,t,n,s,a){var o,i,c,u,l,p=n.length,r=p,d=0;for(e.__k=new Array(a),o=0;o<a;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[o]=pe(null,i,null,null,null):fe(i)?i=e.__k[o]=pe(ge,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[o]=pe(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[o]=i,u=o+d,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Qt(i,n,u,r))!=-1&&(r--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(a>p?d--:a<p&&d++),typeof i.type!="function"&&(i.__u|=4)):l!=u&&(l==u-1?d--:l==u+1?d++:(l>u?d--:d++,i.__u|=4))):e.__k[o]=null;if(r)for(o=0;o<p;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=te(c)),st(c,c));return s}function et(e,t,n,s){var a,o;if(typeof e.type=="function"){for(a=e.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=e,t=et(a[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=te(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Qt(e,t,n,s){var a,o,i,c=e.key,u=e.type,l=t[n],p=l!=null&&(2&l.__u)==0;if(l===null&&c==null||p&&c==l.key&&u==l.type)return n;if(s>(p?1:0)){for(a=n-1,o=n+1;a>=0||o<t.length;)if((l=t[i=a>=0?a--:o++])!=null&&!(2&l.__u)&&c==l.key&&u==l.type)return i}return-1}function ze(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Gt.test(t)?n:n+"px"}function de(e,t,n,s,a){var o,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||ze(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||ze(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Xe,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=Ie,e.addEventListener(t,o?Ee:Me,o)):e.removeEventListener(t,o?Ee:Me,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Je(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ie++;else if(t.t<n.u)return;return n(H.event?H.event(t):t)}}}function De(e,t,n,s,a,o,i,c,u,l){var p,r,d,_,m,$,y,g,w,E,O,W,J,V,B,j,G,N=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[c=t.__e=n.__e]),(p=H.__b)&&p(t);e:if(typeof N=="function")try{if(g=t.props,w="prototype"in N&&N.prototype.render,E=(p=N.contextType)&&s[p.__c],O=p?E?E.props.value:p.__:s,n.__c?y=(r=t.__c=n.__c).__=r.__E:(w?t.__c=r=new N(g,O):(t.__c=r=new se(g,O),r.constructor=N,r.render=Zt),E&&E.sub(r),r.state||(r.state={}),r.__n=s,d=r.__d=!0,r.__h=[],r._sb=[]),w&&r.__s==null&&(r.__s=r.state),w&&N.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Y({},r.__s)),Y(r.__s,N.getDerivedStateFromProps(g,r.__s))),_=r.props,m=r.state,r.__v=t,d)w&&N.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),w&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(w&&N.getDerivedStateFromProps==null&&g!==_&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,O),t.__v==n.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,O)===!1){for(t.__v!=n.__v&&(r.props=g,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(h){h&&(h.__=t)}),W=0;W<r._sb.length;W++)r.__h.push(r._sb[W]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,O),w&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(_,m,$)})}if(r.context=O,r.props=g,r.__P=e,r.__e=!1,J=H.__r,V=0,w){for(r.state=r.__s,r.__d=!1,J&&J(t),p=r.render(r.props,r.state,r.context),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[]}else do r.__d=!1,J&&J(t),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++V<25);r.state=r.__s,r.getChildContext!=null&&(s=Y(Y({},s),r.getChildContext())),w&&!d&&r.getSnapshotBeforeUpdate!=null&&($=r.getSnapshotBeforeUpdate(_,m)),j=p,p!=null&&p.type===ge&&p.key==null&&(j=nt(p.props.children)),c=Ze(e,fe(j)?j:[j],t,n,s,a,o,i,c,u,l),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),y&&(r.__E=r.__=null)}catch(h){if(t.__v=null,u||o!=null)if(h.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(G=o.length;G--;)Ae(o[G]);xe(t)}else t.__e=n.__e,t.__k=n.__k,h.then||xe(t);H.__e(h,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Yt(n.__e,t,n,s,a,o,i,u,l);return(p=H.diffed)&&p(t),128&t.__u?void 0:c}function xe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(xe)}function tt(e,t,n){for(var s=0;s<n.length;s++)Pe(n[s],n[++s],n[++s]);H.__c&&H.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){H.__e(o,a.__v)}})}function nt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fe(e)?e.map(nt):Y({},e)}function Yt(e,t,n,s,a,o,i,c,u){var l,p,r,d,_,m,$,y=n.props||oe,g=t.props,w=t.type;if(w=="svg"?a="http://www.w3.org/2000/svg":w=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((_=o[l])&&"setAttribute"in _==!!w&&(w?_.localName==w:_.nodeType==3)){e=_,o[l]=null;break}}if(e==null){if(w==null)return document.createTextNode(g);e=document.createElementNS(a,w,g.is&&g),c&&(H.__m&&H.__m(t,o),c=!1),o=null}if(w==null)y===g||c&&e.data==g||(e.data=g);else{if(o=o&&he.call(e.childNodes),!c&&o!=null)for(y={},l=0;l<e.attributes.length;l++)y[(_=e.attributes[l]).name]=_.value;for(l in y)if(_=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=_;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;de(e,l,null,_,a)}}for(l in g)_=g[l],l=="children"?d=_:l=="dangerouslySetInnerHTML"?p=_:l=="value"?m=_:l=="checked"?$=_:c&&typeof _!="function"||y[l]===_||de(e,l,_,y[l],a);if(p)c||r&&(p.__html==r.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(r&&(e.innerHTML=""),Ze(t.type=="template"?e.content:e,fe(d)?d:[d],t,n,s,w=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&te(n,0),c,u),o!=null)for(l=o.length;l--;)Ae(o[l]);c||(l="value",w=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[l]||w=="progress"&&!m||w=="option"&&m!=y[l])&&de(e,l,m,y[l],a),l="checked",$!=null&&$!=e[l]&&de(e,l,$,y[l],a))}return e}function Pe(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(a){H.__e(a,n)}}function st(e,t,n){var s,a;if(H.unmount&&H.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||Pe(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){H.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&st(s[a],t,n||typeof e.type!="function");n||Ae(e.__e),e.__c=e.__=e.__e=void 0}function Zt(e,t,n){return this.constructor(e,n)}function ye(e,t,n){var s,a,o,i;t==document&&(t=document.documentElement),H.__&&H.__(e,t),a=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],De(t,e=(!s&&n||t).__k=me(ge,null,[e]),a||oe,oe,t.namespaceURI,!s&&n?[n]:a?null:t.firstChild?he.call(t.childNodes):null,o,!s&&n?n:a?a.__e:t.firstChild,s,i),tt(o,e,i)}he=Qe.slice,H={__e:function(e,t,n,s){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,s||{}),i=a.__d),i)return a.__E=a}catch(c){e=c}throw e}},Ve=0,Vt=function(e){return e!=null&&e.constructor===void 0},se.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y({},this.state),typeof e=="function"&&(e=e(Y({},n),this.props)),e&&Y(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},se.prototype.render=ge,ee=[],qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ge=function(e,t){return e.__v.__b-t.__v.__b},_e.__r=0,Xe=/(PointerCapture)$|Capture$/i,Ie=0,Me=Je(!1),Ee=Je(!0),qt=0;var at=function(e,t,n,s){var a;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];i===3?s[0]=c:i===4?s[1]=Object.assign(s[1]||{},c):i===5?(s[1]=s[1]||{})[t[++o]]=c:i===6?s[1][t[++o]]+=c+"":i?(a=e.apply(c,at(e,c,n,["",null])),s.push(a),c[0]?t[0]|=2:(t[o-2]=0,t[o]=a)):s.push(c)}return s},ot=new Map;function rt(e){var t=ot.get(this);return t||(t=new Map,ot.set(this,t)),(t=at(this,t.get(e)||(t.set(e,t=function(n){for(var s,a,o=1,i="",c="",u=[0],l=function(d){o===1&&(d||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,d,i):o===3&&(d||i)?(u.push(3,d,i),o=2):o===2&&i==="..."&&d?u.push(4,d,0):o===2&&i&&!d?u.push(5,0,!0,i):o>=5&&((i||!d&&o===5)&&(u.push(o,0,i,a),o=6),d&&(u.push(o,d,0,a),o=6)),i=""},p=0;p<n.length;p++){p&&(o===1&&l(),l(p));for(var r=0;r<n[p].length;r++)s=n[p][r],o===1?s==="<"?(l(),u=[u],o=3):i+=s:o===4?i==="--"&&s===">"?(o=1,i=""):i=s+i[0]:c?s===c?c="":i+=s:s==='"'||s==="'"?c=s:s===">"?(l(),o=1):o&&(s==="="?(o=5,a=i,i=""):s==="/"&&(o<5||n[p][r+1]===">")?(l(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),o=2):i+=s),o===3&&i==="!--"&&(o=4,u=u[0])}return l(),u}(e)),t),arguments,[])).length>1?t:t[0]}var f=rt.bind(me);var ae,L,Re,it,re=0,ft=[],U=H,lt=U.__b,ct=U.__r,ut=U.diffed,dt=U.__c,pt=U.unmount,_t=U.__;function He(e,t){U.__h&&U.__h(L,e,re||t),re=0;var n=L.__H||(L.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return re=1,en(gt,e)}function en(e,t,n){var s=He(ae++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):gt(void 0,t),function(c){var u=s.__N?s.__N[0]:s.__[0],l=s.t(u,c);u!==l&&(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=L,!L.__f)){var a=function(c,u,l){if(!s.__c.__H)return!0;var p=s.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!o||o.call(this,c,u,l);var r=s.__c.props!==c;return p.forEach(function(d){if(d.__N){var _=d.__[0];d.__=d.__N,d.__N=void 0,_!==d.__[0]&&(r=!0)}}),o&&o.call(this,c,u,l)||r};L.__f=!0;var o=L.shouldComponentUpdate,i=L.componentWillUpdate;L.componentWillUpdate=function(c,u,l){if(this.__e){var p=o;o=void 0,a(c,u,l),o=p}i&&i.call(this,c,u,l)},L.shouldComponentUpdate=a}return s.__N||s.__}function K(e,t){var n=He(ae++,3);!U.__s&&mt(n.__H,t)&&(n.__=e,n.u=t,L.__H.__h.push(n))}function X(e){return re=5,ie(function(){return{current:e}},[])}function ie(e,t){var n=He(ae++,7);return mt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function A(e,t){return re=8,ie(function(){return e},t)}function tn(){for(var e;e=ft.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ve),e.__H.__h.forEach(Fe),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}U.__b=function(e){L=null,lt&&lt(e)},U.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),_t&&_t(e,t)},U.__r=function(e){ct&&ct(e),ae=0;var t=(L=e.__c).__H;t&&(Re===L?(t.__h=[],L.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(ve),t.__h.forEach(Fe),t.__h=[],ae=0)),Re=L},U.diffed=function(e){ut&&ut(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ft.push(t)!==1&&it===U.requestAnimationFrame||((it=U.requestAnimationFrame)||nn)(tn)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Re=L=null},U.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ve),n.__h=n.__h.filter(function(s){return!s.__||Fe(s)})}catch(s){t.some(function(a){a.__h&&(a.__h=[])}),t=[],U.__e(s,n.__v)}}),dt&&dt(e,t)},U.unmount=function(e){pt&&pt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{ve(s)}catch(a){t=a}}),n.__H=void 0,t&&U.__e(t,n.__v))};var ht=typeof requestAnimationFrame=="function";function nn(e){var t,n=function(){clearTimeout(s),ht&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);ht&&(t=requestAnimationFrame(n))}function ve(e){var t=L,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),L=t}function Fe(e){var t=L;e.__c=e.__(),L=t}function mt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function gt(e,t){return typeof t=="function"?t(e):t}function sn(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function Oe(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function $e(e){return Array.isArray(e)?e.map($e):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[sn(t),$e(n)])):e}function we(e){return Array.isArray(e)?e.map(we):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Oe(t),we(n)])):e}function ke(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function z(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function yt(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,a=Math.floor(s/6e4),o=Math.floor(s/36e5),i=Math.floor(s/864e5);return a<1?"Just now":a<60?`${a}m ago`:o<24?`${o}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function vt(e,t=null){if(t)return t(e);let n=z(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function $t(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let a=t(n);s===null?localStorage.removeItem(a):localStorage.setItem(a,s)}catch{}}}}function wt(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[a,o]=s.trim().split("=");if(a===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function be(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(1))+" "+n[s]}function Ce(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function kt({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:a,isLoading:o,currentAgent:i,onClose:c,onToggleExpand:u,onToggleDebug:l,onToggleTTS:p,onClear:r,onToggleSidebar:d}){let{title:_,primaryColor:m,embedded:$,showConversationSidebar:y,showClearButton:g,showDebugButton:w,enableDebugMode:E,showTTSButton:O,showExpandButton:W,enableTTS:J,elevenLabsApiKey:V,ttsProxyUrl:B}=e,j=V||B;return f`
    <div class="cw-header" style=${{backgroundColor:m}}>
      ${y&&f`
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
        <span class="cw-title">${z(_)}</span>
        ${i&&f`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${z(i.name||i.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${g&&f`
          <button 
            class="cw-header-btn" 
            onClick=${r}
            title="Clear"
            disabled=${o||a===0}
          >🗑️</button>
        `}
        
        ${w&&E&&f`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${O&&j&&f`
          <button 
            class="cw-header-btn ${J?"cw-btn-active":""}" 
            onClick=${p}
            title="TTS"
          >${J?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${W&&!$&&f`
          <button 
            class="cw-header-btn" 
            onClick=${u}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!$&&f`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Ne({msg:e,show:t,onToggle:n}){return t?f`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:f`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function bt({onEdit:e,onRetry:t,isLoading:n,position:s,showEdit:a=!0}){return n?null:f`
    <div class="cw-message-actions cw-message-actions-${s||"left"}">
      ${a&&f`
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
  `}function on({initialContent:e,onSave:t,onCancel:n}){let[s,a]=C(e),o=X(null);return K(()=>{o.current&&(o.current.focus(),o.current.setSelectionRange(s.length,s.length),o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},[]),f`
    <div class="cw-inline-edit">
      <textarea
        ref=${o}
        class="cw-inline-edit-input"
        value=${s}
        onInput=${u=>{a(u.target.value),u.target.style.height="auto",u.target.style.height=u.target.scrollHeight+"px"}}
        onKeyDown=${u=>{u.key==="Enter"&&!u.shiftKey?(u.preventDefault(),s.trim()&&t(s.trim())):u.key==="Escape"&&n()}}
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
          onClick=${()=>s.trim()&&t(s.trim())}
          disabled=${!s.trim()}
          title="Save & Resend (Enter)"
        >Save & Send</button>
      </div>
    </div>
  `}function Ct({msg:e,debugMode:t,markdownParser:n,onEdit:s,onRetry:a,isLoading:o,messageIndex:i}){let[c,u]=C(!1),[l,p]=C(!1),[r,d]=C(!1),_=e.role==="user",m=e.role==="system",$=e.type==="tool_call",y=e.type==="tool_result",g=e.type==="error",w=e.type==="sub_agent_start",E=e.type==="sub_agent_end",O=e.type==="agent_context";if(m&&!t)return null;if(w||E||O)return f`
      <div class="cw-agent-context ${w?"cw-agent-delegating":""} ${E?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${w?"\u{1F517}":E?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&f`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
      </div>
    `;if($||y){let T=e.metadata?.arguments||e.metadata?.result,I=k=>{if(typeof k=="string")try{return JSON.stringify(JSON.parse(k),null,2)}catch{return k}return JSON.stringify(k,null,2)};return f`
      <div class="cw-tool-message ${y?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>T&&u(!c)}>
          ${e.content}
          ${T&&f`<span class="cw-tool-expand">${c?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${c&&T&&f`
          <pre class="cw-tool-details">${z(I($?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
      </div>
    `}let W=["cw-message",_&&"cw-message-user",g&&"cw-message-error"].filter(Boolean).join(" "),J=`cw-message-row ${_?"cw-message-row-user":""}`,V=e.role==="assistant"?vt(e.content,n):z(e.content),B=e.files&&e.files.length>0,j=()=>B?f`
      <div class="cw-message-attachments">
        ${e.files.map(T=>T.type&&T.type.startsWith("image/")?f`
              <a class="cw-attachment-thumbnail" href=${T.url} target="_blank" title=${T.name}>
                <img src=${T.url} alt=${T.name} />
              </a>
            `:f`
            <a class="cw-attachment-file" href=${T.url} target="_blank" title=${T.name}>
              <span class="cw-attachment-icon">${Ce(T.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${T.name}</span>
                <span class="cw-attachment-size">${be(T.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,G=T=>{d(!1),s&&s(i,T)},N=()=>{a&&a(i)};if(_&&r)return f`
      <div class=${J} style="position: relative;">
        ${j()}
        <${on}
          initialContent=${e.content}
          onSave=${G}
          onCancel=${()=>d(!1)}
        />
      </div>
    `;let h=_&&s&&a,M=e.role==="assistant"&&a&&!o;return f`
    <div class="${J} ${h||M?"cw-message-row-with-actions":""}">
      ${j()}
      ${h&&f`
        <div class="cw-user-actions-wrapper">
          <${bt}
            onEdit=${()=>d(!0)}
            onRetry=${N}
            isLoading=${o}
            position="left"
            showEdit=${!0}
          />
          <div class=${W} dangerouslySetInnerHTML=${{__html:V}} />
        </div>
      `}
      ${!h&&f`
        <div class=${W} dangerouslySetInnerHTML=${{__html:V}} />
      `}
      ${M&&f`
        <${bt}
          onRetry=${N}
          isLoading=${o}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
    </div>
  `}function St({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:a,onEditMessage:o,onRetryMessage:i,debugMode:c,markdownParser:u,emptyStateTitle:l,emptyStateMessage:p}){let r=X(null),d=X(!0),_=$=>{let y=$.target,g=y.scrollHeight-y.scrollTop-y.clientHeight<100;if(d.current=g,y.scrollTop<50&&n&&!s){let w=y.scrollHeight;a().then(()=>{let E=y.scrollHeight;y.scrollTop=E-w+y.scrollTop})}};K(()=>{let $=r.current;$&&d.current&&requestAnimationFrame(()=>{$.scrollTop=$.scrollHeight})},[e,t]),K(()=>{let $=r.current;$&&e.length<=2&&(d.current=!0,requestAnimationFrame(()=>{$.scrollTop=$.scrollHeight}))},[e.length]);let m=e.length===0;return f`
    <div class="cw-messages" ref=${r} onScroll=${_}>
      ${m&&f`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${z(l)}</h3>
          <p>${z(p)}</p>
        </div>
      `}
      
      ${!m&&n&&f`
        <div class="cw-load-more" onClick=${a}>
          ${s?f`<span class="cw-spinner"></span><span>Loading...</span>`:f`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map(($,y)=>f`
        <${Ct}
          key=${$.id}
          msg=${$}
          messageIndex=${y}
          debugMode=${c}
          markdownParser=${u}
          onEdit=${o}
          onRetry=${i}
          isLoading=${t}
        />
      `)}
      
      ${t&&f`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}var Le=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Tt({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:a,enableVoice:o=!0,enableFiles:i=!0}){let[c,u]=C(""),[l,p]=C([]),[r,d]=C(!1),[_,m]=C(!1),[$]=C(()=>!!Le),y=X(null),g=X(null),w=X(null),E=X(!1);K(()=>{!n&&y.current&&y.current.focus()},[n]),K(()=>{y.current&&(y.current.style.height="auto",y.current.style.height=Math.min(y.current.scrollHeight,150)+"px")},[c]),K(()=>()=>{E.current=!1,w.current&&w.current.abort()},[]);let O=k=>{k.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),u(""),p([]),y.current&&(y.current.style.height="auto"),g.current&&(g.current.value=""))},W=k=>{let P=Array.from(k.target.files||[]);P.length>0&&p(R=>[...R,...P])},J=k=>{p(P=>P.filter((R,v)=>v!==k))},V=k=>{k.preventDefault(),g.current&&!n&&g.current.click()},B=k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),O(k))},j=k=>{n&&t&&(k.preventDefault(),t())},G=()=>{if(!Le||n)return;E.current=!0;let k=new Le;k.continuous=!0,k.interimResults=!0,k.lang=navigator.language||"en-US";let P=c,R="";k.onstart=()=>{m(!0)},k.onresult=v=>{R="";for(let b=v.resultIndex;b<v.results.length;b++){let D=v.results[b][0].transcript;v.results[b].isFinal?P+=(P?" ":"")+D:R+=D}u(P+(R?" "+R:""))},k.onerror=v=>{if(v.error==="no-speech"||v.error==="aborted"){console.log("[ChatWidget] Speech recognition:",v.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",v.error),E.current=!1,m(!1),u(P||c)},k.onend=()=>{if(E.current){console.log("[ChatWidget] Recognition paused, restarting...");try{k.start();return}catch(v){console.warn("[ChatWidget] Could not restart recognition:",v)}}m(!1),P&&u(P),w.current=null},w.current=k,k.start()},N=()=>{E.current=!1,w.current&&w.current.stop()},h=k=>{k.preventDefault(),_?N():G()},S=f`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,M=f`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,x=f`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,T=o&&$,I=i;return f`
    <form class="cw-input-form" onSubmit=${O}>
      <input
        type="file"
        ref=${g}
        style="display: none"
        multiple
        onChange=${W}
      />
      ${l.length>0&&f`
        <div class="cw-file-chips">
          ${l.map((k,P)=>f`
            <div class="cw-file-chip" key=${P}>
              <span class="cw-file-chip-icon">${Ce(k.type)}</span>
              <span class="cw-file-chip-name" title=${k.name}>${k.name.length>20?k.name.substring(0,17)+"...":k.name}</span>
              <span class="cw-file-chip-size">(${be(k.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>J(P)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${y}
        class="cw-input"
        placeholder=${z(s)}
        value=${c}
        onInput=${k=>u(k.target.value)}
        onKeyDown=${B}
        disabled=${n}
        rows="1"
      />
      ${I&&f`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${V}
          disabled=${n}
          title="Attach files"
        >
          ${x}
        </button>
      `}
      ${T&&f`
        <button
          type="button"
          class=${`cw-voice-btn ${_?"cw-voice-btn-recording":""}`}
          onClick=${h}
          disabled=${n}
          title=${_?"Stop recording":"Voice input"}
        >
          ${M}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&r?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&r?"#dc2626":a}}
        onClick=${j}
        onMouseEnter=${()=>d(!0)}
        onMouseLeave=${()=>d(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?r?S:f`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function Mt({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:s,onClose:a,onNewConversation:o,onSwitchConversation:i}){return f`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${a}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${o}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&f`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&f`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(c=>f`
          <div 
            key=${c.id}
            class="cw-conversation-item ${c.id===s?"cw-conversation-active":""}"
            onClick=${()=>i(c.id)}
          >
            <div class="cw-conversation-title">${z(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${yt(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${a}
    />
  `}function Et({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:s,onToggleThinking:a,disabled:o}){let[i,c]=C(!1);if(!e||e.length===0)return null;let u=e.find(m=>m.id===t),l=u?.name||"Select Model",p=u?.supports_thinking||!1,r=()=>{o||c(!i)},d=m=>{n(m),c(!1)},_=m=>{m.stopPropagation(),a&&p&&a(!s)};return f`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${r}
        disabled=${o}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${z(l)}</span>
        <span class="cw-model-chevron">${i?"\u25B2":"\u25BC"}</span>
      </button>

      ${p&&a&&f`
        <button
          class="cw-thinking-toggle ${s?"cw-thinking-enabled":""}"
          onClick=${_}
          disabled=${o}
          title=${s?"Thinking enabled - click to disable":"Enable extended thinking"}
        >
          <span class="cw-thinking-icon">🧠</span>
        </button>
      `}

      ${i&&f`
        <div class="cw-model-dropdown">
          ${e.map(m=>f`
            <button
              key=${m.id}
              class="cw-model-option ${m.id===t?"cw-model-option-selected":""}"
              onClick=${()=>d(m.id)}
            >
              <span class="cw-model-option-name">
                ${z(m.name)}
                ${m.supports_thinking&&f`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${z(m.provider)}</span>
              ${m.description&&f`
                <span class="cw-model-option-desc">${z(m.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var an={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},rn={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function ln({task:e,onUpdate:t,onRemove:n,depth:s=0}){let[a,o]=C(!1),[i,c]=C(e.name),u=A(()=>{let d={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:d[e.state]||"not_started"})},[e,t]),l=A(()=>{i.trim()&&i!==e.name&&t(e.id,{name:i.trim()}),o(!1)},[e,i,t]),p=A(d=>{d.key==="Enter"&&l(),d.key==="Escape"&&(c(e.name),o(!1))},[l,e.name]),r=`cw-task-state-${e.state.replace("_","-")}`;return f`
    <div class="cw-task-item ${r}" style=${{paddingLeft:`${s*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${u}
        title=${rn[e.state]}
      >
        ${an[e.state]}
      </button>
      
      ${a?f`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${i}
          onInput=${d=>c(d.target.value)}
          onBlur=${l}
          onKeyDown=${p}
          autoFocus
        />
      `:f`
        <span 
          class="cw-task-name" 
          onClick=${()=>o(!0)}
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
  `}function xt({tasks:e,progress:t,isLoading:n,error:s,onUpdate:a,onRemove:o,onClear:i,onRefresh:c}){let u=A(r=>{let d=new Map,_=[];return r.forEach(m=>{d.set(m.id,{...m,children:[]})}),r.forEach(m=>{let $=d.get(m.id);m.parent_id&&d.has(m.parent_id)?d.get(m.parent_id).children.push($):_.push($)}),_},[]),l=A((r,d=0)=>f`
      <${ln}
        key=${r.id}
        task=${r}
        depth=${d}
        onUpdate=${a}
        onRemove=${o}
      />
      ${r.children?.map(_=>l(_,d+1))}
    `,[a,o]),p=u(e);return n&&e.length===0?f`<div class="cw-tasks-loading">Loading tasks...</div>`:f`
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
          <button class="cw-tasks-action-btn" onClick=${c} title="Refresh">↻</button>
          ${e.length>0&&f`
            <button class="cw-tasks-action-btn" onClick=${i} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${s&&f`<div class="cw-tasks-error">${s}</div>`}
      
      <div class="cw-tasks-list">
        ${p.length===0?f`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:p.map(r=>l(r))}
      </div>
    </div>
  `}function It(e,t,n){let[s,a]=C([]),[o,i]=C(!1),[c,u]=C(null),[l,p]=C(()=>n?.get(e.conversationIdKey)||null),[r,d]=C(!1),[_,m]=C(!1),[$,y]=C(0),g=X(null),w=X(null);K(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let E=A(async(h,S,M)=>{g.current&&g.current.close();let x=e.apiPaths.runEvents.replace("{runId}",h),T=`${e.backendUrl}${x}`;S&&(T+=`?anonymous_token=${encodeURIComponent(S)}`);let I=new EventSource(T);g.current=I;let k="";I.addEventListener("assistant.message",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("assistant.message",v.payload);let b=v.payload.content;b&&(k+=b,a(D=>{let q=D[D.length-1];return q?.role==="assistant"&&q.id.startsWith("assistant-stream-")?[...D.slice(0,-1),{...q,content:k}]:[...D,{id:"assistant-stream-"+Date.now(),role:"assistant",content:k,timestamp:new Date,type:"message"}]}))}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("tool.call",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.call",v.payload),a(b=>[...b,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${v.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:v.payload.name,arguments:v.payload.arguments,toolCallId:v.payload.id}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("tool.result",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("tool.result",v.payload);let b=v.payload.result,D=b?.error;a(q=>[...q,{id:"tool-result-"+Date.now(),role:"system",content:D?`\u274C ${b.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:v.payload.name,result:b,toolCallId:v.payload.tool_call_id}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("custom",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("custom",v.payload),v.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(v.payload),v.payload?.type==="agent_context"&&a(b=>[...b,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${v.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:v.payload.agent_key,agentName:v.payload.agent_name,action:v.payload.action}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("sub_agent.start",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.start",v.payload),a(b=>[...b,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${v.payload.agent_name||v.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:v.payload.sub_agent_key,agentName:v.payload.agent_name,invocationMode:v.payload.invocation_mode}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("sub_agent.end",R=>{try{let v=JSON.parse(R.data);e.onEvent&&e.onEvent("sub_agent.end",v.payload),a(b=>[...b,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${v.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:v.payload.sub_agent_key,agentName:v.payload.agent_name}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}});let P=R=>{try{let v=JSON.parse(R.data);if(e.onEvent&&e.onEvent(v.type,v.payload),v.type==="run.failed"){let b=v.payload.error||"Agent run failed";u(b),a(D=>[...D,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${b}`,timestamp:new Date,type:"error"}])}}catch(v){console.error("[ChatWidget] Parse error:",v)}i(!1),I.close(),g.current=null,k&&M&&M(k)};I.addEventListener("run.succeeded",P),I.addEventListener("run.failed",P),I.addEventListener("run.cancelled",P),I.addEventListener("run.timed_out",P),I.onerror=()=>{i(!1),I.close(),g.current=null}},[e]),O=A(async(h,S={},M={})=>{if(!h.trim()||o)return;let x=[],T={};typeof S=="function"?T={onAssistantMessage:S}:Array.isArray(S)?(x=S,T=M):T=S||{};let{model:I,thinking:k,onAssistantMessage:P,supersedeFromMessageIndex:R}=T;i(!0),u(null);let v={id:ke(),role:"user",content:h.trim(),timestamp:new Date,type:"message",files:x.length>0?x.map(b=>({name:b.name,size:b.size,type:b.type})):void 0};a(b=>[...b,v]);try{let b=await t.getOrCreateSession(),D;if(x.length>0){let Q=e.apiCaseStyle!=="camel",Ke=ce=>Q?Oe(ce):ce,Z=new FormData;Z.append(Ke("agentKey"),e.agentKey),l&&Z.append(Ke("conversationId"),l),Z.append("messages",JSON.stringify([{role:"user",content:h.trim()}])),Z.append("metadata",JSON.stringify(Q?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),I&&Z.append("model",I),k&&Z.append("thinking","true"),x.forEach(ce=>{Z.append("files",ce)}),D=t.getFetchOptions({method:"POST",body:Z},b)}else{let Q=t.transformRequest({agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:h.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...I&&{model:I},...k&&{thinking:!0},...R!==void 0&&{supersedeFromMessageIndex:R}});D=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)},b)}let q=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,D),ne=b;if(q.status===401){t.clearSession();let Q=await t.getOrCreateSession(!0);Q&&(ne=Q,x.length>0?D=t.getFetchOptions({method:"POST",body:D.body},Q):D=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:D.body},Q),q=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,D))}if(!q.ok){let Q=await q.json().catch(()=>({}));throw new Error(Q.error||Q.detail||`HTTP ${q.status}`)}let Lt=await q.json(),le=t.transformResponse(Lt);w.current=le.id,!l&&le.conversationId&&p(le.conversationId),await E(le.id,ne,P)}catch(b){u(b.message||"Failed to send message"),i(!1)}finally{w.current=null}},[e,t,l,o,E]),W=A(async()=>{let h=w.current;if(!(!h||!o))try{let S=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",h):`${e.apiPaths.runs}${h}/cancel/`;(await fetch(`${e.backendUrl}${S}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),i(!1),w.current=null,a(x=>[...x,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(S){console.error("[ChatWidget] Failed to cancel run:",S)}},[e,t,o]),J=A(()=>{a([]),p(null),u(null),d(!1),y(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),V=h=>{let S={id:ke(),role:h.role,timestamp:h.timestamp?new Date(h.timestamp):new Date};if(h.role==="tool")return{...S,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:h.content,toolCallId:h.toolCallId}};if(h.role==="assistant"&&h.toolCalls&&h.toolCalls.length>0)return h.toolCalls.map(x=>({id:ke(),role:"assistant",content:`\u{1F527} ${x.function?.name||x.name||"tool"}`,timestamp:S.timestamp,type:"tool_call",metadata:{toolName:x.function?.name||x.name,arguments:x.function?.arguments||x.arguments,toolCallId:x.id}}));let M=typeof h.content=="string"?h.content:JSON.stringify(h.content);return h.role==="assistant"&&!M?.trim()?null:{...S,content:M,type:"message"}},B=A(async h=>{i(!0),a([]),p(h);try{let S=await t.getOrCreateSession(),x=`${e.backendUrl}${e.apiPaths.conversations}${h}/?limit=10&offset=0`,T=await fetch(x,t.getFetchOptions({method:"GET"},S));if(T.ok){let I=await T.json(),k=t.transformResponse(I);k.messages&&a(k.messages.flatMap(V).filter(Boolean)),d(k.hasMore||!1),y(k.messages?.length||0)}else T.status===404&&(p(null),n?.set(e.conversationIdKey,null))}catch(S){console.error("[ChatWidget] Failed to load conversation:",S)}finally{i(!1)}},[e,t,n]),j=A(async()=>{if(!(!l||_||!r)){m(!0);try{let h=await t.getOrCreateSession(),M=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${$}`,x=await fetch(M,t.getFetchOptions({method:"GET"},h));if(x.ok){let T=await x.json(),I=t.transformResponse(T);if(I.messages?.length>0){let k=I.messages.flatMap(V).filter(Boolean);a(P=>[...k,...P]),y(P=>P+I.messages.length),d(I.hasMore||!1)}else d(!1)}}catch(h){console.error("[ChatWidget] Failed to load more messages:",h)}finally{m(!1)}}},[e,t,l,$,_,r]),G=A(async(h,S,M={})=>{if(o)return;let x=s[h];if(!x||x.role!=="user")return;let T=s.slice(0,h);a(T),await O(S,{...M,supersedeFromMessageIndex:h})},[s,o,O]),N=A(async(h,S={})=>{if(o)return;let M=s[h];if(!M)return;let x=h,T=M;if(M.role==="assistant"){for(let k=h-1;k>=0;k--)if(s[k].role==="user"){x=k,T=s[k];break}if(T.role!=="user")return}else if(M.role!=="user")return;let I=s.slice(0,x);a(I),await O(T.content,{...S,supersedeFromMessageIndex:x})},[s,o,O]);return K(()=>()=>{g.current&&g.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:l,hasMoreMessages:r,loadingMoreMessages:_,sendMessage:O,cancelRun:W,clearMessages:J,loadConversation:B,loadMoreMessages:j,setConversationId:p,editMessage:G,retryMessage:N}}var At="cw_thinking_enabled";function Dt(e,t,n){let[s,a]=C([]),[o,i]=C(null),[c,u]=C(null),[l,p]=C(!1),[r,d]=C(!1);K(()=>{(async()=>{if(e.showModelSelector){p(!0);try{let w=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(w.ok){let E=await w.json(),O=E.models||[];a(O),u(E.default);let W=n?.get(e.modelKey);W&&O.some(V=>V.id===W)?i(W):i(E.default),n?.get(At)==="true"&&d(!0)}}catch(w){console.warn("[ChatWidget] Failed to load models:",w)}finally{p(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let _=A(g=>{i(g),n?.set(e.modelKey,g)},[e.modelKey,n]),m=A(g=>{d(g),n?.set(At,g?"true":"false")},[n]),$=A(()=>s.find(g=>g.id===o)||null,[s,o]),y=A(()=>$()?.supports_thinking||!1,[$]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:l,selectModel:_,getSelectedModelInfo:$,thinkingEnabled:r,toggleThinking:m,supportsThinking:y}}function Pt(e,t){let[n,s]=C(null),[a,o]=C(!1),[i,c]=C(null),u=e.apiPaths?.tasks||"/api/agent/tasks/",l=A(async()=>{o(!0),c(null);try{let $=`${e.backendUrl}${u}`,y=await fetch($,t.getFetchOptions({method:"GET"}));if(y.ok){let g=await y.json();s(g)}else{let g=await y.json().catch(()=>({}));c(g.error||"Failed to load tasks")}}catch($){console.error("[useTasks] Failed to load task list:",$),c("Failed to load tasks")}finally{o(!1)}},[e.backendUrl,u,t]),p=A(async $=>{if(!n)return null;try{let y=`${e.backendUrl}${u}${n.id}/add_task/`,g=await fetch(y,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)}));if(g.ok){let w=await g.json();return await l(),w}else{let w=await g.json().catch(()=>({}));return c(w.error||"Failed to add task"),null}}catch(y){return console.error("[useTasks] Failed to add task:",y),c("Failed to add task"),null}},[e.backendUrl,u,n,t,l]),r=A(async($,y)=>{if(!n)return null;try{let g=`${e.backendUrl}${u}${n.id}/update_task/${$}/`,w=await fetch(g,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}));if(w.ok){let E=await w.json();return await l(),E}else{let E=await w.json().catch(()=>({}));return c(E.error||"Failed to update task"),null}}catch(g){return console.error("[useTasks] Failed to update task:",g),c("Failed to update task"),null}},[e.backendUrl,u,n,t,l]),d=A(async $=>{if(!n)return!1;try{let y=`${e.backendUrl}${u}${n.id}/remove_task/${$}/`,g=await fetch(y,t.getFetchOptions({method:"DELETE"}));if(g.ok)return await l(),!0;{let w=await g.json().catch(()=>({}));return c(w.error||"Failed to remove task"),!1}}catch(y){return console.error("[useTasks] Failed to remove task:",y),c("Failed to remove task"),!1}},[e.backendUrl,u,n,t,l]),_=A(async()=>{if(!n)return!1;try{let $=`${e.backendUrl}${u}${n.id}/clear/`,y=await fetch($,t.getFetchOptions({method:"POST"}));if(y.ok)return await l(),!0;{let g=await y.json().catch(()=>({}));return c(g.error||"Failed to clear tasks"),!1}}catch($){return console.error("[useTasks] Failed to clear tasks:",$),c("Failed to clear tasks"),!1}},[e.backendUrl,u,n,t,l]),m=A(()=>c(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:a,error:i,loadTaskList:l,addTask:p,updateTask:r,removeTask:d,clearTasks:_,clearError:m}}function Rt(e,t,n){let s=p=>!p||typeof p!="object"||e.apiCaseStyle==="camel"?p:we(p),a=p=>!p||typeof p!="object"||e.apiCaseStyle==="snake"?p:$e(p),o=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",i=(p=null)=>{let r=o(),d={},_=p||e.authToken||t().authToken;if(r==="token"&&_){let m=e.authHeader||"Authorization",$=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";d[m]=$?`${$} ${_}`:_}else if(r==="jwt"&&_){let m=e.authHeader||"Authorization",$=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";d[m]=$?`${$} ${_}`:_}else if(r==="anonymous"&&_){let m=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";d[m]=_}if(r==="session"){let m=wt(e.csrfCookieName);m&&(d["X-CSRFToken"]=m)}return d};return{getAuthStrategy:o,getAuthHeaders:i,getFetchOptions:(p={},r=null)=>{let d=o(),_={...p},m=i(r);return console.log("[ChatWidget] getFetchOptions - strategy:",d,"overrideToken:",r,"authHeaders:",m),_.headers={..._.headers,...m},d==="session"&&(_.credentials="include"),_},getOrCreateSession:async(p=!1)=>{let r=o(),d=t(),_=e.anonymousTokenKey||e.sessionTokenKey;if(r!=="anonymous")return e.authToken||d.authToken;if(!p){if(d.authToken)return d.authToken;let m=d.storage?.get(_);if(m)return n($=>({...$,authToken:m})),m}try{let m=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,$=await fetch(`${e.backendUrl}${m}`,{method:"POST",headers:{"Content-Type":"application/json"}});if($.ok){let y=await $.json();return n(g=>({...g,authToken:y.token})),d.storage?.set(_,y.token),y.token}}catch(m){console.warn("[ChatWidget] Failed to create session:",m)}return null},clearSession:()=>{let p=e.anonymousTokenKey||e.sessionTokenKey,r=t();n(d=>({...d,authToken:null})),r.storage?.set(p,null)},transformRequest:s,transformResponse:a}}function Ft({config:e,onStateChange:t,markdownParser:n,apiRef:s}){let[a,o]=C(e.embedded||e.forceOpen===!0),[i,c]=C(!1),[u,l]=C(!1),[p,r]=C(!1),[d,_]=C([]),[m,$]=C("chat"),[y,g]=C(!1),[w,E]=C(e.enableTTS),[O,W]=C(!1),[J,V]=C(null);K(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let B=ie(()=>$t(e.containerId),[e.containerId]),[j,G]=C(e.authToken||null),N=ie(()=>Rt(e,()=>({authToken:j,storage:B}),q=>{let ne=q({authToken:j,storage:B});ne.authToken!==j&&G(ne.authToken)}),[e,j,B]),h=It(e,N,B),S=Dt(e,N,B),M=Pt(e,N);K(()=>{for(let b=h.messages.length-1;b>=0;b--){let D=h.messages[b];if(D.type==="sub_agent_start"){V({key:D.metadata?.subAgentKey,name:D.metadata?.agentName});return}if(D.type==="sub_agent_end"){V(null);return}}},[h.messages]),K(()=>{let b=B.get(e.conversationIdKey);b&&h.loadConversation(b)},[]),K(()=>{t&&t({isOpen:a,isExpanded:i,debugMode:u,messages:h.messages,conversationId:h.conversationId,isLoading:h.isLoading,error:h.error})},[a,i,u,h.messages,h.conversationId,h.isLoading,h.error]);let x=A(async()=>{if(e.showConversationSidebar){g(!0);try{let b=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,D=await fetch(b,N.getFetchOptions({method:"GET"}));if(D.ok){let q=await D.json();_(q.results||q)}}catch(b){console.error("[ChatWidget] Failed to load conversations:",b),_([])}finally{g(!1)}}},[e,N]),T=A(()=>{let b=!p;r(b),b&&x()},[p,x]),I=A(b=>{b!==h.conversationId&&h.loadConversation(b),r(!1)},[h]),k=A(()=>{h.clearMessages(),r(!1)},[h]),P=A(b=>{h.sendMessage(b,{model:S.selectedModel,thinking:S.thinkingEnabled&&S.supportsThinking(),onAssistantMessage:D=>{}})},[h,w,S.selectedModel,S.thinkingEnabled,S.supportsThinking]),R=A(b=>{$(b),b==="tasks"&&M.loadTaskList()},[M]);if(K(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:b=>P(b),clearMessages:()=>h.clearMessages(),toggleTTS:()=>E(b=>!b),stopSpeech:()=>W(!1),setAuth:b=>{b.token!==void 0&&G(b.token)},clearAuth:()=>G(null)})},[h,s,P]),!e.embedded&&!a)return f`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let v=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return f`
    <div class=${v} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&f`
        <${Mt}
          isOpen=${p}
          conversations=${d}
          conversationsLoading=${y}
          currentConversationId=${h.conversationId}
          onClose=${()=>r(!1)}
          onNewConversation=${k}
          onSwitchConversation=${I}
        />
      `}
      
      <${kt}
        config=${e}
        debugMode=${u}
        isExpanded=${i}
        isSpeaking=${O}
        messagesCount=${h.messages.length}
        isLoading=${h.isLoading}
        currentAgent=${J}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!u)}
        onToggleTTS=${()=>E(!w)}
        onClear=${h.clearMessages}
        onToggleSidebar=${T}
      />

      ${e.showTasksTab!==!1&&f`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${m==="chat"?"cw-tab-active":""}`}
            onClick=${()=>R("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${m==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>R("tasks")}
          >
            Tasks ${M.progress.total>0?f`<span class="cw-tab-badge">${M.progress.completed}/${M.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${u&&f`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${m==="chat"?f`
        <${St}
          messages=${h.messages}
          isLoading=${h.isLoading}
          hasMoreMessages=${h.hasMoreMessages}
          loadingMoreMessages=${h.loadingMoreMessages}
          onLoadMore=${h.loadMoreMessages}
          onEditMessage=${h.editMessage}
          onRetryMessage=${h.retryMessage}
          debugMode=${u}
          markdownParser=${n}
          emptyStateTitle=${e.emptyStateTitle}
          emptyStateMessage=${e.emptyStateMessage}
        />

        ${h.error&&f`<div class="cw-error-bar">${h.error}</div>`}

        ${e.showModelSelector&&S.availableModels.length>0&&f`
          <${Et}
            availableModels=${S.availableModels}
            selectedModel=${S.selectedModel}
            onSelectModel=${S.selectModel}
            thinkingEnabled=${S.thinkingEnabled}
            onToggleThinking=${S.toggleThinking}
            disabled=${h.isLoading}
          />
        `}

        <${Tt}
          onSend=${P}
          onCancel=${h.cancelRun}
          isLoading=${h.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:f`
        <${xt}
          tasks=${M.tasks}
          progress=${M.progress}
          isLoading=${M.isLoading}
          error=${M.error}
          onUpdate=${M.updateTask}
          onRemove=${M.removeTask}
          onClear=${M.clearTasks}
          onRefresh=${M.loadTaskList}
        />
      `}
    </div>
  `}var Ht={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Ot(e){let t={...Ht.apiPaths,...e.apiPaths||{}};return{...Ht,...e,apiPaths:t}}var Se=new Map,cn=0,F=null,Ue=class{constructor(t={}){We(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++cn}`,this.config=Ot(t),this.container=null,this._state={},this._apiRef={current:null},Se.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&ye(f`<${Ft}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Te._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(ye(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),Se.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Nt(e={}){return new Ue(e).init()}function un(e={}){return F&&F.destroy(),F=Nt(e),F}function dn(){F&&(F.destroy(),F=null)}function pn(){F&&F.open()}function _n(){F&&F.close()}function hn(e){F&&F.send(e)}function fn(){F&&F.clearMessages()}function mn(){F&&F.toggleTTS()}function gn(){F&&F.stopSpeech()}function yn(e){F&&F.setAuth(e)}function vn(){F&&F.clearAuth()}function $n(){return F?F.getState():null}function wn(){return F?F.getConfig():null}var Te={createInstance:Nt,getInstance:e=>Se.get(e),getAllInstances:()=>Array.from(Se.values()),init:un,destroy:dn,open:pn,close:_n,send:hn,clearMessages:fn,toggleTTS:mn,stopSpeech:gn,setAuth:yn,clearAuth:vn,getState:$n,getConfig:wn,_enhancedMarkdownParser:null};var kn=Te;typeof window<"u"&&(window.ChatWidget=Te);return Jt(bn);})();
