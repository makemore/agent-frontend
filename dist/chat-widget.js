var ChatWidgetModule=(()=>{var ue=Object.defineProperty;var Nt=Object.getOwnPropertyDescriptor;var Lt=Object.getOwnPropertyNames;var Ut=Object.prototype.hasOwnProperty;var Kt=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Wt=(e,t)=>{for(var n in t)ue(e,n,{get:t[n],enumerable:!0})},Bt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Lt(t))!Ut.call(e,a)&&a!==n&&ue(e,a,{get:()=>t[a],enumerable:!(s=Nt(t,a))||s.enumerable});return e};var jt=e=>Bt(ue({},"__esModule",{value:!0}),e);var We=(e,t,n)=>(Kt(e,typeof t!="symbol"?t+"":t,n),n);var $n={};Wt($n,{ChatWidget:()=>Te,default:()=>wn});var he,O,Ve,zt,ee,Be,qe,Ge,Xe,Ie,Me,xe,Jt,se={},Qe=[],Vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function Z(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function me(e,t,n){var s,a,o,i={};for(o in t)o=="key"?s=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?he.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return _e(e,i,s,a,null)}function _e(e,t,n,s,a){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++Ve,__i:-1,__u:0};return a==null&&O.vnode!=null&&O.vnode(o),o}function ge(e){return e.children}function ne(e,t){this.props=e,this.context=t}function te(e,t){if(t==null)return e.__?te(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?te(e):null}function Ze(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ze(e)}}function je(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!pe.__r++||Be!=O.debounceRendering)&&((Be=O.debounceRendering)||qe)(pe)}function pe(){for(var e,t,n,s,a,o,i,c=1;ee.length;)ee.length>c&&ee.sort(Ge),e=ee.shift(),c=ee.length,e.__d&&(n=void 0,s=void 0,a=(s=(t=e).__v).__e,o=[],i=[],t.__P&&((n=Z({},s)).__v=s.__v+1,O.vnode&&O.vnode(n),De(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[a]:null,o,a??te(s),!!(32&s.__u),i),n.__v=s.__v,n.__.__k[n.__i]=n,tt(o,n,i),s.__e=s.__=null,n.__e!=a&&Ze(n)));pe.__r=0}function Ye(e,t,n,s,a,o,i,c,d,l,u){var r,_,p,v,w,y,g,k=s&&s.__k||Qe,I=t.length;for(d=qt(n,t,k,d,I),r=0;r<I;r++)(p=n.__k[r])!=null&&(_=p.__i==-1?se:k[p.__i]||se,p.__i=r,y=De(e,p,_,a,o,i,c,d,l,u),v=p.__e,p.ref&&_.ref!=p.ref&&(_.ref&&Re(_.ref,null,p),u.push(p.ref,p.__c||v,p)),w==null&&v!=null&&(w=v),(g=!!(4&p.__u))||_.__k===p.__k?d=et(p,d,e,g):typeof p.type=="function"&&y!==void 0?d=y:v&&(d=v.nextSibling),p.__u&=-7);return n.__e=w,d}function qt(e,t,n,s,a){var o,i,c,d,l,u=n.length,r=u,_=0;for(e.__k=new Array(a),o=0;o<a;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[o]=_e(null,i,null,null,null):fe(i)?i=e.__k[o]=_e(ge,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[o]=_e(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[o]=i,d=o+_,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Gt(i,n,d,r))!=-1&&(r--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(a>u?_--:a<u&&_++),typeof i.type!="function"&&(i.__u|=4)):l!=d&&(l==d-1?_--:l==d+1?_++:(l>d?_--:_++,i.__u|=4))):e.__k[o]=null;if(r)for(o=0;o<u;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=te(c)),st(c,c));return s}function et(e,t,n,s){var a,o;if(typeof e.type=="function"){for(a=e.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=e,t=et(a[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=te(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Gt(e,t,n,s){var a,o,i,c=e.key,d=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&c==null||u&&c==l.key&&d==l.type)return n;if(s>(u?1:0)){for(a=n-1,o=n+1;a>=0||o<t.length;)if((l=t[i=a>=0?a--:o++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return i}return-1}function ze(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Vt.test(t)?n:n+"px"}function de(e,t,n,s,a){var o,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||ze(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||ze(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Xe,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=Ie,e.addEventListener(t,o?xe:Me,o)):e.removeEventListener(t,o?xe:Me,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Je(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ie++;else if(t.t<n.u)return;return n(O.event?O.event(t):t)}}}function De(e,t,n,s,a,o,i,c,d,l){var u,r,_,p,v,w,y,g,k,I,N,J,z,V,W,B,q,H=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),o=[c=t.__e=n.__e]),(u=O.__b)&&u(t);e:if(typeof H=="function")try{if(g=t.props,k="prototype"in H&&H.prototype.render,I=(u=H.contextType)&&s[u.__c],N=u?I?I.props.value:u.__:s,n.__c?y=(r=t.__c=n.__c).__=r.__E:(k?t.__c=r=new H(g,N):(t.__c=r=new ne(g,N),r.constructor=H,r.render=Qt),I&&I.sub(r),r.state||(r.state={}),r.__n=s,_=r.__d=!0,r.__h=[],r._sb=[]),k&&r.__s==null&&(r.__s=r.state),k&&H.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Z({},r.__s)),Z(r.__s,H.getDerivedStateFromProps(g,r.__s))),p=r.props,v=r.state,r.__v=t,_)k&&H.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),k&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k&&H.getDerivedStateFromProps==null&&g!==p&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,N),t.__v==n.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,N)===!1){for(t.__v!=n.__v&&(r.props=g,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(h){h&&(h.__=t)}),J=0;J<r._sb.length;J++)r.__h.push(r._sb[J]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,N),k&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(p,v,w)})}if(r.context=N,r.props=g,r.__P=e,r.__e=!1,z=O.__r,V=0,k){for(r.state=r.__s,r.__d=!1,z&&z(t),u=r.render(r.props,r.state,r.context),W=0;W<r._sb.length;W++)r.__h.push(r._sb[W]);r._sb=[]}else do r.__d=!1,z&&z(t),u=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++V<25);r.state=r.__s,r.getChildContext!=null&&(s=Z(Z({},s),r.getChildContext())),k&&!_&&r.getSnapshotBeforeUpdate!=null&&(w=r.getSnapshotBeforeUpdate(p,v)),B=u,u!=null&&u.type===ge&&u.key==null&&(B=nt(u.props.children)),c=Ye(e,fe(B)?B:[B],t,n,s,a,o,i,c,d,l),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),y&&(r.__E=r.__=null)}catch(h){if(t.__v=null,d||o!=null)if(h.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(q=o.length;q--;)Ae(o[q]);Ee(t)}else t.__e=n.__e,t.__k=n.__k,h.then||Ee(t);O.__e(h,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Xt(n.__e,t,n,s,a,o,i,d,l);return(u=O.diffed)&&u(t),128&t.__u?void 0:c}function Ee(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ee)}function tt(e,t,n){for(var s=0;s<n.length;s++)Re(n[s],n[++s],n[++s]);O.__c&&O.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){O.__e(o,a.__v)}})}function nt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fe(e)?e.map(nt):Z({},e)}function Xt(e,t,n,s,a,o,i,c,d){var l,u,r,_,p,v,w,y=n.props||se,g=t.props,k=t.type;if(k=="svg"?a="http://www.w3.org/2000/svg":k=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((p=o[l])&&"setAttribute"in p==!!k&&(k?p.localName==k:p.nodeType==3)){e=p,o[l]=null;break}}if(e==null){if(k==null)return document.createTextNode(g);e=document.createElementNS(a,k,g.is&&g),c&&(O.__m&&O.__m(t,o),c=!1),o=null}if(k==null)y===g||c&&e.data==g||(e.data=g);else{if(o=o&&he.call(e.childNodes),!c&&o!=null)for(y={},l=0;l<e.attributes.length;l++)y[(p=e.attributes[l]).name]=p.value;for(l in y)if(p=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=p;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;de(e,l,null,p,a)}}for(l in g)p=g[l],l=="children"?_=p:l=="dangerouslySetInnerHTML"?u=p:l=="value"?v=p:l=="checked"?w=p:c&&typeof p!="function"||y[l]===p||de(e,l,p,y[l],a);if(u)c||r&&(u.__html==r.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(r&&(e.innerHTML=""),Ye(t.type=="template"?e.content:e,fe(_)?_:[_],t,n,s,k=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&te(n,0),c,d),o!=null)for(l=o.length;l--;)Ae(o[l]);c||(l="value",k=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[l]||k=="progress"&&!v||k=="option"&&v!=y[l])&&de(e,l,v,y[l],a),l="checked",w!=null&&w!=e[l]&&de(e,l,w,y[l],a))}return e}function Re(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(a){O.__e(a,n)}}function st(e,t,n){var s,a;if(O.unmount&&O.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||Re(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){O.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&st(s[a],t,n||typeof e.type!="function");n||Ae(e.__e),e.__c=e.__=e.__e=void 0}function Qt(e,t,n){return this.constructor(e,n)}function ye(e,t,n){var s,a,o,i;t==document&&(t=document.documentElement),O.__&&O.__(e,t),a=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],De(t,e=(!s&&n||t).__k=me(ge,null,[e]),a||se,se,t.namespaceURI,!s&&n?[n]:a?null:t.firstChild?he.call(t.childNodes):null,o,!s&&n?n:a?a.__e:t.firstChild,s,i),tt(o,e,i)}he=Qe.slice,O={__e:function(e,t,n,s){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,s||{}),i=a.__d),i)return a.__E=a}catch(c){e=c}throw e}},Ve=0,zt=function(e){return e!=null&&e.constructor===void 0},ne.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},ne.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},ne.prototype.render=ge,ee=[],qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ge=function(e,t){return e.__v.__b-t.__v.__b},pe.__r=0,Xe=/(PointerCapture)$|Capture$/i,Ie=0,Me=Je(!1),xe=Je(!0),Jt=0;var at=function(e,t,n,s){var a;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];i===3?s[0]=c:i===4?s[1]=Object.assign(s[1]||{},c):i===5?(s[1]=s[1]||{})[t[++o]]=c:i===6?s[1][t[++o]]+=c+"":i?(a=e.apply(c,at(e,c,n,["",null])),s.push(a),c[0]?t[0]|=2:(t[o-2]=0,t[o]=a)):s.push(c)}return s},ot=new Map;function rt(e){var t=ot.get(this);return t||(t=new Map,ot.set(this,t)),(t=at(this,t.get(e)||(t.set(e,t=function(n){for(var s,a,o=1,i="",c="",d=[0],l=function(_){o===1&&(_||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?d.push(0,_,i):o===3&&(_||i)?(d.push(3,_,i),o=2):o===2&&i==="..."&&_?d.push(4,_,0):o===2&&i&&!_?d.push(5,0,!0,i):o>=5&&((i||!_&&o===5)&&(d.push(o,0,i,a),o=6),_&&(d.push(o,_,0,a),o=6)),i=""},u=0;u<n.length;u++){u&&(o===1&&l(),l(u));for(var r=0;r<n[u].length;r++)s=n[u][r],o===1?s==="<"?(l(),d=[d],o=3):i+=s:o===4?i==="--"&&s===">"?(o=1,i=""):i=s+i[0]:c?s===c?c="":i+=s:s==='"'||s==="'"?c=s:s===">"?(l(),o=1):o&&(s==="="?(o=5,a=i,i=""):s==="/"&&(o<5||n[u][r+1]===">")?(l(),o===3&&(d=d[0]),o=d,(d=d[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),o=2):i+=s),o===3&&i==="!--"&&(o=4,d=d[0])}return l(),d}(e)),t),arguments,[])).length>1?t:t[0]}var f=rt.bind(me);var oe,L,Pe,it,ae=0,ft=[],U=O,lt=U.__b,ct=U.__r,ut=U.diffed,dt=U.__c,_t=U.unmount,pt=U.__;function Oe(e,t){U.__h&&U.__h(L,e,ae||t),ae=0;var n=L.__H||(L.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return ae=1,Zt(gt,e)}function Zt(e,t,n){var s=Oe(oe++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):gt(void 0,t),function(c){var d=s.__N?s.__N[0]:s.__[0],l=s.t(d,c);d!==l&&(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=L,!L.__f)){var a=function(c,d,l){if(!s.__c.__H)return!0;var u=s.__c.__H.__.filter(function(_){return!!_.__c});if(u.every(function(_){return!_.__N}))return!o||o.call(this,c,d,l);var r=s.__c.props!==c;return u.forEach(function(_){if(_.__N){var p=_.__[0];_.__=_.__N,_.__N=void 0,p!==_.__[0]&&(r=!0)}}),o&&o.call(this,c,d,l)||r};L.__f=!0;var o=L.shouldComponentUpdate,i=L.componentWillUpdate;L.componentWillUpdate=function(c,d,l){if(this.__e){var u=o;o=void 0,a(c,d,l),o=u}i&&i.call(this,c,d,l)},L.shouldComponentUpdate=a}return s.__N||s.__}function K(e,t){var n=Oe(oe++,3);!U.__s&&mt(n.__H,t)&&(n.__=e,n.u=t,L.__H.__h.push(n))}function X(e){return ae=5,re(function(){return{current:e}},[])}function re(e,t){var n=Oe(oe++,7);return mt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function A(e,t){return ae=8,re(function(){return e},t)}function Yt(){for(var e;e=ft.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ve),e.__H.__h.forEach(Fe),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}U.__b=function(e){L=null,lt&&lt(e)},U.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),pt&&pt(e,t)},U.__r=function(e){ct&&ct(e),oe=0;var t=(L=e.__c).__H;t&&(Pe===L?(t.__h=[],L.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(ve),t.__h.forEach(Fe),t.__h=[],oe=0)),Pe=L},U.diffed=function(e){ut&&ut(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ft.push(t)!==1&&it===U.requestAnimationFrame||((it=U.requestAnimationFrame)||en)(Yt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Pe=L=null},U.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ve),n.__h=n.__h.filter(function(s){return!s.__||Fe(s)})}catch(s){t.some(function(a){a.__h&&(a.__h=[])}),t=[],U.__e(s,n.__v)}}),dt&&dt(e,t)},U.unmount=function(e){_t&&_t(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{ve(s)}catch(a){t=a}}),n.__H=void 0,t&&U.__e(t,n.__v))};var ht=typeof requestAnimationFrame=="function";function en(e){var t,n=function(){clearTimeout(s),ht&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);ht&&(t=requestAnimationFrame(n))}function ve(e){var t=L,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),L=t}function Fe(e){var t=L;e.__c=e.__(),L=t}function mt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function gt(e,t){return typeof t=="function"?t(e):t}function tn(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function He(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function we(e){return Array.isArray(e)?e.map(we):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[tn(t),we(n)])):e}function $e(e){return Array.isArray(e)?e.map($e):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[He(t),$e(n)])):e}function ke(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function j(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function yt(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,a=Math.floor(s/6e4),o=Math.floor(s/36e5),i=Math.floor(s/864e5);return a<1?"Just now":a<60?`${a}m ago`:o<24?`${o}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function vt(e,t=null){if(t)return t(e);let n=j(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function wt(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let a=t(n);s===null?localStorage.removeItem(a):localStorage.setItem(a,s)}catch{}}}}function $t(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[a,o]=s.trim().split("=");if(a===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function be(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(1))+" "+n[s]}function Ce(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function kt({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:a,isLoading:o,currentAgent:i,onClose:c,onToggleExpand:d,onToggleDebug:l,onToggleTTS:u,onClear:r,onToggleSidebar:_}){let{title:p,primaryColor:v,embedded:w,showConversationSidebar:y,showClearButton:g,showDebugButton:k,enableDebugMode:I,showTTSButton:N,showExpandButton:J,enableTTS:z,elevenLabsApiKey:V,ttsProxyUrl:W}=e,B=V||W;return f`
    <div class="cw-header" style=${{backgroundColor:v}}>
      ${y&&f`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${_}
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
        <span class="cw-title">${j(p)}</span>
        ${i&&f`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${j(i.name||i.key)}</span>
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
        
        ${k&&I&&f`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${N&&B&&f`
          <button 
            class="cw-header-btn ${z?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${z?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${J&&!w&&f`
          <button 
            class="cw-header-btn" 
            onClick=${d}
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
  `}function nn({initialContent:e,onSave:t,onCancel:n}){let[s,a]=C(e),o=X(null);return K(()=>{o.current&&(o.current.focus(),o.current.setSelectionRange(s.length,s.length),o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px")},[]),f`
    <div class="cw-inline-edit">
      <textarea
        ref=${o}
        class="cw-inline-edit-input"
        value=${s}
        onInput=${d=>{a(d.target.value),d.target.style.height="auto",d.target.style.height=d.target.scrollHeight+"px"}}
        onKeyDown=${d=>{d.key==="Enter"&&!d.shiftKey?(d.preventDefault(),s.trim()&&t(s.trim())):d.key==="Escape"&&n()}}
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
  `}function Ct({msg:e,debugMode:t,markdownParser:n,onEdit:s,onRetry:a,isLoading:o,messageIndex:i}){let[c,d]=C(!1),[l,u]=C(!1),[r,_]=C(!1),p=e.role==="user",v=e.role==="system",w=e.type==="tool_call",y=e.type==="tool_result",g=e.type==="error",k=e.type==="sub_agent_start",I=e.type==="sub_agent_end",N=e.type==="agent_context";if(v&&!t)return null;if(k||I||N)return f`
      <div class="cw-agent-context ${k?"cw-agent-delegating":""} ${I?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${k?"\u{1F517}":I?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&f`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
      </div>
    `;if(w||y){let S=e.metadata?.arguments||e.metadata?.result,E=$=>{if(typeof $=="string")try{return JSON.stringify(JSON.parse($),null,2)}catch{return $}return JSON.stringify($,null,2)};return f`
      <div class="cw-tool-message ${y?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>S&&d(!c)}>
          ${e.content}
          ${S&&f`<span class="cw-tool-expand">${c?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${c&&S&&f`
          <pre class="cw-tool-details">${j(E(w?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
      </div>
    `}let J=["cw-message",p&&"cw-message-user",g&&"cw-message-error"].filter(Boolean).join(" "),z=`cw-message-row ${p?"cw-message-row-user":""}`,V=e.role==="assistant"?vt(e.content,n):j(e.content),W=e.files&&e.files.length>0,B=()=>W?f`
      <div class="cw-message-attachments">
        ${e.files.map(S=>S.type&&S.type.startsWith("image/")?f`
              <a class="cw-attachment-thumbnail" href=${S.url} target="_blank" title=${S.name}>
                <img src=${S.url} alt=${S.name} />
              </a>
            `:f`
            <a class="cw-attachment-file" href=${S.url} target="_blank" title=${S.name}>
              <span class="cw-attachment-icon">${Ce(S.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${S.name}</span>
                <span class="cw-attachment-size">${be(S.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,q=S=>{_(!1),s&&s(i,S)},H=()=>{a&&a(i)};if(p&&r)return f`
      <div class=${z} style="position: relative;">
        ${B()}
        <${nn}
          initialContent=${e.content}
          onSave=${q}
          onCancel=${()=>_(!1)}
        />
      </div>
    `;let h=p&&s&&a,T=e.role==="assistant"&&a&&!o;return f`
    <div class="${z} ${h||T?"cw-message-row-with-actions":""}">
      ${B()}
      ${h&&f`
        <div class="cw-user-actions-wrapper">
          <${bt}
            onEdit=${()=>_(!0)}
            onRetry=${H}
            isLoading=${o}
            position="left"
            showEdit=${!0}
          />
          <div class=${J} dangerouslySetInnerHTML=${{__html:V}} />
        </div>
      `}
      ${!h&&f`
        <div class=${J} dangerouslySetInnerHTML=${{__html:V}} />
      `}
      ${T&&f`
        <${bt}
          onRetry=${H}
          isLoading=${o}
          position="right"
          showEdit=${!1}
        />
      `}
      ${t&&f`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
    </div>
  `}function St({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:a,onEditMessage:o,onRetryMessage:i,debugMode:c,markdownParser:d,emptyStateTitle:l,emptyStateMessage:u}){let r=X(null),_=X(!0),p=w=>{let y=w.target,g=y.scrollHeight-y.scrollTop-y.clientHeight<100;if(_.current=g,y.scrollTop<50&&n&&!s){let k=y.scrollHeight;a().then(()=>{let I=y.scrollHeight;y.scrollTop=I-k+y.scrollTop})}};K(()=>{let w=r.current;w&&_.current&&requestAnimationFrame(()=>{w.scrollTop=w.scrollHeight})},[e,t]),K(()=>{let w=r.current;w&&e.length<=2&&(_.current=!0,requestAnimationFrame(()=>{w.scrollTop=w.scrollHeight}))},[e.length]);let v=e.length===0;return f`
    <div class="cw-messages" ref=${r} onScroll=${p}>
      ${v&&f`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${j(l)}</h3>
          <p>${j(u)}</p>
        </div>
      `}
      
      ${!v&&n&&f`
        <div class="cw-load-more" onClick=${a}>
          ${s?f`<span class="cw-spinner"></span><span>Loading...</span>`:f`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((w,y)=>f`
        <${Ct}
          key=${w.id}
          msg=${w}
          messageIndex=${y}
          debugMode=${c}
          markdownParser=${d}
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
  `}var Le=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function Tt({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:a,enableVoice:o=!0,enableFiles:i=!0}){let[c,d]=C(""),[l,u]=C([]),[r,_]=C(!1),[p,v]=C(!1),[w]=C(()=>!!Le),y=X(null),g=X(null),k=X(null),I=X(!1);K(()=>{!n&&y.current&&y.current.focus()},[n]),K(()=>{y.current&&(y.current.style.height="auto",y.current.style.height=Math.min(y.current.scrollHeight,150)+"px")},[c]),K(()=>()=>{I.current=!1,k.current&&k.current.abort()},[]);let N=$=>{$.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),d(""),u([]),y.current&&(y.current.style.height="auto"),g.current&&(g.current.value=""))},J=$=>{let D=Array.from($.target.files||[]);D.length>0&&u(F=>[...F,...D])},z=$=>{u(D=>D.filter((F,m)=>m!==$))},V=$=>{$.preventDefault(),g.current&&!n&&g.current.click()},W=$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),N($))},B=$=>{n&&t&&($.preventDefault(),t())},q=()=>{if(!Le||n)return;I.current=!0;let $=new Le;$.continuous=!0,$.interimResults=!0,$.lang=navigator.language||"en-US";let D=c,F="";$.onstart=()=>{v(!0)},$.onresult=m=>{F="";for(let b=m.resultIndex;b<m.results.length;b++){let R=m.results[b][0].transcript;m.results[b].isFinal?D+=(D?" ":"")+R:F+=R}d(D+(F?" "+F:""))},$.onerror=m=>{if(m.error==="no-speech"||m.error==="aborted"){console.log("[ChatWidget] Speech recognition:",m.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",m.error),I.current=!1,v(!1),d(D||c)},$.onend=()=>{if(I.current){console.log("[ChatWidget] Recognition paused, restarting...");try{$.start();return}catch(m){console.warn("[ChatWidget] Could not restart recognition:",m)}}v(!1),D&&d(D),k.current=null},k.current=$,$.start()},H=()=>{I.current=!1,k.current&&k.current.stop()},h=$=>{$.preventDefault(),p?H():q()},x=f`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,T=f`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,M=f`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,S=o&&w,E=i;return f`
    <form class="cw-input-form" onSubmit=${N}>
      <input
        type="file"
        ref=${g}
        style="display: none"
        multiple
        onChange=${J}
      />
      ${l.length>0&&f`
        <div class="cw-file-chips">
          ${l.map(($,D)=>f`
            <div class="cw-file-chip" key=${D}>
              <span class="cw-file-chip-icon">${Ce($.type)}</span>
              <span class="cw-file-chip-name" title=${$.name}>${$.name.length>20?$.name.substring(0,17)+"...":$.name}</span>
              <span class="cw-file-chip-size">(${be($.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>z(D)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${y}
        class="cw-input"
        placeholder=${j(s)}
        value=${c}
        onInput=${$=>d($.target.value)}
        onKeyDown=${W}
        disabled=${n}
        rows="1"
      />
      ${E&&f`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${V}
          disabled=${n}
          title="Attach files"
        >
          ${M}
        </button>
      `}
      ${S&&f`
        <button
          type="button"
          class=${`cw-voice-btn ${p?"cw-voice-btn-recording":""}`}
          onClick=${h}
          disabled=${n}
          title=${p?"Stop recording":"Voice input"}
        >
          ${T}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&r?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&r?"#dc2626":a}}
        onClick=${B}
        onMouseEnter=${()=>_(!0)}
        onMouseLeave=${()=>_(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?r?x:f`<span class="cw-spinner"></span>`:"\u27A4"}
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
            <div class="cw-conversation-title">${j(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${yt(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${a}
    />
  `}function xt({availableModels:e,selectedModel:t,onSelectModel:n,disabled:s}){let[a,o]=C(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",d=()=>{s||o(!a)},l=u=>{n(u),o(!1)};return f`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${d}
        disabled=${s}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${j(c)}</span>
        <span class="cw-model-chevron">${a?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${a&&f`
        <div class="cw-model-dropdown">
          ${e.map(u=>f`
            <button 
              key=${u.id}
              class="cw-model-option ${u.id===t?"cw-model-option-selected":""}"
              onClick=${()=>l(u.id)}
            >
              <span class="cw-model-option-name">${j(u.name)}</span>
              <span class="cw-model-option-provider">${j(u.provider)}</span>
              ${u.description&&f`
                <span class="cw-model-option-desc">${j(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}var sn={not_started:"\u25CB",in_progress:"\u25D0",complete:"\u25CF",cancelled:"\u2298"},on={not_started:"Not Started",in_progress:"In Progress",complete:"Complete",cancelled:"Cancelled"};function an({task:e,onUpdate:t,onRemove:n,depth:s=0}){let[a,o]=C(!1),[i,c]=C(e.name),d=A(()=>{let _={not_started:"in_progress",in_progress:"complete",complete:"not_started",cancelled:"not_started"};t(e.id,{state:_[e.state]||"not_started"})},[e,t]),l=A(()=>{i.trim()&&i!==e.name&&t(e.id,{name:i.trim()}),o(!1)},[e,i,t]),u=A(_=>{_.key==="Enter"&&l(),_.key==="Escape"&&(c(e.name),o(!1))},[l,e.name]),r=`cw-task-state-${e.state.replace("_","-")}`;return f`
    <div class="cw-task-item ${r}" style=${{paddingLeft:`${s*16+8}px`}}>
      <button 
        class="cw-task-state-btn" 
        onClick=${d}
        title=${on[e.state]}
      >
        ${sn[e.state]}
      </button>
      
      ${a?f`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${i}
          onInput=${_=>c(_.target.value)}
          onBlur=${l}
          onKeyDown=${u}
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
  `}function Et({tasks:e,progress:t,isLoading:n,error:s,onUpdate:a,onRemove:o,onClear:i,onRefresh:c}){let d=A(r=>{let _=new Map,p=[];return r.forEach(v=>{_.set(v.id,{...v,children:[]})}),r.forEach(v=>{let w=_.get(v.id);v.parent_id&&_.has(v.parent_id)?_.get(v.parent_id).children.push(w):p.push(w)}),p},[]),l=A((r,_=0)=>f`
      <${an}
        key=${r.id}
        task=${r}
        depth=${_}
        onUpdate=${a}
        onRemove=${o}
      />
      ${r.children?.map(p=>l(p,_+1))}
    `,[a,o]),u=d(e);return n&&e.length===0?f`<div class="cw-tasks-loading">Loading tasks...</div>`:f`
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
        ${u.length===0?f`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        `:u.map(r=>l(r))}
      </div>
    </div>
  `}function It(e,t,n){let[s,a]=C([]),[o,i]=C(!1),[c,d]=C(null),[l,u]=C(()=>n?.get(e.conversationIdKey)||null),[r,_]=C(!1),[p,v]=C(!1),[w,y]=C(0),g=X(null),k=X(null);K(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let I=A(async(h,x,T)=>{g.current&&g.current.close();let M=e.apiPaths.runEvents.replace("{runId}",h),S=`${e.backendUrl}${M}`;x&&(S+=`?anonymous_token=${encodeURIComponent(x)}`);let E=new EventSource(S);g.current=E;let $="";E.addEventListener("assistant.message",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("assistant.message",m.payload);let b=m.payload.content;b&&($+=b,a(R=>{let G=R[R.length-1];return G?.role==="assistant"&&G.id.startsWith("assistant-stream-")?[...R.slice(0,-1),{...G,content:$}]:[...R,{id:"assistant-stream-"+Date.now(),role:"assistant",content:$,timestamp:new Date,type:"message"}]}))}catch(m){console.error("[ChatWidget] Parse error:",m)}}),E.addEventListener("tool.call",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("tool.call",m.payload),a(b=>[...b,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${m.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:m.payload.name,arguments:m.payload.arguments,toolCallId:m.payload.id}}])}catch(m){console.error("[ChatWidget] Parse error:",m)}}),E.addEventListener("tool.result",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("tool.result",m.payload);let b=m.payload.result,R=b?.error;a(G=>[...G,{id:"tool-result-"+Date.now(),role:"system",content:R?`\u274C ${b.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:m.payload.name,result:b,toolCallId:m.payload.tool_call_id}}])}catch(m){console.error("[ChatWidget] Parse error:",m)}}),E.addEventListener("custom",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("custom",m.payload),m.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(m.payload),m.payload?.type==="agent_context"&&a(b=>[...b,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${m.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:m.payload.agent_key,agentName:m.payload.agent_name,action:m.payload.action}}])}catch(m){console.error("[ChatWidget] Parse error:",m)}}),E.addEventListener("sub_agent.start",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("sub_agent.start",m.payload),a(b=>[...b,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${m.payload.agent_name||m.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:m.payload.sub_agent_key,agentName:m.payload.agent_name,invocationMode:m.payload.invocation_mode}}])}catch(m){console.error("[ChatWidget] Parse error:",m)}}),E.addEventListener("sub_agent.end",F=>{try{let m=JSON.parse(F.data);e.onEvent&&e.onEvent("sub_agent.end",m.payload),a(b=>[...b,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${m.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:m.payload.sub_agent_key,agentName:m.payload.agent_name}}])}catch(m){console.error("[ChatWidget] Parse error:",m)}});let D=F=>{try{let m=JSON.parse(F.data);if(e.onEvent&&e.onEvent(m.type,m.payload),m.type==="run.failed"){let b=m.payload.error||"Agent run failed";d(b),a(R=>[...R,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${b}`,timestamp:new Date,type:"error"}])}}catch(m){console.error("[ChatWidget] Parse error:",m)}i(!1),E.close(),g.current=null,$&&T&&T($)};E.addEventListener("run.succeeded",D),E.addEventListener("run.failed",D),E.addEventListener("run.cancelled",D),E.addEventListener("run.timed_out",D),E.onerror=()=>{i(!1),E.close(),g.current=null}},[e]),N=A(async(h,x={},T={})=>{if(!h.trim()||o)return;let M=[],S={};typeof x=="function"?S={onAssistantMessage:x}:Array.isArray(x)?(M=x,S=T):S=x||{};let{model:E,onAssistantMessage:$,supersedeFromMessageIndex:D}=S;i(!0),d(null);let F={id:ke(),role:"user",content:h.trim(),timestamp:new Date,type:"message",files:M.length>0?M.map(m=>({name:m.name,size:m.size,type:m.type})):void 0};a(m=>[...m,F]);try{let m=await t.getOrCreateSession(),b;if(M.length>0){let Q=e.apiCaseStyle!=="camel",Ke=ce=>Q?He(ce):ce,Y=new FormData;Y.append(Ke("agentKey"),e.agentKey),l&&Y.append(Ke("conversationId"),l),Y.append("messages",JSON.stringify([{role:"user",content:h.trim()}])),Y.append("metadata",JSON.stringify(Q?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),E&&Y.append("model",E),M.forEach(ce=>{Y.append("files",ce)}),b=t.getFetchOptions({method:"POST",body:Y},m)}else{let Q=t.transformRequest({agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:h.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...E&&{model:E},...D!==void 0&&{supersedeFromMessageIndex:D}});b=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)},m)}let R=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,b),G=m;if(R.status===401){t.clearSession();let Q=await t.getOrCreateSession(!0);Q&&(G=Q,M.length>0?b=t.getFetchOptions({method:"POST",body:b.body},Q):b=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:b.body},Q),R=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,b))}if(!R.ok){let Q=await R.json().catch(()=>({}));throw new Error(Q.error||Q.detail||`HTTP ${R.status}`)}let ie=await R.json(),le=t.transformResponse(ie);k.current=le.id,!l&&le.conversationId&&u(le.conversationId),await I(le.id,G,$)}catch(m){d(m.message||"Failed to send message"),i(!1)}finally{k.current=null}},[e,t,l,o,I]),J=A(async()=>{let h=k.current;if(!(!h||!o))try{let x=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",h):`${e.apiPaths.runs}${h}/cancel/`;(await fetch(`${e.backendUrl}${x}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),i(!1),k.current=null,a(M=>[...M,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(x){console.error("[ChatWidget] Failed to cancel run:",x)}},[e,t,o]),z=A(()=>{a([]),u(null),d(null),_(!1),y(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),V=h=>{let x={id:ke(),role:h.role,timestamp:h.timestamp?new Date(h.timestamp):new Date};if(h.role==="tool")return{...x,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:h.content,toolCallId:h.toolCallId}};if(h.role==="assistant"&&h.toolCalls&&h.toolCalls.length>0)return h.toolCalls.map(M=>({id:ke(),role:"assistant",content:`\u{1F527} ${M.function?.name||M.name||"tool"}`,timestamp:x.timestamp,type:"tool_call",metadata:{toolName:M.function?.name||M.name,arguments:M.function?.arguments||M.arguments,toolCallId:M.id}}));let T=typeof h.content=="string"?h.content:JSON.stringify(h.content);return h.role==="assistant"&&!T?.trim()?null:{...x,content:T,type:"message"}},W=A(async h=>{i(!0),a([]),u(h);try{let x=await t.getOrCreateSession(),M=`${e.backendUrl}${e.apiPaths.conversations}${h}/?limit=10&offset=0`,S=await fetch(M,t.getFetchOptions({method:"GET"},x));if(S.ok){let E=await S.json(),$=t.transformResponse(E);$.messages&&a($.messages.flatMap(V).filter(Boolean)),_($.hasMore||!1),y($.messages?.length||0)}else S.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch(x){console.error("[ChatWidget] Failed to load conversation:",x)}finally{i(!1)}},[e,t,n]),B=A(async()=>{if(!(!l||p||!r)){v(!0);try{let h=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${w}`,M=await fetch(T,t.getFetchOptions({method:"GET"},h));if(M.ok){let S=await M.json(),E=t.transformResponse(S);if(E.messages?.length>0){let $=E.messages.flatMap(V).filter(Boolean);a(D=>[...$,...D]),y(D=>D+E.messages.length),_(E.hasMore||!1)}else _(!1)}}catch(h){console.error("[ChatWidget] Failed to load more messages:",h)}finally{v(!1)}}},[e,t,l,w,p,r]),q=A(async(h,x,T={})=>{if(o)return;let M=s[h];if(!M||M.role!=="user")return;let S=s.slice(0,h);a(S),await N(x,{...T,supersedeFromMessageIndex:h})},[s,o,N]),H=A(async(h,x={})=>{if(o)return;let T=s[h];if(!T)return;let M=h,S=T;if(T.role==="assistant"){for(let $=h-1;$>=0;$--)if(s[$].role==="user"){M=$,S=s[$];break}if(S.role!=="user")return}else if(T.role!=="user")return;let E=s.slice(0,M);a(E),await N(S.content,{...x,supersedeFromMessageIndex:M})},[s,o,N]);return K(()=>()=>{g.current&&g.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:l,hasMoreMessages:r,loadingMoreMessages:p,sendMessage:N,cancelRun:J,clearMessages:z,loadConversation:W,loadMoreMessages:B,setConversationId:u,editMessage:q,retryMessage:H}}function At(e,t,n){let[s,a]=C([]),[o,i]=C(null),[c,d]=C(null),[l,u]=C(!1);K(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let v=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(v.ok){let w=await v.json(),y=w.models||[];a(y),d(w.default);let g=n?.get(e.modelKey);g&&y.some(k=>k.id===g)?i(g):i(w.default)}}catch(v){console.warn("[ChatWidget] Failed to load models:",v)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let r=A(p=>{i(p),n?.set(e.modelKey,p)},[e.modelKey,n]),_=A(()=>s.find(p=>p.id===o)||null,[s,o]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:l,selectModel:r,getSelectedModelInfo:_}}function Dt(e,t){let[n,s]=C(null),[a,o]=C(!1),[i,c]=C(null),d=e.apiPaths?.tasks||"/api/agent/tasks/",l=A(async()=>{o(!0),c(null);try{let w=`${e.backendUrl}${d}`,y=await fetch(w,t.getFetchOptions({method:"GET"}));if(y.ok){let g=await y.json();s(g)}else{let g=await y.json().catch(()=>({}));c(g.error||"Failed to load tasks")}}catch(w){console.error("[useTasks] Failed to load task list:",w),c("Failed to load tasks")}finally{o(!1)}},[e.backendUrl,d,t]),u=A(async w=>{if(!n)return null;try{let y=`${e.backendUrl}${d}${n.id}/add_task/`,g=await fetch(y,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}));if(g.ok){let k=await g.json();return await l(),k}else{let k=await g.json().catch(()=>({}));return c(k.error||"Failed to add task"),null}}catch(y){return console.error("[useTasks] Failed to add task:",y),c("Failed to add task"),null}},[e.backendUrl,d,n,t,l]),r=A(async(w,y)=>{if(!n)return null;try{let g=`${e.backendUrl}${d}${n.id}/update_task/${w}/`,k=await fetch(g,t.getFetchOptions({method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}));if(k.ok){let I=await k.json();return await l(),I}else{let I=await k.json().catch(()=>({}));return c(I.error||"Failed to update task"),null}}catch(g){return console.error("[useTasks] Failed to update task:",g),c("Failed to update task"),null}},[e.backendUrl,d,n,t,l]),_=A(async w=>{if(!n)return!1;try{let y=`${e.backendUrl}${d}${n.id}/remove_task/${w}/`,g=await fetch(y,t.getFetchOptions({method:"DELETE"}));if(g.ok)return await l(),!0;{let k=await g.json().catch(()=>({}));return c(k.error||"Failed to remove task"),!1}}catch(y){return console.error("[useTasks] Failed to remove task:",y),c("Failed to remove task"),!1}},[e.backendUrl,d,n,t,l]),p=A(async()=>{if(!n)return!1;try{let w=`${e.backendUrl}${d}${n.id}/clear/`,y=await fetch(w,t.getFetchOptions({method:"POST"}));if(y.ok)return await l(),!0;{let g=await y.json().catch(()=>({}));return c(g.error||"Failed to clear tasks"),!1}}catch(w){return console.error("[useTasks] Failed to clear tasks:",w),c("Failed to clear tasks"),!1}},[e.backendUrl,d,n,t,l]),v=A(()=>c(null),[]);return{taskList:n,tasks:n?.tasks||[],progress:n?.progress||{total:0,completed:0,percent_complete:0},isLoading:a,error:i,loadTaskList:l,addTask:u,updateTask:r,removeTask:_,clearTasks:p,clearError:v}}function Rt(e,t,n){let s=u=>!u||typeof u!="object"||e.apiCaseStyle==="camel"?u:$e(u),a=u=>!u||typeof u!="object"||e.apiCaseStyle==="snake"?u:we(u),o=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",i=(u=null)=>{let r=o(),_={},p=u||e.authToken||t().authToken;if(r==="token"&&p){let v=e.authHeader||"Authorization",w=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";_[v]=w?`${w} ${p}`:p}else if(r==="jwt"&&p){let v=e.authHeader||"Authorization",w=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";_[v]=w?`${w} ${p}`:p}else if(r==="anonymous"&&p){let v=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";_[v]=p}if(r==="session"){let v=$t(e.csrfCookieName);v&&(_["X-CSRFToken"]=v)}return _};return{getAuthStrategy:o,getAuthHeaders:i,getFetchOptions:(u={},r=null)=>{let _=o(),p={...u},v=i(r);return console.log("[ChatWidget] getFetchOptions - strategy:",_,"overrideToken:",r,"authHeaders:",v),p.headers={...p.headers,...v},_==="session"&&(p.credentials="include"),p},getOrCreateSession:async(u=!1)=>{let r=o(),_=t(),p=e.anonymousTokenKey||e.sessionTokenKey;if(r!=="anonymous")return e.authToken||_.authToken;if(!u){if(_.authToken)return _.authToken;let v=_.storage?.get(p);if(v)return n(w=>({...w,authToken:v})),v}try{let v=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,w=await fetch(`${e.backendUrl}${v}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(w.ok){let y=await w.json();return n(g=>({...g,authToken:y.token})),_.storage?.set(p,y.token),y.token}}catch(v){console.warn("[ChatWidget] Failed to create session:",v)}return null},clearSession:()=>{let u=e.anonymousTokenKey||e.sessionTokenKey,r=t();n(_=>({..._,authToken:null})),r.storage?.set(u,null)},transformRequest:s,transformResponse:a}}function Pt({config:e,onStateChange:t,markdownParser:n,apiRef:s}){let[a,o]=C(e.embedded||e.forceOpen===!0),[i,c]=C(!1),[d,l]=C(!1),[u,r]=C(!1),[_,p]=C([]),[v,w]=C("chat"),[y,g]=C(!1),[k,I]=C(e.enableTTS),[N,J]=C(!1),[z,V]=C(null);K(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let W=re(()=>wt(e.containerId),[e.containerId]),[B,q]=C(e.authToken||null),H=re(()=>Rt(e,()=>({authToken:B,storage:W}),G=>{let ie=G({authToken:B,storage:W});ie.authToken!==B&&q(ie.authToken)}),[e,B,W]),h=It(e,H,W),x=At(e,H,W),T=Dt(e,H);K(()=>{for(let b=h.messages.length-1;b>=0;b--){let R=h.messages[b];if(R.type==="sub_agent_start"){V({key:R.metadata?.subAgentKey,name:R.metadata?.agentName});return}if(R.type==="sub_agent_end"){V(null);return}}},[h.messages]),K(()=>{let b=W.get(e.conversationIdKey);b&&h.loadConversation(b)},[]),K(()=>{t&&t({isOpen:a,isExpanded:i,debugMode:d,messages:h.messages,conversationId:h.conversationId,isLoading:h.isLoading,error:h.error})},[a,i,d,h.messages,h.conversationId,h.isLoading,h.error]);let M=A(async()=>{if(e.showConversationSidebar){g(!0);try{let b=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,R=await fetch(b,H.getFetchOptions({method:"GET"}));if(R.ok){let G=await R.json();p(G.results||G)}}catch(b){console.error("[ChatWidget] Failed to load conversations:",b),p([])}finally{g(!1)}}},[e,H]),S=A(()=>{let b=!u;r(b),b&&M()},[u,M]),E=A(b=>{b!==h.conversationId&&h.loadConversation(b),r(!1)},[h]),$=A(()=>{h.clearMessages(),r(!1)},[h]),D=A(b=>{h.sendMessage(b,{model:x.selectedModel,onAssistantMessage:R=>{}})},[h,k,x.selectedModel]),F=A(b=>{w(b),b==="tasks"&&T.loadTaskList()},[T]);if(K(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:b=>D(b),clearMessages:()=>h.clearMessages(),toggleTTS:()=>I(b=>!b),stopSpeech:()=>J(!1),setAuth:b=>{b.token!==void 0&&q(b.token)},clearAuth:()=>q(null)})},[h,s,D]),!e.embedded&&!a)return f`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let m=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return f`
    <div class=${m} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&f`
        <${Mt}
          isOpen=${u}
          conversations=${_}
          conversationsLoading=${y}
          currentConversationId=${h.conversationId}
          onClose=${()=>r(!1)}
          onNewConversation=${$}
          onSwitchConversation=${E}
        />
      `}
      
      <${kt}
        config=${e}
        debugMode=${d}
        isExpanded=${i}
        isSpeaking=${N}
        messagesCount=${h.messages.length}
        isLoading=${h.isLoading}
        currentAgent=${z}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!d)}
        onToggleTTS=${()=>I(!k)}
        onClear=${h.clearMessages}
        onToggleSidebar=${S}
      />

      ${e.showTasksTab!==!1&&f`
        <div class="cw-tabs">
          <button
            class=${`cw-tab ${v==="chat"?"cw-tab-active":""}`}
            onClick=${()=>F("chat")}
          >
            Chat
          </button>
          <button
            class=${`cw-tab ${v==="tasks"?"cw-tab-active":""}`}
            onClick=${()=>F("tasks")}
          >
            Tasks ${T.progress.total>0?f`<span class="cw-tab-badge">${T.progress.completed}/${T.progress.total}</span>`:""}
          </button>
        </div>
      `}

      ${d&&f`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      ${v==="chat"?f`
        <${St}
          messages=${h.messages}
          isLoading=${h.isLoading}
          hasMoreMessages=${h.hasMoreMessages}
          loadingMoreMessages=${h.loadingMoreMessages}
          onLoadMore=${h.loadMoreMessages}
          onEditMessage=${h.editMessage}
          onRetryMessage=${h.retryMessage}
          debugMode=${d}
          markdownParser=${n}
          emptyStateTitle=${e.emptyStateTitle}
          emptyStateMessage=${e.emptyStateMessage}
        />

        ${h.error&&f`<div class="cw-error-bar">${h.error}</div>`}

        ${e.showModelSelector&&x.availableModels.length>0&&f`
          <${xt}
            availableModels=${x.availableModels}
            selectedModel=${x.selectedModel}
            onSelectModel=${x.selectModel}
            disabled=${h.isLoading}
          />
        `}

        <${Tt}
          onSend=${D}
          onCancel=${h.cancelRun}
          isLoading=${h.isLoading}
          placeholder=${e.placeholder}
          primaryColor=${e.primaryColor}
          enableVoice=${e.enableVoice}
        />
      `:f`
        <${Et}
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
  `}var Ft={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function Ot(e){let t={...Ft.apiPaths,...e.apiPaths||{}};return{...Ft,...e,apiPaths:t}}var Se=new Map,rn=0,P=null,Ue=class{constructor(t={}){We(this,"_handleStateChange",t=>{this._state=t});this.instanceId=`cw-${++rn}`,this.config=Ot(t),this.container=null,this._state={},this._apiRef={current:null},Se.set(this.instanceId,this)}init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&ye(f`<${Pt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${Te._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(ye(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),Se.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Ht(e={}){return new Ue(e).init()}function ln(e={}){return P&&P.destroy(),P=Ht(e),P}function cn(){P&&(P.destroy(),P=null)}function un(){P&&P.open()}function dn(){P&&P.close()}function _n(e){P&&P.send(e)}function pn(){P&&P.clearMessages()}function hn(){P&&P.toggleTTS()}function fn(){P&&P.stopSpeech()}function mn(e){P&&P.setAuth(e)}function gn(){P&&P.clearAuth()}function yn(){return P?P.getState():null}function vn(){return P?P.getConfig():null}var Te={createInstance:Ht,getInstance:e=>Se.get(e),getAllInstances:()=>Array.from(Se.values()),init:ln,destroy:cn,open:un,close:dn,send:_n,clearMessages:pn,toggleTTS:hn,stopSpeech:fn,setAuth:mn,clearAuth:gn,getState:yn,getConfig:vn,_enhancedMarkdownParser:null};var wn=Te;typeof window<"u"&&(window.ChatWidget=Te);return jt($n);})();
