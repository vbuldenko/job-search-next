"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { UserProfile } from "@/types";
import {
  HiUser,
  HiMail,
  HiLockClosed,
  HiBriefcase,
  HiDocumentText,
} from "react-icons/hi";
import { saveProfile } from "@/lib/utils/localStorage";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  desiredJobTitle: Yup.string().required("Job title is required"),
  aboutMe: Yup.string()
    .min(10, "Please provide more details")
    .required("About me is required"),
});

const ProfileForm = () => {
  const router = useRouter();

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      icon: HiUser,
      placeholder: "Full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: HiMail,
      placeholder: "Email address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      icon: HiLockClosed,
      placeholder: "Password",
    },
    {
      name: "desiredJobTitle",
      label: "Job Title",
      type: "text",
      icon: HiBriefcase,
      placeholder: "e.g. Frontend Developer",
    },
  ];

  const initialValues: UserProfile = {
    name: "",
    email: "",
    password: "",
    desiredJobTitle: "",
    aboutMe: "",
  };

  const onSubmit = async (
    values: UserProfile,
    { setSubmitting }: FormikHelpers<UserProfile>
  ) => {
    try {
      const profile = await authService.register(values);
      saveProfile(profile);
      alert("Profile saved successfully!");
      router.push("/jobs");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert((error as any)?.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label} *
                </label>
                <div className="relative">
                  <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
                  <Field
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Me *
            </label>
            <div className="relative">
              <HiDocumentText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Field
                as="textarea"
                name="aboutMe"
                rows={3}
                placeholder="Tell us about your experience and skills..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <ErrorMessage
              name="aboutMe"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isValid || !dirty}
            className={`w-full py-2 rounded-md font-medium transition-all ${
              isSubmitting || !isValid || !dirty
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Saving..." : "Save Profile"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
