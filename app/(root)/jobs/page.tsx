"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HiSearch, HiUser } from "react-icons/hi";
import Link from "next/link";
import { mockJobs } from "@/lib/mock/jobs";
import { getProfile } from "@/lib/utils/localStorage";
import JobList from "@/components/job/JobList";
import { Job, UserProfile } from "@/types";
import { filterJobs, getJobRecommendations } from "@/lib/utils/job";
import SearchForm from "@/components/forms/SearchForm";

const JobsPage = () => {
  const searchParams = useSearchParams();
  const urlSearchQuery = searchParams.get("search") || "";
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const userProfile = getProfile();
    setProfile(userProfile);

    if (userProfile && !urlSearchQuery) {
      const recommendations = getJobRecommendations(mockJobs, userProfile);
      setJobs(recommendations);
    } else if (urlSearchQuery) {
      const filtered = filterJobs(mockJobs, urlSearchQuery);
      setJobs(filtered);
    } else {
      setJobs(mockJobs);
    }
  }, [urlSearchQuery]);

  useEffect(() => {
    if (searchQuery && searchQuery !== urlSearchQuery) {
      const filtered = filterJobs(mockJobs, searchQuery);
      setJobs(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {profile && !searchQuery ? "Recommended for You" : "Find Jobs"}
              </h1>
              {profile && !searchQuery && (
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

        {!profile && !searchQuery && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <HiUser className="w-6 h-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-blue-900 mb-1">
                  Get Personalized Recommendations
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

        {/* Job List */}
        <JobList
          jobs={jobs}
          searchQuery={searchQuery}
          isRecommendations={!!profile && !searchQuery}
        />
      </div>
    </div>
  );
};

export default JobsPage;
