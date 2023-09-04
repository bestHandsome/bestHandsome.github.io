/*
 * @Author: xingjin
 * @Date: 2023-07-25 08:57:05
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-25 18:05:05
 * @Description: 全局应用状态管理
 */
import { darkTheme, zhCN, dateZhCN, GlobalThemeOverrides } from 'naive-ui';
const themeOverrides: GlobalThemeOverrides = {
	common: {
		primaryColor: '#646cff',
		primaryColorHover: '#646cff',
	},
	Button: {
		textColor: '#646cff',
	},
	Select: {
		peers: {
			InternalSelection: {
				textColor: '#646cff',
			},
		},
	},
	// ...
};
export const useGlobalStore = defineStore('globalStore', {
	state: () => ({
		theme: null as any,
		locale: zhCN as any,
		dateLocale: dateZhCN as any,
		themeOverrides,
	}),
	actions: {
		changeTheme() {
			this.theme = this.theme ? null : darkTheme;
		},
		changeLocale() {
			const isChina = this.locale?.name;
			this.locale = isChina ? null : zhCN;
			this.dateLocale = isChina ? null : dateZhCN;
		},
	},
});
