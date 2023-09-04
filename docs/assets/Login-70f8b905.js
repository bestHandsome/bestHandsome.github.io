import {
	Y as I,
	d as E,
	t as Be,
	r as S,
	e as Te,
	q as Pe,
	m as p,
	Z as f,
	a6 as ke,
	aX as re,
	f as Re,
	_ as g,
	$ as l,
	a7 as X,
	a0 as te,
	u as He,
	i as Ie,
	l as k,
	a1 as Ee,
	aY as Fe,
	ak as R,
	am as ne,
	an as ae,
	ao as Ne,
	aM as De,
	aZ as Oe,
	c as je,
	at as J,
	ax as Me,
	h as Ve,
	F as We,
} from './index-06154a72.js';
import { _ as Ke } from './_plugin-vue_export-helper-c27b6911.js';
import { e as Ge, a as F, u as qe, d as r, r as ee, i as Qe, c as Ye } from './use-rtl-cc014dc1.js';
import { a as Ae, c as oe, N as Le, b as Ze } from './Loading-9f5640cf.js';
import { u as Ue, N as Xe } from './FadeInExpandTransition-ac6c62cc.js';
import { u as Je } from './use-css-vars-class-b6cc7c20.js';
const eo = I(
		'base-wave',
		`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`,
	),
	oo = E({
		name: 'BaseWave',
		props: { clsPrefix: { type: String, required: !0 } },
		setup(e) {
			Ge('-base-wave', eo, Be(e, 'clsPrefix'));
			const d = S(null),
				h = S(!1);
			let c = null;
			return (
				Te(() => {
					c !== null && window.clearTimeout(c);
				}),
				{
					active: h,
					selfRef: d,
					play() {
						c !== null && (window.clearTimeout(c), (h.value = !1), (c = null)),
							Pe(() => {
								var v;
								(v = d.value) === null || v === void 0 || v.offsetHeight,
									(h.value = !0),
									(c = window.setTimeout(() => {
										(h.value = !1), (c = null);
									}, 1e3));
							});
					},
				}
			);
		},
		render() {
			const { clsPrefix: e } = this;
			return p('div', {
				ref: 'selfRef',
				'aria-hidden': !0,
				class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`],
			});
		},
	}),
	{ cubicBezierEaseInOut: C } = ke;
function ro({ duration: e = '.2s', delay: d = '.1s' } = {}) {
	return [
		f('&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to', { opacity: 1 }),
		f(
			'&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from',
			`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `,
		),
		f(
			'&.fade-in-width-expand-transition-leave-active',
			`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${d},
 margin-left ${e} ${C} ${d},
 margin-right ${e} ${C} ${d};
 `,
		),
		f(
			'&.fade-in-width-expand-transition-enter-active',
			`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${d},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `,
		),
	];
}
const to = F && 'chrome' in window;
F && navigator.userAgent.includes('Firefox');
const no = F && navigator.userAgent.includes('Safari') && !to;
function $(e) {
	return re(e, [255, 255, 255, 0.16]);
}
function H(e) {
	return re(e, [0, 0, 0, 0.12]);
}
const ao = Re('n-button-group'),
	io = f([
		I(
			'button',
			`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
			[
				g('color', [
					l('border', { borderColor: 'var(--n-border-color)' }),
					g('disabled', [l('border', { borderColor: 'var(--n-border-color-disabled)' })]),
					X('disabled', [
						f('&:focus', [l('state-border', { borderColor: 'var(--n-border-color-focus)' })]),
						f('&:hover', [l('state-border', { borderColor: 'var(--n-border-color-hover)' })]),
						f('&:active', [
							l('state-border', {
								borderColor: 'var(--n-border-color-pressed)',
							}),
						]),
						g('pressed', [
							l('state-border', {
								borderColor: 'var(--n-border-color-pressed)',
							}),
						]),
					]),
				]),
				g(
					'disabled',
					{
						backgroundColor: 'var(--n-color-disabled)',
						color: 'var(--n-text-color-disabled)',
					},
					[l('border', { border: 'var(--n-border-disabled)' })],
				),
				X('disabled', [
					f(
						'&:focus',
						{
							backgroundColor: 'var(--n-color-focus)',
							color: 'var(--n-text-color-focus)',
						},
						[l('state-border', { border: 'var(--n-border-focus)' })],
					),
					f(
						'&:hover',
						{
							backgroundColor: 'var(--n-color-hover)',
							color: 'var(--n-text-color-hover)',
						},
						[l('state-border', { border: 'var(--n-border-hover)' })],
					),
					f(
						'&:active',
						{
							backgroundColor: 'var(--n-color-pressed)',
							color: 'var(--n-text-color-pressed)',
						},
						[l('state-border', { border: 'var(--n-border-pressed)' })],
					),
					g(
						'pressed',
						{
							backgroundColor: 'var(--n-color-pressed)',
							color: 'var(--n-text-color-pressed)',
						},
						[l('state-border', { border: 'var(--n-border-pressed)' })],
					),
				]),
				g('loading', 'cursor: wait;'),
				I(
					'base-wave',
					`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,
					[
						g('active', {
							zIndex: 1,
							animationName: 'button-wave-spread, button-wave-opacity',
						}),
					],
				),
				F && 'MozBoxSizing' in document.createElement('div').style ? f('&::moz-focus-inner', { border: 0 }) : null,
				l(
					'border, state-border',
					`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `,
				),
				l('border', { border: 'var(--n-border)' }),
				l('state-border', {
					border: 'var(--n-border)',
					borderColor: '#0000',
					zIndex: 1,
				}),
				l(
					'icon',
					`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,
					[
						I(
							'icon-slot',
							`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,
							[Ae({ top: '50%', originalTransform: 'translateY(-50%)' })],
						),
						ro(),
					],
				),
				l(
					'content',
					`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,
					[f('~', [l('icon', { margin: 'var(--n-icon-margin)', marginRight: 0 })])],
				),
				g(
					'block',
					`
 display: flex;
 width: 100%;
 `,
				),
				g('dashed', [l('border, state-border', { borderStyle: 'dashed !important' })]),
				g('disabled', {
					cursor: 'not-allowed',
					opacity: 'var(--n-opacity-disabled)',
				}),
			],
		),
		f('@keyframes button-wave-spread', {
			from: { boxShadow: '0 0 0.5px 0 var(--n-ripple-color)' },
			to: { boxShadow: '0 0 0.5px 4.5px var(--n-ripple-color)' },
		}),
		f('@keyframes button-wave-opacity', {
			from: { opacity: 'var(--n-wave-opacity)' },
			to: { opacity: 0 },
		}),
	]),
	so = Object.assign(Object.assign({}, te.props), {
		color: String,
		textColor: String,
		text: Boolean,
		block: Boolean,
		loading: Boolean,
		disabled: Boolean,
		circle: Boolean,
		size: String,
		ghost: Boolean,
		round: Boolean,
		secondary: Boolean,
		tertiary: Boolean,
		quaternary: Boolean,
		strong: Boolean,
		focusable: { type: Boolean, default: !0 },
		keyboard: { type: Boolean, default: !0 },
		tag: { type: String, default: 'button' },
		type: { type: String, default: 'default' },
		dashed: Boolean,
		renderIcon: Function,
		iconPlacement: { type: String, default: 'left' },
		attrType: { type: String, default: 'button' },
		bordered: { type: Boolean, default: !0 },
		onClick: [Function, Array],
		nativeFocusBehavior: { type: Boolean, default: !no },
	}),
	lo = E({
		name: 'Button',
		props: so,
		setup(e) {
			const d = S(null),
				h = S(null),
				c = S(!1),
				v = He(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered),
				ie = Ie(ao, {}),
				{ mergedSizeRef: N } = Ue(
					{},
					{
						defaultSize: 'medium',
						mergedSize: t => {
							const { size: u } = e;
							if (u) return u;
							const { size: x } = ie;
							if (x) return x;
							const { mergedSize: o } = t || {};
							return o ? o.value : 'medium';
						},
					},
				),
				D = k(() => e.focusable && !e.disabled),
				se = t => {
					var u;
					D.value || t.preventDefault(),
						!e.nativeFocusBehavior &&
							(t.preventDefault(), !e.disabled && D.value && ((u = d.value) === null || u === void 0 || u.focus({ preventScroll: !0 })));
				},
				le = t => {
					var u;
					if (!e.disabled && !e.loading) {
						const { onClick: x } = e;
						x && Ye(x, t), e.text || (u = h.value) === null || u === void 0 || u.play();
					}
				},
				de = t => {
					switch (t.key) {
						case 'Enter':
							if (!e.keyboard) return;
							c.value = !1;
					}
				},
				ce = t => {
					switch (t.key) {
						case 'Enter':
							if (!e.keyboard || e.loading) {
								t.preventDefault();
								return;
							}
							c.value = !0;
					}
				},
				ue = () => {
					c.value = !1;
				},
				{ inlineThemeDisabled: Y, mergedClsPrefixRef: O, mergedRtlRef: be } = Ee(e),
				fe = te('Button', '-button', io, Fe, e, O),
				he = qe('Button', be, O),
				A = k(() => {
					const t = fe.value,
						{
							common: { cubicBezierEaseInOut: u, cubicBezierEaseOut: x },
							self: o,
						} = t,
						{ rippleDuration: j, opacityDisabled: B, fontWeight: M, fontWeightStrong: V } = o,
						m = N.value,
						{
							dashed: W,
							type: w,
							ghost: K,
							text: y,
							color: a,
							round: L,
							circle: G,
							textColor: z,
							secondary: ve,
							tertiary: Z,
							quaternary: pe,
							strong: me,
						} = e,
						ge = { 'font-weight': me ? V : M };
					let i = {
						'--n-color': 'initial',
						'--n-color-hover': 'initial',
						'--n-color-pressed': 'initial',
						'--n-color-focus': 'initial',
						'--n-color-disabled': 'initial',
						'--n-ripple-color': 'initial',
						'--n-text-color': 'initial',
						'--n-text-color-hover': 'initial',
						'--n-text-color-pressed': 'initial',
						'--n-text-color-focus': 'initial',
						'--n-text-color-disabled': 'initial',
					};
					const T = w === 'tertiary',
						U = w === 'default',
						n = T ? 'default' : w;
					if (y) {
						const s = z || a;
						i = {
							'--n-color': '#0000',
							'--n-color-hover': '#0000',
							'--n-color-pressed': '#0000',
							'--n-color-focus': '#0000',
							'--n-color-disabled': '#0000',
							'--n-ripple-color': '#0000',
							'--n-text-color': s || o[r('textColorText', n)],
							'--n-text-color-hover': s ? $(s) : o[r('textColorTextHover', n)],
							'--n-text-color-pressed': s ? H(s) : o[r('textColorTextPressed', n)],
							'--n-text-color-focus': s ? $(s) : o[r('textColorTextHover', n)],
							'--n-text-color-disabled': s || o[r('textColorTextDisabled', n)],
						};
					} else if (K || W) {
						const s = z || a;
						i = {
							'--n-color': '#0000',
							'--n-color-hover': '#0000',
							'--n-color-pressed': '#0000',
							'--n-color-focus': '#0000',
							'--n-color-disabled': '#0000',
							'--n-ripple-color': a || o[r('rippleColor', n)],
							'--n-text-color': s || o[r('textColorGhost', n)],
							'--n-text-color-hover': s ? $(s) : o[r('textColorGhostHover', n)],
							'--n-text-color-pressed': s ? H(s) : o[r('textColorGhostPressed', n)],
							'--n-text-color-focus': s ? $(s) : o[r('textColorGhostHover', n)],
							'--n-text-color-disabled': s || o[r('textColorGhostDisabled', n)],
						};
					} else if (ve) {
						const s = U ? o.textColor : T ? o.textColorTertiary : o[r('color', n)],
							b = a || s,
							P = w !== 'default' && w !== 'tertiary';
						i = {
							'--n-color': P ? R(b, { alpha: Number(o.colorOpacitySecondary) }) : o.colorSecondary,
							'--n-color-hover': P ? R(b, { alpha: Number(o.colorOpacitySecondaryHover) }) : o.colorSecondaryHover,
							'--n-color-pressed': P ? R(b, { alpha: Number(o.colorOpacitySecondaryPressed) }) : o.colorSecondaryPressed,
							'--n-color-focus': P ? R(b, { alpha: Number(o.colorOpacitySecondaryHover) }) : o.colorSecondaryHover,
							'--n-color-disabled': o.colorSecondary,
							'--n-ripple-color': '#0000',
							'--n-text-color': b,
							'--n-text-color-hover': b,
							'--n-text-color-pressed': b,
							'--n-text-color-focus': b,
							'--n-text-color-disabled': b,
						};
					} else if (Z || pe) {
						const s = U ? o.textColor : T ? o.textColorTertiary : o[r('color', n)],
							b = a || s;
						Z
							? ((i['--n-color'] = o.colorTertiary),
							  (i['--n-color-hover'] = o.colorTertiaryHover),
							  (i['--n-color-pressed'] = o.colorTertiaryPressed),
							  (i['--n-color-focus'] = o.colorSecondaryHover),
							  (i['--n-color-disabled'] = o.colorTertiary))
							: ((i['--n-color'] = o.colorQuaternary),
							  (i['--n-color-hover'] = o.colorQuaternaryHover),
							  (i['--n-color-pressed'] = o.colorQuaternaryPressed),
							  (i['--n-color-focus'] = o.colorQuaternaryHover),
							  (i['--n-color-disabled'] = o.colorQuaternary)),
							(i['--n-ripple-color'] = '#0000'),
							(i['--n-text-color'] = b),
							(i['--n-text-color-hover'] = b),
							(i['--n-text-color-pressed'] = b),
							(i['--n-text-color-focus'] = b),
							(i['--n-text-color-disabled'] = b);
					} else
						i = {
							'--n-color': a || o[r('color', n)],
							'--n-color-hover': a ? $(a) : o[r('colorHover', n)],
							'--n-color-pressed': a ? H(a) : o[r('colorPressed', n)],
							'--n-color-focus': a ? $(a) : o[r('colorFocus', n)],
							'--n-color-disabled': a || o[r('colorDisabled', n)],
							'--n-ripple-color': a || o[r('rippleColor', n)],
							'--n-text-color': z || (a ? o.textColorPrimary : T ? o.textColorTertiary : o[r('textColor', n)]),
							'--n-text-color-hover': z || (a ? o.textColorHoverPrimary : o[r('textColorHover', n)]),
							'--n-text-color-pressed': z || (a ? o.textColorPressedPrimary : o[r('textColorPressed', n)]),
							'--n-text-color-focus': z || (a ? o.textColorFocusPrimary : o[r('textColorFocus', n)]),
							'--n-text-color-disabled': z || (a ? o.textColorDisabledPrimary : o[r('textColorDisabled', n)]),
						};
					let q = {
						'--n-border': 'initial',
						'--n-border-hover': 'initial',
						'--n-border-pressed': 'initial',
						'--n-border-focus': 'initial',
						'--n-border-disabled': 'initial',
					};
					y
						? (q = {
								'--n-border': 'none',
								'--n-border-hover': 'none',
								'--n-border-pressed': 'none',
								'--n-border-focus': 'none',
								'--n-border-disabled': 'none',
						  })
						: (q = {
								'--n-border': o[r('border', n)],
								'--n-border-hover': o[r('borderHover', n)],
								'--n-border-pressed': o[r('borderPressed', n)],
								'--n-border-focus': o[r('borderFocus', n)],
								'--n-border-disabled': o[r('borderDisabled', n)],
						  });
					const {
							[r('height', m)]: Q,
							[r('fontSize', m)]: xe,
							[r('padding', m)]: ye,
							[r('paddingRound', m)]: Ce,
							[r('iconSize', m)]: we,
							[r('borderRadius', m)]: ze,
							[r('iconMargin', m)]: $e,
							waveOpacity: _e,
						} = o,
						Se = {
							'--n-width': G && !y ? Q : 'initial',
							'--n-height': y ? 'initial' : Q,
							'--n-font-size': xe,
							'--n-padding': G || y ? 'initial' : L ? Ce : ye,
							'--n-icon-size': we,
							'--n-icon-margin': $e,
							'--n-border-radius': y ? 'initial' : G || L ? Q : ze,
						};
					return Object.assign(
						Object.assign(
							Object.assign(
								Object.assign(
									{
										'--n-bezier': u,
										'--n-bezier-ease-out': x,
										'--n-ripple-duration': j,
										'--n-opacity-disabled': B,
										'--n-wave-opacity': _e,
									},
									ge,
								),
								i,
							),
							q,
						),
						Se,
					);
				}),
				_ = Y
					? Je(
							'button',
							k(() => {
								let t = '';
								const {
									dashed: u,
									type: x,
									ghost: o,
									text: j,
									color: B,
									round: M,
									circle: V,
									textColor: m,
									secondary: W,
									tertiary: w,
									quaternary: K,
									strong: y,
								} = e;
								u && (t += 'a'),
									o && (t += 'b'),
									j && (t += 'c'),
									M && (t += 'd'),
									V && (t += 'e'),
									W && (t += 'f'),
									w && (t += 'g'),
									K && (t += 'h'),
									y && (t += 'i'),
									B && (t += 'j' + oe(B)),
									m && (t += 'k' + oe(m));
								const { value: a } = N;
								return (t += 'l' + a[0]), (t += 'm' + x[0]), t;
							}),
							A,
							e,
					  )
					: void 0;
			return {
				selfElRef: d,
				waveElRef: h,
				mergedClsPrefix: O,
				mergedFocusable: D,
				mergedSize: N,
				showBorder: v,
				enterPressed: c,
				rtlEnabled: he,
				handleMousedown: se,
				handleKeydown: ce,
				handleBlur: ue,
				handleKeyup: de,
				handleClick: le,
				customColorCssVars: k(() => {
					const { color: t } = e;
					if (!t) return null;
					const u = $(t);
					return {
						'--n-border-color': t,
						'--n-border-color-hover': u,
						'--n-border-color-pressed': H(t),
						'--n-border-color-focus': u,
						'--n-border-color-disabled': t,
					};
				}),
				cssVars: Y ? void 0 : A,
				themeClass: _ == null ? void 0 : _.themeClass,
				onRender: _ == null ? void 0 : _.onRender,
			};
		},
		render() {
			const { mergedClsPrefix: e, tag: d, onRender: h } = this;
			h == null || h();
			const c = ee(this.$slots.default, v => v && p('span', { class: `${e}-button__content` }, v));
			return p(
				d,
				{
					ref: 'selfElRef',
					class: [
						this.themeClass,
						`${e}-button`,
						`${e}-button--${this.type}-type`,
						`${e}-button--${this.mergedSize}-type`,
						this.rtlEnabled && `${e}-button--rtl`,
						this.disabled && `${e}-button--disabled`,
						this.block && `${e}-button--block`,
						this.enterPressed && `${e}-button--pressed`,
						!this.text && this.dashed && `${e}-button--dashed`,
						this.color && `${e}-button--color`,
						this.secondary && `${e}-button--secondary`,
						this.loading && `${e}-button--loading`,
						this.ghost && `${e}-button--ghost`,
					],
					tabindex: this.mergedFocusable ? 0 : -1,
					type: this.attrType,
					style: this.cssVars,
					disabled: this.disabled,
					onClick: this.handleClick,
					onBlur: this.handleBlur,
					onMousedown: this.handleMousedown,
					onKeyup: this.handleKeyup,
					onKeydown: this.handleKeydown,
				},
				this.iconPlacement === 'right' && c,
				p(
					Xe,
					{ width: !0 },
					{
						default: () =>
							ee(
								this.$slots.icon,
								v =>
									(this.loading || this.renderIcon || v) &&
									p(
										'span',
										{
											class: `${e}-button__icon`,
											style: { margin: Qe(this.$slots.default) ? '0' : '' },
										},
										p(Le, null, {
											default: () =>
												this.loading
													? p(Ze, {
															clsPrefix: e,
															key: 'loading',
															class: `${e}-icon-slot`,
															strokeWidth: 20,
													  })
													: p(
															'div',
															{
																key: 'icon',
																class: `${e}-icon-slot`,
																role: 'none',
															},
															this.renderIcon ? this.renderIcon() : v,
													  ),
										}),
									),
							),
					},
				),
				this.iconPlacement === 'left' && c,
				this.text ? null : p(oo, { ref: 'waveElRef', clsPrefix: e }),
				this.showBorder
					? p('div', {
							'aria-hidden': !0,
							class: `${e}-button__border`,
							style: this.customColorCssVars,
					  })
					: null,
				this.showBorder
					? p('div', {
							'aria-hidden': !0,
							class: `${e}-button__state-border`,
							style: this.customColorCssVars,
					  })
					: null,
			);
		},
	}),
	co = lo,
	uo = E({
		__name: 'HelloWorld',
		props: { msg: {} },
		setup(e) {
			return (d, h) => (
				ne(),
				ae(
					'div',
					{
						class: Oe(['msg-wrap', d.msg && d.msg.length > 0 ? 'notification--slide' : null]),
					},
					[Ne('p', null, De(d.msg), 1)],
					2,
				)
			);
		},
	});
const bo = Ke(uo, [['__scopeId', 'data-v-52686e78']]),
	xo = E({
		__name: 'Login',
		setup(e) {
			return (
				S('title'),
				je({ name: 'ss' }),
				(d, h) => {
					const c = co;
					return (
						ne(),
						ae(
							We,
							null,
							[
								J(c, null, { default: Me(() => [Ve('naive-ui')]), _: 1 }),
								J(bo, {
									msg: 'sss',
									class: 'ss aa flex align-middle h-1 w-0 flex-1',
									id: 'ssdsss',
									name: 'sdssdsdds',
								}),
							],
							64,
						)
					);
				}
			);
		},
	});
export { xo as default };
