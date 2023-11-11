import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  document.title = "Văn Quyết Mobile - Đăng ký";
  return (
    <section className="my-5 rounded-lg shadow-inner xl:mx-auto">
      <div className="content grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-2 xl:grid-cols-2">
        <div className="hidden justify-center bg-gradient-to-r from-[#0f4670] to-[#4ba3e7] lg:flex xl:flex">
          <img
            class="w-8/12
            p-5 lg:w-11/12 lg:p-20 xl:my-auto xl:h-[650px]
            xl:max-w-[500px] xl:px-[40px] xl:py-[90px]"
            src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png"
          />
        </div>
        <div>
          <div className="flex min-h-full items-center justify-center p-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="text-center text-3xl font-extrabold uppercase text-gray-900 dark:text-gray-300 xl:mt-6">
                  Đăng ký
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                id="login"
                action="index.php?act=login"
                method="post"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div className="form-group pb-4">
                    <label
                      htmlFor="fullName"
                      className="py-2 dark:text-gray-300"
                    >
                      Họ và tên
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="relative mt-1 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-[#0f4670] focus:z-10 focus:border-[#0f4670] focus:outline-none focus:ring-[#0f4670] sm:text-sm"
                      placeholder="Họ và tên"
                    />
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>

                  <div className="form-group pb-4">
                    <label htmlFor="email" className="py-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-[#0f4670] focus:z-10 focus:border-[#0f4670] focus:outline-none focus:ring-[#0f4670] sm:text-sm"
                      placeholder="Email"
                    />
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>

                  <div className="form-group pb-4">
                    <label
                      htmlFor="phone-number"
                      className="py-2 dark:text-gray-300"
                    >
                      Số điện thoại
                    </label>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      required
                      className="relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-[#0f4670] focus:z-10 focus:border-[#0f4670] focus:outline-none focus:ring-[#0f4670] sm:text-sm"
                      placeholder="Số điện thoại"
                    />
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>

                  <div className="form-group pb-4">
                    <label
                      htmlFor="mat_khau"
                      className="py-2 dark:text-gray-300"
                    >
                      Mật khẩu
                    </label>
                    <input
                      id="mat_khau"
                      name="mat_khau"
                      type="password"
                      required
                      className="relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-[#0f4670] focus:z-10 focus:border-[#0f4670] focus:outline-none focus:ring-[#0f4670] sm:text-sm"
                      placeholder="Mật khẩu"
                    />
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>
                  <div className="form-group mb-4">
                    <label
                      htmlFor="re-password"
                      className="py-2 dark:text-gray-300"
                    >
                      Nhập lại mật khẩu
                    </label>
                    <input
                      id="re-password"
                      name="re-password"
                      type="password"
                      required
                      className="relative mt-1 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-[#0f4670] focus:z-10 focus:border-[#0f4670] focus:outline-none focus:ring-[#0f4670] sm:text-sm"
                      placeholder="Nhập lại mật khẩu"
                    />
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="gioi_tinh"
                      className="inline-block py-2 dark:text-gray-300"
                    >
                      Giới tính
                    </label>
                    <div className="flex gap-x-10">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="gioi_tinh_nam"
                          name="gioi_tinh"
                          type="radio"
                          defaultValue={1}
                          defaultChecked
                          className="h-4 w-4 border-gray-300 text-indigo-600 accent-blue-500 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="gioi_tinh_nam"
                          className="block leading-6 text-gray-900 dark:text-gray-300"
                        >
                          Nam
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="gioi_tinh_nu"
                          name="gioi_tinh"
                          type="radio"
                          defaultValue={2}
                          className="h-4 w-4 border-gray-300 text-indigo-600 accent-blue-500 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="gioi_tinh_nu"
                          className="block leading-6 text-gray-900 dark:text-gray-300"
                        >
                          Nữ
                        </label>
                      </div>
                    </div>
                    <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#4ba3e7] px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-[#0f4670] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Đăng ký
                  </button>
                </div>
                <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
                  Bạn đã có tài khoản ?
                  <Link
                    to="/login"
                    className="ml-2 font-medium text-[#4ba3e7] duration-300 ease-in-out hover:text-[#0f4670]"
                  >
                    Đăng nhập
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
