import React, { useEffect, useState } from "react";
import {
  IoAddCircleOutline,
  IoHomeOutline,
  IoInformationOutline,
  IoPencilOutline,
  IoServerOutline,
} from "react-icons/io5";
import Pagination from "../../../../components/common/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImSpinner3 } from "react-icons/im";
import { fetchGetAllProduct } from "../../../../redux/slice/productSlice";
import { sliceName } from "../../../../utils";

const ProductList = () => {
  document.title = "Danh sách sản phẩm - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNumber: 1,
    totalPage: 1,
    totalCount: 10,
  });
  const [filters, setFilter] = useState({
    pageSize: 10,
    pageNumber: 1,
  });
  const handlePageChange = (newPage) => {
    setFilter({
      ...filters,
      pageNumber: newPage,
    });
  };
  useEffect(() => {
    dispatch(fetchGetAllProduct(filters))
      .unwrap()
      .then((res) => {
        setPagination(res.pagination);
      })
      .catch((error) => toast.error(error));
  }, [dispatch, filters]);
  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Sản phẩm
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Danh sách Sản phẩm
          </h3>
        </div>
        <Link to="create">
          <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-base tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto">
            <IoAddCircleOutline className="text-2xl" />
            <span>Thêm Sản phẩm</span>
          </button>
        </Link>
      </section>
      <section className="mx-auto w-full">
        <div className="flex flex-col rounded-lg shadow-xl">
          <div className="-my-2 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        ID
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Tên sản phẩm
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Giá
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Ảnh
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Trạng thái
                      </th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400 md:text-center">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {isLoading ? (
                      <tr>
                        <td colSpan={9}>
                          <div className="flex items-center justify-center gap-x-4 py-20">
                            <ImSpinner3 className="mr-2 animate-spin text-4xl" />
                            <h2 className="text-xl">Xin chờ</h2>
                          </div>
                        </td>
                      </tr>
                    ) : products && products?.data?.length > 0 ? (
                      products?.data.map((product) => {})
                    ) : (
                      <tr>
                        <td colSpan={9}>
                          <div className="flex flex-col items-center justify-center py-20">
                            <IoServerOutline className="text-5xl" />
                            <h2 className="text-xl">Không có dữ liệu</h2>
                          </div>
                        </td>
                      </tr>
                    )}
                    {/* <?php echo $trang_thai == 1 ? " bg-green-500" : " bg-red-500" ?> 
                        <?php echo $trang_thai == 1 ? "Hoạt động" : "Không hoạt động" ?> */}
                    {/* <tr key="1">
                      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                        <span>1</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-base text-gray-500 dark:text-gray-300">
                        {sliceName(
                          "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
                          15,
                        )}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                        <span>10000000đ</span>
                      </td>
                      <td className="flex items-center justify-center whitespace-nowrap px-4 py-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-200">
                        <div className="flex w-52 items-center justify-center">
                          <img
                            src="https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                            alt="image sub cate"
                            className="px-10 dark:rounded-lg dark:bg-gray-300"
                          />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                        <span className="rounded-3xl bg-green-500 px-4 py-2 text-white">
                          Hoạt động
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm">
                        <div className="flex items-center gap-x-6 md:justify-center">
                          <Link
                            to={`1`}
                            className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-500 px-5 py-2 text-sm tracking-wide  text-white shadow-xl transition-colors duration-200 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:w-auto"
                          >
                            <IoInformationOutline className="text-xl" />
                            <span>Chi tiết</span>
                          </Link>
                          <Link
                            to={`update/1`}
                            className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-500 px-5 py-2 text-sm tracking-wide  text-white shadow-xl transition-colors duration-200 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 sm:w-auto"
                          >
                            <IoPencilOutline className="text-xl" />
                            <span>Sửa</span>
                          </Link>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </section>
    </div>
  );
};

export default ProductList;
