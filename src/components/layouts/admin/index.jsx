import React, { useState } from "react";
import { Outlet } from "react-router";
import AdminSitebar from "./sitebar";
import AdminHeader from "./header";

const AdminLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="m-0 bg-gray-50 dark:bg-black lg:flex">
      <AdminSitebar toggleMenu={toggleMenu} isMenu={isMenu} />
      <main className="relative h-screen w-full rounded-xl transition-all duration-200 lg:mx-6 lg:mt-4">
        <AdminHeader toggleMenu={toggleMenu} />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
