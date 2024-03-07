import { cathError } from "../utils";
import instance from "./instance";

// export const createCategories = async (categoriesData) => {
//   try {
//     const res = await instance.post(
//       "/categories/create-categories",
//       categoriesData,
//     );
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };

export const getAllColor = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post("/color/get-all-color", pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

// export const updateCategories = async (categoriesData) => {
//   try {
//     const res = await instance.put(
//       `/categories/update-categories/${categoriesData.id}`,
//       categoriesData,
//     );
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };

// export const getCategoriesByID = async (categoriesID) => {
//   try {
//     const res = await instance.get(
//       `/categories/get-categories-by-id/${categoriesID}`,
//     );
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };

// export const getCategoriesBySlug = async (slug) => {
//   try {
//     const res = await instance.get(
//       `/categories/get-categories-by-slug/${slug}`,
//     );
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };
