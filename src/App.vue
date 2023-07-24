<!--
 * @Author: xingjin
 * @Date: 2023-07-21 16:15:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 17:57:46
 * @Description: 请填写简介
-->

<template>
  <n-config-provider
    :locale="zhCN"
    :theme="theme"
    name="sssds"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
  >
    <n-card>
      <n-space>
        <n-button @click="changeTheme">深色</n-button>
        <n-button @click="theme = null">浅色</n-button>
      </n-space>
    </n-card>
    <routerView />
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, darkTheme } from 'naive-ui';
const theme = ref<any>(null);
const changeTheme = () => {
  theme.value = darkTheme;
};
</script>

<style scoped></style>
