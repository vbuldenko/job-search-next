"use client";

import { useState, useEffect } from "react";
import { HiHeart } from "react-icons/hi";
import Link from "next/link";
import {
  getLikedJobs,
  removeLikedJob,
  clearLikedJobs,
} from "@/lib/utils/localStorage";
import JobCard from "@/components/job/JobCard";
import { Job } from "@/types";

const LikedPage = () => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    setLikedJobs(getLikedJobs());
  }, []);

  const handleRemoveJob = (jobId: string) => {
    removeLikedJob(jobId);
    setLikedJobs(getLikedJobs());
  };

  const handleClearAll = () => {
    if (confirm("Remove all liked jobs?")) {
      clearLikedJobs();
      setLikedJobs([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Liked Jobs
            </h1>
            <p className="text-gray-600">
              {likedJobs.length} job{likedJobs.length !== 1 ? "s" : ""} saved
            </p>
          </div>
          {likedJobs.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {likedJobs.length === 0 ? (
          <div className="text-center py-16">
            <HiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No liked jobs yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start exploring jobs and save the ones you&#39;re interested in.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedJobs.map((job) => (
              <JobCard
                key={job.job_id}
                job={job}
                variant="liked"
                onRemove={handleRemoveJob}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedPage;
