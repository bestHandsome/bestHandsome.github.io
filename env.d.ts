/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-27 17:00:50
 * @Description: 请填写简介
 */
declare module '*.vue' {
	import { defineComponent } from 'vue';
	const Component: ReturnType<typeof defineComponent>;
	export default Component;
}

declare module 'vue3-markdown-it';
