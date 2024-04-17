import { cathError } from "../utils";
import instance from "./instance";

export const getAllSlides = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post(`/slides/get-all-slides`, pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const createSlides = async (slidesData) => {
  try {
    let res = await instance.post(`/slides/create-slides`, slidesData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getSlidesByID = async (slidesID) => {
  try {
    const res = await instance.get(
      `/slides/get-update-slides-by-id/${slidesID}`,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const updateSlides = async (slidesData) => {
  try {
    const res = await instance.put(
      `/slides/update-slides/${slidesData.id}`,
      slidesData.formData,
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

export const removeSlides = async (slidesID) => {
  try {
    const res = await instance.delete(`/slides/remove-slides/${slidesID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
