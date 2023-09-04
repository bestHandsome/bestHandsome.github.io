<!--
 * @Author: xingjin
 * @Date: 2023-07-25 10:06:33
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-04 15:50:31
 * @Description: 请填写简介
-->
<template>
  <div class="flex p-5 bg-slate-50">
    <div class="mr-20 p-[5px]">
      <ul v-for="tag in tagList" :key="tag.key">
        <li>{{ tag.label }}</li>
      </ul>
    </div>
    <div class="flex-1 bg-white">
      <n-tabs class="pl-5" type="line" animated @update:value="tabChange">
        <n-tab name="likeCount" tab="推荐"> </n-tab>
        <n-tab name="updatedAt" tab="最新"> </n-tab>
      </n-tabs>
      <n-list class="pt-5" hoverable clickable>
        <n-list-item class="card-wrap" v-for="article in articles" :key="article.id">
          <ArticleCard :data="article" @click="goArticleDetail(article.id)"></ArticleCard>
        </n-list-item>
      </n-list>
      <InfiniteLoding :loading="loading" :finished="finished" @infinite="getData"> </InfiniteLoding>
    </div>
    <div class="ml-20">right</div>
  </div>
</template>
<script lang="ts" setup>
import ArticleCard from '@/components/ArticleCard.vue';
import InfiniteLoding from '@/components/InfiniteLoding.vue';
import { getArticles } from '@/apis/article';
import { IArticle } from '@/components/types/article';
import { transformDateToCustom } from '@/utils/helper';
import type { ITag } from './types/interface';

const router = useRouter();
const articles = ref<IArticle[]>([]);
const loading = ref(false);
const finished = ref(false);
const tagList = ref<ITag[]>([{ label: '前端', key: 1 }]) as any;

const initState = reactive({
  articleParams: {
    pagination: {
      page: 1,
      pageSize: 10,
    },
    sort: 'likeCount:DESC',
  },
});

const getData = async () => {
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
getData();

const goArticleDetail = (id: string) => {
  router.push(`/article/${id}`);
};

const tabChange = (sortFlag: string) => {
  initState.articleParams.sort = `${sortFlag}:DESC`;
  const { pagination } = initState.articleParams;
  pagination.page = 1;
  articles.value = [];
  getData();
};
</script>
<style lang="scss" scoped>
.card-wrap {
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
