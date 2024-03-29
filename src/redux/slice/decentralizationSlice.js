import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createDecentralization,
  getAllDecentralization,
  getDecentralizationByID,
  updateDecentralization,
} from "../../services/decentralization";

const initialState = {
  decentralizations: {},
  decentralization: {},
  isLoading: false,
};

export const fetchCreateDecentralization = createAsyncThunk(
  "decentralization/create",
  async (data, thunkAPI) => {
    try {
      const response = await createDecentralization(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUpdateDecentralization = createAsyncThunk(
  "decentralization/update",
  async (data, thunkAPI) => {
    try {
      const response = await updateDecentralization(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetDecentralizationByID = createAsyncThunk(
  "decentralization/get-decentralization-by-id",
  async (data, thunkAPI) => {
    try {
      const response = await getDecentralizationByID(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchGetAllDecentralization = createAsyncThunk(
  "decentralization/get-all-decentralization",
  async (data, thunkAPI) => {
    try {
      const response = await getAllDecentralization(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const decentralizationSlice = createSlice({
  name: "decentralization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllDecentralization.fulfilled, (state, { payload }) => {
        state.decentralizations = payload;
      })
      .addCase(fetchGetDecentralizationByID.fulfilled, (state, { payload }) => {
        state.decentralization = payload?.data;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("decentralization/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("decentralization/") &&
          (action.type.endsWith("/rejected") ||
            action.type.endsWith("/fulfilled")),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});
export default decentralizationSlice.reducer;
