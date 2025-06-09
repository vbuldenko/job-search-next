"use client";

import { Job } from "@/types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
  searchQuery?: string;
  isRecommendations?: boolean;
}

const JobList = ({ jobs, searchQuery, isRecommendations }: JobListProps) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          {searchQuery
            ? `No jobs found matching "${searchQuery}"`
            : isRecommendations
            ? "No recommendations available. Try updating your profile or search for jobs."
            : "No jobs found"}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {jobs.length} job{jobs.length !== 1 ? "s" : ""}
          {isRecommendations
            ? " recommended"
            : searchQuery
            ? ` found for "${searchQuery}"`
            : " found"}
        </p>

        {isRecommendations && (
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
            Personalized
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
