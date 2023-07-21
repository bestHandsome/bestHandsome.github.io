/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 14:59:55
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),  // 自动导入API方法
    AutoImport({
      imports: [
        'vue', 
        'vue-router',
        'pinia',
      ],
      resolvers: [], // custom resolvers
      dts: 'src/typings/auto-imports.d.ts', // 导入存放地址
    }),
    // 自动导入组件
    Components({
      resolvers: [], // custom resolvers
      dts: 'src/typings/components.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@': _resolve('src')
    }
  }
})
