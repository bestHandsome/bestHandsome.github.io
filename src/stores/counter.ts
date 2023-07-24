/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:48:51
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 14:48:52
 * @Description: 请填写简介
 */
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
	state: () => ({
		counter: 0,
	}),
});
