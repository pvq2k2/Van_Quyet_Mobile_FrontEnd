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
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      const refreshToken = store.getState().auth.user.refreshToken;
      if (refreshToken) {
        // store
        //   .dispatch(fetchReNewToken(refreshToken))
        //   .unwrap()
        //   .catch((error) => {
        //     store.dispatch(logout());
        //     // history.navigate("/login");
        //     toast.error(error);
        //   });
        try {
          await store.dispatch(fetchReNewToken(refreshToken)).unwrap();
        } catch (error) {
          store.dispatch(logout());
          toast.error(error);
        }
        return;
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
