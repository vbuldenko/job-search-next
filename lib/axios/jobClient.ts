import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { createClient } from ".";
import { JOB_API_BASE_URL, JOB_API_KEY } from "../constants";

export const jobClient: AxiosInstance = createClient(JOB_API_BASE_URL);

jobClient.interceptors.request.use(onRequest);
jobClient.interceptors.response.use(onResponseSuccess);

function onRequest(request: InternalAxiosRequestConfig) {
  request.headers["x-rapidapi-host"] = "jsearch.p.rapidapi.com";
  request.headers["x-rapidapi-key"] = JOB_API_KEY;

  return request;
}

function onResponseSuccess(response: AxiosResponse) {
  return response.data.data || response.data;
}
