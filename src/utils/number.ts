/*
 * @Author: xingjin
 * @Date: 2023-07-28 09:09:47
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-28 09:22:41
 * @Description: 数字转换工具类
 */
//数字改变（加千位）
export const transformToThousand = (number: number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  }
  return number;
};
