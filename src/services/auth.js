import { cathError } from "../utils";
import instance from "./instance";

export const Register = async (registerData) => {
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

export const Login = async (loginData) => {
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
