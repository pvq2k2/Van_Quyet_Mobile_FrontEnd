import Slider from "../../../components/site/home/Slider";
import ProductList from "../../../components/common/ProductList";
import { useEffect, useState } from "react";
import { getActiveSlides } from "../../../services/slides";
import { toast } from "react-toastify";
import { getFeaturedProduct } from "../../../services/product";

const Home = () => {
  document.title = "Trang chủ - Văn Quyết Mobile";
  const [listSlider, setListSlider] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listSlider = await getActiveSlides();
        const featuredProduct = await getFeaturedProduct();
        setListSlider(listSlider.data);
        setFeaturedProduct(featuredProduct.data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Slider list={listSlider} />
      <ProductList title={"Sản phẩm mới"} list={featuredProduct} />
    </>
  );
};

export default Home;
