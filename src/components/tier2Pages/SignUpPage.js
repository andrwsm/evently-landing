"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [selectedType, setSelectedType] = useState("organiser"); // New state for toggle

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Sign up data:", {
        firstName,
        lastName,
        email,
        type: selectedType,
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white relative">
        <main className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Back
          </button>

          <div className="text-center mt-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome to Eventli!
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for signing up! We'll keep you updated on our launch
              progress and notify you as soon as we're ready to go live.
            </p>
            <div className="mt-10">
              <button
                onClick={() => navigate(-1)}
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Continue Exploring
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 left-0 transform translate-y-1/2 opacity-20"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 800 800"
          >
            <circle cx="400" cy="400" r="400" fill="white"></circle>
          </svg>
          <svg
            className="absolute top-0 right-0 transform -translate-y-1/2 opacity-20"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 800 800"
          >
            <circle cx="400" cy="400" r="400" fill="white"></circle>
          </svg>
        </div>

        <div className="relative px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-8"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Back
          </button>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Join the Waitlist
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Be the first to experience the future of event management. Sign up
              now and get exclusive early access when we launch.
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Form Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Get Early Access
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Join thousands of event organizers and attendees waiting for
                    launch
                  </p>
                </div>

                {/* Toggle Bar */}
                <div className="relative mb-8">
                  <div className="relative bg-gray-100 rounded-lg p-1 flex">
                    {/* Sliding background */}
                    <div
                      className={`absolute top-1 bottom-1 w-1/2 bg-blue-600 rounded-md transition-transform duration-300 ease-in-out ${
                        selectedType === "user"
                          ? "translate-x-full"
                          : "translate-x-0"
                      }`}
                    />

                    {/* Buttons */}
                    <button
                      type="button"
                      onClick={() => setSelectedType("organiser")}
                      className={`relative z-10 flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
                        selectedType === "organiser"
                          ? "text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      Organiser
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedType("user")}
                      className={`relative z-10 flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
                        selectedType === "user"
                          ? "text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      User
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <div className="min-h-[400px]">
                  {selectedType === "organiser" ? (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Organiser Sign Up
                      </h3>
                      <p className="text-gray-600">
                        Create and manage amazing events with our powerful
                        platform
                      </p>
                      {/* Organiser form will go here */}
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <div className="mt-2">
                              <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your first name"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <div className="mt-2">
                              <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your last name"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your email address"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="terms"
                                  name="terms"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  checked={agreed}
                                  onChange={() => setAgreed(!agreed)}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="terms"
                                  className="font-medium text-gray-700"
                                >
                                  I agree to receive updates about Eventli and
                                  accept the{" "}
                                  <a
                                    href="/privacypolicy"
                                    className="text-blue-600 hover:text-blue-500"
                                  >
                                    privacy policy
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    href="/termsofservice"
                                    className="text-blue-600 hover:text-blue-500"
                                  >
                                    terms of service
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8">
                          <button
                            type="submit"
                            disabled={!agreed || isSubmitting}
                            className="flex w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Signing up...
                              </div>
                            ) : (
                              "Join the Waitlist as Organiser"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        User Sign Up
                      </h3>
                      <p className="text-gray-600">
                        Discover and attend amazing events in your area
                      </p>
                      {/* User form will go here */}
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                          <div>
                            <label
                              htmlFor="user-first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <div className="mt-2">
                              <input
                                id="user-first-name"
                                name="user-first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your first name"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="user-last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <div className="mt-2">
                              <input
                                id="user-last-name"
                                name="user-last-name"
                                type="text"
                                autoComplete="family-name"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your last name"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="user-email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="user-email"
                                name="user-email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter your email address"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="user-terms"
                                  name="user-terms"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  checked={agreed}
                                  onChange={() => setAgreed(!agreed)}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="user-terms"
                                  className="font-medium text-gray-700"
                                >
                                  I agree to receive updates about Eventli and
                                  accept the{" "}
                                  <a
                                    href="/privacypolicy"
                                    className="text-blue-600 hover:text-blue-500"
                                  >
                                    privacy policy
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    href="/termsofservice"
                                    className="text-blue-600 hover:text-blue-500"
                                  >
                                    terms of service
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8">
                          <button
                            type="submit"
                            disabled={!agreed || isSubmitting}
                            className="flex w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Signing up...
                              </div>
                            ) : (
                              "Join the Waitlist as User"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What you'll get as an early member
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Early Access
              </h3>
              <p className="text-gray-600">
                Be among the first to use Eventli when we launch, before it's
                available to the general public.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Priority Support
              </h3>
              <p className="text-gray-600">
                Get priority customer support and direct feedback channels with
                our development team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
