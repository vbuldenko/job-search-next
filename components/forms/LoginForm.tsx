"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { saveProfile } from "@/lib/utils/localStorage";
import { AuthCredentials } from "@/types";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();

  const initialValues: AuthCredentials = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: AuthCredentials,
    { setSubmitting }: FormikHelpers<AuthCredentials>
  ) => {
    try {
      const user = await authService.login(values);
      saveProfile(user);
      alert("Login successful!");
      router.push("/jobs");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: HiMail,
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      icon: HiLockClosed,
      placeholder: "Enter your password",
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <Form className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} *
              </label>
              <div className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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

          <button
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}
            className={`w-full py-2 rounded-md font-medium transition-all ${
              isValid && dirty && !isSubmitting
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
