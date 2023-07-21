/*
 * @Author: xingjin
 * @Date: 2023-07-21 14:33:55
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-21 14:58:29
 * @Description: 请填写简介
 */
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app')
