import Vconsole from "vconsole";

/**
 * 路由守卫(路由跳转前)
 * @param router
 */
export const beforeRouter = router => {
  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });
};

/**
 * 路由守卫(路由跳转后)
 * @param router
 */
export const afterRouter = router => {
  router.afterEach(to => {
    // 通过携带参数开启Vconsole
    if (to.query?.debugger === "yes") {
      new Vconsole();
    }
  });
};
