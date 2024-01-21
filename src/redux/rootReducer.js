import { combineReducers } from "@reduxjs/toolkit";

import darkModeSlice from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import subCategoriesSlice from "./slice/subCategoriesSlice";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({
  darkMode: darkModeSlice,
  auth: authSlice,
  categories: categoriesSlice,
  subCategories: subCategoriesSlice,
  product: productSlice,
});

export default rootReducer;
