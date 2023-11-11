import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <Link
        to="#"
        className="group rounded-xl bg-white p-5 shadow-xl dark:bg-gray-900"
      >
        <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg transition-all duration-200 ease-linear group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
          <img
            src={product.img}
            className="h-full w-full object-cover transition-all duration-200 ease-linear group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm font-semibold text-gray-700 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-medium text-red-500">{product.price}</p>
      </Link>
    </>
  );
};

export default ProductItem;
