/* eslint-disable react-hooks/exhaustive-deps */
import { IoHomeOutline } from "react-icons/io5";
import SliderCategory from "../../../components/site/detail_category/SliderCategory";
import ProductList from "../../../components/common/ProductList";
import Pagination from "../../../components/common/Pagination";
import { useCallback, useEffect, useMemo, useState } from "react";
// import { useDispatch } from "react-redux";
import { getCategoriesBySlug } from "../../../services/categories";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllSubCategories } from "../../../services/subCategories";
import {
  OPTION_FILTERS_PRICE_PRODUCT,
  MORE_OPTION_FILTERS_PRODUCT,
} from "../../../constants";
import { getAllSize } from "../../../services/size";
import { convertOptionFiller } from "../../../utils";
import { getAllProductByCategory } from "../../../services/product";
import NotFound from "../../../components/common/NotFound";
import NoItem from "../../../components/common/NoItem";

const DetailCategory = () => {
  // const dispatch = useDispatch();
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [allSubCategories, setAllSubCategories] = useState(null);
  const [subCategory, setSubCategory] = useState({ id: 0 });
  const [products, setProducts] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [optionFilter, setOptionFiller] = useState([
    OPTION_FILTERS_PRICE_PRODUCT,
  ]);
  const initialFilters = useMemo(
    () => ({
      pageSize: 10,
      pageNumber: 1,
      totalPage: 1,
      totalCount: 10,
    }),
    [],
  );
  const [filters, setFilter] = useState(initialFilters);

  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNumber: 1,
    totalPage: 1,
    totalCount: 10,
  });
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilters) => ({
      ...prevFilters,
      subCategoryID: subCategory.id,
      [name]: value,
    }));
  };

  const handlePageChange = (newPage) => {
    setFilter({
      ...filters,
      pageNumber: newPage,
    });
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCategoriesBySlug(categorySlug);
        setCategory(data);

        const subCategories = await getAllSubCategories(
          { pageSize: 100, pageNumber: 1 },
          data.id,
        );
        setAllSubCategories(subCategories.data);

        const storages = await getAllSize({ pageSize: 100, pageNumber: 1 });
        setOptionFiller((prevOptions) => {
          const storageOption = convertOptionFiller(
            "storage",
            "Bộ nhớ",
            { label: "Chọn bộ nhớ", value: 0 },
            storages.data,
          );
          const isStorageOptionExist = prevOptions.some(
            (option) => option.name === storageOption.name,
          );
          if (!isStorageOptionExist) {
            return [...prevOptions, storageOption, MORE_OPTION_FILTERS_PRODUCT];
          }
          return prevOptions;
        });

        setFilter((prevValue) => {
          return {
            ...prevValue,
            categoryID: data.id,
          };
        });
      } catch (error) {
        // setLoading(false);
        toast.error(error);
      }
    })();
  }, [categorySlug]);
  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const products = await getAllProductByCategory(filters);
        setPagination(products.pagination);
        setProducts(products.data);
        // setLoading(false);
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [filters]);

  const handleClickBreadcumrb = useCallback(() => {
    if (subCategory.name) {
      setActiveSlide(null);
      setSubCategory({ id: 0 });
      setFilter((prevFilters) => ({
        ...initialFilters,
        categoryID: prevFilters?.categoryID,
      }));
    }
    navigate(`/${categorySlug}`);
  }, []);
  return (
    <>
      {allSubCategories && allSubCategories?.length > 0 ? (
        <div className="pb-4 xl:px-0">
          <section className="my-5 md:flex md:items-end md:justify-between lg:my-3">
            <div className="breadcumrb">
              <ol className="mr-12 flex flex-wrap items-center rounded-lg bg-transparent pt-1 sm:mr-16">
                <li className="group flex cursor-pointer items-center gap-x-2 pl-2 text-base capitalize leading-normal text-slate-700 transition-all duration-200 ease-in-out hover:text-main hover:underline dark:text-gray-400 dark:hover:text-main dark:hover:underline">
                  <IoHomeOutline className="text text-base leading-normal group-hover:text-main dark:text-gray-400" />
                  <Link to="/">Trang chủ</Link>
                </li>
                <li
                  className={`pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400 ${subCategory.name && "cursor-pointer"}`}
                  onClick={() => handleClickBreadcumrb()}
                >
                  {category.name}
                </li>
                {subCategory.name && (
                  <li className="pl-2 text-base capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-gray-400 dark:before:text-gray-400">
                    {subCategory.name}
                  </li>
                )}
              </ol>
            </div>
          </section>
          <section className="mx-auto w-full">
            <SliderCategory
              list={allSubCategories}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              setSubCategory={setSubCategory}
              setFilter={setFilter}
            />
            <div className="mx-auto rounded-xl bg-white px-10 py-5 shadow-xl dark:bg-gray-900">
              <form className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap">
                <h1 className="font-bold">Lọc danh sách:</h1>
                {optionFilter.map((item) => (
                  <div key={item?.name} className="form-group w-full md:w-3/12">
                    <label
                      htmlFor={item?.name}
                      className="py-2 dark:text-gray-300"
                    >
                      {item?.label}
                    </label>
                    <select
                      id={item?.name}
                      name={item?.name}
                      value={filters[item.name]}
                      onChange={handleFilter}
                      className={`mt-1 block w-full cursor-pointer appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm `}
                    >
                      <option value={item?.defaultOption?.value} hidden>
                        {item?.defaultOption?.label}
                      </option>
                      {item?.listOption?.map((option) => (
                        <option
                          key={option.value + "_" + option.label}
                          value={option?.value}
                        >
                          {option?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </form>
            </div>
          </section>
          {products && products.length > 0 ? (
            <div className="mx-auto w-full">
              <ProductList
                title={subCategory.name ? subCategory.name : category.name}
                list={products}
              />
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <NoItem />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DetailCategory;
