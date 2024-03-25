import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProductImage,
  getAllProductImage,
  getUpdateProductImageByID,
  removeProductImage,
  updateProductImage,
} from "../../services/productImage";

const initialState = {
  productImages: {},
  productImage: {},
  isLoading: false,
};

export const fetchGetAllProductImage = createAsyncThunk(
  "product-image/get-all-product-image",
  async (data, thunkAPI) => {
    try {
      const response = await getAllProductImage(
        data.pagination,
        data.productID,
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCreateProductImage = createAsyncThunk(
  "product-image/create",
  async (data, thunkAPI) => {
    try {
      const response = await createProductImage(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetUpdateProductImageByID = createAsyncThunk(
  "product-image/get-update-product-image-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getUpdateProductImageByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateProductImage = createAsyncThunk(
  "product-image/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateProductImage(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchRemoveProductImage = createAsyncThunk(
  "product-image/remove",
  async (data, thunkAPI) => {
    try {
      const response = await removeProductImage(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const productImageSlice = createSlice({
  name: "product-image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllProductImage.fulfilled, (state, { payload }) => {
        state.productImages = payload;
      })
      .addCase(
        fetchGetUpdateProductImageByID.fulfilled,
        (state, { payload }) => {
          state.productImage = payload?.data;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("product-image/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("product-image/") &&
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
export default productImageSlice.reducer;
