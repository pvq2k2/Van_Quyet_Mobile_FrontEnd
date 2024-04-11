import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser, getUpdateUserByID, updateUser } from "../../services/user";

const initialState = {
  users: {},
  user: {},
  isLoading: false,
};

export const fetchGetAllUser = createAsyncThunk(
  "user/get-all-user",
  async (data, thunkAPI) => {
    try {
      const response = await getAllUser(data.pagination);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetUpdateUserByID = createAsyncThunk(
  "user/get-update-user-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getUpdateUserByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllUser.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(fetchGetUpdateUserByID.fulfilled, (state, { payload }) => {
        state.user = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("user/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("user/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});
export default userSlice.reducer;
