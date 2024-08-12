import axios from "axios";
import { fetchReNewToken, logout } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
import { history } from "../helpers/history";
import axiosRetry from "axios-retry";

let store;
export const injectStore = (_store) => {
  store = _store;
};

const instance = axios.create({
  baseURL: "https://localhost:7299/api",
});

let shouldRetry = true;

axiosRetry(instance, {
  retries: 3,
  retryCondition: async (error) => {
    if (error.request.status === 401) {
      if (shouldRetry) {
        const refreshToken = store.getState().auth.user.refreshToken;
        try {
          await store.dispatch(fetchReNewToken(refreshToken)).unwrap();
          return true; // Cho phép retry sau khi refresh token thành công
        } catch (err) {
          shouldRetry = false; // Dừng retry nếu có lỗi trong quá trình refresh token
          history.navigate("/login");
          store.dispatch(logout());
          toast.error(error);
          return false; // Ngăn việc retry
        }
      } else {
        return false; // Ngăn việc retry nếu shouldRetry là false
      }
    }
    return error.request.status === 401 && shouldRetry;
  },
  retryDelay: async (retryCount) => {
    return retryCount * 1000;
  },
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.user.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
