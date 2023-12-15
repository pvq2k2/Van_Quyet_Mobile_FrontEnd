import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";
import { forgotPasswordSchema } from "../../../helpers/yupSchema";
import { fetchForgotPassword } from "../../../redux/slice/authSlice";

const ForgotPasswordForm = () => {
  const [modal, setModal] = useState(false);
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchForgotPassword(value.email)).unwrap();
      toast.success(res.message);
      form.reset();
      setModal(true);
    } catch (error) {
      toast.error(error);
    }
    // dispatch(fetchRegister(data))
    //   .unwrap()
    //   .then((res) => {
    //     toast.success(res.message);
    //     form.reset();
    //     setModal(true);
    //   })
    //   .catch((error) => toast.error(error));
  };

  return (
    <form className="mt-8" onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="-space-y-px rounded-md">
        <InputField label={"Email"} type={"email"} name={"email"} form={form} />
      </div>
      <div className="pt-5">
        <button
          disabled={loading}
          className="group relative flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-[#4ba3e7] px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-[#0f4670] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {loading ? <ImSpinner3 className="mr-2 animate-spin text-xl" /> : ""}
          {loading ? "Xin chờ !" : "Quên mật khẩu"}
        </button>
      </div>
      <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
        Bạn đã nhớ mật khẩu ?
        <Link
          to="/login"
          className="ml-2 font-medium text-[#4ba3e7] duration-300 ease-in-out hover:text-[#0f4670]"
        >
          Đăng nhập
        </Link>
      </p>
      {modal ? (
        <div className="modal fixed inset-0 z-[999]">
          <div className="min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
              onClick={() => setModal(false)}
            />
            <div className="absolute left-1/2 top-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-left text-base transition md:my-8 md:inline-block md:w-11/12 md:px-4 lg:w-6/12">
              <div className="relative overflow-hidden rounded bg-white px-4 pb-8 pt-14 shadow-2xl dark:bg-gray-900 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <div
                  className="modal-close absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  onClick={() => setModal(false)}
                >
                  <AiOutlineClose />
                </div>
                <div
                  className="modal-container items-start"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                    <div className="mail flex justify-center pt-5">
                      <AiOutlineMail className="rounded-full bg-blue-500 p-5 text-8xl text-white" />
                    </div>
                    <h3
                      className="pt-5 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      id="modal-title"
                    >
                      Gửi yêu cầu thành công !
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Vui lòng kiểm tra email để đặt lại mật khẩu!
                      </p>
                    </div>
                    <Link to="/login">
                      <button className="mt-8 rounded-3xl bg-blue-500 px-8 py-3 font-semibold text-white transition-all ease-in-out hover:bg-blue-400 ">
                        Trở về đăng nhập
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default ForgotPasswordForm;
