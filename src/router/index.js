/*
 * @Author: haolian
 * @Date: 2023-10-27 16:06:28
 * @LastEditors: haolian
 * @LastEditTime: 2024-05-08 12:36:38
 * @Description: Do not edit
 * @FilePath: /mvp-demo/src/router/index.js
 */
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
      path: "/vueflow",
      name: "vueflow",
      meta: {
        title: "vueflow",
      },
      component: () => import("@/views/vueflow/index.vue"),
    },
    {
      path: "/vueflow2",
      name: "vueflow2",
      meta: {
        title: "vueflow2",
      },
      component: () => import("@/views/vueflow2/index.vue"),
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
        {
          path: "page",
          name: "page",
          meta: {
            title: "3dpage",
          },
          component: () => import("@/views/3d/page.vue"),
        },
      ],
    },
    {
      path: "/qiniu",
      name: "qiniu",
      meta: {
        title: "七牛",
      },
      component: () => import("@/views/qiniu/index.vue"),
    },
    {
      path: "/blur",
      name: "blur",
      meta: {
        title: "blur",
      },
      component: () => import("@/views/blur/index.vue"),
    },
    {
      path: "/iphone",
      name: "iphone",
      meta: {
        title: "iphone",
      },
      component: () => import("@/views/blur/iphone.vue"),
    },
    {
      path: "/ipad",
      name: "ipad",
      meta: {
        title: "ipad",
      },
      component: () => import("@/views/blur/ipad.vue"),
    },
    {
      path: "/mac",
      name: "mac",
      meta: {
        title: "mac",
      },
      component: () => import("@/views/blur/mac.vue"),
    },
    {
      path: "/imac",
      name: "imac",
      meta: {
        title: "imac",
      },
      component: () => import("@/views/blur/imac.vue"),
    },
  ],
});

// 路由守卫
beforeRouter(router);
afterRouter(router);

export default router;
