/*
 * @Author: xingjin
 * @Date: 2023-07-27 15:10:46
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-27 15:32:01
 * @Description: 随机工具函数
 */

const colors = [
	'rgb(192 38 211)',
	'rgb(244 63 94)',
	'rgb(3 105 161)',
	'rgb(34 211 238)',
	'rgb(14 165 233)',
	'rgb(79 70 229)',
	'rgb(124 58 237)',
	'rgb(168 85 247)',
	'rgb(217 70 239)',
	'rgb(219 39 119)',
];

export const $RandomColor = () => {
	const randomNum = Math.floor(colors.length * Math.random());
	return colors[randomNum];
};
