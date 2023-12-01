import React from "react";
import RegisterForm from "../../components/register/RegisterForm";

const Register = () => {
  document.title = "Văn Quyết Mobile - Đăng ký";
  return (
    <section className="my-5 rounded-lg shadow-inner xl:mx-auto">
      <div className="content grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-2 xl:grid-cols-2">
        <div className="hidden justify-center bg-gradient-to-r from-main-dark to-main lg:flex xl:flex">
          <img
            className="w-8/12
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
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
