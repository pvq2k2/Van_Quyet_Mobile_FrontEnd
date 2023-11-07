import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slice/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
