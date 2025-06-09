"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  HiHeart,
  HiOutlineHeart,
  HiLocationMarker,
  HiClock,
  HiTrash,
} from "react-icons/hi";
import { Job } from "@/lib/mock/jobs";
import { toggleLikedJob, isJobLiked } from "@/lib/utils/localStorage";

interface JobCardProps {
  job: Job;
  variant?: "default" | "liked";
  onRemove?: (jobId: string) => void;
}

const JobCard = ({ job, variant = "default", onRemove }: JobCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(isJobLiked(job.job_id));
  }, [job.job_id]);

  const handleLikeToggle = () => {
    toggleLikedJob(job);
    setIsLiked(!isLiked);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(job.job_id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {job.employer_logo && (
            <img
              src={job.employer_logo}
              alt={job.employer_name}
              className="w-12 h-12 rounded-lg object-cover"
            />
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{job.job_title}</h3>
            <p className="text-gray-600 text-sm">{job.employer_name}</p>
          </div>
        </div>

        {variant === "liked" ? (
          <button
            onClick={handleRemove}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Remove from liked jobs"
          >
            <HiTrash className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleLikeToggle}
            className={`p-2 rounded-lg transition-colors ${
              isLiked
                ? "text-red-500 bg-red-50"
                : "text-gray-400 hover:text-red-500"
            }`}
            title={isLiked ? "Remove from liked jobs" : "Add to liked jobs"}
          >
            {isLiked ? (
              <HiHeart className="w-5 h-5" />
            ) : (
              <HiOutlineHeart className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <HiLocationMarker className="w-4 h-4 mr-2" />
          {job.job_location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <HiClock className="w-4 h-4 mr-2" />
          {job.job_employment_type_text} • {job.job_posted_human_readable}
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {job.job_description.slice(0, variant === "liked" ? 120 : 150)}...
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {job.job_is_remote && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Remote
            </span>
          )}
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {job.job_employment_type}
          </span>
        </div>
        <Link
          href={`/job-details/${job.job_id}`}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          {variant === "liked" ? "View Details" : "Details"}
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
