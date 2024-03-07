import { cathError } from "../utils";
import instance from "./instance";

export const createColor = async (colorData) => {
  try {
    const res = await instance.post("/color/create-color", colorData);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

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

export const updateColor = async (colorData) => {
  try {
    const res = await instance.put(
      `/color/update-color/${colorData.id}`,
      colorData,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getColorByID = async (colorID) => {
  try {
    const res = await instance.get(`/color/get-color-by-id/${colorID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
