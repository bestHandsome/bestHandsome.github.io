<!--
 * @Author: xingjin
 * @Date: 2023-07-21 16:15:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 16:32:05
 * @Description: 请填写简介
-->
<template>
  <div
    :class="['msg-wrap', msg && msg.length > 0 ? 'notification--slide' : null]"
  >
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
