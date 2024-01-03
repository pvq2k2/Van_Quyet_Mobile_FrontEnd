import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSubCategories,
  getAllSubCategories,
  getSubCategoriesByID,
  updateSubCategories,
} from "../../services/subCategories";

const initialState = {
  subCategories: {},
  subCategory: {},
  isLoading: false,
};

export const fetchGetAllSubCategories = createAsyncThunk(
  "sub-categories/get-all-sub-categories",
  async (data, thunkAPI) => {
    try {
      const response = await getAllSubCategories(
        data.pagination,
        data.categoriesID,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCreateSubCategories = createAsyncThunk(
  "sub-categories/create",
  async (data, thunkAPI) => {
    try {
      const response = await createSubCategories(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateSubCategories = createAsyncThunk(
  "sub-categories/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateSubCategories(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetSubCategoriesByID = createAsyncThunk(
  "sub-categories/get-sub-categories-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getSubCategoriesByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const subCategoriesSlice = createSlice({
  name: "sub-categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllSubCategories.fulfilled, (state, { payload }) => {
        state.subCategories = payload;
      })
      .addCase(fetchGetSubCategoriesByID.fulfilled, (state, { payload }) => {
        state.subCategory = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("sub-categories/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("sub-categories/") &&
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
export default subCategoriesSlice.reducer;
