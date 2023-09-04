<!--
 * @Author: xingjin
 * @Date: 2023-07-31 14:13:03
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 15:07:54
 * @Description: 无限加载组件
-->
<template>
	<div class="infinite-loading" ref="container">
		<div class="loading" v-if="loading">
			<n-spin size="small" />
		</div>
		<div class="none" v-if="finished">
			<span class="text">亲，没有更多了</span>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
const container = ref(null);
const emits = defineEmits(['infinite']);
const props = defineProps<{ loading: boolean; finished: boolean }>();
useIntersectionObserver(
	container,
	([{ isIntersecting }]) => {
		if (isIntersecting) {
			// 当loading和finished的值都为false时，就通知父组件调用方法继续向后台请求数据
			if (props.loading === false && props.finished === false) {
				console.log('ssss');

				emits('infinite');
			}
		}
	},
	{
		threshold: 0,
	},
);
</script>
<style lang="scss" scoped>
.infinite-loading {
	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 200px;
		.img {
			width: 200px;
			height: 200px;
			background: url(https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fload.gif) no-repeat center / contain;
		}
		.text {
			color: #999;
			font-size: 16px;
		}
	}
}
.none {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	.img {
		width: 200px;
		height: 134px;
		background: url(https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fnone.png) no-repeat center / contain;
	}
	.text {
		color: #999;
		font-size: 16px;
	}
}
</style>
