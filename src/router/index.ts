/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:50:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 17:45:45
 * @Description: 请填写简介
 */

import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import childrenRoutes from './route';

const Layout = () => import('@/Layout/Laout.vue');
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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
