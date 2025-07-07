"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ContactNew() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 overflow-hidden">
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Have questions or feedback? We'd love to hear from you and help you
              make the most of your event experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <form action="#" method="POST">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                      <div className="mt-1">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company (optional)
                      </label>
                      <div className="mt-1">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <div className="mt-1">
                        <div className="flex rounded-md shadow-sm">
                          <div className="relative inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 py-2">
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-8 text-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                            >
                              <option>UK</option>
                              <option>US</option>
                              <option>EU</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="h-4 w-4 text-gray-400"
                              />
                            </div>
                          </div>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="123-456-7890"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <select
                          id="subject"
                          name="subject"
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>General Inquiry</option>
                          <option>Event Management</option>
                          <option>Technical Support</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="privacy"
                            className="font-medium text-gray-700"
                          >
                            By submitting this form, you agree to our{" "}
                            <a
                              href="/privacypolicy"
                              className="text-indigo-600 hover:text-indigo-500"
                            >
                              privacy policy
                            </a>
                            {" "}and{" "}
                            <a
                              href="/termsofservice"
                              className="text-indigo-600 hover:text-indigo-500"
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
                      className="flex w-full justify-center rounded-md bg-indigo-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                      disabled={!agreed}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
                support@evently.com
              </p>
            </div>

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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">
                Call us during business hours for immediate assistance
              </p>
              <p className="mt-2 text-indigo-600 font-medium">
                +44 (0) 20 1234 5678
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center sm:col-span-2 lg:col-span-1">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Live Chat</h3>
              <p className="mt-2 text-gray-600">
                Chat with our support team in real-time
              </p>
              <button className="mt-2 text-indigo-600 font-medium hover:text-indigo-500">
                Start Chat
              </button>
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
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call our support line for immediate assistance.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What information should I include in my message?
                </h3>
                <p className="text-gray-600">
                  Please provide as much detail as possible about your inquiry, including 
                  your account information (if applicable), the nature of your question, 
                  and any relevant screenshots or error messages.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Do you offer phone support?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer phone support during business hours (9 AM - 5 PM GMT). 
                  For non-urgent inquiries, email support is available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
