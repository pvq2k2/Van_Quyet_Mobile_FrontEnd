import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllSubCategories } from "../../services/subCategories";

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

const subCategoriesSlice = createSlice({
  name: "sub-categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllSubCategories.fulfilled, (state, { payload }) => {
        state.subCategories = payload;
      })
      // .addCase(fetchGetCategoriesByID.fulfilled, (state, { payload }) => {
      //   state.categories = payload?.data;
      // })
      // .addCase(fetchGetCategoriesBySlug.fulfilled, (state, { payload }) => {
      //   state.categories = payload?.data;
      // })
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
