import axios from "axios";
import { Message, Loading } from "element-ui";

let loading;
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: "加载中......",
    background: "rgba(0, 0, 0, 0.7)"
  });
};

const endLoading = () => {
  loading.close();
};

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    startLoading();
    return config;
  },
  error => {
    console.log(error);
    endLoading();
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    endLoading();
    const result = response.data;
    if (!result.success) {
      Message({
        type: "error",
        message: result.message || "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(result.message || "Error"));
    } else {
      return result;
    }
  },
  error => {
    endLoading();
    console.log(error);
    Message({
      type: "error",
      message: error.message,
      duration: 5 * 1000
    });
    return Promise.reject(new Error(error.message || "error"));
  }
);

export default service;
