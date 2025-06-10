import { jobClient } from "./jobClient";

export const jobFetcher = (url: string) => jobClient.get(url);
