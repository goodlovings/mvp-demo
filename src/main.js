/*
 * @Author: haolian
 * @Date: 2023-10-27 16:06:28
 * @LastEditors: haolian
 * @LastEditTime: 2024-05-07 16:50:04
 * @Description: Do not edit
 * @FilePath: /mvp-demo/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "./views/blur/fonts/bd.css";

import "drawflow/dist/drawflow.min.css";

// 全局组件引入
const app = createApp(App);
app.use(router);

app.mount("#app");
