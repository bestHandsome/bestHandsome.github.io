/*
 * @Author: xingjin
 * @Date: 2023-07-27 15:17:34
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-27 15:17:34
 * @Description: 请填写简介
 */
/*类正态排序*/
export const $NormalSort = function (arr: number[]) {
  var temp = [],
    i = 0,
    l = arr.length,
    leftTo = 0,
    rightTo = 0,
    sortArr = arr.sort(function (a, b) {
      return b - a;
    }); // 先将数组从大到小排列得到 [7,6,5,5,4,3,2,1]
  while (arr.length > 1) {
    let a = arr.pop();
    let b = arr.pop();
    if (leftTo < rightTo) {
      temp[i] = b;
      temp[l - (i + 1)] = a;
    } else {
      temp[i] = b;
      temp[l - (i + 1)] = a;
    }
    i++;
  }
  return temp;
};
