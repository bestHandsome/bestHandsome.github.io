/*
 * @Author: xingjin
 * @Date: 2023-07-26 09:15:33
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 11:21:06
 * @Description: 请填写简介
 */
import service from '@/utils/request';

// 获取所有文章列表
export function getArticles(params: Record<string, any>) {
	return service({
		url: '/articles?populate=*',
		params,
	});
}

// 获取单个文章内容
export function getArticleById(id: string) {
	return service({
		url: `/articles/${id}?populate=*`,
	});
}
