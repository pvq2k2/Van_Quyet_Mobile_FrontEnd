import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPasswordSchema } from "../../../helpers/yupSchema";
import { fetchResetPassword } from "../../../redux/slice/authSlice";
import InputField from "../../common/InputField";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      password: "",
      rePassword: "",
    },
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleSubmit = async (value) => {
    delete value.rePassword;
    const data = { ...value, token };
    try {
      const res = await dispatch(fetchResetPassword(data)).unwrap();
      toast.success(res.message);
      navigate("/login");
    } catch (error) {
      toast.error(error);
      navigate("/forgot-password");
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
            {loading ? "Xin chờ !" : "Đặt lại mật khẩu"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordForm;
