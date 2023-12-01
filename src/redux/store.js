import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    auth: authSlice,
  },
});
