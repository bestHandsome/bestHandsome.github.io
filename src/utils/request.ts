/*
 * @Author: xingjin
 * @Date: 2023-07-21 16:47:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 14:27:07
 * @Description: 请求封装
 */
import axios from 'axios';
import type {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosError,
} from 'axios';
import { errorCodeType } from './error-code-type';
import { transformAxiosDta } from './helper';

function handleCode(code: number): void {
  switch (code) {
    case 401:
      // ElMessage.error('登录失败，请重新登录');
      break;
    default:
      // ElMessage.error('请求失败');
      break;
  }
}

// 请求响应参数
interface Result {
  code: number;
  msg: string;
}
interface ResultData<T = any> extends Result {
  data?: T;
  meta?: T;
}

const { VITE_APP_BASEURL = '/api' } = import.meta.env;
// 创建实例
const service: AxiosInstance = axios.create({
  baseURL: VITE_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 6000,
});

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const token = localStorage.getItem('token') || '';
    return {
      ...config,
      headers: {
        'x-access-token': token, // 请求头中携带token信息
      },
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data, config } = res; // 解构
    const code = data['code'] || 200;
    const msg =
      errorCodeType(code) || res.data['msg'] || errorCodeType('default');
    if (code === 200) {
      // const result = transformAxiosDta(data);
      return data;
    } else if (code === 401) {
      localStorage.setItem('token', '');
      return data;
    } else {
      return Promise.reject(data);
    }
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      handleCode(response.status);
    }
  },
);

export default service;
