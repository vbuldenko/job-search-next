"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveProfile, getProfile } from "@/lib/utils/localStorage";
import ProfileForm from "@/components/forms/ProfileForm";
import { UserProfile } from "@/types";

const CreateProfilePage = () => {
  const [formData, setFormData] = useState<UserProfile>({
    name: "",
    desiredJobTitle: "",
    aboutMe: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const profile = getProfile();
    if (profile) setFormData(profile);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      saveProfile(formData);
      alert("Profile saved successfully!");
      router.push("/jobs");
    } catch (error) {
      alert("Error saving profile");
    } finally {
      setIsLoading(false);
    }
  };

  const isValid = !!(
    formData.name.trim() &&
    formData.desiredJobTitle.trim() &&
    formData.aboutMe.trim()
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Profile
            </h1>
            <p className="text-gray-600">
              Tell us about yourself to get personalized job recommendations
            </p>
          </div>

          <ProfileForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isValid={isValid}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;
