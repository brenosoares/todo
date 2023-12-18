import axios from "axios";
import { Task, useToken } from "../../store";
import { AuthApi, AuthLogin } from "../auth";

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

const get = async (url: string) => await api.get(url);
const post = async (url: string, params: Task | AuthLogin) =>
  await api.post(url, params);
const put = async (url: string, params: Task) => await api.put(url, params);
const del = async (url: string) => await api.delete(url);

api.interceptors.request.use(async (config) => {
  const token = useToken.getState().token;
  const url = config?.url;
  const isLogin = url?.includes("login");
  if (token.length > 0 && !isLogin) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (token.length <= 0 && !isLogin) {
    try {
      const newToken = await AuthApi();
      if (newToken) {
        config.headers.Authorization = `Bearer ${newToken}`;
        useToken.getState().setToken(newToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return config;
});

export const API = {
  get: get,
  post: post,
  put: put,
  delete: del,
};
