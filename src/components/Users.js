import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import EventlyIcon from "../assets/eventlyLogos/Eventli/EventlyIcon.png"; // You'll need to add this image
import whiteswirls from "../assets/eventlyLogos/whiteswirls.png"; // Import the swirls image

export default function Users() {
  // User-focused benefits
  const userBenefits = [
    {
      title: "Build Your Network",
      description:
        "Connect with like-minded professionals and industry leaders at events tailored to your interests and career goals.",
      emoji: "🤝",
    },
    {
      title: "Discover Relevant Events",
      description:
        "Find events that match your interests with our smart recommendation system that learns your preferences over time.",
      emoji: "🔍",
    },
    {
      title: "Learn New Skills",
      description:
        "Attend workshops, seminars, and conferences that help you expand your knowledge and stay ahead in your field.",
      emoji: "📚",
    },
    {
      title: "Expand Your Opportunities",
      description:
        "Turn event connections into career opportunities with our digital networking tools that keep the conversation going.",
      emoji: "🚀",
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
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-slate-200 sm:max-w-3xl">
            Connect with professionals, discover events that matter to you, and
            build relationships that last beyond the event itself.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="/signup"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-slate-900 bg-white hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 sm:px-8"
              >
                Sign Up
              </a>
              <a
                href="#features"
                className="flex items-center justify-center px-6 py-3 border border-white/20 text-base font-semibold rounded-xl shadow-lg text-white bg-transparent backdrop-blur-sm hover:bg-white/10 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 sm:px-8"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">
              Designed for Attendees
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Make the most of every event
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
              Our platform is designed to enhance your event experience and help
              you build lasting professional relationships.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {userBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-xl rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm">
                        <span className="text-2xl">{benefit.emoji}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-semibold text-slate-900">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
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
            <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">
              Our Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tools Built for Modern Networking
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
              We've designed features that help you connect more meaningfully
              with others and maximize your event experience.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
              {userFeatures.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute h-24 w-24 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">{feature.emoji}</span>
                  </div>
                  <div className="ml-32 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-slate-600">
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
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Just 3 steps to upgrade your event game:
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
              Follow these simple steps to transform your event experience and
              professional connections.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-100 px-3 text-lg font-medium text-slate-600">
                Three simple steps
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 sm:grid-cols-3 lg:max-w-none">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 text-white mb-4 mx-auto shadow-lg">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  1. Create Your Profile
                </h3>
                <p className="mt-2 text-base text-slate-600 text-center">
                  Build your digital business card and show off your skills,
                  interests, and what you're all about.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 text-white mb-4 mx-auto shadow-lg">
                  <span className="text-xl">📅</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  2. Find Events That Fit
                </h3>
                <p className="mt-2 text-base text-slate-600 text-center">
                  Browse and register for events tailored to your goals. No
                  clutter. Just what matters.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 text-white mb-4 mx-auto shadow-lg">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  3. Connect & Grow
                </h3>
                <p className="mt-2 text-base text-slate-600 text-center">
                  Scan. Chat. Connect. Use QR codes and community forums to
                  build real relationships that last beyond the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to transform your networking experience?
              </h2>
              <div className="mt-6 text-lg text-slate-200 max-w-3xl">
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
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-slate-900 bg-white hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
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