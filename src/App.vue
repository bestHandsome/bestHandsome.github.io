<!--
 * @Author: xingjin
 * @Date: 2023-07-21 16:15:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 11:49:48
 * @Description: 请填写简介
-->

<template>
	<n-config-provider
		:locale="zhCN"
		name="sssds"
		:theme-overrides="{ common: { fontWeightStrong: '600' } }"
	>
		<routerView />
	</n-config-provider>
</template>

<script setup lang="ts">
import { zhCN } from 'naive-ui';

let a = 1;
const change = name => {
	return 1;
};
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
