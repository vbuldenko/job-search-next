import axios from "axios";

export function createClient(baseURL: string) {
  return axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
