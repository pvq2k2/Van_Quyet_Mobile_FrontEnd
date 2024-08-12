import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SliderProduct from "../../../components/site/detail_product/SliderProduct";
import ProductList from "../../../components/common/ProductList";

const DetailProduct = () => {
  const images = [
    { src: "https://picsum.photos/id/10/367/267", title: "Image 1" },
    { src: "https://picsum.photos/id/11/367/267", title: "Image 2" },
    { src: "https://picsum.photos/id/12/367/267", title: "Image 3" },
    { src: "https://picsum.photos/id/13/367/267", title: "Image 4" },
    { src: "https://picsum.photos/id/14/367/267", title: "Image 5" },
  ];
  return (
    <>
      <div>
        <section className="my-4 md:flex md:items-center md:justify-between">
          <div className="breadcumrb">
            <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
              <li className="group flex cursor-pointer items-center gap-x-2 pl-2 text-base capitalize leading-normal text-slate-700 transition-all duration-200 ease-in-out hover:text-main hover:underline dark:text-gray-400 dark:hover:text-main dark:hover:underline">
                <IoHomeOutline className="text text-base leading-normal group-hover:text-main dark:text-gray-400" />
                <Link to="/">Trang chủ</Link>
              </li>
              <li
                className={`pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400`}
              >
                Sản phẩm
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1  gap-x-10 md:grid-cols-2">
            <div>
              <SliderProduct images={images} />
            </div>

            <div className="info mt-5 md:mt-0">
              <form id="addToCartForm">
                <h2 className="mb-3 text-2xl font-bold">Tên sản phẩm</h2>
                <span className="mb-2 inline-block text-xl font-semibold text-red-400">
                  Giá
                </span>
                <div className="form_group">
                  <label htmlFor="quantityInput">Số lượng</label>
                  <div className="mb-5 mt-2 flex">
                    <button
                      name="decreaseBtn"
                      id="decreaseBtn"
                      className="btn down-quantity flex h-8 w-8 cursor-pointer items-center justify-center border bg-white text-[rgba(0,0,0,.8)] outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <input
                      type="number"
                      name="so_luong"
                      id="quantityInput"
                      min={1}
                      defaultValue={1}
                      className="box-border h-8 w-14 cursor-text border text-center text-base font-normal outline-none"
                    />
                    <button
                      name="increaseBtn"
                      id="increaseBtn"
                      className="btn up-quantity flex h-8 w-8 cursor-pointer items-center justify-center border bg-white text-[rgba(0,0,0,.8)] outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="form_group">
                  <input
                    type="hidden"
                    name="san_pham_id"
                    defaultValue=" $san_pham_id"
                  />
                  <input
                    id="addToCartBtn"
                    type="submit"
                    name="btn_add_to_cart"
                    defaultValue="Thêm vào giỏ hàng"
                    className="rounded-md bg-[#4ba3e7] px-5 py-2 text-base font-semibold text-white shadow-xl transition duration-150 ease-out hover:bg-[#0f4670] hover:ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="title mt-5 inline-block h-8 w-full overflow-hidden rounded bg-[#4ba3e7] after:ml-10 after:border-l-[40px] after:border-t-[40px] after:border-[#4ba3e7] after:border-t-[#0f4670] after:content-[''] md:w-96">
            <h4 className="ml-16 bg-[#0f4670] pl-9 pr-16 text-center text-sm uppercase text-white md:text-base">
              Mô tả
            </h4>
          </div>
          <p>Mô tả</p>
          <div className="boxComment mt-10 rounded-xl bg-white px-8 py-5 shadow-xl dark:bg-gray-700">
            <div className="title_boxComment">
              <h3 className="text-xl font-bold ">Bình luận về Tên sản phẩm</h3>
            </div>
            <div className="formComment">
              <form id="commentForm" className="relative">
                {/* <div className="overlay absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-white dark:bg-gray-700">
                  <span className="font-bold dark:text-white">
                    Vui lòng đăng nhập để bình luận
                  </span>
                </div> */}
                <div className="form-group my-5">
                  <textarea
                    placeholder="Nhập nội dung"
                    id="noi_dung"
                    name="noi_dung"
                    rows={3}
                    className="block h-32 w-full rounded-md py-1.5 indent-3 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                    defaultValue={""}
                  />
                  <div className="error-message ml-1 mt-1 text-sm text-red-500" />
                </div>
                <div className="form-group flex items-center justify-end">
                  <button className="rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] px-20 py-2 text-base font-semibold text-white transition-all duration-150 ease-in-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Gửi bình luận
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="my-5">
            <ProductList
              title={"Sản phẩm cùng loại"}
              list={[
                {
                  image:
                    "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/24/redminote12pro5g-0.png",
                  name: "OK",
                  slug: "redminote12pro5g-0",
                  price: 30000,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailProduct;
