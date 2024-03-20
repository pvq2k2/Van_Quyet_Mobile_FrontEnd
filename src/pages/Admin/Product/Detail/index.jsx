import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchGetProductByID } from "../../../../redux/slice/productSlice";
import { ProductAttributeList } from "../../ProductAttribute";
import { ProductImageList } from "../../ProductImage";

const ProductDetail = () => {
  document.title = "Chi tiết sản phẩm - Văn Quyết Mobile";
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);
  const { productId } = useParams();
  const tabs = [
    { label: "Ảnh", content: <ProductImageList productID={productId} /> },
    {
      label: "Thuộc tính",
      content: <ProductAttributeList productID={productId} />,
    },
  ];
  const handleChangeTab = (currentTabIndex) => {
    // console.log(currentTabIndex);
  };
  const handleRemoveLocalTab = () => {
    if (localStorage.getItem("tb_act_a")) localStorage.removeItem("tb_act_a");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchGetProductByID(productId)).unwrap();
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
            <li className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
              {product.name}
            </li>
          </ol>
        </div>
      </section>
      <Tabs tabsContent={tabs} onChange={handleChangeTab} />
    </div>
  );
};

export default ProductDetail;

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  useEffect(() => {
    const storedIndex = localStorage.getItem("tb_act_a");
    if (storedIndex !== null) {
      setCurrentTabIndex(parseInt(storedIndex));
    } else {
      localStorage.setItem("tb_act_a", currentTabIndex);
    }
  }, []);

  const handleOnClick = (getCurrentIndex) => {
    if (currentTabIndex !== getCurrentIndex) {
      localStorage.setItem("tb_act_a", getCurrentIndex);
      setCurrentTabIndex(getCurrentIndex);
      onChange(getCurrentIndex);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center gap-x-1">
        {tabsContent.map((tabItem, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
            className={`${currentTabIndex == index ? "border-main dark:border-main" : "border-black dark:border-white"} group w-full cursor-pointer select-none rounded-lg border py-1 hover:border-main dark:hover:border-main`}
          >
            <span
              className={`${currentTabIndex == index ? "text-main" : ""} flex w-full items-center justify-center group-hover:text-main`}
            >
              {tabItem.label}
            </span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </>
  );
};
