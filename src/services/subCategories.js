import { cathError } from "../utils";
import instance from "./instance";

export const getAllSubCategories = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
  categoriesID,
) => {
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

export const createSubCategories = async (subCategoryData) => {
  try {
    let res = await instance.post(
      `/sub-categories/create-sub-categories`,
      subCategoryData,
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

export const updateSubCategories = async (subCategoriesData) => {
  try {
    const res = await instance.put(
      `/sub-categories/update-sub-categories/${subCategoriesData.id}`,
      subCategoriesData.formData,
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

export const getSubCategoriesByID = async (subCategoriesID) => {
  try {
    const res = await instance.get(
      `/sub-categories/get-sub-categories-by-id/${subCategoriesID}`,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
