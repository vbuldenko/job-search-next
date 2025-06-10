import { AxiosInstance, AxiosResponse } from "axios";
import { createClient } from ".";
import { AUTH_API_BASE_URL } from "../constants";

export const authClient: AxiosInstance = createClient(AUTH_API_BASE_URL);
authClient.interceptors.response.use(onResponseSuccess);

function onResponseSuccess(response: AxiosResponse) {
  return response.data;
}
