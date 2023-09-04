<!--
 * @Author: xingjin
 * @Date: 2023-07-25 15:05:25
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-04 17:36:07
 * @Description: 请填写简介
-->
<template>
	<div class="card-wrap">
		<div :title="title">
			<h1 class="text-xl mb-3 font-bold">{{ title }}</h1>
			<n-space size="small" class="mb-3 items-center">
				<n-tag :bordered="false" :color="{ color: $RandomColor(), textColor: '#fff' }" size="small" v-for="(tag, index) in tags" :key="index">
					{{ tag }}
				</n-tag>
				<div class="exInfo ml-[80px] flex text-sm text-gray-500">
					<span class="">{{ nickname }}</span>
					<span class="ml-2 mr-2">|</span>
					<span class="">{{ updatedAt }}</span>
				</div>
			</n-space>
			<p class="text-sm text-gray-500">{{ subTitle }}</p>
			<div class="useExinfo mt-3">
				<ExInfo :article="data" />
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import ExInfo from '@/components/ExInfo.vue';
import { IArticle } from './types/article';
import { $RandomColor } from '@/utils/random';

const props = defineProps<{ data: IArticle }>();

const { data } = toRefs(props);
const { tags, title, subTitle, updatedAt, nickname } = data.value;
</script>

<style lang="scss" scoped></style>
