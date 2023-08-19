<!--
 * @Author: xingjin
 * @Date: 2023-07-24 17:44:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 09:28:27
 * @Description: 请填写简介
-->
<template>
  <div>
    <HeaderSection></HeaderSection>
    <div class="max-w-8xl">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderSection from './Header.vue';
</script>
