import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AdminLayout, SiteLayout } from "./components/layouts";
import { Home, Login, NotFound, Register } from "./pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
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
