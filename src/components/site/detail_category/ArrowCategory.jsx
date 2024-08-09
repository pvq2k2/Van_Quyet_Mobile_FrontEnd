import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";
const ArrowCategory = ({ onClick, direction }) => {
  return (
    <>
      <div
        className={`slick-arrow 
        relative z-10 cursor-pointer 
        items-center justify-center 
        rounded-full
        border-none bg-white p-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r 
        hover:from-[#0f4670] hover:to-[#4ba3e7] hover:text-white dark:bg-gray-600 dark:text-white  ${
          direction === "right" ? "right-0" : "left-0"
        }`}
        style={{ display: "flex" }}
        onClick={onClick}
      >
        {direction === "right" ? (
          <FaAngleRight className={`float-left text-xl`} />
        ) : (
          <FaAngleLeft className={`float-right text-xl`} />
        )}
      </div>
    </>
  );
};

ArrowCategory.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};

export default ArrowCategory;
