import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllSize } from "../../services/size";

const initialState = {
  sizes: {},
  size: {},
  isLoading: false,
};

// export const fetchCreateColor = createAsyncThunk(
//   "color/create",
//   async (data, thunkAPI) => {
//     try {
//       const response = await createColor(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const fetchUpdateColor = createAsyncThunk(
//   "color/update",
//   async (data, thunkAPI) => {
//     try {
//       const response = await updateColor(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const fetchGetColorByID = createAsyncThunk(
//   "color/get-color-by-id",
//   async (data, thunkAPI) => {
//     try {
//       const response = await getColorByID(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

export const fetchGetAllSize = createAsyncThunk(
  "size/get-all-size",
  async (data, thunkAPI) => {
    try {
      const response = await getAllSize(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllSize.fulfilled, (state, { payload }) => {
        state.sizes = payload;
      })
      //   .addCase(fetchGetColorByID.fulfilled, (state, { payload }) => {
      //     state.color = payload?.data;
      //   })
      .addMatcher(
        (action) =>
          action.type.startsWith("size/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("size/") &&
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
export default sizeSlice.reducer;
