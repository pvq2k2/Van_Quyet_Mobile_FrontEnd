import { cathError } from "../utils";
import instance from "./instance";

export const getAllUser = async (
  pagination = {
    pageSize: 10,
    pageNumber: 1,
  },
) => {
  try {
    let res = await instance.post(`/user/get-all-user`, pagination);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const getUpdateUserByID = async (userID) => {
  try {
    const res = await instance.get(`/user/get-update-user-by-id/${userID}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const updateUser = async (userData) => {
  try {
    const res = await instance.put(
      `/user/update-user/${userData.id}`,
      userData,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
