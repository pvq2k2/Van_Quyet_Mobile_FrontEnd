import { cathError } from "../utils";
import instance from "./instance";

export const getAllProductAttribute = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
  productID,
) => {
  try {
    let res = await instance.post(
      `/product-attribute/get-all-product-attribute/${productID}`,
      pagination,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
