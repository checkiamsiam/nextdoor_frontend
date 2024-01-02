import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromCookie } from "@/utils/browserStorage/cookiestorage";
import axios from "axios";
import { accessToken_key } from "@/constants/localStorage.const";
import config from "@/config";

const axiosInstance = axios.create({
  baseURL: config.backendUrl,
});
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromCookie(accessToken_key);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  async function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      //signout
    }
    const responseObject: IGenericErrorResponse = {
      error: {
        message: error?.response?.data?.message || "Something went wrong",
      },
    };
    return responseObject;
  }
);

export { axiosInstance };
