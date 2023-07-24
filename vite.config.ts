/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 15:46:01
 * @Description: 请填写简介
 */
/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
// import eslint from 'vite-plugin-eslint';
import path from 'path';

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 自动导入API方法
    // eslint(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vitest',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [], // custom resolvers
      dts: 'src/typings/auto-imports.d.ts', // 导入存放地址
    }),
    // 自动导入组件
    Components({
      resolvers: [NaiveUiResolver()], // custom resolvers
      dts: 'src/typings/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
});
