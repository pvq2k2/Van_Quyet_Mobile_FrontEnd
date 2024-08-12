import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";
const ArrowProduct = ({ onClick, direction }) => {
  return (
    <>
      <div
        className={`slick-prev-news slick-arrow 
        absolute top-[40%] z-10 hidden h-[50px] w-[50px] 
        translate-y-1/2 items-center justify-center 
        rounded-full border-none bg-white opacity-0 transition-all duration-300 ease-linear hover:bg-gradient-to-r 
        hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white dark:bg-gray-900 dark:text-white xl:group-hover:opacity-100  ${
          direction === "right"
            ? "right-6 group-hover:right-4"
            : "left-6 group-hover:left-4"
        }`}
        style={{ display: "flex" }}
        onClick={onClick}
      >
        {direction === "right" ? (
          <FaAngleRight className={`float-left text-2xl`} />
        ) : (
          <FaAngleLeft className={`float-right text-2xl`} />
        )}
      </div>
    </>
  );
};

ArrowProduct.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};

export default ArrowProduct;
