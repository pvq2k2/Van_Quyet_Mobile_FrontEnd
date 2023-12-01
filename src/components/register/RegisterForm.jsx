import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerSchema } from "../../helpers/yupSchema";
import { fetchRegister } from "../../redux/slice/authSlice";
import InputField from "../common/InputField";
import InputRadioField from "../common/InputRadioField";

const RegisterForm = () => {
  const [modal, setModal] = useState(false);
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      userName: "",
      fullName: "",
      email: "",
      numberPhone: "",
      password: "",
      rePassword: "",
      gender: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleSubmit = async (value) => {
    delete value.rePassword;
    const data = { ...value, gender: parseInt(value.gender) };
    dispatch(fetchRegister(data))
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        form.reset();
        setModal(true);
      })
      .catch((error) => toast.error(error));
  };

  return (
    <form className="mt-8" onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="-space-y-px rounded-md">
        <InputField
          label={"Tên tài khoản"}
          type={"text"}
          name={"userName"}
          form={form}
        />
        <InputField
          label={"Họ và tên"}
          type={"text"}
          name={"fullName"}
          form={form}
        />
        <InputField label={"Email"} type={"email"} name={"email"} form={form} />
        <InputField
          label={"Số điện thoại"}
          type={"text"}
          name={"numberPhone"}
          form={form}
        />
        <InputField
          label={"Mật khẩu"}
          type={"password"}
          name={"password"}
          form={form}
        />
        <InputField
          label={"Nhập lại mật khẩu"}
          type={"password"}
          name={"rePassword"}
          form={form}
        />

        <div className="form-group">
          <label
            htmlFor="gioi_tinh"
            className="inline-block py-2 dark:text-gray-300"
          >
            Giới tính
          </label>
          <div className="flex gap-x-10">
            <InputRadioField
              defaultChecked={true}
              id={"male"}
              name={"gender"}
              label={"Nam"}
              defaultValue={1}
              form={form}
            />
            <InputRadioField
              id={"female"}
              name={"gender"}
              label={"Nữ"}
              defaultValue={2}
              form={form}
            />
          </div>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["gender"]
              ? form.formState.errors["gender"]?.message
              : ""}
          </div>
        </div>
      </div>
      <div className="pt-5">
        <button
          type="submit"
          disabled={loading}
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
                      Đăng ký thành công !
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Cảm ơn bạn đã đăng ký vui lòng kiểm tra email để xác
                        thực tài khoản !
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

export default RegisterForm;
