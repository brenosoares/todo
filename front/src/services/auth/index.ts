import { AxiosError } from "axios";
import { API } from "../api";

export type AuthLogin = {
  login: "letscode";
  senha: "lets@123";
};

export const AuthApi = async () => {
  try {
    const response = await API.post("/login", {
      login: "letscode",
      senha: "lets@123",
    });
    return response.data;
  } catch (error) {

    if (error instanceof AxiosError) {
      throw new Error(error?.code);
      // return error?.code
    }
    return error;
  }
};
