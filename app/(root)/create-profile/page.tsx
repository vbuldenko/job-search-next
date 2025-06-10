"use client";

import { useState, useEffect } from "react";
import { getProfile, clearProfile } from "@/lib/utils/localStorage";
import ProfileForm from "@/components/forms/ProfileForm";
import { UserProfile } from "@/types";

const CreateProfilePage = () => {
  const [existingProfile, setExistingProfile] =
    useState<Partial<UserProfile> | null>(null);

  useEffect(() => {
    const profile = getProfile();
    if (profile) {
      setExistingProfile(profile);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-2xl">
        {existingProfile ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Profile
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Name:</span>
                <span className="ml-2 text-gray-600">
                  {existingProfile.name}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2 text-gray-600">
                  {existingProfile.email}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Desired Job Title:
                </span>
                <span className="ml-2 text-gray-600">
                  {existingProfile.desiredJobTitle}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">About Me:</span>
                <p className="ml-2 text-gray-600 mt-1">
                  {existingProfile.aboutMe}
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => {
                    clearProfile();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {existingProfile
                  ? "Update Your Profile"
                  : "Create Your Profile"}
              </h1>
              <p className="text-gray-600">
                Tell us about yourself to get personalized job recommendations
              </p>
            </div>

            <ProfileForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProfilePage;
