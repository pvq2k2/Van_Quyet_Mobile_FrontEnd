import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="mx-auto  max-w-screen-xl px-5 xl:px-0">
        <div className="flex items-center justify-between pt-2">
          <div className="logo w-52 lg:w-56 xl:w-64">
            <Link to="/">
              <img
                src="../../../src/assets/images/logo_horizontal.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>

        <div className="content flex h-full flex-col content-center items-center justify-center text-center md:pt-12 xl:flex-row xl:gap-x-10">
          <div className="icon">
            <img
              src="../../../src/assets/images/404-error.svg"
              className="mx-auto w-[500px] object-cover"
              alt="404"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold leading-normal dark:text-white md:text-5xl">
              Không tìm thấy trang
            </h2>
            <p className="my-3 text-sm dark:text-white md:py-5 md:text-base">
              Rất tiếc, không thể tìm thấy trang bạn yêu cầu.
              <br /> Vui lòng quay lại trang chủ!
            </p>
            <button className="mt-5 rounded-3xl bg-main px-10 py-2 font-semibold text-white transition-all ease-in-out hover:bg-blue-300">
              <Link to="/">Trở về trang chủ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
