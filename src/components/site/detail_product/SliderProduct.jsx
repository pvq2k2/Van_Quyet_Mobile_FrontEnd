/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import ArrowProduct from "./ArrowProduct";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {
  Captions,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
export default function SliderProduct({ images }) {
  const arrLenth = useMemo(() => images.length || 1, [images]);

  const [index, setIndex] = useState(-1);
  let slider1, slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const sliderSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2,
    ref: (slider) => (slider1 = slider),
    afterChange: (current) => setActiveSlide(current),
    nextArrow: <ArrowProduct direction="right" onClick={() => {}} />,
    prevArrow: <ArrowProduct onClick={() => {}} />,
    cssEase: "linear",
  };
  const thumbnailSettings = {
    asNavFor: nav1,
    ref: (slider) => (slider2 = slider),
    slidesToShow: arrLenth < 4 ? arrLenth : 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: arrLenth < 4 ? arrLenth : 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: arrLenth < 4 ? arrLenth : 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: arrLenth < 3 ? arrLenth : 3,
        },
      },
    ],
  };

  return (
    <>
      {/* {images.length < 1 && (
        <>
          <div className="select-none">
            <div className="h-40 w-full animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800 md:h-96"></div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
            <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
            <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
            <div className="slider-item mt-3 h-16 w-1/5 animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
          </div>
        </>
      )} */}
      <Slick {...sliderSettings} className="group relative select-none">
        {images.map((item, i) => (
          <div
            key={item.title}
            className="h-40 cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800 md:h-96"
          >
            <img
              className="mx-auto h-full"
              src={item.src}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </Slick>
      <Slick {...thumbnailSettings} className="mt-3">
        {images.map((item, i) => (
          <div key={item.title} className="slider-item px-3">
            <div
              className={`h-16 cursor-pointer rounded-md border bg-white shadow-xl transition-all duration-200 ease-in-out dark:bg-gray-800 ${
                i == activeSlide
                  ? "border-main"
                  : "border-white dark:border-black"
              }`}
            >
              <img
                src={item.src}
                alt={`image-${i}`}
                className="mx-auto h-full rounded-md object-cover"
              />
            </div>
          </div>
        ))}
      </Slick>
      <Lightbox
        plugins={[Slideshow, Thumbnails, Zoom, Captions]}
        open={index >= 0}
        index={index}
        zoom={{ maxZoomPixelRatio: 3 }}
        close={() => setIndex(-1)}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
        slides={images}
      />
    </>
  );
}

SliderProduct.propTypes = {
  images: PropTypes.array,
};
