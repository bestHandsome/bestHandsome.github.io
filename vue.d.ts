/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:38:27
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 14:38:28
 * @Description: 请填写简介
 */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}