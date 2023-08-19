<!--
 * @Author: xingjin
 * @Date: 2023-07-31 16:39:36
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 16:56:35
 * @Description: 请填写简介
-->
<template>
  <div class="flex items-center">
    <span class="flex items-center" v-if="article.scanCount"
      ><n-icon class="mr-1" color="#ccc" size="20"><EyeSharp /></n-icon
      >{{ transformToThousand(article.scanCount) }}</span
    >
    <span class="ml-3 flex items-center" v-if="article.likeCount"
      ><n-icon class="mr-1" color="#ccc" size="20"><EyeSharp /></n-icon
      >{{ transformToThousand(article.likeCount) }}</span
    >
  </div>
</template>
<script lang="ts" setup>
import { transformToThousand } from '@/utils/number';
import { EyeSharp } from '@vicons/ionicons5';
import { IArticle } from './types/article';

export interface Props {
  article: IArticle;
}

const props = withDefaults(defineProps<Props>(), {});
const { article } = toRefs(props);
</script>
