import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CustomNumberFormat from "./CustomNumberFormat";

const ProductItem = ({ product }) => {
  return (
    <>
      {!product && (
        <div className="animate-pulse rounded-xl bg-gray-400 object-fill p-5 shadow-xl dark:bg-gray-800"></div>
      )}

      <Link
        to="#"
        className="group rounded-xl bg-white p-5 shadow-xl dark:bg-gray-900"
      >
        <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg transition-all duration-200 ease-linear group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
          <img
            src={product.image}
            className="h-full w-full object-cover transition-all duration-200 ease-linear group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-base font-medium text-red-500">
          <CustomNumberFormat number={product.price} type={"₫"} />
        </p>
      </Link>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};
export default ProductItem;
