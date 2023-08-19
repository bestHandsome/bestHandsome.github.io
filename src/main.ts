/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-31 15:26:40
 * @Description: 请填写简介
 */
import './style.css';
import App from './App.vue';
import router from './router';
import 'vfonts/Lato.css';
import hljs from 'highlight.js';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@/assets/css/index.scss';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VMdPreview);
app.mount('#app');
