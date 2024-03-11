import { cathError } from "../utils";
import instance from "./instance";

export const createSize = async (sizeData) => {
  try {
    const res = await instance.post("/size/create-size", sizeData);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getAllSize = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post("/size/get-all-size", pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

// export const updateColor = async (colorData) => {
//   try {
//     const res = await instance.put(
//       `/color/update-color/${colorData.id}`,
//       colorData,
//     );
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };

// export const getColorByID = async (colorID) => {
//   try {
//     const res = await instance.get(`/color/get-color-by-id/${colorID}`);
//     return res && res.data;
//   } catch (error) {
//     throw cathError(error);
//   }
// };
