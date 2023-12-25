import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { categoriesSchema } from "../../../../helpers/yupSchema";
import {
  fetchGetCategoriesByID,
  fetchUpdateCategories,
} from "../../../../redux/slice/categoriesSlice";

const CategoriesUpdate = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.categories.isLoading);
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      icon: "",
    },
    resolver: yupResolver(categoriesSchema),
  });
  const categories = useSelector((state) => state.categories.categories);
  const [currentIcon, setCurrentIcon] = useState("");
  const arrIcon = useMemo(() => {
    let string =
      "` ! # $ % ^ & * _ - + ( ) { } [ ] \" ' | \\ , . ? / Q q W w E e R r T t Y y U u O o P p A a S s D d F f G g H h J j K k L l Z z X x C c V v B b N n M m 1 2 3 4 5 6 7 8 9 0";
    return string.split(" ");
  }, []);
  useEffect(() => {
    (() => {
      dispatch(fetchGetCategoriesByID(id))
        .unwrap()
        .then((res) => setCurrentIcon(res.data.icon))
        .catch((error) => toast.error(error));
    })();
  }, [id, dispatch, form.reset]);
  useEffect(() => {
    form.reset(categories);
  }, [categories]);

  const handleSubmit = async (value) => {
    try {
      const res = await dispatch(fetchUpdateCategories(value)).unwrap();
      toast.success(res.message);
      navigate("/admin/categories");
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
              <Link to="/admin/categories">Danh mục</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Cập nhật danh mục
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Cập nhật danh mục
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <InputField
          label={"Tên danh mục"}
          type={"text"}
          name={"name"}
          form={form}
        />
        <div className="form-group pb-4">
          <label htmlFor="icon" className="py-2 dark:text-gray-300">
            Icon
          </label>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <select
              id="icon"
              name="icon"
              {...form.register("icon", {
                onChange: (e) => setCurrentIcon(e.target.value),
              })}
              className={`relative mt-1 block w-fit appearance-none rounded-md border border-gray-300 px-3 py-2 font-['FontIcon'] text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["icon"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              {arrIcon?.map((icon, index) => (
                <option
                  key={index}
                  className="font-['FontIcon'] text-4xl"
                  value={icon}
                >
                  {icon}
                </option>
              ))}
            </select>
            <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center">
              <span className="flex items-center gap-2">
                <p>Ký tự hiện tại:</p>
                <span className="text-3xl">{currentIcon}</span>
              </span>
              <span className="flex items-center gap-2">
                <p>Icon hiện tại:</p>
                <span className="font-['FontIcon'] text-3xl">
                  {currentIcon}
                </span>
              </span>
            </div>
          </div>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["icon"]
              ? form.formState.errors["icon"]?.message
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
            to="/admin/categories"
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CategoriesUpdate;
