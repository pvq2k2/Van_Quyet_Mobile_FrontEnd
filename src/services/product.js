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

export const getUpdateProductByID = async (productID) => {
  try {
    const res = await instance.get(
      `/product/get-update-product-by-id/${productID}`,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getProductByID = async (productID) => {
  try {
    const res = await instance.get(`/product/get-product-by-id/${productID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const updateProduct = async (productData) => {
  try {
    const res = await instance.put(
      `/product/update-product/${productData.id}`,
      productData.formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
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
