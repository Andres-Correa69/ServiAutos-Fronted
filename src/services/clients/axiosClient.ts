import axios from "axios";

import { CustomError } from "../customErrors";

const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:1337";

export const axiosClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.error?.message;
    return Promise.reject(new CustomError(errorMessage));
  },
);

export default axiosClient;
