import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCategories,
  getAllCategories,
  getCategoriesByID,
  getCategoriesBySlug,
  updateCategories,
} from "../../services/categories";

const initialState = {
  categories: {},
  category: {},
  isLoading: false,
};

export const fetchCreateCategories = createAsyncThunk(
  "categories/create",
  async (data, thunkAPI) => {
    try {
      const response = await createCategories(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateCategories = createAsyncThunk(
  "categories/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateCategories(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetCategoriesByID = createAsyncThunk(
  "categories/get-categories-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getCategoriesByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetCategoriesBySlug = createAsyncThunk(
  "categories/get-categories-by-slug",
  async (data, thunkAPI) => {
    try {
      const response = await getCategoriesBySlug(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetAllCategories = createAsyncThunk(
  "categories/get-all-categories",
  async (data, thunkAPI) => {
    try {
      const response = await getAllCategories(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(fetchGetCategoriesByID.fulfilled, (state, { payload }) => {
        state.category = payload?.data;
      })
      .addCase(fetchGetCategoriesBySlug.fulfilled, (state, { payload }) => {
        state.category = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("categories/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("categories/") &&
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
export default categoriesSlice.reducer;
