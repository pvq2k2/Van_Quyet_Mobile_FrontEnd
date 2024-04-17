import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSlides,
  getAllSlides,
  getSlidesByID,
  removeSlides,
  updateSlides,
} from "../../services/slides";

const initialState = {
  slides: {},
  slide: {},
  isLoading: false,
};

export const fetchGetAllSlides = createAsyncThunk(
  "slides/get-all-slides",
  async (data, thunkAPI) => {
    try {
      const response = await getAllSlides(data.pagination, data.productID);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCreateSlides = createAsyncThunk(
  "slides/create",
  async (data, thunkAPI) => {
    try {
      const response = await createSlides(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetSlidesByID = createAsyncThunk(
  "slides/get-update-slides-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getSlidesByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateSlides = createAsyncThunk(
  "slides/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateSlides(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchRemoveSlides = createAsyncThunk(
  "slides/remove",
  async (data, thunkAPI) => {
    try {
      const response = await removeSlides(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllSlides.fulfilled, (state, { payload }) => {
        state.slides = payload;
      })
      .addCase(fetchGetSlidesByID.fulfilled, (state, { payload }) => {
        state.slide = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("slides/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("slides/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});
export default slidesSlice.reducer;
