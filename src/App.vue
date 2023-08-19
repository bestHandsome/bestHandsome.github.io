<!--
 * @Author: xingjin
 * @Date: 2023-07-21 16:15:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-25 15:56:27
 * @Description: 请填写简介
-->

<template>
	<n-config-provider :locale="locale" :theme="theme" :date-locale="dateLocale" :theme-overrides="themeOverrides">
		<n-global-style />
		<routerView />
	</n-config-provider>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
const { theme, locale, dateLocale, themeOverrides } = storeToRefs(globalStore);
</script>

<style scoped></style>
