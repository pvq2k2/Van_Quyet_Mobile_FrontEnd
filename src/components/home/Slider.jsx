import React, { useEffect, useState } from "react";
import Slick from "react-slick";
import Arrow from "./Arrow";

export default function Slider() {
  const listSlider = [
    {
      id: 1,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/09/11112023.png",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
    {
      id: 2,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/1200x375-zfoldzflip-031123.jpg",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
    {
      id: 3,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/09/11112023.png",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
    {
      id: 4,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/1200x375-zfoldzflip-031123.jpg",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
    {
      id: 5,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/09/11112023.png",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
    {
      id: 6,
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/1200x375-zfoldzflip-031123.jpg",
      title: "Siêu Sale Ngày 11/11",
      subTitle: "Khuyến mại siêu chất",
    },
  ];
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
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2,
    ref: (slider) => (slider1 = slider),
    afterChange: (current) => setActiveSlide(current),
    nextArrow: <Arrow direction="right" onClick={() => {}} />,
    prevArrow: <Arrow onClick={() => {}} />,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slick
        {...sliderSettings}
        className="group relative my-3 select-none md:my-7"
      >
        {listSlider.map(({ id, img }) => (
          <div key={id} className="slider-item">
            <img className="w-full rounded-md object-fill" src={img} />
          </div>
        ))}
      </Slick>
      <Slick {...thumbnailSettings}>
        {listSlider.map(({ id, title, subTitle }, index) => (
          <div key={id} className="slider-item h-16">
            <div
              className={`flex flex-col items-center justify-center overflow-hidden rounded-md px-3 shadow-xl transition-all duration-200 ease-in-out ${
                index == activeSlide
                  ? "bg-gradient-to-r from-main to-main-dark py-2 text-white"
                  : "mt-1 bg-white py-1 text-gray-500 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              <h3 className="text-sm font-bold">{title}</h3>
              <span className="text-xs">{subTitle}</span>
            </div>
          </div>
        ))}
      </Slick>
    </>
  );
}
