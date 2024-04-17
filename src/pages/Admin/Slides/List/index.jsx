/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  IoAddCircleOutline,
  IoHomeOutline,
  IoPencilOutline,
  IoServerOutline,
  IoTrashOutline,
} from "react-icons/io5";
import Pagination from "../../../../components/common/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImSpinner3 } from "react-icons/im";
import { sliceName } from "../../../../utils";
import { sweetConfirm, sweetModal } from "../../../../helpers/modalSweetAlert";
import {
  fetchGetAllSlides,
  fetchRemoveSlides,
} from "../../../../redux/slice/slidesSlice";

const SlidesList = () => {
  document.title = "Danh sách ảnh trình chiếu - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slides.slides);
  const isLoading = useSelector((state) => state.slides.isLoading);
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
  const handleRemove = async (slidesID) => {
    await dispatch(fetchRemoveSlides(slidesID))
      .unwrap()
      .then((res) => sweetModal("Thành công !", res.message, "success"))
      .catch((error) => sweetModal("Lỗi !", error, "error"));

    await dispatch(
      fetchGetAllSlides({
        pagination: { ...filters },
      }),
    )
      .unwrap()
      .then((res) => {
        setPagination(res.pagination);
      })
      .catch((error) => toast.error(error));
  };
  useEffect(() => {
    dispatch(
      fetchGetAllSlides({
        pagination: { ...filters },
      }),
    )
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
              Ảnh trình chiếu
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Danh sách ảnh trình chiếu
          </h3>
        </div>
        <Link to="create">
          <button className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-base tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto">
            <IoAddCircleOutline className="text-2xl" />
            <span>Thêm ảnh trình chiếu</span>
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
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        ID
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Tiêu đề
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Ảnh
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Tiêu đề phụ
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Trạng thái
                      </th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 md:text-center rtl:text-right">
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
                    ) : slides && slides?.data?.length > 0 ? (
                      slides?.data?.map((slides) => (
                        <tr key={slides.id}>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                            <span>{slides.id}</span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-base text-gray-500 dark:text-gray-300">
                            {sliceName(slides.title, 15)}
                          </td>
                          <td className="flex items-center justify-center whitespace-nowrap px-4 py-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-200">
                            <div className="flex w-40 items-center justify-center">
                              <img
                                src={slides.image}
                                alt="image"
                                className="px-10 dark:rounded-lg dark:bg-gray-300"
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-base text-gray-500 dark:text-gray-300">
                            {sliceName(slides.subTitle, 15)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                            <span
                              className={`${
                                slides.status == 2
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              } rounded-3xl px-4 py-2 text-white`}
                            >
                              {slides.status == 2 ? "Hiện" : "Ẩn"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div className="flex items-center gap-x-6 md:justify-center">
                              <Link
                                to={`update-product-image/${slides.id}`}
                                className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-500 px-5 py-2 text-sm tracking-wide  text-white shadow-xl transition-colors duration-200 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 sm:w-auto"
                              >
                                <IoPencilOutline className="text-xl" />
                                <span>Sửa</span>
                              </Link>
                              <button
                                onClick={() =>
                                  sweetConfirm(slides.id, handleRemove)
                                }
                                className="flex shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-500 px-5 py-2 text-sm tracking-wide text-white shadow-xl transition-colors duration-200 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 sm:w-auto"
                              >
                                <IoTrashOutline className="text-xl" />
                                <span>Xóa</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
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

export default SlidesList;
