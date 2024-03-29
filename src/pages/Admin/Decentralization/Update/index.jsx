/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { decentralizationSchema } from "../../../../helpers/yupSchema";
import {
  fetchGetDecentralizationByID,
  fetchUpdateDecentralization,
} from "../../../../redux/slice/decentralizationSlice";

const DecentralizationUpdate = () => {
  document.title = "Cập nhật quyền - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.color.isLoading);
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(decentralizationSchema),
  });
  const decentralization = useSelector(
    (state) => state.decentralization.decentralization,
  );
  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchGetDecentralizationByID(id)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [id, dispatch, form.reset]);
  useEffect(() => {
    form.reset(decentralization);
  }, [decentralization]);

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchUpdateDecentralization(value)).unwrap();
      toast.success(res.message);
      navigate("/admin/users/decentralization");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to="/admin/users/decentralization">Quyền</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Cập nhật quyền
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Cập nhật quyền
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <InputField
          label={"Tên quyền"}
          type={"text"}
          name={"name"}
          form={form}
        />

        <div className="form-group flex items-center gap-x-6">
          <button
            disabled={loading}
            className="flex items-center rounded-md bg-blue-500 px-5 py-2 text-base tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-blue-600 disabled:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 disabled:dark:bg-blue-500 sm:w-auto"
          >
            {loading ? (
              <ImSpinner3 className="mr-2 animate-spin text-xl" />
            ) : (
              ""
            )}
            {loading ? "Xin chờ !" : "Cập nhật"}
          </button>
          <Link
            to="/admin/users/decentralization"
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DecentralizationUpdate;
