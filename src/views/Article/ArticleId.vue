<!--
 * @Author: xingjin
 * @Date: 2023-07-27 15:35:12
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 10:35:22
 * @Description: 请填写简介
-->
<template>
  <div class="content-wrap">
    <h1 class="text-3xl text-left text-black mb-3 font-bold">
      {{ article.title }}
    </h1>
    <div class="info">
      <span>{{ article.nickname }}</span>
      <span class="ml-3" v-if="article.scanCount"
        ><n-icon class="align-bottom mr-1" color="#ccc" size="20"
          ><EyeSharp /></n-icon
        >{{ article.scanCount }}</span
      >
      <span class="ml-3" v-if="article.likeCount"
        ><n-icon class="align-bottom mr-1" color="#ccc" size="20"
          ><EyeSharp /></n-icon
        >{{ article.likeCount }}</span
      >
    </div>
    <v-md-preview :text="article.content"></v-md-preview>
  </div>
</template>
<script lang="ts" setup>
import { getArticleById } from '@/apis/article';
import { transformToThousand } from '@/utils/number';
import { IArticle } from '@/components/types/article';
import { EyeSharp } from '@vicons/ionicons5';

const needTransformKey = ['likeCount', 'scanCount'];

const route = useRoute();
const article = ref<IArticle | any>({});

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
