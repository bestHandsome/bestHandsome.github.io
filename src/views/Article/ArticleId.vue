<!--
 * @Author: xingjin
 * @Date: 2023-07-27 15:35:12
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-07 09:24:18
 * @Description: 请填写简介
-->
<template>
	<div class="content-wrap">
		<h1 class="text-3xl text-left text-black mb-3 font-bold">
			{{ article.title }}
		</h1>
		<div class="info">
			<span class="mr-3">{{ article.nickname }}</span>
			<span class="mr-3" v-if="article.scanCount"
				><n-icon class="align-bottom mr-1" color="#ccc" size="20"><EyeSharp /></n-icon>{{ article.scanCount }}</span
			>
			<span v-if="article.likeCount"
				><n-icon class="align-bottom mr-1" color="#ccc" size="20"><EyeSharp /></n-icon>{{ article.likeCount }}</span
			>
		</div>
		<v-md-preview :text="article.content"></v-md-preview>
	</div>
</template>
<script lang="ts" setup>
import { getArticleById } from '@/apis/article';
import { transformToThousand } from '@/utils/number';
import { EyeSharp } from '@vicons/ionicons5';

const needTransformKey = ['likeCount', 'scanCount'];

const route = useRoute();
const article = ref({}) as any;

const initArticle = async () => {
	const id = route.params.id as string;

	let { data } = await getArticleById(id);
	for (let key in data) {
		if (needTransformKey.includes(key)) {
			data[key] = transformToThousand(data[key]);
		}
	}

	article.value = data;
};
initArticle();
</script>
<style scoped lang="scss">
.content-wrap {
	padding: 20px;
}
</style>
