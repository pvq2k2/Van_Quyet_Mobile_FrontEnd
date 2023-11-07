import React from "react";
import { Route, Routes } from "react-router";
import { SiteLayout } from "./components/layouts";
import Home from "./pages/home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
