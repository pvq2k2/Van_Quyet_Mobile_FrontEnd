import { cathError } from "../utils";
import instance from "./instance";

export const createCategories = async (categoriesData) => {
  try {
    const { data } = await instance.post("/categories/create-categories", categoriesData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw cathError(error);
  }
};