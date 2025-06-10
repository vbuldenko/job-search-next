"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HiUser, HiExclamationCircle } from "react-icons/hi";
import Link from "next/link";
import { getProfile } from "@/lib/utils/localStorage";
import JobList from "@/components/job/JobList";
import { UserProfile } from "@/types";
import SearchForm from "@/components/forms/SearchForm";
import { useJobs } from "@/hooks/useJobs";

const JobsPage = () => {
  const searchParams = useSearchParams();
  const urlSearchQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  const shouldFetchJobs = isProfileLoaded || searchQuery;
  const jobQuery =
    profile && !searchQuery ? profile.desiredJobTitle : searchQuery;

  const {
    data: jobs,
    error,
    isLoading,
  } = useJobs(shouldFetchJobs ? { query: jobQuery } : null);

  useEffect(() => {
    const userProfile = getProfile();
    setProfile(userProfile as UserProfile);
    setIsProfileLoaded(true);
  }, []);

  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
  };

  const isShowingRecommendations = profile && !searchQuery;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isShowingRecommendations ? "Recommended for You" : "Find Jobs"}
              </h1>
              {isShowingRecommendations && (
                <p className="text-gray-600">
                  Based on your profile:{" "}
                  <span className="font-medium">{profile.desiredJobTitle}</span>
                </p>
              )}
            </div>
          </div>

          <SearchForm
            searchQuery={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
          />

          {searchQuery && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-600">Searching for:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {searchQuery}
              </span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {isProfileLoaded && !profile && !searchQuery && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <HiUser className="w-6 h-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-blue-900 mb-1">
                  Get Personalized Job Recommendations
                </h3>
                <p className="text-blue-700 text-sm mb-3">
                  Create your profile to receive job recommendations tailored to
                  your skills and preferences.
                </p>
                <Link
                  href="/create-profile"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Profile Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {shouldFetchJobs && isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500">
                {isShowingRecommendations
                  ? "Loading your recommendations..."
                  : "Searching for jobs..."}
              </p>
            </div>
          </div>
        )}

        {shouldFetchJobs && error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <HiExclamationCircle className="w-6 h-6 text-red-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-red-900 mb-1">
                  Error Loading Jobs
                </h3>
                <p className="text-red-700 text-sm mb-3">
                  {error.message ||
                    "Something went wrong while fetching jobs. Please try again."}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {shouldFetchJobs && !isLoading && !error && (
          <JobList
            jobs={jobs || []}
            searchQuery={searchQuery}
            isRecommendations={isShowingRecommendations ?? undefined}
          />
        )}

        {shouldFetchJobs &&
          !isLoading &&
          !error &&
          (!jobs || jobs.length === 0) && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500 mb-4">
                {isShowingRecommendations
                  ? "No recommendations available for your profile. Try searching for specific job titles."
                  : `No jobs found for "${searchQuery}". Try different keywords.`}
              </p>
              {!isShowingRecommendations && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default JobsPage;
