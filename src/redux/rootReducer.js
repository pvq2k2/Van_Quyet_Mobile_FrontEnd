import { combineReducers } from "@reduxjs/toolkit";

import darkModeSlice from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import subCategoriesSlice from "./slice/subCategoriesSlice";
import productSlice from "./slice/productSlice";
import colorSlice from "./slice/colorSlice";
import sizeSlice from "./slice/sizeSlice";
import productImageSlice from "./slice/productImageSlice";
import productAttributeSlice from "./slice/productAttributeSlice";

const rootReducer = combineReducers({
  darkMode: darkModeSlice,
  auth: authSlice,
  categories: categoriesSlice,
  subCategories: subCategoriesSlice,
  product: productSlice,
  productImage: productImageSlice,
  productAttribute: productAttributeSlice,
  color: colorSlice,
  size: sizeSlice,
});

export default rootReducer;
