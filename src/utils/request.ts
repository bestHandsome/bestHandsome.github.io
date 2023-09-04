/*
 * @Author: xingjin
 * @Date: 2023-07-21 16:47:26
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-04 10:36:44
 * @Description: 请求封装
 */
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { errorCodeType } from './error-code-type';

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
// interface Result {
//   code: number;
//   msg: string;
// }
// interface ResultData<T = any> extends Result {
//   data?: T;
//   meta?: T;
// }

const message = useMessage();

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
		// const token = localStorage.getItem('token') || '';
		return {
			...config,
		};
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

// 响应拦截
service.interceptors.response.use(
	(res: any) => {
		const { data } = res as any; // 解构
		const code = data['code'] || 200;
		const msg = errorCodeType(code) || res.data['msg'] || errorCodeType('default');
		if (code === 200) {
			// const result = transformAxiosDta(data);
			return data;
		} else if (code === 401) {
			localStorage.setItem('token', '');
			return data;
		} else {
			message.error(msg);
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
