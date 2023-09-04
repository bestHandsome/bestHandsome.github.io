/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-04 10:07:26
 * @Description: 请填写简介
 */
/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import VueDevTools from 'vite-plugin-vue-devtools';
// import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vue3-blog',
	plugins: [
		vue(), // 自动导入API方法
		VueDevTools(),
		// eslint(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vitest',
				'pinia',
				{
					'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
				},
			],
			eslintrc: {
				enabled: true, // Default `false`
				filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
			resolvers: [], // custom resolvers
			dts: 'typings/auto-imports.d.ts', // 导入存放地址
		}),
		// 自动导入组件
		Components({
			resolvers: [NaiveUiResolver()], // custom resolvers
			dts: 'typings/components.d.ts',
		}),
	],
	resolve: {
		alias: {
			'@/': fileURLToPath(new URL('./src/', import.meta.url)),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
		},
	},
	server: {
		host: '0.0.0.0',
		hmr: true,
		open: true,
		proxy: {
			'/api': {
				target: 'http://172.16.88.41:1337',
				changeOrigin: true,
				secure: false,
				// rewrite: path => path.replace(/^\/api/, ''),
			},
			'/uploads': {
				target: 'http://172.16.88.41:1337',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
