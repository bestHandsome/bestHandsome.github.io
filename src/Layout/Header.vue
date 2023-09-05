<!--
 * @Author: xingjin
 * @Date: 2023-07-25 09:28:59
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-05 15:54:54
 * @Description: 顶部导航
-->
<template>
	<div class="flex justify-between items-center header-wrap px-10">
		<div class="logo flex justify-center items-center text-base self-text cursor-pointer" @click="goHome">
			<n-avatar class="mr-3" src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
			My Honey
		</div>
		<n-menu v-model:value="activeKey" mode="horizontal" class="flex-1 pl-40 text-base" :options="HeadMenuOptions" :on-update:value="menuSelect" />
		<div class="mr-10 flex">
			<n-tooltip placement="bottom" trigger="hover">
				<template #trigger>
					<div @click="changeTheme" class="cursor-pointer mr-3">
						<n-icon color="#646cff" size="20" v-if="theme === null"><SunnySharp /></n-icon>
						<n-icon color="#646cff" size="20" v-else><MoonSharp /></n-icon>
					</div>
				</template>
				<span> 切换主题 </span>
			</n-tooltip>
			<n-switch @update:value="changeLocale">
				<template #checked> 中 </template>
				<template #unchecked> 英 </template>
			</n-switch>
		</div>
		<div class="w-1/6">
			<n-dropdown :options="UserDropDownOptions" @select="handleSelect" size="large">
				<div class="flex items-center pd-8 cursor-pointer">
					<n-avatar round class="mr-3" size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
					<div>
						<p class="mb-1">打工仔</p>
						<p class="text-xs text-slate-500">毫无疑问，你是办公室里最亮的星</p>
					</div>
				</div>
			</n-dropdown>
		</div>
		<n-tooltip placement="bottom" trigger="hover">
			<template #trigger>
				<a href="https://github.com/bestHandsome/vue3-blog"
					><n-icon :size="20" class="ml-[5px]"><LogoGithub /></n-icon
				></a>
			</template>
			<span> I wish all my work is benefit you </span>
		</n-tooltip>
	</div>
</template>
<script lang="ts" setup>
import { HeadMenuOptions, UserDropDownOptions } from '@/constants/app';
import { useGlobalStore } from '@/stores/global';
import { SunnySharp, MoonSharp, LogoGithub } from '@vicons/ionicons5';
const globalStore = useGlobalStore();
const { changeTheme, changeLocale } = globalStore;
const { theme } = storeToRefs(globalStore);

const router = useRouter();
const activeKey = ref<string>('article');

watch(
	() => router.currentRoute.value,
	route => {
		const { name } = route;
		if (name) activeKey.value = String(name);
	},
	{
		immediate: true,
	},
);

const menuSelect = (key: string) => {
	router.push({ name: key });
};

const handleSelect = (key: string) => {
	console.log('key---', key);
};

const goHome = () => {
	router.push('/home');
};
</script>
<style lang="scss" scoped>
.self-text {
	font-family: 'Graveur Variable', 'Adobe NotDef';
	font-style: italic;
}
.header-wrap {
	height: 4rem;
	border-bottom: 1px solid #eee;
	box-shadow: 0 2px 8px #f2f3f5;
}
</style>
