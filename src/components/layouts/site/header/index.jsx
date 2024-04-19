import { Fragment, useEffect, useRef, useState } from "react";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoCartOutline,
  IoHomeOutline,
  IoMenuOutline,
  IoChevronDownSharp,
  IoLogInOutline,
  IoLogOutOutline,
  IoBagOutline,
} from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { ToggleTheme } from "../../../common";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/slice/authSlice";
import { history } from "../../../../helpers/history";
import { toast } from "react-toastify";
import { getCategoriesToView } from "../../../../services/categories";

const SiteHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isUserVisible, setUserVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setUserVisible(false);
    setMenuVisible(false);
  };

  const toggleUser = () => {
    setSearchVisible(false);
    setMenuVisible(false);
    setUserVisible(!isUserVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const headerPC = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerPC.current?.classList.add(
          "bg-[hsla(0,0%,100%,0.8)]",
          "dark:bg-[hsla(220.91,39.29%,10.98%,0.8)]",
          "shadow-xl",
        );
      } else {
        headerPC.current?.classList.remove(
          "bg-[hsla(0,0%,100%,0.8)]",
          "dark:bg-[hsla(220.91,39.29%,10.98%,0.8)]",
          "shadow-xl",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    history.navigate("/login");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategoriesToView();
        setCategories(categories);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {/* md, lg, xl */}
      <div className="header-top hidden bg-main-dark md:block">
        <div className="mx-auto max-w-screen-xl md:px-5 xl:px-0">
          <ul className="flex justify-end gap-x-10 text-white">
            <li className="group relative block py-2 transition duration-300 ease-out hover:ease-in">
              <Link
                to="#"
                className="transition duration-200 ease-in-out group-hover:text-main"
              >
                Giới thiệu
              </Link>
              <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
            <li className="group relative block py-2 transition duration-300 ease-out hover:ease-in">
              <Link
                to="#"
                className="transition duration-200 ease-in-out group-hover:text-main"
              >
                Liên hệ
              </Link>
              <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
            <li className="group relative block py-2 transition duration-300 ease-out hover:ease-in">
              <Link
                to="#"
                className="transition duration-200 ease-in-out group-hover:text-main"
              >
                Góp ý
              </Link>
              <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
            <li className="group relative block py-2 transition duration-300 ease-out hover:ease-in">
              <Link
                to="#"
                className="transition duration-200 ease-in-out group-hover:text-main"
              >
                Hỏi đáp
              </Link>
              <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={headerPC}
        className="sticky top-0 z-50 hidden py-3 backdrop-blur-[30px] backdrop-saturate-[200%] transition-all duration-300 ease-in-out md:block"
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between md:px-5">
          <div className="logo md:w-52 lg:w-56 xl:w-64">
            <Link to="/">
              <img
                src="../../../../../src/assets/images/logo_horizontal.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search">
            <form>
              <div className="relative mt-4 flex items-center md:mt-0">
                <input
                  type="text"
                  name="keyWord"
                  placeholder="Hôm nay bạn cần tìm gì ?"
                  className="block rounded-3xl border border-gray-200 bg-white py-1.5 pl-5 pr-14 text-gray-700 placeholder-gray-400/70 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:w-[300px] lg:w-[500px] xl:w-[700px]"
                />
                <button
                  type="submit"
                  className="absolute right-[10px] top-[-10px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] shadow-xl hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7]"
                >
                  <IoSearchOutline className="m-auto text-xl text-white" />
                </button>
              </div>
            </form>
          </div>
          <div className="box-icon flex items-center gap-x-8">
            <div id="toggleModalUser" className="user group relative">
              {Object.getOwnPropertyNames(user).length > 0 ? (
                <img
                  src={user?.avatar}
                  className="h-10 w-10 rounded-full shadow-xl"
                />
              ) : (
                <IoPersonOutline className="cursor-pointer text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white" />
              )}

              <div
                id="boxList"
                className={`invisible absolute top-14 z-20 w-60 rounded-lg bg-[hsla(0,0%,100%,0.8)] bg-white p-3 shadow-xl backdrop-blur-[30px] backdrop-saturate-[200%] duration-200 ease-linear before:absolute  before:-top-2
                          before:z-10 before:h-5 before:w-5 before:rotate-45
                          before:rounded before:bg-white group-hover:visible dark:bg-gray-900 dark:before:bg-gray-900 md:left-[-80px] xl:left-[-100px] ${
                            Object.getOwnPropertyNames(user).length > 0
                              ? "md:before:left-[90px] xl:before:left-[111px]"
                              : "md:before:left-[85px] xl:before:left-[105px]"
                          }`}
              >
                <div className="user_box">
                  <ul>
                    <div>
                      {Object.getOwnPropertyNames(user).length > 0 ? (
                        <Fragment>
                          <div className="w-full items-center pb-3">
                            <div className="ml-4">
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                Xin chào !
                              </div>
                              <div>
                                <span className="user-name text-base font-medium text-gray-900 dark:text-white">
                                  {user?.fullName}
                                </span>
                              </div>
                            </div>
                          </div>

                          <Link
                            to={
                              user.role == 2
                                ? "/admin/dashboard"
                                : "/user/dashboard"
                            }
                            className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                          >
                            Trang quản trị
                          </Link>
                          <Link
                            to="#"
                            className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                          >
                            Đơn hàng của tôi
                          </Link>
                          <div
                            onClick={() => handleLogout()}
                            className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                          >
                            Đăng xuất
                          </div>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Link
                            to="/login"
                            className="mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                          >
                            Đăng nhập
                          </Link>
                          <Link
                            to="/register"
                            className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                          >
                            Đăng ký
                          </Link>
                        </Fragment>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <ToggleTheme />
            <Link to="#" className="group relative flex items-center">
              <IoCartOutline className="text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white" />
              <span className="absolute -top-3 rounded-full bg-main px-2 text-center text-white md:-right-3 xl:-right-5">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="z-50 hidden md:block md:px-5 xl:px-0">
        <div className="relative mx-auto max-w-screen-xl rounded-md bg-main-dark">
          <ul className="flex items-center justify-center pb-[3px] md:gap-x-7 lg:gap-x-16">
            {categories?.map((category) => (
              <li key={category.id} className="group block py-2">
                <Link to={category.slug} className={`relative`}>
                  <div className="flex flex-col items-center text-xs uppercase text-white transition duration-200 ease-in-out group-hover:text-main">
                    <span className="font-['FontIcon'] text-2xl">
                      {category.icon}
                    </span>
                    <span>{category.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
                </Link>
                {category?.listSubCategories.length > 0 ? (
                  <div className="sub-nav top-100 invisible absolute left-0 right-0 z-50 group-hover:visible">
                    <div className="sub mt-5 flex gap-x-20 rounded-md bg-white p-5 shadow-md dark:bg-gray-900 dark:text-white">
                      <div className="col">
                        <h4 className="transition duration-300 ease-in-out hover:text-main">
                          <Link to={category.slug} className="font-bold">
                            Hãng sản xuất
                          </Link>
                        </h4>
                        <ul className="display-column pt-2">
                          {category.listSubCategories.map((subCategory) => (
                            <li
                              key={subCategory.id}
                              className="transition duration-300 ease-in-out hover:text-main"
                            >
                              <Link
                                to={`${category.slug}/${subCategory.slug}`}
                                className="text-sm"
                              >
                                {subCategory.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* sm */}
      <div className="top fixed left-0 right-0 z-30 flex items-center justify-around border-b-2 border-gray-200 bg-[hsla(0,0%,100%,0.8)] py-2 shadow-md backdrop-blur-[30px] backdrop-saturate-[200%] dark:border-gray-900 dark:bg-[hsla(220.91,39.29%,10.98%,0.8)] md:hidden">
        <div className="menu" onClick={toggleMenu}>
          <IoMenuOutline className="text-3xl transition-all duration-300 ease-in-out hover:text-main dark:text-white" />
        </div>
        <div className="logo w-52">
          <Link to="/">
            <img
              src="../../../../../src/assets/images/logo_horizontal.png"
              alt="logo"
            />
          </Link>
        </div>
        <ToggleTheme />
      </div>

      <nav
        className={`fixed bottom-[90px] left-0 right-0 top-[78px] z-20 w-full transition-all duration-300 ease-in-out md:hidden ${
          isMenuVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`absolute h-full w-full bg-[#00000073] transition-opacity duration-1000 ease-in-out ${
            isMenuVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>
        <ul className="scrollbar relative h-full w-[320px] overflow-auto rounded-r-lg border-b-2 border-r-2 border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-900">
          {categories?.map((category) => (
            <li key={category.id} className="group block p-5">
              <Link to={category.slug} target="_self" className="relative pl-3">
                <div className="flex w-full items-center justify-start">
                  <span className="pr-2 font-['FontIcon'] text-2xl font-bold transition duration-200 ease-in-out group-hover:text-main dark:text-white">
                    {category.icon}
                  </span>
                  <div
                    className={`flex w-full items-center pl-3 font-bold transition duration-200 ease-in-out group-hover:text-main dark:text-white`}
                  >
                    {category.name}
                    {category?.listSubCategories.length > 0 ? (
                      <IoChevronDownSharp className="arrow-icon ml-auto text-xl" />
                    ) : null}
                  </div>
                </div>
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>

              {category?.listSubCategories.length > 0 ? (
                <div className="sub-nav transition-max-h max-h-0 overflow-hidden duration-200 group-hover:max-h-fit">
                  <div className="sub mt-5 flex flex-col gap-x-20 rounded-md border bg-white p-5 shadow-md dark:bg-gray-900 dark:text-white">
                    <div className="col">
                      <h4 className="w-full rounded-md bg-gray-100 p-1 text-center duration-200 ease-in-out hover:text-main dark:bg-gray-700">
                        <Link to={category.slug} className="font-bold">
                          Hãng sản xuất
                        </Link>
                      </h4>
                      <ul className="display-column flex flex-col gap-y-3 pt-3">
                        {category?.listSubCategories.map((subCategory) => (
                          <li key={subCategory.id}>
                            <Link
                              to={`${category.slug}/${subCategory.slug}`}
                              className="text-sm transition duration-200 ease-in-out hover:text-main"
                            >
                              {subCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="search"
        className={`fixed z-30 h-full w-full bg-[rgb(244,244,244)] transition-all duration-300 ease-in-out dark:bg-black md:hidden ${
          isSearchVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mt-10 h-full px-10">
          <form>
            <div className="relative mt-4 flex w-full items-center">
              <input
                type="text"
                name="keyWord"
                placeholder="Hôm nay bạn cần tìm gì ?"
                className="block w-full rounded-3xl border border-gray-200 bg-white py-1.5 pl-5 pr-14 text-gray-700 placeholder-gray-400/70 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
              <button className="absolute right-[10px] top-[-10px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] shadow-xl hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7]">
                <IoSearchOutline className="m-auto text-xl text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="user"
        className={`fixed z-30 h-full w-full bg-[rgb(244,244,244)] transition-all duration-300 ease-in-out dark:bg-black md:hidden ${
          isUserVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-full select-none">
          <div className="flex items-center gap-3 bg-white p-5 dark:bg-gray-900">
            <div>
              {Object.getOwnPropertyNames(user).length > 0 ? (
                <img
                  src={user?.avatar}
                  className="h-14 w-14 rounded-full shadow-xl"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-current shadow-xl dark:border-white">
                  <IoPersonOutline className="text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white" />
                </div>
              )}
            </div>
            <div
              className={`box-name flex ${
                Object.getOwnPropertyNames(user).length > 0
                  ? "flex-col-reverse"
                  : "flex-col"
              }`}
            >
              <h3 className="font-semibold dark:text-white">
                {Object.getOwnPropertyNames(user).length > 0
                  ? user?.fullName
                  : "Khách"}
              </h3>
              <span className="text-xs dark:text-white">
                {Object.getOwnPropertyNames(user).length > 0
                  ? "Xin chào !"
                  : "Đăng nhập để sử dùng được nhiều tính năng !"}
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-y-3">
            {Object.getOwnPropertyNames(user).length > 0 ? (
              <Fragment>
                <Link
                  to={user.role == 2 ? "/admin/dashboard" : "/user/dashboard"}
                  onClick={() => toggleUser()}
                  className="group flex cursor-pointer items-center gap-x-3 bg-white px-5 py-3 transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] dark:bg-gray-900"
                >
                  <LuLayoutDashboard className="text-2xl group-hover:text-white dark:text-white" />
                  <span className="font-semibold text-black group-hover:text-white dark:text-white">
                    Trang quản trị
                  </span>
                </Link>
                <Link
                  to="#"
                  onClick={() => toggleUser()}
                  className="group flex cursor-pointer items-center gap-x-3 bg-white px-5 py-3 transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] dark:bg-gray-900"
                >
                  <IoBagOutline className="text-2xl group-hover:text-white dark:text-white" />
                  <span className="font-semibold text-black group-hover:text-white dark:text-white">
                    Đơn hàng của tôi
                  </span>
                </Link>

                <div
                  onClick={() => handleLogout()}
                  className="group flex cursor-pointer items-center gap-x-3 bg-white px-5 py-3 transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] dark:bg-gray-900"
                >
                  <IoLogOutOutline className="text-2xl group-hover:text-white dark:text-white" />
                  <span className="font-semibold text-black group-hover:text-white dark:text-white">
                    Đăng xuất
                  </span>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Link
                  to="/login"
                  onClick={() => toggleUser()}
                  className="group flex cursor-pointer items-center gap-x-3 bg-white px-5 py-3 transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] dark:bg-gray-900"
                >
                  <IoLogInOutline className="text-2xl group-hover:text-white dark:text-white" />
                  <span className="font-semibold text-black group-hover:text-white dark:text-white">
                    Đăng nhập
                  </span>
                </Link>
                <Link
                  to="/register"
                  onClick={() => toggleUser()}
                  className="group flex cursor-pointer items-center gap-x-3 bg-white px-5 py-3 transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] dark:bg-gray-900"
                >
                  <FaRegRegistered className="text-2xl group-hover:text-white dark:text-white" />
                  <span className="font-semibold text-black group-hover:text-white dark:text-white">
                    Đăng ký
                  </span>
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-xl bg-white shadow-md dark:bg-gray-900 md:hidden">
        <nav className="max-w-screen-xl">
          <ul className="menu flex items-center justify-center gap-x-6 py-3 sm:gap-x-24">
            <li className="group relative select-none rounded-xl p-2 transition-all duration-300 ease-linear hover:bg-blue-100">
              <Link to="/" className="flex flex-col items-center">
                <IoHomeOutline className="text-3xl group-hover:text-main dark:text-white" />
                <span className="pt-1 text-xs group-hover:text-main dark:text-white">
                  Trang chủ
                </span>
              </Link>
            </li>

            <li
              className={`search group relative cursor-pointer select-none rounded-xl p-2 hover:bg-blue-100 ${
                isSearchVisible ? "bg-blue-100" : ""
              }`}
              onClick={toggleSearch}
            >
              <div className="flex flex-col items-center">
                <IoSearchOutline
                  className={`text-3xl group-hover:text-main ${
                    isSearchVisible
                      ? "text-main dark:text-main"
                      : "dark:text-white"
                  }`}
                />
                <span
                  className={`pt-1 text-xs group-hover:text-main ${
                    isSearchVisible
                      ? "text-main dark:text-main"
                      : "dark:text-white"
                  }`}
                >
                  Tìm kiếm
                </span>
              </div>
            </li>

            <li className="group relative select-none rounded-xl p-2 hover:bg-blue-100">
              <Link to="#" className="flex flex-col items-center">
                <IoCartOutline className="text-3xl group-hover:text-main dark:text-white" />
                <span className="pt-1 text-xs group-hover:text-main dark:text-white">
                  Giỏ hàng
                </span>
              </Link>
            </li>

            <li
              className={`search group relative cursor-pointer select-none rounded-xl p-2 hover:bg-blue-100 ${
                isUserVisible ? "bg-blue-100" : ""
              }`}
              onClick={toggleUser}
            >
              <div className="flex flex-col items-center">
                <IoPersonOutline
                  className={`text-3xl group-hover:text-main ${
                    isUserVisible
                      ? "text-main dark:text-main"
                      : "dark:text-white"
                  }`}
                />
                <span
                  className={`pt-1 text-xs group-hover:text-main ${
                    isUserVisible
                      ? "text-main dark:text-main"
                      : "dark:text-white"
                  }`}
                >
                  Tài khoản
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SiteHeader;
