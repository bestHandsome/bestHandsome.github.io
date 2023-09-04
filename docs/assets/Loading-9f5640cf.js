import { r as g, g as f, b as h, d, m as r, a4 as m, Z as s, a6 as w, Y as p, $ as i, t as b } from './index-06154a72.js';
import { e as u } from './use-rtl-cc014dc1.js';
function z(t) {
	return t.replace(/#|\(|\)|,|\s/g, '_');
}
function k() {
	const t = g(!1);
	return (
		f(() => {
			t.value = !0;
		}),
		h(t)
	);
}
const v = d({
		name: 'BaseIconSwitchTransition',
		setup(t, { slots: e }) {
			const o = k();
			return () => r(m, { name: 'icon-switch-transition', appear: o.value }, e);
		},
	}),
	{ cubicBezierEaseInOut: y } = w;
function l({ originalTransform: t = '', left: e = 0, top: o = 0, transition: n = `all .3s ${y} !important` } = {}) {
	return [
		s('&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to', { transform: t + ' scale(0.75)', left: e, top: o, opacity: 0 }),
		s('&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from', { transform: `scale(1) ${t}`, left: e, top: o, opacity: 1 }),
		s('&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active', {
			transformOrigin: 'center',
			position: 'absolute',
			left: e,
			top: o,
			transition: n,
		}),
	];
}
const _ = s([
		s(
			'@keyframes loading-container-rotate',
			`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `,
		),
		s(
			'@keyframes loading-layer-rotate',
			`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `,
		),
		s(
			'@keyframes loading-left-spin',
			`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `,
		),
		s(
			'@keyframes loading-right-spin',
			`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `,
		),
		p(
			'base-loading',
			`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,
			[
				i(
					'transition-wrapper',
					`
 position: absolute;
 width: 100%;
 height: 100%;
 `,
					[l()],
				),
				i(
					'container',
					`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,
					[
						i(
							'svg',
							`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `,
						),
						i(
							'container-layer',
							`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,
							[
								i(
									'container-layer-left',
									`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,
									[
										i(
											'svg',
											`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `,
										),
									],
								),
								i(
									'container-layer-patch',
									`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,
									[
										i(
											'svg',
											`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `,
										),
									],
								),
								i(
									'container-layer-right',
									`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,
									[
										i(
											'svg',
											`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `,
										),
									],
								),
							],
						),
					],
				),
				i(
					'placeholder',
					`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
					[
						l({
							left: '50%',
							top: '50%',
							originalTransform: 'translateX(-50%) translateY(-50%)',
						}),
					],
				),
			],
		),
	]),
	$ = {
		strokeWidth: { type: Number, default: 28 },
		stroke: { type: String, default: void 0 },
	},
	N = d({
		name: 'BaseLoading',
		props: Object.assign(
			{
				clsPrefix: { type: String, required: !0 },
				show: { type: Boolean, default: !0 },
				scale: { type: Number, default: 1 },
				radius: { type: Number, default: 100 },
			},
			$,
		),
		setup(t) {
			u('-base-loading', _, b(t, 'clsPrefix'));
		},
		render() {
			const { clsPrefix: t, radius: e, strokeWidth: o, stroke: n, scale: c } = this,
				a = e / c;
			return r(
				'div',
				{ class: `${t}-base-loading`, role: 'img', 'aria-label': 'loading' },
				r(v, null, {
					default: () =>
						this.show
							? r(
									'div',
									{
										key: 'icon',
										class: `${t}-base-loading__transition-wrapper`,
									},
									r(
										'div',
										{ class: `${t}-base-loading__container` },
										r(
											'div',
											{ class: `${t}-base-loading__container-layer` },
											r(
												'div',
												{ class: `${t}-base-loading__container-layer-left` },
												r(
													'svg',
													{
														class: `${t}-base-loading__svg`,
														viewBox: `0 0 ${2 * a} ${2 * a}`,
														xmlns: 'http://www.w3.org/2000/svg',
														style: { color: n },
													},
													r('circle', {
														fill: 'none',
														stroke: 'currentColor',
														'stroke-width': o,
														'stroke-linecap': 'round',
														cx: a,
														cy: a,
														r: e - o / 2,
														'stroke-dasharray': 4.91 * e,
														'stroke-dashoffset': 2.46 * e,
													}),
												),
											),
											r(
												'div',
												{ class: `${t}-base-loading__container-layer-patch` },
												r(
													'svg',
													{
														class: `${t}-base-loading__svg`,
														viewBox: `0 0 ${2 * a} ${2 * a}`,
														xmlns: 'http://www.w3.org/2000/svg',
														style: { color: n },
													},
													r('circle', {
														fill: 'none',
														stroke: 'currentColor',
														'stroke-width': o,
														'stroke-linecap': 'round',
														cx: a,
														cy: a,
														r: e - o / 2,
														'stroke-dasharray': 4.91 * e,
														'stroke-dashoffset': 2.46 * e,
													}),
												),
											),
											r(
												'div',
												{ class: `${t}-base-loading__container-layer-right` },
												r(
													'svg',
													{
														class: `${t}-base-loading__svg`,
														viewBox: `0 0 ${2 * a} ${2 * a}`,
														xmlns: 'http://www.w3.org/2000/svg',
														style: { color: n },
													},
													r('circle', {
														fill: 'none',
														stroke: 'currentColor',
														'stroke-width': o,
														'stroke-linecap': 'round',
														cx: a,
														cy: a,
														r: e - o / 2,
														'stroke-dasharray': 4.91 * e,
														'stroke-dashoffset': 2.46 * e,
													}),
												),
											),
										),
									),
							  )
							: r(
									'div',
									{
										key: 'placeholder',
										class: `${t}-base-loading__placeholder`,
									},
									this.$slots,
							  ),
				}),
			);
		},
	});
export { v as N, l as a, N as b, z as c, k as i };
