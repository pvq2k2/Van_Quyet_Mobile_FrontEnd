import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSize,
  getAllSize,
  getSizeByID,
  updateSize,
} from "../../services/size";

const initialState = {
  sizes: {},
  size: {},
  isLoading: false,
};

export const fetchCreateSize = createAsyncThunk(
  "size/create",
  async (data, thunkAPI) => {
    try {
      const response = await createSize(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateSize = createAsyncThunk(
  "size/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateSize(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetSizeByID = createAsyncThunk(
  "size/get-size-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getSizeByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetAllSize = createAsyncThunk(
  "size/get-all-size",
  async (data, thunkAPI) => {
    try {
      const response = await getAllSize(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllSize.fulfilled, (state, { payload }) => {
        state.sizes = payload;
      })
      .addCase(fetchGetSizeByID.fulfilled, (state, { payload }) => {
        state.size = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("size/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("size/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      )
      .addDefaultCase((state, action) => {
        // console.log(`action type: ${action.type}`, current(state))
      });
  },
});
export default sizeSlice.reducer;
