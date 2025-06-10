"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  HiHeart,
  HiOutlineHeart,
  HiLocationMarker,
  HiClock,
  HiCalendar,
  HiExternalLink,
} from "react-icons/hi";
import { useJobDetails } from "@/hooks/useJobDetails";
import { toggleLikedJob, isJobLiked } from "@/lib/utils/localStorage";

const JobDetailsPage = () => {
  const params = useParams();
  const jobId = decodeURIComponent(params.id as string);
  const [isLiked, setIsLiked] = useState(false);

  const { data, error, isLoading } = useJobDetails(
    jobId ? { job_id: jobId } : null
  );
  const job = !isLoading && data ? data[0] : null;

  useEffect(() => {
    if (job) {
      setIsLiked(isJobLiked(job.job_id));
    }
  }, [job]);

  const handleLikeToggle = () => {
    if (job) {
      toggleLikedJob(job);
      setIsLiked(!isLiked);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Error loading job details</p>
          <p className="text-gray-500">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Job not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {job.employer_logo && (
                <img
                  src={job.employer_logo}
                  alt={job.employer_name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {job.job_title}
                </h1>
                <p className="text-lg text-gray-600">{job.employer_name}</p>
              </div>
            </div>
            <button
              onClick={handleLikeToggle}
              className={`p-3 rounded-lg transition-colors ${
                isLiked
                  ? "text-red-500 bg-red-50"
                  : "text-gray-400 hover:text-red-500"
              }`}
            >
              {isLiked ? (
                <HiHeart className="w-6 h-6" />
              ) : (
                <HiOutlineHeart className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <HiLocationMarker className="w-5 h-5 mr-2" />
              {job.job_location}
            </div>
            <div className="flex items-center text-gray-600">
              <HiClock className="w-5 h-5 mr-2" />
              {job.job_employment_type_text}
            </div>
            <div className="flex items-center text-gray-600">
              <HiCalendar className="w-5 h-5 mr-2" />
              {job.job_posted_human_readable}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Job Description
            </h2>
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              {job.job_description}
            </div>
          </div>

          {job.job_highlights && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {job.job_highlights.Qualifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Qualifications
                  </h3>
                  <ul className="space-y-2">
                    {job.job_highlights.Qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {job.job_highlights.Responsibilities && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {job.job_highlights.Responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="border-t pt-6">
            <a
              href={job.job_apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
              <HiExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
