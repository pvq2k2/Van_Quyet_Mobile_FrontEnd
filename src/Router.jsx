import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import PrivateRouterAdmin from "./components/common/PrivateRouterAdmin";
import { AdminLayout, SiteLayout } from "./components/layouts";
import { history } from "./helpers/history";
import {
  CategoriesCreate,
  CategoriesDetail,
  CategoriesList,
  CategoriesUpdate,
} from "./pages/Admin/Categories";
import {
  SubCategoriesCreate,
  SubCategoriesUpdate,
} from "./pages/Admin/SubCategories";
import {
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
  VerifyAccount,
} from "./pages/Site";
import {
  ProductCreate,
  ProductDetail,
  ProductList,
  ProductUpdate,
} from "./pages/Admin/Product";
import { ColorCreate, ColorList, ColorUpdate } from "./pages/Admin/Color";
import { SizeCreate, SizeList, SizeUpdate } from "./pages/Admin/Size";

const Router = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verify-account/:token" element={<VerifyAccount />} />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRouterAdmin>
              <AdminLayout />
            </PrivateRouterAdmin>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<h1>dashboard</h1>} />

          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path="update/:id" element={<ProductUpdate />} />
            <Route path=":productId">
              <Route index element={<ProductDetail />} />
              {/* <Route path="create" element={<SubCategoriesCreate />} />
              <Route path="update/:id" element={<SubCategoriesUpdate />} /> */}
            </Route>
            <Route path="categories">
              <Route index element={<CategoriesList />} />
              <Route path="create" element={<CategoriesCreate />} />
              <Route path="update/:id" element={<CategoriesUpdate />} />
              <Route path=":slug">
                <Route index element={<CategoriesDetail />} />
                <Route path="create" element={<SubCategoriesCreate />} />
                <Route path="update/:id" element={<SubCategoriesUpdate />} />
              </Route>
            </Route>
            <Route path="colors">
              <Route index element={<ColorList />} />
              <Route path="create" element={<ColorCreate />} />
              <Route path="update/:id" element={<ColorUpdate />} />
            </Route>
            <Route path="sizes">
              <Route index element={<SizeList />} />
              <Route path="create" element={<SizeCreate />} />
              <Route path="update/:id" element={<SizeUpdate />} />
            </Route>
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
