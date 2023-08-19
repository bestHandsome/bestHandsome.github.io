<!--
 * @Author: xingjin
 * @Date: 2023-07-21 16:30:34
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 14:03:32
 * @Description: 请填写简介
-->
<template>
	<n-button>naive-ui</n-button>
	<HelloWorld msg="sss" class="ss aa flex align-middle h-1 w-0 flex-1" id="ssdsss" name="sdssdsdds" />
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
const name = ref<string>('title');
const formData = reactive<any>({
	name: 'ss',
});
</script>
