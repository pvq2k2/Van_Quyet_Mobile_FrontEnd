import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";
import { AdminLayout, SiteLayout } from "./components/layouts";
import {
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
  VerifyAccount,
} from "./pages/Site";
import PrivateRouterAdmin from "./components/common/PrivateRouterAdmin";
import {
  CategoriesCreate,
  CategoriesDetail,
  CategoriesList,
  CategoriesUpdate,
} from "./pages/Admin/Categories";
import { history } from "./helpers/history";

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
          <Route path="categories">
            <Route index element={<CategoriesList />} />
            <Route path="create" element={<CategoriesCreate />} />
            <Route path="update/:id" element={<CategoriesUpdate />} />
            <Route path=":slug">
              <Route index element={<CategoriesDetail />} />
            </Route>
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
