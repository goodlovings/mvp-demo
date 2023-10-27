import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import "vant/es/toast/style";
import "vant/es/dialog/style";

import "drawflow/dist/drawflow.min.css";

// 全局组件引入
const app = createApp(App);
app.use(router);

app.mount("#app");
