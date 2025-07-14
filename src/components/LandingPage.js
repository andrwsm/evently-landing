"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ui from "../assets/eventlyLogos/ui.png";
import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import EventlyIcon from "../assets/eventlyLogos/EventlyIcon.png";
import blueswirtls from "../assets/eventlyLogos/blueswirls.png";
import whiteswirls from "../assets/eventlyLogos/whiteswirls.png";

import Kyle from "../assets/photos/Kyle.jpg";
import Will from "../assets/photos/Will.jpg";
import dwightimg from "../assets/photos/dwight.jpg";
import Finlay from "../assets/photos/Finlay.jpg";

import FAQ from "../assets/images/FAQ.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const people = [
  {
    name: "Kyle Tracey",
    role: "Founder / CEO",
    imageUrl: Kyle,
    bio: "As the founder of the app, he is passionate about creating a platform that empowers organisers and enhances event experiences. He is dedicated to learning, growing, and building solutions that truly meet the needs of users.",
  },
  {
    name: "Will Jones",
    role: "Chief Technology Officer",
    imageUrl: Will,
    bio: "Managing the technical aspects of Eventli's delivery, our CTO works to build our platforms and create forward thinking solutions for event promotion and management. Will is strongly driven to create value for our users, keeping costs low and providing a top-tier user experience.",
  },
  {
    name: "Finlay Thornell",
    role: "Chief Marketing Office",
    imageUrl: Finlay,
    bio: "As Eventli’s CMO, he is focused on brand development and marketing strategy, driving visibility and engagement. His goal is to help bridge the gap between apprentices and young professionals by creating impactful networking opportunities.",
  },
  {
    name: "Andrew Smith",
    role: "Lead Software Engineer",
    imageUrl: dwightimg,
    bio: "As a software engineer on the team, he is passionate about building innovative solutions that enhance event experiences and empower organisers. He thrives on problem-solving, continuous learning, and crafting solutions that empower organisers while enhancing user experiences.",
  },
  // More people...
];

const values = [
  {
    name: "Empowerment",
    description:
      "We give organisers the tools to build unforgettable events — and users the power to discover them with ease.",
    emoji: "💪",
  },
  {
    name: "Community",
    description:
      "It's all about real connections. We're here to spark meaningful moments between organisers and attendees.",
    emoji: "🤝",
  },
  {
    name: "Innovation",
    description:
      "Always evolving. Smarter tech, smoother planning, better experiences — that's how we do it.",
    emoji: "🚀",
  },
  {
    name: "Accessibility",
    description:
      "Everyone's invited. Our platform is built to be intuitive, inclusive, and open for all.",
    emoji: "🌍",
  },
  {
    name: "Reliability",
    description:
      "No surprises. Just a smooth, secure experience that works every time.",
    emoji: "🔒",
  },
  {
    name: "Growth",
    description:
      "We champion your next step — whether it's growing your event, your reach, or yourself.",
    emoji: "📈",
  },
];

export default function LandingPage() {
  const secondaryFeatures = [
    {
      name: "Low fees",
      description:
        "Sell your tickets without huge fees driving up prices. You keep all of what you earn from your events. The only fee is from out payment processor, Stripe.",
      details:
        "With our platform, you can sell your event tickets without worrying about any additional charges. Unlike other ticketing services that take a percentage of your sales, we ensure that you keep 100% of what you earn. The only cost involved is the standard processing fee from our trusted payment partner, Stripe. This means you get full control over your revenue, allowing you to maximise your event profits without hidden costs or service fees. Whether you're organising a concert, conference, or community gathering, our straightforward pricing model ensures that every pound you make goes directly to you.",
      // icon: CurrencyDollarIcon,
    },
    {
      name: "Easy to use",
      description:
        "Our platform is designed to be easy to use and easy to understand. No need to be a tech wizard.",
      details:
        "Our platform is built with simplicity in mind, making it easy for anyone to create, manage, and sell tickets for their events—no technical expertise required. With an intuitive interface and straightforward navigation, you can set up your event in just a few clicks. Whether you're a first-time organiser or a seasoned event planner, our user-friendly tools ensure a hassle-free experience. You won't need to worry about complicated setups or confusing options—just focus on making your event a success while we handle the rest.",
      // icon: TicketIcon,
    },
    {
      name: "Client first",
      description:
        "You are our priority. We will always be here to help you with any issues you may have.",
      details:
        "Your success is our top priority. We're committed to providing exceptional support whenever you need it. Whether you have questions, need assistance setting up your event, or encounter any issues along the way, our dedicated team is here to help. With responsive customer service and helpful resources, we ensure you're never left figuring things out on your own. No matter the challenge, we've got your back—because your experience matters to us.",
      // icon: UserCircleIcon,
    },
  ];

  const footerNavigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Automation", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Submit ticket", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
    ],
    legal: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "License", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "X",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "YouTube",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };
  const faqs = [
    {
      question: "What are the fees for selling using Eventli?",
      answer: (
        <>
          Organisers will pay a flat base rate based on ticket volumes. The
          platform takes a 3% fee per ticket sold to cover the cost of running
          the platform. The Stripe processing fee is 1.5% plus 20p per
          transaction for UK cards. For international cards, the fee is 2.9%
          plus 20p per transaction. This means that for a ticket priced at £10,
          the total fees would be approximately £0.50 for UK cards and £0.70 for
          international cards.
          <a
            href="https://support.stripe.com/questions/what-s-the-difference-between-standard-and-premium-cards"
            className="text-blue-600 underline"
            target="_blank"
          >
            {" "}
            standard UK cards
          </a>{" "}
          which is charged by Stripe.
        </>
      ),
    },
    {
      question: "How do I collect feedback from attendees?",
      answer:
        "You can collect feedback from attendees by sending out a survey after the event. You can also use the Eventli platform to collect feedback from attendees. This is done upon your request.",
    },
    {
      question: "What tools are available for promoting my event?",
      answer:
        "We offer a range of tools to help promote your event. Advertising and premium placement options are available starting from £5 per day or £85 per month, tailored to meet the needs of organisers of all sizes.",
    },
    {
      question: "Can I offer discounts and promo codes?",
      answer:
        "Yes. You can generate discount code for your event, for both percentage and fixed amount discounts. You can also set the number of times a code can be used, and the date range for which it is valid.",
    },
    {
      question: "What types of events can I host on Eventli?",
      answer:
        "We support a range of events, however the majorty of events are corporate events, networking events, and conferences. We also support webinars, workshops, and training sessions.",
    },
    {
      question: "Can I print attendee badges?",
      answer:
        "Yes. You can print attendee badges using the Eventli platform. You can also print out a list of attendees, and their contact details.",
    },
    {
      question: "How do I communicate with attendees?",
      answer:
        "Building a community is at the heart of Eventli. You can communicate with attendees through our platform, which allows you to send messages, updates, and notifications. You can also use our email marketing tools to reach out to your attendees before, during, and after the event.",
    },
    {
      question: "Can I host recurring events?",
      answer:
        "Yes. You can host recurring events on Eventli. You can set the frequency of the event, and the number of times it will repeat.",
    },
    {
      question: "Are there any set up fees?",
      answer:
        "No. There are no set up fees for using Eventli. You can create an account and start selling tickets for your event for free.",
    },
    // More questions...
  ];

  const features = [
    {
      name: "Create Events in Minutes",
      description:
        "Build your event, set the vibe, share instantly. Zero fuss.",
      emoji: "✨",
    },
    {
      name: "Promotion That Pops",
      description:
        "Boost reach with built-in email alerts, social sharing, and live updates.",
      emoji: "📣",
    },
    {
      name: "Smarter Networking",
      description:
        "Connect instantly with digital business cards — no awkward small talk required.",
      emoji: "🤝",
    },
    {
      name: "Real-Time Insights",
      description: "Track RSVPs, engagement & more to level up your next move.",
      emoji: "📊",
    },
    {
      name: "Affordable, Always",
      description: "Powerful tools, no hidden fees. More impact, less spend.",
      emoji: "💸",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white relative" id="home">
      <main>
        {/* Hero section - Updated with gradient background */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden pt-12">
          <div className="absolute inset-0">
            {/* Decorative circles from Organisers page */}
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
            <div className="swirls opacity-25">
              <img src={whiteswirls}></img>
            </div>

            {/* Keep swirls with adjusted opacity */}
            <img
              src={blueswirtls}
              className="absolute w-full h-full object-cover opacity-10 mix-blend-overlay"
              alt=""
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm/6 text-white ring-1 ring-white/20 hover:ring-white/40">
                  <span className="font-semibold text-white">
                    We're changing things
                  </span>
                  <span aria-hidden="true" className="h-4 w-px bg-white/20" />
                  <a
                    href="#features"
                    className="flex items-center gap-x-1 scroll-smooth text-white"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    See what we do differently
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 size-5 text-white/70"
                    />
                  </a>
                </div>
              </div>
              <h1
                className={`mt-10 text-5xl md:text-6xl font-bold text-white sm:text-7xl transition-opacity duration-[1500ms] 
                `}
              >
                Where events <span className="font-light">come to life</span>
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-indigo-100 sm:text-xl/8">
                Join us to elevate your corporate and networking events to the
                next level. Connect, collaborate, and create unforgettable
                experiences.
              </p>

              {/* Add CTA buttons similar to Organisers page */}
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:gap-5">
                <a
                  href="/signup"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                >
                  Sign Up
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 mt-4 sm:mt-0"
                >
                  Learn More
                </a>
              </div>
            </div>
            <img
              alt=""
              src={ui}
              className="relative mt-16 lg:mt-0 h-auto w-full max-w-sm mx-auto lg:max-w-md xl:max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Feature section - Updated styling */}
        <div className="bg-white py-24 sm:py-32" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything You Need, All in One Place 🔥
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Your ultimate event HQ — create, manage, and grow your events
                with ease
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
                          {feature.emoji ? (
                            <span className="text-2xl">{feature.emoji}</span>
                          ) : (
                            feature.svg
                          )}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {feature.description}
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

        {/* Values section with swirls background */}
        <div className="relative bg-indigo-50 py-16 sm:py-24">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <img
              src={blueswirtls}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-16">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Our Core Values
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What guides us
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our values are the guiding principles that shape our culture and
                define who we are as a company.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.name}
                    className="bg-white overflow-hidden shadow rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
                        <span className="text-2xl">{value.emoji}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-indigo-600">
                          {value.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team section - Updated styling */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We're a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {people.map((person) => (
                <div key={person.name} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={person.imageUrl}
                      alt=""
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm text-indigo-600">{person.role}</p>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter section - Updated styling */}
        <div className="bg-[#2464b4]">
          <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
            <div className="relative isolate px-6 py-12 sm:px-16 sm:py-16 lg:px-24 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 -z-10 opacity-20">
                <img
                  src={blueswirtls}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>

              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get notified when we're launching
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
                  Be the first to know when we launch our new product.
                </p>
                <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md bg-white/10 px-4 py-3 text-white ring-1 ring-inset ring-white/20 placeholder:text-white/60 focus:ring-2 focus:ring-white sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-4 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-4 text-sm text-indigo-100">
                  By clicking the button, you agree to our{" "}
                  <a
                    href="/privacypolicy"
                    className="font-semibold text-white hover:text-indigo-200"
                  >
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs section - Updated styling */}
        <div className="bg-white py-24 sm:py-32" id="faq">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Can't find the answer you're looking for? Contact our
                  <a
                    href="/contact-new"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {" "}
                    customer support team
                  </a>
                  .
                </p>
                <div className="mt-12 hidden lg:block">
                  <img
                    src={FAQ}
                    className="w-full max-w-md rounded-lg shadow-lg"
                    alt="FAQ"
                  />
                </div>
              </div>
              <div className="mt-12 lg:col-span-7 lg:mt-0">
                <dl className="space-y-6 divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt>
                            <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon
                                    className="h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmallIcon
                                    className="h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer}
                            </p>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
                <div className="mt-10 block lg:hidden">
                  <img
                    src={FAQ}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                    alt="FAQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}