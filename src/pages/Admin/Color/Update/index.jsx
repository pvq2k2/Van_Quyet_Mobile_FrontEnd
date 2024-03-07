import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { colorSchema } from "../../../../helpers/yupSchema";
import {
  fetchGetColorByID,
  fetchUpdateColor,
} from "../../../../redux/slice/colorSlice";

const ColorUpdate = () => {
  document.title = "Cập nhật màu sắc - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.color.isLoading);
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      value: "",
    },
    resolver: yupResolver(colorSchema),
  });
  const color = useSelector((state) => state.color.color);
  let oddColor = useRef();
  const [currentColor, setCurrentColor] = useState("");
  useEffect(() => {
    (() => {
      dispatch(fetchGetColorByID(id))
        .unwrap()
        .then((res) => {
          oddColor.current = res.data.value;
          setCurrentColor(res.data.value);
        })
        .catch((error) => toast.error(error));
    })();
  }, [id, dispatch, form.reset]);
  useEffect(() => {
    form.reset(color);
  }, [color]);

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchUpdateColor(value)).unwrap();
      toast.success(res.message);
      navigate("/admin/products/colors");
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
              <Link to="/admin/products/colors">Màu sắc</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Cập nhật màu sắc
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Cập nhật màu sắc
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <InputField
          label={"Tên màu sắc"}
          type={"text"}
          name={"name"}
          form={form}
        />
        <div className="form-group pb-4">
          <label htmlFor="value" className="py-2 dark:text-gray-300">
            Chọn màu
          </label>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <input
              id="value"
              name="value"
              type="color"
              {...form.register("value", {
                onChange: (e) => setCurrentColor(e.target.value),
              })}
              className={`mt-1 duration-300 ease-in-out ${
                form.formState.errors["value"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            />
            <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center">
              <span className="flex items-center gap-2">
                <p>Màu hiện tại:</p>
                <div
                  className={`mx-auto h-8 w-8 rounded-full border border-black dark:border-white`}
                  style={{ backgroundColor: oddColor.current }}
                ></div>
              </span>
              <span className="flex items-center gap-2">
                <p>Màu cập nhật: </p>
                <div
                  className={`mx-auto h-8 w-8 rounded-full border border-black dark:border-white`}
                  style={{ backgroundColor: currentColor }}
                ></div>
              </span>
            </div>
          </div>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["value"]
              ? form.formState.errors["value"]?.message
              : ""}
          </div>
        </div>

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
            to="/admin/products/colors"
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ColorUpdate;
