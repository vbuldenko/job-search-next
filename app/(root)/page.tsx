"use client";

import Link from "next/link";
import { HiSearch, HiBriefcase, HiHeart, HiUser } from "react-icons/hi";

export default function Home() {
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = (e.target as HTMLInputElement).value;
      if (query.trim()) {
        window.location.href = `/jobs?search=${encodeURIComponent(query)}`;
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover thousands of job opportunities from top companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/jobs"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <HiBriefcase className="inline w-5 h-5 mr-2" />
              Browse Jobs
            </Link>
            <Link
              href="/create-profile"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Create Profile
            </Link>
          </div>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyDown={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
