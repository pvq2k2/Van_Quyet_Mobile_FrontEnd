import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import _ from "lodash";
const ProductList = ({ title, list }) => {
  return (
    <>
      {_.isEmpty(list) ? (
        <section className="new_product mb-4">
          <div className="title inline-block h-8 w-full animate-pulse overflow-hidden rounded bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800 md:w-80"></div>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
            <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
            <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
            <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
            <div className="h-80 animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
          </div>
        </section>
      ) : (
        <section className="new_product mb-4">
          <div className="title mt-5 inline-block h-8 w-full overflow-hidden rounded bg-[#4ba3e7] after:ml-10 after:border-l-[40px] after:border-t-[40px] after:border-[#4ba3e7] after:border-t-[#0f4670] after:content-[''] md:w-96">
            <h4 className="ml-16 bg-[#0f4670] pl-9 pr-16 text-center text-sm uppercase text-white md:text-base">
              {title}
            </h4>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {list.map((item, index) => (
              <ProductItem key={index} product={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

ProductList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default ProductList;
