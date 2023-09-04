/*
 * @Author: xingjin
 * @Date: 2023-07-27 15:06:18
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-27 15:06:19
 * @Description: 工具函数
 */
export const randomColor = () => {
	return 'hsl(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 100) + '%,' + Math.round(Math.random() * 80) + '%)';
};
