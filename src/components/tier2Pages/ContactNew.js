"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ContactNew() {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/49525342.js";
    script.defer = true;
    document.body.appendChild(script);

    // Add custom CSS for HubSpot form styling
    const style = document.createElement("style");
    style.textContent = `
      .hs-form-frame {
        background: white;
        border-radius: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        padding: 2.5rem;
        margin: 0 auto;
        max-width: 42rem;
      }
      
      .hs-form fieldset {
        border: none;
        margin: 0;
        padding: 0;
      }
      
      .hs-form .hs-form-field {
        margin-bottom: 1.5rem;
      }
      
      .hs-form .hs-form-field:last-child {
        margin-bottom: 0;
      }
      
      .hs-form label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        margin-bottom: 0.25rem;
      }
      
      .hs-form input[type="text"],
      .hs-form input[type="email"],
      .hs-form input[type="tel"],
      .hs-form select,
      .hs-form textarea {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.75rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        font-size: 0.875rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      
      .hs-form input[type="text"]:focus,
      .hs-form input[type="email"]:focus,
      .hs-form input[type="tel"]:focus,
      .hs-form select:focus,
      .hs-form textarea:focus {
        outline: none;
        border-color: #64748b;
        box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.1);
      }
      
      .hs-form .hs-button {
        display: flex;
        width: 100%;
        justify-content: center;
        border-radius: 0.75rem;
        background-color: #475569;
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: white;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border: none;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
      }
      
      .hs-form .hs-button:hover {
        background-color: #334155;
      }
      
      .hs-form .hs-button:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
      }
      
      .hs-form .hs-error-msgs {
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
      
      .hs-form .hs-form-required {
        color: #dc2626;
      }
      
      .hs-form .hs-fieldtype-checkbox {
        display: flex;
        align-items: flex-start;
        margin-top: 1rem;
      }
      
      .hs-form .hs-fieldtype-checkbox input[type="checkbox"] {
        width: 1rem;
        height: 1rem;
        margin-right: 0.75rem;
        margin-top: 0.25rem;
        border-radius: 0.25rem;
        border: 1px solid #d1d5db;
        color: #6366f1;
        flex-shrink: 0;
      }
      
      .hs-form .hs-fieldtype-checkbox input[type="checkbox"]:focus {
        box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.1);
      }
      
      .hs-form .hs-fieldtype-checkbox label {
        font-size: 0.875rem;
        color: #374151;
        margin-bottom: 0;
      }
      
      .hs-form .hs-fieldtype-checkbox a {
        color: #6366f1;
        text-decoration: none;
      }
      
      .hs-form .hs-fieldtype-checkbox a:hover {
        color: #4f46e5;
      }
      
      @media (min-width: 640px) {
        .hs-form .hs-form-field.two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

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

        <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-48 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-200">
              Have questions or feedback? We'd love to hear from you and help
              you make the most of your event experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="hs-form-frame"
              data-region="na1"
              data-form-id="bca55d35-60f3-4da9-a9df-f778817dc1ce"
              data-portal-id="49525342"
            ></div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Other ways to reach us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">
                Send us an email and we'll get back to you within 24 hours
              </p>
              <p className="mt-2 text-indigo-600 font-medium">
                eventlyplatform@protonmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How quickly can I get support?
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call our support
                  line for immediate assistance.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What information should I include in my message?
                </h3>
                <p className="text-gray-600">
                  Please provide as much detail as possible about your inquiry,
                  including your account information (if applicable), the nature
                  of your question.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Do you offer phone support?
                </h3>
                <p className="text-gray-600">
                  No, currently we only offer support via email and our contact
                  form. We are working on adding phone support in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}