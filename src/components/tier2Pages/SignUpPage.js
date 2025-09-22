"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/49525342.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (isSubmitted) {
    return (
      <div className="bg-white relative">
        <main className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
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
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Welcome to Eventli!
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Thank you for signing up! We'll keep you updated on our launch
              progress and notify you as soon as we're ready to go live.
            </p>
            <div className="mt-10">
              <button
                onClick={() => navigate(-1)}
                className="rounded-xl bg-slate-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-500 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
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
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-200">
              Be the first to experience the future of event management. Sign up
              now and get exclusive early access when we launch.
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Form Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Get Early Access
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose your role and join thousands waiting for launch
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Organiser Form */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    For Event Organisers
                  </h3>
                  <p className="text-slate-600">
                    Create and manage amazing events with our powerful platform
                  </p>
                </div>

                {/* HubSpot Organiser Form */}
                <div className="hs-form-container">
                  <div
                    className="hs-form-frame"
                    data-region="na1"
                    data-form-id="8f028611-b769-4547-ad94-ab2eac040eab"
                    data-portal-id="49525342"
                  ></div>
                </div>

                {/* Legal Text */}
                <div className="mt-6 text-sm text-gray-600 text-center">
                  <p>
                    By clicking the button, you agree to receive updates about
                    Eventli and accept the{" "}
                    <a
                      href="/privacypolicy"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/termsofservice"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      terms of service
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* User Form */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-4">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    For Event Attendees
                  </h3>
                  <p className="text-slate-600">
                    Discover and attend amazing events in your area
                  </p>
                </div>

                {/* HubSpot User Form */}
                <div className="hs-form-container">
                  <div
                    className="hs-form-frame"
                    data-region="na1"
                    data-form-id="055cdbb7-10fb-4ed2-9ce3-e00113366f11"
                    data-portal-id="49525342"
                  ></div>
                </div>

                {/* Legal Text */}
                <div className="mt-6 text-sm text-gray-600 text-center">
                  <p>
                    By clicking the button, you agree to receive updates about
                    Eventli and accept the{" "}
                    <a
                      href="/privacypolicy"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/termsofservice"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      terms of service
                    </a>
                  </p>
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

      {/* CSS to style HubSpot form */}
      <style jsx>{`
        .hs-form-container {
          margin: 20px 0;
        }

        .hs-form-frame {
          width: 100%;
        }

        /* Style HubSpot form elements to match your design */
        :global(.hs-form) {
          max-width: 100%;
        }

        :global(.hs-form .hs-form-field) {
          margin-bottom: 1rem;
        }

        :global(.hs-form .hs-input) {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        :global(.hs-form .hs-input:focus) {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        :global(.hs-form .hs-button) {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.75rem 1rem;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        :global(.hs-form .hs-button:hover) {
          background-color: #1d4ed8;
        }

        :global(.hs-form .hs-form-required) {
          color: #ef4444;
        }

        :global(.hs-form .hs-fieldtype-checkbox) {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        :global(.hs-form .hs-fieldtype-checkbox label) {
          font-size: 0.875rem;
          color: #374151;
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}
                       