import { cathError } from "../utils";
import instance from "./instance";

export const createProduct = async (productData) => {
  try {
    const res = await instance.post("/product/create-product", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
export const getAllProduct = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post(`/product/get-all-product`, pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
