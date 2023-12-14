import React, { useState } from "react";
import {
  IoAddCircleOutline,
  IoHomeOutline,
  IoPencilOutline,
  IoServerOutline,
  IoTrashOutline,
} from "react-icons/io5";
import Pagination from "../../../../components/common/Pagination";

const CategoriesList = () => {
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNumber: 1,
    totalCount: 100,
    totalPage: 10,
  });
  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, pageNumber: newPage });
  };
  return (
    <div className="px-4 pb-4 xl:px-0">
      <section className="my-5 ml-2 md:flex md:items-end md:justify-between lg:my-8">
        <div className="breadcumrb">
          <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
            <li>
              <IoHomeOutline className="text-sm leading-normal dark:text-gray-400" />
            </li>
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              Danh mục
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Danh sách danh mục
          </h3>
        </div>
        <a href="index.php?act=add_category">
          <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-base tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto">
            <IoAddCircleOutline className="text-2xl" />
            <span>Thêm danh mục</span>
          </button>
        </a>
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
                        Tên danh mục
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Icon
                      </th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400 md:text-center">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                        <span>1</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-base text-gray-500 dark:text-gray-300">
                        ten_danh_muc
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center font-['FontIcon'] text-3xl font-medium text-gray-700 dark:text-gray-200">
                        R
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm">
                        <div className="flex items-center gap-x-6 md:justify-center">
                          <a href="URLGetUpdateCategory">
                            <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-500 px-5 py-2 text-sm tracking-wide  text-white shadow-xl transition-colors duration-200 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 sm:w-auto">
                              <IoPencilOutline className="text-xl" />
                              <span>Sửa</span>
                            </button>
                          </a>
                          <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-500 px-5 py-2 text-sm tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 sm:w-auto">
                            <IoTrashOutline className="text-xl" />
                            <span>Xóa</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <tr>
                      <td colSpan={4}>
                        <div className="flex flex-col items-center justify-center py-20">
                          <IoServerOutline className="text-5xl" />
                          <h2 className="text-xl">Không có dữ liệu</h2>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-gray-700 dark:text-gray-100">
              Page 1 of 10
            </span>
          </div>
          <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex w-1/2 justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
            >
              <IoReturnDownBackOutline class="text-2xl" />
              <span>previous</span>
            </a>
            <a
              href="#"
              className="flex w-1/2 justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
            >
              <span>Next</span>
              <IoReturnDownForwardOutline class="text-2xl" />
            </a>
          </div>
        </div> */}

        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </section>
    </div>
  );
};

export default CategoriesList;
