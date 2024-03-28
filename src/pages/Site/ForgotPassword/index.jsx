import ForgotPasswordForm from "../../../components/site/forgot_password/ForgotPasswordForm";

const ForgotPassword = () => {
  document.title = "Quên mật khẩu - Văn Quyết Mobile";
  return (
    <section className="my-5 rounded-lg shadow-inner xl:mx-auto">
      <div className="content grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-2 xl:grid-cols-2">
        <div className="hidden justify-center bg-gradient-to-r from-[#0f4670] to-[#4ba3e7] lg:flex xl:flex">
          <img
            className="w-8/12 p-5 
      lg:w-11/12 lg:p-20 xl:w-6/12
      xl:px-0 xl:py-20"
            src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png"
          />
        </div>
        <div>
          <div className="flex min-h-full items-center justify-center p-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="text-center text-3xl font-extrabold uppercase text-gray-900 dark:text-gray-300 xl:mt-6">
                  Quên mật khẩu
                </h2>
              </div>
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
