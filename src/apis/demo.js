/**
 * @file demo接口定义
 */
import request from "./request";

/**
 * test
 * @param data
 * @returns
 */
export const demoApi = async data => {
  return request({
    url: "/demo/test",
    method: "GET",
    params: data,
  });
};
