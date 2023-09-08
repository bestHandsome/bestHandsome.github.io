<!--
 * @Author: xingjin
 * @Date: 2023-07-25 10:06:33
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-06 09:06:30
 * @Description: 请填写简介
-->
<template>
	<div class="flex p-5 items-baseline">
		<n-list
			:show-divider="false"
			class="mr-[30px] min-h-[600px] mb-0 px-[10px] text-gray-500 bg-[#fff] py-[15px] min-w-[150px] text-base cursor-pointer"
		>
			<n-list-item
				:class="{ 'nav-active': activeTag === tag.key }"
				class="hover:bg-slate-100 !px-[15px] !py-[10px] rounded"
				v-for="tag in tagList"
				:key="tag.key"
				@click="tagChange(tag.key)"
			>
				<n-icon class="mr-[10px] align-middle" size="20"><component :is="iconMap[tag.key]" /></n-icon>
				{{ tag.label }}
			</n-list-item>
		</n-list>
		<div class="flex-1 bg-white">
			<n-tabs class="pl-5" type="line" animated @update:value="tabChange">
				<n-tab name="likeCount" tab="推荐"> </n-tab>
				<n-tab name="updatedAt" tab="最新"> </n-tab>
			</n-tabs>
			<div class="min-h-[550px]">
				<n-list v-if="articles.length > 0" class="p-[20px]" hoverable clickable>
					<n-list-item class="card-wrap" v-for="article in articles" :key="article.id">
						<ArticleCard :data="article" @click="goArticleDetail(article.id)"></ArticleCard>
					</n-list-item>
				</n-list>
				<n-empty class="min-h-[300px] flex column justify-center" size="huge" v-else-if="!loading" description="暂时没有文章~~~">
					<template #icon>
						<n-icon>
							<ios-airplane />
						</n-icon>
					</template>
				</n-empty>
				<InfiniteLoding v-if="articles.length > 0" :loading="loading" :finished="finished" @infinite="getArticleList"> </InfiniteLoding>
			</div>
		</div>
		<div class="ml-20">right</div>
	</div>
</template>
<script lang="ts" setup>
import ArticleCard from '@/components/ArticleCard.vue';
import InfiniteLoding from '@/components/InfiniteLoding.vue';
import { getArticles, getTags } from '@/apis/article';
import { IArticle } from '@/components/types/article';
import { transformDateToCustom } from '@/utils/helper';
import type { ITag } from './types/interface';
import { iconMap } from './contant';

const router = useRouter();
const articles = ref<IArticle[]>([]);
const loading = ref(false);
const finished = ref(false);
const tagList = ref<ITag[]>([
	{
		label: '综合',
		key: 'all',
	},
]);
const activeTag = ref('all');

const initState = reactive({
	articleParams: {
		pagination: {
			page: 1,
			pageSize: 10,
		},
		sort: 'likeCount:DESC',
	} as any,
});

// 获取文章数据
const getArticleList = async () => {
	loading.value = true;
	let {
		data,
		meta: { pagination },
	} = (await getArticles(initState.articleParams)) as any;
	const target = data.map((item: IArticle) => {
		const tags = item?.category?.split(',');
		item.updatedAt = transformDateToCustom(item.updatedAt);
		delete item.category;
		return {
			tags,
			...item,
		};
	});
	const pageInfo = initState.articleParams.pagination;
	articles.value.push(...target);
	loading.value = false;
	pageInfo.page++;

	if (articles.value.length === pagination.total) {
		finished.value = true;
	}
};
// 获取标签数据
const getTagList = () => {
	getTags().then(res => {
		const { data } = res;
		tagList.value.push(...data);
	});
};

const initData = () => {
	getTagList();
	getArticleList();
};
initData();

const goArticleDetail = (id: string) => {
	router.push(`/article/${id}`);
};

const tabChange = (sortFlag: string) => {
	initState.articleParams.sort = `${sortFlag}:DESC`;
	const { pagination } = initState.articleParams;
	pagination.page = 1;
	articles.value = [];
	getArticleList();
};

const tagChange = (key: string) => {
	if (key !== 'all') {
		initState.articleParams['filters[$and][0][tag][key][$eq]'] = key;
	} else {
		delete initState.articleParams['filters[$and][0][tag][key][$eq]'];
	}
	activeTag.value = key;
	const { pagination } = initState.articleParams;
	pagination.page = 1;
	articles.value = [];
	getArticleList();
};
</script>
<style lang="scss" scoped>
.card-wrap {
	margin-bottom: 2rem;
	&:last-child {
		margin-bottom: 0;
	}
}
.nav-active {
	background-color: rgb(79, 70, 229);
	color: #fff;
}
</style>
