import { cathError } from "../utils";
import instance from "./instance";

export const register = async (registerData) => {
  try {
    const { data } = await instance.post("/auth/register", registerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw cathError(error);
  }
};

export const login = async (loginData) => {
  try {
    const { data } = await instance.post("/auth/login", loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw cathError(error);
  }
};

export const forgotPassword = async (email) => {
  try {
    const { data } = await instance.post(
      `/auth/forgot-password?email=${email}`,
    );
    return data;
  } catch (error) {
    throw cathError(error);
  }
};

export const verifyAccount = async (token) => {
  try {
    const { data } = await instance.post(`/auth/verify-email?token=${token}`);
    return data;
  } catch (error) {
    throw cathError(error);
  }
};

export const resetPassword = async (resetPasswordData) => {
  try {
    const { data } = await instance.post(
      "/auth/reset-password",
      resetPasswordData,
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
