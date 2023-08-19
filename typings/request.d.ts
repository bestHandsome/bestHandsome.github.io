/*
 * @Author: xingjin
 * @Date: 2023-07-31 14:28:53
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 14:31:05
 * @Description: 请填写简介
 */
declare module 'axios' {
  interface AxiosResponse<T = any> {
    meta: unknown;
    // 这里追加你的参数
  }
}
