"use client";

import { UserProfile } from "@/types";
import { HiUser, HiBriefcase, HiDocumentText } from "react-icons/hi";

interface ProfileFormProps {
  formData: UserProfile;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  isValid: boolean;
}

const ProfileForm = ({
  formData,
  onChange,
  onSubmit,
  isLoading,
  isValid,
}: ProfileFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            placeholder="Enter your full name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Desired Job Title *
        </label>
        <div className="relative">
          <HiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="desiredJobTitle"
            value={formData.desiredJobTitle}
            onChange={onChange}
            required
            placeholder="e.g. Frontend Developer, Product Manager"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          About Me *
        </label>
        <div className="relative">
          <HiDocumentText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={onChange}
            required
            rows={5}
            placeholder="Tell us about your experience and skills..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid || isLoading}
        className={`w-full py-3 rounded-lg font-medium transition-all ${
          isValid && !isLoading
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;
