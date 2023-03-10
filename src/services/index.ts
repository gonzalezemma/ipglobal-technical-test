import { API_KEY, API_URL } from "@constants/env";
import axios, { AxiosRequestConfig } from "axios";

const defaultOptions: AxiosRequestConfig = {
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
};

const apiInstance = axios.create(defaultOptions);

export default apiInstance;
