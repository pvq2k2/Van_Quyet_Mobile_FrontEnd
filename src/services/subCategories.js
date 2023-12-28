import { cathError } from "../utils";
import instance from "./instance";

export const getAllSubCategories = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
  categoriesID,
) => {
  console.log("in service", pagination, categoriesID);
  try {
    let res = await instance.post(
      `/sub-categories/get-all-sub-categories/${categoriesID}`,
      pagination,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
