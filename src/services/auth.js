import { cathError } from "../utils";
import instance from "./instance";

export const register = async (registerData) => {
  try {
    const res = await instance.post("/auth/register", registerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const login = async (loginData) => {
  try {
    const res = await instance.post("/auth/login", loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await instance.post(`/auth/forgot-password?email=${email}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const verifyAccount = async (token) => {
  try {
    const res = await instance.post(`/auth/verify-email?token=${token}`);
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const resetPassword = async (resetPasswordData) => {
  try {
    const res = await instance.post("/auth/reset-password", resetPasswordData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};

export const reNewToken = async (refreshToken) => {
  try {
    const res = await instance.post(
      `/auth/re-new-token?refreshToken=${refreshToken}`,
    );
    return res && res.data;
  } catch (error) {
    throw cathError(error);
  }
};
