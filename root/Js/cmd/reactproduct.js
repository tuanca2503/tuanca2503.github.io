/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
 */
'use strict'; (function(v, m) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = m() : "function" === typeof define && define.amd ? define(m) : v.React = m()
  })(this,
  function() {
    function v(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a,
      c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function m(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = da;
      this.updater = c || ea
    }
    function fa() {}
    function M(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = da;
      this.updater = c || ea
    }
    function ha(a, b, c) {
      var d, e = {},
      p = null,
      f = null;
      if (null != b) for (d in void 0 !== b.ref && (f = b.ref), void 0 !== b.key && (p = "" + b.key), b) ia.call(b, d) && !ja.hasOwnProperty(d) && (e[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) e.children = c;
      else if (1 < g) {
        for (var k = Array(g), h = 0; h < g; h++) k[h] = arguments[h + 2];
        e.children = k
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === e[d] && (e[d] = g[d]);
      return {
        $$typeof: y,
        type: a,
        key: p,
        ref: f,
        props: e,
        _owner: N.current
      }
    }
    function wa(a, b) {
      return {
        $$typeof: y,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
      }
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === y
    }
    function xa(a) {
      var b = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + ("" + a).replace(/[=:]/g,
      function(a) {
        return b[a]
      })
    }
    function ka(a, b, c, d) {
      if (D.length) {
        var e = D.pop();
        e.result = a;
        e.keyPrefix = b;
        e.func = c;
        e.context = d;
        e.count = 0;
        return e
      }
      return {
        result: a,
        keyPrefix: b,
        func: c,
        context: d,
        count: 0
      }
    }
    function la(a) {
      a.result = null;
      a.keyPrefix = null;
      a.func = null;
      a.context = null;
      a.count = 0;
      10 > D.length && D.push(a)
    }
    function P(a, b, c, d) {
      var e = typeof a;
      if ("undefined" === e || "boolean" === e) a = null;
      var p = !1;
      if (null === a) p = !0;
      else switch (e) {
      case "string":
      case "number":
        p = !0;
        break;
      case "object":
        switch (a.$$typeof) {
        case y:
        case ya:
          p = !0
        }
      }
      if (p) return c(d, a, "" === b ? "." + Q(a, 0) : b),
      1;
      p = 0;
      b = "" === b ? ".": b + ":";
      if (Array.isArray(a)) for (var f = 0; f < a.length; f++) {
        e = a[f];
        var g = b + Q(e, f);
        p += P(e, g, c, d)
      } else if (null === a || "object" !== typeof a ? g = null: (g = ma && a[ma] || a["@@iterator"], g = "function" === typeof g ? g: null), "function" === typeof g) for (a = g.call(a), f = 0; ! (e = a.next()).done;) e = e.value,
      g = b + Q(e, f++),
      p += P(e, g, c, d);
      else if ("object" === e) throw c = "" + a,
      Error(v(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}": c, ""));
      return p
    }
    function R(a, b, c) {
      return null == a ? 0 : P(a, "", b, c)
    }
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? xa(a.key) : b.toString(36)
    }
    function za(a, b, c) {
      a.func.call(a.context, b, a.count++)
    }
    function Aa(a, b, c) {
      var d = a.result,
      e = a.keyPrefix;
      a = a.func.call(a.context, b, a.count++);
      Array.isArray(a) ? S(a, d, c,
      function(a) {
        return a
      }) : null != a && (O(a) && (a = wa(a, e + (!a.key || b && b.key === a.key ? "": ("" + a.key).replace(na, "$&/") + "/") + c)), d.push(a))
    }
    function S(a, b, c, d, e) {
      var f = "";
      null != c && (f = ("" + c).replace(na, "$&/") + "/");
      b = ka(b, f, d, e);
      R(a, Aa, b);
      la(b)
    }
    function t() {
      var a = oa.current;
      if (null === a) throw Error(v(321));
      return a
    }
    function T(a, b) {
      var c = a.length;
      a.push(b);
      a: for (;;) {
        var d = Math.floor((c - 1) / 2),
        e = a[d];
        if (void 0 !== e && 0 < E(e, b)) a[d] = b,
        a[c] = e,
        c = d;
        else break a
      }
    }
    function n(a) {
      a = a[0];
      return void 0 === a ? null: a
    }
    function F(a) {
      var b = a[0];
      if (void 0 !== b) {
        var c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0,
          e = a.length; d < e;) {
            var f = 2 * (d + 1) - 1,
            h = a[f],
            g = f + 1,
            k = a[g];
            if (void 0 !== h && 0 > E(h, c)) void 0 !== k && 0 > E(k, h) ? (a[d] = k, a[g] = c, d = g) : (a[d] = h, a[f] = c, d = f);
            else if (void 0 !== k && 0 > E(k, c)) a[d] = k,
            a[g] = c,
            d = g;
            else break a
          }
        }
        return b
      }
      return null
    }
    function E(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c: a.id - b.id
    }
    function G(a) {
      for (var b = n(u); null !== b;) {
        if (null === b.callback) F(u);
        else if (b.startTime <= a) F(u),
        b.sortIndex = b.expirationTime,
        T(q, b);
        else break;
        b = n(u)
      }
    }
    function U(a) {
      z = !1;
      G(a);
      if (!w) if (null !== n(q)) w = !0,
      A(V);
      else {
        var b = n(u);
        null !== b && H(U, b.startTime - a)
      }
    }
    function V(a, b) {
      w = !1;
      z && (z = !1, W());
      I = !0;
      var c = h;
      try {
        G(b);
        for (l = n(q); null !== l && (!(l.expirationTime > b) || a && !X());) {
          var d = l.callback;
          if (null !== d) {
            l.callback = null;
            h = l.priorityLevel;
            var e = d(l.expirationTime <= b);
            b = r();
            "function" === typeof e ? l.callback = e: l === n(q) && F(q);
            G(b)
          } else F(q);
          l = n(q)
        }
        if (null !== l) var f = !0;
        else {
          var m = n(u);
          null !== m && H(U, m.startTime - b);
          f = !1
        }
        return f
      } finally {
        l = null,
        h = c,
        I = !1
      }
    }
    function pa(a) {
      switch (a) {
      case 1:
        return - 1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1E4;
      default:
        return 5E3
      }
    }
    var f = "function" === typeof Symbol && Symbol.
    for,
    y = f ? Symbol.
    for ("react.element") : 60103,
    ya = f ? Symbol.
    for ("react.portal") : 60106,
    x = f ? Symbol.
    for ("react.fragment") : 60107,
    Y = f ? Symbol.
    for ("react.strict_mode") : 60108,
    Ba = f ? Symbol.
    for ("react.profiler") : 60114,
    Ca = f ? Symbol.
    for ("react.provider") : 60109,
    Da = f ? Symbol.
    for ("react.context") : 60110,
    Ea = f ? Symbol.
    for ("react.forward_ref") : 60112,
    Fa = f ? Symbol.
    for ("react.suspense") : 60113;
    f && Symbol.
    for ("react.suspense_list");
    var Ga = f ? Symbol.
    for ("react.memo") : 60115,
    Ha = f ? Symbol.
    for ("react.lazy") : 60116;
    f && Symbol.
    for ("react.fundamental");
    f && Symbol.
    for ("react.responder");
    f && Symbol.
    for ("react.scope");
    var ma = "function" === typeof Symbol && Symbol.iterator,
    qa = Object.getOwnPropertySymbols,
    Ia = Object.prototype.hasOwnProperty,
    Ja = Object.prototype.propertyIsEnumerable,
    J = function() {
      try {
        if (!Object.assign) return ! 1;
        var a = new String("abc");
        a[5] = "de";
        if ("5" === Object.getOwnPropertyNames(a)[0]) return ! 1;
        var b = {};
        for (a = 0; 10 > a; a++) b["_" + String.fromCharCode(a)] = a;
        if ("0123456789" !== Object.getOwnPropertyNames(b).map(function(a) {
          return b[a]
        }).join("")) return ! 1;
        var c = {};
        "abcdefghijklmnopqrst".split("").forEach(function(a) {
          c[a] = a
        });
        return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({},
        c)).join("") ? !1 : !0
      } catch(d) {
        return ! 1
      }
    } () ? Object.assign: function(a, b) {
      if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
      var c = Object(a);
      for (var d, e = 1; e < arguments.length; e++) {
        var f = Object(arguments[e]);
        for (var h in f) Ia.call(f, h) && (c[h] = f[h]);
        if (qa) {
          d = qa(f);
          for (var g = 0; g < d.length; g++) Ja.call(f, d[g]) && (c[d[g]] = f[d[g]])
        }
      }
      return c
    },
    ea = {
      isMounted: function(a) {
        return ! 1
      },
      enqueueForceUpdate: function(a, b, c) {},
      enqueueReplaceState: function(a, b, c, d) {},
      enqueueSetState: function(a, b, c, d) {}
    },
    da = {};
    m.prototype.isReactComponent = {};
    m.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(v(85));
      this.updater.enqueueSetState(this, a, b, "setState")
    };
    m.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate")
    };
    fa.prototype = m.prototype;
    f = M.prototype = new fa;
    f.constructor = M;
    J(f, m.prototype);
    f.isPureReactComponent = !0;
    var oa = {
      current: null
    },
    N = {
      current: null
    },
    ia = Object.prototype.hasOwnProperty,
    ja = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    },
    na = /\/+/g,
    D = [],
    Z;
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
      var B = null,
      ra = null,
      sa = function() {
        if (null !== B) try {
          var a = r();
          B(!0, a);
          B = null
        } catch(b) {
          throw setTimeout(sa, 0),
          b;
        }
      },
      Ka = Date.now();
      var r = function() {
        return Date.now() - Ka
      };
      var A = function(a) {
        null !== B ? setTimeout(A, 0, a) : (B = a, setTimeout(sa, 0))
      };
      var H = function(a, b) {
        ra = setTimeout(a, b)
      };
      var W = function() {
        clearTimeout(ra)
      };
      var X = function() {
        return ! 1
      };
      f = Z = function() {}
    } else {
      var aa = window.performance,
      ta = window.Date,
      La = window.setTimeout,
      Ma = window.clearTimeout;
      "undefined" !== typeof console && (f = window.cancelAnimationFrame, "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof f && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
      if ("object" === typeof aa && "function" === typeof aa.now) r = function() {
        return aa.now()
      };
      else {
        var Na = ta.now();
        r = function() {
          return ta.now() - Na
        }
      }
      var K = !1,
      L = null,
      ba = -1,
      ua = 5,
      va = 0;
      X = function() {
        return r() >= va
      };
      f = function() {};
      Z = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : ua = 0 < a ? Math.floor(1E3 / a) : 5
      };
      var C = new MessageChannel,
      ca = C.port2;
      C.port1.onmessage = function() {
        if (null !== L) {
          var a = r();
          va = a + ua;
          try {
            L(!0, a) ? ca.postMessage(null) : (K = !1, L = null)
          } catch(b) {
            throw ca.postMessage(null),
            b;
          }
        } else K = !1
      };
      A = function(a) {
        L = a;
        K || (K = !0, ca.postMessage(null))
      };
      H = function(a, b) {
        ba = La(function() {
          a(r())
        },
        b)
      };
      W = function() {
        Ma(ba);
        ba = -1
      }
    }
    var q = [],
    u = [],
    Oa = 1,
    l = null,
    h = 3,
    I = !1,
    w = !1,
    z = !1,
    Pa = 0;
    C = {
      ReactCurrentDispatcher: oa,
      ReactCurrentOwner: N,
      IsSomeRendererActing: {
        current: !1
      },
      assign: J
    };
    J(C, {
      Scheduler: {
        unstable_ImmediatePriority: 1,
        unstable_UserBlockingPriority: 2,
        unstable_NormalPriority: 3,
        unstable_IdlePriority: 5,
        unstable_LowPriority: 4,
        unstable_runWithPriority: function(a, b) {
          switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3
          }
          var c = h;
          h = a;
          try {
            return b()
          } finally {
            h = c
          }
        },
        unstable_next: function(a) {
          switch (h) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = h
          }
          var c = h;
          h = b;
          try {
            return a()
          } finally {
            h = c
          }
        },
        unstable_scheduleCallback: function(a, b, c) {
          var d = r();
          if ("object" === typeof c && null !== c) {
            var e = c.delay;
            e = "number" === typeof e && 0 < e ? d + e: d;
            c = "number" === typeof c.timeout ? c.timeout: pa(a)
          } else c = pa(a),
          e = d;
          c = e + c;
          a = {
            id: Oa++,
            callback: b,
            priorityLevel: a,
            startTime: e,
            expirationTime: c,
            sortIndex: -1
          };
          e > d ? (a.sortIndex = e, T(u, a), null === n(q) && a === n(u) && (z ? W() : z = !0, H(U, e - d))) : (a.sortIndex = c, T(q, a), w || I || (w = !0, A(V)));
          return a
        },
        unstable_cancelCallback: function(a) {
          a.callback = null
        },
        unstable_wrapCallback: function(a) {
          var b = h;
          return function() {
            var c = h;
            h = b;
            try {
              return a.apply(this, arguments)
            } finally {
              h = c
            }
          }
        },
        unstable_getCurrentPriorityLevel: function() {
          return h
        },
        unstable_shouldYield: function() {
          var a = r();
          G(a);
          var b = n(q);
          return b !== l && null !== l && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < l.expirationTime || X()
        },
        unstable_requestPaint: f,
        unstable_continueExecution: function() {
          w || I || (w = !0, A(V))
        },
        unstable_pauseExecution: function() {},
        unstable_getFirstCallbackNode: function() {
          return n(q)
        },
        get unstable_now() {
          return r
        },
        get unstable_forceFrameRate() {
          return Z
        },
        unstable_Profiling: null
      },
      SchedulerTracing: {
        get __interactionsRef() {
          return null
        },
        get __subscriberRef() {
          return null
        },
        unstable_clear: function(a) {
          return a()
        },
        unstable_getCurrent: function() {
          return null
        },
        unstable_getThreadID: function() {
          return++Pa
        },
        unstable_trace: function(a, b, c) {
          return c()
        },
        unstable_wrap: function(a) {
          return a
        },
        unstable_subscribe: function(a) {},
        unstable_unsubscribe: function(a) {}
      }
    });
    x = {
      Children: {
        map: function(a, b, c) {
          if (null == a) return a;
          var d = [];
          S(a, d, null, b, c);
          return d
        },
        forEach: function(a, b, c) {
          if (null == a) return a;
          b = ka(null, null, b, c);
          R(a, za, b);
          la(b)
        },
        count: function(a) {
          return R(a,
          function() {
            return null
          },
          null)
        },
        toArray: function(a) {
          var b = [];
          S(a, b, null,
          function(a) {
            return a
          });
          return b
        },
        only: function(a) {
          if (!O(a)) throw Error(v(143));
          return a
        }
      },
      createRef: function() {
        return {
          current: null
        }
      },
      Component: m,
      PureComponent: M,
      createContext: function(a, b) {
        void 0 === b && (b = null);
        a = {
          $$typeof: Da,
          _calculateChangedBits: b,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        a.Provider = {
          $$typeof: Ca,
          _context: a
        };
        return a.Consumer = a
      },
      forwardRef: function(a) {
        return {
          $$typeof: Ea,
          render: a
        }
      },
      lazy: function(a) {
        return {
          $$typeof: Ha,
          _ctor: a,
          _status: -1,
          _result: null
        }
      },
      memo: function(a, b) {
        return {
          $$typeof: Ga,
          type: a,
          compare: void 0 === b ? null: b
        }
      },
      useCallback: function(a, b) {
        return t().useCallback(a, b)
      },
      useContext: function(a, b) {
        return t().useContext(a, b)
      },
      useEffect: function(a, b) {
        return t().useEffect(a, b)
      },
      useImperativeHandle: function(a, b, c) {
        return t().useImperativeHandle(a, b, c)
      },
      useDebugValue: function(a, b) {},
      useLayoutEffect: function(a, b) {
        return t().useLayoutEffect(a, b)
      },
      useMemo: function(a, b) {
        return t().useMemo(a, b)
      },
      useReducer: function(a, b, c) {
        return t().useReducer(a, b, c)
      },
      useRef: function(a) {
        return t().useRef(a)
      },
      useState: function(a) {
        return t().useState(a)
      },
      Fragment: x,
      Profiler: Ba,
      StrictMode: Y,
      Suspense: Fa,
      createElement: ha,
      cloneElement: function(a, b, c) {
        if (null === a || void 0 === a) throw Error(v(267, a));
        var d = J({},
        a.props),
        e = a.key,
        f = a.ref,
        h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (f = b.ref, h = N.current);
          void 0 !== b.key && (e = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (k in b) ia.call(b, k) && !ja.hasOwnProperty(k) && (d[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k])
        }
        var k = arguments.length - 2;
        if (1 === k) d.children = c;
        else if (1 < k) {
          g = Array(k);
          for (var l = 0; l < k; l++) g[l] = arguments[l + 2];
          d.children = g
        }
        return {
          $$typeof: y,
          type: a.type,
          key: e,
          ref: f,
          props: d,
          _owner: h
        }
      },
      createFactory: function(a) {
        var b = ha.bind(null, a);
        b.type = a;
        return b
      },
      isValidElement: O,
      version: "16.12.0",
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: C
    };
    x = (Y = {
    default:
      x
    },
    x) || Y;
    return x.
  default || x
  });