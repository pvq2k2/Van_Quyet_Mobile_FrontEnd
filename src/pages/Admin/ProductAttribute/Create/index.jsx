import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { productAttributeSchema } from "../../../../helpers/yupSchema";
import { fetchGetAllColor } from "../../../../redux/slice/colorSlice";
import { fetchGetProductByID } from "../../../../redux/slice/productSlice";
import InputNumberFormat from "../../../../components/common/InputNumberFormat";
import { fetchGetAllSize } from "../../../../redux/slice/sizeSlice";
import { fetchCreateProductAttribute } from "../../../../redux/slice/productAttributeSlice";

const ProductAttributeCreate = () => {
  document.title = "Thêm thuộc tính sản phẩm - Văn Quyết Mobile";
  const { productId } = useParams();

  const priceInputRef = useRef(null);
  const quantityInputRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.productAttribute.isLoading);
  const colors = useSelector((state) => state.color.colors);
  const sizes = useSelector((state) => state.size.sizes);
  const product = useSelector((state) => state.product.product);
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      quantity: "",
      price: "",
      colorID: "",
      sizeID: "",
    },
    resolver: yupResolver(productAttributeSchema),
  });

  const handleSubmit = async (value) => {
    const data = {
      ...value,
      price: parseInt(value.price.replace(/,/g, "")),
      quantity: parseInt(value.quantity.replace(/,/g, "")),
      productID: parseInt(productId),
    };
    try {
      const res = await dispatch(fetchCreateProductAttribute(data)).unwrap();
      toast.success(res.message);
      form.reset();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleRemoveLocalTab = () => {
    if (localStorage.getItem("tb_act_a")) localStorage.removeItem("tb_act_a");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchGetProductByID(productId)).unwrap();
        await dispatch(
          fetchGetAllColor({
            pageSize: 100,
            pageNumber: 1,
          }),
        ).unwrap();
        await dispatch(
          fetchGetAllSize({
            pageSize: 100,
            pageNumber: 1,
          }),
        ).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, [dispatch, productId]);
  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to="/admin/products" onClick={() => handleRemoveLocalTab()}>
                Sản phẩm
              </Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 transition duration-150 ease-out before:float-left before:pr-2 before:text-gray-600 before:content-['/'] hover:text-blue-500 hover:underline hover:ease-in dark:text-gray-400 dark:before:text-gray-400 dark:hover:text-blue-500">
              <Link to={`/admin/products/${product?.id}`}>{product?.name}</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Thêm mới thuộc tính sản phẩm
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Thêm mới thuộc tính sản phẩm
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <InputNumberFormat
            label={"Giá sản phẩm"}
            name={"price"}
            form={form}
            ref={priceInputRef}
          />
          <InputNumberFormat
            label={"Số lượng"}
            name={"quantity"}
            form={form}
            ref={quantityInputRef}
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="colorID" className="py-2 dark:text-gray-300">
              Màu
            </label>
            <select
              id="colorID"
              name="colorID"
              {...form.register("colorID")}
              className={`mt-1 block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["colorID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn màu
              </option>
              {colors?.data?.map((item, index) => (
                <option key={index} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["colorID"]
                ? form.formState.errors["colorID"]?.message
                : ""}
            </div>
          </div>

          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="sizeID" className="py-2 dark:text-gray-300">
              Kích cỡ
            </label>
            <select
              id="sizeID"
              name="sizeID"
              {...form.register("sizeID")}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["sizeID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn kích cỡ
              </option>
              {sizes?.data?.map((item, index) => (
                <option key={index} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["sizeID"]
                ? form.formState.errors["sizeID"]?.message
                : ""}
            </div>
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
            to={`/admin/products/${product?.id}`}
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProductAttributeCreate;
