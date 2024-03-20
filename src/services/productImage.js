import { cathError } from "../utils";
import instance from "./instance";

export const getAllProductImage = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
  productID,
) => {
  try {
    let res = await instance.post(
      `/product-image/get-all-product-image/${productID}`,
      pagination,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
