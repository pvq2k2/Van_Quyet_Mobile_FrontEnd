import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Register } from "../../services/auth";

const initialState = {
  user: {},
  isLoading: false,
};

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await Register(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await Login(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        const userData = payload?.data;
        state.user = userData;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected") ||
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        },
      )
      .addDefaultCase((state, action) => {
        // console.log(`action type: ${action.type}`, current(state))
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
