import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { sizeSchema } from "../../../../helpers/yupSchema";
import { fetchCreateSize } from "../../../../redux/slice/sizeSlice";

const SizeCreate = () => {
  document.title = "Thêm kích cỡ - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.size.isLoading);
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      value: "",
    },
    resolver: yupResolver(sizeSchema),
  });

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchCreateSize(value)).unwrap();
      toast.success(res.message);
      form.reset();
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
              <Link to="/admin/products/sizes">Kích cỡ</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Thêm mới kích cỡ
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Thêm mới kích cỡ
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <InputField
          label={"Tên kích cỡ"}
          type={"text"}
          name={"name"}
          form={form}
        />

        <InputField
          label={"Kích cỡ"}
          type={"text"}
          name={"value"}
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
            {loading ? "Xin chờ !" : "Thêm mới"}
          </button>
          <Link
            to="/admin/products/sizes"
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SizeCreate;
