import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Register } from "../../services/auth";

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default authSlice.reducer;
