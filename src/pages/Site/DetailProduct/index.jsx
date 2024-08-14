import { IoAdd, IoHomeOutline, IoRemove } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import SliderProduct from "../../../components/site/detail_product/SliderProduct";
import ProductList from "../../../components/common/ProductList";
import { useEffect, useState } from "react";
import { getProductBySlug, getRelatedProduct } from "../../../services/product";
import { toast } from "react-toastify";
import _ from "lodash";
import { useSelector } from "react-redux";
import {
  createProductReview,
  getProductReviewToView,
} from "../../../services/productReview";
import ImageNoProduct from "../../../assets/images/Oh-no-amico.svg";
import ImageFixProduct from "../../../assets/images/Bug-fixing-rafiki.svg";
import Pagination from "../../../components/common/Pagination";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import NoItem from "../../../components/common/NoItem";
const DetailProduct = () => {
  const { productSlug } = useParams();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [listProductImage, setListProductImage] = useState([]);
  const [listProductAttribute, setListProductAttribute] = useState([]);
  const [listProductReview, setListProductReview] = useState([]);
  const [listRelatedProduct, setListRelatedProduct] = useState([]);
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageNumber: 1,
    totalPage: 1,
    totalCount: 10,
  });

  const formComment = useForm({
    mode: "onSubmit",
    defaultValues: {
      contentRated: "",
      pointEvaluation: 5,
    },
    resolver: yupResolver(
      yup
        .object({
          contentRated: yup
            .string()
            .required("Vui lòng nhập nội dung !")
            .trim(),
        })
        .required(),
    ),
  });

  const [isEmpty, setIsEmpty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  document.title = `${product.name ? `${product.name} -` : ""} Văn Quyết Mobile`;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (listProductAttribute.length > 0) {
      setSelectedSize(listProductAttribute[0]);
      setSelectedColor(listProductAttribute[0].colors[0]);
    }
  }, [listProductAttribute]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setSelectedColor(size.colors[0]);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getProductBySlug(productSlug);
        if (!res || !res.id) {
          setIsEmpty("product");
          setIsLoading(false);
          return;
        }
        setProduct({
          id: res.id,
          name: res.name,
          description: res.description,
          discount: res.discount,
        });
        setSubCategory({
          name: res.subCategories.name,
          slug: res.subCategories.slug,
        });
        setCategory({
          name: res.subCategories.categories.name,
          slug: res.subCategories.categories.slug,
        });

        if (res.listProductAttribute.length > 0) {
          const result = _(res.listProductAttribute)
            .groupBy("size.name")
            .map((items, sizeName) => ({
              name: sizeName,
              colors: items.map((item) => ({
                name: item.color.name,
                value: item.color.value,
                quantity: item.quantity,
                price: item.price,
              })),
            }))
            .value();
          setListProductAttribute(result);
        } else {
          setIsEmpty("productAttribute");
          setIsLoading(false);
          return;
        }
        if (res.listProductImage.length > 0) {
          let mapProductImage = res.listProductImage.map((item) => {
            return {
              src: item.image,
              title: item.title,
            };
          });
          setListProductImage(mapProductImage);
        }

        const listProductReview = await getProductReviewToView(res.id);
        if (listProductReview.data.length > 0) {
          setListProductReview(listProductReview.data);
          setPagination(listProductReview.pagination);
        }

        moment.locale("vi");

        const listRelatedProduct = await getRelatedProduct(res.id);
        if (listRelatedProduct.data.length > 0) {
          setListRelatedProduct(listRelatedProduct.data);
        }
        setIsLoading(false);
      } catch (error) {
        toast.error(error);
        setIsEmpty("product");
        setIsLoading(false);
      }
    })();
  }, [productSlug]);

  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      pageNumber: newPage,
    });
  };
  useEffect(() => {
    (async () => {
      try {
        if (product.id) {
          const res = await getProductReviewToView(product.id, {
            pageSize: pagination.pageSize,
            pageNumber: pagination.pageNumber,
          });
          setListProductReview(res.data);
          setPagination(res.pagination);
        }
      } catch (error) {
        /* empty */
      }
    })();
  }, [pagination.pageNumber, pagination.pageSize, product.id]);
  const handleSubmitComment = async (value) => {
    const data = {
      ...value,
      productID: parseInt(product.id),
    };
    try {
      const res = await createProductReview(data);
      console.log(res);

      toast.success(res.message);
      formComment.reset();
      const reviewResponse = await getProductReviewToView(product.id, {
        pageNumber: 1,
        pageSize: pagination.pageSize,
      });

      setListProductReview(reviewResponse.data);
      setPagination(reviewResponse.pagination);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      {isLoading ? (
        //skeleton
        <>
          <section className="my-4 md:flex md:items-center md:justify-between">
            <div className="breadcumrb h-7 w-full animate-pulse rounded-md bg-gray-400 dark:bg-gray-800 md:w-2/5"></div>
          </section>
          <section>
            <div className="grid grid-cols-1  gap-x-10 md:grid-cols-2">
              <div>
                <div className="select-none">
                  <div className="h-40 w-full animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800 md:h-96"></div>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
                  <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
                  <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
                  <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
                </div>
              </div>

              <div className="info mt-5 md:mt-0">
                <form id="addToCartForm">
                  <div className="h-9 w-full animate-pulse rounded-md bg-gray-400 dark:bg-gray-800 md:w-3/4"></div>
                  <div className="my-3 h-7 w-full animate-pulse rounded-md bg-gray-400 dark:bg-gray-800 md:w-2/4"></div>
                  <div className="py-4">
                    <div className="flex space-x-4">
                      <div
                        className={`h-[44px] w-1/4 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                      ></div>
                      <div
                        className={`h-[44px] w-1/4 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                      ></div>
                      <div
                        className={`h-[44px] w-1/4 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                      ></div>
                    </div>

                    <div className="mt-4">
                      <div className="mt-2 flex space-x-4">
                        <div
                          className={`h-[50px] w-1/4 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                        ></div>
                        <div
                          className={`h-[50px] w-1/4 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="form_group">
                    <div
                      className={`h-2 w-1/5 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800`}
                    ></div>
                    <div className="mb-5 mt-2 flex">
                      <div className="h-8 w-1/5 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800"></div>
                    </div>
                  </div>
                  <div className="form_group">
                    <div className="h-12 w-2/5 animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800"></div>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-10 h-8 w-full animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800 md:w-96"></div>
            <div className="mt-5 h-20 w-full animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800"></div>
            <div className="mt-10 h-96 w-full animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800"></div>
            <div className="my-5">
              <div className="mt-10 h-8 w-full animate-pulse rounded-md bg-gray-400 px-8 py-3 dark:bg-gray-800 md:w-96"></div>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
                <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
                <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
                <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
                <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
              </div>
            </div>
          </section>
        </>
      ) : isEmpty === "product" ? (
        <NoItem
          image={ImageNoProduct}
          title={"Không có sản phẩm này !"}
          subTitle={"Rất tiếc, không có sản phẩm bạn yêu cầu."}
        />
      ) : isEmpty === "productAttribute" ? (
        <NoItem
          image={ImageFixProduct}
          title={"Sản phẩm chưa hoàn thiện !"}
          subTitle={"Vui lòng ghé thăm vào thời gian khác."}
        />
      ) : product &&
        category.name &&
        subCategory.name &&
        listProductImage.length > 0 &&
        listProductAttribute.length > 0 ? (
        <>
          <section className="my-4 md:flex md:items-center md:justify-between">
            <div className="breadcumrb">
              <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
                <li className="group flex cursor-pointer items-center gap-x-2 pl-2 text-base capitalize leading-normal text-slate-700 transition-all duration-200 ease-in-out hover:text-main hover:underline dark:text-gray-400 dark:hover:text-main dark:hover:underline">
                  <IoHomeOutline className="text text-base leading-normal group-hover:text-main dark:text-gray-400" />
                  <Link to="/">Trang chủ</Link>
                </li>
                <li
                  className={`pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400 ${category.name ? "cursor-pointer hover:text-main hover:underline dark:hover:text-main" : ""}`}
                >
                  <Link to={`/${category.slug}`}>{category.name}</Link>
                </li>
                <li
                  className={`pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400 ${subCategory.name ? "cursor-pointer hover:text-main hover:underline dark:hover:text-main" : ""}`}
                >
                  <Link to={`/${category.slug}/${subCategory.slug}`}>
                    {subCategory.name}
                  </Link>
                </li>
                <li
                  className={`pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400`}
                >
                  {product.name}
                </li>
              </ol>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-1  gap-x-10 md:grid-cols-2">
              <div>
                <SliderProduct images={listProductImage} />
              </div>

              <div className="info mt-5 md:mt-0">
                <form id="addToCartForm">
                  {product ? (
                    <h2 className="mb-3 text-2xl font-bold">{product?.name}</h2>
                  ) : (
                    <div className="h-7 w-full animate-pulse rounded-md bg-gray-400 dark:bg-gray-800 md:w-2/4"></div>
                  )}

                  {selectedColor && (
                    <span className="mb-2 inline-block text-xl font-semibold text-red-400">
                      {selectedColor?.price.toLocaleString()}đ
                    </span>
                  )}
                  <div className="py-4">
                    <div className="flex space-x-4">
                      {!_.isEmpty(listProductAttribute) &&
                        listProductAttribute.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleSizeClick(item)}
                            className={`relative flex min-h-[44px] cursor-pointer items-center overflow-hidden rounded-[10px] border 
                         bg-white px-8 py-3 text-center before:absolute
                          before:bottom-[-1px] before:right-[-1px] before:flex before:h-[20px] before:w-[24px] before:items-center 
                          before:justify-center before:overflow-hidden before:rounded-br-[10px] before:rounded-tl-[10px] before:bg-main 
                          before:font-['FontIcon'] before:text-[9px] before:font-light before:text-white before:transition-opacity 
                          before:duration-300 before:ease-linear before:content-['i'] hover:border-main dark:bg-gray-800 dark:text-white
                          ${selectedSize === item ? "border-main before:opacity-100" : "before:opacity-0"}
                          `}
                          >
                            {item.name}
                          </div>
                        ))}
                    </div>
                    {selectedSize && (
                      <div className="mt-4">
                        <div className="mt-2 flex space-x-4">
                          {selectedSize.colors.map((color, index) => (
                            <div
                              key={index}
                              onClick={() => handleColorClick(color)}
                              className={`relative flex min-h-[44px] cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] border bg-white
                               px-8 py-3 text-center before:absolute before:bottom-[-1px] before:right-[-1px] before:flex before:h-[20px] before:w-[24px] before:items-center 
                               before:justify-center before:overflow-hidden before:rounded-br-[10px] before:rounded-tl-[10px] before:bg-main before:font-['FontIcon'] before:text-[9px] 
                               before:font-light before:text-white before:transition-opacity before:duration-300 before:ease-linear before:content-['i'] hover:border-main dark:bg-gray-800 dark:text-white
                               ${selectedColor === color ? "border-main before:opacity-100" : "before:opacity-0"}
                               `}
                            >
                              <div
                                className="h-10 w-10 rounded-full"
                                style={{ backgroundColor: color.value }}
                              ></div>
                              <div className="text-left">
                                <p>{color.name}</p>
                                <p>Số lượng: {color.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="form_group">
                    <label htmlFor="quantityInput">Số lượng mua</label>
                    <div className="mb-5 mt-2 flex">
                      <div
                        name="decreaseBtn"
                        id="decreaseBtn"
                        className="btn down-quantity flex h-8 w-8 cursor-pointer items-center justify-center rounded-s-md bg-white transition-all ease-in-out hover:bg-main dark:bg-gray-800 dark:text-white dark:hover:bg-main"
                      >
                        <IoRemove />
                      </div>
                      <input
                        type="number"
                        name="so_luong"
                        id="quantityInput"
                        min={1}
                        defaultValue={1}
                        className="box-border h-8 w-14 cursor-text border-none text-center text-base font-normal outline-none"
                      />
                      <div
                        name="increaseBtn"
                        id="increaseBtn"
                        className="btn up-quantity flex h-8 w-8 cursor-pointer items-center justify-center rounded-e-md bg-white transition-all ease-in-out hover:bg-main dark:bg-gray-800 dark:text-white dark:hover:bg-main"
                      >
                        <IoAdd />
                      </div>
                    </div>
                  </div>
                  <div className="form_group">
                    <button className="rounded-md bg-[#4ba3e7] px-5 py-2 text-base font-semibold text-white shadow-xl transition duration-150 ease-out hover:bg-[#0f4670] hover:ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="title mt-10 inline-block h-8 w-full overflow-hidden rounded bg-[#4ba3e7] after:ml-10 after:border-l-[40px] after:border-t-[40px] after:border-[#4ba3e7] after:border-t-[#0f4670] after:content-[''] md:w-96">
              <h4 className="ml-16 bg-[#0f4670] pl-9 pr-16 text-center text-sm uppercase text-white md:text-base">
                Mô tả
              </h4>
            </div>
            <p>{product?.description}</p>
            <div className="boxComment mt-10 rounded-xl bg-white px-8 py-5 shadow-xl dark:bg-gray-700">
              <div className="title_boxComment">
                <h3 className="text-xl font-bold ">
                  Bình luận về {product?.name}
                </h3>
              </div>
              <div className="formComment">
                {isLogin ? (
                  <form
                    id="commentForm"
                    onSubmit={formComment.handleSubmit(handleSubmitComment)}
                    className="relative"
                  >
                    <div className="form-group my-5">
                      <textarea
                        placeholder="Nhập nội dung"
                        id="noi_dung"
                        name="noi_dung"
                        rows={3}
                        {...formComment.register("contentRated")}
                        className={`block h-32 w-full rounded-md py-1.5 indent-3 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:text-white sm:text-base sm:leading-6
                          ${
                            formComment.formState.errors["contentRated"]
                              ? "border-red-500 dark:border-red-500"
                              : ""
                          }
                          `}
                      />
                      <div className="error-message ml-1 mt-1 text-sm text-red-500">
                        {formComment.formState.errors["contentRated"]
                          ? formComment.formState.errors["contentRated"]
                              ?.message
                          : ""}
                      </div>
                    </div>
                    <div className="form-group flex items-center justify-end">
                      <button className="rounded-2xl bg-gradient-to-r from-[#4ba3e7] to-[#0f4670] px-20 py-2 text-base font-semibold text-white transition-all duration-150 ease-in-out hover:bg-gradient-to-r hover:from-[#0f4670] hover:to-[#4ba3e7] hover:ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                        Gửi bình luận
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex h-32 w-full flex-col items-center justify-center bg-white dark:bg-gray-700">
                    <span className="font-bold dark:text-white">
                      Vui lòng đăng nhập để bình luận
                    </span>
                  </div>
                )}
              </div>

              <div className="wapper mt-6 flex flex-col gap-4">
                {listProductImage.length > 0 ? (
                  <>
                    {listProductReview.map((item) => (
                      <div className="comment" key={item.id}>
                        <div className="user mb-1 flex items-center gap-3">
                          <div className="avatar">
                            <img
                              src={item.avatar}
                              className="h-12 w-12 rounded-full border border-gray-300"
                            />
                          </div>
                          <div className="user_name_and_time">
                            <h3 className="break-words font-bold">
                              {item.fullName}
                            </h3>
                            <span
                              id="time"
                              className="items-left flex flex-col italic text-gray-600 dark:text-gray-300 md:flex-row md:gap-2"
                            >
                              <span>{moment(item.createdAt).fromNow()}</span>
                              <span>
                                {`(${moment(item.createdAt).format(
                                  "DD/MM/YYYY HH:mm:ss",
                                )})`}
                              </span>
                            </span>
                          </div>
                        </div>
                        <p className="content mb-5 w-full break-words pl-14">
                          {item.contentRated}
                        </p>
                      </div>
                    ))}
                    <Pagination
                      pagination={pagination}
                      onPageChange={handlePageChange}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="my-5">
              {listRelatedProduct.length > 0 && (
                <ProductList
                  title={"Sản phẩm cùng loại"}
                  list={listRelatedProduct}
                />
              )}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default DetailProduct;
