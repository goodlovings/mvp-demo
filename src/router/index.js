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
    {
      path: "/deviceOrientation",
      name: "deviceOrientation",
      meta: {
        title: "deviceorientation",
      },
      component: () => import("@/views/deviceOrientation/index.vue"),
    },
    {
      path: "/3d",
      children: [
        {
          path: "pic",
          name: "pic",
          meta: {
            title: "3dpic",
          },
          component: () => import("@/views/3d/pic.vue"),
        },
      ],
    },
  ],
});

// 路由守卫
beforeRouter(router);
afterRouter(router);

export default router;
