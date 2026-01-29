var ChatWidgetModule=(()=>{var Ce=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var Dt=Object.getOwnPropertyNames;var Pt=Object.prototype.hasOwnProperty;var Ht=(e,t)=>{for(var n in t)Ce(e,n,{get:t[n],enumerable:!0})},Nt=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Dt(t))!Pt.call(e,r)&&r!==n&&Ce(e,r,{get:()=>t[r],enumerable:!(o=At(t,r))||o.enumerable});return e};var Ot=e=>Nt(Ce({},"__esModule",{value:!0}),e);var _n={};Ht(_n,{ChatWidget:()=>ke,default:()=>dn});var de,D,ze,Ft,Y,Ue,je,Je,Ve,xe,Se,Me,Wt,oe={},qe=[],Ut=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_e=Array.isArray;function Q(e,t){for(var n in t)e[n]=t[n];return e}function Ee(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t,n){var o,r,s,i={};for(s in t)s=="key"?o=t[s]:s=="ref"?r=t[s]:i[s]=t[s];if(arguments.length>2&&(i.children=arguments.length>3?de.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)i[s]===void 0&&(i[s]=e.defaultProps[s]);return ce(e,i,o,r,null)}function ce(e,t,n,o,r){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ze,__i:-1,__u:0};return r==null&&D.vnode!=null&&D.vnode(s),s}function fe(e){return e.children}function ne(e,t){this.props=e,this.context=t}function te(e,t){if(t==null)return e.__?te(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?te(e):null}function Ge(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ge(e)}}function Le(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!ue.__r++||Ue!=D.debounceRendering)&&((Ue=D.debounceRendering)||je)(ue)}function ue(){for(var e,t,n,o,r,s,i,c=1;Y.length;)Y.length>c&&Y.sort(Je),e=Y.shift(),c=Y.length,e.__d&&(n=void 0,o=void 0,r=(o=(t=e).__v).__e,s=[],i=[],t.__P&&((n=Q({},o)).__v=o.__v+1,D.vnode&&D.vnode(n),Ie(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[r]:null,s,r??te(o),!!(32&o.__u),i),n.__v=o.__v,n.__.__k[n.__i]=n,Ze(s,n,i),o.__e=o.__=null,n.__e!=r&&Ge(n)));ue.__r=0}function Xe(e,t,n,o,r,s,i,c,d,l,u){var a,_,p,$,C,g,y,w=o&&o.__k||qe,I=t.length;for(d=Lt(n,t,w,d,I),a=0;a<I;a++)(p=n.__k[a])!=null&&(_=p.__i==-1?oe:w[p.__i]||oe,p.__i=a,g=Ie(e,p,_,r,s,i,c,d,l,u),$=p.__e,p.ref&&_.ref!=p.ref&&(_.ref&&Re(_.ref,null,p),u.push(p.ref,p.__c||$,p)),C==null&&$!=null&&(C=$),(y=!!(4&p.__u))||_.__k===p.__k?d=Qe(p,d,e,y):typeof p.type=="function"&&g!==void 0?d=g:$&&(d=$.nextSibling),p.__u&=-7);return n.__e=C,d}function Lt(e,t,n,o,r){var s,i,c,d,l,u=n.length,a=u,_=0;for(e.__k=new Array(r),s=0;s<r;s++)(i=t[s])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[s]=ce(null,i,null,null,null):_e(i)?i=e.__k[s]=ce(fe,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[s]=ce(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[s]=i,d=s+_,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=Kt(i,n,d,a))!=-1&&(a--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>u?_--:r<u&&_++),typeof i.type!="function"&&(i.__u|=4)):l!=d&&(l==d-1?_--:l==d+1?_++:(l>d?_--:_++,i.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<u;s++)(c=n[s])!=null&&!(2&c.__u)&&(c.__e==o&&(o=te(c)),et(c,c));return o}function Qe(e,t,n,o){var r,s;if(typeof e.type=="function"){for(r=e.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=e,t=Qe(r[s],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=te(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Kt(e,t,n,o){var r,s,i,c=e.key,d=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&c==null||u&&c==l.key&&d==l.type)return n;if(o>(u?1:0)){for(r=n-1,s=n+1;r>=0||s<t.length;)if((l=t[i=r>=0?r--:s++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return i}return-1}function Ke(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ut.test(t)?n:n+"px"}function le(e,t,n,o,r){var s,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ke(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||Ke(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Ve,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o?n.u=o.u:(n.u=xe,e.addEventListener(t,s?Me:Se,s)):e.removeEventListener(t,s?Me:Se,s);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Be(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=xe++;else if(t.t<n.u)return;return n(D.event?D.event(t):t)}}}function Ie(e,t,n,o,r,s,i,c,d,l){var u,a,_,p,$,C,g,y,w,I,N,V,O,j,J,K,k,H=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),s=[c=t.__e=n.__e]),(u=D.__b)&&u(t);e:if(typeof H=="function")try{if(y=t.props,w="prototype"in H&&H.prototype.render,I=(u=H.contextType)&&o[u.__c],N=u?I?I.props.value:u.__:o,n.__c?g=(a=t.__c=n.__c).__=a.__E:(w?t.__c=a=new H(y,N):(t.__c=a=new ne(y,N),a.constructor=H,a.render=zt),I&&I.sub(a),a.state||(a.state={}),a.__n=o,_=a.__d=!0,a.__h=[],a._sb=[]),w&&a.__s==null&&(a.__s=a.state),w&&H.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=Q({},a.__s)),Q(a.__s,H.getDerivedStateFromProps(y,a.__s))),p=a.props,$=a.state,a.__v=t,_)w&&H.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),w&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(w&&H.getDerivedStateFromProps==null&&y!==p&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,N),t.__v==n.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,N)===!1){for(t.__v!=n.__v&&(a.props=y,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(v){v&&(v.__=t)}),V=0;V<a._sb.length;V++)a.__h.push(a._sb[V]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,N),w&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(p,$,C)})}if(a.context=N,a.props=y,a.__P=e,a.__e=!1,O=D.__r,j=0,w){for(a.state=a.__s,a.__d=!1,O&&O(t),u=a.render(a.props,a.state,a.context),J=0;J<a._sb.length;J++)a.__h.push(a._sb[J]);a._sb=[]}else do a.__d=!1,O&&O(t),u=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++j<25);a.state=a.__s,a.getChildContext!=null&&(o=Q(Q({},o),a.getChildContext())),w&&!_&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(p,$)),K=u,u!=null&&u.type===fe&&u.key==null&&(K=Ye(u.props.children)),c=Xe(e,_e(K)?K:[K],t,n,o,r,s,i,c,d,l),a.base=t.__e,t.__u&=-161,a.__h.length&&i.push(a),g&&(a.__E=a.__=null)}catch(v){if(t.__v=null,d||s!=null)if(v.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,t.__e=c}else{for(k=s.length;k--;)Ee(s[k]);Te(t)}else t.__e=n.__e,t.__k=n.__k,v.then||Te(t);D.__e(v,t,n)}else s==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Bt(n.__e,t,n,o,r,s,i,d,l);return(u=D.diffed)&&u(t),128&t.__u?void 0:c}function Te(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Te)}function Ze(e,t,n){for(var o=0;o<n.length;o++)Re(n[o],n[++o],n[++o]);D.__c&&D.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){D.__e(s,r.__v)}})}function Ye(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:_e(e)?e.map(Ye):Q({},e)}function Bt(e,t,n,o,r,s,i,c,d){var l,u,a,_,p,$,C,g=n.props||oe,y=t.props,w=t.type;if(w=="svg"?r="http://www.w3.org/2000/svg":w=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(l=0;l<s.length;l++)if((p=s[l])&&"setAttribute"in p==!!w&&(w?p.localName==w:p.nodeType==3)){e=p,s[l]=null;break}}if(e==null){if(w==null)return document.createTextNode(y);e=document.createElementNS(r,w,y.is&&y),c&&(D.__m&&D.__m(t,s),c=!1),s=null}if(w==null)g===y||c&&e.data==y||(e.data=y);else{if(s=s&&de.call(e.childNodes),!c&&s!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)if(p=g[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=p;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;le(e,l,null,p,r)}}for(l in y)p=y[l],l=="children"?_=p:l=="dangerouslySetInnerHTML"?u=p:l=="value"?$=p:l=="checked"?C=p:c&&typeof p!="function"||g[l]===p||le(e,l,p,g[l],r);if(u)c||a&&(u.__html==a.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(a&&(e.innerHTML=""),Xe(t.type=="template"?e.content:e,_e(_)?_:[_],t,n,o,w=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,i,s?s[0]:n.__k&&te(n,0),c,d),s!=null)for(l=s.length;l--;)Ee(s[l]);c||(l="value",w=="progress"&&$==null?e.removeAttribute("value"):$!=null&&($!==e[l]||w=="progress"&&!$||w=="option"&&$!=g[l])&&le(e,l,$,g[l],r),l="checked",C!=null&&C!=e[l]&&le(e,l,C,g[l],r))}return e}function Re(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){D.__e(r,n)}}function et(e,t,n){var o,r;if(D.unmount&&D.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Re(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(s){D.__e(s,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&et(o[r],t,n||typeof e.type!="function");n||Ee(e.__e),e.__c=e.__=e.__e=void 0}function zt(e,t,n){return this.constructor(e,n)}function he(e,t,n){var o,r,s,i;t==document&&(t=document.documentElement),D.__&&D.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,s=[],i=[],Ie(t,e=(!o&&n||t).__k=pe(fe,null,[e]),r||oe,oe,t.namespaceURI,!o&&n?[n]:r?null:t.firstChild?de.call(t.childNodes):null,s,!o&&n?n:r?r.__e:t.firstChild,o,i),Ze(s,e,i)}de=qe.slice,D={__e:function(e,t,n,o){for(var r,s,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(c){e=c}throw e}},ze=0,Ft=function(e){return e!=null&&e.constructor===void 0},ne.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q({},this.state),typeof e=="function"&&(e=e(Q({},n),this.props)),e&&Q(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Le(this))},ne.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Le(this))},ne.prototype.render=fe,Y=[],je=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Je=function(e,t){return e.__v.__b-t.__v.__b},ue.__r=0,Ve=/(PointerCapture)$|Capture$/i,xe=0,Se=Be(!1),Me=Be(!0),Wt=0;var nt=function(e,t,n,o){var r;t[0]=0;for(var s=1;s<t.length;s++){var i=t[s++],c=t[s]?(t[0]|=i?1:2,n[t[s++]]):t[++s];i===3?o[0]=c:i===4?o[1]=Object.assign(o[1]||{},c):i===5?(o[1]=o[1]||{})[t[++s]]=c:i===6?o[1][t[++s]]+=c+"":i?(r=e.apply(c,nt(e,c,n,["",null])),o.push(r),c[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):o.push(c)}return o},tt=new Map;function ot(e){var t=tt.get(this);return t||(t=new Map,tt.set(this,t)),(t=nt(this,t.get(e)||(t.set(e,t=function(n){for(var o,r,s=1,i="",c="",d=[0],l=function(_){s===1&&(_||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?d.push(0,_,i):s===3&&(_||i)?(d.push(3,_,i),s=2):s===2&&i==="..."&&_?d.push(4,_,0):s===2&&i&&!_?d.push(5,0,!0,i):s>=5&&((i||!_&&s===5)&&(d.push(s,0,i,r),s=6),_&&(d.push(s,_,0,r),s=6)),i=""},u=0;u<n.length;u++){u&&(s===1&&l(),l(u));for(var a=0;a<n[u].length;a++)o=n[u][a],s===1?o==="<"?(l(),d=[d],s=3):i+=o:s===4?i==="--"&&o===">"?(s=1,i=""):i=o+i[0]:c?o===c?c="":i+=o:o==='"'||o==="'"?c=o:o===">"?(l(),s=1):s&&(o==="="?(s=5,r=i,i=""):o==="/"&&(s<5||n[u][a+1]===">")?(l(),s===3&&(d=d[0]),s=d,(d=d[0]).push(2,0,s),s=0):o===" "||o==="	"||o===`
`||o==="\r"?(l(),s=2):i+=o),s===3&&i==="!--"&&(s=4,d=d[0])}return l(),d}(e)),t),arguments,[])).length>1?t:t[0]}var m=ot.bind(pe);var se,W,Ae,st,re=0,_t=[],U=D,rt=U.__b,at=U.__r,it=U.diffed,lt=U.__c,ct=U.unmount,ut=U.__;function Pe(e,t){U.__h&&U.__h(W,e,re||t),re=0;var n=W.__H||(W.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function M(e){return re=1,jt(ft,e)}function jt(e,t,n){var o=Pe(se++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ft(void 0,t),function(c){var d=o.__N?o.__N[0]:o.__[0],l=o.t(d,c);d!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=W,!W.__f)){var r=function(c,d,l){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(_){return!!_.__c});if(u.every(function(_){return!_.__N}))return!s||s.call(this,c,d,l);var a=o.__c.props!==c;return u.forEach(function(_){if(_.__N){var p=_.__[0];_.__=_.__N,_.__N=void 0,p!==_.__[0]&&(a=!0)}}),s&&s.call(this,c,d,l)||a};W.__f=!0;var s=W.shouldComponentUpdate,i=W.componentWillUpdate;W.componentWillUpdate=function(c,d,l){if(this.__e){var u=s;s=void 0,r(c,d,l),s=u}i&&i.call(this,c,d,l)},W.shouldComponentUpdate=r}return o.__N||o.__}function L(e,t){var n=Pe(se++,3);!U.__s&&pt(n.__H,t)&&(n.__=e,n.u=t,W.__H.__h.push(n))}function G(e){return re=5,ae(function(){return{current:e}},[])}function ae(e,t){var n=Pe(se++,7);return pt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function z(e,t){return re=8,ae(function(){return e},t)}function Jt(){for(var e;e=_t.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(me),e.__H.__h.forEach(De),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}U.__b=function(e){W=null,rt&&rt(e)},U.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ut&&ut(e,t)},U.__r=function(e){at&&at(e),se=0;var t=(W=e.__c).__H;t&&(Ae===W?(t.__h=[],W.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(me),t.__h.forEach(De),t.__h=[],se=0)),Ae=W},U.diffed=function(e){it&&it(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(_t.push(t)!==1&&st===U.requestAnimationFrame||((st=U.requestAnimationFrame)||Vt)(Jt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Ae=W=null},U.__c=function(e,t){t.some(function(n){try{n.__h.forEach(me),n.__h=n.__h.filter(function(o){return!o.__||De(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],U.__e(o,n.__v)}}),lt&&lt(e,t)},U.unmount=function(e){ct&&ct(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{me(o)}catch(r){t=r}}),n.__H=void 0,t&&U.__e(t,n.__v))};var dt=typeof requestAnimationFrame=="function";function Vt(e){var t,n=function(){clearTimeout(o),dt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);dt&&(t=requestAnimationFrame(n))}function me(e){var t=W,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),W=t}function De(e){var t=W;e.__c=e.__(),W=t}function pt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ft(e,t){return typeof t=="function"?t(e):t}function qt(e){return e.replace(/_([a-z])/g,(t,n)=>n.toUpperCase())}function He(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function ge(e){return Array.isArray(e)?e.map(ge):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[qt(t),ge(n)])):e}function ye(e){return Array.isArray(e)?e.map(ye):e!==null&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[He(t),ye(n)])):e}function ve(){return"msg-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function B(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function ht(e){if(!e)return"";try{let t=new Date(e),o=new Date-t,r=Math.floor(o/6e4),s=Math.floor(o/36e5),i=Math.floor(o/864e5);return r<1?"Just now":r<60?`${r}m ago`:s<24?`${s}h ago`:i<7?`${i}d ago`:t.toLocaleDateString()}catch{return""}}function mt(e,t=null){if(t)return t(e);let n=B(e);return n=n.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__(.+?)__/g,"<strong>$1</strong>"),n=n.replace(/\*(.+?)\*/g,"<em>$1</em>"),n=n.replace(/_(.+?)_/g,"<em>$1</em>"),n=n.replace(/`(.+?)`/g,"<code>$1</code>"),n=n.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),n=n.replace(/\n/g,"<br>"),n}function gt(e=""){let t=n=>e?`${n}_${e}`:n;return{get(n){try{return localStorage.getItem(t(n))}catch{return null}},set(n,o){try{let r=t(n);o===null?localStorage.removeItem(r):localStorage.setItem(r,o)}catch{}}}}function yt(e="csrftoken"){let t=document.cookie.split(";");for(let o of t){let[r,s]=o.trim().split("=");if(r===e)return decodeURIComponent(s)}let n=document.querySelector('meta[name="csrf-token"]');return n?n.getAttribute("content"):null}function we(e){if(e===0)return"0 B";let t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(1))+" "+n[o]}function $e(e){return e?e.startsWith("image/")?"\u{1F5BC}\uFE0F":e.startsWith("video/")?"\u{1F3AC}":e.startsWith("audio/")?"\u{1F3B5}":e.includes("pdf")?"\u{1F4D5}":e.includes("spreadsheet")||e.includes("excel")?"\u{1F4CA}":e.includes("document")||e.includes("word")?"\u{1F4DD}":e.includes("presentation")||e.includes("powerpoint")?"\u{1F4FD}\uFE0F":e.includes("zip")||e.includes("compressed")?"\u{1F5DC}\uFE0F":(e.includes("text/"),"\u{1F4C4}"):"\u{1F4C4}"}function vt({config:e,debugMode:t,isExpanded:n,isSpeaking:o,messagesCount:r,isLoading:s,currentAgent:i,onClose:c,onToggleExpand:d,onToggleDebug:l,onToggleTTS:u,onClear:a,onToggleSidebar:_}){let{title:p,primaryColor:$,embedded:C,showConversationSidebar:g,showClearButton:y,showDebugButton:w,enableDebugMode:I,showTTSButton:N,showExpandButton:V,enableTTS:O,elevenLabsApiKey:j,ttsProxyUrl:J}=e,K=j||J;return m`
    <div class="cw-header" style=${{backgroundColor:$}}>
      ${g&&m`
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
        <span class="cw-title">${B(p)}</span>
        ${i&&m`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${B(i.name||i.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${y&&m`
          <button 
            class="cw-header-btn" 
            onClick=${a}
            title="Clear"
            disabled=${s||r===0}
          >🗑️</button>
        `}
        
        ${w&&I&&m`
          <button 
            class="cw-header-btn ${t?"cw-btn-active":""}" 
            onClick=${l}
            title="Debug"
          >🐛</button>
        `}
        
        ${N&&K&&m`
          <button 
            class="cw-header-btn ${O?"cw-btn-active":""}" 
            onClick=${u}
            title="TTS"
          >${O?"\u{1F50A}":"\u{1F507}"}</button>
        `}
        
        ${V&&!C&&m`
          <button 
            class="cw-header-btn" 
            onClick=${d}
            title=${n?"Minimize":"Expand"}
          >${n?"\u2296":"\u2295"}</button>
        `}
        
        ${!C&&m`
          <button 
            class="cw-header-btn" 
            onClick=${c}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `}function Ne({msg:e,show:t,onToggle:n}){return t?m`
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
    `}function Gt({onEdit:e,onRetry:t,isLoading:n}){return n?null:m`
    <div class="cw-message-actions">
      <button
        class="cw-message-action-btn"
        onClick=${e}
        title="Edit message"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
      <button
        class="cw-message-action-btn"
        onClick=${t}
        title="Retry from here"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1 4 1 10 7 10"></polyline>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </svg>
      </button>
    </div>
  `}function Xt({initialContent:e,onSave:t,onCancel:n}){let[o,r]=M(e),s=G(null);return L(()=>{s.current&&(s.current.focus(),s.current.setSelectionRange(o.length,o.length),s.current.style.height="auto",s.current.style.height=s.current.scrollHeight+"px")},[]),m`
    <div class="cw-inline-edit">
      <textarea
        ref=${s}
        class="cw-inline-edit-input"
        value=${o}
        onInput=${d=>{r(d.target.value),d.target.style.height="auto",d.target.style.height=d.target.scrollHeight+"px"}}
        onKeyDown=${d=>{d.key==="Enter"&&!d.shiftKey?(d.preventDefault(),o.trim()&&t(o.trim())):d.key==="Escape"&&n()}}
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
  `}function wt({msg:e,debugMode:t,markdownParser:n,onEdit:o,onRetry:r,isLoading:s,messageIndex:i}){let[c,d]=M(!1),[l,u]=M(!1),[a,_]=M(!1),p=e.role==="user",$=e.role==="system",C=e.type==="tool_call",g=e.type==="tool_result",y=e.type==="error",w=e.type==="sub_agent_start",I=e.type==="sub_agent_end",N=e.type==="agent_context";if($&&!t)return null;if(w||I||N)return m`
      <div class="cw-agent-context ${w?"cw-agent-delegating":""} ${I?"cw-agent-returned":""}" style="position: relative;">
        <span class="cw-agent-context-icon">${w?"\u{1F517}":I?"\u2713":"\u{1F916}"}</span>
        <span class="cw-agent-context-text">${e.content}</span>
        ${e.metadata?.agentName&&m`
          <span class="cw-agent-context-name">${e.metadata.agentName}</span>
        `}
        ${t&&m`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
      </div>
    `;if(C||g){let b=e.metadata?.arguments||e.metadata?.result,P=T=>{if(typeof T=="string")try{return JSON.stringify(JSON.parse(T),null,2)}catch{return T}return JSON.stringify(T,null,2)};return m`
      <div class="cw-tool-message ${g?"cw-tool-result":"cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${()=>b&&d(!c)}>
          ${e.content}
          ${b&&m`<span class="cw-tool-expand">${c?"\u25BC":"\u25B6"}</span>`}
        </span>
        ${c&&b&&m`
          <pre class="cw-tool-details">${B(P(C?e.metadata.arguments:e.metadata.result))}</pre>
        `}
        ${t&&m`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
      </div>
    `}let V=["cw-message",p&&"cw-message-user",y&&"cw-message-error"].filter(Boolean).join(" "),O=`cw-message-row ${p?"cw-message-row-user":""}`,j=e.role==="assistant"?mt(e.content,n):B(e.content),J=e.files&&e.files.length>0,K=()=>J?m`
      <div class="cw-message-attachments">
        ${e.files.map(b=>b.type&&b.type.startsWith("image/")?m`
              <a class="cw-attachment-thumbnail" href=${b.url} target="_blank" title=${b.name}>
                <img src=${b.url} alt=${b.name} />
              </a>
            `:m`
            <a class="cw-attachment-file" href=${b.url} target="_blank" title=${b.name}>
              <span class="cw-attachment-icon">${$e(b.type)}</span>
              <span class="cw-attachment-info">
                <span class="cw-attachment-name">${b.name}</span>
                <span class="cw-attachment-size">${we(b.size)}</span>
              </span>
            </a>
          `)}
      </div>
    `:null,k=b=>{_(!1),o&&b!==e.content&&o(i,b)},H=()=>{r&&r(i)};if(p&&a)return m`
      <div class=${O} style="position: relative;">
        ${K()}
        <${Xt}
          initialContent=${e.content}
          onSave=${k}
          onCancel=${()=>_(!1)}
        />
      </div>
    `;let v=p&&o&&r;return m`
    <div class="${O} ${v?"cw-message-row-with-actions":""}" style="position: relative;">
      ${K()}
      <div class=${V} dangerouslySetInnerHTML=${{__html:j}} />
      ${v&&m`
        <${Gt}
          onEdit=${()=>_(!0)}
          onRetry=${H}
          isLoading=${s}
        />
      `}
      ${t&&m`<${Ne} msg=${e} show=${l} onToggle=${()=>u(!l)} />`}
    </div>
  `}function $t({messages:e,isLoading:t,hasMoreMessages:n,loadingMoreMessages:o,onLoadMore:r,onEditMessage:s,onRetryMessage:i,debugMode:c,markdownParser:d,emptyStateTitle:l,emptyStateMessage:u}){let a=G(null),_=G(!0),p=C=>{let g=C.target,y=g.scrollHeight-g.scrollTop-g.clientHeight<100;if(_.current=y,g.scrollTop<50&&n&&!o){let w=g.scrollHeight;r().then(()=>{let I=g.scrollHeight;g.scrollTop=I-w+g.scrollTop})}};L(()=>{let C=a.current;C&&_.current&&requestAnimationFrame(()=>{C.scrollTop=C.scrollHeight})},[e,t]),L(()=>{let C=a.current;C&&e.length<=2&&(_.current=!0,requestAnimationFrame(()=>{C.scrollTop=C.scrollHeight}))},[e.length]);let $=e.length===0;return m`
    <div class="cw-messages" ref=${a} onScroll=${p}>
      ${$&&m`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${B(l)}</h3>
          <p>${B(u)}</p>
        </div>
      `}
      
      ${!$&&n&&m`
        <div class="cw-load-more" onClick=${r}>
          ${o?m`<span class="cw-spinner"></span><span>Loading...</span>`:m`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${e.map((C,g)=>m`
        <${wt}
          key=${C.id}
          msg=${C}
          messageIndex=${g}
          debugMode=${c}
          markdownParser=${d}
          onEdit=${s}
          onRetry=${i}
          isLoading=${t}
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
  `}var Oe=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;function bt({onSend:e,onCancel:t,isLoading:n,placeholder:o,primaryColor:r,enableVoice:s=!0,enableFiles:i=!0}){let[c,d]=M(""),[l,u]=M([]),[a,_]=M(!1),[p,$]=M(!1),[C]=M(()=>!!Oe),g=G(null),y=G(null),w=G(null),I=G(!1);L(()=>{!n&&g.current&&g.current.focus()},[n]),L(()=>{g.current&&(g.current.style.height="auto",g.current.style.height=Math.min(g.current.scrollHeight,150)+"px")},[c]),L(()=>()=>{I.current=!1,w.current&&w.current.abort()},[]);let N=f=>{f.preventDefault(),(c.trim()||l.length>0)&&!n&&(e(c,l),d(""),u([]),g.current&&(g.current.style.height="auto"),y.current&&(y.current.value=""))},V=f=>{let x=Array.from(f.target.files||[]);x.length>0&&u(S=>[...S,...x])},O=f=>{u(x=>x.filter((S,h)=>h!==f))},j=f=>{f.preventDefault(),y.current&&!n&&y.current.click()},J=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),N(f))},K=f=>{n&&t&&(f.preventDefault(),t())},k=()=>{if(!Oe||n)return;I.current=!0;let f=new Oe;f.continuous=!0,f.interimResults=!0,f.lang=navigator.language||"en-US";let x=c,S="";f.onstart=()=>{$(!0)},f.onresult=h=>{S="";for(let R=h.resultIndex;R<h.results.length;R++){let q=h.results[R][0].transcript;h.results[R].isFinal?x+=(x?" ":"")+q:S+=q}d(x+(S?" "+S:""))},f.onerror=h=>{if(h.error==="no-speech"||h.error==="aborted"){console.log("[ChatWidget] Speech recognition:",h.error,"- continuing...");return}console.warn("[ChatWidget] Speech recognition error:",h.error),I.current=!1,$(!1),d(x||c)},f.onend=()=>{if(I.current){console.log("[ChatWidget] Recognition paused, restarting...");try{f.start();return}catch(h){console.warn("[ChatWidget] Could not restart recognition:",h)}}$(!1),x&&d(x),w.current=null},w.current=f,f.start()},H=()=>{I.current=!1,w.current&&w.current.stop()},v=f=>{f.preventDefault(),p?H():k()},b=m`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `,P=m`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,T=m`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  `,F=s&&C,E=i;return m`
    <form class="cw-input-form" onSubmit=${N}>
      <input
        type="file"
        ref=${y}
        style="display: none"
        multiple
        onChange=${V}
      />
      ${l.length>0&&m`
        <div class="cw-file-chips">
          ${l.map((f,x)=>m`
            <div class="cw-file-chip" key=${x}>
              <span class="cw-file-chip-icon">${$e(f.type)}</span>
              <span class="cw-file-chip-name" title=${f.name}>${f.name.length>20?f.name.substring(0,17)+"...":f.name}</span>
              <span class="cw-file-chip-size">(${we(f.size)})</span>
              <button
                type="button"
                class="cw-file-chip-remove"
                onClick=${()=>O(x)}
                title="Remove file"
              >×</button>
            </div>
          `)}
        </div>
      `}
      <textarea
        ref=${g}
        class="cw-input"
        placeholder=${B(o)}
        value=${c}
        onInput=${f=>d(f.target.value)}
        onKeyDown=${J}
        disabled=${n}
        rows="1"
      />
      ${E&&m`
        <button
          type="button"
          class="cw-attach-btn"
          onClick=${j}
          disabled=${n}
          title="Attach files"
        >
          ${T}
        </button>
      `}
      ${F&&m`
        <button
          type="button"
          class=${`cw-voice-btn ${p?"cw-voice-btn-recording":""}`}
          onClick=${v}
          disabled=${n}
          title=${p?"Stop recording":"Voice input"}
        >
          ${P}
        </button>
      `}
      <button
        type=${n?"button":"submit"}
        class=${`cw-send-btn ${n?"cw-send-btn-loading":""} ${n&&a?"cw-send-btn-stop":""}`}
        style=${{backgroundColor:n&&a?"#dc2626":r}}
        onClick=${K}
        onMouseEnter=${()=>_(!0)}
        onMouseLeave=${()=>_(!1)}
        title=${n?"Stop":"Send"}
      >
        ${n?a?b:m`<span class="cw-spinner"></span>`:"\u27A4"}
      </button>
    </form>
  `}function kt({isOpen:e,conversations:t,conversationsLoading:n,currentConversationId:o,onClose:r,onNewConversation:s,onSwitchConversation:i}){return m`
    <div class="cw-sidebar ${e?"cw-sidebar-open":""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${r}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${s}>
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
            class="cw-conversation-item ${c.id===o?"cw-conversation-active":""}"
            onClick=${()=>i(c.id)}
          >
            <div class="cw-conversation-title">${B(c.title||"Untitled")}</div>
            <div class="cw-conversation-date">${ht(c.updatedAt||c.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${e?"cw-sidebar-overlay-visible":""}" 
      onClick=${r}
    />
  `}function Ct({availableModels:e,selectedModel:t,onSelectModel:n,disabled:o}){let[r,s]=M(!1);if(!e||e.length===0)return null;let c=e.find(u=>u.id===t)?.name||"Select Model",d=()=>{o||s(!r)},l=u=>{n(u),s(!1)};return m`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${d}
        disabled=${o}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${B(c)}</span>
        <span class="cw-model-chevron">${r?"\u25B2":"\u25BC"}</span>
      </button>
      
      ${r&&m`
        <div class="cw-model-dropdown">
          ${e.map(u=>m`
            <button 
              key=${u.id}
              class="cw-model-option ${u.id===t?"cw-model-option-selected":""}"
              onClick=${()=>l(u.id)}
            >
              <span class="cw-model-option-name">${B(u.name)}</span>
              <span class="cw-model-option-provider">${B(u.provider)}</span>
              ${u.description&&m`
                <span class="cw-model-option-desc">${B(u.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `}function St(e,t,n){let[o,r]=M([]),[s,i]=M(!1),[c,d]=M(null),[l,u]=M(()=>n?.get(e.conversationIdKey)||null),[a,_]=M(!1),[p,$]=M(!1),[C,g]=M(0),y=G(null),w=G(null);L(()=>{l&&n?.set(e.conversationIdKey,l)},[l,e.conversationIdKey,n]);let I=z(async(v,b,P)=>{y.current&&y.current.close();let T=e.apiPaths.runEvents.replace("{runId}",v),F=`${e.backendUrl}${T}`;b&&(F+=`?anonymous_token=${encodeURIComponent(b)}`);let E=new EventSource(F);y.current=E;let f="";E.addEventListener("assistant.message",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("assistant.message",h.payload);let R=h.payload.content;R&&(f+=R,r(q=>{let X=q[q.length-1];return X?.role==="assistant"&&X.id.startsWith("assistant-stream-")?[...q.slice(0,-1),{...X,content:f}]:[...q,{id:"assistant-stream-"+Date.now(),role:"assistant",content:f,timestamp:new Date,type:"message"}]}))}catch(h){console.error("[ChatWidget] Parse error:",h)}}),E.addEventListener("tool.call",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("tool.call",h.payload),r(R=>[...R,{id:"tool-call-"+Date.now(),role:"assistant",content:`\u{1F527} ${h.payload.name}`,timestamp:new Date,type:"tool_call",metadata:{toolName:h.payload.name,arguments:h.payload.arguments,toolCallId:h.payload.id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),E.addEventListener("tool.result",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("tool.result",h.payload);let R=h.payload.result,q=R?.error;r(X=>[...X,{id:"tool-result-"+Date.now(),role:"system",content:q?`\u274C ${R.error}`:"\u2713 Done",timestamp:new Date,type:"tool_result",metadata:{toolName:h.payload.name,result:R,toolCallId:h.payload.tool_call_id}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),E.addEventListener("custom",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("custom",h.payload),h.payload?.type==="ui_control"&&e.onUIControl&&e.onUIControl(h.payload),h.payload?.type==="agent_context"&&r(R=>[...R,{id:"agent-context-"+Date.now(),role:"system",content:`\u{1F517} ${h.payload.agent_name||"Sub-agent"} is now handling this request`,timestamp:new Date,type:"agent_context",metadata:{agentKey:h.payload.agent_key,agentName:h.payload.agent_name,action:h.payload.action}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),E.addEventListener("sub_agent.start",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("sub_agent.start",h.payload),r(R=>[...R,{id:"sub-agent-start-"+Date.now(),role:"system",content:`\u{1F517} Delegating to ${h.payload.agent_name||h.payload.sub_agent_key||"sub-agent"}...`,timestamp:new Date,type:"sub_agent_start",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name,invocationMode:h.payload.invocation_mode}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}}),E.addEventListener("sub_agent.end",S=>{try{let h=JSON.parse(S.data);e.onEvent&&e.onEvent("sub_agent.end",h.payload),r(R=>[...R,{id:"sub-agent-end-"+Date.now(),role:"system",content:`\u2713 ${h.payload.agent_name||"Sub-agent"} completed`,timestamp:new Date,type:"sub_agent_end",metadata:{subAgentKey:h.payload.sub_agent_key,agentName:h.payload.agent_name}}])}catch(h){console.error("[ChatWidget] Parse error:",h)}});let x=S=>{try{let h=JSON.parse(S.data);if(e.onEvent&&e.onEvent(h.type,h.payload),h.type==="run.failed"){let R=h.payload.error||"Agent run failed";d(R),r(q=>[...q,{id:"error-"+Date.now(),role:"system",content:`\u274C Error: ${R}`,timestamp:new Date,type:"error"}])}}catch(h){console.error("[ChatWidget] Parse error:",h)}i(!1),E.close(),y.current=null,f&&P&&P(f)};E.addEventListener("run.succeeded",x),E.addEventListener("run.failed",x),E.addEventListener("run.cancelled",x),E.addEventListener("run.timed_out",x),E.onerror=()=>{i(!1),E.close(),y.current=null}},[e]),N=z(async(v,b={},P={})=>{if(!v.trim()||s)return;let T=[],F={};typeof b=="function"?F={onAssistantMessage:b}:Array.isArray(b)?(T=b,F=P):F=b||{};let{model:E,onAssistantMessage:f}=F;i(!0),d(null);let x={id:ve(),role:"user",content:v.trim(),timestamp:new Date,type:"message",files:T.length>0?T.map(S=>({name:S.name,size:S.size,type:S.type})):void 0};r(S=>[...S,x]);try{let S=await t.getOrCreateSession(),h;if(T.length>0){let ee=e.apiCaseStyle!=="camel",We=ie=>ee?He(ie):ie,Z=new FormData;Z.append(We("agentKey"),e.agentKey),l&&Z.append(We("conversationId"),l),Z.append("messages",JSON.stringify([{role:"user",content:v.trim()}])),Z.append("metadata",JSON.stringify(ee?{...e.metadata,journey_type:e.defaultJourneyType}:{...e.metadata,journeyType:e.defaultJourneyType})),E&&Z.append("model",E),T.forEach(ie=>{Z.append("files",ie)}),h=t.getFetchOptions({method:"POST",body:Z},S)}else{let ee=t.transformRequest({agentKey:e.agentKey,conversationId:l,messages:[{role:"user",content:v.trim()}],metadata:{...e.metadata,journeyType:e.defaultJourneyType},...E&&{model:E}});h=t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)},S)}let R=await fetch(`${e.backendUrl}${e.apiPaths.runs}`,h);if(!R.ok){let ee=await R.json().catch(()=>({}));throw new Error(ee.error||`HTTP ${R.status}`)}let q=await R.json(),X=t.transformResponse(q);w.current=X.id,!l&&X.conversationId&&u(X.conversationId),await I(X.id,S,f)}catch(S){d(S.message||"Failed to send message"),i(!1)}finally{w.current=null}},[e,t,l,s,I]),V=z(async()=>{let v=w.current;if(!(!v||!s))try{let b=e.apiPaths.cancelRun?e.apiPaths.cancelRun.replace("{runId}",v):`${e.apiPaths.runs}${v}/cancel/`;(await fetch(`${e.backendUrl}${b}`,t.getFetchOptions({method:"POST",headers:{"Content-Type":"application/json"}}))).ok&&(y.current&&(y.current.close(),y.current=null),i(!1),w.current=null,r(T=>[...T,{id:"cancelled-"+Date.now(),role:"system",content:"\u23F9 Run cancelled",timestamp:new Date,type:"cancelled"}]))}catch(b){console.error("[ChatWidget] Failed to cancel run:",b)}},[e,t,s]),O=z(()=>{r([]),u(null),d(null),_(!1),g(0),n?.set(e.conversationIdKey,null)},[e.conversationIdKey,n]),j=v=>{let b={id:ve(),role:v.role,timestamp:v.timestamp?new Date(v.timestamp):new Date};if(v.role==="tool")return{...b,role:"system",content:"\u2713 Done",type:"tool_result",metadata:{result:v.content,toolCallId:v.toolCallId}};if(v.role==="assistant"&&v.toolCalls&&v.toolCalls.length>0)return v.toolCalls.map(T=>({id:ve(),role:"assistant",content:`\u{1F527} ${T.function?.name||T.name||"tool"}`,timestamp:b.timestamp,type:"tool_call",metadata:{toolName:T.function?.name||T.name,arguments:T.function?.arguments||T.arguments,toolCallId:T.id}}));let P=typeof v.content=="string"?v.content:JSON.stringify(v.content);return v.role==="assistant"&&!P?.trim()?null:{...b,content:P,type:"message"}},J=z(async v=>{i(!0),r([]),u(v);try{let b=await t.getOrCreateSession(),T=`${e.backendUrl}${e.apiPaths.conversations}${v}/?limit=10&offset=0`,F=await fetch(T,t.getFetchOptions({method:"GET"},b));if(F.ok){let E=await F.json(),f=t.transformResponse(E);f.messages&&r(f.messages.flatMap(j).filter(Boolean)),_(f.hasMore||!1),g(f.messages?.length||0)}else F.status===404&&(u(null),n?.set(e.conversationIdKey,null))}catch(b){console.error("[ChatWidget] Failed to load conversation:",b)}finally{i(!1)}},[e,t,n]),K=z(async()=>{if(!(!l||p||!a)){$(!0);try{let v=await t.getOrCreateSession(),P=`${e.backendUrl}${e.apiPaths.conversations}${l}/?limit=10&offset=${C}`,T=await fetch(P,t.getFetchOptions({method:"GET"},v));if(T.ok){let F=await T.json(),E=t.transformResponse(F);if(E.messages?.length>0){let f=E.messages.flatMap(j).filter(Boolean);r(x=>[...f,...x]),g(x=>x+E.messages.length),_(E.hasMore||!1)}else _(!1)}}catch(v){console.error("[ChatWidget] Failed to load more messages:",v)}finally{$(!1)}}},[e,t,l,C,p,a]),k=z(async(v,b,P={})=>{if(s)return;let T=o[v];if(!T||T.role!=="user")return;let F=o.slice(0,v);r(F),await N(b,P)},[o,s,N]),H=z(async(v,b={})=>{if(s)return;let P=o[v];if(!P||P.role!=="user")return;let T=o.slice(0,v);r(T),await N(P.content,b)},[o,s,N]);return L(()=>()=>{y.current&&y.current.close()},[]),{messages:o,isLoading:s,error:c,conversationId:l,hasMoreMessages:a,loadingMoreMessages:p,sendMessage:N,cancelRun:V,clearMessages:O,loadConversation:J,loadMoreMessages:K,setConversationId:u,editMessage:k,retryMessage:H}}function Mt(e,t,n){let[o,r]=M([]),[s,i]=M(null),[c,d]=M(null),[l,u]=M(!1);L(()=>{(async()=>{if(e.showModelSelector){u(!0);try{let $=await fetch(`${e.backendUrl}${e.apiPaths.models}`,t.getFetchOptions({method:"GET"}));if($.ok){let C=await $.json(),g=C.models||[];r(g),d(C.default);let y=n?.get(e.modelKey);y&&g.some(w=>w.id===y)?i(y):i(C.default)}}catch($){console.warn("[ChatWidget] Failed to load models:",$)}finally{u(!1)}}})()},[e.backendUrl,e.apiPaths.models,e.showModelSelector,e.modelKey,t,n]);let a=z(p=>{i(p),n?.set(e.modelKey,p)},[e.modelKey,n]),_=z(()=>o.find(p=>p.id===s)||null,[o,s]);return{availableModels:o,selectedModel:s,defaultModel:c,isLoading:l,selectModel:a,getSelectedModelInfo:_}}function Tt(e,t,n){let o=l=>!l||typeof l!="object"||e.apiCaseStyle==="camel"?l:ye(l),r=l=>!l||typeof l!="object"||e.apiCaseStyle==="snake"?l:ge(l),s=()=>e.authStrategy?e.authStrategy:e.authToken?"token":e.apiPaths.anonymousSession||e.anonymousSessionEndpoint?"anonymous":"none",i=(l=null)=>{let u=s(),a={},_=l||e.authToken||t().authToken;if(u==="token"&&_){let p=e.authHeader||"Authorization",$=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Token";a[p]=$?`${$} ${_}`:_}else if(u==="jwt"&&_){let p=e.authHeader||"Authorization",$=e.authTokenPrefix!==void 0?e.authTokenPrefix:"Bearer";a[p]=$?`${$} ${_}`:_}else if(u==="anonymous"&&_){let p=e.authHeader||e.anonymousTokenHeader||"X-Anonymous-Token";a[p]=_}if(u==="session"){let p=yt(e.csrfCookieName);p&&(a["X-CSRFToken"]=p)}return a};return{getAuthStrategy:s,getAuthHeaders:i,getFetchOptions:(l={},u=null)=>{let a=s(),_={...l};return _.headers={..._.headers,...i(u)},a==="session"&&(_.credentials="include"),_},getOrCreateSession:async()=>{let l=s(),u=t();if(l!=="anonymous")return e.authToken||u.authToken;if(u.authToken)return u.authToken;let a=e.anonymousTokenKey||e.sessionTokenKey,_=u.storage?.get(a);if(_)return n(p=>({...p,authToken:_})),_;try{let p=e.anonymousSessionEndpoint||e.apiPaths.anonymousSession,$=await fetch(`${e.backendUrl}${p}`,{method:"POST",headers:{"Content-Type":"application/json"}});if($.ok){let C=await $.json();return n(g=>({...g,authToken:C.token})),u.storage?.set(a,C.token),C.token}}catch(p){console.warn("[ChatWidget] Failed to create session:",p)}return null},transformRequest:o,transformResponse:r}}function xt({config:e,onStateChange:t,markdownParser:n,apiRef:o}){let[r,s]=M(e.embedded||e.forceOpen===!0),[i,c]=M(!1),[d,l]=M(!1),[u,a]=M(!1),[_,p]=M([]),[$,C]=M(!1),[g,y]=M(e.enableTTS),[w,I]=M(!1),[N,V]=M(null);L(()=>{e.forceOpen!==void 0&&s(e.forceOpen)},[e.forceOpen]);let O=ae(()=>gt(e.containerId),[e.containerId]),[j,J]=M(e.authToken||null),K=ae(()=>Tt(e,()=>({authToken:j,storage:O}),S=>{let h=S({authToken:j,storage:O});h.authToken!==j&&J(h.authToken)}),[e,j,O]),k=St(e,K,O),H=Mt(e,K,O);L(()=>{for(let f=k.messages.length-1;f>=0;f--){let x=k.messages[f];if(x.type==="sub_agent_start"){V({key:x.metadata?.subAgentKey,name:x.metadata?.agentName});return}if(x.type==="sub_agent_end"){V(null);return}}},[k.messages]),L(()=>{let f=O.get(e.conversationIdKey);f&&k.loadConversation(f)},[]),L(()=>{t&&t({isOpen:r,isExpanded:i,debugMode:d,messages:k.messages,conversationId:k.conversationId,isLoading:k.isLoading,error:k.error})},[r,i,d,k.messages,k.conversationId,k.isLoading,k.error]);let v=z(async()=>{if(e.showConversationSidebar){C(!0);try{let f=`${e.backendUrl}${e.apiPaths.conversations}?agent_key=${encodeURIComponent(e.agentKey)}`,x=await fetch(f,K.getFetchOptions({method:"GET"}));if(x.ok){let S=await x.json();p(S.results||S)}}catch(f){console.error("[ChatWidget] Failed to load conversations:",f),p([])}finally{C(!1)}}},[e,K]),b=z(()=>{let f=!u;a(f),f&&v()},[u,v]),P=z(f=>{f!==k.conversationId&&k.loadConversation(f),a(!1)},[k]),T=z(()=>{k.clearMessages(),a(!1)},[k]),F=z(f=>{k.sendMessage(f,{model:H.selectedModel,onAssistantMessage:x=>{}})},[k,g,H.selectedModel]);if(L(()=>{o&&(o.current={open:()=>s(!0),close:()=>s(!1),send:f=>F(f),clearMessages:()=>k.clearMessages(),toggleTTS:()=>y(f=>!f),stopSpeech:()=>I(!1),setAuth:f=>{f.token!==void 0&&J(f.token)},clearAuth:()=>J(null)})},[k,o,F]),!e.embedded&&!r)return m`
      <button 
        class="cw-fab" 
        style=${{backgroundColor:e.primaryColor}}
        onClick=${()=>s(!0)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;let E=["cw-widget",i&&"cw-widget-expanded",e.embedded&&"cw-widget-embedded"].filter(Boolean).join(" ");return m`
    <div class=${E} style=${{"--cw-primary":e.primaryColor}}>
      ${e.showConversationSidebar&&m`
        <${kt}
          isOpen=${u}
          conversations=${_}
          conversationsLoading=${$}
          currentConversationId=${k.conversationId}
          onClose=${()=>a(!1)}
          onNewConversation=${T}
          onSwitchConversation=${P}
        />
      `}
      
      <${vt}
        config=${e}
        debugMode=${d}
        isExpanded=${i}
        isSpeaking=${w}
        messagesCount=${k.messages.length}
        isLoading=${k.isLoading}
        currentAgent=${N}
        onClose=${()=>s(!1)}
        onToggleExpand=${()=>c(!i)}
        onToggleDebug=${()=>l(!d)}
        onToggleTTS=${()=>y(!g)}
        onClear=${k.clearMessages}
        onToggleSidebar=${b}
      />

      ${d&&m`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${$t}
        messages=${k.messages}
        isLoading=${k.isLoading}
        hasMoreMessages=${k.hasMoreMessages}
        loadingMoreMessages=${k.loadingMoreMessages}
        onLoadMore=${k.loadMoreMessages}
        onEditMessage=${k.editMessage}
        onRetryMessage=${k.retryMessage}
        debugMode=${d}
        markdownParser=${n}
        emptyStateTitle=${e.emptyStateTitle}
        emptyStateMessage=${e.emptyStateMessage}
      />

      ${k.error&&m`<div class="cw-error-bar">${k.error}</div>`}

      ${e.showModelSelector&&H.availableModels.length>0&&m`
        <${Ct}
          availableModels=${H.availableModels}
          selectedModel=${H.selectedModel}
          onSelectModel=${H.selectModel}
          disabled=${k.isLoading}
        />
      `}

      <${bt}
        onSend=${F}
        onCancel=${k.cancelRun}
        isLoading=${k.isLoading}
        placeholder=${e.placeholder}
        primaryColor=${e.primaryColor}
        enableVoice=${e.enableVoice}
      />
    </div>
  `}var Et={backendUrl:"http://localhost:8000",agentKey:"default-agent",title:"Chat Assistant",subtitle:"How can we help you today?",primaryColor:"#0066cc",position:"bottom-right",defaultJourneyType:"general",enableDebugMode:!0,enableAutoRun:!0,journeyTypes:{},customerPrompts:{},placeholder:"Type your message...",emptyStateTitle:"Start a Conversation",emptyStateMessage:"Send a message to get started.",authStrategy:null,authToken:null,authHeader:null,authTokenPrefix:null,anonymousSessionEndpoint:null,anonymousTokenKey:"chat_widget_anonymous_token",onAuthError:null,anonymousTokenHeader:"X-Anonymous-Token",conversationIdKey:"chat_widget_conversation_id",sessionTokenKey:"chat_widget_session_token",apiPaths:{anonymousSession:"/api/accounts/anonymous-session/",conversations:"/api/agent-runtime/conversations/",runs:"/api/agent-runtime/runs/",runEvents:"/api/agent-runtime/runs/{runId}/events/",simulateCustomer:"/api/agent-runtime/simulate-customer/",ttsVoices:"/api/tts/voices/",ttsSetVoice:"/api/tts/set-voice/",models:"/api/agent-runtime/models/"},apiCaseStyle:"auto",showConversationSidebar:!0,showClearButton:!0,showDebugButton:!0,showTTSButton:!0,showVoiceSettings:!0,showExpandButton:!0,showModelSelector:!1,enableVoice:!0,modelKey:"chat_widget_selected_model",autoRunDelay:1e3,autoRunMode:"automatic",enableTTS:!1,ttsProxyUrl:null,elevenLabsApiKey:null,ttsVoices:{assistant:null,user:null},ttsModel:"eleven_turbo_v2_5",ttsSettings:{stability:.5,similarity_boost:.75,style:0,use_speaker_boost:!0},availableVoices:[],onEvent:null,containerId:null,embedded:!1,metadata:{}};function It(e){let t={...Et.apiPaths,...e.apiPaths||{}};return{...Et,...e,apiPaths:t}}var be=new Map,Qt=0,A=null,Fe=class{constructor(t={}){this.instanceId=`cw-${++Qt}`,this.config=It(t),this.container=null,this._state={},this._apiRef={current:null},be.set(this.instanceId,this)}_handleStateChange=t=>{this._state=t};init(){if(this.config.containerId){if(this.container=document.getElementById(this.config.containerId),!this.container)return console.error(`[ChatWidget] Container not found: ${this.config.containerId}`),this;this.container.classList.add("cw-container-embedded")}else this.container=document.createElement("div"),this.container.id=this.instanceId,this.container.className=`cw-container cw-position-${this.config.position}`,document.body.appendChild(this.container);return this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} initialized`),this}_render(t={}){this.container&&he(m`<${xt}
        config=${{...this.config,...t}}
        onStateChange=${this._handleStateChange}
        markdownParser=${ke._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,this.container)}destroy(){this.container&&(he(null,this.container),this.config.containerId?this.container.classList.remove("cw-container-embedded"):this.container.remove(),this.container=null),be.delete(this.instanceId),console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`)}open(){this._apiRef.current?this._apiRef.current.open():this._render({forceOpen:!0})}close(){this._apiRef.current?this._apiRef.current.close():this._render({forceOpen:!1})}send(t){this._apiRef.current&&this._apiRef.current.send(t)}clearMessages(){this._apiRef.current&&this._apiRef.current.clearMessages()}toggleTTS(){this._apiRef.current&&this._apiRef.current.toggleTTS()}stopSpeech(){this._apiRef.current&&this._apiRef.current.stopSpeech()}setAuth(t){this._apiRef.current&&this._apiRef.current.setAuth(t)}clearAuth(){this._apiRef.current&&this._apiRef.current.clearAuth()}getState(){return{...this._state}}getConfig(){return{...this.config}}updateMetadata(t){this.config.metadata={...this.config.metadata,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} metadata updated:`,t)}updateConfig(t){this.config={...this.config,...t},this._render(),console.log(`[ChatWidget] Instance ${this.instanceId} config updated`)}};function Rt(e={}){return new Fe(e).init()}function Zt(e={}){return A&&A.destroy(),A=Rt(e),A}function Yt(){A&&(A.destroy(),A=null)}function en(){A&&A.open()}function tn(){A&&A.close()}function nn(e){A&&A.send(e)}function on(){A&&A.clearMessages()}function sn(){A&&A.toggleTTS()}function rn(){A&&A.stopSpeech()}function an(e){A&&A.setAuth(e)}function ln(){A&&A.clearAuth()}function cn(){return A?A.getState():null}function un(){return A?A.getConfig():null}var ke={createInstance:Rt,getInstance:e=>be.get(e),getAllInstances:()=>Array.from(be.values()),init:Zt,destroy:Yt,open:en,close:tn,send:nn,clearMessages:on,toggleTTS:sn,stopSpeech:rn,setAuth:an,clearAuth:ln,getState:cn,getConfig:un,_enhancedMarkdownParser:null};var dn=ke;typeof window<"u"&&(window.ChatWidget=ke);return Ot(_n);})();
