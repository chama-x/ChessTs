import Ve, { useContext as Ye, useState as W, useEffect as ie, createContext as ze, memo as D0, useRef as se, useCallback as $, useMemo as j0 } from "react";
import { createPortal as O0 } from "react-dom";
import { Chess as A0 } from "chess.js";
var ge = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function $0() {
  if (Ie) return Z;
  Ie = 1;
  var d = Ve, n = Symbol.for("react.element"), h = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, M = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(x, s, u) {
    var g, O = {}, D = null, F = null;
    u !== void 0 && (D = "" + u), s.key !== void 0 && (D = "" + s.key), s.ref !== void 0 && (F = s.ref);
    for (g in s) S.call(s, g) && !y.hasOwnProperty(g) && (O[g] = s[g]);
    if (x && x.defaultProps) for (g in s = x.defaultProps, s) O[g] === void 0 && (O[g] = s[g]);
    return { $$typeof: n, type: x, key: D, ref: F, props: O, _owner: M.current };
  }
  return Z.Fragment = h, Z.jsx = b, Z.jsxs = b, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function F0() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Ve, n = Symbol.for("react.element"), h = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), x = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), A = Symbol.iterator, G = "@@iterator";
    function v(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[G];
      return typeof t == "function" ? t : null;
    }
    var a = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        R("error", e, r);
      }
    }
    function R(e, t, r) {
      {
        var o = a.ReactDebugCurrentFrame, p = o.getStackAddendum();
        p !== "" && (t += "%s", r = r.concat([p]));
        var w = r.map(function(c) {
          return String(c);
        });
        w.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var z = !1, J = !1, C = !1, f = !1, m = !1, _;
    _ = Symbol.for("react.module.reference");
    function I(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === y || m || e === M || e === u || e === g || f || e === F || z || J || C || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === O || e.$$typeof === b || e.$$typeof === x || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _ || e.getModuleId !== void 0));
    }
    function E(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var p = t.displayName || t.name || "";
      return p !== "" ? r + "(" + p + ")" : r;
    }
    function j(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case h:
          return "Portal";
        case y:
          return "Profiler";
        case M:
          return "StrictMode";
        case u:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return j(t) + ".Consumer";
          case b:
            var r = e;
            return j(r._context) + ".Provider";
          case s:
            return E(e, e.render, "ForwardRef");
          case O:
            var o = e.displayName || null;
            return o !== null ? o : k(e.type) || "Memo";
          case D: {
            var p = e, w = p._payload, c = p._init;
            try {
              return k(c(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, N = 0, ee, ve, me, we, ye, Ce, ke;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function s0() {
      {
        if (N === 0) {
          ee = console.log, ve = console.info, me = console.warn, we = console.error, ye = console.group, Ce = console.groupCollapsed, ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function i0() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ee
            }),
            info: L({}, e, {
              value: ve
            }),
            warn: L({}, e, {
              value: me
            }),
            error: L({}, e, {
              value: we
            }),
            group: L({}, e, {
              value: ye
            }),
            groupCollapsed: L({}, e, {
              value: Ce
            }),
            groupEnd: L({}, e, {
              value: ke
            })
          });
        }
        N < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = a.ReactCurrentDispatcher, le;
    function te(e, t, r) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (p) {
            var o = p.stack.trim().match(/\n( *(at )?)/);
            le = o && o[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ce = !1, re;
    {
      var a0 = typeof WeakMap == "function" ? WeakMap : Map;
      re = new a0();
    }
    function Ee(e, t) {
      if (!e || ce)
        return "";
      {
        var r = re.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      ce = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ae.current, ae.current = null, s0();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (V) {
              o = V;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (V) {
              o = V;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            o = V;
          }
          e();
        }
      } catch (V) {
        if (V && o && typeof V.stack == "string") {
          for (var l = V.stack.split(`
`), U = o.stack.split(`
`), T = l.length - 1, P = U.length - 1; T >= 1 && P >= 0 && l[T] !== U[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (l[T] !== U[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || l[T] !== U[P]) {
                    var q = `
` + l[T].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, q), q;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = w, i0(), Error.prepareStackTrace = p;
      }
      var H = e ? e.displayName || e.name : "", B = H ? te(H) : "";
      return typeof e == "function" && re.set(e, B), B;
    }
    function l0(e, t, r) {
      return Ee(e, !1);
    }
    function c0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ne(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, c0(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case u:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return l0(e.render);
          case O:
            return ne(e.type, t, r);
          case D: {
            var o = e, p = o._payload, w = o._init;
            try {
              return ne(w(p), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, xe = {}, Le = a.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var t = e._owner, r = ne(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(r);
      } else
        Le.setExtraStackFrame(null);
    }
    function u0(e, t, r, o, p) {
      {
        var w = Function.call.bind(K);
        for (var c in e)
          if (w(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var U = Error((o || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              l = e[c](t, c, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              l = T;
            }
            l && !(l instanceof Error) && (oe(p), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, c, typeof l), oe(null)), l instanceof Error && !(l.message in xe) && (xe[l.message] = !0, oe(p), i("Failed %s type: %s", r, l.message), oe(null));
          }
      }
    }
    var f0 = Array.isArray;
    function ue(e) {
      return f0(e);
    }
    function d0(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function p0(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Se(e) {
      if (p0(e))
        return i("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", d0(e)), Te(e);
    }
    var Me = a.ReactCurrentOwner, h0 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e;
    function g0(e) {
      if (K.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function v0(e) {
      if (K.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function m0(e, t) {
      typeof e.ref == "string" && Me.current;
    }
    function w0(e, t) {
      {
        var r = function() {
          Re || (Re = !0, i("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function y0(e, t) {
      {
        var r = function() {
          _e || (_e = !0, i("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var C0 = function(e, t, r, o, p, w, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: c,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function k0(e, t, r, o, p) {
      {
        var w, c = {}, l = null, U = null;
        r !== void 0 && (Se(r), l = "" + r), v0(t) && (Se(t.key), l = "" + t.key), g0(t) && (U = t.ref, m0(t, p));
        for (w in t)
          K.call(t, w) && !h0.hasOwnProperty(w) && (c[w] = t[w]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (w in T)
            c[w] === void 0 && (c[w] = T[w]);
        }
        if (l || U) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && w0(c, P), U && y0(c, P);
        }
        return C0(e, l, U, p, o, Me.current, c);
      }
    }
    var fe = a.ReactCurrentOwner, Pe = a.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var t = e._owner, r = ne(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(r);
      } else
        Pe.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function De() {
      {
        if (fe.current) {
          var e = k(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function b0(e) {
      return "";
    }
    var je = {};
    function E0(e) {
      {
        var t = De();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Oe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = E0(t);
        if (je[r])
          return;
        je[r] = !0;
        var o = "";
        e && e._owner && e._owner !== fe.current && (o = " It was passed a child from " + k(e._owner.type) + "."), X(e), i('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, o), X(null);
      }
    }
    function Ae(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            pe(o) && Oe(o, t);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = v(e);
          if (typeof p == "function" && p !== e.entries)
            for (var w = p.call(e), c; !(c = w.next()).done; )
              pe(c.value) && Oe(c.value, t);
        }
      }
    }
    function x0(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === O))
          r = t.propTypes;
        else
          return;
        if (r) {
          var o = k(t);
          u0(r, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !de) {
          de = !0;
          var p = k(t);
          i("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && i("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function L0(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var o = t[r];
          if (o !== "children" && o !== "key") {
            X(e), i("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), i("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var $e = {};
    function Fe(e, t, r, o, p, w) {
      {
        var c = I(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = b0();
          U ? l += U : l += De();
          var T;
          e === null ? T = "null" : ue(e) ? T = "array" : e !== void 0 && e.$$typeof === n ? (T = "<" + (k(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, i("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, l);
        }
        var P = k0(e, t, r, p, w);
        if (P == null)
          return P;
        if (c) {
          var q = t.children;
          if (q !== void 0)
            if (o)
              if (ue(q)) {
                for (var H = 0; H < q.length; H++)
                  Ae(q[H], e);
                Object.freeze && Object.freeze(q);
              } else
                i("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(q, e);
        }
        if (K.call(t, "key")) {
          var B = k(e), V = Object.keys(t).filter(function(P0) {
            return P0 !== "key";
          }), he = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[B + he]) {
            var _0 = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            i(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, B, _0, B), $e[B + he] = !0;
          }
        }
        return e === S ? L0(P) : x0(P), P;
      }
    }
    function T0(e, t, r) {
      return Fe(e, t, r, !0);
    }
    function S0(e, t, r) {
      return Fe(e, t, r, !1);
    }
    var M0 = S0, R0 = T0;
    Q.Fragment = S, Q.jsx = M0, Q.jsxs = R0;
  }()), Q;
}
process.env.NODE_ENV === "production" ? ge.exports = $0() : ge.exports = F0();
var Y = ge.exports;
const I0 = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
}, qe = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cpath%20d='m%2022.5,9%20c%20-2.21,0%20-4,1.79%20-4,4%200,0.89%200.29,1.71%200.78,2.38%20C%2017.33,16.5%2016,18.59%2016,21%20c%200,2.03%200.94,3.84%202.41,5.03%20C%2015.41,27.09%2011,31.58%2011,39.5%20H%2034%20C%2034,31.58%2029.59,27.09%2026.59,26.03%2028.06,24.84%2029,23.03%2029,21%2029,18.59%2027.67,16.5%2025.72,15.38%2026.21,14.71%2026.5,13.89%2026.5,13%20c%200,-2.21%20-1.79,-4%20-4,-4%20z'%20style='opacity:1;%20fill:%23ffffff;%20fill-opacity:1;%20fill-rule:nonzero;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;%20stroke-linejoin:miter;%20stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'/%3e%3c/svg%3e", We = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:none;%20fill-opacity:1;%20fill-rule:evenodd;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.3)'%3e%3cpath%20d='M%2022,10%20C%2032.5,11%2038.5,18%2038,39%20L%2015,39%20C%2015,30%2025,32.5%2023,18'%20style='fill:%23ffffff;%20stroke:%23000000;'%20/%3e%3cpath%20d='M%2024,18%20C%2024.38,20.91%2018.45,25.37%2016,27%20C%2013,29%2013.18,31.34%2011,31%20C%209.958,30.06%2012.41,27.96%2011,28%20C%2010,28%2011.19,29.23%2010,30%20C%209,30%205.997,31%206,26%20C%206,24%2012,14%2012,14%20C%2012,14%2013.89,12.1%2014,10.5%20C%2013.27,9.506%2013.5,8.5%2013.5,7.5%20C%2014.5,6.5%2016.5,10%2016.5,10%20L%2018.5,10%20C%2018.5,10%2019.28,8.008%2021,7%20C%2022,7%2022,10%2022,10'%20style='fill:%23ffffff;%20stroke:%23000000;'%20/%3e%3cpath%20d='M%209.5%2025.5%20A%200.5%200.5%200%201%201%208.5,25.5%20A%200.5%200.5%200%201%201%209.5%2025.5%20z'%20style='fill:%23000000;%20stroke:%23000000;'%20/%3e%3cpath%20d='M%2015%2015.5%20A%200.5%201.5%200%201%201%2014,15.5%20A%200.5%201.5%200%201%201%2015%2015.5%20z'%20transform='matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)'%20style='fill:%23000000;%20stroke:%23000000;'%20/%3e%3c/g%3e%3c/svg%3e", Ne = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:none;%20fill-rule:evenodd;%20fill-opacity:1;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;%20stroke-linejoin:round;%20stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.6)'%3e%3cg%20style='fill:%23ffffff;%20stroke:%23000000;%20stroke-linecap:butt;'%3e%3cpath%20d='M%209,36%20C%2012.39,35.03%2019.11,36.43%2022.5,34%20C%2025.89,36.43%2032.61,35.03%2036,36%20C%2036,36%2037.65,36.54%2039,38%20C%2038.32,38.97%2037.35,38.99%2036,38.5%20C%2032.61,37.53%2025.89,38.96%2022.5,37.5%20C%2019.11,38.96%2012.39,37.53%209,38.5%20C%207.65,38.99%206.68,38.97%206,38%20C%207.35,36.54%209,36%209,36%20z'/%3e%3cpath%20d='M%2015,32%20C%2017.5,34.5%2027.5,34.5%2030,32%20C%2030.5,30.5%2030,30%2030,30%20C%2030,27.5%2027.5,26%2027.5,26%20C%2033,24.5%2033.5,14.5%2022.5,10.5%20C%2011.5,14.5%2012,24.5%2017.5,26%20C%2017.5,26%2015,27.5%2015,30%20C%2015,30%2014.5,30.5%2015,32%20z'/%3e%3cpath%20d='M%2025%208%20A%202.5%202.5%200%201%201%2020,8%20A%202.5%202.5%200%201%201%2025%208%20z'/%3e%3c/g%3e%3cpath%20d='M%2017.5,26%20L%2027.5,26%20M%2015,30%20L%2030,30%20M%2022.5,15.5%20L%2022.5,20.5%20M%2020,18%20L%2025,18'%20style='fill:none;%20stroke:%23000000;%20stroke-linejoin:miter;'/%3e%3c/g%3e%3c/svg%3e", Be = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:%23ffffff;%20fill-opacity:1;%20fill-rule:evenodd;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.3)'%3e%3cpath%20d='M%209,39%20L%2036,39%20L%2036,36%20L%209,36%20L%209,39%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2012,36%20L%2012,32%20L%2033,32%20L%2033,36%20L%2012,36%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2011,14%20L%2011,9%20L%2015,9%20L%2015,11%20L%2020,11%20L%2020,9%20L%2025,9%20L%2025,11%20L%2030,11%20L%2030,9%20L%2034,9%20L%2034,14'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2034,14%20L%2031,17%20L%2014,17%20L%2011,14'%20/%3e%3cpath%20d='M%2031,17%20L%2031,29.5%20L%2014,29.5%20L%2014,17'%20style='stroke-linecap:butt;%20stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2031,29.5%20L%2032.5,32%20L%2012.5,32%20L%2014,29.5'%20/%3e%3cpath%20d='M%2011,14%20L%2034,14'%20style='fill:none;%20stroke:%23000000;%20stroke-linejoin:miter;'%20/%3e%3c/g%3e%3c/svg%3e", Xe = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='fill:%23ffffff;stroke:%23000000;stroke-width:1.5;stroke-linejoin:round'%3e%3cpath%20d='M%209,26%20C%2017.5,24.5%2030,24.5%2036,26%20L%2038.5,13.5%20L%2031,25%20L%2030.7,10.9%20L%2025.5,24.5%20L%2022.5,10%20L%2019.5,24.5%20L%2014.3,10.9%20L%2014,25%20L%206.5,13.5%20L%209,26%20z'/%3e%3cpath%20d='M%209,26%20C%209,28%2010.5,28%2011.5,30%20C%2012.5,31.5%2012.5,31%2012,33.5%20C%2010.5,34.5%2011,36%2011,36%20C%209.5,37.5%2011,38.5%2011,38.5%20C%2017.5,39.5%2027.5,39.5%2034,38.5%20C%2034,38.5%2035.5,37.5%2034,36%20C%2034,36%2034.5,34.5%2033,33.5%20C%2032.5,31%2032.5,31.5%2033.5,30%20C%2034.5,28%2036,28%2036,26%20C%2027.5,24.5%2017.5,24.5%209,26%20z'/%3e%3cpath%20d='M%2011.5,30%20C%2015,29%2030,29%2033.5,30'%20style='fill:none'/%3e%3cpath%20d='M%2012,33.5%20C%2018,32.5%2027,32.5%2033,33.5'%20style='fill:none'/%3e%3ccircle%20cx='6'%20cy='12'%20r='2'%20/%3e%3ccircle%20cx='14'%20cy='9'%20r='2'%20/%3e%3ccircle%20cx='22.5'%20cy='8'%20r='2'%20/%3e%3ccircle%20cx='31'%20cy='9'%20r='2'%20/%3e%3ccircle%20cx='39'%20cy='12'%20r='2'%20/%3e%3c/g%3e%3c/svg%3e", He = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='45'%20height='45'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%3e%3cpath%20stroke-linejoin='miter'%20d='M22.5%2011.63V6M20%208h5'/%3e%3cpath%20fill='%23fff'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20d='M22.5%2025s4.5-7.5%203-10.5c0%200-1-2.5-3-2.5s-3%202.5-3%202.5c-1.5%203%203%2010.5%203%2010.5'/%3e%3cpath%20fill='%23fff'%20d='M12.5%2037c5.5%203.5%2014.5%203.5%2020%200v-7s9-4.5%206-10.5c-4-6.5-13.5-3.5-16%204V27v-3.5c-2.5-7.5-12-10.5-16-4-3%206%206%2010.5%206%2010.5v7'/%3e%3cpath%20d='M12.5%2030c5.5-3%2014.5-3%2020%200m-20%203.5c5.5-3%2014.5-3%2020%200m-20%203.5c5.5-3%2014.5-3%2020%200'/%3e%3c/g%3e%3c/svg%3e", Je = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cpath%20d='m%2022.5,9%20c%20-2.21,0%20-4,1.79%20-4,4%200,0.89%200.29,1.71%200.78,2.38%20C%2017.33,16.5%2016,18.59%2016,21%20c%200,2.03%200.94,3.84%202.41,5.03%20C%2015.41,27.09%2011,31.58%2011,39.5%20H%2034%20C%2034,31.58%2029.59,27.09%2026.59,26.03%2028.06,24.84%2029,23.03%2029,21%2029,18.59%2027.67,16.5%2025.72,15.38%2026.21,14.71%2026.5,13.89%2026.5,13%20c%200,-2.21%20-1.79,-4%20-4,-4%20z'%20style='opacity:1;%20fill:%23000000;%20fill-opacity:1;%20fill-rule:nonzero;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;%20stroke-linejoin:miter;%20stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'/%3e%3c/svg%3e", Ke = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:none;%20fill-opacity:1;%20fill-rule:evenodd;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.3)'%3e%3cpath%20d='M%2022,10%20C%2032.5,11%2038.5,18%2038,39%20L%2015,39%20C%2015,30%2025,32.5%2023,18'%20style='fill:%23000000;%20stroke:%23000000;'%20/%3e%3cpath%20d='M%2024,18%20C%2024.38,20.91%2018.45,25.37%2016,27%20C%2013,29%2013.18,31.34%2011,31%20C%209.958,30.06%2012.41,27.96%2011,28%20C%2010,28%2011.19,29.23%2010,30%20C%209,30%205.997,31%206,26%20C%206,24%2012,14%2012,14%20C%2012,14%2013.89,12.1%2014,10.5%20C%2013.27,9.506%2013.5,8.5%2013.5,7.5%20C%2014.5,6.5%2016.5,10%2016.5,10%20L%2018.5,10%20C%2018.5,10%2019.28,8.008%2021,7%20C%2022,7%2022,10%2022,10'%20style='fill:%23000000;%20stroke:%23000000;'%20/%3e%3cpath%20d='M%209.5%2025.5%20A%200.5%200.5%200%201%201%208.5,25.5%20A%200.5%200.5%200%201%201%209.5%2025.5%20z'%20style='fill:%23ffffff;%20stroke:%23ffffff;'%20/%3e%3cpath%20d='M%2015%2015.5%20A%200.5%201.5%200%201%201%2014,15.5%20A%200.5%201.5%200%201%201%2015%2015.5%20z'%20transform='matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)'%20style='fill:%23ffffff;%20stroke:%23ffffff;'%20/%3e%3cpath%20d='M%2024.55,10.4%20L%2024.1,11.85%20L%2024.6,12%20C%2027.75,13%2030.25,14.49%2032.5,18.75%20C%2034.75,23.01%2035.75,29.06%2035.25,39%20L%2035.2,39.5%20L%2037.45,39.5%20L%2037.5,39%20C%2038,28.94%2036.62,22.15%2034.25,17.66%20C%2031.88,13.17%2028.46,11.02%2025.06,10.5%20L%2024.55,10.4%20z%20'%20style='fill:%23ffffff;%20stroke:none;'%20/%3e%3c/g%3e%3c/svg%3e", Ze = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:none;%20fill-rule:evenodd;%20fill-opacity:1;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;%20stroke-linejoin:round;%20stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.6)'%3e%3cg%20style='fill:%23000000;%20stroke:%23000000;%20stroke-linecap:butt;'%3e%3cpath%20d='M%209,36%20C%2012.39,35.03%2019.11,36.43%2022.5,34%20C%2025.89,36.43%2032.61,35.03%2036,36%20C%2036,36%2037.65,36.54%2039,38%20C%2038.32,38.97%2037.35,38.99%2036,38.5%20C%2032.61,37.53%2025.89,38.96%2022.5,37.5%20C%2019.11,38.96%2012.39,37.53%209,38.5%20C%207.65,38.99%206.68,38.97%206,38%20C%207.35,36.54%209,36%209,36%20z'/%3e%3cpath%20d='M%2015,32%20C%2017.5,34.5%2027.5,34.5%2030,32%20C%2030.5,30.5%2030,30%2030,30%20C%2030,27.5%2027.5,26%2027.5,26%20C%2033,24.5%2033.5,14.5%2022.5,10.5%20C%2011.5,14.5%2012,24.5%2017.5,26%20C%2017.5,26%2015,27.5%2015,30%20C%2015,30%2014.5,30.5%2015,32%20z'/%3e%3cpath%20d='M%2025%208%20A%202.5%202.5%200%201%201%2020,8%20A%202.5%202.5%200%201%201%2025%208%20z'/%3e%3c/g%3e%3cpath%20d='M%2017.5,26%20L%2027.5,26%20M%2015,30%20L%2030,30%20M%2022.5,15.5%20L%2022.5,20.5%20M%2020,18%20L%2025,18'%20style='fill:none;%20stroke:%23ffffff;%20stroke-linejoin:miter;'/%3e%3c/g%3e%3c/svg%3e", Qe = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='opacity:1;%20fill:%23000000;%20fill-opacity:1;%20fill-rule:evenodd;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%20transform='translate(0,0.3)'%3e%3cpath%20d='M%209,39%20L%2036,39%20L%2036,36%20L%209,36%20L%209,39%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2012.5,32%20L%2014,29.5%20L%2031,29.5%20L%2032.5,32%20L%2012.5,32%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2012,36%20L%2012,32%20L%2033,32%20L%2033,36%20L%2012,36%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2014,29.5%20L%2014,16.5%20L%2031,16.5%20L%2031,29.5%20L%2014,29.5%20z%20'%20style='stroke-linecap:butt;stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2014,16.5%20L%2011,14%20L%2034,14%20L%2031,16.5%20L%2014,16.5%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2011,14%20L%2011,9%20L%2015,9%20L%2015,11%20L%2020,11%20L%2020,9%20L%2025,9%20L%2025,11%20L%2030,11%20L%2030,9%20L%2034,9%20L%2034,14%20L%2011,14%20z%20'%20style='stroke-linecap:butt;'%20/%3e%3cpath%20d='M%2012,35.5%20L%2033,35.5%20L%2033,35.5'%20style='fill:none;%20stroke:%23ffffff;%20stroke-width:1;%20stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2013,31.5%20L%2032,31.5'%20style='fill:none;%20stroke:%23ffffff;%20stroke-width:1;%20stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2014,29.5%20L%2031,29.5'%20style='fill:none;%20stroke:%23ffffff;%20stroke-width:1;%20stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2014,16.5%20L%2031,16.5'%20style='fill:none;%20stroke:%23ffffff;%20stroke-width:1;%20stroke-linejoin:miter;'%20/%3e%3cpath%20d='M%2011,14%20L%2034,14'%20style='fill:none;%20stroke:%23ffffff;%20stroke-width:1;%20stroke-linejoin:miter;'%20/%3e%3c/g%3e%3c/svg%3e", e0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='fill:%23000000;stroke:%23000000;stroke-width:1.5;stroke-linejoin:round'%3e%3cpath%20d='M%209,26%20C%2017.5,24.5%2030,24.5%2036,26%20L%2038.5,13.5%20L%2031,25%20L%2030.7,10.9%20L%2025.5,24.5%20L%2022.5,10%20L%2019.5,24.5%20L%2014.3,10.9%20L%2014,25%20L%206.5,13.5%20L%209,26%20z'/%3e%3cpath%20d='m%209,26%20c%200,2%201.5,2%202.5,4%201,1.5%201,1%200.5,3.5%20-1.5,1%20-1,2.5%20-1,2.5%20-1.5,1.5%200,2.5%200,2.5%206.5,1%2016.5,1%2023,0%200,0%201.5,-1%200,-2.5%200,0%200.5,-1.5%20-1,-2.5%20-0.5,-2.5%20-0.5,-2%200.5,-3.5%201,-2%202.5,-2%202.5,-4%20-8.5,-1.5%20-18.5,-1.5%20-27,0%20z'/%3e%3cpath%20d='M%2011.5,30%20C%2015,29%2030,29%2033.5,30'%20style='fill:none'/%3e%3cpath%20d='m%2012,33.5%20c%206,-1%2015,-1%2021,0'%20style='fill:none'/%3e%3ccircle%20cx='6'%20cy='12'%20r='2'/%3e%3ccircle%20cx='14'%20cy='9'%20r='2'/%3e%3ccircle%20cx='22.5'%20cy='8'%20r='2'/%3e%3ccircle%20cx='31'%20cy='9'%20r='2'/%3e%3ccircle%20cx='39'%20cy='12'%20r='2'/%3e%3cpath%20d='M%2011,38.5%20A%2035,35%201%200%200%2034,38.5'%20style='fill:none'/%3e%3cg%20style='fill:none;stroke:%23ffffff'%3e%3cpath%20d='M%2011,29%20A%2035,35%201%200%201%2034,29'/%3e%3cpath%20d='M%2012.5,31.5%20L%2032.5,31.5'/%3e%3cpath%20d='M%2011.5,34.5%20A%2035,35%201%200%200%2033.5,34.5'/%3e%3cpath%20d='M%2010.5,37.5%20A%2035,35%201%200%200%2034.5,37.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", t0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='45'%20height='45'%3e%3cg%20style='fill:none;%20fill-opacity:1;%20fill-rule:evenodd;%20stroke:%23000000;%20stroke-width:1.5;%20stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;%20stroke-dasharray:none;%20stroke-opacity:1;'%3e%3cpath%20d='M%2022.5,11.63%20L%2022.5,6'%20style='fill:none;%20stroke:%23000000;%20stroke-linejoin:miter;'%20id='path6570'/%3e%3cpath%20d='M%2022.5,25%20C%2022.5,25%2027,17.5%2025.5,14.5%20C%2025.5,14.5%2024.5,12%2022.5,12%20C%2020.5,12%2019.5,14.5%2019.5,14.5%20C%2018,17.5%2022.5,25%2022.5,25'%20style='fill:%23000000;fill-opacity:1;%20stroke-linecap:butt;%20stroke-linejoin:miter;'/%3e%3cpath%20d='M%2012.5,37%20C%2018,40.5%2027,40.5%2032.5,37%20L%2032.5,30%20C%2032.5,30%2041.5,25.5%2038.5,19.5%20C%2034.5,13%2025,16%2022.5,23.5%20L%2022.5,27%20L%2022.5,23.5%20C%2020,16%2010.5,13%206.5,19.5%20C%203.5,25.5%2012.5,30%2012.5,30%20L%2012.5,37'%20style='fill:%23000000;%20stroke:%23000000;'/%3e%3cpath%20d='M%2020,8%20L%2025,8'%20style='fill:none;%20stroke:%23000000;%20stroke-linejoin:miter;'/%3e%3cpath%20d='M%2032,29.5%20C%2032,29.5%2040.5,25.5%2038.03,19.85%20C%2034.15,14%2025,18%2022.5,24.5%20L%2022.5,26.6%20L%2022.5,24.5%20C%2020,18%2010.85,14%206.97,19.85%20C%204.5,25.5%2013,29.5%2013,29.5'%20style='fill:none;%20stroke:%23ffffff;'/%3e%3cpath%20d='M%2012.5,30%20C%2018,27%2027,27%2032.5,30%20M%2012.5,33.5%20C%2018,30.5%2027,30.5%2032.5,33.5%20M%2012.5,37%20C%2018,34%2027,34%2032.5,37'%20style='fill:none;%20stroke:%23ffffff;'/%3e%3c/g%3e%3c/svg%3e", Ge = {
  wp: qe,
  wn: We,
  wb: Ne,
  wr: Be,
  wq: Xe,
  wk: He,
  bp: Je,
  bn: Ke,
  bb: Ze,
  br: Qe,
  bq: e0,
  bk: t0
}, r0 = ze({
  currentTheme: "default",
  themes: {},
  loadTheme: async () => {
  },
  getPieceSvg: () => null
}), U0 = () => Ye(r0), W0 = ({
  children: d,
  defaultTheme: n = "default"
}) => {
  const [h, S] = W({}), [M, y] = W(n), b = async (s) => {
    if (!h[s])
      try {
        console.log("Loading theme:", s), console.log("SVG imports:", {
          wp: qe,
          wn: We,
          wb: Ne,
          wr: Be,
          wq: Xe,
          wk: He,
          bp: Je,
          bn: Ke,
          bb: Ze,
          br: Qe,
          bq: e0,
          bk: t0
        });
        const u = {
          name: s,
          pieces: Ge
        };
        console.log("Theme loaded:", u), S((g) => ({
          ...g,
          [s]: u
        })), y(s);
      } catch (u) {
        console.error(`Failed to load theme: ${s}`, u);
      }
  }, x = (s) => Ge[s] || null;
  return ie(() => {
    b(n);
  }, [n]), /* @__PURE__ */ Y.jsx(r0.Provider, { value: {
    currentTheme: M,
    themes: h,
    loadTheme: b,
    getPieceSvg: x
  }, children: d });
}, n0 = D0(({
  piece: d,
  square: n,
  isDragging: h,
  _theme: S = "default"
}) => {
  var G, v;
  const { getPieceSvg: M } = U0(), y = M(d), b = se(null), [x, s] = W(null), u = se(null), g = I0[d[1]], O = d[0] === "w" ? "white" : "black", D = `${O} ${g} on ${n}`, F = $((a) => {
    if (!h || !u.current) return;
    const { x: i, y: R, rect: z } = u.current, J = a.pageX - i, C = a.pageY - R;
    s({
      x: z.left + window.scrollX + J,
      y: z.top + window.scrollY + C
    });
  }, [h]);
  ie(() => {
    if (h && b.current) {
      const a = b.current.getBoundingClientRect();
      u.current = {
        x: window.scrollX + a.left,
        y: window.scrollY + a.top,
        rect: a
      }, s({
        x: window.scrollX + a.left,
        y: window.scrollY + a.top
      });
      const i = (R) => {
        u.current && (u.current.x = R.pageX, u.current.y = R.pageY, window.removeEventListener("mousemove", i));
      };
      window.addEventListener("mousemove", i, { once: !0 }), window.addEventListener("mousemove", F);
    } else
      s(null);
    return () => {
      window.removeEventListener("mousemove", F), u.current = null;
    };
  }, [h, F]);
  const A = $(() => y ? /* @__PURE__ */ Y.jsx(
    "img",
    {
      src: y,
      alt: `${O} ${g}`,
      className: "piece-svg no-drag",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: h ? 0.8 : 1,
        filter: d.startsWith("b") ? "brightness(0.2)" : "none",
        userSelect: "none"
      }
    }
  ) : null, [y, h, d, O, g]);
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    /* @__PURE__ */ Y.jsxs(
      "div",
      {
        ref: b,
        className: `piece ${h ? "dragging" : ""}`,
        "data-piece": d,
        "data-square": n,
        role: "piece",
        "aria-label": D,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          cursor: h ? "grabbing" : "grab",
          transition: h ? "none" : "transform 0.2s ease",
          pointerEvents: h ? "none" : "auto",
          touchAction: "none",
          willChange: "transform",
          transformOrigin: "center",
          zIndex: h ? 9999 : 1,
          opacity: h ? 0 : 1,
          backgroundColor: "transparent"
        },
        children: [
          !h && A(),
          /* @__PURE__ */ Y.jsx("span", { className: "visually-hidden", children: D })
        ]
      }
    ),
    h && x && O0(
      /* @__PURE__ */ Y.jsx(
        "div",
        {
          className: "dragged-piece",
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            width: (G = u.current) == null ? void 0 : G.rect.width,
            height: (v = u.current) == null ? void 0 : v.rect.height,
            transform: `translate(${x.x}px, ${x.y}px)`,
            zIndex: 9999,
            pointerEvents: "none",
            willChange: "transform",
            backgroundColor: "transparent"
          },
          children: A()
        }
      ),
      document.body
    ),
    /* @__PURE__ */ Y.jsx("style", { children: `
        .piece-svg {
          user-select: none;
          -webkit-user-drag: none;
        }
        
        .chess-board {
          position: relative;
        }

        .chess-board .square {
          position: relative;
          z-index: 1;
        }

        .piece {
          position: absolute;
          z-index: 2;
          transform-origin: center;
          background-color: transparent !important;
        }

        .piece.dragging {
          z-index: 9999;
          pointer-events: none;
        }

        .dragged-piece {
          pointer-events: none;
          transform-origin: center;
          background-color: transparent !important;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .no-drag {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
      ` })
  ] });
});
n0.displayName = "Piece";
const o0 = ze(null), G0 = () => {
  const d = Ye(o0);
  if (!d)
    throw new Error("useChess must be used within a ChessProvider");
  return d;
}, N0 = ({ children: d }) => {
  const [n] = W(() => new A0()), [h, S] = W(n.fen()), [M, y] = W([]), [b, x] = W(/* @__PURE__ */ new Map()), s = $(() => {
    const v = n.fen();
    S(v), y(n.history({ verbose: !0 }).map((i) => i.san));
    const a = v.split(" ").slice(0, 4).join(" ");
    x((i) => {
      const R = new Map(i);
      return R.set(a, (R.get(a) || 0) + 1), R;
    });
  }, [n]), u = $(() => {
    const v = n.fen().split(" ").slice(0, 4).join(" ");
    return (b.get(v) || 0) >= 3;
  }, [n, b]), g = $(() => {
    const [, , , , v] = n.fen().split(" ");
    return parseInt(v) >= 100;
  }, [n]), O = $(() => {
    const v = n.board().flat().filter((a) => a !== null);
    if (v.length <= 3) {
      if (v.length === 2) return !0;
      if (v.length === 3) {
        const a = v.find((i) => (i == null ? void 0 : i.type) !== "k");
        return (a == null ? void 0 : a.type) === "b" || (a == null ? void 0 : a.type) === "n";
      }
    }
    return !1;
  }, [n]), D = $((v) => {
    try {
      return n.moves({
        square: v,
        verbose: !1
      }).map((i) => {
        if (typeof i == "string") {
          if (i === "O-O" || i === "O-O-O") {
            const z = n.turn() === "w" ? "1" : "8";
            return i === "O-O" ? `g${z}` : `c${z}`;
          }
          const R = i.match(/[a-h][1-8]/);
          return R ? R[0] : "";
        }
        return "";
      }).filter(Boolean);
    } catch (a) {
      return console.error("Error getting possible moves:", a), [];
    }
  }, [n]), F = $((v, a) => {
    try {
      const R = n.moves({
        square: v,
        verbose: !0
      }).find((z) => z.to === a);
      return R && n.move(R) ? (s(), !0) : !1;
    } catch (i) {
      return console.error("Invalid move:", i), !1;
    }
  }, [n, s]), A = $(() => {
    const v = n.undo() !== null;
    return v && s(), v;
  }, [n, s]), G = $(() => {
    n.reset(), x(/* @__PURE__ */ new Map()), s();
  }, [n, s]);
  return ie(() => {
    s();
  }, [s]), /* @__PURE__ */ Y.jsx(o0.Provider, { value: {
    game: n,
    position: h,
    isCheck: n.isCheck(),
    isCheckmate: n.isCheckmate(),
    isStalemate: n.isStalemate(),
    isDraw: n.isDraw(),
    isThreefoldRepetition: u(),
    isFiftyMoveRule: g(),
    isInsufficientMaterial: O(),
    turn: n.turn(),
    history: M,
    makeMove: F,
    undo: A,
    reset: G,
    getPossibleMoves: D
  }, children: d });
}, V0 = (d, n) => {
  const h = d.charCodeAt(0) - 97, S = 8 - parseInt(d[1]);
  let M = h, y = S;
  switch (n) {
    case "up":
      y--;
      break;
    case "down":
      y++;
      break;
    case "left":
      M--;
      break;
    case "right":
      M++;
      break;
  }
  return M < 0 || M > 7 || y < 0 || y > 7 ? null : `${String.fromCharCode(97 + M)}${8 - y}`;
}, B0 = ({
  onPieceDrop: d,
  orientation: n = "white",
  customSquareStyles: h = {}
}) => {
  const {
    position: S,
    makeMove: M,
    getPossibleMoves: y,
    turn: b
  } = G0(), [x, s] = W({
    piece: null,
    from: null,
    isDragging: !1
  }), [u, g] = W(null), [O, D] = W([]), F = se(null), A = se({
    handleMove: null,
    handleUp: null
  }), G = j0(() => {
    console.log("Parsing position:", S);
    const [C] = S.split(" "), f = C.split("/"), m = {};
    return f.forEach((_, I) => {
      let E = 0;
      for (let j = 0; j < _.length; j++) {
        const k = _[j];
        if (/\d/.test(k))
          E += parseInt(k);
        else {
          const L = `${String.fromCharCode(97 + E)}${8 - I}`, N = k === k.toUpperCase() ? "w" : "b", ee = k.toLowerCase();
          m[L] = `${N}${ee}`, E++;
        }
      }
    }), console.log("Parsed position map:", m), m;
  }, [S]), v = $((C) => {
    if (!F.current) return null;
    const f = F.current.getBoundingClientRect(), m = C.clientX - f.left, _ = C.clientY - f.top;
    if (m < 0 || m > f.width || _ < 0 || _ > f.height) return null;
    const I = Math.floor(m / f.width * 8), E = Math.floor(_ / f.height * 8);
    return `${String.fromCharCode(97 + (n === "white" ? I : 7 - I))}${8 - E}`;
  }, [n]), a = $(() => {
    A.current.handleMove && window.removeEventListener("mousemove", A.current.handleMove), A.current.handleUp && window.removeEventListener("mouseup", A.current.handleUp), A.current.handleMove = null, A.current.handleUp = null;
  }, []);
  ie(() => () => a(), [a]);
  const i = $((C, f) => {
    const m = G[f];
    if (!m || b === "w" && m.startsWith("b") || b === "b" && m.startsWith("w"))
      return;
    C.preventDefault(), s({
      piece: m,
      from: f,
      isDragging: !0
    });
    const _ = y(f);
    D(_);
    const I = (j) => {
      if (j.preventDefault(), !F.current) return;
      document.querySelectorAll(".drop-target, .dragging-over").forEach((L) => {
        L.classList.remove("drop-target", "dragging-over");
      });
      const k = v(j);
      if (k && _.includes(k)) {
        const L = document.querySelector(`[data-square="${k}"]`);
        L && L.classList.add("drop-target", "dragging-over");
      }
    }, E = (j) => {
      j.preventDefault(), document.querySelectorAll(".drop-target").forEach((L) => {
        L.classList.remove("drop-target");
      });
      const k = v(j);
      k && k !== f && _.includes(k) && d && d(f, k, m), s({ piece: null, from: null, isDragging: !1 }), D([]), a();
    };
    A.current.handleMove = I, A.current.handleUp = E, window.addEventListener("mousemove", I), window.addEventListener("mouseup", E);
  }, [G, y, b, v, d, a]), R = $((C, f) => {
    if (C.stopPropagation(), !x.isDragging)
      if (u) {
        if (f === u) {
          g(null), D([]);
          return;
        }
        y(u).includes(f) && M(u, f) && d && d(u, f, G[u]), g(null), D([]);
      } else if (G[f]) {
        const m = G[f];
        (b === "w" && m.startsWith("w") || b === "b" && m.startsWith("b")) && (g(f), D(y(f)));
      } else
        g(null), D([]);
  }, [u, M, d, G, y, b, x.isDragging]), z = $((C) => {
    C.target === C.currentTarget && g(null);
  }, []), J = $((C, f) => {
    if (C.key === "Enter" || C.key === " ") {
      C.preventDefault();
      const m = {
        stopPropagation: () => {
        },
        target: C.target,
        currentTarget: C.currentTarget
      };
      R(m, f);
    } else if (C.key === "Escape")
      g(null);
    else {
      const m = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"
      }[C.key];
      if (m) {
        C.preventDefault();
        const _ = V0(f, m);
        if (_) {
          const I = document.querySelector(`[data-square="${_}"]`);
          I instanceof HTMLElement && I.focus();
        }
      }
    }
  }, [R]);
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      ref: F,
      className: "chess-board",
      role: "grid",
      "aria-label": "Chess board",
      onClick: z,
      children: [
        Array.from({ length: 64 }, (C, f) => {
          const m = Math.floor(f / 8), _ = n === "white" ? f % 8 : 7 - f % 8, I = (m + _) % 2 === 0, E = `${String.fromCharCode(97 + _)}${8 - m}`, j = G[E], k = O.includes(E);
          return /* @__PURE__ */ Y.jsx(
            "div",
            {
              className: `square ${I ? "light" : "dark"} ${u === E ? "selected" : ""} ${k ? "highlighted" : ""}`,
              "data-square": E,
              style: h[E],
              onMouseDown: (L) => j && i(L, E),
              onClick: (L) => R(L, E),
              role: "gridcell",
              "aria-label": `${I ? "light" : "dark"} square ${E}${j ? ` with ${j[0] === "w" ? "white" : "black"} piece` : ""}`,
              tabIndex: 0,
              onKeyDown: (L) => J(L, E),
              children: /* @__PURE__ */ Y.jsx("div", { className: "square-content", children: j && /* @__PURE__ */ Y.jsx(
                n0,
                {
                  piece: j,
                  square: E,
                  isDragging: x.from === E
                }
              ) })
            },
            E
          );
        }),
        /* @__PURE__ */ Y.jsx("style", { children: `
        .chess-board {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          aspect-ratio: 1;
          background: #312E2B;
          position: relative;
          user-select: none;
          width: 100%;
          border: 4px solid #312E2B;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          touch-action: none;
        }

        .square {
          position: relative;
          width: 100%;
          padding-top: 100%;
          background-color: #EEEED2;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        .square.dark {
          background-color: #769656;
        }

        .square-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: inherit;
        }

        .square.selected {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5);
        }

        .square.drop-target {
          box-shadow: inset 0 0 0 3px rgba(0, 255, 0, 0.5);
        }

        .square.drop-target.selected {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5),
                     inset 0 0 0 6px rgba(0, 255, 0, 0.5);
        }

        .square:focus {
          outline: none;
          box-shadow: inset 0 0 0 3px rgba(0, 128, 255, 0.5);
        }

        .square.selected:focus {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5),
                      0 0 0 3px rgba(0, 128, 255, 0.5);
        }

        .square::before {
          content: attr(data-square);
          position: absolute;
          bottom: 2px;
          left: 2px;
          font-size: 8px;
          opacity: 0.5;
          color: ${n === "white" ? "#769656" : "#EEEED2"};
          pointer-events: none;
          z-index: 1;
        }

        .square:hover .square-content::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }

        @media (hover: none) {
          .square:hover .square-content::after {
            display: none;
          }
        }

        .square.highlighted::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 0, 0.2);
          pointer-events: none;
          z-index: 1;
        }
      ` })
      ]
    }
  );
}, X0 = (d = "start") => {
  const [n, h] = W(d), [S, M] = W({
    isCheck: !1,
    isCheckmate: !1,
    isStalemate: !1,
    turn: "white"
  });
  return {
    position: n,
    gameState: S,
    makeMove: (b, x) => (console.log(`Moving from ${b} to ${x}`), !0)
  };
}, H0 = (d, n, h, S) => !0, J0 = (d) => "";
export {
  B0 as ChessBoard,
  N0 as ChessProvider,
  n0 as Piece,
  W0 as PieceProvider,
  J0 as generateFEN,
  H0 as isValidMove,
  G0 as useChess,
  X0 as useChessGame,
  U0 as usePieces
};
