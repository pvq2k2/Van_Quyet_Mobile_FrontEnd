import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createColor, getAllColor } from "../../services/color";

const initialState = {
  colors: {},
  color: {},
  isLoading: false,
};

export const fetchCreateColor = createAsyncThunk(
  "color/create",
  async (data, thunkAPI) => {
    try {
      const response = await createColor(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const fetchUpdateCategories = createAsyncThunk(
//   "categories/update",
//   async (data, thunkAPI) => {
//     try {
//       const response = await updateCategories(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const fetchGetCategoriesByID = createAsyncThunk(
//   "categories/get-categories-by-id",
//   async (data, thunkAPI) => {
//     try {
//       const response = await getCategoriesByID(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const fetchGetCategoriesBySlug = createAsyncThunk(
//   "categories/get-categories-by-slug",
//   async (data, thunkAPI) => {
//     try {
//       const response = await getCategoriesBySlug(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

export const fetchGetAllColor = createAsyncThunk(
  "color/get-all-color",
  async (data, thunkAPI) => {
    try {
      const response = await getAllColor(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllColor.fulfilled, (state, { payload }) => {
        state.colors = payload;
      })
      //   .addCase(fetchGetCategoriesByID.fulfilled, (state, { payload }) => {
      //     state.category = payload?.data;
      //   })
      //   .addCase(fetchGetCategoriesBySlug.fulfilled, (state, { payload }) => {
      //     state.category = payload?.data;
      //   })
      .addMatcher(
        (action) =>
          action.type.startsWith("color/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("color/") &&
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
export default colorSlice.reducer;
