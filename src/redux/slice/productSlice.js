import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../../services/product";

const initialState = {
  products: {},
  product: {},
  isLoading: false,
};

export const fetchGetAllProduct = createAsyncThunk(
  "product/get-all-product",
  async (data, thunkAPI) => {
    try {
      const response = await getAllProduct(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllProduct.fulfilled, (state, { payload }) => {
        state.subCategories = payload;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("product/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("product/") &&
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
export default productSlice.reducer;
