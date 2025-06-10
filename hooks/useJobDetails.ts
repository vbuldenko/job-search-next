import useSWR from "swr";
import { Job } from "@/types";
import { jobFetcher } from "@/lib/axios/fetchers";

interface JobDetailsParams {
  job_id: string;
  country?: string;
}

export const useJobDetails = (params: JobDetailsParams | null) => {
  const searchParams = params
    ? new URLSearchParams({
        job_id: params.job_id,
        country: params.country || "us",
      })
    : null;

  const detailsQuery = searchParams
    ? `/job-details?${searchParams.toString()}`
    : null;

  const { data, error, isLoading } = useSWR<Job[] | []>(
    detailsQuery,
    jobFetcher as any
  );

  return { data, error, isLoading };
};
