import React from "react";
import {
  IoCartOutline,
  IoChatbubbleOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoLibraryOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const AdminSitebar = ({ toggleMenu, isMenu }) => {
  return (
    <>
      {/* <aside className="fixed z-50 min-h-screen w-[300px] bg-white py-4 pl-4 dark:bg-slate-800 lg:static lg:bg-transparent dark:lg:bg-transparent ">
        <div className="h-19">
          <Link
            className="m-0 block whitespace-nowrap px-8 py-6 text-base text-slate-700"
            to="/admin/dashboard"
          >
            <img
              src="../../../../src/assets/images/logo.png"
              className="inline h-full max-h-8 max-w-full transition-all duration-200"
              alt="main_logo"
            />
            <span className="ml-1 bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] bg-clip-text font-bold text-transparent transition-all duration-200">
              Văn Quyết Mobile
            </span>
          </Link>
        </div>
        <hr className="mx-4 dark:border-gray-700" />
        <div className="h-sidenav block max-h-screen w-auto grow basis-full items-center">
          <ul className="mb-0 flex flex-col pl-0">
            <NavItem
              to="/admin/dashboard"
              icon={IoHomeOutline}
              label="Bảng điều khiển"
            />

            <NavItem
              to="/admin/categories"
              icon={IoLibraryOutline}
              label="Danh mục"
            />

            <NavItem
              to="/admin/slides"
              icon={IoImagesOutline}
              label="Ảnh trình chiếu"
            />

            <NavItem
              to="/admin/products"
              icon={IoPhonePortraitOutline}
              label="Sản phẩm"
            />

            <NavItem
              to="/admin/users"
              icon={IoPersonOutline}
              label="Người dùng"
            />

            <NavItem
              to="/admin/comments"
              icon={IoChatbubbleOutline}
              label="Bình luận"
            />

            <NavItem to="/admin/carts" icon={IoCartOutline} label="Đơn hàng" />
          </ul>
        </div>
      </aside> */}

      <aside
        className={`fixed inset-0 z-50  transition-all duration-300 ease-in-out lg:sticky lg:h-screen lg:translate-x-0 lg:py-4
        ${isMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          onClick={toggleMenu}
          className={`overlay absolute z-[-1] h-full w-full bg-[#00000073] transition-opacity duration-1000 ease-in-out lg:hidden 
          ${isMenu ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div className="scrollbar block h-full w-[250px] flex-wrap items-center justify-between overflow-y-auto border-0 bg-white p-0 antialiased shadow-xl transition-transform duration-200 dark:bg-gray-900  lg:ml-4 lg:rounded-2xl xl:left-0 xl:translate-x-0 xl:bg-white">
          <div className="h-19">
            <Link
              className="m-0 block whitespace-nowrap px-8 py-6 text-base text-slate-700"
              to="/admin/dashboard"
            >
              <img
                src="../../../../src/assets/images/logo.png"
                className="inline h-full max-h-8 max-w-full transition-all duration-200"
                alt="main_logo"
              />
              <span className="ml-1 bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] bg-clip-text font-bold text-transparent transition-all duration-200">
                Văn Quyết Mobile
              </span>
            </Link>
          </div>
          <hr className="mx-4 dark:border-gray-700" />
          <div className="h-sidenav block max-h-screen w-auto grow basis-full items-center overflow-auto">
            <ul className="mb-0 flex min-h-full flex-col pl-0">
              <NavItem
                handleClick={toggleMenu}
                to="/admin/dashboard"
                icon={IoHomeOutline}
                label="Bảng điều khiển"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/categories"
                icon={IoLibraryOutline}
                label="Danh mục"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/slides"
                icon={IoImagesOutline}
                label="Ảnh trình chiếu"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/products"
                icon={IoPhonePortraitOutline}
                label="Sản phẩm"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/users"
                icon={IoPersonOutline}
                label="Người dùng"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/comments"
                icon={IoChatbubbleOutline}
                label="Bình luận"
              />

              <NavItem
                handleClick={toggleMenu}
                to="/admin/carts"
                icon={IoCartOutline}
                label="Đơn hàng"
              />
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSitebar;

function NavItem({ to, icon: Icon, label, handleClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="mt-0.5 w-full">
      <NavLink
        onClick={handleClick}
        to={to}
        end
        className={`${
          isActive ? "font-semibold dark:text-white" : ""
        } group mx-3 mt-3 flex items-center gap-x-2 whitespace-nowrap px-4 py-2 text-base hover:font-semibold`}
      >
        <div
          className={`${
            isActive
              ? "bg-gradient-to-tl from-main to-main-dark text-white"
              : "text-black dark:text-white"
          } mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white from-main to-main-dark bg-center stroke-0 text-center shadow-xl group-hover:bg-gradient-to-tl group-hover:text-white dark:bg-gray-900`}
        >
          <Icon />
        </div>
        <span className="pointer-events-none ml-1 opacity-100 dark:text-white">
          {label}
        </span>
      </NavLink>
    </li>
    // <li className="mt-0.5 w-full">
    //   <NavLink
    //     to={to}
    //     end
    //     className={`${
    //       isActive
    //         ? "bg-white font-semibold text-slate-700 shadow-lg dark:bg-gray-900 dark:text-white"
    //         : ""
    //     } group mx-4 mt-3 flex items-center whitespace-nowrap rounded-lg px-4 py-2 text-base transition-colors hover:bg-white hover:font-semibold hover:text-slate-700 hover:shadow-lg dark:hover:bg-gray-900 dark:hover:text-white`}
    //   >
    //     <div
    //       className={`${
    //         isActive
    //           ? "bg-gradient-to-tl from-main to-main-dark text-white"
    //           : "text-black dark:text-white"
    //       } mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white from-main to-main-dark bg-center stroke-0 text-center shadow-xl group-hover:bg-gradient-to-tl group-hover:text-white dark:bg-gray-900`}
    //     >
    //       <Icon />
    //     </div>
    //     <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300 dark:text-white">
    //       {label}
    //     </span>
    //   </NavLink>
    // </li>
  );
}
