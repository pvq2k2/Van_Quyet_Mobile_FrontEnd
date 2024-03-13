import React, { useEffect, useState } from "react";
import {
  IoAddCircleOutline,
  IoHomeOutline,
  IoInformationOutline,
  IoPencilOutline,
  IoServerOutline,
} from "react-icons/io5";
import Pagination from "../../../../components/common/Pagination";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategoriesBySlug } from "../../../../redux/slice/categoriesSlice";
import { toast } from "react-toastify";
import { ImSpinner3 } from "react-icons/im";
import { fetchGetAllSubCategories } from "../../../../redux/slice/subCategoriesSlice";

const CategoriesDetail = () => {
  document.title = "Chi tiết danh mục - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.category);
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories,
  );
  const isLoading = useSelector((state) => state.categories.isLoading);
  const { slug } = useParams();
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
    const fetchData = async () => {
      try {
        const categoryResponse = await dispatch(
          fetchGetCategoriesBySlug(slug),
        ).unwrap();

        const subCategoriesResponse = await dispatch(
          fetchGetAllSubCategories({
            pagination: { ...filters },
            categoriesID: categoryResponse?.data?.id,
          }),
        ).unwrap();

        setPagination(subCategoriesResponse.pagination);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, [dispatch, filters, slug]);

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
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              {category?.name}
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Danh sách danh mục con
          </h3>
        </div>
        <Link to="create">
          <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-base tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto">
            <IoAddCircleOutline className="text-2xl" />
            <span>Thêm danh mục con</span>
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
                        Tên danh mục
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400">
                        Hình
                      </th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400 md:text-center">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {isLoading ? (
                      <tr>
                        <td colSpan={4}>
                          <div className="flex items-center justify-center gap-x-4 py-20">
                            <ImSpinner3 className="mr-2 animate-spin text-4xl" />
                            <h2 className="text-xl">Xin chờ</h2>
                          </div>
                        </td>
                      </tr>
                    ) : subCategories && subCategories?.data?.length > 0 ? (
                      subCategories?.data.map((category) => (
                        <tr key={category.id}>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                            <span>{category.id}</span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-base text-gray-500 dark:text-gray-300">
                            {category.name}
                          </td>
                          <td className="flex items-center justify-center whitespace-nowrap px-4 py-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-200">
                            <div className="flex w-52 items-center justify-center">
                              <img
                                src={category.image}
                                alt="image sub cate"
                                className="px-10 dark:rounded-lg dark:bg-gray-300"
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div className="flex items-center gap-x-6 md:justify-center">
                              <Link
                                to={`update/${category.id}`}
                                className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-500 px-5 py-2 text-sm tracking-wide  text-white shadow-xl transition-colors duration-200 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 sm:w-auto"
                              >
                                <IoPencilOutline className="text-xl" />
                                <span>Sửa</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4}>
                          <div className="flex flex-col items-center justify-center py-20">
                            <IoServerOutline className="text-5xl" />
                            <h2 className="text-xl">Không có dữ liệu</h2>
                          </div>
                        </td>
                      </tr>
                    )}
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

export default CategoriesDetail;
