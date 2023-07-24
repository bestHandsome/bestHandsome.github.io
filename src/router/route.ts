/*
 * @Author: xingjin
 * @Date: 2023-07-24 17:39:38
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 17:42:34
 * @Description: 请填写简介
 */
import { inferNameAndComponent } from '@/utils/helper';
// 批量引入页面
const pages = import.meta.glob('@/views/**/*.vue');
const PAGE_NAME_SPACE = '/src/views/';

const routes = [
  {
    path: 'user',
    title: '我的用户',
  },
];
export default inferNameAndComponent(routes, pages, PAGE_NAME_SPACE);
