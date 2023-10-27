import { createRouter, createWebHistory } from "vue-router";
import { beforeRouter, afterRouter } from "./routerConfig";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/demo",
      name: "demo",
      meta: {
        title: "demo",
      },
      component: () => import("@/views/demo/index.vue"),
    },
    {
      path: "/drawflow",
      name: "drawflow",
      meta: {
        title: "drawflow",
      },
      component: () => import("@/views/drawflow/index.vue"),
    },
  ],
});

// 路由守卫
beforeRouter(router);
afterRouter(router);

export default router;
