import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import darkModeSlice from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import { injectStore } from "../services/instance";
import subCategoriesSlice from "./slice/subCategoriesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  darkMode: darkModeSlice,
  auth: authSlice,
  categories: categoriesSlice,
  subCategories: subCategoriesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
injectStore(store);

export const persistor = persistStore(store);
