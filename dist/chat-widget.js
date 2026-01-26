var ChatWidgetModule=(()=>{var he=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var bt=Object.getOwnPropertyNames;var kt=Object.prototype.hasOwnProperty;var Ct=(e,t)=>{for(var n in t)he(e,n,{get:t[n],enumerable:!0})},St=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of bt(t))!kt.call(e,r)&&r!==n&&he(e,r,{get:()=>t[r],enumerable:!(s=$t(t,r))||s.enumerable});return e};var Tt=e=>St(he({},"__esModule",{value:!0}),e);var Qt={};Ct(Qt,{ChatWidget:()=>fe,default:()=>Xt});var ae,E,He,Mt,G,Ee,Ae,Re,Ne,ve,me,ge,xt,Z={},Oe=[],Et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function q(e,t){for(var n in t)e[n]=t[n];return e}function we(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t,n){var s,r,o,l={};for(o in t)o=="key"?s=t[o]:o=="ref"?r=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?ae.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return se(e,l,s,r,null)}function se(e,t,n,s,r){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++He,__i:-1,__u:0};return r==null&&E.vnode!=null&&E.vnode(o),o}function ce(e){return e.children}function Y(e,t){this.props=e,this.context=t}function X(e,t){if(t==null)return e.__?X(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?X(e):null}function Ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ue(e)}}function Ie(e){(!e.__d&&(e.__d=!0)&&G.push(e)&&!re.__r++||Ee!=E.debounceRendering)&&((Ee=E.debounceRendering)||Ae)(re)}function re(){for(var e,t,n,s,r,o,l,c=1;G.length;)G.length>c&&G.sort(Re),e=G.shift(),c=G.length,e.__d&&(n=void 0,s=void 0,r=(s=(t=e).__v).__e,o=[],l=[],t.__P&&((n=q({},s)).__v=s.__v+1,E.vnode&&E.vnode(n),$e(t.__P,n,s,t.__n,t.__P.namespaceURI,32&s.__u?[r]:null,o,r??X(s),!!(32&s.__u),l),n.__v=s.__v,n.__.__k[n.__i]=n,We(o,n,l),s.__e=s.__=null,n.__e!=r&&Ue(n)));re.__r=0}function Fe(e,t,n,s,r,o,l,c,_,i,u){var a,f,d,y,S,b,g,$=s&&s.__k||Oe,N=t.length;for(_=It(n,t,$,_,N),a=0;a<N;a++)(d=n.__k[a])!=null&&(f=d.__i==-1?Z:$[d.__i]||Z,d.__i=a,b=$e(e,d,f,r,o,l,c,_,i,u),y=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&be(f.ref,null,d),u.push(d.ref,d.__c||y,d)),S==null&&y!=null&&(S=y),(g=!!(4&d.__u))||f.__k===d.__k?_=Le(d,_,e,g):typeof d.type=="function"&&b!==void 0?_=b:y&&(_=y.nextSibling),d.__u&=-7);return n.__e=S,_}function It(e,t,n,s,r){var o,l,c,_,i,u=n.length,a=u,f=0;for(e.__k=new Array(r),o=0;o<r;o++)(l=t[o])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[o]=se(null,l,null,null,null):le(l)?l=e.__k[o]=se(ce,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[o]=se(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[o]=l,_=o+f,l.__=e,l.__b=e.__b+1,c=null,(i=l.__i=Pt(l,n,_,a))!=-1&&(a--,(c=n[i])&&(c.__u|=2)),c==null||c.__v==null?(i==-1&&(r>u?f--:r<u&&f++),typeof l.type!="function"&&(l.__u|=4)):i!=_&&(i==_-1?f--:i==_+1?f++:(i>_?f--:f++,l.__u|=4))):e.__k[o]=null;if(a)for(o=0;o<u;o++)(c=n[o])!=null&&!(2&c.__u)&&(c.__e==s&&(s=X(c)),Be(c,c));return s}function Le(e,t,n,s){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Le(r[o],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=X(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Pt(e,t,n,s){var r,o,l,c=e.key,_=e.type,i=t[n],u=i!=null&&(2&i.__u)==0;if(i===null&&c==null||u&&c==i.key&&_==i.type)return n;if(s>(u?1:0)){for(r=n-1,o=n+1;r>=0||o<t.length;)if((i=t[l=r>=0?r--:o++])!=null&&!(2&i.__u)&&c==i.key&&_==i.type)return l}return-1}function Pe(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Et.test(t)?n:n+"px"}function oe(e,t,n,s,r){var o,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Pe(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Pe(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Ne,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s?n.u=s.u:(n.u=ve,e.addEventListener(t,o?ge:me,o)):e.removeEventListener(t,o?ge:me,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function De(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ve++;else if(t.t<n.u)return;return n(E.event?E.event(t):t)}}}function $e(e,t,n,s,r,o,l,c,_,i){var u,a,f,d,y,S,b,g,$,N,A,j,O,B,k,D,p,w=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(_=!!(32&n.__u),o=[c=t.__e=n.__e]),(u=E.__b)&&u(t);e:if(typeof w=="function")try{if(g=t.props,$="prototype"in w&&w.prototype.render,N=(u=w.contextType)&&s[u.__c],A=u?N?N.props.value:u.__:s,n.__c?b=(a=t.__c=n.__c).__=a.__E:($?t.__c=a=new w(g,A):(t.__c=a=new Y(g,A),a.constructor=w,a.render=Ht),N&&N.sub(a),a.state||(a.state={}),a.__n=s,f=a.__d=!0,a.__h=[],a._sb=[]),$&&a.__s==null&&(a.__s=a.state),$&&w.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=q({},a.__s)),q(a.__s,w.getDerivedStateFromProps(g,a.__s))),d=a.props,y=a.state,a.__v=t,f)$&&w.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),$&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if($&&w.getDerivedStateFromProps==null&&g!==d&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,A),t.__v==n.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,A)===!1){for(t.__v!=n.__v&&(a.props=g,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(M){M&&(M.__=t)}),j=0;j<a._sb.length;j++)a.__h.push(a._sb[j]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,A),$&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(d,y,S)})}if(a.context=A,a.props=g,a.__P=e,a.__e=!1,O=E.__r,B=0,$){for(a.state=a.__s,a.__d=!1,O&&O(t),u=a.render(a.props,a.state,a.context),k=0;k<a._sb.length;k++)a.__h.push(a._sb[k]);a._sb=[]}else do a.__d=!1,O&&O(t),u=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++B<25);a.state=a.__s,a.getChildContext!=null&&(s=q(q({},s),a.getChildContext())),$&&!f&&a.getSnapshotBeforeUpdate!=null&&(S=a.getSnapshotBeforeUpdate(d,y)),D=u,u!=null&&u.type===ce&&u.key==null&&(D=Ke(u.props.children)),c=Fe(e,le(D)?D:[D],t,n,s,r,o,l,c,_,i),a.base=t.__e,t.__u&=-161,a.__h.length&&l.push(a),b&&(a.__E=a.__=null)}catch(M){if(t.__v=null,_||o!=null)if(M.then){for(t.__u|=_?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(p=o.length;p--;)we(o[p]);ye(t)}else t.__e=n.__e,t.__k=n.__k,M.then||ye(t);E.__e(M,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Dt(n.__e,t,n,s,r,o,l,_,i);return(u=E.diffed)&&u(t),128&t.__u?void 0:c}function ye(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ye)}function We(e,t,n){for(var s=0;s<n.length;s++)be(n[s],n[++s],n[++s]);E.__c&&E.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){E.__e(o,r.__v)}})}function Ke(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:le(e)?e.map(Ke):q({},e)}function Dt(e,t,n,s,r,o,l,c,_){var i,u,a,f,d,y,S,b=n.props||Z,g=t.props,$=t.type;if($=="svg"?r="http://www.w3.org/2000/svg":$=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(i=0;i<o.length;i++)if((d=o[i])&&"setAttribute"in d==!!$&&($?d.localName==$:d.nodeType==3)){e=d,o[i]=null;break}}if(e==null){if($==null)return document.createTextNode(g);e=document.createElementNS(r,$,g.is&&g),c&&(E.__m&&E.__m(t,o),c=!1),o=null}if($==null)b===g||c&&e.data==g||(e.data=g);else{if(o=o&&ae.call(e.childNodes),!c&&o!=null)for(b={},i=0;i<e.attributes.length;i++)b[(d=e.attributes[i]).name]=d.value;for(i in b)if(d=b[i],i!="children"){if(i=="dangerouslySetInnerHTML")a=d;else if(!(i in g)){if(i=="value"&&"defaultValue"in g||i=="checked"&&"defaultChecked"in g)continue;oe(e,i,null,d,r)}}for(i in g)d=g[i],i=="children"?f=d:i=="dangerouslySetInnerHTML"?u=d:i=="value"?y=d:i=="checked"?S=d:c&&typeof d!="function"||b[i]===d||oe(e,i,d,b[i],r);if(u)c||a&&(u.__html==a.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(a&&(e.innerHTML=""),Fe(t.type=="template"?e.content:e,le(f)?f:[f],t,n,s,$=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,l,o?o[0]:n.__k&&X(n,0),c,_),o!=null)for(i=o.length;i--;)we(o[i]);c||(i="value",$=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[i]||$=="progress"&&!y||$=="option"&&y!=b[i])&&oe(e,i,y,b[i],r),i="checked",S!=null&&S!=e[i]&&oe(e,i,S,b[i],r))}return e}function be(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(r){E.__e(r,n)}}function Be(e,t,n){var s,r;if(E.unmount&&E.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||be(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){E.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&Be(s[r],t,n||typeof e.type!="function");n||we(e.__e),e.__c=e.__=e.__e=void 0}function Ht(e,t,n){return this.constructor(e,n)}function ue(e,t,n){var s,r,o,l;t==document&&(t=document.documentElement),E.__&&E.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],l=[],$e(t,e=(!s&&n||t).__k=ie(ce,null,[e]),r||Z,Z,t.namespaceURI,!s&&n?[n]:r?null:t.firstChild?ae.call(t.childNodes):null,o,!s&&n?n:r?r.__e:t.firstChild,s,l),We(o,e,l)}ae=Oe.slice,E={__e:function(e,t,n,s){for(var r,o,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),l=r.__d),l)return r.__E=r}catch(c){e=c}throw e}},He=0,Mt=function(e){return e!=null&&e.constructor===void 0},Y.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},n),this.props)),e&&q(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ie(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ie(this))},Y.prototype.render=ce,G=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(e,t){return e.__v.__b-t.__v.__b},re.__r=0,Ne=/(PointerCapture)$|Capture$/i,ve=0,me=De(!1),ge=De(!0),xt=0;var Ve=function(e,t,n,s){var r;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],c=t[o]?(t[0]|=l?1:2,n[t[o++]]):t[++o];l===3?s[0]=c:l===4?s[1]=Object.assign(s[1]||{},c):l===5?(s[1]=s[1]||{})[t[++o]]=c:l===6?s[1][t[++o]]+=c+"":l?(r=e.apply(c,Ve(e,c,n,["",null])),s.push(r),c[0]?t[0]|=2:(t[o-2]=0,t[o]=r)):s.push(c)}return s},je=new Map;function Je(e){var t=je.get(this);return t||(t=new Map,je.set(this,t)),(t=Ve(this,t.get(e)||(t.set(e,t=function(n){for(var s,r,o=1,l="",c="",_=[0],i=function(f){o===1&&(f||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,f,l):o===3&&(f||l)?(_.push(3,f,l),o=2):o===2&&l==="..."&&f?_.push(4,f,0):o===2&&l&&!f?_.push(5,0,!0,l):o>=5&&((l||!f&&o===5)&&(_.push(o,0,l,r),o=6),f&&(_.push(o,f,0,r),o=6)),l=""},u=0;u<n.length;u++){u&&(o===1&&i(),i(u));for(var a=0;a<n[u].length;a++)s=n[u][a],o===1?s==="<"?(i(),_=[_],o=3):l+=s:o===4?l==="--"&&s===">"?(o=1,l=""):l=s+l[0]:c?s===c?c="":l+=s:s==='"'||s==="'"?c=s:s===">"?(i(),o=1):o&&(s==="="?(o=5,r=l,l=""):s==="/"&&(o<5||n[u][a+1]===">")?(i(),o===3&&(_=_[0]),o=_,(_=_[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(i(),o=2):l+=s),o===3&&l==="!--"&&(o=4,_=_[0])}return i(),_}(e)),t),arguments,[])).length>1?t:t[0]}var m=Je.bind(ie);var ee,H,ke,qe,te=0,tt=[],R=E,ze=R.__b,Ge=R.__r,Xe=R.diffed,Qe=R.__c,Ye=R.unmount,Ze=R.__;function Se(e,t){R.__h&&R.__h(H,e,te||t),te=0;var n=H.__H||(H.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return te=1,At(ot,e)}function At(e,t,n){var s=Se(ee++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):ot(void 0,t),function(c){var _=s.__N?s.__N[0]:s.__[0],i=s.t(_,c);_!==i&&(s.__N=[i,s.__[1]],s.__c.setState({}))}],s.__c=H,!H.__f)){var r=function(c,_,i){if(!s.__c.__H)return!0;var u=s.__c.__H.__.filter(function(f){return!!f.__c});if(u.every(function(f){return!f.__N}))return!o||o.call(this,c,_,i);var a=s.__c.props!==c;return u.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(a=!0)}}),o&&o.call(this,c,_,i)||a};H.__f=!0;var o=H.shouldComponentUpdate,l=H.componentWillUpdate;H.componentWillUpdate=function(c,_,i){if(this.__e){var u=o;o=void 0,r(c,_,i),o=u}l&&l.call(this,c,_,i)},H.shouldComponentUpdate=r}return s.__N||s.__}function F(e,t){var n=Se(ee++,3);!R.__s&&nt(n.__H,t)&&(n.__=e,n.u=t,H.__H.__h.push(n))}function z(e){return te=5,ne(function(){return{current:e}},[])}function ne(e,t){var n=Se(ee++,7);return nt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function K(e,t){return te=8,ne(function(){return e},t)}function Rt(){for(var e;e=tt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(t){e.__H.__h=[],R.__e(t,e.__v)}}R.__b=function(e){H=null,ze&&ze(e)},R.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ze&&Ze(e,t)},R.__r=function(e){Ge&&Ge(e),ee=0;var t=(H=e.__c).__H;t&&(ke===H?(t.__h=[],H.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(_e),t.__h.forEach(Ce),t.__h=[],ee=0)),ke=H},R.diffed=function(e){Xe&&Xe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(tt.push(t)!==1&&qe===R.requestAnimationFrame||((qe=R.requestAnimationFrame)||Nt)(Rt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ke=H=null},R.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(s){return!s.__||Ce(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],R.__e(s,n.__v)}}),Qe&&Qe(e,t)},R.unmount=function(e){Ye&&Ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{_e(s)}catch(r){t=r}}),n.__H=void 0,t&&R.__e(t,n.__v))};var et=typeof requestAnimationFrame=="function";function Nt(e){var t,n=function(){clearTimeout(s),et&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);et&&(t=requestAnimationFrame(n))}function _e(e){var t=H,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),H=t}function Ce(e){var t=H;e.__c=e.__(),H=t}function nt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function ot(e,t){return typeof t=="function"?t(e):t}function de(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function U(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function st(e){if(!e)return"";try{let t=new Date(e),s=new Date-t,r=Math.floor(s/6e4),o=Math.floor(s/36e5),l=Math.floor(s/864e5);return r<1?"Just now":r<60?`${r}m ago`:o<24?`${o}h ago`:l<7?`${l}d ago`:t.toLocaleDateString()}catch{return""}}function rt(e,t=null){if(t)return t(e);let n=U(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function at(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,s){try{let r=t(n);s===null?localStorage.removeItem(r):localStorage.setItem(r,s)}catch{}}}}function lt(e="csrftoken"){let t=document.cookie.split(";");for(let s of t){let[r,o]=s.trim().split("=");if(r===e)return decodeURIComponent(o)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function it({config:e,debugMode:t,isExpanded:n,isSpeaking:s,messagesCount:r,isLoading:o,currentAgent:l,onClose:c,onToggleExpand:_,onToggleDebug:i,onToggleTTS:u,onClear:a,onToggleSidebar:f}){let{title:d,primaryColor:y,embedded:S,showConversationSidebar:b,showClearButton:g,showDebugButton:$,enableDebugMode:N,showTTSButton:A,showExpandButton:j,enableTTS:O,elevenLabsApiKey:B,ttsProxyUrl:k}=e,D=B||k;return m`
    <div class="cw-header" style=${{backgroundColor:y}}>
      ${b&&m`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${f}
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
        <span class="cw-title">${U(d)}</span>
        ${l&&m`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${U(l.name||l.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${g&&m`
          <button 
            class="cw-header-btn" 
            onClick=${a}
            title="Clear"
            disabled=${o||r===0}
          >🗑️</button>
        `}
        
        ${$&&N&&m`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${i}
            title="Debug"
          >🐛</button>
        `}
        
        ${A&&D&&m`
          <button 
            class="cw-header-btn ${O?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${O?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${j&&!S&&m`
          <button 
            class="cw-header-btn" 
            onClick=${_}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!S&&m`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Te({msg:e,show:t,onToggle:n}){return t?m`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${n}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(e,null,2)}</pre>
    </div>
  `:m`
      <button
        class="cw-debug-payload-btn"
        onClick=${n}
        title="Show message payload"
      >{ }</button>
    `}function ct({msg:e,debugMode:t,markdownParser:n}){let[s,r]=C(!1),[o,l]=C(!1),c=e.role==="user",_=e.role==="system",i=e.type==="tool_call",u=e.type==="tool_result",a=e.type==="error",f=e.type==="sub_agent_start",d=e.type==="sub_agent_end",y=e.type==="agent_context";if(_&&!t)return null;if(f||d||y)return m`
      <div class="cw-agent-context ${f?"cw-agent-delegating":""} ${d?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${f?"\u{1F517}":d?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&m`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&m`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
      </div>
    `;if(i||u){let $=e.metadata?.arguments||e.metadata?.result,N=A=>{if(typeof A=="string")try{return JSON.stringify(JSON.parse(A),null,2)}catch{return A}return JSON.stringify(A,null,2)};return m`
      <div class="cw-tool-message ${u?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>$&&r(!s)}>
          ${e.content}
          ${$&&m`<span class="cw-tool-expand">${s?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${s&&$&&m`
          <pre class="cw-tool-details">${U(N(i?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&m`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
      </div>
    `}let S=["cw-message",c&&"cw-message-user",a&&"cw-message-error"].filter(Boolean).join(" "),b=`cw-message-row ${c?"cw-message-row-user":""}`,g=e.role==="assistant"?rt(e.content,n):U(e.content);return m`
    <div class=${b} style="position: relative;">
      <div class=${S} dangerouslySetInnerHTML=${{__html:g}} />
      ${t&&m`<${Te} msg=${e} show=${o} onToggle=${()=>l(!o)} />`}
    </div>
  `}function ut({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:s,onLoadMore:r,debugMode:o,markdownParser:l,emptyStateTitle:c,emptyStateMessage:_}){let i=z(null),u=z(!0),a=d=>{let y=d.target,S=y.scrollHeight-y.scrollTop-y.clientHeight<100;if(u.current=S,y.scrollTop<50&&n&&!s){let b=y.scrollHeight;r().then(()=>{let g=y.scrollHeight;y.scrollTop=g-b+y.scrollTop})}};F(()=>{let d=i.current;d&&u.current&&requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight})},[e,t]),F(()=>{let d=i.current;d&&e.length<=2&&(u.current=!0,requestAnimationFrame(()=>{d.scrollTop=d.scrollHeight}))},[e.length]);let f=e.length===0;return m`
    <div class="cw-messages" ref=${i} onScroll=${a}>
      ${f&&m`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${U(c)}</h3>
          <p>${U(_)}</p>
        </div>
      `}
      
      ${!f&&n&&m`
        <div class="cw-load-more" onClick=${r}>
          ${s?m`<span class="cw-spinner"></span><span>Loading...</span>`:m`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map(d=>m`
        <${ct} 
          key=${d.id} 
          msg=${d} 
          debugMode=${o}
          markdownParser=${l}
        />
      `)}
      
      ${t&&m`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `}var Me=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function _t({onSend:e,onCancel:t,isLoading:n,placeholder:s,primaryColor:r,enableVoice:o=!0}){let[l,c]=C(""),[_,i]=C(!1),[u,a]=C(!1),[f]=C(()=>!!Me),d=z(null),y=z(null);F(()=>{!n&&d.current&&d.current.focus()},[n]),F(()=>{d.current&&(d.current.style.height="auto",d.current.style.height=Math.min(d.current.scrollHeight,150)+"px")},[l]),F(()=>()=>{y.current&&y.current.abort()},[]);let S=k=>{k.preventDefault(),l.trim()&&!n&&(e(l),c(""),d.current&&(d.current.style.height="auto"))},b=k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),S(k))},g=k=>{n&&t&&(k.preventDefault(),t())},$=()=>{if(!Me||n)return;let k=new Me;k.continuous=!1,k.interimResults=!0,k.lang=navigator.language||"en-US";let D="",p="";k.onstart=()=>{a(!0),D=l},k.onresult=w=>{p="";for(let M=w.resultIndex;M<w.results.length;M++){let P=w.results[M][0].transcript;w.results[M].isFinal?D+=(D?" ":"")+P:p+=P}c(D+(p?" "+p:""))},k.onerror=w=>{console.warn("[ChatWidget] Speech recognition error:",w.error),a(!1),c(D||l)},k.onend=()=>{a(!1),D&&c(D),y.current=null},y.current=k,k.start()},N=()=>{y.current&&y.current.stop()},A=k=>{k.preventDefault(),u?N():$()},j=m`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,O=m`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,B=o&&f;return m`
    <form class="cw-input-form" onSubmit=${S}>
      <textarea
        ref=${d}
        class="cw-input"
        placeholder=${U(s)}
        value=${l}
        onInput=${k=>c(k.target.value)}
        onKeyDown=${b}
        disabled=${n}
        rows="1"
      />
      ${B&&m`
        <button
          type="button"
          class=${`cw-voice-btn ${u?"cw-voice-btn-recording":""}`}
          onClick=${A}
          disabled=${n}
          title=${u?"Stop recording":"Voice input"}
        >
          ${O}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&_?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&_?"#dc2626":r}}
        onClick=${g}
        onMouseEnter=${()=>i(!0)}
        onMouseLeave=${()=>i(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?_?j:m`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function dt({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:s,onClose:r,onNewConversation:o,onSwitchConversation:l}){return m`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${r}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${o}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${n&&m`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!n&&t.length===0&&m`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${t.map(c=>m`
          <div 
            key=${c.id}
            class="cw-conversation-item ${c.id===s?"cw-conversation-active":""}"
            onClick=${()=>l(c.id)}
          >
            <div class="cw-conversation-title">${U(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${st(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${r}
    />
  `}function pt({availableModels:e,selectedModel:t,onSelectModel:n,disabled:s}){let[r,o]=C(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",_=()=>{s||o(!r)},i=u=>{n(u),o(!1)};return m`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${_}
        disabled=${s}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${U(c)}</span>
        <span class="cw-model-chevron">${r?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${r&&m`
        <div class="cw-model-dropdown">
          ${e.map(u=>m`
            <button 
              key=${u.id}
              class="cw-model-option ${u.id===t?"cw-model-option-selected":""}"
              onClick=${()=>i(u.id)}
            >
              <span class="cw-model-option-name">${U(u.name)}</span>
              <span class="cw-model-option-provider">${U(u.provider)}</span>
              ${u.description&&m`
                <span class="cw-model-option-desc">${U(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}function ft(e,t,n){let[s,r]=C([]),[o,l]=C(!1),[c,_]=C(null),[i,u]=C(()=>n?.get(e.conversationIdKey)||null),[a,f]=C(!1),[d,y]=C(!1),[S,b]=C(0),g=z(null),$=z(null);F(()=>{i&&n?.set(e.conversationIdKey,i)},[i,e.conversationIdKey,n]);let N=K(async(p,w,M)=>{g.current&&g.current.close();let P=e.apiPaths.runEvents.replace("{runId}",p),L=`${e.backendUrl}${P}`;w&&(L+=`?anonymous_token=${encodeURIComponent(w)}`);let T=new EventSource(L);g.current=T;let W="";T.addEventListener("assistant.message",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("assistant.message",h.payload);let I=h.payload.content;I&&(W+=I,r(J=>{let Q=J[J.length-1];return Q?.role==="assistant"&&Q.id.startsWith("assistant-stream-")?[...J.slice(0,-1),{...Q,content:W}]:[...J,{id:"assistant-stream-"+Date.now(),role:"assistant",content:W,timestamp:new Date,type:"message"}]}))}catch(h){console.error("[ChatWidget] Parse error:",h)}}),T.addEventListener("tool.call",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("tool.call",h.payload),r(I=>[...I,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${h.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:h.payload.name,arguments:h.payload.arguments,toolCallId:h.payload.id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),T.addEventListener("tool.result",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("tool.result",h.payload);let I=h.payload.result,J=I?.error;r(Q=>[...Q,{id:"tool-result-"+Date.now(),role:"system",content:J?`\u274C ${I.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:h.payload.name,result:I,toolCallId:h.payload.tool_call_id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),T.addEventListener("custom",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("custom",h.payload),h.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(h.payload),h.payload?.type==="agent_context"&&r(I=>[...I,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${h.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:h.payload.agent_key,agentName:h.payload.agent_name,action:h.payload.action}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),T.addEventListener("sub_agent.start",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("sub_agent.start",h.payload),r(I=>[...I,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${h.payload.agent_name||h.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name,invocationMode:h.payload.invocation_mode}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),T.addEventListener("sub_agent.end",v=>{try{let h=JSON.parse(v.data);e.onEvent&&e.onEvent("sub_agent.end",h.payload),r(I=>[...I,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${h.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}});let V=v=>{try{let h=JSON.parse(v.data);if(e.onEvent&&e.onEvent(h.type,h.payload),h.type==="run.failed"){let I=h.payload.error||"Agent run failed";_(I),r(J=>[...J,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${I}`,timestamp:new Date,type:"error"}])}}catch(h){console.error("[ChatWidget] Parse error:",h)}l(!1),T.close(),g.current=null,W&&M&&M(W)};T.addEventListener("run.succeeded",V),T.addEventListener("run.failed",V),T.addEventListener("run.cancelled",V),T.addEventListener("run.timed_out",V),T.onerror=()=>{l(!1),T.close(),g.current=null}},[e]),A=K(async(p,w={})=>{if(!p.trim()||o)return;let{model:M,onAssistantMessage:P}=typeof w=="function"?{onAssistantMessage:w}:w;l(!0),_(null);let L={id:de(),role:"user",content:p.trim(),timestamp:new Date,type:"message"};r(T=>[...T,L]);try{let T=await t.getOrCreateSession(),W={agentKey:e.agentKey,conversationId:i,messages:[{role:"user",content:p.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType}};M&&(W.model=M);let V=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)},T));if(!V.ok){let I=await V.json().catch(()=>({}));throw new Error(I.error||`HTTP ${V.status}`)}let v=await V.json();$.current=v.id;let h=v.conversationId||v.conversation_id;!i&&h&&u(h),await N(v.id,T,P)}catch(T){_(T.message||"Failed to send message"),l(!1)}finally{$.current=null}},[e,t,i,o,N]),j=K(async()=>{let p=$.current;if(!(!p||!o))try{let w=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",p):`${e.apiPaths.runs}${p}/cancel/`;(await fetch(`${e.backendUrl}${w}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(g.current&&(g.current.close(),g.current=null),l(!1),$.current=null,r(P=>[...P,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(w){console.error("[ChatWidget] Failed to cancel run:",w)}},[e,t,o]),O=K(()=>{r([]),u(null),_(null),f(!1),b(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),B=p=>{let w={id:de(),role:p.role,timestamp:p.timestamp?new Date(p.timestamp):new Date};if(p.role==="tool")return{...w,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:p.content,toolCallId:p.tool_call_id}};if(p.role==="assistant"&&p.tool_calls&&p.tool_calls.length>0)return p.tool_calls.map(P=>({id:de(),role:"assistant",content:`\u{1F527} ${P.function?.name||P.name||"tool"}`,timestamp:w.timestamp,type:"tool_call",metadata:{toolName:P.function?.name||P.name,arguments:P.function?.arguments||P.arguments,toolCallId:P.id}}));let M=typeof p.content=="string"?p.content:JSON.stringify(p.content);return p.role==="assistant"&&!M?.trim()?null:{...w,content:M,type:"message"}},k=K(async p=>{l(!0),r([]),u(p);try{let w=await t.getOrCreateSession(),P=`${e.backendUrl}${e.apiPaths.conversations}${p}/?limit=10&offset=0`,L=await fetch(P,t.getFetchOptions({method:"GET"},w));if(L.ok){let T=await L.json();T.messages&&r(T.messages.flatMap(B).filter(Boolean)),f(T.has_more||T.hasMore||!1),b(T.messages?.length||0)}else L.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch(w){console.error("[ChatWidget] Failed to load conversation:",w)}finally{l(!1)}},[e,t,n]),D=K(async()=>{if(!(!i||d||!a)){y(!0);try{let p=await t.getOrCreateSession(),M=`${e.backendUrl}${e.apiPaths.conversations}${i}/?limit=10&offset=${S}`,P=await fetch(M,t.getFetchOptions({method:"GET"},p));if(P.ok){let L=await P.json();if(L.messages?.length>0){let T=L.messages.flatMap(B).filter(Boolean);r(W=>[...T,...W]),b(W=>W+L.messages.length),f(L.has_more||L.hasMore||!1)}else f(!1)}}catch(p){console.error("[ChatWidget] Failed to load more messages:",p)}finally{y(!1)}}},[e,t,i,S,d,a]);return F(()=>()=>{g.current&&g.current.close()},[]),{messages:s,isLoading:o,error:c,conversationId:i,hasMoreMessages:a,loadingMoreMessages:d,sendMessage:A,cancelRun:j,clearMessages:O,loadConversation:k,loadMoreMessages:D,setConversationId:u}}function ht(e,t,n){let[s,r]=C([]),[o,l]=C(null),[c,_]=C(null),[i,u]=C(!1);F(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let y=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if(y.ok){let S=await y.json(),b=S.models||[];r(b),_(S.default);let g=n?.get(e.modelKey);g&&b.some($=>$.id===g)?l(g):l(S.default)}}catch(y){console.warn("[ChatWidget] Failed to load models:",y)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let a=K(d=>{l(d),n?.set(e.modelKey,d)},[e.modelKey,n]),f=K(()=>s.find(d=>d.id===o)||null,[s,o]);return{availableModels:s,selectedModel:o,defaultModel:c,isLoading:i,selectModel:a,getSelectedModelInfo:f}}function mt(e,t,n){let s=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",r=(c=null)=>{let _=s(),i={},u=c||e.authToken||t().authToken;if(_==="token"&&u){let a=e.authHeader||"Authorization",f=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";i[a]=f?`${f} ${u}`:u}else if(_==="jwt"&&u){let a=e.authHeader||"Authorization",f=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";i[a]=f?`${f} ${u}`:u}else if(_==="anonymous"&&u){let a=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";i[a]=u}if(_==="session"){let a=lt(e.csrfCookieName);a&&(i["X-CSRFToken"]=a)}return i};return{getAuthStrategy:s,getAuthHeaders:r,getFetchOptions:(c={},_=null)=>{let i=s(),u={...c};return u.headers={...u.headers,...r(_)},i==="session"&&(u.credentials="include"),u},getOrCreateSession:async()=>{let c=s(),_=t();if(c!=="anonymous")return e.authToken||_.authToken;if(_.authToken)return _.authToken;let i=e.anonymousTokenKey||e.sessionTokenKey,u=_.storage?.get(i);if(u)return n(a=>({...a,authToken:u})),u;try{let a=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,f=await fetch(`${e.backendUrl}${a}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(f.ok){let d=await f.json();return n(y=>({...y,authToken:d.token})),_.storage?.set(i,d.token),d.token}}catch(a){console.warn("[ChatWidget] Failed to create session:",a)}return null}}}function gt({config:e,onStateChange:t,markdownParser:n,apiRef:s}){let[r,o]=C(e.embedded||e.forceOpen===!0),[l,c]=C(!1),[_,i]=C(!1),[u,a]=C(!1),[f,d]=C([]),[y,S]=C(!1),[b,g]=C(e.enableTTS),[$,N]=C(!1),[A,j]=C(null);F(()=>{e.forceOpen!==void 0&&o(e.forceOpen)},[e.forceOpen]);let O=ne(()=>at(e.containerId),[e.containerId]),[B,k]=C(e.authToken||null),D=ne(()=>mt(e,()=>({authToken:B,storage:O}),I=>{let J=I({authToken:B,storage:O});J.authToken!==B&&k(J.authToken)}),[e,B,O]),p=ft(e,D,O),w=ht(e,D,O);F(()=>{for(let v=p.messages.length-1;v>=0;v--){let h=p.messages[v];if(h.type==="sub_agent_start"){j({key:h.metadata?.subAgentKey,name:h.metadata?.agentName});return}if(h.type==="sub_agent_end"){j(null);return}}},[p.messages]),F(()=>{let v=O.get(e.conversationIdKey);v&&p.loadConversation(v)},[]),F(()=>{t&&t({isOpen:r,isExpanded:l,debugMode:_,messages:p.messages,conversationId:p.conversationId,isLoading:p.isLoading,error:p.error})},[r,l,_,p.messages,p.conversationId,p.isLoading,p.error]);let M=K(async()=>{if(e.showConversationSidebar){S(!0);try{let v=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,h=await fetch(v,D.getFetchOptions({method:"GET"}));if(h.ok){let I=await h.json();d(I.results||I)}}catch(v){console.error("[ChatWidget] Failed to load conversations:",v),d([])}finally{S(!1)}}},[e,D]),P=K(()=>{let v=!u;a(v),v&&M()},[u,M]),L=K(v=>{v!==p.conversationId&&p.loadConversation(v),a(!1)},[p]),T=K(()=>{p.clearMessages(),a(!1)},[p]),W=K(v=>{p.sendMessage(v,{model:w.selectedModel,onAssistantMessage:h=>{}})},[p,b,w.selectedModel]);if(F(()=>{s&&(s.current={open:()=>o(!0),close:()=>o(!1),send:v=>W(v),clearMessages:()=>p.clearMessages(),toggleTTS:()=>g(v=>!v),stopSpeech:()=>N(!1),setAuth:v=>{v.token!==void 0&&k(v.token)},clearAuth:()=>k(null)})},[p,s,W]),!e.embedded&&!r)return m`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>o(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let V=["cw-widget",l&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return m`
    <div class=${V} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&m`
        <${dt}
          isOpen=${u}
          conversations=${f}
          conversationsLoading=${y}
          currentConversationId=${p.conversationId}
          onClose=${()=>a(!1)}
          onNewConversation=${T}
          onSwitchConversation=${L}
        />
      `}
      
      <${it}
        config=${e}
        debugMode=${_}
        isExpanded=${l}
        isSpeaking=${$}
        messagesCount=${p.messages.length}
        isLoading=${p.isLoading}
        currentAgent=${A}
        onClose=${()=>o(!1)}
        onToggleExpand=${()=>c(!l)}
        onToggleDebug=${()=>i(!_)}
        onToggleTTS=${()=>g(!b)}
        onClear=${p.clearMessages}
        onToggleSidebar=${P}
      />

      ${_&&m`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${ut}
        messages=${p.messages}
        isLoading=${p.isLoading}
        hasMoreMessages=${p.hasMoreMessages}
        loadingMoreMessages=${p.loadingMoreMessages}
        onLoadMore=${p.loadMoreMessages}
        debugMode=${_}
        markdownParser=${n}
        emptyStateTitle=${e.emptyStateTitle}
        emptyStateMessage=${e.emptyStateMessage}
      />

      ${p.error&&m`<div class="cw-error-bar">${p.error}</div>`}

      ${e.showModelSelector&&w.availableModels.length>0&&m`
        <${pt}
          availableModels=${w.availableModels}
          selectedModel=${w.selectedModel}
          onSelectModel=${w.selectModel}
          disabled=${p.isLoading}
        />
      `}

      <${_t}
        onSend=${W}
        onCancel=${p.cancelRun}
        isLoading=${p.isLoading}
        placeholder=${e.placeholder}
        primaryColor=${e.primaryColor}
        enableVoice=${e.enableVoice}
      />
    </div>
  `}var yt={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function vt(e){let t={...yt.apiPaths,...e.apiPaths||{}};return{...yt,...e,apiPaths:t}}var pe=new Map,Ot=0,x=null,xe=class{constructor(t={}){this.instanceId=`cw-${++Ot}`,this.config=vt(t),this.container=null,this._state={},this._apiRef={current:null},pe.set(this.instanceId,this)}_handleStateChange=t=>{this._state=t};init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&ue(m`<${gt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${fe._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(ue(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),pe.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}};function wt(e={}){return new xe(e).init()}function Ut(e={}){return x&&x.destroy(),x=wt(e),x}function Ft(){x&&(x.destroy(),x=null)}function Lt(){x&&x.open()}function Wt(){x&&x.close()}function Kt(e){x&&x.send(e)}function Bt(){x&&x.clearMessages()}function jt(){x&&x.toggleTTS()}function Vt(){x&&x.stopSpeech()}function Jt(e){x&&x.setAuth(e)}function qt(){x&&x.clearAuth()}function zt(){return x?x.getState():null}function Gt(){return x?x.getConfig():null}var fe={createInstance:wt,getInstance:e=>pe.get(e),getAllInstances:()=>Array.from(pe.values()),init:Ut,destroy:Ft,open:Lt,close:Wt,send:Kt,clearMessages:Bt,toggleTTS:jt,stopSpeech:Vt,setAuth:Jt,clearAuth:qt,getState:zt,getConfig:Gt,_enhancedMarkdownParser:null};var Xt=fe;typeof window<"u"&&(window.ChatWidget=fe);return Tt(Qt);})();
