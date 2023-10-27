import axios from "axios";
import { Toast } from "vant";
import { ErrorMap } from "./errorMap";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const instance = axios.create({
  // mock模式默认添加/mock的baseurl
  baseURL: import.meta.env.VITE_MOCK_BASE_URL || import.meta.env.REQUEST_DOMAIN,
  timeout: 20000,
});

// axios请求拦截部分
instance.interceptors.request.use(config => {
  if (config.method === "post") {
    const data = config.params;
    if (data) {
      const body = Object.keys(data).map(key => `${key}=${data[key]}`);
      console.log(body);
      config.data = body.join("&");
    }
  }
  return config;
});

// axios响应拦截部分
instance.interceptors.response.use(
  response => {
    if ([200].includes(response.status)) {
      if ([100000].includes(response.data.code * 1)) {
        return Promise.resolve(response.data);
      } else if (response.data.code * 1 === 100002) {
        // 用户登录
        window.location.href = "//passport.weibo.cn/signin/login?r=" + encodeURIComponent(window.location.href);
      } else {
        // 指定报错信息
        const erroInfo = ErrorMap[response.data.code * 1];
        if (erroInfo) {
          Toast({
            type: erroInfo.type || "fail",
            message: erroInfo.message || response.data.msg,
          });
        }
        return Promise.reject(response.data);
      }
    } else {
      return Promise.reject(response.data);
    }
  },
  error => Promise.reject(error),
);

export default instance;
