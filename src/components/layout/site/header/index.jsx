import React, { useState } from "react";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoCartOutline,
  IoHomeOutline,
  IoMenuOutline,
  IoChevronDownSharp,
} from "react-icons/io5";
import { ToggleTheme } from "../../../common";
import { Link } from "react-router-dom";

const SiteHeader = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      {/* md, lg, xl */}
      <div className="header-top hidden bg-main-dark md:block">
        <div className="container mx-auto md:px-5 xl:px-0">
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

      <div className="sticky top-0 z-50 hidden py-3 backdrop-blur-[30px] backdrop-saturate-[200%] transition-all duration-300 ease-in-out md:block">
        <div className="container mx-auto flex items-center justify-between md:px-5">
          <div className="logo md:w-52 lg:w-56 xl:w-64">
            <Link to="#">
              <img
                src="https://res.cloudinary.com/dhrm6pmys/image/upload/v1695832739/van-quyet-mobile/root/logo_horizontal_shkp2e.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search">
            <form
              action="index.php?act=search"
              className="formSearch"
              method="post"
            >
              <div className="relative mt-4 flex items-center md:mt-0">
                <label
                  htmlFor="btn_search"
                  className="absolute right-[10px] top-[-10px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] shadow-xl hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7]"
                >
                  <input
                    id="btn_search"
                    type="submit"
                    name="search"
                    value="Tìm kiếm"
                    hidden
                  />
                  <IoSearchOutline className="m-auto text-xl text-white" />
                </label>
                <input
                  type="text"
                  name="keyWord"
                  placeholder="Hôm nay bạn cần tìm gì ?"
                  className="block rounded-3xl border border-gray-200 bg-white py-1.5 pl-5 pr-14 text-gray-700 placeholder-gray-400/70 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:w-[300px] lg:w-[500px] xl:w-[700px]"
                />
              </div>
            </form>
          </div>
          <div className="box-icon flex items-center gap-x-8">
            <div id="toggleModalUser" className="user group relative">
              {/* <img
                src="https://res.cloudinary.com/dhrm6pmys/image/upload/v1695832738/van-quyet-mobile/root/avatar_ek2qwa.png"
                className="w-10 h-10 rounded-full shadow-xl border border-current"
              /> */}
              <IoPersonOutline className="cursor-pointer text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white" />

              <div
                id="boxList"
                className="absolute top-16 z-20 hidden w-60 rounded-lg bg-[hsla(0,0%,100%,0.8)] bg-white p-3 shadow-xl backdrop-blur-[30px] backdrop-saturate-[200%]  duration-300
                                    ease-linear before:absolute before:-top-2 before:z-10
                                    before:h-5 before:w-5 before:rotate-45 before:rounded before:bg-white group-hover:visible 
                                    lg:right-[-96px] before:lg:left-[120px] xl:left-[-100px] xl:before:left-[106px]"
              >
                <div className="user_box">
                  <ul>
                    <div>
                      <div className="w-full items-center pb-3">
                        <div className="ml-4">
                          <div className="text-sm text-gray-500">
                            Xin chào !
                          </div>
                          <div>
                            <span className="user-name text-base font-medium text-gray-900">
                              hfgfhdf
                            </span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="#"
                        className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in"
                      >
                        Trang quản trị
                      </Link>
                      <Link
                        to="#"
                        className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in"
                      >
                        Đơn hàng của tôi
                      </Link>
                      <Link
                        to="#"
                        className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in"
                      >
                        Đăng xuất
                      </Link>

                      <Link
                        to="#"
                        className="mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in"
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        to="#"
                        className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in"
                      >
                        Đăng ký
                      </Link>
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
        <div className="container relative mx-auto rounded-md bg-main-dark">
          <ul className="flex items-center justify-center pb-[3px] md:gap-x-7 lg:gap-x-16">
            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['R'] group-hover:text-main"
              >
                Điện thoại
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
              <div className="sub-container top-100 invisible absolute left-0 right-0 group-hover:visible">
                <div className="sub mt-5 flex gap-x-20 rounded-md bg-white p-5 shadow-md dark:bg-gray-900 dark:text-white">
                  <div className="col">
                    <h4>
                      <Link to="/dien-thoai-di-dong" className="font-bold">
                        Hãng sản xuất
                      </Link>
                    </h4>
                    <ul className="display-column pt-2">
                      <li>
                        <Link
                          to="/dien-thoai-di-dong/iphone"
                          className="text-sm"
                        >
                          Apple
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['O'] group-hover:text-main"
              >
                Laptop
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['8'] group-hover:text-main"
              >
                Màn hình
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['`'] group-hover:text-main"
              >
                Smart TV
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['L'] group-hover:text-main"
              >
                Âm thanh
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['M'] group-hover:text-main"
              >
                Smart Home
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['T'] group-hover:text-main"
              >
                Phụ kiện
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li className="group block py-2">
              <Link
                to="#"
                className="relative flex flex-col-reverse items-center text-xs uppercase text-white transition duration-200 ease-in-out after:font-['FontIcon'] after:text-2xl after:content-['Q'] group-hover:text-main"
              >
                Tin tức
                <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* sm */}
      <div className="top fixed left-0 right-0 z-30 flex items-center justify-around border-b-2 border-gray-200 bg-white py-2 shadow-md backdrop-blur-[30px] backdrop-saturate-[200%] dark:border-gray-900 dark:bg-gray-900 md:hidden">
        <div className="menu" onClick={toggleMenu}>
          <IoMenuOutline className="text-3xl transition-all duration-300 ease-in-out hover:text-main dark:text-white" />
        </div>
        <div className="logo w-52">
          <Link to="#">
            <img
              src="https://res.cloudinary.com/dhrm6pmys/image/upload/v1695832739/van-quyet-mobile/root/logo_horizontal_shkp2e.png"
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
          <li className="group block p-5">
            <Link
              to="#"
              target="_self"
              className="relative flex items-center justify-start pl-3 font-bold transition duration-200 ease-in-out before:pr-5 before:font-['FontIcon'] before:text-2xl before:content-['R'] group-hover:text-main dark:text-white"
            >
              Điện thoại
              <IoChevronDownSharp className="arrow-icon ml-auto text-xl" />
              <div className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 bg-main transition duration-300 ease-in-out group-hover:scale-x-100"></div>
            </Link>
            <div className="sub-container transition-max-h max-h-0 overflow-hidden duration-200 group-hover:max-h-fit">
              <div className="sub mt-5 flex flex-col gap-x-20 rounded-md border bg-white p-5 shadow-md dark:bg-gray-900 dark:text-white">
                <div className="col">
                  <h4 className="w-full rounded-md bg-gray-100 p-1 text-center duration-200 ease-in-out hover:text-main dark:bg-gray-700">
                    <Link to="/dien-thoai-di-dong" className="font-bold">
                      Hãng sản xuất
                    </Link>
                  </h4>
                  <ul className="display-column flex flex-col gap-y-3 pt-3">
                    <li>
                      <Link
                        to="/dien-thoai-di-dong/iphone"
                        className="text-sm transition duration-200 ease-in-out hover:text-main"
                      >
                        Apple
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dien-thoai-di-dong/iphone"
                        className="text-sm transition duration-200 ease-in-out hover:text-main"
                      >
                        Apple
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dien-thoai-di-dong/iphone"
                        className="text-sm transition duration-200 ease-in-out hover:text-main"
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div
        id="search"
        className={`fixed z-30 h-full w-full bg-white transition-all duration-300 ease-in-out dark:bg-black md:hidden ${
          isSearchVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mt-10 h-full px-10">
          <form
            action="index.php?act=search"
            className="formSearch"
            method="post"
          >
            <div className="relative mt-4 flex w-full items-center">
              <label
                htmlFor="btn_search"
                className="absolute right-[10px] top-[-10px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] shadow-xl hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7]"
              >
                <input
                  id="btn_search"
                  type="submit"
                  name="search"
                  value="Tìm kiếm"
                  hidden
                />
                <IoSearchOutline className="m-auto text-xl text-white" />
              </label>
              <input
                type="text"
                name="keyWord"
                placeholder="Hôm nay bạn cần tìm gì ?"
                className="block w-full rounded-3xl border border-gray-200 bg-white py-1.5 pl-5 pr-14 text-gray-700 placeholder-gray-400/70 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-xl bg-white shadow-md dark:bg-gray-900 md:hidden">
        <nav className="container">
          <ul className="menu flex items-center justify-center gap-x-6 py-3 sm:gap-x-24">
            <li className="group relative select-none rounded-xl p-2 transition-all duration-300 ease-linear hover:bg-blue-100">
              <Link to="#" className="flex flex-col items-center">
                <IoHomeOutline className="text-3xl group-hover:text-main dark:text-white" />
                {/* <span class="absolute z-50 -top-5 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap bg-black text-white p-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  Trang chủ
                </span> */}
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
                {/* <span class="absolute z-50 -top-5 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap bg-black text-white p-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  Giỏ hàng
                </span> */}
                <span className="pt-1 text-xs group-hover:text-main dark:text-white">
                  Giỏ hàng
                </span>
              </Link>
            </li>

            <li className="group relative select-none rounded-xl p-2 hover:bg-blue-100">
              <Link to="#" className="flex flex-col items-center">
                <IoPersonOutline className="text-3xl group-hover:text-main dark:text-white" />
                {/* <span class="absolute z-50 -top-5 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap bg-black text-white p-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  Tài khoản
                </span> */}
                <span className="pt-1 text-xs group-hover:text-main dark:text-white">
                  Tài khoản
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SiteHeader;
