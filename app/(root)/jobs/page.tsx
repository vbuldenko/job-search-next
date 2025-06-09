"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { mockJobs, Job } from "@/lib/mock/jobs";
import JobList from "@/components/job/JobList";

const JobsPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [currentSearch, setCurrentSearch] = useState(searchQuery);

  useEffect(() => {
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <JobList jobs={filteredJobs} searchQuery={currentSearch} />
      </div>
    </div>
  );
};

export default JobsPage;
