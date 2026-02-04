var ChatWidgetModule=(()=>{var de=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Bt=Object.prototype.hasOwnProperty;var jt=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var zt=(e,t)=>{for(var n in t)de(e,n,{get:t[n],enumerable:!0})},Jt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Kt(t))!Bt.call(e,a)&&a!==n&&de(e,a,{get:()=>t[a],enumerable:!(s=Ut(t,a))||s.enumerable});return e};var Vt=e=>Jt(de({},"__esModule",{value:!0}),e);var Be=(e,t,n)=>(jt(e,typeof t!="symbol"?t+"":t,n),n);var Sn={};zt(Sn,{ChatWidget:()=>Me,default:()=>Cn});var fe,H,qe,qt,te,je,Ge,Xe,Qe,Pe,xe,Ee,Gt,oe={},Ye=[],Xt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;function Y(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t,n){var s,a,o,i={};for(o in t)o=="key"?s=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?fe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return _e(e,i,s,a,null)}function _e(e,t,n,s,a){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++qe,__i:-1,__u:0};return a==null&&H.vnode!=null&&H.vnode(o),o}function ye(e){return e.children}function se(e,t){this.props=e,this.context=t}function ne(e,t){if(t==null)return e.__?ne(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ne(e):null}function Ze(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ze(e)}}function ze(e){(!e.__d&&(e.__d=!0)&&te.push(e)&&!he.__r++||je!=H.debounceRendering)&&((je=H.debounceRendering)||Ge)(he)}function he(){for(var e,t,n,s,a,o,i,c=1;te.length;)te.length>c&&te.sort(Xe),e=te.shift(),c=te.length,e.__d&&(n=void 0,s=void 0,a=(s=(t=e).__v).__e,o=[],i=[],t.__P&&((n=Y({},s)).__v=s.__v+1,H.vnode&&H.vnode(n),Re(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[a]:null,o,a??ne(s),!!(32&s.__u),i),n.__v=s.__v,n.__.__k[n.__i]=n,nt(o,n,i),s.__e=s.__=null,n.__e!=a&&Ze(n)));he.__r=0}function et(e,t,n,s,a,o,i,c,u,l,p){var r,d,h,m,w,y,g,k=s&&s.__k||Ye,E=t.length;for(u=Qt(n,t,k,u,E),r=0;r<E;r++)(h=n.__k[r])!=null&&(d=h.__i==-1?oe:k[h.__i]||oe,h.__i=r,y=Re(e,h,d,a,o,i,c,u,l,p),m=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&De(d.ref,null,h),p.push(h.ref,h.__c||m,h)),w==null&&m!=null&&(w=m),(g=!!(4&h.__u))||d.__k===h.__k?u=tt(h,u,e,g):typeof h.type=="function"&&y!==void 0?u=y:m&&(u=m.nextSibling),h.__u&=-7);return n.__e=w,u}function Qt(e,t,n,s,a){var o,i,c,u,l,p=n.length,r=p,d=0;for(e.__k=new Array(a),o=0;o<a;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[o]=_e(null,i,null,null,null):me(i)?i=e.__k[o]=_e(ye,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[o]=_e(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[o]=i,u=o+d,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Yt(i,n,u,r))!=-1&&(r--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(a>p?d--:a<p&&d++),typeof i.type!="function"&&(i.__u|=4)):l!=u&&(l==u-1?d--:l==u+1?d++:(l>u?d--:d++,i.__u|=4))):e.__k[o]=null;if(r)for(o=0;o<p;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=ne(c)),ot(c,c));return s}function tt(e,t,n,s){var a,o;if(typeof e.type=="function"){for(a=e.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=e,t=tt(a[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=ne(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Yt(e,t,n,s){var a,o,i,c=e.key,u=e.type,l=t[n],p=l!=null&&(2&l.__u)==0;if(l===null&&c==null||p&&c==l.key&&u==l.type)return n;if(s>(p?1:0)){for(a=n-1,o=n+1;a>=0||o<t.length;)if((l=t[i=a>=0?a--:o++])!=null&&!(2&l.__u)&&c==l.key&&u==l.type)return i}return-1}function Je(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Xt.test(t)?n:n+"px"}function pe(e,t,n,s,a){var o,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Je(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Je(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Qe,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=Pe,e.addEventListener(t,o?Ee:xe,o)):e.removeEventListener(t,o?Ee:xe,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ve(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Pe++;else if(t.t<n.u)return;return n(H.event?H.event(t):t)}}}function Re(e,t,n,s,a,o,i,c,u,l){var p,r,d,h,m,w,y,g,k,E,O,B,V,q,j,z,G,N=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[c=t.__e=n.__e]),(p=H.__b)&&p(t);e:if(typeof N=="function")try{if(g=t.props,k="prototype"in N&&N.prototype.render,E=(p=N.contextType)&&s[p.__c],O=p?E?E.props.value:p.__:s,n.__c?y=(r=t.__c=n.__c).__=r.__E:(k?t.__c=r=new N(g,O):(t.__c=r=new se(g,O),r.constructor=N,r.render=en),E&&E.sub(r),r.state||(r.state={}),r.__n=s,d=r.__d=!0,r.__h=[],r._sb=[]),k&&r.__s==null&&(r.__s=r.state),k&&N.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Y({},r.__s)),Y(r.__s,N.getDerivedStateFromProps(g,r.__s))),h=r.props,m=r.state,r.__v=t,d)k&&N.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),k&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k&&N.getDerivedStateFromProps==null&&g!==h&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,O),t.__v==n.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,O)===!1){for(t.__v!=n.__v&&(r.props=g,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(_){_&&(_.__=t)}),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,O),k&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(h,m,w)})}if(r.context=O,r.props=g,r.__P=e,r.__e=!1,V=H.__r,q=0,k){for(r.state=r.__s,r.__d=!1,V&&V(t),p=r.render(r.props,r.state,r.context),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[]}else do r.__d=!1,V&&V(t),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++q<25);r.state=r.__s,r.getChildContext!=null&&(s=Y(Y({},s),r.getChildContext())),k&&!d&&r.getSnapshotBeforeUpdate!=null&&(w=r.getSnapshotBeforeUpdate(h,m)),z=p,p!=null&&p.type===ye&&p.key==null&&(z=st(p.props.children)),c=et(e,me(z)?z:[z],t,n,s,a,o,i,c,u,l),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),y&&(r.__E=r.__=null)}catch(_){if(t.__v=null,u||o!=null)if(_.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(G=o.length;G--;)Ae(o[G]);Ie(t)}else t.__e=n.__e,t.__k=n.__k,_.then||Ie(t);H.__e(_,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Zt(n.__e,t,n,s,a,o,i,u,l);return(p=H.diffed)&&p(t),128&t.__u?void 0:c}function Ie(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ie)}function nt(e,t,n){for(var s=0;s<n.length;s++)De(n[s],n[++s],n[++s]);H.__c&&H.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){H.__e(o,a.__v)}})}function st(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:me(e)?e.map(st):Y({},e)}function Zt(e,t,n,s,a,o,i,c,u){var l,p,r,d,h,m,w,y=n.props||oe,g=t.props,k=t.type;if(k=="svg"?a="http://www.w3.org/2000/svg":k=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((h=o[l])&&"setAttribute"in h==!!k&&(k?h.localName==k:h.nodeType==3)){e=h,o[l]=null;break}}if(e==null){if(k==null)return document.createTextNode(g);e=document.createElementNS(a,k,g.is&&g),c&&(H.__m&&H.__m(t,o),c=!1),o=null}if(k==null)y===g||c&&e.data==g||(e.data=g);else{if(o=o&&fe.call(e.childNodes),!c&&o!=null)for(y={},l=0;l<e.attributes.length;l++)y[(h=e.attributes[l]).name]=h.value;for(l in y)if(h=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=h;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;pe(e,l,null,h,a)}}for(l in g)h=g[l],l=="children"?d=h:l=="dangerouslySetInnerHTML"?p=h:l=="value"?m=h:l=="checked"?w=h:c&&typeof h!="function"||y[l]===h||pe(e,l,h,y[l],a);if(p)c||r&&(p.__html==r.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(r&&(e.innerHTML=""),et(t.type=="template"?e.content:e,me(d)?d:[d],t,n,s,k=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&ne(n,0),c,u),o!=null)for(l=o.length;l--;)Ae(o[l]);c||(l="value",k=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[l]||k=="progress"&&!m||k=="option"&&m!=y[l])&&pe(e,l,m,y[l],a),l="checked",w!=null&&w!=e[l]&&pe(e,l,w,y[l],a))}return e}function De(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(a){H.__e(a,n)}}function ot(e,t,n){var s,a;if(H.unmount&&H.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||De(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){H.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&ot(s[a],t,n||typeof e.type!="function");n||Ae(e.__e),e.__c=e.__=e.__e=void 0}function en(e,t,n){return this.constructor(e,n)}function ve(e,t,n){var s,a,o,i;t==document&&(t=document.documentElement),H.__&&H.__(e,t),a=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],Re(t,e=(!s&&n||t).__k=ge(ye,null,[e]),a||oe,oe,t.namespaceURI,!s&&n?[n]:a?null:t.firstChild?fe.call(t.childNodes):null,o,!s&&n?n:a?a.__e:t.firstChild,s,i),nt(o,e,i)}fe=Ye.slice,H={__e:function(e,t,n,s){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,s||{}),i=a.__d),i)return a.__E=a}catch(c){e=c}throw e}},qe=0,qt=function(e){return e!=null&&e.constructor===void 0},se.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y({},this.state),typeof e=="function"&&(e=e(Y({},n),this.props)),e&&Y(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ze(this))},se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ze(this))},se.prototype.render=ye,te=[],Ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xe=function(e,t){return e.__v.__b-t.__v.__b},he.__r=0,Qe=/(PointerCapture)$|Capture$/i,Pe=0,xe=Ve(!1),Ee=Ve(!0),Gt=0;var rt=function(e,t,n,s){var a;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];i===3?s[0]=c:i===4?s[1]=Object.assign(s[1]||{},c):i===5?(s[1]=s[1]||{})[t[++o]]=c:i===6?s[1][t[++o]]+=c+"":i?(a=e.apply(c,rt(e,c,n,["",null])),s.push(a),c[0]?t[0]|=2:(t[o-2]=0,t[o]=a)):s.push(c)}return s},at=new Map;function it(e){var t=at.get(this);return t||(t=new Map,at.set(this,t)),(t=rt(this,t.get(e)||(t.set(e,t=function(n){for(var s,a,o=1,i="",c="",u=[0],l=function(d){o===1&&(d||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,d,i):o===3&&(d||i)?(u.push(3,d,i),o=2):o===2&&i==="..."&&d?u.push(4,d,0):o===2&&i&&!d?u.push(5,0,!0,i):o>=5&&((i||!d&&o===5)&&(u.push(o,0,i,a),o=6),d&&(u.push(o,d,0,a),o=6)),i=""},p=0;p<n.length;p++){p&&(o===1&&l(),l(p));for(var r=0;r<n[p].length;r++)s=n[p][r],o===1?s==="<"?(l(),u=[u],o=3):i+=s:o===4?i==="--"&&s===">"?(o=1,i=""):i=s+i[0]:c?s===c?c="":i+=s:s==='"'||s==="'"?c=s:s===">"?(l(),o=1):o&&(s==="="?(o=5,a=i,i=""):s==="/"&&(o<5||n[p][r+1]===">")?(l(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),o=2):i+=s),o===3&&i==="!--"&&(o=4,u=u[0])}return l(),u}(e)),t),arguments,[])).length>1?t:t[0]}var f=it.bind(ge);var ae,W,Fe,lt,re=0,mt=[],U=H,ct=U.__b,ut=U.__r,dt=U.diffed,pt=U.__c,_t=U.unmount,ht=U.__;function Oe(e,t){U.__h&&U.__h(W,e,re||t),re=0;var n=W.__H||(W.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return re=1,tn(yt,e)}function tn(e,t,n){var s=Oe(ae++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):yt(void 0,t),function(c){var u=s.__N?s.__N[0]:s.__[0],l=s.t(u,c);u!==l&&(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=W,!W.__f)){var a=function(c,u,l){if(!s.__c.__H)return!0;var p=s.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!o||o.call(this,c,u,l);var r=s.__c.props!==c;return p.forEach(function(d){if(d.__N){var h=d.__[0];d.__=d.__N,d.__N=void 0,h!==d.__[0]&&(r=!0)}}),o&&o.call(this,c,u,l)||r};W.__f=!0;var o=W.shouldComponentUpdate,i=W.componentWillUpdate;W.componentWillUpdate=function(c,u,l){if(this.__e){var p=o;o=void 0,a(c,u,l),o=p}i&&i.call(this,c,u,l)},W.shouldComponentUpdate=a}return s.__N||s.__}function K(e,t){var n=Oe(ae++,3);!U.__s&&gt(n.__H,t)&&(n.__=e,n.u=t,W.__H.__h.push(n))}function X(e){return re=5,ie(function(){return{current:e}},[])}function ie(e,t){var n=Oe(ae++,7);return gt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function A(e,t){return re=8,ie(function(){return e},t)}function nn(){for(var e;e=mt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(we),e.__H.__h.forEach(He),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}U.__b=function(e){W=null,ct&&ct(e)},U.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ht&&ht(e,t)},U.__r=function(e){ut&&ut(e),ae=0;var t=(W=e.__c).__H;t&&(Fe===W?(t.__h=[],W.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(we),t.__h.forEach(He),t.__h=[],ae=0)),Fe=W},U.diffed=function(e){dt&&dt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(mt.push(t)!==1&&lt===U.requestAnimationFrame||((lt=U.requestAnimationFrame)||sn)(nn)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Fe=W=null},U.__c=function(e,t){t.some(function(n){try{n.__h.forEach(we),n.__h=n.__h.filter(function(s){return!s.__||He(s)})}catch(s){t.some(function(a){a.__h&&(a.__h=[])}),t=[],U.__e(s,n.__v)}}),pt&&pt(e,t)},U.unmount=function(e){_t&&_t(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{we(s)}catch(a){t=a}}),n.__H=void 0,t&&U.__e(t,n.__v))};var ft=typeof requestAnimationFrame=="function";function sn(e){var t,n=function(){clearTimeout(s),ft&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);ft&&(t=requestAnimationFrame(n))}function we(e){var t=W,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),W=t}function He(e){var t=W;e.__c=e.__(),W=t}function gt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function yt(e,t){return typeof t=="function"?t(e):t}function on(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function Ne(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function $e(e){return Array.isArray(e)?e.map($e):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[on(t),$e(n)])):e}function ke(e){return Array.isArray(e)?e.map(ke):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Ne(t),ke(n)])):e}function be(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function J(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function vt(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,a=Math.floor(s/6e4),o=Math.floor(s/36e5),i=Math.floor(s/864e5);return a<1?"Just now":a<60?`${a}m ago`:o<24?`${o}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function wt(e,t=null){if(t)return t(e);let n=J(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function $t(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let a=t(n);s===null?localStorage.removeItem(a):localStorage.setItem(a,s)}catch{}}}}function kt(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[a,o]=s.trim().split("=");if(a===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function Ce(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(1))+" "+n[s]}function Se(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function an(e){if(!e||typeof e!="string")return 0;let t=e.replace("#","");if(t.length!==6&&t.length!==3)return 0;let n=t.length===3?t.split("").map(c=>c+c).join(""):t,s=parseInt(n.substr(0,2),16)/255,a=parseInt(n.substr(2,2),16)/255,o=parseInt(n.substr(4,2),16)/255,i=c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);return .2126*i(s)+.7152*i(a)+.0722*i(o)}function bt(e){return an(e)>.179?"#000000":"#ffffff"}function Ct({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:a,isLoading:o,currentAgent:i,onClose:c,onToggleExpand:u,onToggleDebug:l,onToggleTTS:p,onClear:r,onToggleSidebar:d}){let{title:h,primaryColor:m,embedded:w,showConversationSidebar:y,showClearButton:g,showDebugButton:k,enableDebugMode:E,showTTSButton:O,showExpandButton:B,enableTTS:V,elevenLabsApiKey:q,ttsProxyUrl:j}=e,z=q||j;return f`
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
        <span class="cw-title">${J(h)}</span>
        ${i&&f`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${J(i.name||i.key)}</span>
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
        
        ${k&&E&&f`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${O&&z&&f`
          <button 
            class="cw-header-btn ${V?"cw-btn-active":""}" 
            onClick=${p}
            title="TTS"
          >${V?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${B&&!w&&f`
          <button 
            class="cw-header-btn" 
            onClick=${u}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!w&&f`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Le({msg:e,show:t,onToggle:n}){return t?f`
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
    `}function St({onEdit:e,onRetry:t,isLoading:n,position:s,showEdit:a=!0}){return n?null:f`
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
  `}function rn({initialContent:e,onSave:t,onCancel:n}){let[s,a]=C(e),o=X(null);return K(()=>{o.current&&(o.current.focus(),o.current.setSelectionRange(s.length,s.length),o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},[]),f`
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
  `}function Tt({msg:e,debugMode:t,markdownParser:n,onEdit:s,onRetry:a,isLoading:o,messageIndex:i}){let[c,u]=C(!1),[l,p]=C(!1),[r,d]=C(!1),h=e.role==="user",m=e.role==="system",w=e.type==="tool_call",y=e.type==="tool_result",g=e.type==="error",k=e.type==="sub_agent_start",E=e.type==="sub_agent_end",O=e.type==="agent_context";if(m&&!t)return null;if(k||E||O)return f`
      <div class="cw-agent-context ${k?"cw-agent-delegating":""} ${E?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${k?"\u{1F517}":E?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&f`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&f`<${Le} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
      </div>
    `;if(w||y){let S=e.metadata?.arguments||e.metadata?.result,I=$=>{if(typeof $=="string")try{return JSON.stringify(JSON.parse($),null,2)}catch{return $}return JSON.stringify($,null,2)};return f`
      <div class="cw-tool-message ${y?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>S&&u(!c)}>
          ${e.content}
          ${S&&f`<span class="cw-tool-expand">${c?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${c&&S&&f`
          <pre class="cw-tool-details">${J(I(w?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&f`<${Le} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
      </div>
    `}let B=["cw-message",h&&"cw-message-user",g&&"cw-message-error"].filter(Boolean).join(" "),V=`cw-message-row ${h?"cw-message-row-user":""}`,q=e.role==="assistant"?wt(e.content,n):J(e.content),j=e.files&&e.files.length>0,z=()=>j?f`
      <div class="cw-message-attachments">
        ${e.files.map(S=>S.type&&S.type.startsWith("image/")?f`
              <a class="cw-attachment-thumbnail" href=${S.url} target="_blank" title=${S.name}>
                <img src=${S.url} alt=${S.name} />
              </a>
            `:f`
            <a class="cw-attachment-file" href=${S.url} target="_blank" title=${S.name}>
              <span class="cw-attachment-icon">${Se(S.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${S.name}</span>
                <span class="cw-attachment-size">${Ce(S.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,G=S=>{d(!1),s&&s(i,S)},N=()=>{a&&a(i)};if(h&&r)return f`
      <div class=${V} style="position: relative;">
        ${z()}
        <${rn}
          initialContent=${e.content}
          onSave=${G}
          onCancel=${()=>d(!1)}
        />
      </div>
    `;let _=h&&s&&a,M=e.role==="assistant"&&a&&!o;return f`
    <div class="${V} ${_||M?"cw-message-row-with-actions":""}">
      ${z()}
      ${_&&f`
        <div class="cw-user-actions-wrapper">
          <${St}
            onEdit=${()=>d(!0)}
            onRetry=${N}
            isLoading=${o}
            position="left"
            showEdit=${!0}
          />
          <div class=${B} dangerouslySetInnerHTML=${{__html:q}} />
        </div>
      `}
      ${!_&&f`
        <div class=${B} dangerouslySetInnerHTML=${{__html:q}} />
      `}
      ${M&&f`
        <${St}
          onRetry=${N}
          isLoading=${o}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&f`<${Le} msg=${e} show=${l} onToggle=${()=>p(!l)} />`}
    </div>
  `}function Mt({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:a,onEditMessage:o,onRetryMessage:i,debugMode:c,markdownParser:u,emptyStateTitle:l,emptyStateMessage:p}){let r=X(null),d=X(!0),h=w=>{let y=w.target,g=y.scrollHeight-y.scrollTop-y.clientHeight<100;if(d.current=g,y.scrollTop<50&&n&&!s){let k=y.scrollHeight;a().then(()=>{let E=y.scrollHeight;y.scrollTop=E-k+y.scrollTop})}};K(()=>{let w=r.current;w&&d.current&&requestAnimationFrame(()=>{w.scrollTop=w.scrollHeight})},[e,t]),K(()=>{let w=r.current;w&&e.length<=2&&(d.current=!0,requestAnimationFrame(()=>{w.scrollTop=w.scrollHeight}))},[e.length]);let m=e.length===0;return f`
    <div class="cw-messages" ref=${r} onScroll=${h}>
      ${m&&f`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${J(l)}</h3>
          <p>${J(p)}</p>
        </div>
      `}
      
      ${!m&&n&&f`
        <div class="cw-load-more" onClick=${a}>
          ${s?f`<span class="cw-spinner"></span><span>Loading...</span>`:f`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((w,y)=>f`
        <${Tt}
          key=${w.id}
          msg=${w}
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
  `}var We=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function xt({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:a,enableVoice:o=!0,enableFiles:i=!0}){let[c,u]=C(""),[l,p]=C([]),[r,d]=C(!1),[h,m]=C(!1),[w]=C(()=>!!We),y=X(null),g=X(null),k=X(null),E=X(!1);K(()=>{!n&&y.current&&y.current.focus()},[n]),K(()=>{y.current&&(y.current.style.height="auto",y.current.style.height=Math.min(y.current.scrollHeight,150)+"px")},[c]),K(()=>()=>{E.current=!1,k.current&&k.current.abort()},[]);let O=$=>{$.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),u(""),p([]),y.current&&(y.current.style.height="auto"),g.current&&(g.current.value=""))},B=$=>{let R=Array.from($.target.files||[]);R.length>0&&p(D=>[...D,...R])},V=$=>{p(R=>R.filter((D,v)=>v!==$))},q=$=>{$.preventDefault(),g.current&&!n&&g.current.click()},j=$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),O($))},z=$=>{n&&t&&($.preventDefault(),t())},G=()=>{if(!We||n)return;E.current=!0;let $=new We;$.continuous=!0,$.interimResults=!0,$.lang=navigator.language||"en-US";let R=c,D="";$.onstart=()=>{m(!0)},$.onresult=v=>{D="";for(let P=v.resultIndex;P<v.results.length;P++){let b=v.results[P][0].transcript;v.results[P].isFinal?R+=(R?" ":"")+b:D+=b}u(R+(D?" "+D:""))},$.onerror=v=>{if(v.error==="no-speech"||v.error==="aborted"){console.log("[ChatWidget] Speech recognition:",v.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",v.error),E.current=!1,m(!1),u(R||c)},$.onend=()=>{if(E.current){console.log("[ChatWidget] Recognition paused, restarting...");try{$.start();return}catch(v){console.warn("[ChatWidget] Could not restart recognition:",v)}}m(!1),R&&u(R),k.current=null},k.current=$,$.start()},N=()=>{E.current=!1,k.current&&k.current.stop()},_=$=>{$.preventDefault(),h?N():G()},T=f`
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
  `,S=o&&w,I=i;return f`
    <form class="cw-input-form" onSubmit=${O}>
      <input
        type="file"
        ref=${g}
        style="display: none"
        multiple
        onChange=${B}
      />
      ${l.length>0&&f`
        <div class="cw-file-chips">
          ${l.map(($,R)=>f`
            <div class="cw-file-chip" key=${R}>
              <span class="cw-file-chip-icon">${Se($.type)}</span>
              <span class="cw-file-chip-name" title=${$.name}>${$.name.length>20?$.name.substring(0,17)+"...":$.name}</span>
              <span class="cw-file-chip-size">(${Ce($.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>V(R)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${y}
        class="cw-input"
        placeholder=${J(s)}
        value=${c}
        onInput=${$=>u($.target.value)}
        onKeyDown=${j}
        disabled=${n}
        rows="1"
      />
      ${I&&f`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${q}
          disabled=${n}
          title="Attach files"
        >
          ${x}
        </button>
      `}
      ${S&&f`
        <button
          type="button"
          class=${`cw-voice-btn ${h?"cw-voice-btn-recording":""}`}
          onClick=${_}
          disabled=${n}
          title=${h?"Stop recording":"Voice input"}
        >
          ${M}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&r?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&r?"#dc2626":a}}
        onClick=${z}
        onMouseEnter=${()=>d(!0)}
        onMouseLeave=${()=>d(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?r?T:f`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function Et({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:s,onClose:a,onNewConversation:o,onSwitchConversation:i}){return f`
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
            <div class="cw-conversation-title">${J(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${vt(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${a}
    />
  `}function It({availableModels:e,selectedModel:t,onSelectModel:n,thinkingEnabled:s,onToggleThinking:a,disabled:o}){let[i,c]=C(!1);if(!e||e.length===0)return null;let u=e.find(m=>m.id===t),l=u?.name||"Select Model",p=u?.supports_thinking||!1,r=()=>{o||c(!i)},d=m=>{n(m),c(!1)},h=m=>{m.stopPropagation(),a&&p&&a(!s)};return f`
    <div class="cw-model-selector">
      <button
        class="cw-model-btn"
        onClick=${r}
        disabled=${o}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${J(l)}</span>
        <span class="cw-model-chevron">${i?"\u25B2":"\u25BC"}</span>
      </button>

      ${p&&a&&f`
        <button
          class="cw-thinking-toggle ${s?"cw-thinking-enabled":""}"
          onClick=${h}
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
                ${J(m.name)}
                ${m.supports_thinking&&f`<span class="cw-thinking-badge" title="Supports extended thinking">🧠</span>`}
              </span>
              <span class="cw-model-option-provider">${J(m.provider)}</span>
              ${m.description&&f`
                <span class="cw-model-option-desc">${J(m.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var ln={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},cn={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function un({task:e,onUpdate:t,onRemove:n,depth:s=0}){let[a,o]=C(!1),[i,c]=C(e.name),u=A(()=>{let d={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:d[e.state]||"not_started"})},[e,t]),l=A(()=>{i.trim()&&i!==e.name&&t(e.id,{name:i.trim()}),o(!1)},[e,i,t]),p=A(d=>{d.key==="Enter"&&l(),d.key==="Escape"&&(c(e.name),o(!1))},[l,e.name]),r=`cw-task-state-${e.state.replace("_","-")}`;return f`
    <div class="cw-task-item ${r}" style=${{paddingLeft:`${s*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${u}
        title=${cn[e.state]}
      >
        ${ln[e.state]}
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
  `}function Pt({tasks:e,progress:t,isLoading:n,error:s,onUpdate:a,onRemove:o,onClear:i,onRefresh:c}){let u=A(r=>{let d=new Map,h=[];return r.forEach(m=>{d.set(m.id,{...m,children:[]})}),r.forEach(m=>{let w=d.get(m.id);m.parent_id&&d.has(m.parent_id)?d.get(m.parent_id).children.push(w):h.push(w)}),h},[]),l=A((r,d=0)=>f`
      <${un}
        key=${r.id}
        task=${r}
        depth=${d}
        onUpdate=${a}
        onRemove=${o}
      />
      ${r.children?.map(h=>l(h,d+1))}
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
  `}function At(e,t,n){let[s,a]=C([]),[o,i]=C(!1),[c,u]=C(null),[l,p]=C(()=>n?.get(e.conversationIdKey)||null),[r,d]=C(!1),[h,m]=C(!1),[w,y]=C(0),g=X(null),k=X(null);K(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let E=A(async(_,T,M)=>{g.current&&g.current.close();let x=e.apiPaths.runEvents.replace("{runId}",_),S=`${e.backendUrl}${x}`;T&&(S+=`?anonymous_token=${encodeURIComponent(T)}`);let I=new EventSource(S);g.current=I;let $="";I.addEventListener("assistant.message",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("assistant.message",v.payload);let P=v.payload.content;P&&($+=P,a(b=>{let L=b[b.length-1];return L?.role==="assistant"&&L.id.startsWith("assistant-stream-")?[...b.slice(0,-1),{...L,content:$}]:[...b,{id:"assistant-stream-"+Date.now(),role:"assistant",content:$,timestamp:new Date,type:"message"}]}))}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("tool.call",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("tool.call",v.payload),a(P=>[...P,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${v.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:v.payload.name,arguments:v.payload.arguments,toolCallId:v.payload.id}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("tool.result",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("tool.result",v.payload);let P=v.payload.result,b=P?.error;a(L=>[...L,{id:"tool-result-"+Date.now(),role:"system",content:b?`\u274C ${P.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:v.payload.name,result:P,toolCallId:v.payload.tool_call_id}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("custom",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("custom",v.payload),v.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(v.payload),v.payload?.type==="agent_context"&&a(P=>[...P,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${v.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:v.payload.agent_key,agentName:v.payload.agent_name,action:v.payload.action}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("sub_agent.start",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("sub_agent.start",v.payload),a(P=>[...P,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${v.payload.agent_name||v.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:v.payload.sub_agent_key,agentName:v.payload.agent_name,invocationMode:v.payload.invocation_mode}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}}),I.addEventListener("sub_agent.end",D=>{try{let v=JSON.parse(D.data);e.onEvent&&e.onEvent("sub_agent.end",v.payload),a(P=>[...P,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${v.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:v.payload.sub_agent_key,agentName:v.payload.agent_name}}])}catch(v){console.error("[ChatWidget] Parse error:",v)}});let R=D=>{try{let v=JSON.parse(D.data);if(e.onEvent&&e.onEvent(v.type,v.payload),v.type==="run.failed"){let P=v.payload.error||"Agent run failed";u(P),a(b=>[...b,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${P}`,timestamp:new Date,type:"error"}])}}catch(v){console.error("[ChatWidget] Parse error:",v)}i(!1),I.close(),g.current=null,$&&M&&M($)};I.addEventListener("run.succeeded",R),I.addEventListener("run.failed",R),I.addEventListener("run.cancelled",R),I.addEventListener("run.timed_out",R),I.onerror=()=>{i(!1),I.close(),g.current=null}},[e]),O=A(async(_,T={},M={})=>{if(!_.trim()||o)return;let x=[],S={};typeof T=="function"?S={onAssistantMessage:T}:Array.isArray(T)?(x=T,S=M):S=T||{};let{model:I,thinking:$,onAssistantMessage:R,supersedeFromMessageIndex:D}=S;i(!0),u(null);let v={id:be(),role:"user",content:_.trim(),timestamp:new Date,type:"message",files:x.length>0?x.map(P=>({name:P.name,size:P.size,type:P.type})):void 0};a(P=>[...P,v]);try{let P=await t.getOrCreateSession(),b;if(x.length>0){let Q=e.apiCaseStyle!=="camel",Ke=ue=>Q?Ne(ue):ue,Z=new FormData;Z.append(Ke("agentKey"),e.agentKey),l&&Z.append(Ke("conversationId"),l),Z.append("messages",JSON.stringify([{role:"user",content:_.trim()}])),Z.append("metadata",JSON.stringify(Q?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),I&&Z.append("model",I),$&&Z.append("thinking","true"),x.forEach(ue=>{Z.append("files",ue)}),b=t.getFetchOptions({method:"POST",body:Z},P)}else{let Q=t.transformRequest({agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:_.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...I&&{model:I},...$&&{thinking:!0},...D!==void 0&&{supersedeFromMessageIndex:D}});b=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)},P)}let L=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,b),ee=P;if(L.status===401){t.clearSession();let Q=await t.getOrCreateSession(!0);Q&&(ee=Q,x.length>0?b=t.getFetchOptions({method:"POST",body:b.body},Q):b=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:b.body},Q),L=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,b))}if(!L.ok){let Q=await L.json().catch(()=>({}));throw new Error(Q.error||Q.detail||`HTTP ${L.status}`)}let le=await L.json(),ce=t.transformResponse(le);k.current=ce.id,!l&&ce.conversationId&&p(ce.conversationId),await E(ce.id,ee,R)}catch(P){u(P.message||"Failed to send message"),i(!1)}finally{k.current=null}},[e,t,l,o,E]),B=A(async()=>{let _=k.current;if(!(!_||!o))try{let T=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",_):`${e.apiPaths.runs}${_}/cancel/`;(await fetch(`${e.backendUrl}${T}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),i(!1),k.current=null,a(x=>[...x,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(T){console.error("[ChatWidget] Failed to cancel run:",T)}},[e,t,o]),V=A(()=>{a([]),p(null),u(null),d(!1),y(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),q=_=>{let T={id:be(),role:_.role,timestamp:_.timestamp?new Date(_.timestamp):new Date};if(_.role==="tool")return{...T,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:_.content,toolCallId:_.toolCallId}};if(_.role==="assistant"&&_.toolCalls&&_.toolCalls.length>0)return _.toolCalls.map(x=>({id:be(),role:"assistant",content:`\u{1F527} ${x.function?.name||x.name||"tool"}`,timestamp:T.timestamp,type:"tool_call",metadata:{toolName:x.function?.name||x.name,arguments:x.function?.arguments||x.arguments,toolCallId:x.id}}));let M=typeof _.content=="string"?_.content:JSON.stringify(_.content);return _.role==="assistant"&&!M?.trim()?null:{...T,content:M,type:"message"}},j=A(async _=>{console.log("[ChatWidget] loadConversation called with:",_),i(!0),a([]),p(_);try{let T=await t.getOrCreateSession(),x=`${e.backendUrl}${e.apiPaths.conversations}${_}/?limit=10&offset=0`;console.log("[ChatWidget] Fetching conversation from:",x);let S=await fetch(x,t.getFetchOptions({method:"GET"},T));if(console.log("[ChatWidget] Response status:",S.status),S.ok){let I=await S.json();console.log("[ChatWidget] Raw conversation:",I);let $=t.transformResponse(I);if(console.log("[ChatWidget] Transformed conversation:",$),$.messages){let R=$.messages.flatMap(q).filter(Boolean);console.log("[ChatWidget] Mapped messages:",R),a(R)}d($.hasMore||!1),y($.messages?.length||0)}else S.status===404?(console.log("[ChatWidget] Conversation not found, clearing"),p(null),n?.set(e.conversationIdKey,null)):console.error("[ChatWidget] Unexpected response status:",S.status)}catch(T){console.error("[ChatWidget] Failed to load conversation:",T)}finally{i(!1)}},[e,t,n]),z=A(async()=>{if(!(!l||h||!r)){m(!0);try{let _=await t.getOrCreateSession(),M=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${w}`,x=await fetch(M,t.getFetchOptions({method:"GET"},_));if(x.ok){let S=await x.json(),I=t.transformResponse(S);if(I.messages?.length>0){let $=I.messages.flatMap(q).filter(Boolean);a(R=>[...$,...R]),y(R=>R+I.messages.length),d(I.hasMore||!1)}else d(!1)}}catch(_){console.error("[ChatWidget] Failed to load more messages:",_)}finally{m(!1)}}},[e,t,l,w,h,r]),G=A(async(_,T,M={})=>{if(o)return;let x=s[_];if(!x||x.role!=="user")return;let S=s.slice(0,_);a(S),await O(T,{...M,supersedeFromMessageIndex:_})},[s,o,O]),N=A(async(_,T={})=>{if(o)return;let M=s[_];if(!M)return;let x=_,S=M;if(M.role==="assistant"){for(let $=_-1;$>=0;$--)if(s[$].role==="user"){x=$,S=s[$];break}if(S.role!=="user")return}else if(M.role!=="user")return;let I=s.slice(0,x);a(I),await O(S.content,{...T,supersedeFromMessageIndex:x})},[s,o,O]);return K(()=>()=>{g.current&&g.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:l,hasMoreMessages:r,loadingMoreMessages:h,sendMessage:O,cancelRun:B,clearMessages:V,loadConversation:j,loadMoreMessages:z,setConversationId:p,editMessage:G,retryMessage:N}}var Rt="cw_thinking_enabled";function Dt(e,t,n){let[s,a]=C([]),[o,i]=C(null),[c,u]=C(null),[l,p]=C(!1),[r,d]=C(!1);K(()=>{(async()=>{if(e.showModelSelector){p(!0);try{let k=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(k.ok){let E=await k.json(),O=E.models||[];a(O),u(E.default);let B=n?.get(e.modelKey);B&&O.some(q=>q.id===B)?i(B):i(E.default),n?.get(Rt)==="true"&&d(!0)}}catch(k){console.warn("[ChatWidget] Failed to load models:",k)}finally{p(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let h=A(g=>{i(g),n?.set(e.modelKey,g)},[e.modelKey,n]),m=A(g=>{d(g),n?.set(Rt,g?"true":"false")},[n]),w=A(()=>s.find(g=>g.id===o)||null,[s,o]),y=A(()=>w()?.supports_thinking||!1,[w]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:l,selectModel:h,getSelectedModelInfo:w,thinkingEnabled:r,toggleThinking:m,supportsThinking:y}}function Ft(e,t){let[n,s]=C(null),[a,o]=C(!1),[i,c]=C(null),u=e.apiPaths?.tasks||"/api/agent/tasks/",l=A(async()=>{o(!0),c(null);try{let w=`${e.backendUrl}${u}`,y=await fetch(w,t.getFetchOptions({method:"GET"}));if(y.ok){let g=await y.json();s(g)}else{let g=await y.json().catch(()=>({}));c(g.error||"Failed to load tasks")}}catch(w){console.error("[useTasks] Failed to load task list:",w),c("Failed to load tasks")}finally{o(!1)}},[e.backendUrl,u,t]),p=A(async w=>{if(!n)return null;try{let y=`${e.backendUrl}${u}${n.id}/add_task/`,g=await fetch(y,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}));if(g.ok){let k=await g.json();return await l(),k}else{let k=await g.json().catch(()=>({}));return c(k.error||"Failed to add task"),null}}catch(y){return console.error("[useTasks] Failed to add task:",y),c("Failed to add task"),null}},[e.backendUrl,u,n,t,l]),r=A(async(w,y)=>{if(!n)return null;try{let g=`${e.backendUrl}${u}${n.id}/update_task/${w}/`,k=await fetch(g,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}));if(k.ok){let E=await k.json();return await l(),E}else{let E=await k.json().catch(()=>({}));return c(E.error||"Failed to update task"),null}}catch(g){return console.error("[useTasks] Failed to update task:",g),c("Failed to update task"),null}},[e.backendUrl,u,n,t,l]),d=A(async w=>{if(!n)return!1;try{let y=`${e.backendUrl}${u}${n.id}/remove_task/${w}/`,g=await fetch(y,t.getFetchOptions({method:"DELETE"}));if(g.ok)return await l(),!0;{let k=await g.json().catch(()=>({}));return c(k.error||"Failed to remove task"),!1}}catch(y){return console.error("[useTasks] Failed to remove task:",y),c("Failed to remove task"),!1}},[e.backendUrl,u,n,t,l]),h=A(async()=>{if(!n)return!1;try{let w=`${e.backendUrl}${u}${n.id}/clear/`,y=await fetch(w,t.getFetchOptions({method:"POST"}));if(y.ok)return await l(),!0;{let g=await y.json().catch(()=>({}));return c(g.error||"Failed to clear tasks"),!1}}catch(w){return console.error("[useTasks] Failed to clear tasks:",w),c("Failed to clear tasks"),!1}},[e.backendUrl,u,n,t,l]),m=A(()=>c(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:a,error:i,loadTaskList:l,addTask:p,updateTask:r,removeTask:d,clearTasks:h,clearError:m}}function Ht(e,t,n){let s=p=>!p||typeof p!="object"||e.apiCaseStyle==="camel"?p:ke(p),a=p=>!p||typeof p!="object"||e.apiCaseStyle==="snake"?p:$e(p),o=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",i=(p=null)=>{let r=o(),d={},h=p||e.authToken||t().authToken;if(r==="token"&&h){let m=e.authHeader||"Authorization",w=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";d[m]=w?`${w} ${h}`:h}else if(r==="jwt"&&h){let m=e.authHeader||"Authorization",w=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";d[m]=w?`${w} ${h}`:h}else if(r==="anonymous"&&h){let m=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";d[m]=h}if(r==="session"){let m=kt(e.csrfCookieName);m&&(d["X-CSRFToken"]=m)}return d};return{getAuthStrategy:o,getAuthHeaders:i,getFetchOptions:(p={},r=null)=>{let d=o(),h={...p},m=i(r);return console.log("[ChatWidget] getFetchOptions - strategy:",d,"overrideToken:",r,"authHeaders:",m),h.headers={...h.headers,...m},d==="session"&&(h.credentials="include"),h},getOrCreateSession:async(p=!1)=>{let r=o(),d=t(),h=e.anonymousTokenKey||e.sessionTokenKey;if(r!=="anonymous")return e.authToken||d.authToken;if(!p){if(d.authToken)return d.authToken;let m=d.storage?.get(h);if(m)return n(w=>({...w,authToken:m})),m}try{let m=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,w=await fetch(`${e.backendUrl}${m}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(w.ok){let y=await w.json();return n(g=>({...g,authToken:y.token})),d.storage?.set(h,y.token),y.token}}catch(m){console.warn("[ChatWidget] Failed to create session:",m)}return null},clearSession:()=>{let p=e.anonymousTokenKey||e.sessionTokenKey,r=t();n(d=>({...d,authToken:null})),r.storage?.set(p,null)},transformRequest:s,transformResponse:a}}function Ot({config:e,onStateChange:t,markdownParser:n,apiRef:s}){console.log("[ChatWidget] Config:",{showConversationSidebar:e.showConversationSidebar,apiPaths:e.apiPaths});let[a,o]=C(e.embedded||e.forceOpen===!0),[i,c]=C(!1),[u,l]=C(!1),[p,r]=C(!1),[d,h]=C([]),[m,w]=C("chat"),[y,g]=C(!1),[k,E]=C(e.enableTTS),[O,B]=C(!1),[V,q]=C(null);K(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let j=ie(()=>$t(e.containerId),[e.containerId]),[z,G]=C(e.authToken||null),N=ie(()=>Ht(e,()=>({authToken:z,storage:j}),ee=>{let le=ee({authToken:z,storage:j});le.authToken!==z&&G(le.authToken)}),[e,z,j]),_=At(e,N,j),T=Dt(e,N,j),M=Ft(e,N);K(()=>{for(let b=_.messages.length-1;b>=0;b--){let L=_.messages[b];if(L.type==="sub_agent_start"){q({key:L.metadata?.subAgentKey,name:L.metadata?.agentName});return}if(L.type==="sub_agent_end"){q(null);return}}},[_.messages]),K(()=>{let b=j.get(e.conversationIdKey);console.log("[ChatWidget] Initial load - storedConvId:",b,"key:",e.conversationIdKey),console.log("[ChatWidget] apiPaths.conversations:",e.apiPaths.conversations),b&&(console.log("[ChatWidget] Loading conversation:",b),_.loadConversation(b))},[]),K(()=>{t&&t({isOpen:a,isExpanded:i,debugMode:u,messages:_.messages,conversationId:_.conversationId,isLoading:_.isLoading,error:_.error})},[a,i,u,_.messages,_.conversationId,_.isLoading,_.error]);let x=A(async()=>{if(e.showConversationSidebar){g(!0);try{let b=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,L=await fetch(b,N.getFetchOptions({method:"GET"}));if(L.ok){let ee=await L.json();h(ee.results||ee)}}catch(b){console.error("[ChatWidget] Failed to load conversations:",b),h([])}finally{g(!1)}}},[e,N]),S=A(()=>{let b=!p;r(b),b&&x()},[p,x]),I=A(b=>{b!==_.conversationId&&_.loadConversation(b),r(!1)},[_]),$=A(()=>{_.clearMessages(),r(!1)},[_]),R=A(b=>{_.sendMessage(b,{model:T.selectedModel,thinking:T.thinkingEnabled&&T.supportsThinking(),onAssistantMessage:L=>{}})},[_,k,T.selectedModel,T.thinkingEnabled,T.supportsThinking]),D=A(b=>{w(b),b==="tasks"&&M.loadTaskList()},[M]);if(K(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:b=>R(b),clearMessages:()=>_.clearMessages(),toggleTTS:()=>E(b=>!b),stopSpeech:()=>B(!1),setAuth:b=>{b.token!==void 0&&G(b.token)},clearAuth:()=>G(null)})},[_,s,R]),!e.embedded&&!a)return f`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let v=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" "),P=e.headerTextColor||bt(e.primaryColor);return f`
    <div class=${v} style=${{"--cw-primary":e.primaryColor,"--cw-header-text":P}}>
      ${e.showConversationSidebar&&f`
        <${Et}
          isOpen=${p}
          conversations=${d}
          conversationsLoading=${y}
          currentConversationId=${_.conversationId}
          onClose=${()=>r(!1)}
          onNewConversation=${$}
          onSwitchConversation=${I}
        />
      `}
      
      <${Ct}
        config=${e}
        debugMode=${u}
        isExpanded=${i}
        isSpeaking=${O}
        messagesCount=${_.messages.length}
        isLoading=${_.isLoading}
        currentAgent=${V}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!u)}
        onToggleTTS=${()=>E(!k)}
        onClear=${_.clearMessages}
        onToggleSidebar=${S}
      />

      ${e.showTasksTab!==!1&&f`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${m==="chat"?"cw-tab-active":""}`}
            onClick=${()=>D("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${m==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>D("tasks")}
          >
            Tasks ${M.progress.total>0?f`<span class="cw-tab-badge">${M.progress.completed}/${M.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${u&&f`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${m==="chat"?f`
        <${Mt}
          messages=${_.messages}
          isLoading=${_.isLoading}
          hasMoreMessages=${_.hasMoreMessages}
          loadingMoreMessages=${_.loadingMoreMessages}
          onLoadMore=${_.loadMoreMessages}
          onEditMessage=${_.editMessage}
          onRetryMessage=${_.retryMessage}
          debugMode=${u}
          markdownParser=${n}
          emptyStateTitle=${e.emptyStateTitle}
          emptyStateMessage=${e.emptyStateMessage}
        />

        ${_.error&&f`<div class="cw-error-bar">${_.error}</div>`}

        ${e.showModelSelector&&T.availableModels.length>0&&f`
          <${It}
            availableModels=${T.availableModels}
            selectedModel=${T.selectedModel}
            onSelectModel=${T.selectModel}
            thinkingEnabled=${T.thinkingEnabled}
            onToggleThinking=${T.toggleThinking}
            disabled=${_.isLoading}
          />
        `}

        <${xt}
          onSend=${R}
          onCancel=${_.cancelRun}
          isLoading=${_.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:f`
        <${Pt}
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
  `}var Nt={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",headerTextColor:null,position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Lt(e){let t={...Nt.apiPaths,...e.apiPaths||{}};return{...Nt,...e,apiPaths:t}}var Te=new Map,dn=0,F=null,Ue=class{constructor(t={}){Be(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++dn}`,this.config=Lt(t),this.container=null,this._state={},this._apiRef={current:null},Te.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&ve(f`<${Ot}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Me._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(ve(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),Te.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Wt(e={}){return new Ue(e).init()}function pn(e={}){return F&&F.destroy(),F=Wt(e),F}function _n(){F&&(F.destroy(),F=null)}function hn(){F&&F.open()}function fn(){F&&F.close()}function mn(e){F&&F.send(e)}function gn(){F&&F.clearMessages()}function yn(){F&&F.toggleTTS()}function vn(){F&&F.stopSpeech()}function wn(e){F&&F.setAuth(e)}function $n(){F&&F.clearAuth()}function kn(){return F?F.getState():null}function bn(){return F?F.getConfig():null}var Me={createInstance:Wt,getInstance:e=>Te.get(e),getAllInstances:()=>Array.from(Te.values()),init:pn,destroy:_n,open:hn,close:fn,send:mn,clearMessages:gn,toggleTTS:yn,stopSpeech:vn,setAuth:wn,clearAuth:$n,getState:kn,getConfig:bn,_enhancedMarkdownParser:null};var Cn=Me;typeof window<"u"&&(window.ChatWidget=Me);return Vt(Sn);})();
