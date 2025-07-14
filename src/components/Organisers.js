import React from "react";
import keepMore from "../assets/images/MoreMoneyIcon.webp";
import { CheckIcon } from "@heroicons/react/24/outline";

import whiteswirls from "../assets/eventlyLogos/whiteswirls.png";

export default function Organisers() {
  // Define the problems and solutions based on the images
  const problems = [
    {
      title: "Sky-High Seller Fees",
      description:
        "Big platforms take a big cut — leaving indie organisers squeezed and struggling to profit.",
      emoji: "💸",
    },
    {
      title: "Scattered Comms = Lost Attention",
      description:
        "Email here, DM there... and where did that RSVP go? Fragmented outreach kills engagement.",
      emoji: "📢",
    },
    {
      title: "Too Many Tools",
      description:
        "Managing your event shouldn't mean switching between five apps just to stay afloat.",
      emoji: "🧩",
    },
    {
      title: "Manual Everything",
      description:
        "Still tracking RSVPs in spreadsheets? That's time (and growth) you're losing.",
      emoji: "📊",
    },
  ];

  const solutions = [
    {
      title: "Cut the Fees (30%)",
      description:
        "Say goodbye to sky-high seller costs. Our platform slashes fees by 30%, so you keep more of what you earn.",
      emoji: "💸",
    },
    {
      title: "Build Real Community",
      description:
        "Post updates, answer questions, and engage — all in one place with built-in community forums.",
      emoji: "💬",
    },
    {
      title: "Smarter Networking",
      description:
        "QR codes = instant connections. Bring digital networking to life and boost your event's value.",
      emoji: "📱",
    },
    {
      title: "Designed for Gen Z (and the rest of us)",
      description:
        "Fast, social, and purpose-driven — we meet your audience where they are.",
      emoji: "👥",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="swirls opacity-25">
            <img src={whiteswirls}></img>
          </div>
        </div>

        <div className="relative px-6 py-32 sm:py-40 lg:py-48 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">
              Event Management Reimagined
            </span>
            <span className="block text-indigo-200 mt-2">
              For Modern Organisers
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
            A streamlined web app that cuts costs, centralizes event management,
            and connects organisers with attendees in a way that resonates with
            today's audience.
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

      {/* Problem Statement Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Problem Statement
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Organising events shouldn't be this hard...
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Organising professional events is costly, time-consuming, and
              scattered across too many platforms, making it inefficient and
              inaccessible for modern organisers.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
                        <span className="text-2xl">{problem.emoji}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {problem.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {problem.description}
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

      {/* Solutions Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Solutions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Event Management, Rebuilt for You 🚀
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We've tackled the biggest headaches for organisers — and turned
              them into power moves:
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
              {solutions.map((solution, index) => (
                <div key={index} className="relative">
                  <div className="absolute h-24 w-24 rounded-md bg-blue-100 flex items-center justify-center">
                    <span className="text-4xl">{solution.emoji}</span>
                  </div>
                  <div className="ml-32 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Section */}
            <div className="mt-12 text-center">
              <div className="bg-indigo-50 rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">
                  💥 Bonus:
                </h3>
                <p className="text-lg text-gray-700">
                  No more juggling platforms, disjointed comms, or clunky manual
                  tasks. We've streamlined it all — so you can focus on what
                  matters: your event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">
                    Ready to simplify your event management?
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Get on the waitlist and be the first to know when we go live!
                </p>
                <a
                  href="/signup"
                  className="mt-8 bg-indigo-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-indigo-700"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 flex items-center justify-center">
                <div
                  className="bg-blue-500 flex items-center justify-center rounded-full"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={keepMore}
                    alt="Keep more of your revenue"
                    className="w-3/5 h-3/5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}