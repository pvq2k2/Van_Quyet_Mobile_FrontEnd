import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSchema } from "../../../helpers/yupSchema";
import { fetchLogin } from "../../../redux/slice/authSlice";
import InputField from "../../common/InputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchLogin(value)).unwrap();
      toast.success(res.message);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
    // dispatch(fetchLogin(value))
    //   .unwrap()
    //   .then((res) => {
    //     toast.success(res.message);
    //     navigate("/");
    //   })
    //   .catch((error) => toast.error(error));
  };

  return (
    <>
      <form className="mt-8" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="-space-y-px rounded-md">
          <InputField
            label={"Email"}
            type={"email"}
            name={"email"}
            form={form}
          />
          <InputField
            label={"Mật khẩu"}
            type={"password"}
            name={"password"}
            autoComplete={"current-password"}
            form={form}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-[#0f4670] duration-300 ease-in-out focus:ring-[#0f4670]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Nhớ mật khẩu
            </label>
          </div>
          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-[#4ba3e7] duration-300 ease-in-out hover:text-[#0f4670]"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>
        <div className="pt-5">
          <button
            disabled={loading}
            className="group relative flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-[#4ba3e7] px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-[#0f4670] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {loading ? (
              <ImSpinner3 className="mr-2 animate-spin text-xl" />
            ) : (
              ""
            )}
            {loading ? "Xin chờ !" : "Đăng nhập"}
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
          Bạn chưa có tài khoản ?
          <Link
            to="/register"
            className="ml-2 font-medium text-[#4ba3e7] duration-300 ease-in-out hover:text-[#0f4670]"
          >
            Đăng ký
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
