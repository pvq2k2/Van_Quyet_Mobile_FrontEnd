import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  getAllProduct,
  getProductByID,
  getUpdateProductByID,
  updateProduct,
} from "../../services/product";

const initialState = {
  products: {},
  product: {},
  isLoading: false,
};

export const fetchCreateProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    try {
      const response = await createProduct(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetUpdateProductByID = createAsyncThunk(
  "product/get-update-product-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getUpdateProductByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetProductByID = createAsyncThunk(
  "product/get-product-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getProductByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateProduct(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
        state.products = payload;
      })
      .addCase(fetchGetUpdateProductByID.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
      })
      .addCase(fetchGetProductByID.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
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
