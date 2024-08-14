import { cathError } from "../utils";
import instance from "./instance";

export const getAllProductReview = async (
  productID,
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post(
      `/product-review/get-all-product-review/${productID}`,
      pagination,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
export const getProductReviewToView = async (
  productID,
  pagination = {
    pageSize: 5,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post(
      `/product-review/get-product-review-to-view/${productID}`,
      pagination,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const createProductReview = async (productReviewData) => {
  try {
    const res = await instance.post(
      "/product-review/create-product-review",
      productReviewData,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
