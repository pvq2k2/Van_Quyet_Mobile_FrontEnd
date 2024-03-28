import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { subCategoriesSchema } from "../../../../helpers/yupSchema";
import { fetchGetCategoriesBySlug } from "../../../../redux/slice/categoriesSlice";
import { fetchCreateSubCategories } from "../../../../redux/slice/subCategoriesSlice";
import { isFileExtension } from "../../../../utils";

const SubCategoriesCreate = () => {
  document.title = "Thêm danh mục con - Văn Quyết Mobile";
  const { slug } = useParams();

  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");
  const loading = useSelector((state) => state.subCategories.isLoading);
  const category = useSelector((state) => state.categories.category);
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      image: "",
    },
    resolver: yupResolver(subCategoriesSchema),
  });

  const handleSubmit = async (value) => {
    const data = { ...value, image: value.image[0], categoriesID: category.id };
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(fetchCreateSubCategories(formData)).unwrap();
      toast.success(res.message);
      form.reset();
      setPreview("");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let isImage = isFileExtension(e.target.files[0].type);

      if (isImage) {
        setPreview(URL.createObjectURL(e.target.files[0]));
      } else {
        setPreview("");
      }
    } else {
      setPreview("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchGetCategoriesBySlug(slug)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, [dispatch, slug]);

  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to="/admin/products/categories">Danh mục</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to={`/admin/products/categories/${category?.slug}`}>
                {category?.name}
              </Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Thêm mới danh mục con
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Thêm mới danh mục con
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
          <label
            htmlFor="image"
            className="inline-block py-2 dark:text-gray-300"
          >
            Ảnh
          </label>
          <label
            htmlFor="image"
            className={`${
              form.formState.errors["image"]
                ? "border-red-500"
                : "border-gray-300"
            } mt-1 flex cursor-pointer overflow-hidden rounded-md border-2 border-dashed px-6 pb-6 pt-5`}
          >
            <div className="flex w-full flex-col gap-4 text-center sm:flex-row sm:items-center">
              <svg
                className={`${
                  form.formState.errors["image"]
                    ? "text-red-500"
                    : "text-gray-400"
                } h-12 w-12`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="image"
                {...form.register("image", {
                  onChange: (e) => handleChangeImage(e),
                })}
                draggable
                className={`${
                  form.formState.errors["image"]
                    ? "text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                } cursor-pointer text-sm`}
                type="file"
              />
            </div>
          </label>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["image"]
              ? form.formState.errors["image"]?.message
              : ""}
          </div>
        </div>
        <div className="form-group pb-4">
          <label className="inline-block py-2 dark:text-gray-300">
            Ảnh xem trước
          </label>
          <div className="relative mt-1 h-40 w-40">
            <img
              src={
                preview ||
                "https://res.cloudinary.com/assignmentjs/image/upload/c_thumb,w_200,g_face/v1648723660/img/noimage_mzjwxl.png"
              }
              alt="Preview Image"
              className="absolute inset-0 h-auto max-h-full w-auto max-w-full rounded-sm object-cover"
            />
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
            {loading ? "Xin chờ !" : "Thêm mới"}
          </button>
          <Link
            to={`/admin/products/categories/${category?.slug}`}
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SubCategoriesCreate;
