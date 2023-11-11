import React from "react";
import { Route, Routes } from "react-router";
import { SiteLayout } from "./components/layouts";
import { Home, Login } from "./pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
