/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import Slick from "react-slick";
import Arrow from "./ArrowCategory";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function SliderCategory(props) {
  const { list, activeSlide, setActiveSlide, setSubCategory, setFilter } =
    props;

  const { categorySlug, subCategorySlug } = useParams();
  useEffect(() => {
    if (subCategorySlug) {
      const index = list.findIndex((item) => item.slug === subCategorySlug);
      handleSet(list[index], index);
    } else {
      handleSet({ id: 0 }, null);
    }
  }, [subCategorySlug]);

  const arrLenth = list.length;
  const sliderSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: arrLenth < 8 ? 2 : 8,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" onClick={() => {}} />,
    prevArrow: <Arrow onClick={() => {}} />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: arrLenth < 6 ? 2 : 6,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: arrLenth < 5 ? 2 : 5,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: arrLenth < 4 ? 2 : 4,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: arrLenth < 3 ? 2 : 3,
          arrows: false,
        },
      },
    ],
  };

  const handleSet = (subCategory, index) => {
    setActiveSlide(index);
    setSubCategory(subCategory);
    setFilter((currentFillter) => ({
      ...currentFillter,
      subCategoryID: subCategory.id,
    }));
  };

  return (
    <>
      <Slick
        {...sliderSettings}
        className="group relative my-3 flex select-none items-center justify-between md:my-7"
      >
        {list.map((subCategory, index) => (
          <Link
            to={`/${categorySlug}/${subCategory.slug}`}
            key={subCategory.image}
            onClick={() => handleSet(subCategory, index)}
          >
            <div
              className={`slider-item mx-4 flex max-h-[70px] cursor-pointer items-center justify-center overflow-hidden rounded border bg-white shadow-xl hover:border-main dark:bg-gray-300 dark:hover:border-main ${activeSlide === index ? "border-main dark:border-main" : "border-white dark:border-black"}`}
            >
              <img
                className="mx-auto my-[-10px] max-h-[70px] max-w-[120px]"
                src={subCategory.image}
              />
            </div>
          </Link>
        ))}
      </Slick>
    </>
  );
}

SliderCategory.propTypes = {
  list: PropTypes.array,
  activeSlide: PropTypes.number || null,
  setActiveSlide: PropTypes.func,
  setSubCategory: PropTypes.func,
  setFilter: PropTypes.func,
};
