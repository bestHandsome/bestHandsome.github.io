import {
	h as Be,
	F as Ce,
	C as ke,
	j as te,
	d as O,
	g as Me,
	e as Ae,
	aT as Le,
	O as De,
	H as He,
	S as _,
	E as Ie,
	i as Pe,
	aU as $e,
	m as d,
	Y as ne,
	Z as l,
	t as ie,
	_ as C,
	a7 as Fe,
} from './index-06154a72.js';
import { e as oe } from './use-rtl-cc014dc1.js';
function jr(e) {
	return typeof e == 'string' ? (e.endsWith('px') ? Number(e.slice(0, e.length - 2)) : Number(e)) : e;
}
function Jr(e) {
	if (e != null) return typeof e == 'number' ? `${e}px` : e.endsWith('px') ? e : `${e}px`;
}
function Zr(e, t) {
	const r = e.trim().split(/\s+/g),
		n = { top: r[0] };
	switch (r.length) {
		case 1:
			(n.right = r[0]), (n.bottom = r[0]), (n.left = r[0]);
			break;
		case 2:
			(n.right = r[1]), (n.left = r[1]), (n.bottom = r[0]);
			break;
		case 3:
			(n.right = r[1]), (n.bottom = r[2]), (n.left = r[1]);
			break;
		case 4:
			(n.right = r[1]), (n.bottom = r[2]), (n.left = r[3]);
			break;
		default:
			throw new Error('[seemly/getMargin]:' + e + ' is not a valid value.');
	}
	return t === void 0 ? n : n[t];
}
function Yr(e, t) {
	const [r, n] = e.split(' ');
	return t ? (t === 'row' ? r : n) : { row: r, col: n || r };
}
function V(e, t = !0, r = []) {
	return (
		e.forEach(n => {
			if (n !== null) {
				if (typeof n != 'object') {
					(typeof n == 'string' || typeof n == 'number') && r.push(Be(String(n)));
					return;
				}
				if (Array.isArray(n)) {
					V(n, t, r);
					return;
				}
				if (n.type === Ce) {
					if (n.children === null) return;
					Array.isArray(n.children) && V(n.children, t, r);
				} else n.type !== ke && r.push(n);
			}
		}),
		r
	);
}
function Kr() {
	return te() !== null;
}
const Qr = typeof window < 'u';
function N(e, t) {
	console.error(`[vueuc/${e}]: ${t}`);
}
var f = [],
	We = function () {
		return f.some(function (e) {
			return e.activeTargets.length > 0;
		});
	},
	_e = function () {
		return f.some(function (e) {
			return e.skippedTargets.length > 0;
		});
	},
	X = 'ResizeObserver loop completed with undelivered notifications.',
	Ve = function () {
		var e;
		typeof ErrorEvent == 'function'
			? (e = new ErrorEvent('error', { message: X }))
			: ((e = document.createEvent('Event')), e.initEvent('error', !1, !1), (e.message = X)),
			window.dispatchEvent(e);
	},
	m;
(function (e) {
	(e.BORDER_BOX = 'border-box'), (e.CONTENT_BOX = 'content-box'), (e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
})(m || (m = {}));
var v = function (e) {
		return Object.freeze(e);
	},
	Ne = (function () {
		function e(t, r) {
			(this.inlineSize = t), (this.blockSize = r), v(this);
		}
		return e;
	})(),
	se = (function () {
		function e(t, r, n, i) {
			return (
				(this.x = t),
				(this.y = r),
				(this.width = n),
				(this.height = i),
				(this.top = this.y),
				(this.left = this.x),
				(this.bottom = this.top + this.height),
				(this.right = this.left + this.width),
				v(this)
			);
		}
		return (
			(e.prototype.toJSON = function () {
				var t = this,
					r = t.x,
					n = t.y,
					i = t.top,
					o = t.right,
					s = t.bottom,
					u = t.left,
					h = t.width,
					c = t.height;
				return {
					x: r,
					y: n,
					top: i,
					right: o,
					bottom: s,
					left: u,
					width: h,
					height: c,
				};
			}),
			(e.fromRect = function (t) {
				return new e(t.x, t.y, t.width, t.height);
			}),
			e
		);
	})(),
	H = function (e) {
		return e instanceof SVGElement && 'getBBox' in e;
	},
	ae = function (e) {
		if (H(e)) {
			var t = e.getBBox(),
				r = t.width,
				n = t.height;
			return !r && !n;
		}
		var i = e,
			o = i.offsetWidth,
			s = i.offsetHeight;
		return !(o || s || e.getClientRects().length);
	},
	q = function (e) {
		var t;
		if (e instanceof Element) return !0;
		var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
		return !!(r && e instanceof r.Element);
	},
	Xe = function (e) {
		switch (e.tagName) {
			case 'INPUT':
				if (e.type !== 'image') break;
			case 'VIDEO':
			case 'AUDIO':
			case 'EMBED':
			case 'OBJECT':
			case 'CANVAS':
			case 'IFRAME':
			case 'IMG':
				return !0;
		}
		return !1;
	},
	g = typeof window < 'u' ? window : {},
	w = new WeakMap(),
	G = /auto|scroll/,
	qe = /^tb|vertical/,
	Ge = /msie|trident/i.test(g.navigator && g.navigator.userAgent),
	a = function (e) {
		return parseFloat(e || '0');
	},
	b = function (e, t, r) {
		return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Ne((r ? t : e) || 0, (r ? e : t) || 0);
	},
	U = v({
		devicePixelContentBoxSize: b(),
		borderBoxSize: b(),
		contentBoxSize: b(),
		contentRect: new se(0, 0, 0, 0),
	}),
	ce = function (e, t) {
		if ((t === void 0 && (t = !1), w.has(e) && !t)) return w.get(e);
		if (ae(e)) return w.set(e, U), U;
		var r = getComputedStyle(e),
			n = H(e) && e.ownerSVGElement && e.getBBox(),
			i = !Ge && r.boxSizing === 'border-box',
			o = qe.test(r.writingMode || ''),
			s = !n && G.test(r.overflowY || ''),
			u = !n && G.test(r.overflowX || ''),
			h = n ? 0 : a(r.paddingTop),
			c = n ? 0 : a(r.paddingRight),
			T = n ? 0 : a(r.paddingBottom),
			p = n ? 0 : a(r.paddingLeft),
			xe = n ? 0 : a(r.borderTopWidth),
			we = n ? 0 : a(r.borderRightWidth),
			ze = n ? 0 : a(r.borderBottomWidth),
			Re = n ? 0 : a(r.borderLeftWidth),
			I = p + c,
			P = h + T,
			E = Re + we,
			B = xe + ze,
			$ = u ? e.offsetHeight - B - e.clientHeight : 0,
			F = s ? e.offsetWidth - E - e.clientWidth : 0,
			Se = i ? I + E : 0,
			Oe = i ? P + B : 0,
			y = n ? n.width : a(r.width) - Se - F,
			x = n ? n.height : a(r.height) - Oe - $,
			Te = y + I + F + E,
			Ee = x + P + $ + B,
			W = v({
				devicePixelContentBoxSize: b(Math.round(y * devicePixelRatio), Math.round(x * devicePixelRatio), o),
				borderBoxSize: b(Te, Ee, o),
				contentBoxSize: b(y, x, o),
				contentRect: new se(p, h, y, x),
			});
		return w.set(e, W), W;
	},
	ue = function (e, t, r) {
		var n = ce(e, r),
			i = n.borderBoxSize,
			o = n.contentBoxSize,
			s = n.devicePixelContentBoxSize;
		switch (t) {
			case m.DEVICE_PIXEL_CONTENT_BOX:
				return s;
			case m.BORDER_BOX:
				return i;
			default:
				return o;
		}
	},
	Ue = (function () {
		function e(t) {
			var r = ce(t);
			(this.target = t),
				(this.contentRect = r.contentRect),
				(this.borderBoxSize = v([r.borderBoxSize])),
				(this.contentBoxSize = v([r.contentBoxSize])),
				(this.devicePixelContentBoxSize = v([r.devicePixelContentBoxSize]));
		}
		return e;
	})(),
	le = function (e) {
		if (ae(e)) return 1 / 0;
		for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
		return t;
	},
	je = function () {
		var e = 1 / 0,
			t = [];
		f.forEach(function (s) {
			if (s.activeTargets.length !== 0) {
				var u = [];
				s.activeTargets.forEach(function (c) {
					var T = new Ue(c.target),
						p = le(c.target);
					u.push(T), (c.lastReportedSize = ue(c.target, c.observedBox)), p < e && (e = p);
				}),
					t.push(function () {
						s.callback.call(s.observer, u, s.observer);
					}),
					s.activeTargets.splice(0, s.activeTargets.length);
			}
		});
		for (var r = 0, n = t; r < n.length; r++) {
			var i = n[r];
			i();
		}
		return e;
	},
	j = function (e) {
		f.forEach(function (r) {
			r.activeTargets.splice(0, r.activeTargets.length),
				r.skippedTargets.splice(0, r.skippedTargets.length),
				r.observationTargets.forEach(function (i) {
					i.isActive() && (le(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
				});
		});
	},
	Je = function () {
		var e = 0;
		for (j(e); We(); ) (e = je()), j(e);
		return _e() && Ve(), e > 0;
	},
	k,
	de = [],
	Ze = function () {
		return de.splice(0).forEach(function (e) {
			return e();
		});
	},
	Ye = function (e) {
		if (!k) {
			var t = 0,
				r = document.createTextNode(''),
				n = { characterData: !0 };
			new MutationObserver(function () {
				return Ze();
			}).observe(r, n),
				(k = function () {
					r.textContent = ''.concat(t ? t-- : t++);
				});
		}
		de.push(e), k();
	},
	Ke = function (e) {
		Ye(function () {
			requestAnimationFrame(e);
		});
	},
	S = 0,
	Qe = function () {
		return !!S;
	},
	er = 250,
	rr = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
	J = [
		'resize',
		'load',
		'transitionend',
		'animationend',
		'animationstart',
		'animationiteration',
		'keyup',
		'keydown',
		'mouseup',
		'mousedown',
		'mouseover',
		'mouseout',
		'blur',
		'focus',
	],
	Z = function (e) {
		return e === void 0 && (e = 0), Date.now() + e;
	},
	M = !1,
	tr = (function () {
		function e() {
			var t = this;
			(this.stopped = !0),
				(this.listener = function () {
					return t.schedule();
				});
		}
		return (
			(e.prototype.run = function (t) {
				var r = this;
				if ((t === void 0 && (t = er), !M)) {
					M = !0;
					var n = Z(t);
					Ke(function () {
						var i = !1;
						try {
							i = Je();
						} finally {
							if (((M = !1), (t = n - Z()), !Qe())) return;
							i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
						}
					});
				}
			}),
			(e.prototype.schedule = function () {
				this.stop(), this.run();
			}),
			(e.prototype.observe = function () {
				var t = this,
					r = function () {
						return t.observer && t.observer.observe(document.body, rr);
					};
				document.body ? r() : g.addEventListener('DOMContentLoaded', r);
			}),
			(e.prototype.start = function () {
				var t = this;
				this.stopped &&
					((this.stopped = !1),
					(this.observer = new MutationObserver(this.listener)),
					this.observe(),
					J.forEach(function (r) {
						return g.addEventListener(r, t.listener, !0);
					}));
			}),
			(e.prototype.stop = function () {
				var t = this;
				this.stopped ||
					(this.observer && this.observer.disconnect(),
					J.forEach(function (r) {
						return g.removeEventListener(r, t.listener, !0);
					}),
					(this.stopped = !0));
			}),
			e
		);
	})(),
	A = new tr(),
	Y = function (e) {
		!S && e > 0 && A.start(), (S += e), !S && A.stop();
	},
	nr = function (e) {
		return !H(e) && !Xe(e) && getComputedStyle(e).display === 'inline';
	},
	ir = (function () {
		function e(t, r) {
			(this.target = t), (this.observedBox = r || m.CONTENT_BOX), (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
		}
		return (
			(e.prototype.isActive = function () {
				var t = ue(this.target, this.observedBox, !0);
				return (
					nr(this.target) && (this.lastReportedSize = t),
					this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
				);
			}),
			e
		);
	})(),
	or = (function () {
		function e(t, r) {
			(this.activeTargets = []), (this.skippedTargets = []), (this.observationTargets = []), (this.observer = t), (this.callback = r);
		}
		return e;
	})(),
	z = new WeakMap(),
	K = function (e, t) {
		for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
		return -1;
	},
	R = (function () {
		function e() {}
		return (
			(e.connect = function (t, r) {
				var n = new or(t, r);
				z.set(t, n);
			}),
			(e.observe = function (t, r, n) {
				var i = z.get(t),
					o = i.observationTargets.length === 0;
				K(i.observationTargets, r) < 0 && (o && f.push(i), i.observationTargets.push(new ir(r, n && n.box)), Y(1), A.schedule());
			}),
			(e.unobserve = function (t, r) {
				var n = z.get(t),
					i = K(n.observationTargets, r),
					o = n.observationTargets.length === 1;
				i >= 0 && (o && f.splice(f.indexOf(n), 1), n.observationTargets.splice(i, 1), Y(-1));
			}),
			(e.disconnect = function (t) {
				var r = this,
					n = z.get(t);
				n.observationTargets.slice().forEach(function (i) {
					return r.unobserve(t, i.target);
				}),
					n.activeTargets.splice(0, n.activeTargets.length);
			}),
			e
		);
	})(),
	sr = (function () {
		function e(t) {
			if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
			if (typeof t != 'function')
				throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
			R.connect(this, t);
		}
		return (
			(e.prototype.observe = function (t, r) {
				if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!q(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
				R.observe(this, t, r);
			}),
			(e.prototype.unobserve = function (t) {
				if (arguments.length === 0)
					throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!q(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
				R.unobserve(this, t);
			}),
			(e.prototype.disconnect = function () {
				R.disconnect(this);
			}),
			(e.toString = function () {
				return 'function ResizeObserver () { [polyfill code] }';
			}),
			e
		);
	})();
class ar {
	constructor() {
		(this.handleResize = this.handleResize.bind(this)),
			(this.observer = new ((typeof window < 'u' && window.ResizeObserver) || sr)(this.handleResize)),
			(this.elHandlersMap = new Map());
	}
	handleResize(t) {
		for (const r of t) {
			const n = this.elHandlersMap.get(r.target);
			n !== void 0 && n(r);
		}
	}
	registerHandler(t, r) {
		this.elHandlersMap.set(t, r), this.observer.observe(t);
	}
	unregisterHandler(t) {
		this.elHandlersMap.has(t) && (this.elHandlersMap.delete(t), this.observer.unobserve(t));
	}
}
const Q = new ar(),
	et = O({
		name: 'ResizeObserver',
		props: { onResize: Function },
		setup(e) {
			let t = !1;
			const r = te().proxy;
			function n(i) {
				const { onResize: o } = e;
				o !== void 0 && o(i);
			}
			Me(() => {
				const i = r.$el;
				if (i === void 0) {
					N('resize-observer', '$el does not exist.');
					return;
				}
				if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== '') {
					N('resize-observer', '$el can not be observed (it may be a text node).');
					return;
				}
				i.nextElementSibling !== null && (Q.registerHandler(i.nextElementSibling, n), (t = !0));
			}),
				Ae(() => {
					t && Q.unregisterHandler(r.$el.nextElementSibling);
				});
		},
		render() {
			return Le(this.$slots, 'default');
		},
	});
var cr = '[object Symbol]';
function ur(e) {
	return typeof e == 'symbol' || (De(e) && He(e) == cr);
}
function lr(e, t) {
	for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e);
	return i;
}
var dr = 1 / 0,
	ee = _ ? _.prototype : void 0,
	re = ee ? ee.toString : void 0;
function fe(e) {
	if (typeof e == 'string') return e;
	if (Ie(e)) return lr(e, fe) + '';
	if (ur(e)) return re ? re.call(e) : '';
	var t = e + '';
	return t == '0' && 1 / e == -dr ? '-0' : t;
}
function fr(e) {
	return e == null ? '' : fe(e);
}
function vr(e, t, r) {
	var n = -1,
		i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r), r < 0 && (r += i), (i = t > r ? 0 : (r - t) >>> 0), (t >>>= 0);
	for (var o = Array(i); ++n < i; ) o[n] = e[n + t];
	return o;
}
function hr(e, t, r) {
	var n = e.length;
	return (r = r === void 0 ? n : r), !t && r >= n ? e : vr(e, t, r);
}
var br = '\\ud800-\\udfff',
	pr = '\\u0300-\\u036f',
	gr = '\\ufe20-\\ufe2f',
	mr = '\\u20d0-\\u20ff',
	yr = pr + gr + mr,
	xr = '\\ufe0e\\ufe0f',
	wr = '\\u200d',
	zr = RegExp('[' + wr + br + yr + xr + ']');
function ve(e) {
	return zr.test(e);
}
function Rr(e) {
	return e.split('');
}
var he = '\\ud800-\\udfff',
	Sr = '\\u0300-\\u036f',
	Or = '\\ufe20-\\ufe2f',
	Tr = '\\u20d0-\\u20ff',
	Er = Sr + Or + Tr,
	Br = '\\ufe0e\\ufe0f',
	Cr = '[' + he + ']',
	L = '[' + Er + ']',
	D = '\\ud83c[\\udffb-\\udfff]',
	kr = '(?:' + L + '|' + D + ')',
	be = '[^' + he + ']',
	pe = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	ge = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	Mr = '\\u200d',
	me = kr + '?',
	ye = '[' + Br + ']?',
	Ar = '(?:' + Mr + '(?:' + [be, pe, ge].join('|') + ')' + ye + me + ')*',
	Lr = ye + me + Ar,
	Dr = '(?:' + [be + L + '?', L, pe, ge, Cr].join('|') + ')',
	Hr = RegExp(D + '(?=' + D + ')|' + Dr + Lr, 'g');
function Ir(e) {
	return e.match(Hr) || [];
}
function Pr(e) {
	return ve(e) ? Ir(e) : Rr(e);
}
function $r(e) {
	return function (t) {
		t = fr(t);
		var r = ve(t) ? Pr(t) : void 0,
			n = r ? r[0] : t.charAt(0),
			i = r ? hr(r, 1).join('') : t.slice(1);
		return n[e]() + i;
	};
}
var Fr = $r('toUpperCase');
const Wr = Fr;
function _r(e, t) {
	return O({
		name: Wr(e),
		setup() {
			var r;
			const n = (r = Pe($e, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
			return () => {
				var i;
				const o = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
				return o ? o() : t;
			};
		},
	});
}
const Vr = _r(
		'close',
		d(
			'svg',
			{
				viewBox: '0 0 12 12',
				version: '1.1',
				xmlns: 'http://www.w3.org/2000/svg',
				'aria-hidden': !0,
			},
			d(
				'g',
				{
					stroke: 'none',
					'stroke-width': '1',
					fill: 'none',
					'fill-rule': 'evenodd',
				},
				d(
					'g',
					{ fill: 'currentColor', 'fill-rule': 'nonzero' },
					d('path', {
						d: 'M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z',
					}),
				),
			),
		),
	),
	Nr = ne(
		'base-icon',
		`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
		[
			l(
				'svg',
				`
 height: 1em;
 width: 1em;
 `,
			),
		],
	),
	Xr = O({
		name: 'BaseIcon',
		props: {
			role: String,
			ariaLabel: String,
			ariaDisabled: { type: Boolean, default: void 0 },
			ariaHidden: { type: Boolean, default: void 0 },
			clsPrefix: { type: String, required: !0 },
			onClick: Function,
			onMousedown: Function,
			onMouseup: Function,
		},
		setup(e) {
			oe('-base-icon', Nr, ie(e, 'clsPrefix'));
		},
		render() {
			return d(
				'i',
				{
					class: `${this.clsPrefix}-base-icon`,
					onClick: this.onClick,
					onMousedown: this.onMousedown,
					onMouseup: this.onMouseup,
					role: this.role,
					'aria-label': this.ariaLabel,
					'aria-hidden': this.ariaHidden,
					'aria-disabled': this.ariaDisabled,
				},
				this.$slots,
			);
		},
	}),
	qr = ne(
		'base-close',
		`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,
		[
			C(
				'absolute',
				`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `,
			),
			l(
				'&::before',
				`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `,
			),
			Fe('disabled', [
				l(
					'&:hover',
					`
 color: var(--n-close-icon-color-hover);
 `,
				),
				l(
					'&:hover::before',
					`
 background-color: var(--n-close-color-hover);
 `,
				),
				l(
					'&:focus::before',
					`
 background-color: var(--n-close-color-hover);
 `,
				),
				l(
					'&:active',
					`
 color: var(--n-close-icon-color-pressed);
 `,
				),
				l(
					'&:active::before',
					`
 background-color: var(--n-close-color-pressed);
 `,
				),
			]),
			C(
				'disabled',
				`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `,
			),
			C('round', [
				l(
					'&::before',
					`
 border-radius: 50%;
 `,
				),
			]),
		],
	),
	rt = O({
		name: 'BaseClose',
		props: {
			isButtonTag: { type: Boolean, default: !0 },
			clsPrefix: { type: String, required: !0 },
			disabled: { type: Boolean, default: void 0 },
			focusable: { type: Boolean, default: !0 },
			round: Boolean,
			onClick: Function,
			absolute: Boolean,
		},
		setup(e) {
			return (
				oe('-base-close', qr, ie(e, 'clsPrefix')),
				() => {
					const { clsPrefix: t, disabled: r, absolute: n, round: i, isButtonTag: o } = e;
					return d(
						o ? 'button' : 'div',
						{
							type: o ? 'button' : void 0,
							tabindex: r || !e.focusable ? -1 : 0,
							'aria-disabled': r,
							'aria-label': 'close',
							role: o ? void 0 : 'button',
							disabled: r,
							class: [`${t}-base-close`, n && `${t}-base-close--absolute`, r && `${t}-base-close--disabled`, i && `${t}-base-close--round`],
							onMousedown: u => {
								e.focusable || u.preventDefault();
							},
							onClick: e.onClick,
						},
						d(Xr, { clsPrefix: t }, { default: () => d(Vr, null) }),
					);
				}
			);
		},
	});
export { Xr as N, et as V, lr as a, Qr as b, rt as c, jr as d, Yr as e, V as f, Zr as g, Kr as h, ur as i, Jr as p, fr as t };
