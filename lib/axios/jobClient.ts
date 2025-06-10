import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { createClient } from ".";
import { JOB_API_BASE_URL } from "../constants";

export const jobClient: AxiosInstance = createClient(JOB_API_BASE_URL);

jobClient.interceptors.request.use(onRequest);
jobClient.interceptors.response.use(onResponseSuccess);

function onRequest(request: InternalAxiosRequestConfig) {
  request.headers["x-rapidapi-host"] = JOB_API_BASE_URL;

  return request;
}

function onResponseSuccess(response: AxiosResponse) {
  return response.data;
}
