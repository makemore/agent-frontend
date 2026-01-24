var ChatWidgetModule = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    ChatWidget: () => ChatWidget2,
    default: () => src_default
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var d = Array.isArray;
  function w(n3, l3) {
    for (var u3 in l3)
      n3[u3] = l3[u3];
    return n3;
  }
  function g(n3) {
    n3 && n3.parentNode && n3.parentNode.removeChild(n3);
  }
  function _(l3, u3, t4) {
    var i3, o3, r3, e3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : e3[r3] = u3[r3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === e3[r3] && (e3[r3] = l3.defaultProps[r3]);
    return m(l3, e3, i3, o3, null);
  }
  function m(n3, t4, i3, o3, r3) {
    var e3 = { type: n3, props: t4, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n3) {
    return n3.children;
  }
  function x(n3, l3) {
    this.props = n3, this.context = l3;
  }
  function S(n3, l3) {
    if (null == l3)
      return n3.__ ? S(n3.__, n3.__i + 1) : null;
    for (var u3; l3 < n3.__k.length; l3++)
      if (null != (u3 = n3.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n3.type ? S(n3) : null;
  }
  function C(n3) {
    var l3, u3;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
        if (null != (u3 = n3.__k[l3]) && null != u3.__e) {
          n3.__e = n3.__c.base = u3.__e;
          break;
        }
      return C(n3);
    }
  }
  function M(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
  }
  function $() {
    for (var n3, u3, t4, o3, r3, f3, c3, s3 = 1; i.length; )
      i.length > s3 && i.sort(e), n3 = i.shift(), s3 = i.length, n3.__d && (t4 = void 0, o3 = void 0, r3 = (o3 = (u3 = n3).__v).__e, f3 = [], c3 = [], u3.__P && ((t4 = w({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(t4), O(u3.__P, t4, o3, u3.__n, u3.__P.namespaceURI, 32 & o3.__u ? [r3] : null, f3, null == r3 ? S(o3) : r3, !!(32 & o3.__u), c3), t4.__v = o3.__v, t4.__.__k[t4.__i] = t4, N(f3, t4, c3), o3.__e = o3.__ = null, t4.__e != r3 && C(t4)));
    $.__r = 0;
  }
  function I(n3, l3, u3, t4, i3, o3, r3, e3, f3, c3, s3) {
    var a3, h3, y3, d3, w3, g2, _2, m4 = t4 && t4.__k || v, b = l3.length;
    for (f3 = P(u3, l3, m4, f3, b), a3 = 0; a3 < b; a3++)
      null != (y3 = u3.__k[a3]) && (h3 = -1 == y3.__i ? p : m4[y3.__i] || p, y3.__i = a3, g2 = O(n3, y3, h3, i3, o3, r3, e3, f3, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && B(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), (_2 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f3 = A(y3, f3, n3, _2) : "function" == typeof y3.type && void 0 !== g2 ? f3 = g2 : d3 && (f3 = d3.nextSibling), y3.__u &= -7);
    return u3.__e = w3, f3;
  }
  function P(n3, l3, u3, t4, i3) {
    var o3, r3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
    for (n3.__k = new Array(i3), o3 = 0; o3 < i3; o3++)
      null != (r3 = l3[o3]) && "boolean" != typeof r3 && "function" != typeof r3 ? ("string" == typeof r3 || "number" == typeof r3 || "bigint" == typeof r3 || r3.constructor == String ? r3 = n3.__k[o3] = m(null, r3, null, null, null) : d(r3) ? r3 = n3.__k[o3] = m(k, { children: r3 }, null, null, null) : void 0 === r3.constructor && r3.__b > 0 ? r3 = n3.__k[o3] = m(r3.type, r3.props, r3.key, r3.ref ? r3.ref : null, r3.__v) : n3.__k[o3] = r3, f3 = o3 + h3, r3.__ = n3, r3.__b = n3.__b + 1, e3 = null, -1 != (c3 = r3.__i = L(r3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof r3.type && (r3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, r3.__u |= 4))) : n3.__k[o3] = null;
    if (a3)
      for (o3 = 0; o3 < s3; o3++)
        null != (e3 = u3[o3]) && 0 == (2 & e3.__u) && (e3.__e == t4 && (t4 = S(e3)), D(e3, e3));
    return t4;
  }
  function A(n3, l3, u3, t4) {
    var i3, o3;
    if ("function" == typeof n3.type) {
      for (i3 = n3.__k, o3 = 0; i3 && o3 < i3.length; o3++)
        i3[o3] && (i3[o3].__ = n3, l3 = A(i3[o3], l3, u3, t4));
      return l3;
    }
    n3.__e != l3 && (t4 && (l3 && n3.type && !l3.parentNode && (l3 = S(n3)), u3.insertBefore(n3.__e, l3 || null)), l3 = n3.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function L(n3, l3, u3, t4) {
    var i3, o3, r3, e3 = n3.key, f3 = n3.type, c3 = l3[u3], s3 = null != c3 && 0 == (2 & c3.__u);
    if (null === c3 && null == e3 || s3 && e3 == c3.key && f3 == c3.type)
      return u3;
    if (t4 > (s3 ? 1 : 0)) {
      for (i3 = u3 - 1, o3 = u3 + 1; i3 >= 0 || o3 < l3.length; )
        if (null != (c3 = l3[r3 = i3 >= 0 ? i3-- : o3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f3 == c3.type)
          return r3;
    }
    return -1;
  }
  function T(n3, l3, u3) {
    "-" == l3[0] ? n3.setProperty(l3, null == u3 ? "" : u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
  }
  function j(n3, l3, u3, t4, i3) {
    var o3, r3;
    n:
      if ("style" == l3)
        if ("string" == typeof u3)
          n3.style.cssText = u3;
        else {
          if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4)
            for (l3 in t4)
              u3 && l3 in u3 || T(n3.style, l3, "");
          if (u3)
            for (l3 in u3)
              t4 && u3[l3] == t4[l3] || T(n3.style, l3, u3[l3]);
        }
      else if ("o" == l3[0] && "n" == l3[1])
        o3 = l3 != (l3 = l3.replace(f, "$1")), r3 = l3.toLowerCase(), l3 = r3 in n3 || "onFocusOut" == l3 || "onFocusIn" == l3 ? r3.slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, u3 ? t4 ? u3.u = t4.u : (u3.u = c, n3.addEventListener(l3, o3 ? a : s, o3)) : n3.removeEventListener(l3, o3 ? a : s, o3);
      else {
        if ("http://www.w3.org/2000/svg" == i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n3)
          try {
            n3[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n4) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n3.removeAttribute(l3) : n3.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
      }
  }
  function F(n3) {
    return function(u3) {
      if (this.l) {
        var t4 = this.l[u3.type + n3];
        if (null == u3.t)
          u3.t = c++;
        else if (u3.t < t4.u)
          return;
        return t4(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n3, u3, t4, i3, o3, r3, e3, f3, c3, s3) {
    var a3, h3, p3, v3, y3, _2, m4, b, S2, C3, M2, $2, P2, A3, H, L2, T3, j3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t4.__u && (c3 = !!(32 & t4.__u), r3 = [f3 = u3.__e = t4.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof j3)
        try {
          if (b = u3.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a3 = j3.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t4.__c ? m4 = (h3 = u3.__c = t4.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j3(b, M2) : (u3.__c = h3 = new x(b, M2), h3.constructor = j3, h3.render = E), C3 && C3.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, j3.getDerivedStateFromProps(b, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u3, p3)
            S2 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (S2 && null == j3.getDerivedStateFromProps && b !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), u3.__v == t4.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2)) {
              for (u3.__v != t4.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), u3.__e = t4.__e, u3.__k = t4.__k, u3.__k.some(function(n4) {
                n4 && (n4.__ = u3);
              }), $2 = 0; $2 < h3._sb.length; $2++)
                h3.__h.push(h3._sb[$2]);
              h3._sb = [], h3.__h.length && e3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(v3, y3, _2);
            });
          }
          if (h3.context = M2, h3.props = b, h3.__P = n3, h3.__e = false, P2 = l.__r, A3 = 0, S2) {
            for (h3.state = h3.__s, h3.__d = false, P2 && P2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++)
              h3.__h.push(h3._sb[H]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, P2 && P2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++A3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, y3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = V(a3.props.children)), f3 = I(n3, d(L2) ? L2 : [L2], u3, t4, i3, o3, r3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), m4 && (h3.__E = h3.__ = null);
        } catch (n4) {
          if (u3.__v = null, c3 || null != r3)
            if (n4.then) {
              for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; )
                f3 = f3.nextSibling;
              r3[r3.indexOf(f3)] = null, u3.__e = f3;
            } else {
              for (T3 = r3.length; T3--; )
                g(r3[T3]);
              z(u3);
            }
          else
            u3.__e = t4.__e, u3.__k = t4.__k, n4.then || z(u3);
          l.__e(n4, u3, t4);
        }
      else
        null == r3 && u3.__v == t4.__v ? (u3.__k = t4.__k, u3.__e = t4.__e) : f3 = u3.__e = q(t4.__e, u3, t4, i3, o3, r3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
  }
  function z(n3) {
    n3 && n3.__c && (n3.__c.__e = true), n3 && n3.__k && n3.__k.forEach(z);
  }
  function N(n3, u3, t4) {
    for (var i3 = 0; i3 < t4.length; i3++)
      B(t4[i3], t4[++i3], t4[++i3]);
    l.__c && l.__c(u3, n3), n3.some(function(u4) {
      try {
        n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
          n4.call(u4);
        });
      } catch (n4) {
        l.__e(n4, u4.__v);
      }
    });
  }
  function V(n3) {
    return "object" != typeof n3 || null == n3 || n3.__b && n3.__b > 0 ? n3 : d(n3) ? n3.map(V) : w({}, n3);
  }
  function q(u3, t4, i3, o3, r3, e3, f3, c3, s3) {
    var a3, h3, v3, y3, w3, _2, m4, b = i3.props || p, k3 = t4.props, x2 = t4.type;
    if ("svg" == x2 ? r3 = "http://www.w3.org/2000/svg" : "math" == x2 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++)
        if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
          u3 = w3, e3[a3] = null;
          break;
        }
    }
    if (null == u3) {
      if (null == x2)
        return document.createTextNode(k3);
      u3 = document.createElementNS(r3, x2, k3.is && k3), c3 && (l.__m && l.__m(t4, e3), c3 = false), e3 = null;
    }
    if (null == x2)
      b === k3 || c3 && u3.data == k3 || (u3.data = k3);
    else {
      if (e3 = e3 && n.call(u3.childNodes), !c3 && null != e3)
        for (b = {}, a3 = 0; a3 < u3.attributes.length; a3++)
          b[(w3 = u3.attributes[a3]).name] = w3.value;
      for (a3 in b)
        if (w3 = b[a3], "children" == a3)
          ;
        else if ("dangerouslySetInnerHTML" == a3)
          v3 = w3;
        else if (!(a3 in k3)) {
          if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3)
            continue;
          j(u3, a3, null, w3, r3);
        }
      for (a3 in k3)
        w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _2 = w3 : "checked" == a3 ? m4 = w3 : c3 && "function" != typeof w3 || b[a3] === w3 || j(u3, a3, w3, b[a3], r3);
      if (h3)
        c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t4.__k = [];
      else if (v3 && (u3.innerHTML = ""), I("template" == t4.type ? u3.content : u3, d(y3) ? y3 : [y3], t4, i3, o3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : r3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3)
        for (a3 = e3.length; a3--; )
          g(e3[a3]);
      c3 || (a3 = "value", "progress" == x2 && null == _2 ? u3.removeAttribute("value") : null != _2 && (_2 !== u3[a3] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a3]) && j(u3, a3, _2, b[a3], r3), a3 = "checked", null != m4 && m4 != u3[a3] && j(u3, a3, m4, b[a3], r3));
    }
    return u3;
  }
  function B(n3, u3, t4) {
    try {
      if ("function" == typeof n3) {
        var i3 = "function" == typeof n3.__u;
        i3 && n3.__u(), i3 && null == u3 || (n3.__u = n3(u3));
      } else
        n3.current = u3;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function D(n3, u3, t4) {
    var i3, o3;
    if (l.unmount && l.unmount(n3), (i3 = n3.ref) && (i3.current && i3.current != n3.__e || B(i3, null, u3)), null != (i3 = n3.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u3);
        }
      i3.base = i3.__P = null;
    }
    if (i3 = n3.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && D(i3[o3], u3, t4 || "function" != typeof n3.type);
    t4 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
  }
  function E(n3, l3, u3) {
    return this.constructor(n3, u3);
  }
  function G(u3, t4, i3) {
    var o3, r3, e3, f3;
    t4 == document && (t4 = document.documentElement), l.__ && l.__(u3, t4), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t4.__k, e3 = [], f3 = [], O(t4, u3 = (!o3 && i3 || t4).__k = _(k, null, [u3]), r3 || p, p, t4.namespaceURI, !o3 && i3 ? [i3] : r3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e3, !o3 && i3 ? i3 : r3 ? r3.__e : t4.firstChild, o3, f3), N(e3, u3, f3);
  }
  n = v.slice, l = { __e: function(n3, l3, u3, t4) {
    for (var i3, o3, r3; l3 = l3.__; )
      if ((i3 = l3.__c) && !i3.__)
        try {
          if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n3)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n3, t4 || {}), r3 = i3.__d), r3)
            return i3.__E = i3;
        } catch (l4) {
          n3 = l4;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, x.prototype.setState = function(n3, l3) {
    var u3;
    u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n3 && (n3 = n3(w({}, u3), this.props)), n3 && w(u3, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), M(this));
  }, x.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
  }, x.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l3) {
    return n3.__v.__b - l3.__v.__b;
  }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

  // node_modules/htm/dist/htm.module.js
  var n2 = function(t4, s3, r3, e3) {
    var u3;
    s3[0] = 0;
    for (var h3 = 1; h3 < s3.length; h3++) {
      var p3 = s3[h3++], a3 = s3[h3] ? (s3[0] |= p3 ? 1 : 2, r3[s3[h3++]]) : s3[++h3];
      3 === p3 ? e3[0] = a3 : 4 === p3 ? e3[1] = Object.assign(e3[1] || {}, a3) : 5 === p3 ? (e3[1] = e3[1] || {})[s3[++h3]] = a3 : 6 === p3 ? e3[1][s3[++h3]] += a3 + "" : p3 ? (u3 = t4.apply(a3, n2(t4, a3, r3, ["", null])), e3.push(u3), a3[0] ? s3[0] |= 2 : (s3[h3 - 2] = 0, s3[h3] = u3)) : e3.push(a3);
    }
    return e3;
  };
  var t2 = /* @__PURE__ */ new Map();
  function htm_module_default(s3) {
    var r3 = t2.get(this);
    return r3 || (r3 = /* @__PURE__ */ new Map(), t2.set(this, r3)), (r3 = n2(this, r3.get(s3) || (r3.set(s3, r3 = function(n3) {
      for (var t4, s4, r4 = 1, e3 = "", u3 = "", h3 = [0], p3 = function(n4) {
        1 === r4 && (n4 || (e3 = e3.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e3) : 3 === r4 && (n4 || e3) ? (h3.push(3, n4, e3), r4 = 2) : 2 === r4 && "..." === e3 && n4 ? h3.push(4, n4, 0) : 2 === r4 && e3 && !n4 ? h3.push(5, 0, true, e3) : r4 >= 5 && ((e3 || !n4 && 5 === r4) && (h3.push(r4, 0, e3, s4), r4 = 6), n4 && (h3.push(r4, n4, 0, s4), r4 = 6)), e3 = "";
      }, a3 = 0; a3 < n3.length; a3++) {
        a3 && (1 === r4 && p3(), p3(a3));
        for (var l3 = 0; l3 < n3[a3].length; l3++)
          t4 = n3[a3][l3], 1 === r4 ? "<" === t4 ? (p3(), h3 = [h3], r4 = 3) : e3 += t4 : 4 === r4 ? "--" === e3 && ">" === t4 ? (r4 = 1, e3 = "") : e3 = t4 + e3[0] : u3 ? t4 === u3 ? u3 = "" : e3 += t4 : '"' === t4 || "'" === t4 ? u3 = t4 : ">" === t4 ? (p3(), r4 = 1) : r4 && ("=" === t4 ? (r4 = 5, s4 = e3, e3 = "") : "/" === t4 && (r4 < 5 || ">" === n3[a3][l3 + 1]) ? (p3(), 3 === r4 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : " " === t4 || "	" === t4 || "\n" === t4 || "\r" === t4 ? (p3(), r4 = 2) : e3 += t4), 3 === r4 && "!--" === e3 && (r4 = 4, h3 = h3[0]);
      }
      return p3(), h3;
    }(s3)), r3), arguments, [])).length > 1 ? r3 : r3[0];
  }

  // node_modules/htm/preact/index.module.js
  var m2 = htm_module_default.bind(_);

  // node_modules/preact/hooks/dist/hooks.module.js
  var t3;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m3 = c2.unmount;
  var s2 = c2.__;
  function p2(n3, t4) {
    c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u3.__.length && u3.__.push({}), u3.__[n3];
  }
  function d2(n3) {
    return o2 = 1, h2(D2, n3);
  }
  function h2(n3, u3, i3) {
    var o3 = p2(t3++, 2);
    if (o3.t = n3, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n4) {
      var t4 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t4, n4);
      t4 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f3 = function(n4, t4, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n5) {
          return !!n5.__c;
        });
        if (u4.every(function(n5) {
          return !n5.__N;
        }))
          return !c3 || c3.call(this, n4, t4, r3);
        var i4 = o3.__c.props !== n4;
        return u4.forEach(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n4, t4, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t4, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n4, t4, r3), c3 = u4;
        }
        e3 && e3.call(this, n4, t4, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function y2(n3, u3) {
    var i3 = p2(t3++, 3);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n3, i3.u = u3, r2.__H.__h.push(i3));
  }
  function A2(n3) {
    return o2 = 5, T2(function() {
      return { current: n3 };
    }, []);
  }
  function T2(n3, r3) {
    var u3 = p2(t3++, 7);
    return C2(u3.__H, r3) && (u3.__ = n3(), u3.__H = r3, u3.__h = n3), u3.__;
  }
  function q2(n3, t4) {
    return o2 = 8, T2(function() {
      return n3;
    }, t4);
  }
  function j2() {
    for (var n3; n3 = f2.shift(); )
      if (n3.__P && n3.__H)
        try {
          n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
        } catch (t4) {
          n3.__H.__h = [], c2.__e(t4, n3.__v);
        }
  }
  c2.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, c2.__ = function(n3, t4) {
    n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
  }, c2.__r = function(n3) {
    a2 && a2(n3), t3 = 0;
    var i3 = (r2 = n3.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
    })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t3 = 0)), u2 = r2;
  }, c2.diffed = function(n3) {
    v2 && v2(n3);
    var t4 = n3.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
      n4.u && (n4.__H = n4.u), n4.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n3, t4) {
    t4.some(function(n4) {
      try {
        n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
          return !n5.__ || B2(n5);
        });
      } catch (r3) {
        t4.some(function(n5) {
          n5.__h && (n5.__h = []);
        }), t4 = [], c2.__e(r3, n4.__v);
      }
    }), l2 && l2(n3, t4);
  }, c2.unmount = function(n3) {
    m3 && m3(n3);
    var t4, r3 = n3.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n4) {
      try {
        z2(n4);
      } catch (n5) {
        t4 = n5;
      }
    }), r3.__H = void 0, t4 && c2.__e(t4, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n3) {
    var t4, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u3 = setTimeout(r3, 35);
    k2 && (t4 = requestAnimationFrame(r3));
  }
  function z2(n3) {
    var t4 = r2, u3 = n3.__c;
    "function" == typeof u3 && (n3.__c = void 0, u3()), r2 = t4;
  }
  function B2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function C2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r3) {
      return t5 !== n3[r3];
    });
  }
  function D2(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }

  // src/utils/helpers.js
  function generateId() {
    return "msg-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
  }
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  function formatDate(dateStr) {
    if (!dateStr)
      return "";
    try {
      const date = new Date(dateStr);
      const now = /* @__PURE__ */ new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 6e4);
      const diffHours = Math.floor(diffMs / 36e5);
      const diffDays = Math.floor(diffMs / 864e5);
      if (diffMins < 1)
        return "Just now";
      if (diffMins < 60)
        return `${diffMins}m ago`;
      if (diffHours < 24)
        return `${diffHours}h ago`;
      if (diffDays < 7)
        return `${diffDays}d ago`;
      return date.toLocaleDateString();
    } catch (e3) {
      return "";
    }
  }
  function parseMarkdown(text, enhancedParser = null) {
    if (enhancedParser) {
      return enhancedParser(text);
    }
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.+?)_/g, "<em>$1</em>");
    html = html.replace(/`(.+?)`/g, "<code>$1</code>");
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/\n/g, "<br>");
    return html;
  }
  function createStorage(prefix = "") {
    const storageKey = (key) => prefix ? `${key}_${prefix}` : key;
    return {
      get(key) {
        try {
          return localStorage.getItem(storageKey(key));
        } catch (e3) {
          return null;
        }
      },
      set(key, value) {
        try {
          const k3 = storageKey(key);
          value === null ? localStorage.removeItem(k3) : localStorage.setItem(k3, value);
        } catch (e3) {
        }
      }
    };
  }
  function getCSRFToken(cookieName = "csrftoken") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    if (metaTag) {
      return metaTag.getAttribute("content");
    }
    return null;
  }

  // src/components/Header.js
  function Header({
    config,
    debugMode,
    isExpanded,
    isSpeaking,
    messagesCount,
    isLoading,
    currentAgent,
    onClose,
    onToggleExpand,
    onToggleDebug,
    onToggleTTS,
    onClear,
    onToggleSidebar
  }) {
    const {
      title,
      primaryColor,
      embedded,
      showConversationSidebar,
      showClearButton,
      showDebugButton,
      enableDebugMode,
      showTTSButton,
      showExpandButton,
      enableTTS,
      elevenLabsApiKey,
      ttsProxyUrl
    } = config;
    const hasTTS = elevenLabsApiKey || ttsProxyUrl;
    return m2`
    <div class="cw-header" style=${{ backgroundColor: primaryColor }}>
      ${showConversationSidebar && m2`
        <button
          class="cw-header-btn cw-hamburger"
          onClick=${onToggleSidebar}
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
        <span class="cw-title">${escapeHtml(title)}</span>
        ${currentAgent && m2`
          <span class="cw-current-agent" title="Currently active agent">
            <span class="cw-agent-indicator">🤖</span>
            <span class="cw-agent-name">${escapeHtml(currentAgent.name || currentAgent.key)}</span>
          </span>
        `}
      </div>
      
      <div class="cw-header-actions">
        ${showClearButton && m2`
          <button 
            class="cw-header-btn" 
            onClick=${onClear}
            title="Clear"
            disabled=${isLoading || messagesCount === 0}
          >🗑️</button>
        `}
        
        ${showDebugButton && enableDebugMode && m2`
          <button 
            class="cw-header-btn ${debugMode ? "cw-btn-active" : ""}" 
            onClick=${onToggleDebug}
            title="Debug"
          >🐛</button>
        `}
        
        ${showTTSButton && hasTTS && m2`
          <button 
            class="cw-header-btn ${enableTTS ? "cw-btn-active" : ""}" 
            onClick=${onToggleTTS}
            title="TTS"
          >${enableTTS ? "\u{1F50A}" : "\u{1F507}"}</button>
        `}
        
        ${showExpandButton && !embedded && m2`
          <button 
            class="cw-header-btn" 
            onClick=${onToggleExpand}
            title=${isExpanded ? "Minimize" : "Expand"}
          >${isExpanded ? "\u2296" : "\u2295"}</button>
        `}
        
        ${!embedded && m2`
          <button 
            class="cw-header-btn" 
            onClick=${onClose}
            title="Close"
          >✕</button>
        `}
      </div>
    </div>
  `;
  }

  // src/components/Message.js
  function DebugPayload({ msg, show, onToggle }) {
    if (!show) {
      return m2`
      <button
        class="cw-debug-payload-btn"
        onClick=${onToggle}
        title="Show message payload"
      >{ }</button>
    `;
    }
    return m2`
    <div class="cw-debug-payload">
      <button class="cw-debug-payload-close" onClick=${onToggle}>×</button>
      <pre class="cw-debug-payload-content">${JSON.stringify(msg, null, 2)}</pre>
    </div>
  `;
  }
  function Message({ msg, debugMode, markdownParser }) {
    const [expanded, setExpanded] = d2(false);
    const [showPayload, setShowPayload] = d2(false);
    const isUser = msg.role === "user";
    const isSystem = msg.role === "system";
    const isToolCall = msg.type === "tool_call";
    const isToolResult = msg.type === "tool_result";
    const isError = msg.type === "error";
    const isSubAgentStart = msg.type === "sub_agent_start";
    const isSubAgentEnd = msg.type === "sub_agent_end";
    const isAgentContext = msg.type === "agent_context";
    if (isSystem && !debugMode) {
      return null;
    }
    if (isSubAgentStart || isSubAgentEnd || isAgentContext) {
      return m2`
      <div class="cw-agent-context ${isSubAgentStart ? "cw-agent-delegating" : ""} ${isSubAgentEnd ? "cw-agent-returned" : ""}" style="position: relative;">
        <span class="cw-agent-context-icon">${isSubAgentStart ? "\u{1F517}" : isSubAgentEnd ? "\u2713" : "\u{1F916}"}</span>
        <span class="cw-agent-context-text">${msg.content}</span>
        ${msg.metadata?.agentName && m2`
          <span class="cw-agent-context-name">${msg.metadata.agentName}</span>
        `}
        ${debugMode && m2`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
      </div>
    `;
    }
    if (isToolCall || isToolResult) {
      const hasDetails = msg.metadata?.arguments || msg.metadata?.result;
      const formatDetails = (data) => {
        if (typeof data === "string") {
          try {
            return JSON.stringify(JSON.parse(data), null, 2);
          } catch {
            return data;
          }
        }
        return JSON.stringify(data, null, 2);
      };
      return m2`
      <div class="cw-tool-message ${isToolResult ? "cw-tool-result" : "cw-tool-call"}" style="position: relative;">
        <span class="cw-tool-label" onClick=${() => hasDetails && setExpanded(!expanded)}>
          ${msg.content}
          ${hasDetails && m2`<span class="cw-tool-expand">${expanded ? "\u25BC" : "\u25B6"}</span>`}
        </span>
        ${expanded && hasDetails && m2`
          <pre class="cw-tool-details">${escapeHtml(formatDetails(
        isToolCall ? msg.metadata.arguments : msg.metadata.result
      ))}</pre>
        `}
        ${debugMode && m2`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
      </div>
    `;
    }
    const classes = [
      "cw-message",
      isUser && "cw-message-user",
      isError && "cw-message-error"
    ].filter(Boolean).join(" ");
    const rowClasses = `cw-message-row ${isUser ? "cw-message-row-user" : ""}`;
    let content = msg.role === "assistant" ? parseMarkdown(msg.content, markdownParser) : escapeHtml(msg.content);
    return m2`
    <div class=${rowClasses} style="position: relative;">
      <div class=${classes} dangerouslySetInnerHTML=${{ __html: content }} />
      ${debugMode && m2`<${DebugPayload} msg=${msg} show=${showPayload} onToggle=${() => setShowPayload(!showPayload)} />`}
    </div>
  `;
  }

  // src/components/MessageList.js
  function MessageList({
    messages,
    isLoading,
    hasMoreMessages,
    loadingMoreMessages,
    onLoadMore,
    debugMode,
    markdownParser,
    emptyStateTitle,
    emptyStateMessage
  }) {
    const containerRef = A2(null);
    const shouldAutoScrollRef = A2(true);
    const handleScroll = (e3) => {
      const el = e3.target;
      const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
      shouldAutoScrollRef.current = isNearBottom;
      if (el.scrollTop < 50 && hasMoreMessages && !loadingMoreMessages) {
        const prevScrollHeight = el.scrollHeight;
        onLoadMore().then(() => {
          const newScrollHeight = el.scrollHeight;
          el.scrollTop = newScrollHeight - prevScrollHeight + el.scrollTop;
        });
      }
    };
    y2(() => {
      const el = containerRef.current;
      if (el && shouldAutoScrollRef.current) {
        requestAnimationFrame(() => {
          el.scrollTop = el.scrollHeight;
        });
      }
    }, [messages, isLoading]);
    y2(() => {
      const el = containerRef.current;
      if (el && messages.length <= 2) {
        shouldAutoScrollRef.current = true;
        requestAnimationFrame(() => {
          el.scrollTop = el.scrollHeight;
        });
      }
    }, [messages.length]);
    const isEmpty = messages.length === 0;
    return m2`
    <div class="cw-messages" ref=${containerRef} onScroll=${handleScroll}>
      ${isEmpty && m2`
        <div class="cw-empty-state">
          <svg class="cw-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>${escapeHtml(emptyStateTitle)}</h3>
          <p>${escapeHtml(emptyStateMessage)}</p>
        </div>
      `}
      
      ${!isEmpty && hasMoreMessages && m2`
        <div class="cw-load-more" onClick=${onLoadMore}>
          ${loadingMoreMessages ? m2`<span class="cw-spinner"></span><span>Loading...</span>` : m2`<span>↑ Scroll up or click to load older messages</span>`}
        </div>
      `}
      
      ${messages.map((msg) => m2`
        <${Message} 
          key=${msg.id} 
          msg=${msg} 
          debugMode=${debugMode}
          markdownParser=${markdownParser}
        />
      `)}
      
      ${isLoading && m2`
        <div class="cw-message-row">
          <div class="cw-typing">
            <span class="cw-spinner"></span>
            <span>Thinking...</span>
          </div>
        </div>
      `}
    </div>
  `;
  }

  // src/components/InputForm.js
  function InputForm({ onSend, onCancel, isLoading, placeholder, primaryColor }) {
    const [value, setValue] = d2("");
    const [isHovering, setIsHovering] = d2(false);
    const textareaRef = A2(null);
    y2(() => {
      if (!isLoading && textareaRef.current) {
        textareaRef.current.focus();
      }
    }, [isLoading]);
    y2(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + "px";
      }
    }, [value]);
    const handleSubmit = (e3) => {
      e3.preventDefault();
      if (value.trim() && !isLoading) {
        onSend(value);
        setValue("");
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }
    };
    const handleKeyDown = (e3) => {
      if (e3.key === "Enter" && !e3.shiftKey) {
        e3.preventDefault();
        handleSubmit(e3);
      }
    };
    const handleButtonClick = (e3) => {
      if (isLoading && onCancel) {
        e3.preventDefault();
        onCancel();
      }
    };
    const stopIcon = m2`
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="2" width="10" height="10" rx="1" />
    </svg>
  `;
    return m2`
    <form class="cw-input-form" onSubmit=${handleSubmit}>
      <textarea
        ref=${textareaRef}
        class="cw-input"
        placeholder=${escapeHtml(placeholder)}
        value=${value}
        onInput=${(e3) => setValue(e3.target.value)}
        onKeyDown=${handleKeyDown}
        disabled=${isLoading}
        rows="1"
      />
      <button
        type=${isLoading ? "button" : "submit"}
        class=${`cw-send-btn ${isLoading ? "cw-send-btn-loading" : ""} ${isLoading && isHovering ? "cw-send-btn-stop" : ""}`}
        style=${{ backgroundColor: isLoading && isHovering ? "#dc2626" : primaryColor }}
        onClick=${handleButtonClick}
        onMouseEnter=${() => setIsHovering(true)}
        onMouseLeave=${() => setIsHovering(false)}
        title=${isLoading ? "Stop" : "Send"}
      >
        ${isLoading ? isHovering ? stopIcon : m2`<span class="cw-spinner"></span>` : "\u27A4"}
      </button>
    </form>
  `;
  }

  // src/components/Sidebar.js
  function Sidebar({
    isOpen,
    conversations,
    conversationsLoading,
    currentConversationId,
    onClose,
    onNewConversation,
    onSwitchConversation
  }) {
    return m2`
    <div class="cw-sidebar ${isOpen ? "cw-sidebar-open" : ""}">
      <div class="cw-sidebar-header">
        <span>Conversations</span>
        <button class="cw-sidebar-close" onClick=${onClose}>✕</button>
      </div>
      
      <button class="cw-new-conversation" onClick=${onNewConversation}>
        <span>+ New Conversation</span>
      </button>
      
      <div class="cw-conversation-list">
        ${conversationsLoading && m2`
          <div class="cw-sidebar-loading">
            <span class="cw-spinner"></span>
          </div>
        `}
        
        ${!conversationsLoading && conversations.length === 0 && m2`
          <div class="cw-sidebar-empty">No conversations yet</div>
        `}
        
        ${conversations.map((conv) => m2`
          <div 
            key=${conv.id}
            class="cw-conversation-item ${conv.id === currentConversationId ? "cw-conversation-active" : ""}"
            onClick=${() => onSwitchConversation(conv.id)}
          >
            <div class="cw-conversation-title">${escapeHtml(conv.title || "Untitled")}</div>
            <div class="cw-conversation-date">${formatDate(conv.updatedAt || conv.createdAt)}</div>
          </div>
        `)}
      </div>
    </div>
    
    <div 
      class="cw-sidebar-overlay ${isOpen ? "cw-sidebar-overlay-visible" : ""}" 
      onClick=${onClose}
    />
  `;
  }

  // src/components/ModelSelector.js
  function ModelSelector({
    availableModels,
    selectedModel,
    onSelectModel,
    disabled
  }) {
    const [isOpen, setIsOpen] = d2(false);
    if (!availableModels || availableModels.length === 0) {
      return null;
    }
    const selectedModelInfo = availableModels.find((m4) => m4.id === selectedModel);
    const displayName = selectedModelInfo?.name || "Select Model";
    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };
    const handleSelect = (modelId) => {
      onSelectModel(modelId);
      setIsOpen(false);
    };
    return m2`
    <div class="cw-model-selector">
      <button 
        class="cw-model-btn" 
        onClick=${handleToggle}
        disabled=${disabled}
        title="Select Model"
      >
        <span class="cw-model-icon">🤖</span>
        <span class="cw-model-name">${escapeHtml(displayName)}</span>
        <span class="cw-model-chevron">${isOpen ? "\u25B2" : "\u25BC"}</span>
      </button>
      
      ${isOpen && m2`
        <div class="cw-model-dropdown">
          ${availableModels.map((model) => m2`
            <button 
              key=${model.id}
              class="cw-model-option ${model.id === selectedModel ? "cw-model-option-selected" : ""}"
              onClick=${() => handleSelect(model.id)}
            >
              <span class="cw-model-option-name">${escapeHtml(model.name)}</span>
              <span class="cw-model-option-provider">${escapeHtml(model.provider)}</span>
              ${model.description && m2`
                <span class="cw-model-option-desc">${escapeHtml(model.description)}</span>
              `}
            </button>
          `)}
        </div>
      `}
    </div>
  `;
  }

  // src/hooks/useChat.js
  function useChat(config, api, storage) {
    const [messages, setMessages] = d2([]);
    const [isLoading, setIsLoading] = d2(false);
    const [error, setError] = d2(null);
    const [conversationId, setConversationId] = d2(() => storage?.get(config.conversationIdKey) || null);
    const [hasMoreMessages, setHasMoreMessages] = d2(false);
    const [loadingMoreMessages, setLoadingMoreMessages] = d2(false);
    const [messagesOffset, setMessagesOffset] = d2(0);
    const eventSourceRef = A2(null);
    const currentRunIdRef = A2(null);
    y2(() => {
      if (conversationId) {
        storage?.set(config.conversationIdKey, conversationId);
      }
    }, [conversationId, config.conversationIdKey, storage]);
    const subscribeToEvents = q2(async (runId, token, onAssistantMessage) => {
      if (eventSourceRef.current)
        eventSourceRef.current.close();
      const eventPath = config.apiPaths.runEvents.replace("{runId}", runId);
      let url = `${config.backendUrl}${eventPath}`;
      if (token)
        url += `?anonymous_token=${encodeURIComponent(token)}`;
      const eventSource = new EventSource(url);
      eventSourceRef.current = eventSource;
      let assistantContent = "";
      eventSource.addEventListener("assistant.message", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("assistant.message", data.payload);
          const content = data.payload.content;
          if (content) {
            assistantContent += content;
            setMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant" && last.id.startsWith("assistant-stream-")) {
                return [...prev.slice(0, -1), { ...last, content: assistantContent }];
              }
              return [...prev, {
                id: "assistant-stream-" + Date.now(),
                role: "assistant",
                content: assistantContent,
                timestamp: /* @__PURE__ */ new Date(),
                type: "message"
              }];
            });
          }
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      eventSource.addEventListener("tool.call", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("tool.call", data.payload);
          setMessages((prev) => [...prev, {
            id: "tool-call-" + Date.now(),
            role: "assistant",
            content: `\u{1F527} ${data.payload.name}`,
            timestamp: /* @__PURE__ */ new Date(),
            type: "tool_call",
            metadata: {
              toolName: data.payload.name,
              arguments: data.payload.arguments,
              toolCallId: data.payload.id
            }
          }]);
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      eventSource.addEventListener("tool.result", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("tool.result", data.payload);
          const result = data.payload.result;
          const isError = result?.error;
          setMessages((prev) => [...prev, {
            id: "tool-result-" + Date.now(),
            role: "system",
            content: isError ? `\u274C ${result.error}` : `\u2713 Done`,
            timestamp: /* @__PURE__ */ new Date(),
            type: "tool_result",
            metadata: {
              toolName: data.payload.name,
              result,
              toolCallId: data.payload.tool_call_id
            }
          }]);
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      eventSource.addEventListener("custom", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("custom", data.payload);
          if (data.payload?.type === "ui_control") {
            if (config.onUIControl) {
              config.onUIControl(data.payload);
            }
          }
          if (data.payload?.type === "agent_context") {
            setMessages((prev) => [...prev, {
              id: "agent-context-" + Date.now(),
              role: "system",
              content: `\u{1F517} ${data.payload.agent_name || "Sub-agent"} is now handling this request`,
              timestamp: /* @__PURE__ */ new Date(),
              type: "agent_context",
              metadata: {
                agentKey: data.payload.agent_key,
                agentName: data.payload.agent_name,
                action: data.payload.action
              }
            }]);
          }
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      eventSource.addEventListener("sub_agent.start", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("sub_agent.start", data.payload);
          setMessages((prev) => [...prev, {
            id: "sub-agent-start-" + Date.now(),
            role: "system",
            content: `\u{1F517} Delegating to ${data.payload.agent_name || data.payload.sub_agent_key || "sub-agent"}...`,
            timestamp: /* @__PURE__ */ new Date(),
            type: "sub_agent_start",
            metadata: {
              subAgentKey: data.payload.sub_agent_key,
              agentName: data.payload.agent_name,
              invocationMode: data.payload.invocation_mode
            }
          }]);
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      eventSource.addEventListener("sub_agent.end", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent("sub_agent.end", data.payload);
          setMessages((prev) => [...prev, {
            id: "sub-agent-end-" + Date.now(),
            role: "system",
            content: `\u2713 ${data.payload.agent_name || "Sub-agent"} completed`,
            timestamp: /* @__PURE__ */ new Date(),
            type: "sub_agent_end",
            metadata: {
              subAgentKey: data.payload.sub_agent_key,
              agentName: data.payload.agent_name
            }
          }]);
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
      });
      const handleTerminal = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (config.onEvent)
            config.onEvent(data.type, data.payload);
          if (data.type === "run.failed") {
            const errMsg = data.payload.error || "Agent run failed";
            setError(errMsg);
            setMessages((prev) => [...prev, {
              id: "error-" + Date.now(),
              role: "system",
              content: `\u274C Error: ${errMsg}`,
              timestamp: /* @__PURE__ */ new Date(),
              type: "error"
            }]);
          }
        } catch (err) {
          console.error("[ChatWidget] Parse error:", err);
        }
        setIsLoading(false);
        eventSource.close();
        eventSourceRef.current = null;
        if (assistantContent && onAssistantMessage) {
          onAssistantMessage(assistantContent);
        }
      };
      eventSource.addEventListener("run.succeeded", handleTerminal);
      eventSource.addEventListener("run.failed", handleTerminal);
      eventSource.addEventListener("run.cancelled", handleTerminal);
      eventSource.addEventListener("run.timed_out", handleTerminal);
      eventSource.onerror = () => {
        setIsLoading(false);
        eventSource.close();
        eventSourceRef.current = null;
      };
    }, [config]);
    const sendMessage = q2(async (content, options = {}) => {
      if (!content.trim() || isLoading)
        return;
      const { model, onAssistantMessage } = typeof options === "function" ? { onAssistantMessage: options } : options;
      setIsLoading(true);
      setError(null);
      const userMessage = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: /* @__PURE__ */ new Date(),
        type: "message"
      };
      setMessages((prev) => [...prev, userMessage]);
      try {
        const token = await api.getOrCreateSession();
        const requestBody = {
          agentKey: config.agentKey,
          conversationId,
          messages: [{ role: "user", content: content.trim() }],
          metadata: { ...config.metadata, journeyType: config.defaultJourneyType }
        };
        if (model) {
          requestBody.model = model;
        }
        const response = await fetch(`${config.backendUrl}${config.apiPaths.runs}`, api.getFetchOptions({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        }));
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }
        const run = await response.json();
        currentRunIdRef.current = run.id;
        const runConversationId = run.conversationId || run.conversation_id;
        if (!conversationId && runConversationId) {
          setConversationId(runConversationId);
        }
        await subscribeToEvents(run.id, token, onAssistantMessage);
      } catch (err) {
        setError(err.message || "Failed to send message");
        setIsLoading(false);
      } finally {
        currentRunIdRef.current = null;
      }
    }, [config, api, conversationId, isLoading, subscribeToEvents]);
    const cancelRun = q2(async () => {
      const runId = currentRunIdRef.current;
      if (!runId || !isLoading)
        return;
      try {
        const cancelPath = config.apiPaths.cancelRun ? config.apiPaths.cancelRun.replace("{runId}", runId) : `${config.apiPaths.runs}${runId}/cancel/`;
        const response = await fetch(`${config.backendUrl}${cancelPath}`, api.getFetchOptions({
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }));
        if (response.ok) {
          if (eventSourceRef.current) {
            eventSourceRef.current.close();
            eventSourceRef.current = null;
          }
          setIsLoading(false);
          currentRunIdRef.current = null;
          setMessages((prev) => [...prev, {
            id: "cancelled-" + Date.now(),
            role: "system",
            content: "\u23F9 Run cancelled",
            timestamp: /* @__PURE__ */ new Date(),
            type: "cancelled"
          }]);
        }
      } catch (err) {
        console.error("[ChatWidget] Failed to cancel run:", err);
      }
    }, [config, api, isLoading]);
    const clearMessages2 = q2(() => {
      setMessages([]);
      setConversationId(null);
      setError(null);
      setHasMoreMessages(false);
      setMessagesOffset(0);
      storage?.set(config.conversationIdKey, null);
    }, [config.conversationIdKey, storage]);
    const mapApiMessage = (m4) => {
      const base = {
        id: generateId(),
        role: m4.role,
        timestamp: m4.timestamp ? new Date(m4.timestamp) : /* @__PURE__ */ new Date()
      };
      if (m4.role === "tool") {
        return {
          ...base,
          role: "system",
          content: "\u2713 Done",
          type: "tool_result",
          metadata: {
            result: m4.content,
            toolCallId: m4.tool_call_id
          }
        };
      }
      if (m4.role === "assistant" && m4.tool_calls && m4.tool_calls.length > 0) {
        return m4.tool_calls.map((tc) => ({
          id: generateId(),
          role: "assistant",
          content: `\u{1F527} ${tc.function?.name || tc.name || "tool"}`,
          timestamp: base.timestamp,
          type: "tool_call",
          metadata: {
            toolName: tc.function?.name || tc.name,
            arguments: tc.function?.arguments || tc.arguments,
            toolCallId: tc.id
          }
        }));
      }
      const content = typeof m4.content === "string" ? m4.content : JSON.stringify(m4.content);
      if (m4.role === "assistant" && !content?.trim()) {
        return null;
      }
      return {
        ...base,
        content,
        type: "message"
      };
    };
    const loadConversation = q2(async (convId) => {
      setIsLoading(true);
      setMessages([]);
      setConversationId(convId);
      try {
        const token = await api.getOrCreateSession();
        const limit = 10;
        const url = `${config.backendUrl}${config.apiPaths.conversations}${convId}/?limit=${limit}&offset=0`;
        const response = await fetch(url, api.getFetchOptions({ method: "GET" }));
        if (response.ok) {
          const conversation = await response.json();
          if (conversation.messages) {
            setMessages(conversation.messages.flatMap(mapApiMessage).filter(Boolean));
          }
          setHasMoreMessages(conversation.has_more || conversation.hasMore || false);
          setMessagesOffset(conversation.messages?.length || 0);
        } else if (response.status === 404) {
          setConversationId(null);
          storage?.set(config.conversationIdKey, null);
        }
      } catch (err) {
        console.error("[ChatWidget] Failed to load conversation:", err);
      } finally {
        setIsLoading(false);
      }
    }, [config, api, storage]);
    const loadMoreMessages = q2(async () => {
      if (!conversationId || loadingMoreMessages || !hasMoreMessages)
        return;
      setLoadingMoreMessages(true);
      try {
        const limit = 10;
        const url = `${config.backendUrl}${config.apiPaths.conversations}${conversationId}/?limit=${limit}&offset=${messagesOffset}`;
        const response = await fetch(url, api.getFetchOptions({ method: "GET" }));
        if (response.ok) {
          const conversation = await response.json();
          if (conversation.messages?.length > 0) {
            const olderMessages = conversation.messages.flatMap(mapApiMessage).filter(Boolean);
            setMessages((prev) => [...olderMessages, ...prev]);
            setMessagesOffset((prev) => prev + conversation.messages.length);
            setHasMoreMessages(conversation.has_more || conversation.hasMore || false);
          } else {
            setHasMoreMessages(false);
          }
        }
      } catch (err) {
        console.error("[ChatWidget] Failed to load more messages:", err);
      } finally {
        setLoadingMoreMessages(false);
      }
    }, [config, api, conversationId, messagesOffset, loadingMoreMessages, hasMoreMessages]);
    y2(() => {
      return () => {
        if (eventSourceRef.current) {
          eventSourceRef.current.close();
        }
      };
    }, []);
    return {
      messages,
      isLoading,
      error,
      conversationId,
      hasMoreMessages,
      loadingMoreMessages,
      sendMessage,
      cancelRun,
      clearMessages: clearMessages2,
      loadConversation,
      loadMoreMessages,
      setConversationId
    };
  }

  // src/hooks/useModels.js
  function useModels(config, api, storage) {
    const [availableModels, setAvailableModels] = d2([]);
    const [selectedModel, setSelectedModel] = d2(null);
    const [defaultModel, setDefaultModel] = d2(null);
    const [isLoading, setIsLoading] = d2(false);
    y2(() => {
      const loadModels = async () => {
        if (!config.showModelSelector)
          return;
        setIsLoading(true);
        try {
          const response = await fetch(
            `${config.backendUrl}${config.apiPaths.models}`,
            api.getFetchOptions({ method: "GET" })
          );
          if (response.ok) {
            const data = await response.json();
            const models = data.models || [];
            setAvailableModels(models);
            setDefaultModel(data.default);
            const savedModel = storage?.get(config.modelKey);
            if (savedModel && models.some((m4) => m4.id === savedModel)) {
              setSelectedModel(savedModel);
            } else {
              setSelectedModel(data.default);
            }
          }
        } catch (err) {
          console.warn("[ChatWidget] Failed to load models:", err);
        } finally {
          setIsLoading(false);
        }
      };
      loadModels();
    }, [config.backendUrl, config.apiPaths.models, config.showModelSelector, config.modelKey, api, storage]);
    const selectModel = q2((modelId) => {
      setSelectedModel(modelId);
      storage?.set(config.modelKey, modelId);
    }, [config.modelKey, storage]);
    const getSelectedModelInfo = q2(() => {
      return availableModels.find((m4) => m4.id === selectedModel) || null;
    }, [availableModels, selectedModel]);
    return {
      availableModels,
      selectedModel,
      defaultModel,
      isLoading,
      selectModel,
      getSelectedModelInfo
    };
  }

  // src/utils/api.js
  function createApiClient(config, getState2, setState) {
    const getAuthStrategy = () => {
      if (config.authStrategy)
        return config.authStrategy;
      if (config.authToken)
        return "token";
      if (config.apiPaths.anonymousSession || config.anonymousSessionEndpoint)
        return "anonymous";
      return "none";
    };
    const getAuthHeaders = () => {
      const strategy = getAuthStrategy();
      const headers = {};
      const token = config.authToken || getState2().authToken;
      if (strategy === "token" && token) {
        const headerName = config.authHeader || "Authorization";
        const prefix = config.authTokenPrefix !== void 0 ? config.authTokenPrefix : "Token";
        headers[headerName] = prefix ? `${prefix} ${token}` : token;
      } else if (strategy === "jwt" && token) {
        const headerName = config.authHeader || "Authorization";
        const prefix = config.authTokenPrefix !== void 0 ? config.authTokenPrefix : "Bearer";
        headers[headerName] = prefix ? `${prefix} ${token}` : token;
      } else if (strategy === "anonymous" && token) {
        const headerName = config.authHeader || config.anonymousTokenHeader || "X-Anonymous-Token";
        headers[headerName] = token;
      }
      if (strategy === "session") {
        const csrfToken = getCSRFToken(config.csrfCookieName);
        if (csrfToken) {
          headers["X-CSRFToken"] = csrfToken;
        }
      }
      return headers;
    };
    const getFetchOptions = (options = {}) => {
      const strategy = getAuthStrategy();
      const fetchOptions = { ...options };
      fetchOptions.headers = { ...fetchOptions.headers, ...getAuthHeaders() };
      if (strategy === "session")
        fetchOptions.credentials = "include";
      return fetchOptions;
    };
    const getOrCreateSession = async () => {
      const strategy = getAuthStrategy();
      const state = getState2();
      if (strategy !== "anonymous")
        return config.authToken || state.authToken;
      if (state.authToken)
        return state.authToken;
      const storageKey = config.anonymousTokenKey || config.sessionTokenKey;
      const stored = state.storage?.get(storageKey);
      if (stored) {
        setState((s3) => ({ ...s3, authToken: stored }));
        return stored;
      }
      try {
        const endpoint = config.anonymousSessionEndpoint || config.apiPaths.anonymousSession;
        const response = await fetch(`${config.backendUrl}${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
          const data = await response.json();
          setState((s3) => ({ ...s3, authToken: data.token }));
          state.storage?.set(storageKey, data.token);
          return data.token;
        }
      } catch (e3) {
        console.warn("[ChatWidget] Failed to create session:", e3);
      }
      return null;
    };
    return {
      getAuthStrategy,
      getAuthHeaders,
      getFetchOptions,
      getOrCreateSession
    };
  }

  // src/components/ChatWidget.js
  function ChatWidget({ config, onStateChange, markdownParser, apiRef }) {
    const [isOpen, setIsOpen] = d2(config.embedded || config.forceOpen === true);
    const [isExpanded, setIsExpanded] = d2(false);
    const [debugMode, setDebugMode] = d2(false);
    const [sidebarOpen, setSidebarOpen] = d2(false);
    const [conversations, setConversations] = d2([]);
    const [conversationsLoading, setConversationsLoading] = d2(false);
    const [enableTTS, setEnableTTS] = d2(config.enableTTS);
    const [isSpeaking, setIsSpeaking] = d2(false);
    const [currentAgent, setCurrentAgent] = d2(null);
    y2(() => {
      if (config.forceOpen !== void 0) {
        setIsOpen(config.forceOpen);
      }
    }, [config.forceOpen]);
    const storage = T2(() => createStorage(config.containerId), [config.containerId]);
    const [authToken, setAuthToken] = d2(config.authToken || null);
    const api = T2(() => {
      const getState2 = () => ({ authToken, storage });
      const setState = (fn) => {
        const newState = fn({ authToken, storage });
        if (newState.authToken !== authToken)
          setAuthToken(newState.authToken);
      };
      return createApiClient(config, getState2, setState);
    }, [config, authToken, storage]);
    const chat = useChat(config, api, storage);
    const models = useModels(config, api, storage);
    y2(() => {
      for (let i3 = chat.messages.length - 1; i3 >= 0; i3--) {
        const msg = chat.messages[i3];
        if (msg.type === "sub_agent_start") {
          setCurrentAgent({
            key: msg.metadata?.subAgentKey,
            name: msg.metadata?.agentName
          });
          return;
        }
        if (msg.type === "sub_agent_end") {
          setCurrentAgent(null);
          return;
        }
      }
    }, [chat.messages]);
    y2(() => {
      const storedConvId = storage.get(config.conversationIdKey);
      if (storedConvId) {
        chat.loadConversation(storedConvId);
      }
    }, []);
    y2(() => {
      if (onStateChange) {
        onStateChange({
          isOpen,
          isExpanded,
          debugMode,
          messages: chat.messages,
          conversationId: chat.conversationId,
          isLoading: chat.isLoading,
          error: chat.error
        });
      }
    }, [isOpen, isExpanded, debugMode, chat.messages, chat.conversationId, chat.isLoading, chat.error]);
    const loadConversations = q2(async () => {
      if (!config.showConversationSidebar)
        return;
      setConversationsLoading(true);
      try {
        const url = `${config.backendUrl}${config.apiPaths.conversations}?agent_key=${encodeURIComponent(config.agentKey)}`;
        const response = await fetch(url, api.getFetchOptions({ method: "GET" }));
        if (response.ok) {
          const data = await response.json();
          setConversations(data.results || data);
        }
      } catch (err) {
        console.error("[ChatWidget] Failed to load conversations:", err);
        setConversations([]);
      } finally {
        setConversationsLoading(false);
      }
    }, [config, api]);
    const handleToggleSidebar = q2(() => {
      const newOpen = !sidebarOpen;
      setSidebarOpen(newOpen);
      if (newOpen)
        loadConversations();
    }, [sidebarOpen, loadConversations]);
    const handleSwitchConversation = q2((convId) => {
      if (convId !== chat.conversationId) {
        chat.loadConversation(convId);
      }
      setSidebarOpen(false);
    }, [chat]);
    const handleNewConversation = q2(() => {
      chat.clearMessages();
      setSidebarOpen(false);
    }, [chat]);
    const handleSend = q2((content) => {
      chat.sendMessage(content, {
        model: models.selectedModel,
        onAssistantMessage: (assistantContent) => {
          if (enableTTS && assistantContent) {
          }
        }
      });
    }, [chat, enableTTS, models.selectedModel]);
    y2(() => {
      if (apiRef) {
        apiRef.current = {
          open: () => setIsOpen(true),
          close: () => setIsOpen(false),
          send: (msg) => handleSend(msg),
          clearMessages: () => chat.clearMessages(),
          toggleTTS: () => setEnableTTS((v3) => !v3),
          stopSpeech: () => setIsSpeaking(false),
          setAuth: (cfg) => {
            if (cfg.token !== void 0)
              setAuthToken(cfg.token);
          },
          clearAuth: () => setAuthToken(null)
        };
      }
    }, [chat, apiRef, handleSend]);
    if (!config.embedded && !isOpen) {
      return m2`
      <button 
        class="cw-fab" 
        style=${{ backgroundColor: config.primaryColor }}
        onClick=${() => setIsOpen(true)}
      >
        <svg class="cw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;
    }
    const widgetClasses = [
      "cw-widget",
      isExpanded && "cw-widget-expanded",
      config.embedded && "cw-widget-embedded"
    ].filter(Boolean).join(" ");
    return m2`
    <div class=${widgetClasses} style=${{ "--cw-primary": config.primaryColor }}>
      ${config.showConversationSidebar && m2`
        <${Sidebar}
          isOpen=${sidebarOpen}
          conversations=${conversations}
          conversationsLoading=${conversationsLoading}
          currentConversationId=${chat.conversationId}
          onClose=${() => setSidebarOpen(false)}
          onNewConversation=${handleNewConversation}
          onSwitchConversation=${handleSwitchConversation}
        />
      `}
      
      <${Header}
        config=${config}
        debugMode=${debugMode}
        isExpanded=${isExpanded}
        isSpeaking=${isSpeaking}
        messagesCount=${chat.messages.length}
        isLoading=${chat.isLoading}
        currentAgent=${currentAgent}
        onClose=${() => setIsOpen(false)}
        onToggleExpand=${() => setIsExpanded(!isExpanded)}
        onToggleDebug=${() => setDebugMode(!debugMode)}
        onToggleTTS=${() => setEnableTTS(!enableTTS)}
        onClear=${chat.clearMessages}
        onToggleSidebar=${handleToggleSidebar}
      />

      ${debugMode && m2`<div class="cw-status-bar"><span>🐛 Debug</span></div>`}

      <${MessageList}
        messages=${chat.messages}
        isLoading=${chat.isLoading}
        hasMoreMessages=${chat.hasMoreMessages}
        loadingMoreMessages=${chat.loadingMoreMessages}
        onLoadMore=${chat.loadMoreMessages}
        debugMode=${debugMode}
        markdownParser=${markdownParser}
        emptyStateTitle=${config.emptyStateTitle}
        emptyStateMessage=${config.emptyStateMessage}
      />

      ${chat.error && m2`<div class="cw-error-bar">${chat.error}</div>`}

      ${config.showModelSelector && models.availableModels.length > 0 && m2`
        <${ModelSelector}
          availableModels=${models.availableModels}
          selectedModel=${models.selectedModel}
          onSelectModel=${models.selectModel}
          disabled=${chat.isLoading}
        />
      `}

      <${InputForm}
        onSend=${handleSend}
        onCancel=${chat.cancelRun}
        isLoading=${chat.isLoading}
        placeholder=${config.placeholder}
        primaryColor=${config.primaryColor}
      />
    </div>
  `;
  }

  // src/utils/config.js
  var DEFAULT_CONFIG = {
    backendUrl: "http://localhost:8000",
    agentKey: "default-agent",
    title: "Chat Assistant",
    subtitle: "How can we help you today?",
    primaryColor: "#0066cc",
    position: "bottom-right",
    defaultJourneyType: "general",
    enableDebugMode: true,
    enableAutoRun: true,
    journeyTypes: {},
    customerPrompts: {},
    placeholder: "Type your message...",
    emptyStateTitle: "Start a Conversation",
    emptyStateMessage: "Send a message to get started.",
    // Auth
    authStrategy: null,
    authToken: null,
    authHeader: null,
    authTokenPrefix: null,
    anonymousSessionEndpoint: null,
    anonymousTokenKey: "chat_widget_anonymous_token",
    onAuthError: null,
    anonymousTokenHeader: "X-Anonymous-Token",
    conversationIdKey: "chat_widget_conversation_id",
    sessionTokenKey: "chat_widget_session_token",
    // API paths
    apiPaths: {
      anonymousSession: "/api/accounts/anonymous-session/",
      conversations: "/api/agent-runtime/conversations/",
      runs: "/api/agent-runtime/runs/",
      runEvents: "/api/agent-runtime/runs/{runId}/events/",
      simulateCustomer: "/api/agent-runtime/simulate-customer/",
      ttsVoices: "/api/tts/voices/",
      ttsSetVoice: "/api/tts/set-voice/",
      models: "/api/agent-runtime/models/"
    },
    // UI options
    showConversationSidebar: true,
    showClearButton: true,
    showDebugButton: true,
    showTTSButton: true,
    showVoiceSettings: true,
    showExpandButton: true,
    showModelSelector: false,
    // Model selection
    modelKey: "chat_widget_selected_model",
    // Auto-run
    autoRunDelay: 1e3,
    autoRunMode: "automatic",
    // TTS
    enableTTS: false,
    ttsProxyUrl: null,
    elevenLabsApiKey: null,
    ttsVoices: { assistant: null, user: null },
    ttsModel: "eleven_turbo_v2_5",
    ttsSettings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true },
    availableVoices: [],
    // Callbacks
    onEvent: null,
    // Multi-instance options
    containerId: null,
    embedded: false,
    metadata: {}
  };
  function mergeConfig(userConfig) {
    const mergedApiPaths = { ...DEFAULT_CONFIG.apiPaths, ...userConfig.apiPaths || {} };
    return { ...DEFAULT_CONFIG, ...userConfig, apiPaths: mergedApiPaths };
  }

  // src/index.js
  var instances = /* @__PURE__ */ new Map();
  var instanceCounter = 0;
  var defaultInstance = null;
  var ChatWidgetInstance = class {
    constructor(userConfig = {}) {
      this.instanceId = `cw-${++instanceCounter}`;
      this.config = mergeConfig(userConfig);
      this.container = null;
      this._state = {};
      this._apiRef = { current: null };
      instances.set(this.instanceId, this);
    }
    _handleStateChange = (state) => {
      this._state = state;
    };
    init() {
      if (this.config.containerId) {
        this.container = document.getElementById(this.config.containerId);
        if (!this.container) {
          console.error(`[ChatWidget] Container not found: ${this.config.containerId}`);
          return this;
        }
        this.container.classList.add("cw-container-embedded");
      } else {
        this.container = document.createElement("div");
        this.container.id = this.instanceId;
        this.container.className = `cw-container cw-position-${this.config.position}`;
        document.body.appendChild(this.container);
      }
      this._render();
      console.log(`[ChatWidget] Instance ${this.instanceId} initialized`);
      return this;
    }
    _render(configOverrides = {}) {
      if (!this.container)
        return;
      G(
        m2`<${ChatWidget}
        config=${{ ...this.config, ...configOverrides }}
        onStateChange=${this._handleStateChange}
        markdownParser=${ChatWidget2._enhancedMarkdownParser}
        apiRef=${this._apiRef}
      />`,
        this.container
      );
    }
    destroy() {
      if (this.container) {
        G(null, this.container);
        if (this.config.containerId) {
          this.container.classList.remove("cw-container-embedded");
        } else {
          this.container.remove();
        }
        this.container = null;
      }
      instances.delete(this.instanceId);
      console.log(`[ChatWidget] Instance ${this.instanceId} destroyed`);
    }
    // Public API methods - delegate to component via apiRef
    open() {
      if (this._apiRef.current) {
        this._apiRef.current.open();
      } else {
        this._render({ forceOpen: true });
      }
    }
    close() {
      if (this._apiRef.current) {
        this._apiRef.current.close();
      } else {
        this._render({ forceOpen: false });
      }
    }
    send(message) {
      if (this._apiRef.current) {
        this._apiRef.current.send(message);
      }
    }
    clearMessages() {
      if (this._apiRef.current) {
        this._apiRef.current.clearMessages();
      }
    }
    toggleTTS() {
      if (this._apiRef.current) {
        this._apiRef.current.toggleTTS();
      }
    }
    stopSpeech() {
      if (this._apiRef.current) {
        this._apiRef.current.stopSpeech();
      }
    }
    setAuth(config) {
      if (this._apiRef.current) {
        this._apiRef.current.setAuth(config);
      }
    }
    clearAuth() {
      if (this._apiRef.current) {
        this._apiRef.current.clearAuth();
      }
    }
    getState() {
      return { ...this._state };
    }
    getConfig() {
      return { ...this.config };
    }
  };
  function createInstance(config = {}) {
    const instance = new ChatWidgetInstance(config);
    return instance.init();
  }
  function init(config = {}) {
    if (defaultInstance) {
      defaultInstance.destroy();
    }
    defaultInstance = createInstance(config);
    return defaultInstance;
  }
  function destroy() {
    if (defaultInstance) {
      defaultInstance.destroy();
      defaultInstance = null;
    }
  }
  function open() {
    if (defaultInstance)
      defaultInstance.open();
  }
  function close() {
    if (defaultInstance)
      defaultInstance.close();
  }
  function send(message) {
    if (defaultInstance)
      defaultInstance.send(message);
  }
  function clearMessages() {
    if (defaultInstance)
      defaultInstance.clearMessages();
  }
  function toggleTTS() {
    if (defaultInstance)
      defaultInstance.toggleTTS();
  }
  function stopSpeech() {
    if (defaultInstance)
      defaultInstance.stopSpeech();
  }
  function setAuth(config) {
    if (defaultInstance)
      defaultInstance.setAuth(config);
  }
  function clearAuth() {
    if (defaultInstance)
      defaultInstance.clearAuth();
  }
  function getState() {
    return defaultInstance ? defaultInstance.getState() : null;
  }
  function getConfig() {
    return defaultInstance ? defaultInstance.getConfig() : null;
  }
  var ChatWidget2 = {
    // Multi-instance API
    createInstance,
    getInstance: (id) => instances.get(id),
    getAllInstances: () => Array.from(instances.values()),
    // Singleton API (backwards compatible)
    init,
    destroy,
    open,
    close,
    send,
    clearMessages,
    toggleTTS,
    stopSpeech,
    setAuth,
    clearAuth,
    getState,
    getConfig,
    // For markdown plugin
    _enhancedMarkdownParser: null
  };
  var src_default = ChatWidget2;
  if (typeof window !== "undefined") {
    window.ChatWidget = ChatWidget2;
  }
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=chat-widget.js.map
