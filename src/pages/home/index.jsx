import React from "react";
import Slider from "../../components/home/Slider";
import ProductList from "../../components/common/ProductList";

const Home = () => {
  const listProduct = [
    {
      id: 1,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 2,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 3,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 4,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 5,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 6,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
    {
      id: 7,
      img: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
      name: "iPhone 15 Pro Max (256GB) - Chính hãng VN/A",
      price: "33,390,000 ₫",
    },
  ];
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
  return (
    <>
      <Slider list={listSlider} />
      <ProductList title={"Sản phẩm mới"} list={listProduct} />
    </>
  );
};

export default Home;
