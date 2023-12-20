import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCategories } from "../../services/categories";

const initialState = {
  categories: {},
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

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchLogin.fulfilled, (state, { payload }) => {
      //   const userData = payload?.data;
      //   state.user = userData;
      // })
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
export default categoriesSlice.reducer;
