/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:50:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 17:44:58
 * @Description: 请填写简介
 */

import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: 'login',
	},
	{
		path: '/login', // 浏览器访问地址
		name: 'Login',
		component: () => import('@/views/Login.vue'),
		meta: {},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
