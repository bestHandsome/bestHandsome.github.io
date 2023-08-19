/*
 * @Author: xingjin
 * @Date: 2023-07-25 16:41:03
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-25 16:43:35
 * @Description: 请填写简介
 */
import service from '@/utils/request';
// 展会查询
export function getBanners() {
  return service({
    url: '/banners?populate=*',
  });
}
