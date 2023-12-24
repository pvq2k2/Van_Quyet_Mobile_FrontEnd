import { cathError } from "../utils";
import instance from "./instance";

export const createCategories = async (categoriesData) => {
  try {
    const { data } = await instance.post(
      "/categories/create-categories",
      categoriesData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getAllCategories = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    const { data } = await instance.post(
      "/categories/get-all-categories",
      pagination,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return data;
  } catch (error) {
    throw cathError(error);
  }
};
