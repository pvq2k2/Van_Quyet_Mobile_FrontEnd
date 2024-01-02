import axios from "axios";
import { fetchReNewToken, logout } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
import { history } from "../helpers/history";

let store;
export const injectStore = (_store) => {
  store = _store;
};

const instance = axios.create({
  baseURL: "https://localhost:7299/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      const refreshToken = store.getState().auth.user.refreshToken;
      if (refreshToken) {
        try {
          await store.dispatch(fetchReNewToken(refreshToken)).unwrap();
          return instance(originalRequest);
        } catch (error) {
          store.dispatch(logout());
          history.navigate("/login");
          toast.error(error);
        }
        // return;
      }
    }
    return Promise.reject(error);
  },
);

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.user.accessToken;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": config.headers["Content-Type"]
          ? config.headers["Content-Type"]
          : "application/json",
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
