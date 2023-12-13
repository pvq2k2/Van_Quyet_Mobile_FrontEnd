import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import VerifyAccountSkeleton from "../../../components/common/skeleton/VerifyAccountSkeleton";
import { fetchVerifyAccount } from "../../../redux/slice/authSlice";

const VerifyAccount = () => {
  document.title = "Văn Quyết Mobile - Xác thực tài khoản";
  const { token } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    const verify = async () => {
      try {
        const res = await dispatch(fetchVerifyAccount(token)).unwrap();
        const data = {
          message: res.message,
          img: "https://res.cloudinary.com/dbdozmkxv/image/upload/v1702315559/mailsuccess_p6pqhn.png",
          link: "/login",
          label: "Tới trang đăng nhập",
        };
        setData(data);
      } catch (error) {
        const data = {
          message: error,
          img: "https://res.cloudinary.com/dbdozmkxv/image/upload/v1702315560/mailerror_ioe0xu.png",
          link: "/",
          label: "Trở về trang chủ",
        };
        setData(data);
      }
    };
    verify();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl px-5 pb-10 pt-10 xl:px-0 xl:pt-0">
      {loading ? (
        <VerifyAccountSkeleton />
      ) : (
        <div className="content flex h-full flex-col content-center items-center justify-center text-center md:pt-12 xl:flex-row xl:gap-x-10">
          <div className="icon">
            <img
              src={data ? data.img : ""}
              className="mx-auto w-[500px] object-cover"
              alt="404"
            />
          </div>

          <div className="text-center">
            <h2 className="p-5 text-2xl font-bold leading-normal dark:text-white md:text-5xl">
              {data ? data.message : ""}
            </h2>
            <button className="mt-5 rounded-3xl bg-main px-10 py-2 font-semibold text-white transition-all ease-in-out hover:bg-blue-300">
              <Link to={data ? data.link : ""}>{data ? data.label : ""}</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyAccount;
