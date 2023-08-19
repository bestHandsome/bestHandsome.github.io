/*
 * @Author: xingjin
 * @Date: 2023-07-31 14:33:29
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 14:34:55
 * @Description: 请填写简介
 */
export function useLoadingMore() {
  const loading = ref(true);
  const finished = ref(true);
  return {
    loading,
    finished,
  };
}
