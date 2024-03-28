import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProductAttribute,
  getAllProductAttribute,
  getUpdateProductAttributeByID,
  removeProductAttribute,
  updateProductAttribute,
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

export const fetchGetUpdateProductAttributeByID = createAsyncThunk(
  "product-attribute/get-update-product-attribute-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getUpdateProductAttributeByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateProductAttribute = createAsyncThunk(
  "product-attribute/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateProductAttribute(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchRemoveProductAttribute = createAsyncThunk(
  "product-attribute/remove",
  async (data, thunkAPI) => {
    try {
      const response = await removeProductAttribute(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const productAttributeSlice = createSlice({
  name: "product-attribute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllProductAttribute.fulfilled, (state, { payload }) => {
        state.productAttributes = payload;
      })
      .addCase(
        fetchGetUpdateProductAttributeByID.fulfilled,
        (state, { payload }) => {
          state.productAttribute = payload?.data;
        },
      )
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
      );
  },
});
export default productAttributeSlice.reducer;
