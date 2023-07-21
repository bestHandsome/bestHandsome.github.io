/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:50:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 14:58:41
 * @Description: 请填写简介
 */

import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/login', // 浏览器访问地址
    name: 'Login',
    component: () => import(/* webpackChunkName: "login"*/ new URL('../pages/Login/index.vue', import.meta.url).href ),
    meta:{}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router