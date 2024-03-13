import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { productSchema } from "../../../../helpers/yupSchema";
import { fetchGetAllCategories } from "../../../../redux/slice/categoriesSlice";
import { fetchGetAllSubCategories } from "../../../../redux/slice/subCategoriesSlice";
import { fetchCreateProduct } from "../../../../redux/slice/productSlice";
import InputNumberFormat from "../../../../components/common/InputNumberFormat";

const ProductCreate = () => {
  document.title = "Thêm sản phẩm - Văn Quyết Mobile";

  const priceInputRef = useRef(null);
  const discountInputRef = useRef(null);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");
  const [parentsCategory, setParentsCategory] = useState(0);
  const categories = useSelector((state) => state.categories.categories);
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories,
  );
  const loading = useSelector((state) => state.product.isLoading);
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      price: "",
      discount: "",
      height: "",
      width: "",
      length: "",
      weight: "",
      category: "",
      subCategoriesID: "",
      description: "",
      image: "",
    },
    resolver: yupResolver(productSchema),
  });

  const handleSubmit = async (value) => {
    delete value.category;
    value.price = parseInt(value.price.replace(/,/g, ""));
    value.discount = parseInt(value.discount.replace(/,/g, ""));
    const data = { ...value, image: value.image[0] };
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      const res = await dispatch(fetchCreateProduct(formData)).unwrap();
      toast.success(res.message);
      form.reset();
      setPreview("");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let isImage = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/bmp",
        "image/webp",
        "image/svg+xml",
      ].includes(e.target.files[0].type);

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
        await dispatch(
          fetchGetAllCategories({
            pageSize: 100,
            pageNumber: 1,
          }),
        ).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (parentsCategory != 0) {
      const fetchData = async () => {
        try {
          await dispatch(
            fetchGetAllSubCategories({
              pagination: {
                pageSize: 100,
                pageNumber: 1,
              },
              categoriesID: parentsCategory,
            }),
          ).unwrap();
        } catch (error) {
          toast.error(error);
        }
      };
      fetchData();
    }
  }, [parentsCategory]);

  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to="/admin/products">Sản phẩm</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Thêm mới sản phẩm
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Thêm mới sản phẩm
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <InputField
          label={"Tên sản phẩm"}
          type={"text"}
          name={"name"}
          form={form}
        />
        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <InputNumberFormat
            label={"Giá sản phẩm"}
            name={"price"}
            form={form}
            ref={priceInputRef}
          />
          <InputNumberFormat
            label={"Giảm giá"}
            name={"discount"}
            form={form}
            ref={discountInputRef}
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <InputField
            label={"Chiều cao"}
            type={"number"}
            name={"height"}
            form={form}
          />
          <InputField
            label={"Chiều rộng"}
            type={"number"}
            name={"width"}
            form={form}
          />
          <InputField
            label={"Chiều dài"}
            type={"number"}
            name={"length"}
            form={form}
          />
          <InputField
            label={"Khối lượng"}
            type={"number"}
            name={"weight"}
            form={form}
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="category" className="py-2 dark:text-gray-300">
              Danh mục
            </label>
            <select
              id="category"
              name="category"
              {...form.register("category", {
                onChange: (e) => setParentsCategory(e.target.value),
              })}
              className={`mt-1 block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["category"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn danh mục
              </option>
              {categories?.data?.map((item, index) => (
                <option key={index} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["category"]
                ? form.formState.errors["category"]?.message
                : ""}
            </div>
          </div>

          <div className="form-group pb-4 md:w-6/12">
            <label
              htmlFor="subCategoriesID"
              className="py-2 dark:text-gray-300"
            >
              Danh mục con
            </label>
            <select
              id="subCategoriesID"
              name="subCategoriesID"
              {...form.register("subCategoriesID")}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["subCategoriesID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn danh mục
              </option>
              {subCategories?.data?.map((item, index) => (
                <option key={index} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["subCategoriesID"]
                ? form.formState.errors["subCategoriesID"]?.message
                : ""}
            </div>
          </div>
        </div>

        <div className="form-group mb-5">
          <label htmlFor="description" className="py-2 dark:text-gray-300">
            Mô tả
          </label>
          <textarea
            placeholder="Nhập mô tả"
            id="description"
            name="description"
            rows="3"
            {...form.register("description")}
            className={`${
              form.formState.errors["description"]
                ? "border-red-500 dark:border-red-500"
                : ""
            } relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm`}
          ></textarea>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["description"]
              ? form.formState.errors["description"]?.message
              : ""}
          </div>
        </div>

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
            to={`/admin/products`}
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
