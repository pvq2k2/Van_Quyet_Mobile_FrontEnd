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
