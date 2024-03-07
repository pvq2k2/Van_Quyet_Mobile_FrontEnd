import { combineReducers } from "@reduxjs/toolkit";

import darkModeSlice from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import subCategoriesSlice from "./slice/subCategoriesSlice";
import productSlice from "./slice/productSlice";
import colorSlice from "./slice/colorSlice";

const rootReducer = combineReducers({
  darkMode: darkModeSlice,
  auth: authSlice,
  categories: categoriesSlice,
  subCategories: subCategoriesSlice,
  product: productSlice,
  color: colorSlice,
});

export default rootReducer;
