/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../../components/common/InputField";
import { updateUserSchema } from "../../../../helpers/yupSchema";
import {
  fetchGetUpdateUserByID,
  fetchUpdateUser,
} from "../../../../redux/slice/userSlice";
import axios from "axios";

const UserUpdate = () => {
  document.title = "Cập nhật người dùng - Văn Quyết Mobile";
  const API_VN_PROVINCES = import.meta.env.VITE_API_VN_PROVINCES;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.isLoading);
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      numberPhone: "",
      gender: "",
      status: "",
      provinceID: "",
      districtID: "",
      wardID: "",
      detailAddress: "",
    },
    resolver: yupResolver(updateUserSchema),
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    // Fetch list of provinces
    axios
      .get(`${API_VN_PROVINCES}/api/provinces/?basic=true&limit=100`)
      .then((response) => {
        setProvinces(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });

    if (selectedProvince) {
      // Fetch list of districts for selected province
      axios
        .get(
          `${API_VN_PROVINCES}/api/districts/?province_id=${selectedProvince}&basic=true&limit=100`,
        )
        .then((response) => {
          setDistricts(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching districts:", error);
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      // Fetch list of wards for selected district
      axios
        .get(
          `${API_VN_PROVINCES}/api/wards/?district_id=${selectedDistrict}&basic=true&limit=100`,
        )
        .then((response) => {
          setWards(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching wards:", error);
        });
    }
  }, [selectedDistrict]);

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);

    // Fetch list of districts for selected province
    axios
      .get(
        `${API_VN_PROVINCES}/api/districts/?province_id=${provinceId}&basic=true&limit=100`,
      )
      .then((response) => {
        setDistricts(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);

    // Fetch list of wards for selected district
    axios
      .get(
        `${API_VN_PROVINCES}/api/wards/?district_id=${districtId}&basic=true&limit=100`,
      )
      .then((response) => {
        setWards(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching wards:", error);
      });
  };

  useEffect(() => {
    form.reset(form.getValues());
  }, [selectedProvince, selectedDistrict, wards]);

  // -----------------------------------------
  useEffect(() => {
    (() => {
      dispatch(fetchGetUpdateUserByID(id))
        .unwrap()
        .then((res) => {
          let data = res.data;
          if (res.data.address != null) {
            data = {
              ...data,
              provinceID: data.address.provinceID,
              districtID: data.address.districtID,
              wardID: data.address.wardID,
              detailAddress: data.address.detailAddress,
            };
            setSelectedProvince(data.address.provinceID);
            setSelectedDistrict(data.address.districtID);
          }
          form.reset(data);
        })
        .catch((error) => toast.error(error));
    })();
  }, []);

  const handleSubmit = async (value) => {
    try {
      delete value.address;
      const res = await dispatch(fetchUpdateUser(value)).unwrap();
      toast.success(res.message);
      navigate("/admin/users");
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
              <Link to="/admin/users">Người dùng</Link>
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Cập nhật người dùng
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Cập nhật người dùng
          </h3>
        </div>
      </section>

      <form
        className="mx-auto rounded-xl bg-white p-10 shadow-xl dark:bg-gray-900"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <InputField
            label={"Họ và tên"}
            type={"text"}
            name={"fullName"}
            form={form}
          />

          <InputField
            label={"Email"}
            type={"text"}
            name={"email"}
            form={form}
          />
          <InputField
            label={"Số điện thoại"}
            type={"text"}
            name={"numberPhone"}
            form={form}
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="gender" className="py-2 dark:text-gray-300">
              Giới tính
            </label>
            <select
              id="gender"
              name="gender"
              {...form.register("gender")}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm`}
            >
              <option className="w-full" value={1}>
                Nam
              </option>
              <option className="w-full" value={2}>
                Nữ
              </option>
            </select>
          </div>
          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="status" className="py-2 dark:text-gray-300">
              Trạng thái
            </label>
            <select
              id="status"
              name="status"
              {...form.register("status")}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm`}
            >
              <option className="w-full" value={1}>
                Khóa
              </option>
              <option className="w-full" value={2}>
                Mở
              </option>
            </select>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-x-3 md:flex-row">
          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="provinceID" className="py-2 dark:text-gray-300">
              Tỉnh / thành phố
            </label>
            <select
              id="provinceID"
              name="provinceID"
              {...form.register("provinceID", {
                onChange: (e) => handleProvinceChange(e),
              })}
              className={`mt-1 block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["provinceID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn tỉnh / thành phố
              </option>
              {provinces?.map((item) => (
                <option key={item.id} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["provinceID"]
                ? form.formState.errors["provinceID"]?.message
                : ""}
            </div>
          </div>

          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="districtID" className="py-2 dark:text-gray-300">
              Quận / huyện / thị xã
            </label>
            <select
              id="districtID"
              name="districtID"
              {...form.register("districtID", {
                onChange: (e) => handleDistrictChange(e),
              })}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["districtID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn quận / huyện / thị xã
              </option>
              {districts?.map((item) => (
                <option key={item.id} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["districtID"]
                ? form.formState.errors["districtID"]?.message
                : ""}
            </div>
          </div>

          <div className="form-group pb-4 md:w-6/12">
            <label htmlFor="wardID" className="py-2 dark:text-gray-300">
              Xã / thị trấn
            </label>
            <select
              id="wardID"
              name="wardID"
              {...form.register("wardID")}
              className={`mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm ${
                form.formState.errors["wardID"]
                  ? "border-red-500 dark:border-red-500"
                  : ""
              }`}
            >
              <option value="" hidden>
                Chọn xã / thị trấn
              </option>
              {wards?.map((item) => (
                <option key={item.id} className="w-full" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="error-message ml-1 mt-1 text-sm text-red-500">
              {form.formState.errors["wardID"]
                ? form.formState.errors["wardID"]?.message
                : ""}
            </div>
          </div>
        </div>

        <div className="form-group mb-5">
          <label htmlFor="detailAddress" className="py-2 dark:text-gray-300">
            Địa chỉ chi tiết
          </label>
          <textarea
            placeholder="Nhập địa chỉ chi tiết"
            id="detailAddress"
            name="detailAddress"
            rows="3"
            {...form.register("detailAddress")}
            className={`${
              form.formState.errors["detailAddress"]
                ? "border-red-500 dark:border-red-500"
                : ""
            } relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm`}
          ></textarea>
          <div className="error-message ml-1 mt-1 text-sm text-red-500">
            {form.formState.errors["detailAddress"]
              ? form.formState.errors["detailAddress"]?.message
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
            to="/admin/users"
            className="rounded-md border px-5 py-2 text-base leading-6 text-gray-900 shadow-xl transition duration-150 ease-out hover:border-indigo-500 hover:ease-in dark:text-white dark:hover:text-blue-500"
          >
            Trở lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserUpdate;
