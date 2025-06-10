import useSWR from "swr";
import { Job } from "@/types";
import { jobFetcher } from "@/lib/axios/fetchers";

interface JobSearchParams {
  query?: string;
  page?: string;
  num_pages?: string;
  country?: string;
  date_posted?: string;
}

export const useJobs = (params: JobSearchParams | null) => {
  const searchParams = params
    ? new URLSearchParams({
        query: params.query || "",
        page: params?.page || "1",
        num_pages: params?.num_pages || "1",
        country: params?.country || "us",
        date_posted: params?.date_posted || "all",
      })
    : null;

  const searchQuery = searchParams
    ? `/search?${searchParams.toString()}`
    : null;
  const { data, error, isLoading } = useSWR<Job[]>(
    searchQuery,
    jobFetcher as any
  );

  return { data, error, isLoading };
};
