/*
 * @Author: xingjin
 * @Date: 2023-07-25 09:38:00
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-25 18:03:23
 * @Description: 请填写简介
 */
import { MenuOption, NIcon } from 'naive-ui';
import {
	BookOutline as BookIcon,
	PersonOutline as PersonIcon,
	WineOutline as WineIcon,
	PersonCircleOutline as UserIcon,
	Pencil as EditIcon,
	LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5';

const renderIcon = (icon: Component) => {
	return () => h(NIcon, null, { default: () => h(icon) });
};

export const HeadMenuOptions: MenuOption[] = [
	{
		label: '文章',
		key: 'article',
		icon: renderIcon(BookIcon),
	},
	{
		label: '微语',
		key: 'speaking',
		icon: renderIcon(BookIcon),
		children: [
			{
				label: '鼠',
				key: 'rat',
			},
		],
	},
	{
		label: '留言',
		key: 'board',
		icon: renderIcon(BookIcon),
	},
	{
		label: '游，吃，舞',
		key: 'travel',
		icon: renderIcon(BookIcon),
		children: [
			{
				type: 'group',
				label: '人物',
				key: 'people',
				children: [
					{
						label: '叙事者',
						key: 'narrator',
						icon: renderIcon(PersonIcon),
					},
					{
						label: '羊男',
						key: 'sheep-man',
						icon: renderIcon(PersonIcon),
					},
				],
			},
			{
				label: '饮品',
				key: 'beverage',
				icon: renderIcon(WineIcon),
				children: [
					{
						label: '威士忌',
						key: 'whisky',
					},
				],
			},
			{
				label: '食物',
				key: 'food',
				children: [
					{
						label: '三明治',
						key: 'sandwich',
					},
				],
			},
			{
				label: '过去增多，未来减少',
				key: 'the-past-increases-the-future-recedes',
			},
		],
	},
	{
		label: '关于',
		key: 'about',
		icon: renderIcon(BookIcon),
	},
];

export const UserDropDownOptions = [
	{
		label: '用户资料',
		key: 'profile',
		icon: renderIcon(UserIcon),
	},
	{
		label: '编辑用户资料',
		key: 'editProfile',
		icon: renderIcon(EditIcon),
	},
	{
		label: '退出登录',
		key: 'logout',
		icon: renderIcon(LogoutIcon),
	},
];
