import React from "react";
import {
  IoListOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { ToggleTheme } from "../../../common";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/slice/authSlice";

const AdminHeader = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  return (
    <nav className="duration-250 sticky left-0 right-0 z-40 flex flex-wrap items-center justify-between bg-[hsla(0,0%,100%,0.8)] px-0 py-2 shadow-xl backdrop-blur-[30px] backdrop-saturate-[200%] transition-all dark:bg-[hsla(220.91,39.29%,10.98%,0.8)] lg:top-[1%] lg:rounded-2xl xl:top-[2%]">
      <div className="flex-wrap-inherit mx-auto flex w-full items-center justify-between px-4 py-1">
        <div className="flex items-center gap-x-4">
          <IoListOutline
            onClick={toggleMenu}
            className="text-3xl transition-all duration-300 ease-linear hover:text-main dark:text-white dark:hover:text-main lg:hidden"
          />
          <div className="relative flex w-full flex-wrap items-stretch rounded-lg transition-all">
            <span className="absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-br-none rounded-tr-none border border-r-0 border-transparent bg-transparent px-2.5 py-2 text-center text-xl font-normal leading-5 text-slate-500 transition-all">
              <IoSearchOutline className="text-xl" />
            </span>
            <input
              type="text"
              className="focus:shadow-soft-primary-outline relative block w-[150px] min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pl-8 pr-3 text-sm leading-5 text-gray-700 transition-all placeholder:text-gray-500 focus:border-main focus:outline-none focus:transition-shadow dark:border-gray-500 dark:bg-gray-900 dark:text-white dark:focus:border-main lg:w-[300px]"
              placeholder="Type here..."
            />
          </div>
        </div>
        <div className="flex items-center sm:mr-6 sm:mt-0 md:mr-0 lg:flex lg:basis-auto">
          <ul className="md-max:w-full mb-0 flex list-none flex-row items-center justify-end pl-0">
            <li className="group relative flex items-center pr-4">
              <a className="ease-nav-brand block p-0 text-xl transition-all dark:text-white">
                <IoNotificationsOutline className="text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white dark:group-hover:text-main" />
              </a>
              {/* <ul
                className="transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-sm text-slate-500 opacity-0 transition-all before:absolute before:left-auto before:right-2 before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:left-auto lg:right-0 lg:mt-2 lg:block lg:cursor-pointer"
              >
                <li className="relative mb-2">
                  <a
                    className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                  >
                    <div className="flex py-1">
                      <div className="my-auto">
                        <img
                          src="../assets/img/team-2.jpg"
                          className="mr-4 inline-flex h-9 w-9 max-w-none items-center justify-center rounded-xl text-sm text-white"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-1 text-sm font-normal leading-normal">
                          <span className="font-semibold">New message</span>
                          from Laur
                        </h6>
                        <p className="mb-0 text-xs leading-tight text-slate-400">
                          <i className="fa fa-clock mr-1" aria-hidden="true" />
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul> */}
            </li>
            <li>
              <ToggleTheme />
            </li>
            <li
              id="toggleModalUser"
              className="group relative ml-4 cursor-pointer"
            >
              <img
                className="h-10 w-10 rounded-full border border-current object-cover shadow-xl dark:border-gray-500"
                src="../../../../src/assets/images/avatar.png"
              />

              <div
                id="boxList"
                className="invisible absolute left-[-120px] top-16 z-20 w-40 rounded-lg bg-[hsla(0,0%,100%,0.8)] bg-white p-3 shadow-xl backdrop-blur-[30px] backdrop-saturate-[200%] duration-200 ease-linear before:absolute before:-top-2  before:left-[125px]
                                    before:z-10 before:h-5 before:w-5 before:rotate-45
                                    before:rounded before:bg-white group-hover:visible dark:bg-gray-900 dark:before:bg-gray-900 md:left-[-80px] md:before:left-[85px] xl:left-[-100px] xl:top-[60px] xl:before:left-[109px]"
              >
                <div className="user_box">
                  <ul>
                    <div>
                      <Link
                        to="/"
                        className="mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                      >
                        Về trang chủ
                      </Link>
                      <div
                        onClick={() => dispatch(logout())}
                        className="inline-block w-full cursor-pointer rounded-lg p-3 font-semibold text-black transition duration-150 ease-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white hover:shadow-xl hover:ease-in dark:text-white"
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
