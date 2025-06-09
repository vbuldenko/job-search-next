"use client";

import { Job } from "@/lib/mock/jobs";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
  searchQuery?: string;
}

const JobList = ({ jobs, searchQuery }: JobListProps) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          {searchQuery
            ? `No jobs found matching "${searchQuery}"`
            : "No jobs found"}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4">
        <p className="text-gray-600">
          {jobs.length} job{jobs.length !== 1 ? "s" : ""} found
          {searchQuery && ` for "${searchQuery}"`}
        </p>
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
