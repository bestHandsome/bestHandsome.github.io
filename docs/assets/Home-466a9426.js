import { s as be } from './request-38e35c3f.js';
import {
	aa as Y,
	l as y,
	r as E,
	e as ge,
	Z as u,
	Y as N,
	aB as he,
	_ as g,
	$ as m,
	ad as _e,
	ae as xe,
	d as O,
	a1 as Z,
	a0 as J,
	m as b,
	aC as Se,
	f as ye,
	i as we,
	j as Re,
	u as I,
	g as Ce,
	p as $e,
	t as H,
	a5 as Q,
	ab as X,
	as as ze,
	am as V,
	an as q,
	ao as T,
	at as U,
	ax as A,
	F as ke,
	aD as Be,
	aw as Ee,
	au as Ge,
	aE as Ne,
} from './index-06154a72.js';
import { u as Te, r as B, c as Me, d as F, a as Pe } from './use-rtl-cc014dc1.js';
import { u as je } from './use-css-vars-class-b6cc7c20.js';
import { b as De, g as Ie, c as Oe, p as G, V as Ve, f as Ae } from './Close-cd2efd8a.js';
import { g as Fe } from './get-slot-1efb97e5.js';
import { b as Le } from './next-frame-once-7035a838.js';
import { _ as He } from './_plugin-vue_export-helper-c27b6911.js';
function Qe(e) {
	if (typeof e == 'number') return { '': e.toString() };
	const r = {};
	return (
		e.split(/ +/).forEach(a => {
			if (a === '') return;
			const [o, n] = a.split(':');
			n === void 0 ? (r[''] = o) : (r[o] = n);
		}),
		r
	);
}
function M(e, r) {
	var a;
	if (e == null) return;
	const o = Qe(e);
	if (r === void 0) return o[''];
	if (typeof r == 'string') return (a = o[r]) !== null && a !== void 0 ? a : o[''];
	if (Array.isArray(r)) {
		for (let n = r.length - 1; n >= 0; --n) {
			const s = r[n];
			if (s in o) return o[s];
		}
		return o[''];
	} else {
		let n,
			s = -1;
		return (
			Object.keys(o).forEach(d => {
				const i = Number(d);
				!Number.isNaN(i) && r >= i && i >= s && ((s = i), (n = o[d]));
			}),
			n
		);
	}
}
function Xe(e) {
	var r;
	const a = (r = e.dirs) === null || r === void 0 ? void 0 : r.find(({ dir: o }) => o === Y);
	return !!(a && a.value === !1);
}
const qe = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, '2xl': 1920 };
function Ue(e) {
	return `(min-width: ${e}px)`;
}
const P = {};
function We(e = qe) {
	if (!De) return y(() => []);
	if (typeof window.matchMedia != 'function') return y(() => []);
	const r = E({}),
		a = Object.keys(e),
		o = (n, s) => {
			n.matches ? (r.value[s] = !0) : (r.value[s] = !1);
		};
	return (
		a.forEach(n => {
			const s = e[n];
			let d, i;
			P[s] === void 0
				? ((d = window.matchMedia(Ue(s))),
				  d.addEventListener
						? d.addEventListener('change', l => {
								i.forEach(t => {
									t(l, n);
								});
						  })
						: d.addListener &&
						  d.addListener(l => {
								i.forEach(t => {
									t(l, n);
								});
						  }),
				  (i = new Set()),
				  (P[s] = { mql: d, cbs: i }))
				: ((d = P[s].mql), (i = P[s].cbs)),
				i.add(o),
				d.matches &&
					i.forEach(l => {
						l(d, n);
					});
		}),
		ge(() => {
			a.forEach(n => {
				const { cbs: s } = P[e[n]];
				s.has(o) && s.delete(o);
			});
		}),
		y(() => {
			const { value: n } = r;
			return a.filter(s => n[s]);
		})
	);
}
const Ye = u([
		N(
			'card',
			`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
			[
				he({ background: 'var(--n-color-modal)' }),
				g('hoverable', [u('&:hover', 'box-shadow: var(--n-box-shadow);')]),
				g('content-segmented', [u('>', [m('content', { paddingTop: 'var(--n-padding-bottom)' })])]),
				g('content-soft-segmented', [
					u('>', [
						m(
							'content',
							`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `,
						),
					]),
				]),
				g('footer-segmented', [u('>', [m('footer', { paddingTop: 'var(--n-padding-bottom)' })])]),
				g('footer-soft-segmented', [
					u('>', [
						m(
							'footer',
							`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `,
						),
					]),
				]),
				u('>', [
					N(
						'card-header',
						`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,
						[
							m(
								'main',
								`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `,
							),
							m(
								'extra',
								`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,
							),
							m(
								'close',
								`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,
							),
						],
					),
					m(
						'action',
						`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `,
					),
					m('content', 'flex: 1; min-width: 0;'),
					m(
						'content, footer',
						`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,
						[u('&:first-child', { paddingTop: 'var(--n-padding-bottom)' })],
					),
					m(
						'action',
						`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,
					),
				]),
				N(
					'card-cover',
					`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,
					[
						u(
							'img',
							`
 display: block;
 width: 100%;
 `,
						),
					],
				),
				g(
					'bordered',
					`
 border: 1px solid var(--n-border-color);
 `,
					[u('&:target', 'border-color: var(--n-color-target);')],
				),
				g('action-segmented', [
					u('>', [
						m('action', [
							u('&:not(:first-child)', {
								borderTop: '1px solid var(--n-border-color)',
							}),
						]),
					]),
				]),
				g('content-segmented, content-soft-segmented', [
					u('>', [
						m('content', { transition: 'border-color 0.3s var(--n-bezier)' }, [
							u('&:not(:first-child)', {
								borderTop: '1px solid var(--n-border-color)',
							}),
						]),
					]),
				]),
				g('footer-segmented, footer-soft-segmented', [
					u('>', [
						m('footer', { transition: 'border-color 0.3s var(--n-bezier)' }, [
							u('&:not(:first-child)', {
								borderTop: '1px solid var(--n-border-color)',
							}),
						]),
					]),
				]),
				g(
					'embedded',
					`
 background-color: var(--n-color-embedded);
 `,
				),
			],
		),
		_e(
			N(
				'card',
				`
 background: var(--n-color-modal);
 `,
				[
					g(
						'embedded',
						`
 background-color: var(--n-color-embedded-modal);
 `,
					),
				],
			),
		),
		xe(
			N(
				'card',
				`
 background: var(--n-color-popover);
 `,
				[
					g(
						'embedded',
						`
 background-color: var(--n-color-embedded-popover);
 `,
					),
				],
			),
		),
	]),
	Ze = {
		title: String,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		headerExtraStyle: [Object, String],
		footerStyle: [Object, String],
		embedded: Boolean,
		segmented: { type: [Boolean, Object], default: !1 },
		size: { type: String, default: 'medium' },
		bordered: { type: Boolean, default: !0 },
		closable: Boolean,
		hoverable: Boolean,
		role: String,
		onClose: [Function, Array],
		tag: { type: String, default: 'div' },
	},
	Je = Object.assign(Object.assign({}, J.props), Ze),
	Ke = O({
		name: 'Card',
		props: Je,
		setup(e) {
			const r = () => {
					const { onClose: t } = e;
					t && Me(t);
				},
				{ inlineThemeDisabled: a, mergedClsPrefixRef: o, mergedRtlRef: n } = Z(e),
				s = J('Card', '-card', Ye, Se, e, o),
				d = Te('Card', n, o),
				i = y(() => {
					const { size: t } = e,
						{
							self: {
								color: p,
								colorModal: w,
								colorTarget: _,
								textColor: z,
								titleTextColor: R,
								titleFontWeight: v,
								borderColor: x,
								actionColor: f,
								borderRadius: c,
								lineHeight: k,
								closeIconColor: S,
								closeIconColorHover: h,
								closeIconColorPressed: C,
								closeColorHover: j,
								closeColorPressed: D,
								closeBorderRadius: $,
								closeIconSize: te,
								closeSize: re,
								boxShadow: ne,
								colorPopover: se,
								colorEmbedded: ae,
								colorEmbeddedModal: ie,
								colorEmbeddedPopover: le,
								[F('padding', t)]: de,
								[F('fontSize', t)]: ce,
								[F('titleFontSize', t)]: fe,
							},
							common: { cubicBezierEaseInOut: ue },
						} = s.value,
						{ top: pe, left: ve, bottom: me } = Ie(de);
					return {
						'--n-bezier': ue,
						'--n-border-radius': c,
						'--n-color': p,
						'--n-color-modal': w,
						'--n-color-popover': se,
						'--n-color-embedded': ae,
						'--n-color-embedded-modal': ie,
						'--n-color-embedded-popover': le,
						'--n-color-target': _,
						'--n-text-color': z,
						'--n-line-height': k,
						'--n-action-color': f,
						'--n-title-text-color': R,
						'--n-title-font-weight': v,
						'--n-close-icon-color': S,
						'--n-close-icon-color-hover': h,
						'--n-close-icon-color-pressed': C,
						'--n-close-color-hover': j,
						'--n-close-color-pressed': D,
						'--n-border-color': x,
						'--n-box-shadow': ne,
						'--n-padding-top': pe,
						'--n-padding-bottom': me,
						'--n-padding-left': ve,
						'--n-font-size': ce,
						'--n-title-font-size': fe,
						'--n-close-size': re,
						'--n-close-icon-size': te,
						'--n-close-border-radius': $,
					};
				}),
				l = a
					? je(
							'card',
							y(() => e.size[0]),
							i,
							e,
					  )
					: void 0;
			return {
				rtlEnabled: d,
				mergedClsPrefix: o,
				mergedTheme: s,
				handleCloseClick: r,
				cssVars: a ? void 0 : i,
				themeClass: l == null ? void 0 : l.themeClass,
				onRender: l == null ? void 0 : l.onRender,
			};
		},
		render() {
			const { segmented: e, bordered: r, hoverable: a, mergedClsPrefix: o, rtlEnabled: n, onRender: s, embedded: d, tag: i, $slots: l } = this;
			return (
				s == null || s(),
				b(
					i,
					{
						class: [
							`${o}-card`,
							this.themeClass,
							d && `${o}-card--embedded`,
							{
								[`${o}-card--rtl`]: n,
								[`${o}-card--content${typeof e != 'boolean' && e.content === 'soft' ? '-soft' : ''}-segmented`]: e === !0 || (e !== !1 && e.content),
								[`${o}-card--footer${typeof e != 'boolean' && e.footer === 'soft' ? '-soft' : ''}-segmented`]: e === !0 || (e !== !1 && e.footer),
								[`${o}-card--action-segmented`]: e === !0 || (e !== !1 && e.action),
								[`${o}-card--bordered`]: r,
								[`${o}-card--hoverable`]: a,
							},
						],
						style: this.cssVars,
						role: this.role,
					},
					B(l.cover, t => t && b('div', { class: `${o}-card-cover`, role: 'none' }, t)),
					B(l.header, t =>
						t || this.title || this.closable
							? b(
									'div',
									{ class: `${o}-card-header`, style: this.headerStyle },
									b('div', { class: `${o}-card-header__main`, role: 'heading' }, t || this.title),
									B(
										l['header-extra'],
										p =>
											p &&
											b(
												'div',
												{
													class: `${o}-card-header__extra`,
													style: this.headerExtraStyle,
												},
												p,
											),
									),
									this.closable
										? b(Oe, {
												clsPrefix: o,
												class: `${o}-card-header__close`,
												onClick: this.handleCloseClick,
												absolute: !0,
										  })
										: null,
							  )
							: null,
					),
					B(
						l.default,
						t =>
							t &&
							b(
								'div',
								{
									class: `${o}-card__content`,
									style: this.contentStyle,
									role: 'none',
								},
								t,
							),
					),
					B(
						l.footer,
						t =>
							t && [
								b(
									'div',
									{
										class: `${o}-card__footer`,
										style: this.footerStyle,
										role: 'none',
									},
									t,
								),
							],
					),
					B(l.action, t => t && b('div', { class: `${o}-card__action`, role: 'none' }, t)),
				)
			);
		},
	}),
	W = 1,
	K = ye('n-grid'),
	ee = 1,
	eo = {
		span: { type: [Number, String], default: ee },
		offset: { type: [Number, String], default: 0 },
		suffix: Boolean,
		privateOffset: Number,
		privateSpan: Number,
		privateColStart: Number,
		privateShow: { type: Boolean, default: !0 },
	},
	oo = O({
		__GRID_ITEM__: !0,
		name: 'GridItem',
		alias: ['Gi'],
		props: eo,
		setup() {
			const { isSsrRef: e, xGapRef: r, itemStyleRef: a, overflowRef: o, layoutShiftDisabledRef: n } = we(K),
				s = Re();
			return {
				overflow: o,
				itemStyle: a,
				layoutShiftDisabled: n,
				mergedXGap: y(() => G(r.value || 0)),
				deriveStyle: () => {
					e.value;
					const { privateSpan: d = ee, privateShow: i = !0, privateColStart: l = void 0, privateOffset: t = 0 } = s.vnode.props,
						{ value: p } = r,
						w = G(p || 0);
					return {
						display: i ? '' : 'none',
						gridColumn: `${l ?? `span ${d}`} / span ${d}`,
						marginLeft: t ? `calc((100% - (${d} - 1) * ${w}) / ${d} * ${t} + ${w} * ${t})` : '',
					};
				},
			};
		},
		render() {
			var e, r;
			if (this.layoutShiftDisabled) {
				const { span: a, offset: o, mergedXGap: n } = this;
				return b(
					'div',
					{
						style: {
							gridColumn: `span ${a} / span ${a}`,
							marginLeft: o ? `calc((100% - (${a} - 1) * ${n}) / ${a} * ${o} + ${n} * ${o})` : '',
						},
					},
					this.$slots,
				);
			}
			return b(
				'div',
				{ style: [this.itemStyle, this.deriveStyle()] },
				(r = (e = this.$slots).default) === null || r === void 0 ? void 0 : r.call(e, { overflow: this.overflow }),
			);
		},
	}),
	to = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 },
	oe = 24,
	L = '__ssr__',
	ro = {
		layoutShiftDisabled: Boolean,
		responsive: { type: [String, Boolean], default: 'self' },
		cols: { type: [Number, String], default: oe },
		itemResponsive: Boolean,
		collapsed: Boolean,
		collapsedRows: { type: Number, default: 1 },
		itemStyle: [Object, String],
		xGap: { type: [Number, String], default: 0 },
		yGap: { type: [Number, String], default: 0 },
	},
	no = O({
		name: 'Grid',
		inheritAttrs: !1,
		props: ro,
		setup(e) {
			const { mergedClsPrefixRef: r, mergedBreakpointsRef: a } = Z(e),
				o = /^\d+$/,
				n = E(void 0),
				s = We((a == null ? void 0 : a.value) || to),
				d = I(() => !!(e.itemResponsive || !o.test(e.cols.toString()) || !o.test(e.xGap.toString()) || !o.test(e.yGap.toString()))),
				i = y(() => {
					if (d.value) return e.responsive === 'self' ? n.value : s.value;
				}),
				l = I(() => {
					var f;
					return (f = Number(M(e.cols.toString(), i.value))) !== null && f !== void 0 ? f : oe;
				}),
				t = I(() => M(e.xGap.toString(), i.value)),
				p = I(() => M(e.yGap.toString(), i.value)),
				w = f => {
					n.value = f.contentRect.width;
				},
				_ = f => {
					Le(w, f);
				},
				z = E(!1),
				R = y(() => {
					if (e.responsive === 'self') return _;
				}),
				v = E(!1),
				x = E();
			return (
				Ce(() => {
					const { value: f } = x;
					f && f.hasAttribute(L) && (f.removeAttribute(L), (v.value = !0));
				}),
				$e(K, {
					layoutShiftDisabledRef: H(e, 'layoutShiftDisabled'),
					isSsrRef: v,
					itemStyleRef: H(e, 'itemStyle'),
					xGapRef: t,
					overflowRef: z,
				}),
				{
					isSsr: !Pe,
					contentEl: x,
					mergedClsPrefix: r,
					style: y(() =>
						e.layoutShiftDisabled
							? {
									width: '100%',
									display: 'grid',
									gridTemplateColumns: `repeat(${e.cols}, minmax(0, 1fr))`,
									columnGap: G(e.xGap),
									rowGap: G(e.yGap),
							  }
							: {
									width: '100%',
									display: 'grid',
									gridTemplateColumns: `repeat(${l.value}, minmax(0, 1fr))`,
									columnGap: G(t.value),
									rowGap: G(p.value),
							  },
					),
					isResponsive: d,
					responsiveQuery: i,
					responsiveCols: l,
					handleResize: R,
					overflow: z,
				}
			);
		},
		render() {
			if (this.layoutShiftDisabled)
				return b(
					'div',
					Q(
						{
							ref: 'contentEl',
							class: `${this.mergedClsPrefix}-grid`,
							style: this.style,
						},
						this.$attrs,
					),
					this.$slots,
				);
			const e = () => {
				var r, a, o, n, s, d, i;
				this.overflow = !1;
				const l = Ae(Fe(this)),
					t = [],
					{ collapsed: p, collapsedRows: w, responsiveCols: _, responsiveQuery: z } = this;
				l.forEach(c => {
					var k, S, h, C;
					if (((k = c == null ? void 0 : c.type) === null || k === void 0 ? void 0 : k.__GRID_ITEM__) !== !0) return;
					if (Xe(c)) {
						const $ = X(c);
						$.props ? ($.props.privateShow = !1) : ($.props = { privateShow: !1 }), t.push({ child: $, rawChildSpan: 0 });
						return;
					}
					c.dirs = ((S = c.dirs) === null || S === void 0 ? void 0 : S.filter(({ dir: $ }) => $ !== Y)) || null;
					const j = X(c),
						D = Number((C = M((h = j.props) === null || h === void 0 ? void 0 : h.span, z)) !== null && C !== void 0 ? C : W);
					D !== 0 && t.push({ child: j, rawChildSpan: D });
				});
				let R = 0;
				const v = (r = t[t.length - 1]) === null || r === void 0 ? void 0 : r.child;
				if (v != null && v.props) {
					const c = (a = v.props) === null || a === void 0 ? void 0 : a.suffix;
					c !== void 0 &&
						c !== !1 &&
						((R = (n = (o = v.props) === null || o === void 0 ? void 0 : o.span) !== null && n !== void 0 ? n : W),
						(v.props.privateSpan = R),
						(v.props.privateColStart = _ + 1 - R),
						(v.props.privateShow = (s = v.props.privateShow) !== null && s !== void 0 ? s : !0));
				}
				let x = 0,
					f = !1;
				for (const { child: c, rawChildSpan: k } of t) {
					if ((f && (this.overflow = !0), !f)) {
						const S = Number((i = M((d = c.props) === null || d === void 0 ? void 0 : d.offset, z)) !== null && i !== void 0 ? i : 0),
							h = Math.min(k + S, _);
						if ((c.props ? ((c.props.privateSpan = h), (c.props.privateOffset = S)) : (c.props = { privateSpan: h, privateOffset: S }), p)) {
							const C = x % _;
							h + C > _ && (x += _ - C), h + x + R > w * _ ? (f = !0) : (x += h);
						}
					}
					f && (c.props ? c.props.privateShow !== !0 && (c.props.privateShow = !1) : (c.props = { privateShow: !1 }));
				}
				return b(
					'div',
					Q(
						{
							ref: 'contentEl',
							class: `${this.mergedClsPrefix}-grid`,
							style: this.style,
							[L]: this.isSsr || void 0,
						},
						this.$attrs,
					),
					t.map(({ child: c }) => c),
				);
			};
			return this.isResponsive && this.responsive === 'self' ? b(Ve, { onResize: this.handleResize }, { default: e }) : e();
		},
	});
function so() {
	return be({ url: '/banners?populate=*' });
}
const ao = {
		class: 'flex justify-center items-center text-center w-screen h-screen p-40 bg-color text-cyan-400',
	},
	io = ['href'],
	lo = { class: 'img-wrap relative h-0' },
	co = ['src'],
	fo = O({
		__name: 'Home',
		setup(e) {
			const r = ze(),
				a = () => r.push('/article');
			let o = E([]);
			return (
				(async () => {
					let s = await so();
					o.value = Ne(s.data);
				})(),
				(s, d) => {
					const i = Ke,
						l = oo,
						t = no;
					return (
						V(),
						q('div', ao, [
							T('div', null, [
								U(
									t,
									{ 'x-gap': '24', cols: 3, class: 'flex w-full' },
									{
										default: A(() => [
											(V(!0),
											q(
												ke,
												null,
												Be(
													Ge(o),
													p => (
														V(),
														Ee(
															l,
															{
																key: p.id,
																class: 'cursor-pointer border-separate',
															},
															{
																default: A(() => [
																	T(
																		'a',
																		{ href: p.url },
																		[
																			U(
																				i,
																				{
																					bordered: !1,
																					title: p.title,
																					class: 'h-80 w-80 text-center',
																				},
																				{
																					cover: A(() => [
																						T('div', lo, [
																							T(
																								'img',
																								{
																									class: 'absolute top-0 left-0 rounded-xl cover',
																									src: p.coverUrl,
																									alt: '',
																								},
																								null,
																								8,
																								co,
																							),
																						]),
																					]),
																					_: 2,
																				},
																				1032,
																				['title'],
																			),
																		],
																		8,
																		io,
																	),
																]),
																_: 2,
															},
															1024,
														)
													),
												),
												128,
											)),
										]),
										_: 1,
									},
								),
								T('div', { class: 'mt-20 text-4xl', onClick: a }, '开启我的私人梦幻之旅'),
							]),
						])
					);
				}
			);
		},
	});
const xo = He(fo, [['__scopeId', 'data-v-643ac14d']]);
export { xo as default };
