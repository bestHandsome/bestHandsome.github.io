<!--
 * @Author: xingjin
 * @Date: 2023-07-24 17:44:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-05 17:40:00
 * @Description: 请填写简介
-->
<template>
  <div>
    <HeaderSection></HeaderSection>
    <div class="max-w-8xl bg-slate-100">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderSection from './Header.vue';
</script>
