import PropTypes from "prop-types";
import {
  IoCartOutline,
  IoChatbubbleOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoColorPaletteOutline,
  IoHardwareChipOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoLibraryOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
  IoShieldOutline,
} from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const AdminSitebar = ({ toggleMenu, isMenu }) => {
  const navData = [
    {
      to: "/admin/dashboard",
      icon: IoHomeOutline,
      label: "Bảng điều khiển",
      isSubMenu: false,
    },
    {
      to: "/admin/slides",
      icon: IoImagesOutline,
      label: "Ảnh trình chiếu",
      isSubMenu: false,
    },
    {
      to: "/admin/products",
      icon: IoPhonePortraitOutline,
      label: "Sản phẩm",
      isSubMenu: true,
      subMenuData: [
        {
          to: "/admin/products/categories",
          icon: IoLibraryOutline,
          label: "Danh mục",
          isSubMenu: false,
          activeParents: "/admin/products",
        },
        {
          to: "/admin/products/colors",
          icon: IoColorPaletteOutline,
          label: "Màu sắc",
          isSubMenu: false,
          activeParents: "/admin/products",
        },
        {
          to: "/admin/products/sizes",
          icon: IoHardwareChipOutline,
          label: "Kích cỡ",
          isSubMenu: false,
          activeParents: "/admin/products",
        },
        {
          to: "/admin/products/comments",
          icon: IoChatbubbleOutline,
          label: "Bình luận",
          isSubMenu: false,
          activeParents: "/admin/products",
        },
      ],
    },
    {
      to: "/admin/users",
      icon: IoPersonOutline,
      label: "Người dùng",
      isSubMenu: true,
      subMenuData: [
        {
          to: "/admin/users/decentralization",
          icon: IoShieldOutline,
          label: "Quyền",
          isSubMenu: false,
          activeParents: "/admin/users",
        },
      ],
    },
    {
      to: "/admin/carts",
      icon: IoCartOutline,
      label: "Đơn hàng",
      isSubMenu: false,
    },
  ];
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
              className="m-0 flex items-center justify-center whitespace-nowrap px-3 py-6 text-base text-slate-700"
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
          <div className="h-sidenav block max-h-screen w-auto grow basis-full items-center overflow-hidden">
            <ul className="mb-0 flex min-h-full flex-col pl-0">
              {navData.map((item) => {
                return (
                  <NavItem
                    key={item.icon}
                    handleClick={toggleMenu}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    isSubMenu={item.isSubMenu}
                    subMenuData={item.subMenuData}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

AdminSitebar.propTypes = {
  toggleMenu: PropTypes.func,
  isMenu: PropTypes.bool,
};
export default AdminSitebar;

function NavItem({
  to,
  icon: Icon,
  label,
  handleClick,
  isSubMenu,
  subMenuData,
  activeParents,
}) {
  const location = useLocation();
  // const isActive = location.pathname === to;
  const isActive = location.pathname.startsWith(to);
  const isActiveParents = activeParents
    ? location.pathname.startsWith(activeParents)
    : false;
  return (
    <>
      <li className="mt-0.5 flex w-full items-center justify-between">
        <NavLink
          onClick={handleClick}
          to={to}
          end
          className={`${
            isActive ? "font-semibold dark:text-white" : ""
          } group mx-3 mt-3 flex items-center gap-x-2 whitespace-nowrap px-4 py-2 pl-1 text-base hover:font-semibold`}
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
        {isSubMenu ? (
          isActive ? (
            <IoChevronDownOutline className="mr-3 mt-3 text-lg text-main" />
          ) : (
            <IoChevronUpOutline className="mr-3 mt-3 text-lg" />
          )
        ) : (
          ""
        )}
      </li>
      {isSubMenu && subMenuData ? (
        <ul
          className={`pl-8 ${
            isActive || isActiveParents ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-500`}
        >
          {subMenuData.map((item) => (
            <NavItem
              key={item.icon}
              handleClick={handleClick}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isSubMenu={item.isSubMenu}
              activeParents={item.activeParents}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

NavItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  isSubMenu: PropTypes.bool,
  subMenuData: PropTypes.array,
  activeParents: PropTypes.string,
};
