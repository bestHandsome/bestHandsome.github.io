/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:50:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-05 09:45:15
 * @Description: 请填写简介
 */

import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import childrenRoutes from './route';

const Layout = () => import('@/Layout/Layout.vue');
const Home = () => import('@/views/Home.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    children: childrenRoutes,
  },
  {
    path: '/home',
    component: Home,
  },
];

console.log('----', childrenRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
