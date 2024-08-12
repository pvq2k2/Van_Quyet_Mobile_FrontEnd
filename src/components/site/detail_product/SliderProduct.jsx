/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
    // autoplay: true,
    autoplaySpeed: 2000,
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
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      {images.length < 1 && (
        <>
          <div className="select-none">
            <div className="h-[400px] w-full animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
          </div>
          <div className="slider-item mt-3 h-32 w-full animate-pulse rounded-md bg-gray-400 object-fill dark:bg-gray-800"></div>
        </>
      )}
      <Slick {...sliderSettings} className="group relative select-none">
        {images.map((item, i) => (
          <div key={item.title} className="slider-item">
            <img
              className="w-full rounded-md object-fill"
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
              className={`cursor-pointer rounded-md border shadow-xl transition-all duration-200 ease-in-out ${
                i == activeSlide
                  ? "border-main"
                  : "border-white dark:border-black"
              }`}
            >
              <img
                src={item.src}
                alt={`image-${i}`}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        ))}
      </Slick>
      <Lightbox
        plugins={[Slideshow, Thumbnails, Zoom, Captions]}
        open={index >= 0}
        index={index}
        zoom={{ maxZoomPixelRatio: 10 }}
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
