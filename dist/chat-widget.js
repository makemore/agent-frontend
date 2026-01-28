var ChatWidgetModule=(()=>{var ye=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Tt=Object.prototype.hasOwnProperty;var xt=(e,t)=>{for(var n in t)ye(e,n,{get:t[n],enumerable:!0})},It=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mt(t))!Tt.call(e,r)&&r!==n&&ye(e,r,{get:()=>t[r],enumerable:!(o=St(t,r))||o.enumerable});return e};var Et=e=>It(ye({},"__esModule",{value:!0}),e);var tn={};xt(tn,{ChatWidget:()=>ge,default:()=>en});var ie,P,Ne,Pt,Q,De,Fe,Oe,Ue,be,ve,we,Dt,ee={},We=[],At=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function X(e,t){for(var n in t)e[n]=t[n];return e}function ke(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t,n){var o,r,s,i={};for(s in t)s=="key"?o=t[s]:s=="ref"?r=t[s]:i[s]=t[s];if(arguments.length>2&&(i.children=arguments.length>3?ie.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)i[s]===void 0&&(i[s]=e.defaultProps[s]);return re(e,i,o,r,null)}function re(e,t,n,o,r){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ne,__i:-1,__u:0};return r==null&&P.vnode!=null&&P.vnode(s),s}function ue(e){return e.children}function Z(e,t){this.props=e,this.context=t}function Y(e,t){if(t==null)return e.__?Y(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Y(e):null}function Ke(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ke(e)}}function Ae(e){(!e.__d&&(e.__d=!0)&&Q.push(e)&&!ae.__r++||De!=P.debounceRendering)&&((De=P.debounceRendering)||Fe)(ae)}function ae(){for(var e,t,n,o,r,s,i,c=1;Q.length;)Q.length>c&&Q.sort(Oe),e=Q.shift(),c=Q.length,e.__d&&(n=void 0,o=void 0,r=(o=(t=e).__v).__e,s=[],i=[],t.__P&&((n=X({},o)).__v=o.__v+1,P.vnode&&P.vnode(n),Ce(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[r]:null,s,r??Y(o),!!(32&o.__u),i),n.__v=o.__v,n.__.__k[n.__i]=n,je(s,n,i),o.__e=o.__=null,n.__e!=r&&Ke(n)));ae.__r=0}function Le(e,t,n,o,r,s,i,c,d,l,u){var a,h,p,v,T,$,y,w=o&&o.__k||We,H=t.length;for(d=Ht(n,t,w,d,H),a=0;a<H;a++)(p=n.__k[a])!=null&&(h=p.__i==-1?ee:w[p.__i]||ee,p.__i=a,$=Ce(e,p,h,r,s,i,c,d,l,u),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&Se(h.ref,null,p),u.push(p.ref,p.__c||v,p)),T==null&&v!=null&&(T=v),(y=!!(4&p.__u))||h.__k===p.__k?d=Be(p,d,e,y):typeof p.type=="function"&&$!==void 0?d=$:v&&(d=v.nextSibling),p.__u&=-7);return n.__e=T,d}function Ht(e,t,n,o,r){var s,i,c,d,l,u=n.length,a=u,h=0;for(e.__k=new Array(r),s=0;s<r;s++)(i=t[s])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[s]=re(null,i,null,null,null):le(i)?i=e.__k[s]=re(ue,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[s]=re(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[s]=i,d=s+h,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Rt(i,n,d,a))!=-1&&(a--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>u?h--:r<u&&h++),typeof i.type!="function"&&(i.__u|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,i.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<u;s++)(c=n[s])!=null&&!(2&c.__u)&&(c.__e==o&&(o=Y(c)),Je(c,c));return o}function Be(e,t,n,o){var r,s;if(typeof e.type=="function"){for(r=e.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=e,t=Be(r[s],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=Y(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Rt(e,t,n,o){var r,s,i,c=e.key,d=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&c==null||u&&c==l.key&&d==l.type)return n;if(o>(u?1:0)){for(r=n-1,s=n+1;r>=0||s<t.length;)if((l=t[i=r>=0?r--:s++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return i}return-1}function He(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||At.test(t)?n:n+"px"}function se(e,t,n,o,r){var s,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||He(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||He(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Ue,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o?n.u=o.u:(n.u=be,e.addEventListener(t,s?we:ve,s)):e.removeEventListener(t,s?we:ve,s);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Re(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=be++;else if(t.t<n.u)return;return n(P.event?P.event(t):t)}}}function Ce(e,t,n,o,r,s,i,c,d,l){var u,a,h,p,v,T,$,y,w,H,S,K,D,z,J,L,m,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),s=[c=t.__e=n.__e]),(u=P.__b)&&u(t);e:if(typeof b=="function")try{if(y=t.props,w="prototype"in b&&b.prototype.render,H=(u=b.contextType)&&o[u.__c],S=u?H?H.props.value:u.__:o,n.__c?$=(a=t.__c=n.__c).__=a.__E:(w?t.__c=a=new b(y,S):(t.__c=a=new Z(y,S),a.constructor=b,a.render=Ft),H&&H.sub(a),a.state||(a.state={}),a.__n=o,h=a.__d=!0,a.__h=[],a._sb=[]),w&&a.__s==null&&(a.__s=a.state),w&&b.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=X({},a.__s)),X(a.__s,b.getDerivedStateFromProps(y,a.__s))),p=a.props,v=a.state,a.__v=t,h)w&&b.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),w&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(w&&b.getDerivedStateFromProps==null&&y!==p&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,S),t.__v==n.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,S)===!1){for(t.__v!=n.__v&&(a.props=y,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(A){A&&(A.__=t)}),K=0;K<a._sb.length;K++)a.__h.push(a._sb[K]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,S),w&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(p,v,T)})}if(a.context=S,a.props=y,a.__P=e,a.__e=!1,D=P.__r,z=0,w){for(a.state=a.__s,a.__d=!1,D&&D(t),u=a.render(a.props,a.state,a.context),J=0;J<a._sb.length;J++)a.__h.push(a._sb[J]);a._sb=[]}else do a.__d=!1,D&&D(t),u=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++z<25);a.state=a.__s,a.getChildContext!=null&&(o=X(X({},o),a.getChildContext())),w&&!h&&a.getSnapshotBeforeUpdate!=null&&(T=a.getSnapshotBeforeUpdate(p,v)),L=u,u!=null&&u.type===ue&&u.key==null&&(L=ze(u.props.children)),c=Le(e,le(L)?L:[L],t,n,o,r,s,i,c,d,l),a.base=t.__e,t.__u&=-161,a.__h.length&&i.push(a),$&&(a.__E=a.__=null)}catch(A){if(t.__v=null,d||s!=null)if(A.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,t.__e=c}else{for(m=s.length;m--;)ke(s[m]);$e(t)}else t.__e=n.__e,t.__k=n.__k,A.then||$e(t);P.__e(A,t,n)}else s==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Nt(n.__e,t,n,o,r,s,i,d,l);return(u=P.diffed)&&u(t),128&t.__u?void 0:c}function $e(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach($e)}function je(e,t,n){for(var o=0;o<n.length;o++)Se(n[o],n[++o],n[++o]);P.__c&&P.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){P.__e(s,r.__v)}})}function ze(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:le(e)?e.map(ze):X({},e)}function Nt(e,t,n,o,r,s,i,c,d){var l,u,a,h,p,v,T,$=n.props||ee,y=t.props,w=t.type;if(w=="svg"?r="http://www.w3.org/2000/svg":w=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(l=0;l<s.length;l++)if((p=s[l])&&"setAttribute"in p==!!w&&(w?p.localName==w:p.nodeType==3)){e=p,s[l]=null;break}}if(e==null){if(w==null)return document.createTextNode(y);e=document.createElementNS(r,w,y.is&&y),c&&(P.__m&&P.__m(t,s),c=!1),s=null}if(w==null)$===y||c&&e.data==y||(e.data=y);else{if(s=s&&ie.call(e.childNodes),!c&&s!=null)for($={},l=0;l<e.attributes.length;l++)$[(p=e.attributes[l]).name]=p.value;for(l in $)if(p=$[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=p;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;se(e,l,null,p,r)}}for(l in y)p=y[l],l=="children"?h=p:l=="dangerouslySetInnerHTML"?u=p:l=="value"?v=p:l=="checked"?T=p:c&&typeof p!="function"||$[l]===p||se(e,l,p,$[l],r);if(u)c||a&&(u.__html==a.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(a&&(e.innerHTML=""),Le(t.type=="template"?e.content:e,le(h)?h:[h],t,n,o,w=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,i,s?s[0]:n.__k&&Y(n,0),c,d),s!=null)for(l=s.length;l--;)ke(s[l]);c||(l="value",w=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[l]||w=="progress"&&!v||w=="option"&&v!=$[l])&&se(e,l,v,$[l],r),l="checked",T!=null&&T!=e[l]&&se(e,l,T,$[l],r))}return e}function Se(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){P.__e(r,n)}}function Je(e,t,n){var o,r;if(P.unmount&&P.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Se(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(s){P.__e(s,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Je(o[r],t,n||typeof e.type!="function");n||ke(e.__e),e.__c=e.__=e.__e=void 0}function Ft(e,t,n){return this.constructor(e,n)}function de(e,t,n){var o,r,s,i;t==document&&(t=document.documentElement),P.__&&P.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,s=[],i=[],Ce(t,e=(!o&&n||t).__k=ce(ue,null,[e]),r||ee,ee,t.namespaceURI,!o&&n?[n]:r?null:t.firstChild?ie.call(t.childNodes):null,s,!o&&n?n:r?r.__e:t.firstChild,o,i),je(s,e,i)}ie=We.slice,P={__e:function(e,t,n,o){for(var r,s,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(c){e=c}throw e}},Ne=0,Pt=function(e){return e!=null&&e.constructor===void 0},Z.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=X({},this.state),typeof e=="function"&&(e=e(X({},n),this.props)),e&&X(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ae(this))},Z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ae(this))},Z.prototype.render=ue,Q=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Oe=function(e,t){return e.__v.__b-t.__v.__b},ae.__r=0,Ue=/(PointerCapture)$|Capture$/i,be=0,ve=Re(!1),we=Re(!0),Dt=0;var qe=function(e,t,n,o){var r;t[0]=0;for(var s=1;s<t.length;s++){var i=t[s++],c=t[s]?(t[0]|=i?1:2,n[t[s++]]):t[++s];i===3?o[0]=c:i===4?o[1]=Object.assign(o[1]||{},c):i===5?(o[1]=o[1]||{})[t[++s]]=c:i===6?o[1][t[++s]]+=c+"":i?(r=e.apply(c,qe(e,c,n,["",null])),o.push(r),c[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):o.push(c)}return o},Ve=new Map;function Ge(e){var t=Ve.get(this);return t||(t=new Map,Ve.set(this,t)),(t=qe(this,t.get(e)||(t.set(e,t=function(n){for(var o,r,s=1,i="",c="",d=[0],l=function(h){s===1&&(h||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?d.push(0,h,i):s===3&&(h||i)?(d.push(3,h,i),s=2):s===2&&i==="..."&&h?d.push(4,h,0):s===2&&i&&!h?d.push(5,0,!0,i):s>=5&&((i||!h&&s===5)&&(d.push(s,0,i,r),s=6),h&&(d.push(s,h,0,r),s=6)),i=""},u=0;u<n.length;u++){u&&(s===1&&l(),l(u));for(var a=0;a<n[u].length;a++)o=n[u][a],s===1?o==="<"?(l(),d=[d],s=3):i+=o:s===4?i==="--"&&o===">"?(s=1,i=""):i=o+i[0]:c?o===c?c="":i+=o:o==='"'||o==="'"?c=o:o===">"?(l(),s=1):s&&(o==="="?(s=5,r=i,i=""):o==="/"&&(s<5||n[u][a+1]===">")?(l(),s===3&&(d=d[0]),s=d,(d=d[0]).push(2,0,s),s=0):o===" "||o==="	"||o===`
`||o==="\r"?(l(),s=2):i+=o),s===3&&i==="!--"&&(s=4,d=d[0])}return l(),d}(e)),t),arguments,[])).length>1?t:t[0]}var g=Ge.bind(ce);var te,N,Me,Xe,ne=0,st=[],F=P,Qe=F.__b,Ye=F.__r,Ze=F.diffed,et=F.__c,tt=F.unmount,nt=F.__;function xe(e,t){F.__h&&F.__h(N,e,ne||t),ne=0;var n=N.__H||(N.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return ne=1,Ot(at,e)}function Ot(e,t,n){var o=xe(te++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):at(void 0,t),function(c){var d=o.__N?o.__N[0]:o.__[0],l=o.t(d,c);d!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=N,!N.__f)){var r=function(c,d,l){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(h){return!!h.__c});if(u.every(function(h){return!h.__N}))return!s||s.call(this,c,d,l);var a=o.__c.props!==c;return u.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(a=!0)}}),s&&s.call(this,c,d,l)||a};N.__f=!0;var s=N.shouldComponentUpdate,i=N.componentWillUpdate;N.componentWillUpdate=function(c,d,l){if(this.__e){var u=s;s=void 0,r(c,d,l),s=u}i&&i.call(this,c,d,l)},N.shouldComponentUpdate=r}return o.__N||o.__}function U(e,t){var n=xe(te++,3);!F.__s&&rt(n.__H,t)&&(n.__=e,n.u=t,N.__H.__h.push(n))}function q(e){return ne=5,oe(function(){return{current:e}},[])}function oe(e,t){var n=xe(te++,7);return rt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function B(e,t){return ne=8,oe(function(){return e},t)}function Ut(){for(var e;e=st.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(Te),e.__H.__h=[]}catch(t){e.__H.__h=[],F.__e(t,e.__v)}}F.__b=function(e){N=null,Qe&&Qe(e)},F.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),nt&&nt(e,t)},F.__r=function(e){Ye&&Ye(e),te=0;var t=(N=e.__c).__H;t&&(Me===N?(t.__h=[],N.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(_e),t.__h.forEach(Te),t.__h=[],te=0)),Me=N},F.diffed=function(e){Ze&&Ze(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(st.push(t)!==1&&Xe===F.requestAnimationFrame||((Xe=F.requestAnimationFrame)||Wt)(Ut)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Me=N=null},F.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(o){return!o.__||Te(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],F.__e(o,n.__v)}}),et&&et(e,t)},F.unmount=function(e){tt&&tt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{_e(o)}catch(r){t=r}}),n.__H=void 0,t&&F.__e(t,n.__v))};var ot=typeof requestAnimationFrame=="function";function Wt(e){var t,n=function(){clearTimeout(o),ot&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);ot&&(t=requestAnimationFrame(n))}function _e(e){var t=N,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),N=t}function Te(e){var t=N;e.__c=e.__(),N=t}function rt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function at(e,t){return typeof t=="function"?t(e):t}function pe(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function O(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function it(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,r=Math.floor(o/6e4),s=Math.floor(o/36e5),i=Math.floor(o/864e5);return r<1?"Just now":r<60?`${r}m ago`:s<24?`${s}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function lt(e,t=null){if(t)return t(e);let n=O(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function ct(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let r=t(n);o===null?localStorage.removeItem(r):localStorage.setItem(r,o)}catch{}}}}function ut(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[r,s]=o.trim().split("=");if(r===e)return decodeURIComponent(s)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function fe(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function he(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function dt({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:r,isLoading:s,currentAgent:i,onClose:c,onToggleExpand:d,onToggleDebug:l,onToggleTTS:u,onClear:a,onToggleSidebar:h}){let{title:p,primaryColor:v,embedded:T,showConversationSidebar:$,showClearButton:y,showDebugButton:w,enableDebugMode:H,showTTSButton:S,showExpandButton:K,enableTTS:D,elevenLabsApiKey:z,ttsProxyUrl:J}=e,L=z||J;return g`
    <div class="cw-header" style=${{backgroundColor:v}}>
      ${$&&g`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${h}
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
        <span class="cw-title">${O(p)}</span>
        ${i&&g`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${O(i.name||i.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${y&&g`
          <button 
            class="cw-header-btn" 
            onClick=${a}
            title="Clear"
            disabled=${s||r===0}
          >🗑️</button>
        `}
        
        ${w&&H&&g`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${S&&L&&g`
          <button 
            class="cw-header-btn ${D?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${D?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${K&&!T&&g`
          <button 
            class="cw-header-btn" 
            onClick=${d}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!T&&g`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Ie({msg:e,show:t,onToggle:n}){return t?g`
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
    `}function _t({msg:e,debugMode:t,markdownParser:n}){let[o,r]=C(!1),[s,i]=C(!1),c=e.role==="user",d=e.role==="system",l=e.type==="tool_call",u=e.type==="tool_result",a=e.type==="error",h=e.type==="sub_agent_start",p=e.type==="sub_agent_end",v=e.type==="agent_context";if(d&&!t)return null;if(h||p||v)return g`
      <div class="cw-agent-context ${h?"cw-agent-delegating":""} ${p?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${h?"\u{1F517}":p?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&g`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&g`<${Ie} msg=${e} show=${s} onToggle=${()=>i(!s)} />`}
      </div>
    `;if(l||u){let S=e.metadata?.arguments||e.metadata?.result,K=D=>{if(typeof D=="string")try{return JSON.stringify(JSON.parse(D),null,2)}catch{return D}return JSON.stringify(D,null,2)};return g`
      <div class="cw-tool-message ${u?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>S&&r(!o)}>
          ${e.content}
          ${S&&g`<span class="cw-tool-expand">${o?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${o&&S&&g`
          <pre class="cw-tool-details">${O(K(l?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&g`<${Ie} msg=${e} show=${s} onToggle=${()=>i(!s)} />`}
      </div>
    `}let T=["cw-message",c&&"cw-message-user",a&&"cw-message-error"].filter(Boolean).join(" "),$=`cw-message-row ${c?"cw-message-row-user":""}`,y=e.role==="assistant"?lt(e.content,n):O(e.content),w=e.files&&e.files.length>0;return g`
    <div class=${$} style="position: relative;">
      ${w?g`
      <div class="cw-message-attachments">
        ${e.files.map(S=>S.type&&S.type.startsWith("image/")?g`
              <a class="cw-attachment-thumbnail" href=${S.url} target="_blank" title=${S.name}>
                <img src=${S.url} alt=${S.name} />
              </a>
            `:g`
            <a class="cw-attachment-file" href=${S.url} target="_blank" title=${S.name}>
              <span class="cw-attachment-icon">${he(S.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${S.name}</span>
                <span class="cw-attachment-size">${fe(S.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null}
      <div class=${T} dangerouslySetInnerHTML=${{__html:y}} />
      ${t&&g`<${Ie} msg=${e} show=${s} onToggle=${()=>i(!s)} />`}
    </div>
  `}function pt({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:r,debugMode:s,markdownParser:i,emptyStateTitle:c,emptyStateMessage:d}){let l=q(null),u=q(!0),a=p=>{let v=p.target,T=v.scrollHeight-v.scrollTop-v.clientHeight<100;if(u.current=T,v.scrollTop<50&&n&&!o){let $=v.scrollHeight;r().then(()=>{let y=v.scrollHeight;v.scrollTop=y-$+v.scrollTop})}};U(()=>{let p=l.current;p&&u.current&&requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight})},[e,t]),U(()=>{let p=l.current;p&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{p.scrollTop=p.scrollHeight}))},[e.length]);let h=e.length===0;return g`
    <div class="cw-messages" ref=${l} onScroll=${a}>
      ${h&&g`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${O(c)}</h3>
          <p>${O(d)}</p>
        </div>
      `}
      
      ${!h&&n&&g`
        <div class="cw-load-more" onClick=${r}>
          ${o?g`<span class="cw-spinner"></span><span>Loading...</span>`:g`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map(p=>g`
        <${_t} 
          key=${p.id} 
          msg=${p} 
          debugMode=${s}
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
  `}var Ee=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function ft({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:r,enableVoice:s=!0,enableFiles:i=!0}){let[c,d]=C(""),[l,u]=C([]),[a,h]=C(!1),[p,v]=C(!1),[T]=C(()=>!!Ee),$=q(null),y=q(null),w=q(null),H=q(!1);U(()=>{!n&&$.current&&$.current.focus()},[n]),U(()=>{$.current&&($.current.style.height="auto",$.current.style.height=Math.min($.current.scrollHeight,150)+"px")},[c]),U(()=>()=>{H.current=!1,w.current&&w.current.abort()},[]);let S=_=>{_.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),d(""),u([]),$.current&&($.current.style.height="auto"),y.current&&(y.current.value=""))},K=_=>{let f=Array.from(_.target.files||[]);f.length>0&&u(k=>[...k,...f])},D=_=>{u(f=>f.filter((k,x)=>x!==_))},z=_=>{_.preventDefault(),y.current&&!n&&y.current.click()},J=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),S(_))},L=_=>{n&&t&&(_.preventDefault(),t())},m=()=>{if(!Ee||n)return;H.current=!0;let _=new Ee;_.continuous=!0,_.interimResults=!0,_.lang=navigator.language||"en-US";let f=c,k="";_.onstart=()=>{v(!0)},_.onresult=x=>{k="";for(let V=x.resultIndex;V<x.results.length;V++){let j=x.results[V][0].transcript;x.results[V].isFinal?f+=(f?" ":"")+j:k+=j}d(f+(k?" "+k:""))},_.onerror=x=>{if(x.error==="no-speech"||x.error==="aborted"){console.log("[ChatWidget] Speech recognition:",x.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",x.error),H.current=!1,v(!1),d(f||c)},_.onend=()=>{if(H.current){console.log("[ChatWidget] Recognition paused, restarting...");try{_.start();return}catch(x){console.warn("[ChatWidget] Could not restart recognition:",x)}}v(!1),f&&d(f),w.current=null},w.current=_,_.start()},b=()=>{H.current=!1,w.current&&w.current.stop()},A=_=>{_.preventDefault(),p?b():m()},E=g`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,R=g`
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
  `,W=s&&T,G=i;return g`
    <form class="cw-input-form" onSubmit=${S}>
      <input
        type="file"
        ref=${y}
        style="display: none"
        multiple
        onChange=${K}
      />
      ${l.length>0&&g`
        <div class="cw-file-chips">
          ${l.map((_,f)=>g`
            <div class="cw-file-chip" key=${f}>
              <span class="cw-file-chip-icon">${he(_.type)}</span>
              <span class="cw-file-chip-name" title=${_.name}>${_.name.length>20?_.name.substring(0,17)+"...":_.name}</span>
              <span class="cw-file-chip-size">(${fe(_.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>D(f)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${$}
        class="cw-input"
        placeholder=${O(o)}
        value=${c}
        onInput=${_=>d(_.target.value)}
        onKeyDown=${J}
        disabled=${n}
        rows="1"
      />
      ${G&&g`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${z}
          disabled=${n}
          title="Attach files"
        >
          ${M}
        </button>
      `}
      ${W&&g`
        <button
          type="button"
          class=${`cw-voice-btn ${p?"cw-voice-btn-recording":""}`}
          onClick=${A}
          disabled=${n}
          title=${p?"Stop recording":"Voice input"}
        >
          ${R}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&a?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&a?"#dc2626":r}}
        onClick=${L}
        onMouseEnter=${()=>h(!0)}
        onMouseLeave=${()=>h(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?a?E:g`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function ht({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:r,onNewConversation:s,onSwitchConversation:i}){return g`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${r}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${s}>
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
            class="cw-conversation-item ${c.id===o?"cw-conversation-active":""}"
            onClick=${()=>i(c.id)}
          >
            <div class="cw-conversation-title">${O(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${it(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${r}
    />
  `}function mt({availableModels:e,selectedModel:t,onSelectModel:n,disabled:o}){let[r,s]=C(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",d=()=>{o||s(!r)},l=u=>{n(u),s(!1)};return g`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${d}
        disabled=${o}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${O(c)}</span>
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
              <span class="cw-model-option-name">${O(u.name)}</span>
              <span class="cw-model-option-provider">${O(u.provider)}</span>
              ${u.description&&g`
                <span class="cw-model-option-desc">${O(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}function gt(e,t,n){let[o,r]=C([]),[s,i]=C(!1),[c,d]=C(null),[l,u]=C(()=>n?.get(e.conversationIdKey)||null),[a,h]=C(!1),[p,v]=C(!1),[T,$]=C(0),y=q(null),w=q(null);U(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let H=B(async(m,b,A)=>{y.current&&y.current.close();let E=e.apiPaths.runEvents.replace("{runId}",m),R=`${e.backendUrl}${E}`;b&&(R+=`?anonymous_token=${encodeURIComponent(b)}`);let M=new EventSource(R);y.current=M;let W="";M.addEventListener("assistant.message",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("assistant.message",f.payload);let k=f.payload.content;k&&(W+=k,r(x=>{let V=x[x.length-1];return V?.role==="assistant"&&V.id.startsWith("assistant-stream-")?[...x.slice(0,-1),{...V,content:W}]:[...x,{id:"assistant-stream-"+Date.now(),role:"assistant",content:W,timestamp:new Date,type:"message"}]}))}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("tool.call",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("tool.call",f.payload),r(k=>[...k,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${f.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:f.payload.name,arguments:f.payload.arguments,toolCallId:f.payload.id}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("tool.result",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("tool.result",f.payload);let k=f.payload.result,x=k?.error;r(V=>[...V,{id:"tool-result-"+Date.now(),role:"system",content:x?`\u274C ${k.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:f.payload.name,result:k,toolCallId:f.payload.tool_call_id}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("custom",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("custom",f.payload),f.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(f.payload),f.payload?.type==="agent_context"&&r(k=>[...k,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${f.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:f.payload.agent_key,agentName:f.payload.agent_name,action:f.payload.action}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("sub_agent.start",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("sub_agent.start",f.payload),r(k=>[...k,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${f.payload.agent_name||f.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:f.payload.sub_agent_key,agentName:f.payload.agent_name,invocationMode:f.payload.invocation_mode}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}}),M.addEventListener("sub_agent.end",_=>{try{let f=JSON.parse(_.data);e.onEvent&&e.onEvent("sub_agent.end",f.payload),r(k=>[...k,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${f.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:f.payload.sub_agent_key,agentName:f.payload.agent_name}}])}catch(f){console.error("[ChatWidget] Parse error:",f)}});let G=_=>{try{let f=JSON.parse(_.data);if(e.onEvent&&e.onEvent(f.type,f.payload),f.type==="run.failed"){let k=f.payload.error||"Agent run failed";d(k),r(x=>[...x,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${k}`,timestamp:new Date,type:"error"}])}}catch(f){console.error("[ChatWidget] Parse error:",f)}i(!1),M.close(),y.current=null,W&&A&&A(W)};M.addEventListener("run.succeeded",G),M.addEventListener("run.failed",G),M.addEventListener("run.cancelled",G),M.addEventListener("run.timed_out",G),M.onerror=()=>{i(!1),M.close(),y.current=null}},[e]),S=B(async(m,b={},A={})=>{if(!m.trim()||s)return;let E=[],R={};typeof b=="function"?R={onAssistantMessage:b}:Array.isArray(b)?(E=b,R=A):R=b||{};let{model:M,onAssistantMessage:W}=R;i(!0),d(null);let G={id:pe(),role:"user",content:m.trim(),timestamp:new Date,type:"message",files:E.length>0?E.map(_=>({name:_.name,size:_.size,type:_.type})):void 0};r(_=>[..._,G]);try{let _=await t.getOrCreateSession(),f;if(E.length>0){let j=new FormData;j.append("agentKey",e.agentKey),l&&j.append("conversationId",l),j.append("messages",JSON.stringify([{role:"user",content:m.trim()}])),j.append("metadata",JSON.stringify({...e.metadata,journeyType:e.defaultJourneyType})),M&&j.append("model",M),E.forEach(Ct=>{j.append("files",Ct)}),f=t.getFetchOptions({method:"POST",body:j},_)}else{let j={agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:m.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType}};M&&(j.model=M),f=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)},_)}let k=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,f);if(!k.ok){let j=await k.json().catch(()=>({}));throw new Error(j.error||`HTTP ${k.status}`)}let x=await k.json();w.current=x.id;let V=x.conversationId||x.conversation_id;!l&&V&&u(V),await H(x.id,_,W)}catch(_){d(_.message||"Failed to send message"),i(!1)}finally{w.current=null}},[e,t,l,s,H]),K=B(async()=>{let m=w.current;if(!(!m||!s))try{let b=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",m):`${e.apiPaths.runs}${m}/cancel/`;(await fetch(`${e.backendUrl}${b}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(y.current&&(y.current.close(),y.current=null),i(!1),w.current=null,r(E=>[...E,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(b){console.error("[ChatWidget] Failed to cancel run:",b)}},[e,t,s]),D=B(()=>{r([]),u(null),d(null),h(!1),$(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),z=m=>{let b={id:pe(),role:m.role,timestamp:m.timestamp?new Date(m.timestamp):new Date};if(m.role==="tool")return{...b,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:m.content,toolCallId:m.tool_call_id}};if(m.role==="assistant"&&m.tool_calls&&m.tool_calls.length>0)return m.tool_calls.map(E=>({id:pe(),role:"assistant",content:`\u{1F527} ${E.function?.name||E.name||"tool"}`,timestamp:b.timestamp,type:"tool_call",metadata:{toolName:E.function?.name||E.name,arguments:E.function?.arguments||E.arguments,toolCallId:E.id}}));let A=typeof m.content=="string"?m.content:JSON.stringify(m.content);return m.role==="assistant"&&!A?.trim()?null:{...b,content:A,type:"message"}},J=B(async m=>{i(!0),r([]),u(m);try{let b=await t.getOrCreateSession(),E=`${e.backendUrl}${e.apiPaths.conversations}${m}/?limit=10&offset=0`,R=await fetch(E,t.getFetchOptions({method:"GET"},b));if(R.ok){let M=await R.json();M.messages&&r(M.messages.flatMap(z).filter(Boolean)),h(M.has_more||M.hasMore||!1),$(M.messages?.length||0)}else R.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch(b){console.error("[ChatWidget] Failed to load conversation:",b)}finally{i(!1)}},[e,t,n]),L=B(async()=>{if(!(!l||p||!a)){v(!0);try{let m=await t.getOrCreateSession(),A=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${T}`,E=await fetch(A,t.getFetchOptions({method:"GET"},m));if(E.ok){let R=await E.json();if(R.messages?.length>0){let M=R.messages.flatMap(z).filter(Boolean);r(W=>[...M,...W]),$(W=>W+R.messages.length),h(R.has_more||R.hasMore||!1)}else h(!1)}}catch(m){console.error("[ChatWidget] Failed to load more messages:",m)}finally{v(!1)}}},[e,t,l,T,p,a]);return U(()=>()=>{y.current&&y.current.close()},[]),{messages:o,isLoading:s,error:c,conversationId:l,hasMoreMessages:a,loadingMoreMessages:p,sendMessage:S,cancelRun:K,clearMessages:D,loadConversation:J,loadMoreMessages:L,setConversationId:u}}function yt(e,t,n){let[o,r]=C([]),[s,i]=C(null),[c,d]=C(null),[l,u]=C(!1);U(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let v=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(v.ok){let T=await v.json(),$=T.models||[];r($),d(T.default);let y=n?.get(e.modelKey);y&&$.some(w=>w.id===y)?i(y):i(T.default)}}catch(v){console.warn("[ChatWidget] Failed to load models:",v)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let a=B(p=>{i(p),n?.set(e.modelKey,p)},[e.modelKey,n]),h=B(()=>o.find(p=>p.id===s)||null,[o,s]);return{availableModels:o,selectedModel:s,defaultModel:c,isLoading:l,selectModel:a,getSelectedModelInfo:h}}function vt(e,t,n){let o=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",r=(c=null)=>{let d=o(),l={},u=c||e.authToken||t().authToken;if(d==="token"&&u){let a=e.authHeader||"Authorization",h=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";l[a]=h?`${h} ${u}`:u}else if(d==="jwt"&&u){let a=e.authHeader||"Authorization",h=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";l[a]=h?`${h} ${u}`:u}else if(d==="anonymous"&&u){let a=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";l[a]=u}if(d==="session"){let a=ut(e.csrfCookieName);a&&(l["X-CSRFToken"]=a)}return l};return{getAuthStrategy:o,getAuthHeaders:r,getFetchOptions:(c={},d=null)=>{let l=o(),u={...c};return u.headers={...u.headers,...r(d)},l==="session"&&(u.credentials="include"),u},getOrCreateSession:async()=>{let c=o(),d=t();if(c!=="anonymous")return e.authToken||d.authToken;if(d.authToken)return d.authToken;let l=e.anonymousTokenKey||e.sessionTokenKey,u=d.storage?.get(l);if(u)return n(a=>({...a,authToken:u})),u;try{let a=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,h=await fetch(`${e.backendUrl}${a}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(h.ok){let p=await h.json();return n(v=>({...v,authToken:p.token})),d.storage?.set(l,p.token),p.token}}catch(a){console.warn("[ChatWidget] Failed to create session:",a)}return null}}}function wt({config:e,onStateChange:t,markdownParser:n,apiRef:o}){let[r,s]=C(e.embedded||e.forceOpen===!0),[i,c]=C(!1),[d,l]=C(!1),[u,a]=C(!1),[h,p]=C([]),[v,T]=C(!1),[$,y]=C(e.enableTTS),[w,H]=C(!1),[S,K]=C(null);U(()=>{e.forceOpen!==void 0&&s(e.forceOpen)},[e.forceOpen]);let D=oe(()=>ct(e.containerId),[e.containerId]),[z,J]=C(e.authToken||null),L=oe(()=>vt(e,()=>({authToken:z,storage:D}),k=>{let x=k({authToken:z,storage:D});x.authToken!==z&&J(x.authToken)}),[e,z,D]),m=gt(e,L,D),b=yt(e,L,D);U(()=>{for(let _=m.messages.length-1;_>=0;_--){let f=m.messages[_];if(f.type==="sub_agent_start"){K({key:f.metadata?.subAgentKey,name:f.metadata?.agentName});return}if(f.type==="sub_agent_end"){K(null);return}}},[m.messages]),U(()=>{let _=D.get(e.conversationIdKey);_&&m.loadConversation(_)},[]),U(()=>{t&&t({isOpen:r,isExpanded:i,debugMode:d,messages:m.messages,conversationId:m.conversationId,isLoading:m.isLoading,error:m.error})},[r,i,d,m.messages,m.conversationId,m.isLoading,m.error]);let A=B(async()=>{if(e.showConversationSidebar){T(!0);try{let _=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,f=await fetch(_,L.getFetchOptions({method:"GET"}));if(f.ok){let k=await f.json();p(k.results||k)}}catch(_){console.error("[ChatWidget] Failed to load conversations:",_),p([])}finally{T(!1)}}},[e,L]),E=B(()=>{let _=!u;a(_),_&&A()},[u,A]),R=B(_=>{_!==m.conversationId&&m.loadConversation(_),a(!1)},[m]),M=B(()=>{m.clearMessages(),a(!1)},[m]),W=B(_=>{m.sendMessage(_,{model:b.selectedModel,onAssistantMessage:f=>{}})},[m,$,b.selectedModel]);if(U(()=>{o&&(o.current={open:()=>s(!0),close:()=>s(!1),send:_=>W(_),clearMessages:()=>m.clearMessages(),toggleTTS:()=>y(_=>!_),stopSpeech:()=>H(!1),setAuth:_=>{_.token!==void 0&&J(_.token)},clearAuth:()=>J(null)})},[m,o,W]),!e.embedded&&!r)return g`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>s(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let G=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return g`
    <div class=${G} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&g`
        <${ht}
          isOpen=${u}
          conversations=${h}
          conversationsLoading=${v}
          currentConversationId=${m.conversationId}
          onClose=${()=>a(!1)}
          onNewConversation=${M}
          onSwitchConversation=${R}
        />
      `}
      
      <${dt}
        config=${e}
        debugMode=${d}
        isExpanded=${i}
        isSpeaking=${w}
        messagesCount=${m.messages.length}
        isLoading=${m.isLoading}
        currentAgent=${S}
        onClose=${()=>s(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!d)}
        onToggleTTS=${()=>y(!$)}
        onClear=${m.clearMessages}
        onToggleSidebar=${E}
      />

      ${d&&g`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${pt}
        messages=${m.messages}
        isLoading=${m.isLoading}
        hasMoreMessages=${m.hasMoreMessages}
        loadingMoreMessages=${m.loadingMoreMessages}
        onLoadMore=${m.loadMoreMessages}
        debugMode=${d}
        markdownParser=${n}
        emptyStateTitle=${e.emptyStateTitle}
        emptyStateMessage=${e.emptyStateMessage}
      />

      ${m.error&&g`<div class="cw-error-bar">${m.error}</div>`}

      ${e.showModelSelector&&b.availableModels.length>0&&g`
        <${mt}
          availableModels=${b.availableModels}
          selectedModel=${b.selectedModel}
          onSelectModel=${b.selectModel}
          disabled=${m.isLoading}
        />
      `}

      <${ft}
        onSend=${W}
        onCancel=${m.cancelRun}
        isLoading=${m.isLoading}
        placeholder=${e.placeholder}
        primaryColor=${e.primaryColor}
        enableVoice=${e.enableVoice}
      />
    </div>
  `}var $t={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function bt(e){let t={...$t.apiPaths,...e.apiPaths||{}};return{...$t,...e,apiPaths:t}}var me=new Map,Kt=0,I=null,Pe=class{constructor(t={}){this.instanceId=`cw-${++Kt}`,this.config=bt(t),this.container=null,this._state={},this._apiRef={current:null},me.set(this.instanceId,this)}_handleStateChange=t=>{this._state=t};init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&de(g`<${wt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${ge._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(de(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),me.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}};function kt(e={}){return new Pe(e).init()}function Lt(e={}){return I&&I.destroy(),I=kt(e),I}function Bt(){I&&(I.destroy(),I=null)}function jt(){I&&I.open()}function zt(){I&&I.close()}function Jt(e){I&&I.send(e)}function Vt(){I&&I.clearMessages()}function qt(){I&&I.toggleTTS()}function Gt(){I&&I.stopSpeech()}function Xt(e){I&&I.setAuth(e)}function Qt(){I&&I.clearAuth()}function Yt(){return I?I.getState():null}function Zt(){return I?I.getConfig():null}var ge={createInstance:kt,getInstance:e=>me.get(e),getAllInstances:()=>Array.from(me.values()),init:Lt,destroy:Bt,open:jt,close:zt,send:Jt,clearMessages:Vt,toggleTTS:qt,stopSpeech:Gt,setAuth:Xt,clearAuth:Qt,getState:Yt,getConfig:Zt,_enhancedMarkdownParser:null};var en=ge;typeof window<"u"&&(window.ChatWidget=ge);return Et(tn);})();
