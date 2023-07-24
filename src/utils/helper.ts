/*
 * @Author: xingjin
 * @Date: 2023-07-24 17:34:02
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 17:37:44
 * @Description: 工具 - 帮助函数
 */
import { upperFirst, camelCase, chain } from 'lodash';
import { Base64 } from 'js-base64';
import jwt_decode from 'jwt-decode';

//  判断当前用户是否未登录  true：没登录  false: 登录了

export function isUnLogin() {
  // const globalStore = global();
  // const { curUserInfo = {} } = globalStore;
  // return isEmpty(curUserInfo);
  const token = sessionStorage.getItem('x_id_token');
  if (token) {
    const decoded = jwt_decode(token);
    const { exp } = decoded as { exp: number | null };
    if (exp) {
      if (exp * 1000 < Date.now()) {
        sessionStorage.clear();
        return true;
      } else {
        return false;
      }
    } else {
      sessionStorage.clear();
      return true;
    }
  } else {
    return true;
  }
}

//  加密传参
export const paramsToBase64 = (params: { [key: string]: string | number }) => {
  return `params=${encodeURIComponent(Base64.encode(JSON.stringify(params)))}`;
};

export interface IRoute {
  path: string;
  title: string;
  children?: IRoute[];
  target?: string;
  directory?: string;
  requiredAuth?: boolean; // 该路由是否需要鉴权
}
interface IOptions {
  path: string;
  name: string;
  component: any;
  meta: {
    title: string;
    breadcrumbs: IRoute[];
    requiredAuth: boolean;
  };
}
const transformRoute = (
  curRoute: IRoute,
  PAGE_LIST: Record<string, Function>,
  PAGE_NAME_SPACE: string,
  parent?: IRoute,
) => {
  const {
    path = '',
    title = '',
    target = undefined,
    requiredAuth = true,
  } = curRoute;
  const newPath = parent ? `${parent.path}/${path}` : path;
  const name = camelCase(newPath);
  const componentName = target ? target : upperFirst(name);
  let { directory } = curRoute;
  if (!directory && parent) {
    // 当前路由没有传目录，则去上级找
    directory = chain(parent.directory ? parent.directory : parent.path)
      .camelCase()
      .upperFirst()
      .value();
  } else if (!directory) {
    directory = componentName;
  }
  const pageKey = `${PAGE_NAME_SPACE + directory}/${componentName}.vue`;
  // console.log(pageKey, "pageky", directory);
  const res: IOptions = {
    path: newPath,
    name,
    component: PAGE_LIST[pageKey],
    meta: {
      title,
      breadcrumbs: parent ? [parent, curRoute] : [curRoute],
      requiredAuth,
    },
  };
  return res;
};
// 推断路由的name和component
export const inferNameAndComponent = (
  routes: IRoute[],
  PAGE_LIST: Record<string, Function>,
  PAGE_NAME_SPACE: string,
) => {
  return routes.reduce((prev, cur) => {
    let leafs: IOptions[] = [];
    const curRes = transformRoute(cur, PAGE_LIST, PAGE_NAME_SPACE);
    if (cur.children) {
      leafs = cur.children.map(child =>
        transformRoute(child, PAGE_LIST, PAGE_NAME_SPACE, cur),
      );
      delete cur.children;
    }
    prev.push(curRes, ...leafs);
    return prev;
  }, [] as IOptions[]);
};
// 解析url上携带的参数
export const getPageQuery = () => {
  const url = window.location.href.split('?')[1];
  const pageParamsMap = new Map();
  for (const [key, value] of new URLSearchParams(url)) {
    pageParamsMap.set(key, value);
  }
  return pageParamsMap;
};

export const validateUsername = (
  rule: any,
  value: string,
  callback: Function,
) => {
  const namgReg = /^[a-zA-Z0-9]{6,20}$/;
  if (!namgReg.test(value)) {
    return callback(new Error('要求6-20位字符组成，支持字母和数字组合'));
  }
  callback();
};

export const validateMobile = (
  rule: any,
  value: string,
  callback: Function,
) => {
  const mobileReg =
    /^(13[0-9]|14[5-9]|15[0-35-9]|16[25-7]|17[0-8]|18[0-9]|19[0-35-9])[0-9]{8}$/;
  if (!mobileReg.test(value)) {
    return callback(new Error('请输入正确的手机号'));
  }
  callback();
};

export const validatePassword = (
  rule: any,
  value: string,
  callback: Function,
) => {
  const reg = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0] | \s/g;
  if (value && reg.test(value)) {
    return callback(new Error('密码不能包含有中文或空格'));
  }
  const pwdReg =
    /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
  if (value && !pwdReg.test(value)) {
    return callback(new Error('8-20位，包含大小写字母、数字和特殊符号'));
  }
  callback();
};

export const validateAttach = (
  rule: any,
  value: { attribute: string; url: string }[],
  callback: Function,
) => {
  const flag = value.some(item => item.url.includes('blob:'));
  if (flag) {
    return callback(new Error('😲Ops,请耐心等待图片上传完成再提交！'));
  }
  callback();
};

export const validateUpload = (
  rule: any,
  value: { attribute: string; url: string }[],
  callback: Function,
) => {
  const flag =
    Array.isArray(value) &&
    value.some((item: any) => {
      const url = item.response?.result?.data[0]?.url || item.url || '';
      return !url || url.includes('blob:');
    });
  if (flag) {
    return callback(new Error('😲Ops,请耐心等待图片上传完成再提交！'));
  }
  callback();
};
