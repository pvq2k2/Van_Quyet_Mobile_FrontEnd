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

export const updateSize = async (sizeData) => {
  try {
    const res = await instance.put(
      `/size/update-size/${sizeData.id}`,
      sizeData,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getSizeByID = async (sizeID) => {
  try {
    const res = await instance.get(`/size/get-size-by-id/${sizeID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
