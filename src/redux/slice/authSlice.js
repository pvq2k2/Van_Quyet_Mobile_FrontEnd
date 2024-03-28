import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  login,
  reNewToken,
  register,
  resetPassword,
  verifyAccount,
} from "../../services/auth";

const initialState = {
  user: {},
  isLoading: false,
};

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
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
      const response = await login(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchForgotPassword = createAsyncThunk(
  "auth/forgot-password",
  async (data, thunkAPI) => {
    try {
      const response = await forgotPassword(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchResetPassword = createAsyncThunk(
  "auth/reset-password",
  async (data, thunkAPI) => {
    try {
      const response = await resetPassword(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchVerifyAccount = createAsyncThunk(
  "auth/verify-account",
  async (data, thunkAPI) => {
    try {
      const response = await verifyAccount(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchReNewToken = createAsyncThunk(
  "auth/re-new-token",
  async (data, thunkAPI) => {
    try {
      const response = await reNewToken(data);
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
      .addCase(fetchReNewToken.fulfilled, (state, { payload }) => {
        const userData = payload?.data;
        state.user = userData;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
