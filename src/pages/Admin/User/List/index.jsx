import { useEffect, useState } from "react";
import {
  IoHomeOutline,
  IoPencilOutline,
  IoServerOutline,
} from "react-icons/io5";
import Pagination from "../../../../components/common/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImSpinner3 } from "react-icons/im";
import { fetchGetAllUser } from "../../../../redux/slice/userSlice";
import moment from "moment";
import "moment/dist/locale/vi";
import {
  formatDecentralization,
  formatGender,
  formatStatusAccount,
} from "../../../../helpers/format";

const UserList = () => {
  document.title = "Danh sách người dùng - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.size.isLoading);
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
    moment.locale("vi");
  }, []);
  useEffect(() => {
    dispatch(fetchGetAllUser(filters))
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
              Người dùng
            </li>
          </ol>
          <h3 className="mb-3 text-2xl font-bold capitalize leading-10 md:mb-0">
            Danh sách người dùng
          </h3>
        </div>
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
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Thông tin
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right">
                        Gia nhập
                      </th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 md:text-center rtl:text-right">
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
                    ) : users && users?.data?.length > 0 ? (
                      users?.data.map((user) => (
                        <tr key={user.id}>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                            <span>{user.id}</span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-left text-base text-gray-500 dark:text-gray-300">
                            <div>
                              <div className="flex gap-x-4 pb-2">
                                <img
                                  src={user.avatar}
                                  width={50}
                                  height={50}
                                  className="rounded-full"
                                />
                                <div>
                                  <p>
                                    Quyền:
                                    <b>
                                      {" "}
                                      {formatDecentralization(
                                        user.decentralizationID,
                                      )}
                                    </b>
                                  </p>
                                  <p>
                                    Trạng thái:
                                    <b> {formatStatusAccount(user.status)}</b>
                                  </p>
                                </div>
                              </div>

                              <p>
                                Tên người dùng: <b>{user.userName}</b>
                              </p>
                              <p>
                                Họ và tên: <b>{user.fullName}</b>
                              </p>
                              <p>
                                Giới tính: <b>{formatGender(user.gender)}</b>
                              </p>
                              <p>
                                Email: <b>{user.email}</b>
                              </p>
                              <p>
                                Số điện thoại: <b>{user.numberPhone}</b>
                              </p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-center text-gray-700 dark:text-gray-200">
                            <span className="block italic">
                              {moment(user.createdAt).fromNow()}
                            </span>
                            <span>
                              {moment(user.createdAt).format(
                                "DD/MM/YYYY HH:mm:ss",
                              )}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div className="flex items-center gap-x-6 md:justify-center">
                              <Link
                                to={`update/${user.id}`}
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

export default UserList;
