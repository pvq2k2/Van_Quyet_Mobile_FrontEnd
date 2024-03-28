import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createColor,
  getAllColor,
  getColorByID,
  updateColor,
} from "../../services/color";

const initialState = {
  colors: {},
  color: {},
  isLoading: false,
};

export const fetchCreateColor = createAsyncThunk(
  "color/create",
  async (data, thunkAPI) => {
    try {
      const response = await createColor(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateColor = createAsyncThunk(
  "color/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateColor(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetColorByID = createAsyncThunk(
  "color/get-color-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getColorByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetAllColor = createAsyncThunk(
  "color/get-all-color",
  async (data, thunkAPI) => {
    try {
      const response = await getAllColor(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllColor.fulfilled, (state, { payload }) => {
        state.colors = payload;
      })
      .addCase(fetchGetColorByID.fulfilled, (state, { payload }) => {
        state.color = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("color/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("color/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});
export default colorSlice.reducer;
