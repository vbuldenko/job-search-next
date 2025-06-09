"use client";

import Link from "next/link";
import { HiBriefcase } from "react-icons/hi";

export default function Home() {
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
        </div>
      </section>
    </div>
  );
}
