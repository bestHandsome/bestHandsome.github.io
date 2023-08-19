/*
 * @Author: xingjin
 * @Date: 2023-07-24 17:39:38
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-27 15:40:34
 * @Description: 请填写简介
 */
import { inferNameAndComponent } from '@/utils/helper';
// 批量引入页面
const pages = import.meta.glob('@/views/**/*.vue');
const PAGE_NAME_SPACE = '/src/views/';

const routes = [
  {
    path: 'article',
    title: '文章',
    children: [
      {
        path: ':id',
        title: '详情',
      },
    ],
  },
  {
    path: 'speaking',
    title: '微语',
  },
  {
    path: 'board',
    title: '留言板',
  },
  {
    path: 'travel',
    title: '旅行',
  },
  {
    path: 'about',
    title: '关于我',
  },
];
export default inferNameAndComponent(routes, pages, PAGE_NAME_SPACE);
