import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    mode: localStorage.theme || "light",
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.theme = state.mode;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
