/*
 * @Author: xingjin
 * @Date: 2023-07-26 09:15:33
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-05 09:56:20
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

// 获取所有标签分类
export function getTags() {
  return service({
    url: '/tags?populate=*',
  });
}
