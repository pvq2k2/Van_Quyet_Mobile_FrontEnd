import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProductAttribute,
  getAllProductAttribute,
} from "../../services/productAttribute";

const initialState = {
  productAttributes: {},
  productAttribute: {},
  isLoading: false,
};

export const fetchGetAllProductAttribute = createAsyncThunk(
  "product-attribute/get-all-product-attribute",
  async (data, thunkAPI) => {
    try {
      const response = await getAllProductAttribute(
        data.pagination,
        data.productID,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCreateProductAttribute = createAsyncThunk(
  "product-attribute/create",
  async (data, thunkAPI) => {
    try {
      const response = await createProductAttribute(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const fetchUpdateProductImage = createAsyncThunk(
//   "product-image/update",
//   async (data, thunkAPI) => {
//     try {
//       const response = await updateProductImage(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const fetchGetProductImageByID = createAsyncThunk(
//   "product-image/get-product-image-by-id",
//   async (data, thunkAPI) => {
//     try {
//       const response = await getProductImageByID(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

const productAttributeSlice = createSlice({
  name: "product-attribute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllProductAttribute.fulfilled, (state, { payload }) => {
        state.productAttributes = payload;
      })
      //   .addCase(fetchGetProductImageByID.fulfilled, (state, { payload }) => {
      //     state.subCategory = payload?.data;
      //   })
      .addMatcher(
        (action) =>
          action.type.startsWith("product-attribute/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("product-attribute/") &&
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
export default productAttributeSlice.reducer;
