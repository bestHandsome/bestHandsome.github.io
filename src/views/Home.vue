<!--
 * @Author: xingjin
 * @Date: 2023-07-24 17:45:59
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-08 15:52:10
 * @Description: 项目首页
-->
<template>
  <div class="flex justify-center items-center text-center w-screen h-screen p-40 bg-color text-cyan-400">
    <div>
      <n-grid x-gap="24" :cols="3" class="flex w-full">
        <n-gi v-for="banner in banners" :key="banner.id" class="cursor-pointer border-separate">
          <a :href="banner.url">
            <n-card :bordered="false" :title="banner.title" class="h-80 w-80 text-center">
              <template #cover>
                <div class="img-wrap relative h-0">
                  <img class="absolute top-0 left-0 rounded-xl cover" :src="banner.coverUrl" alt="" />
                </div>
              </template>
            </n-card>
          </a>
        </n-gi>
      </n-grid>
      <div class="mt-20 text-4xl" @click="goCenter">开启我的私人梦幻之旅~~~</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBanners } from '@/apis/banner';
import { transformMediaData } from '@/utils/helper';

const router = useRouter();
const goCenter = () => router.push('/article');
let banners = ref<Record<string, any>[]>([]);
console.log('---');

const getData = async () => {
  let res = await getBanners();
  banners.value = transformMediaData(res.data);
  console.log('-------', banners.value);
};
getData();
</script>

<style lang="scss" scoped>
.img-wrap {
  padding-top: 75%;
}
.bg-color {
  background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
}
</style>
