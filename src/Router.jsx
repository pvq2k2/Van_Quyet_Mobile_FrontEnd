import React from "react";
import { Route, Routes } from "react-router";
import { SiteLayout } from "./components/layouts";
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
