var ChatWidgetModule=(()=>{var be=Object.defineProperty;var Et=Object.getOwnPropertyDescriptor;var At=Object.getOwnPropertyNames;var Pt=Object.prototype.hasOwnProperty;var Dt=(e,t)=>{for(var n in t)be(e,n,{get:t[n],enumerable:!0})},Rt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of At(t))!Pt.call(e,r)&&r!==n&&be(e,r,{get:()=>t[r],enumerable:!(s=Et(t,r))||s.enumerable});return e};var Ht=e=>Rt(be({},"__esModule",{value:!0}),e);var ln={};Dt(ln,{ChatWidget:()=>$e,default:()=>an});var ce,A,Be,Nt,Z,Fe,Ke,ze,Je,Te,ke,Ce,Ot,te={},Ve=[],Ft=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function X(e,t){for(var n in t)e[n]=t[n];return e}function Me(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function de(e,t,n){var s,r,o,i={};for(o in t)o=="key"?s=t[o]:o=="ref"?r=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?ce.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return ie(e,i,s,r,null)}function ie(e,t,n,s,r){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Be,__i:-1,__u:0};return r==null&&A.vnode!=null&&A.vnode(o),o}function _e(e){return e.children}function ee(e,t){this.props=e,this.context=t}function Y(e,t){if(t==null)return e.__?Y(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Y(e):null}function je(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return je(e)}}function We(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!le.__r++||Fe!=A.debounceRendering)&&((Fe=A.debounceRendering)||Ke)(le)}function le(){for(var e,t,n,s,r,o,i,c=1;Z.length;)Z.length>c&&Z.sort(ze),e=Z.shift(),c=Z.length,e.__d&&(n=void 0,s=void 0,r=(s=(t=e).__v).__e,o=[],i=[],t.__P&&((n=X({},s)).__v=s.__v+1,A.vnode&&A.vnode(n),xe(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[r]:null,o,r??Y(s),!!(32&s.__u),i),n.__v=s.__v,n.__.__k[n.__i]=n,Xe(o,n,i),s.__e=s.__=null,n.__e!=r&&je(n)));le.__r=0}function qe(e,t,n,s,r,o,i,c,h,l,u){var a,p,d,v,S,w,y,$=s&&s.__k||Ve,R=t.length;for(h=Wt(n,t,$,h,R),a=0;a<R;a++)(d=n.__k[a])!=null&&(p=d.__i==-1?te:$[d.__i]||te,d.__i=a,w=xe(e,d,p,r,o,i,c,h,l,u),v=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&Ie(p.ref,null,d),u.push(d.ref,d.__c||v,d)),S==null&&v!=null&&(S=v),(y=!!(4&d.__u))||p.__k===d.__k?h=Ge(d,h,e,y):typeof d.type=="function"&&w!==void 0?h=w:v&&(h=v.nextSibling),d.__u&=-7);return n.__e=S,h}function Wt(e,t,n,s,r){var o,i,c,h,l,u=n.length,a=u,p=0;for(e.__k=new Array(r),o=0;o<r;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[o]=ie(null,i,null,null,null):ue(i)?i=e.__k[o]=ie(_e,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[o]=ie(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[o]=i,h=o+p,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Ut(i,n,h,a))!=-1&&(a--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>u?p--:r<u&&p++),typeof i.type!="function"&&(i.__u|=4)):l!=h&&(l==h-1?p--:l==h+1?p++:(l>h?p--:p++,i.__u|=4))):e.__k[o]=null;if(a)for(o=0;o<u;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=Y(c)),Ze(c,c));return s}function Ge(e,t,n,s){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Ge(r[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=Y(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ut(e,t,n,s){var r,o,i,c=e.key,h=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&c==null||u&&c==l.key&&h==l.type)return n;if(s>(u?1:0)){for(r=n-1,o=n+1;r>=0||o<t.length;)if((l=t[i=r>=0?r--:o++])!=null&&!(2&l.__u)&&c==l.key&&h==l.type)return i}return-1}function Ue(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ft.test(t)?n:n+"px"}function ae(e,t,n,s,r){var o,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Ue(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Ue(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Je,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=Te,e.addEventListener(t,o?Ce:ke,o)):e.removeEventListener(t,o?Ce:ke,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Le(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Te++;else if(t.t<n.u)return;return n(A.event?A.event(t):t)}}}function xe(e,t,n,s,r,o,i,c,h,l){var u,a,p,d,v,S,w,y,$,R,T,L,P,J,V,B,m,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(h=!!(32&n.__u),o=[c=t.__e=n.__e]),(u=A.__b)&&u(t);e:if(typeof b=="function")try{if(y=t.props,$="prototype"in b&&b.prototype.render,R=(u=b.contextType)&&s[u.__c],T=u?R?R.props.value:u.__:s,n.__c?w=(a=t.__c=n.__c).__=a.__E:($?t.__c=a=new b(y,T):(t.__c=a=new ee(y,T),a.constructor=b,a.render=Bt),R&&R.sub(a),a.state||(a.state={}),a.__n=s,p=a.__d=!0,a.__h=[],a._sb=[]),$&&a.__s==null&&(a.__s=a.state),$&&b.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=X({},a.__s)),X(a.__s,b.getDerivedStateFromProps(y,a.__s))),d=a.props,v=a.state,a.__v=t,p)$&&b.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),$&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if($&&b.getDerivedStateFromProps==null&&y!==d&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,T),t.__v==n.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,T)===!1){for(t.__v!=n.__v&&(a.props=y,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(D){D&&(D.__=t)}),L=0;L<a._sb.length;L++)a.__h.push(a._sb[L]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,T),$&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(d,v,S)})}if(a.context=T,a.props=y,a.__P=e,a.__e=!1,P=A.__r,J=0,$){for(a.state=a.__s,a.__d=!1,P&&P(t),u=a.render(a.props,a.state,a.context),V=0;V<a._sb.length;V++)a.__h.push(a._sb[V]);a._sb=[]}else do a.__d=!1,P&&P(t),u=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++J<25);a.state=a.__s,a.getChildContext!=null&&(s=X(X({},s),a.getChildContext())),$&&!p&&a.getSnapshotBeforeUpdate!=null&&(S=a.getSnapshotBeforeUpdate(d,v)),B=u,u!=null&&u.type===_e&&u.key==null&&(B=Qe(u.props.children)),c=qe(e,ue(B)?B:[B],t,n,s,r,o,i,c,h,l),a.base=t.__e,t.__u&=-161,a.__h.length&&i.push(a),w&&(a.__E=a.__=null)}catch(D){if(t.__v=null,h||o!=null)if(D.then){for(t.__u|=h?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(m=o.length;m--;)Me(o[m]);Se(t)}else t.__e=n.__e,t.__k=n.__k,D.then||Se(t);A.__e(D,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Lt(n.__e,t,n,s,r,o,i,h,l);return(u=A.diffed)&&u(t),128&t.__u?void 0:c}function Se(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Se)}function Xe(e,t,n){for(var s=0;s<n.length;s++)Ie(n[s],n[++s],n[++s]);A.__c&&A.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){A.__e(o,r.__v)}})}function Qe(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ue(e)?e.map(Qe):X({},e)}function Lt(e,t,n,s,r,o,i,c,h){var l,u,a,p,d,v,S,w=n.props||te,y=t.props,$=t.type;if($=="svg"?r="http://www.w3.org/2000/svg":$=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((d=o[l])&&"setAttribute"in d==!!$&&($?d.localName==$:d.nodeType==3)){e=d,o[l]=null;break}}if(e==null){if($==null)return document.createTextNode(y);e=document.createElementNS(r,$,y.is&&y),c&&(A.__m&&A.__m(t,o),c=!1),o=null}if($==null)w===y||c&&e.data==y||(e.data=y);else{if(o=o&&ce.call(e.childNodes),!c&&o!=null)for(w={},l=0;l<e.attributes.length;l++)w[(d=e.attributes[l]).name]=d.value;for(l in w)if(d=w[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=d;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;ae(e,l,null,d,r)}}for(l in y)d=y[l],l=="children"?p=d:l=="dangerouslySetInnerHTML"?u=d:l=="value"?v=d:l=="checked"?S=d:c&&typeof d!="function"||w[l]===d||ae(e,l,d,w[l],r);if(u)c||a&&(u.__html==a.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(a&&(e.innerHTML=""),qe(t.type=="template"?e.content:e,ue(p)?p:[p],t,n,s,$=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,i,o?o[0]:n.__k&&Y(n,0),c,h),o!=null)for(l=o.length;l--;)Me(o[l]);c||(l="value",$=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[l]||$=="progress"&&!v||$=="option"&&v!=w[l])&&ae(e,l,v,w[l],r),l="checked",S!=null&&S!=e[l]&&ae(e,l,S,w[l],r))}return e}function Ie(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(r){A.__e(r,n)}}function Ze(e,t,n){var s,r;if(A.unmount&&A.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||Ie(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){A.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&Ze(s[r],t,n||typeof e.type!="function");n||Me(e.__e),e.__c=e.__=e.__e=void 0}function Bt(e,t,n){return this.constructor(e,n)}function pe(e,t,n){var s,r,o,i;t==document&&(t=document.documentElement),A.__&&A.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],xe(t,e=(!s&&n||t).__k=de(_e,null,[e]),r||te,te,t.namespaceURI,!s&&n?[n]:r?null:t.firstChild?ce.call(t.childNodes):null,o,!s&&n?n:r?r.__e:t.firstChild,s,i),Xe(o,e,i)}ce=Ve.slice,A={__e:function(e,t,n,s){for(var r,o,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),i=r.__d),i)return r.__E=r}catch(c){e=c}throw e}},Be=0,Nt=function(e){return e!=null&&e.constructor===void 0},ee.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=X({},this.state),typeof e=="function"&&(e=e(X({},n),this.props)),e&&X(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),We(this))},ee.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),We(this))},ee.prototype.render=_e,Z=[],Ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ze=function(e,t){return e.__v.__b-t.__v.__b},le.__r=0,Je=/(PointerCapture)$|Capture$/i,Te=0,ke=Le(!1),Ce=Le(!0),Ot=0;var et=function(e,t,n,s){var r;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];i===3?s[0]=c:i===4?s[1]=Object.assign(s[1]||{},c):i===5?(s[1]=s[1]||{})[t[++o]]=c:i===6?s[1][t[++o]]+=c+"":i?(r=e.apply(c,et(e,c,n,["",null])),s.push(r),c[0]?t[0]|=2:(t[o-2]=0,t[o]=r)):s.push(c)}return s},Ye=new Map;function tt(e){var t=Ye.get(this);return t||(t=new Map,Ye.set(this,t)),(t=et(this,t.get(e)||(t.set(e,t=function(n){for(var s,r,o=1,i="",c="",h=[0],l=function(p){o===1&&(p||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,p,i):o===3&&(p||i)?(h.push(3,p,i),o=2):o===2&&i==="..."&&p?h.push(4,p,0):o===2&&i&&!p?h.push(5,0,!0,i):o>=5&&((i||!p&&o===5)&&(h.push(o,0,i,r),o=6),p&&(h.push(o,p,0,r),o=6)),i=""},u=0;u<n.length;u++){u&&(o===1&&l(),l(u));for(var a=0;a<n[u].length;a++)s=n[u][a],o===1?s==="<"?(l(),h=[h],o=3):i+=s:o===4?i==="--"&&s===">"?(o=1,i=""):i=s+i[0]:c?s===c?c="":i+=s:s==='"'||s==="'"?c=s:s===">"?(l(),o=1):o&&(s==="="?(o=5,r=i,i=""):s==="/"&&(o<5||n[u][a+1]===">")?(l(),o===3&&(h=h[0]),o=h,(h=h[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),o=2):i+=s),o===3&&i==="!--"&&(o=4,h=h[0])}return l(),h}(e)),t),arguments,[])).length>1?t:t[0]}var g=tt.bind(de);var ne,H,Ee,nt,oe=0,ut=[],O=A,ot=O.__b,st=O.__r,rt=O.diffed,at=O.__c,it=O.unmount,lt=O.__;function Pe(e,t){O.__h&&O.__h(H,e,oe||t),oe=0;var n=H.__H||(H.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return oe=1,Kt(_t,e)}function Kt(e,t,n){var s=Pe(ne++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):_t(void 0,t),function(c){var h=s.__N?s.__N[0]:s.__[0],l=s.t(h,c);h!==l&&(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=H,!H.__f)){var r=function(c,h,l){if(!s.__c.__H)return!0;var u=s.__c.__H.__.filter(function(p){return!!p.__c});if(u.every(function(p){return!p.__N}))return!o||o.call(this,c,h,l);var a=s.__c.props!==c;return u.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(a=!0)}}),o&&o.call(this,c,h,l)||a};H.__f=!0;var o=H.shouldComponentUpdate,i=H.componentWillUpdate;H.componentWillUpdate=function(c,h,l){if(this.__e){var u=o;o=void 0,r(c,h,l),o=u}i&&i.call(this,c,h,l)},H.shouldComponentUpdate=r}return s.__N||s.__}function W(e,t){var n=Pe(ne++,3);!O.__s&&dt(n.__H,t)&&(n.__=e,n.u=t,H.__H.__h.push(n))}function q(e){return oe=5,se(function(){return{current:e}},[])}function se(e,t){var n=Pe(ne++,7);return dt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function K(e,t){return oe=8,se(function(){return e},t)}function zt(){for(var e;e=ut.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(fe),e.__H.__h.forEach(Ae),e.__H.__h=[]}catch(t){e.__H.__h=[],O.__e(t,e.__v)}}O.__b=function(e){H=null,ot&&ot(e)},O.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),lt&&lt(e,t)},O.__r=function(e){st&&st(e),ne=0;var t=(H=e.__c).__H;t&&(Ee===H?(t.__h=[],H.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(fe),t.__h.forEach(Ae),t.__h=[],ne=0)),Ee=H},O.diffed=function(e){rt&&rt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ut.push(t)!==1&&nt===O.requestAnimationFrame||((nt=O.requestAnimationFrame)||Jt)(zt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Ee=H=null},O.__c=function(e,t){t.some(function(n){try{n.__h.forEach(fe),n.__h=n.__h.filter(function(s){return!s.__||Ae(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],O.__e(s,n.__v)}}),at&&at(e,t)},O.unmount=function(e){it&&it(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{fe(s)}catch(r){t=r}}),n.__H=void 0,t&&O.__e(t,n.__v))};var ct=typeof requestAnimationFrame=="function";function Jt(e){var t,n=function(){clearTimeout(s),ct&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);ct&&(t=requestAnimationFrame(n))}function fe(e){var t=H,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),H=t}function Ae(e){var t=H;e.__c=e.__(),H=t}function dt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function _t(e,t){return typeof t=="function"?t(e):t}function Vt(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function De(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function he(e){return Array.isArray(e)?e.map(he):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[Vt(t),he(n)])):e}function me(e){return Array.isArray(e)?e.map(me):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[De(t),me(n)])):e}function ge(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function F(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function pt(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,r=Math.floor(s/6e4),o=Math.floor(s/36e5),i=Math.floor(s/864e5);return r<1?"Just now":r<60?`${r}m ago`:o<24?`${o}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function ft(e,t=null){if(t)return t(e);let n=F(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function ht(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let r=t(n);s===null?localStorage.removeItem(r):localStorage.setItem(r,s)}catch{}}}}function mt(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[r,o]=s.trim().split("=");if(r===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function ye(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(1))+" "+n[s]}function ve(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function gt({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:r,isLoading:o,currentAgent:i,onClose:c,onToggleExpand:h,onToggleDebug:l,onToggleTTS:u,onClear:a,onToggleSidebar:p}){let{title:d,primaryColor:v,embedded:S,showConversationSidebar:w,showClearButton:y,showDebugButton:$,enableDebugMode:R,showTTSButton:T,showExpandButton:L,enableTTS:P,elevenLabsApiKey:J,ttsProxyUrl:V}=e,B=J||V;return g`
    <div class="cw-header" style=${{backgroundColor:v}}>
      ${w&&g`
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
        <span class="cw-title">${F(d)}</span>
        ${i&&g`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${F(i.name||i.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${y&&g`
          <button 
            class="cw-header-btn" 
            onClick=${a}
            title="Clear"
            disabled=${o||r===0}
          >🗑️</button>
        `}
        
        ${$&&R&&g`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${T&&B&&g`
          <button 
            class="cw-header-btn ${P?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${P?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${L&&!S&&g`
          <button 
            class="cw-header-btn" 
            onClick=${h}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!S&&g`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Re({msg:e,show:t,onToggle:n}){return t?g`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:g`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function yt({msg:e,debugMode:t,markdownParser:n}){let[s,r]=C(!1),[o,i]=C(!1),c=e.role==="user",h=e.role==="system",l=e.type==="tool_call",u=e.type==="tool_result",a=e.type==="error",p=e.type==="sub_agent_start",d=e.type==="sub_agent_end",v=e.type==="agent_context";if(h&&!t)return null;if(p||d||v)return g`
      <div class="cw-agent-context ${p?"cw-agent-delegating":""} ${d?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${p?"\u{1F517}":d?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&g`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&g`<${Re} msg=${e} show=${o} onToggle=${()=>i(!o)} />`}
      </div>
    `;if(l||u){let T=e.metadata?.arguments||e.metadata?.result,L=P=>{if(typeof P=="string")try{return JSON.stringify(JSON.parse(P),null,2)}catch{return P}return JSON.stringify(P,null,2)};return g`
      <div class="cw-tool-message ${u?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>T&&r(!s)}>
          ${e.content}
          ${T&&g`<span class="cw-tool-expand">${s?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${s&&T&&g`
          <pre class="cw-tool-details">${F(L(l?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&g`<${Re} msg=${e} show=${o} onToggle=${()=>i(!o)} />`}
      </div>
    `}let S=["cw-message",c&&"cw-message-user",a&&"cw-message-error"].filter(Boolean).join(" "),w=`cw-message-row ${c?"cw-message-row-user":""}`,y=e.role==="assistant"?ft(e.content,n):F(e.content),$=e.files&&e.files.length>0;return g`
    <div class=${w} style="position: relative;">
      ${$?g`
      <div class="cw-message-attachments">
        ${e.files.map(T=>T.type&&T.type.startsWith("image/")?g`
              <a class="cw-attachment-thumbnail" href=${T.url} target="_blank" title=${T.name}>
                <img src=${T.url} alt=${T.name} />
              </a>
            `:g`
            <a class="cw-attachment-file" href=${T.url} target="_blank" title=${T.name}>
              <span class="cw-attachment-icon">${ve(T.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${T.name}</span>
                <span class="cw-attachment-size">${ye(T.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null}
      <div class=${S} dangerouslySetInnerHTML=${{__html:y}} />
      ${t&&g`<${Re} msg=${e} show=${o} onToggle=${()=>i(!o)} />`}
    </div>
  `}function vt({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:r,debugMode:o,markdownParser:i,emptyStateTitle:c,emptyStateMessage:h}){let l=q(null),u=q(!0),a=d=>{let v=d.target,S=v.scrollHeight-v.scrollTop-v.clientHeight<100;if(u.current=S,v.scrollTop<50&&n&&!s){let w=v.scrollHeight;r().then(()=>{let y=v.scrollHeight;v.scrollTop=y-w+v.scrollTop})}};W(()=>{let d=l.current;d&&u.current&&requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight})},[e,t]),W(()=>{let d=l.current;d&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight}))},[e.length]);let p=e.length===0;return g`
    <div class="cw-messages" ref=${l} onScroll=${a}>
      ${p&&g`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${F(c)}</h3>
          <p>${F(h)}</p>
        </div>
      `}
      
      ${!p&&n&&g`
        <div class="cw-load-more" onClick=${r}>
          ${s?g`<span class="cw-spinner"></span><span>Loading...</span>`:g`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map(d=>g`
        <${yt} 
          key=${d.id} 
          msg=${d} 
          debugMode=${o}
          markdownParser=${i}
        />
      `)}
      
      ${t&&g`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}var He=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function wt({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:r,enableVoice:o=!0,enableFiles:i=!0}){let[c,h]=C(""),[l,u]=C([]),[a,p]=C(!1),[d,v]=C(!1),[S]=C(()=>!!He),w=q(null),y=q(null),$=q(null),R=q(!1);W(()=>{!n&&w.current&&w.current.focus()},[n]),W(()=>{w.current&&(w.current.style.height="auto",w.current.style.height=Math.min(w.current.scrollHeight,150)+"px")},[c]),W(()=>()=>{R.current=!1,$.current&&$.current.abort()},[]);let T=_=>{_.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),h(""),u([]),w.current&&(w.current.style.height="auto"),y.current&&(y.current.value=""))},L=_=>{let f=Array.from(_.target.files||[]);f.length>0&&u(k=>[...k,...f])},P=_=>{u(f=>f.filter((k,x)=>x!==_))},J=_=>{_.preventDefault(),y.current&&!n&&y.current.click()},V=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),T(_))},B=_=>{n&&t&&(_.preventDefault(),t())},m=()=>{if(!He||n)return;R.current=!0;let _=new He;_.continuous=!0,_.interimResults=!0,_.lang=navigator.language||"en-US";let f=c,k="";_.onstart=()=>{v(!0)},_.onresult=x=>{k="";for(let z=x.resultIndex;z<x.results.length;z++){let G=x.results[z][0].transcript;x.results[z].isFinal?f+=(f?" ":"")+G:k+=G}h(f+(k?" "+k:""))},_.onerror=x=>{if(x.error==="no-speech"||x.error==="aborted"){console.log("[ChatWidget] Speech recognition:",x.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",x.error),R.current=!1,v(!1),h(f||c)},_.onend=()=>{if(R.current){console.log("[ChatWidget] Recognition paused, restarting...");try{_.start();return}catch(x){console.warn("[ChatWidget] Could not restart recognition:",x)}}v(!1),f&&h(f),$.current=null},$.current=_,_.start()},b=()=>{R.current=!1,$.current&&$.current.stop()},D=_=>{_.preventDefault(),d?b():m()},E=g`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,U=g`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,M=g`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,N=o&&S,j=i;return g`
    <form class="cw-input-form" onSubmit=${T}>
      <input
        type="file"
        ref=${y}
        style="display: none"
        multiple
        onChange=${L}
      />
      ${l.length>0&&g`
        <div class="cw-file-chips">
          ${l.map((_,f)=>g`
            <div class="cw-file-chip" key=${f}>
              <span class="cw-file-chip-icon">${ve(_.type)}</span>
              <span class="cw-file-chip-name" title=${_.name}>${_.name.length>20?_.name.substring(0,17)+"...":_.name}</span>
              <span class="cw-file-chip-size">(${ye(_.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>P(f)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${w}
        class="cw-input"
        placeholder=${F(s)}
        value=${c}
        onInput=${_=>h(_.target.value)}
        onKeyDown=${V}
        disabled=${n}
        rows="1"
      />
      ${j&&g`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${J}
          disabled=${n}
          title="Attach files"
        >
          ${M}
        </button>
      `}
      ${N&&g`
        <button
          type="button"
          class=${`cw-voice-btn ${d?"cw-voice-btn-recording":""}`}
          onClick=${D}
          disabled=${n}
          title=${d?"Stop recording":"Voice input"}
        >
          ${U}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&a?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&a?"#dc2626":r}}
        onClick=${B}
        onMouseEnter=${()=>p(!0)}
        onMouseLeave=${()=>p(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?a?E:g`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function $t({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:s,onClose:r,onNewConversation:o,onSwitchConversation:i}){return g`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${r}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${o}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&g`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&g`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(c=>g`
          <div 
            key=${c.id}
            class="cw-conversation-item ${c.id===s?"cw-conversation-active":""}"
            onClick=${()=>i(c.id)}
          >
            <div class="cw-conversation-title">${F(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${pt(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${r}
    />
  `}function bt({availableModels:e,selectedModel:t,onSelectModel:n,disabled:s}){let[r,o]=C(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",h=()=>{s||o(!r)},l=u=>{n(u),o(!1)};return g`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${h}
        disabled=${s}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${F(c)}</span>
        <span class="cw-model-chevron">${r?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${r&&g`
        <div class="cw-model-dropdown">
          ${e.map(u=>g`
            <button 
              key=${u.id}
              class="cw-model-option ${u.id===t?"cw-model-option-selected":""}"
              onClick=${()=>l(u.id)}
            >
              <span class="cw-model-option-name">${F(u.name)}</span>
              <span class="cw-model-option-provider">${F(u.provider)}</span>
              ${u.description&&g`
                <span class="cw-model-option-desc">${F(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}function kt(e,t,n){let[s,r]=C([]),[o,i]=C(!1),[c,h]=C(null),[l,u]=C(()=>n?.get(e.conversationIdKey)||null),[a,p]=C(!1),[d,v]=C(!1),[S,w]=C(0),y=q(null),$=q(null);W(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let R=K(async(m,b,D)=>{y.current&&y.current.close();let E=e.apiPaths.runEvents.replace("{runId}",m),U=`${e.backendUrl}${E}`;b&&(U+=`?anonymous_token=${encodeURIComponent(b)}`);let M=new EventSource(U);y.current=M;let N="";M.addEventListener("assistant.message",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("assistant.message",f.payload);let k=f.payload.content;k&&(N+=k,r(x=>{let z=x[x.length-1];return z?.role==="assistant"&&z.id.startsWith("assistant-stream-")?[...x.slice(0,-1),{...z,content:N}]:[...x,{id:"assistant-stream-"+Date.now(),role:"assistant",content:N,timestamp:new Date,type:"message"}]}))}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("tool.call",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("tool.call",f.payload),r(k=>[...k,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${f.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:f.payload.name,arguments:f.payload.arguments,toolCallId:f.payload.id}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("tool.result",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("tool.result",f.payload);let k=f.payload.result,x=k?.error;r(z=>[...z,{id:"tool-result-"+Date.now(),role:"system",content:x?`\u274C ${k.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:f.payload.name,result:k,toolCallId:f.payload.tool_call_id}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("custom",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("custom",f.payload),f.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(f.payload),f.payload?.type==="agent_context"&&r(k=>[...k,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${f.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:f.payload.agent_key,agentName:f.payload.agent_name,action:f.payload.action}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("sub_agent.start",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("sub_agent.start",f.payload),r(k=>[...k,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${f.payload.agent_name||f.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:f.payload.sub_agent_key,agentName:f.payload.agent_name,invocationMode:f.payload.invocation_mode}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("sub_agent.end",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("sub_agent.end",f.payload),r(k=>[...k,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${f.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:f.payload.sub_agent_key,agentName:f.payload.agent_name}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}});let j=_=>{try{let f=JSON.parse(_.data);if(e.onEvent&&e.onEvent(f.type,f.payload),f.type==="run.failed"){let k=f.payload.error||"Agent run failed";h(k),r(x=>[...x,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${k}`,timestamp:new Date,type:"error"}])}}catch(f){console.error("[ChatWidget] Parse error:",f)}i(!1),M.close(),y.current=null,N&&D&&D(N)};M.addEventListener("run.succeeded",j),M.addEventListener("run.failed",j),M.addEventListener("run.cancelled",j),M.addEventListener("run.timed_out",j),M.onerror=()=>{i(!1),M.close(),y.current=null}},[e]),T=K(async(m,b={},D={})=>{if(!m.trim()||o)return;let E=[],U={};typeof b=="function"?U={onAssistantMessage:b}:Array.isArray(b)?(E=b,U=D):U=b||{};let{model:M,onAssistantMessage:N}=U;i(!0),h(null);let j={id:ge(),role:"user",content:m.trim(),timestamp:new Date,type:"message",files:E.length>0?E.map(_=>({name:_.name,size:_.size,type:_.type})):void 0};r(_=>[..._,j]);try{let _=await t.getOrCreateSession(),f;if(E.length>0){let G=e.apiCaseStyle!=="camel",Oe=re=>G?De(re):re,Q=new FormData;Q.append(Oe("agentKey"),e.agentKey),l&&Q.append(Oe("conversationId"),l),Q.append("messages",JSON.stringify([{role:"user",content:m.trim()}])),Q.append("metadata",JSON.stringify(G?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),M&&Q.append("model",M),E.forEach(re=>{Q.append("files",re)}),f=t.getFetchOptions({method:"POST",body:Q},_)}else{let G=t.transformRequest({agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:m.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...M&&{model:M}});f=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)},_)}let k=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,f);if(!k.ok){let G=await k.json().catch(()=>({}));throw new Error(G.error||`HTTP ${k.status}`)}let x=await k.json(),z=t.transformResponse(x);$.current=z.id,!l&&z.conversationId&&u(z.conversationId),await R(z.id,_,N)}catch(_){h(_.message||"Failed to send message"),i(!1)}finally{$.current=null}},[e,t,l,o,R]),L=K(async()=>{let m=$.current;if(!(!m||!o))try{let b=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",m):`${e.apiPaths.runs}${m}/cancel/`;(await fetch(`${e.backendUrl}${b}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(y.current&&(y.current.close(),y.current=null),i(!1),$.current=null,r(E=>[...E,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(b){console.error("[ChatWidget] Failed to cancel run:",b)}},[e,t,o]),P=K(()=>{r([]),u(null),h(null),p(!1),w(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),J=m=>{let b={id:ge(),role:m.role,timestamp:m.timestamp?new Date(m.timestamp):new Date};if(m.role==="tool")return{...b,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:m.content,toolCallId:m.toolCallId}};if(m.role==="assistant"&&m.toolCalls&&m.toolCalls.length>0)return m.toolCalls.map(E=>({id:ge(),role:"assistant",content:`\u{1F527} ${E.function?.name||E.name||"tool"}`,timestamp:b.timestamp,type:"tool_call",metadata:{toolName:E.function?.name||E.name,arguments:E.function?.arguments||E.arguments,toolCallId:E.id}}));let D=typeof m.content=="string"?m.content:JSON.stringify(m.content);return m.role==="assistant"&&!D?.trim()?null:{...b,content:D,type:"message"}},V=K(async m=>{i(!0),r([]),u(m);try{let b=await t.getOrCreateSession(),E=`${e.backendUrl}${e.apiPaths.conversations}${m}/?limit=10&offset=0`,U=await fetch(E,t.getFetchOptions({method:"GET"},b));if(U.ok){let M=await U.json(),N=t.transformResponse(M);N.messages&&r(N.messages.flatMap(J).filter(Boolean)),p(N.hasMore||!1),w(N.messages?.length||0)}else U.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch(b){console.error("[ChatWidget] Failed to load conversation:",b)}finally{i(!1)}},[e,t,n]),B=K(async()=>{if(!(!l||d||!a)){v(!0);try{let m=await t.getOrCreateSession(),D=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${S}`,E=await fetch(D,t.getFetchOptions({method:"GET"},m));if(E.ok){let U=await E.json(),M=t.transformResponse(U);if(M.messages?.length>0){let N=M.messages.flatMap(J).filter(Boolean);r(j=>[...N,...j]),w(j=>j+M.messages.length),p(M.hasMore||!1)}else p(!1)}}catch(m){console.error("[ChatWidget] Failed to load more messages:",m)}finally{v(!1)}}},[e,t,l,S,d,a]);return W(()=>()=>{y.current&&y.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:l,hasMoreMessages:a,loadingMoreMessages:d,sendMessage:T,cancelRun:L,clearMessages:P,loadConversation:V,loadMoreMessages:B,setConversationId:u}}function Ct(e,t,n){let[s,r]=C([]),[o,i]=C(null),[c,h]=C(null),[l,u]=C(!1);W(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let v=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(v.ok){let S=await v.json(),w=S.models||[];r(w),h(S.default);let y=n?.get(e.modelKey);y&&w.some($=>$.id===y)?i(y):i(S.default)}}catch(v){console.warn("[ChatWidget] Failed to load models:",v)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let a=K(d=>{i(d),n?.set(e.modelKey,d)},[e.modelKey,n]),p=K(()=>s.find(d=>d.id===o)||null,[s,o]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:l,selectModel:a,getSelectedModelInfo:p}}function St(e,t,n){let s=l=>!l||typeof l!="object"||e.apiCaseStyle==="camel"?l:me(l),r=l=>!l||typeof l!="object"||e.apiCaseStyle==="snake"?l:he(l),o=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",i=(l=null)=>{let u=o(),a={},p=l||e.authToken||t().authToken;if(u==="token"&&p){let d=e.authHeader||"Authorization",v=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";a[d]=v?`${v} ${p}`:p}else if(u==="jwt"&&p){let d=e.authHeader||"Authorization",v=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";a[d]=v?`${v} ${p}`:p}else if(u==="anonymous"&&p){let d=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";a[d]=p}if(u==="session"){let d=mt(e.csrfCookieName);d&&(a["X-CSRFToken"]=d)}return a};return{getAuthStrategy:o,getAuthHeaders:i,getFetchOptions:(l={},u=null)=>{let a=o(),p={...l};return p.headers={...p.headers,...i(u)},a==="session"&&(p.credentials="include"),p},getOrCreateSession:async()=>{let l=o(),u=t();if(l!=="anonymous")return e.authToken||u.authToken;if(u.authToken)return u.authToken;let a=e.anonymousTokenKey||e.sessionTokenKey,p=u.storage?.get(a);if(p)return n(d=>({...d,authToken:p})),p;try{let d=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,v=await fetch(`${e.backendUrl}${d}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(v.ok){let S=await v.json();return n(w=>({...w,authToken:S.token})),u.storage?.set(a,S.token),S.token}}catch(d){console.warn("[ChatWidget] Failed to create session:",d)}return null},transformRequest:s,transformResponse:r}}function Tt({config:e,onStateChange:t,markdownParser:n,apiRef:s}){let[r,o]=C(e.embedded||e.forceOpen===!0),[i,c]=C(!1),[h,l]=C(!1),[u,a]=C(!1),[p,d]=C([]),[v,S]=C(!1),[w,y]=C(e.enableTTS),[$,R]=C(!1),[T,L]=C(null);W(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let P=se(()=>ht(e.containerId),[e.containerId]),[J,V]=C(e.authToken||null),B=se(()=>St(e,()=>({authToken:J,storage:P}),k=>{let x=k({authToken:J,storage:P});x.authToken!==J&&V(x.authToken)}),[e,J,P]),m=kt(e,B,P),b=Ct(e,B,P);W(()=>{for(let _=m.messages.length-1;_>=0;_--){let f=m.messages[_];if(f.type==="sub_agent_start"){L({key:f.metadata?.subAgentKey,name:f.metadata?.agentName});return}if(f.type==="sub_agent_end"){L(null);return}}},[m.messages]),W(()=>{let _=P.get(e.conversationIdKey);_&&m.loadConversation(_)},[]),W(()=>{t&&t({isOpen:r,isExpanded:i,debugMode:h,messages:m.messages,conversationId:m.conversationId,isLoading:m.isLoading,error:m.error})},[r,i,h,m.messages,m.conversationId,m.isLoading,m.error]);let D=K(async()=>{if(e.showConversationSidebar){S(!0);try{let _=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,f=await fetch(_,B.getFetchOptions({method:"GET"}));if(f.ok){let k=await f.json();d(k.results||k)}}catch(_){console.error("[ChatWidget] Failed to load conversations:",_),d([])}finally{S(!1)}}},[e,B]),E=K(()=>{let _=!u;a(_),_&&D()},[u,D]),U=K(_=>{_!==m.conversationId&&m.loadConversation(_),a(!1)},[m]),M=K(()=>{m.clearMessages(),a(!1)},[m]),N=K(_=>{m.sendMessage(_,{model:b.selectedModel,onAssistantMessage:f=>{}})},[m,w,b.selectedModel]);if(W(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:_=>N(_),clearMessages:()=>m.clearMessages(),toggleTTS:()=>y(_=>!_),stopSpeech:()=>R(!1),setAuth:_=>{_.token!==void 0&&V(_.token)},clearAuth:()=>V(null)})},[m,s,N]),!e.embedded&&!r)return g`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let j=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return g`
    <div class=${j} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&g`
        <${$t}
          isOpen=${u}
          conversations=${p}
          conversationsLoading=${v}
          currentConversationId=${m.conversationId}
          onClose=${()=>a(!1)}
          onNewConversation=${M}
          onSwitchConversation=${U}
        />
      `}
      
      <${gt}
        config=${e}
        debugMode=${h}
        isExpanded=${i}
        isSpeaking=${$}
        messagesCount=${m.messages.length}
        isLoading=${m.isLoading}
        currentAgent=${T}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!h)}
        onToggleTTS=${()=>y(!w)}
        onClear=${m.clearMessages}
        onToggleSidebar=${E}
      />

      ${h&&g`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${vt}
        messages=${m.messages}
        isLoading=${m.isLoading}
        hasMoreMessages=${m.hasMoreMessages}
        loadingMoreMessages=${m.loadingMoreMessages}
        onLoadMore=${m.loadMoreMessages}
        debugMode=${h}
        markdownParser=${n}
        emptyStateTitle=${e.emptyStateTitle}
        emptyStateMessage=${e.emptyStateMessage}
      />

      ${m.error&&g`<div class="cw-error-bar">${m.error}</div>`}

      ${e.showModelSelector&&b.availableModels.length>0&&g`
        <${bt}
          availableModels=${b.availableModels}
          selectedModel=${b.selectedModel}
          onSelectModel=${b.selectModel}
          disabled=${m.isLoading}
        />
      `}

      <${wt}
        onSend=${N}
        onCancel=${m.cancelRun}
        isLoading=${m.isLoading}
        placeholder=${e.placeholder}
        primaryColor=${e.primaryColor}
        enableVoice=${e.enableVoice}
      />
    </div>
  `}var Mt={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function xt(e){let t={...Mt.apiPaths,...e.apiPaths||{}};return{...Mt,...e,apiPaths:t}}var we=new Map,jt=0,I=null,Ne=class{constructor(t={}){this.instanceId=`cw-${++jt}`,this.config=xt(t),this.container=null,this._state={},this._apiRef={current:null},we.set(this.instanceId,this)}_handleStateChange=t=>{this._state=t};init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&pe(g`<${Tt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${$e._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(pe(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),we.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function It(e={}){return new Ne(e).init()}function qt(e={}){return I&&I.destroy(),I=It(e),I}function Gt(){I&&(I.destroy(),I=null)}function Xt(){I&&I.open()}function Qt(){I&&I.close()}function Zt(e){I&&I.send(e)}function Yt(){I&&I.clearMessages()}function en(){I&&I.toggleTTS()}function tn(){I&&I.stopSpeech()}function nn(e){I&&I.setAuth(e)}function on(){I&&I.clearAuth()}function sn(){return I?I.getState():null}function rn(){return I?I.getConfig():null}var $e={createInstance:It,getInstance:e=>we.get(e),getAllInstances:()=>Array.from(we.values()),init:qt,destroy:Gt,open:Xt,close:Qt,send:Zt,clearMessages:Yt,toggleTTS:en,stopSpeech:tn,setAuth:nn,clearAuth:on,getState:sn,getConfig:rn,_enhancedMarkdownParser:null};var an=$e;typeof window<"u"&&(window.ChatWidget=$e);return Ht(ln);})();
