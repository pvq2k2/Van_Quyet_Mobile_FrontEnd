import { cathError } from "../utils";
import instance from "./instance";

export const createDecentralization = async (decentralizationData) => {
  try {
    const res = await instance.post("/decentralization/create-decentralization", decentralizationData);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getAllDecentralization = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post("/decentralization/get-all-decentralization", pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const updateDecentralization = async (decentralizationData) => {
  try {
    const res = await instance.put(
      `/decentralization/update-decentralization/${decentralizationData.id}`,
      decentralizationData,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getDecentralizationByID = async (decentralizationID) => {
  try {
    const res = await instance.get(`/decentralization/get-decentralization-by-id/${decentralizationID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
