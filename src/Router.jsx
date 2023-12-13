import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AdminLayout, SiteLayout } from "./components/layouts";
import {
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
  VerifyAccount,
} from "./pages";
import PrivateRouterAdmin from "./components/common/PrivateRouterAdmin";

const Router = () => {
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
          <Route path="categories" element={<h1>categories</h1>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
