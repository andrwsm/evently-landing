import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import EventlyIcon from "../assets/eventlyLogos/EventlyIcon.png"; // You'll need to add this image
import whiteswirls from "../assets/eventlyLogos/whiteswirls.png"; // Import the swirls image

export default function Users() {
  // User-focused benefits
  const userBenefits = [
    {
      title: "Build Your Network",
      description:
        "Connect with like-minded professionals and industry leaders at events tailored to your interests and career goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Discover Relevant Events",
      description:
        "Find events that match your interests with our smart recommendation system that learns your preferences over time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Learn New Skills",
      description:
        "Attend workshops, seminars, and conferences that help you expand your knowledge and stay ahead in your field.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Expand Your Opportunities",
      description:
        "Turn event connections into career opportunities with our digital networking tools that keep the conversation going.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  const userFeatures = [
    {
      title: "Tap to Connect",
      description:
        "Scan a QR, view a profile, make a move. Digital networking made instant and way less awkward.",
      emoji: "📱",
    },
    {
      title: "Community That Doesn't Clock Out",
      description:
        "Jump into convos before, during, and after the event. Forums that keep the energy going, all in one place.",
      emoji: "💬",
    },
    {
      title: "Digital Business Cards, Done Right",
      description:
        "Ditch the paper. Share your contact info and profile with one smooth tap... fast, sleek, unforgettable.",
      emoji: "💼",
    },
    {
      title: "Built for Gen Z",
      description:
        "Social-first. Speedy. Purpose-driven. Finally, a platform that gets you, and looks the part too.",
      emoji: "⚡",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="swirls opacity-25">
            <img src={whiteswirls}></img>
          </div>
        </div>

        <div className="relative px-6 py-32 sm:py-40 lg:py-48 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Expand Your Network,</span>
            <span className="block text-indigo-200 mt-2">
              Knowledge, and Opportunities
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
            Connect with professionals, discover events that matter to you, and
            build relationships that last beyond the event itself.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="/signup"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
              >
                Sign Up
              </a>
              <a
                href="#features"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Designed for Attendees
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Make the most of every event
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform is designed to enhance your event experience and help
              you build lasting professional relationships.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {userBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tools Built for Modern Networking
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We've designed features that help you connect more meaningfully
              with others and maximize your event experience.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
              {userFeatures.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute h-24 w-24 rounded-md bg-blue-100 flex items-center justify-center">
                    <span className="text-4xl">{feature.emoji}</span>
                  </div>
                  <div className="ml-32 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Just 3 steps to upgrade your event game:
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Follow these simple steps to transform your event experience and
              professional connections.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-indigo-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-indigo-50 px-3 text-lg font-medium text-indigo-600">
                Three simple steps
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 sm:grid-cols-3 lg:max-w-none">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 mx-auto">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  1. Create Your Profile
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Build your digital business card and show off your skills,
                  interests, and what you're all about.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 mx-auto">
                  <span className="text-xl">📅</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  2. Find Events That Fit
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Browse and register for events tailored to your goals. No
                  clutter. Just what matters.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 mx-auto">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  3. Connect & Grow
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Scan. Chat. Connect. Use QR codes and community forums to
                  build real relationships that last beyond the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to transform your networking experience?
              </h2>
              <div className="mt-6 text-lg text-blue-100 max-w-3xl">
                <p>
                  Join thousands of professionals who are building meaningful
                  connections, advancing their careers, and discovering
                  opportunities through Evently.
                </p>
              </div>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="/signup"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                  >
                    Sign up to our waitlist
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-auto"
                  src={EventlyIcon}
                  alt="Digital profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
