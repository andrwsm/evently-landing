"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ui from "../assets/eventlyLogos/ui.png";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CurrencyDollarIcon,
  TicketIcon,
  UserCircleIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import EventlyIcon from "../assets/eventlyLogos/EventlyIcon.png";
import blueswirtls from "../assets/eventlyLogos/blueswirls.png";
import whiteswirls from "../assets/eventlyLogos/whiteswirls.png";

import FAQ from "../assets/images/FAQ.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const primaryFeatures = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
      icon: ServerIcon,
    },
  ];
  const secondaryFeatures = [
    {
      name: "Low fees",
      description:
        "Sell your tickets without huge fees driving up prices. You keep all of what you earn from your events. The only fee is from out payment processor, Stripe.",
      details:
        "With our platform, you can sell your event tickets without worrying about any additional charges. Unlike other ticketing services that take a percentage of your sales, we ensure that you keep 100% of what you earn. The only cost involved is the standard processing fee from our trusted payment partner, Stripe. This means you get full control over your revenue, allowing you to maximize your event profits without hidden costs or service fees. Whether you're organizing a concert, conference, or community gathering, our straightforward pricing model ensures that every dollar you make goes directly to you.",
      icon: CurrencyDollarIcon,
    },
    {
      name: "Easy to use",
      description:
        "Our platform is designed to be easy to use and easy to understand. No need to be a tech wizard.",
      details:
        "Our platform is built with simplicity in mind, making it easy for anyone to create, manage, and sell tickets for their events—no technical expertise required. With an intuitive interface and straightforward navigation, you can set up your event in just a few clicks. Whether you're a first-time organizer or a seasoned event planner, our user-friendly tools ensure a hassle-free experience. You won’t need to worry about complicated setups or confusing options—just focus on making your event a success while we handle the rest.",
      icon: TicketIcon,
    },
    {
      name: "Client first",
      description:
        "You are our priority. We will always be here to help you with any issues you may have.",
      details:
        "Your success is our top priority. We’re committed to providing exceptional support whenever you need it. Whether you have questions, need assistance setting up your event, or encounter any issues along the way, our dedicated team is here to help. With responsive customer service and helpful resources, we ensure you’re never left figuring things out on your own. No matter the challenge, we’ve got your back—because your experience matters to us.",
      icon: UserCircleIcon,
    },
  ];
  const featuredTestimonial = {
    body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
    author: {
      name: "Brenna Goyette",
      handle: "brennagoyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      logoUrl:
        "https://tailwindui.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
    },
  };
  const testimonials = [
    [
      [
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
          author: {
            name: "Lindsay Walton",
            handle: "lindsaywalton",
            imageUrl:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
          author: {
            name: "Tom Cook",
            handle: "tomcook",
            imageUrl:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
          author: {
            name: "Leonard Krasner",
            handle: "leonardkrasner",
            imageUrl:
              "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        // More testimonials...
      ],
    ],
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
      question: "What are the fees for selling using Evently?",
      answer: (
        <>
          We don't charge any fees for selling tickets. You keep all of what you
          earn from your events. Although there is a 1.5% + 20p processing
          payment for
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
        "You can collect feedback from attendees by sending out a survey after the event. You can also use the Evently platform to collect feedback from attendees. This is done upon your request.",
    },
    {
      question: "What tools are available for promoting my event?",
      answer:
        "There are many ways we can help you promote your event. We can help you create a marketing plan, and create a social media strategy. We can also promote your event within our platform.",
    },
    {
      question: "Can I offer discounts and promo codes?",
      answer:
        "Yes. You can generate discount code for your event, for both percentage and fixed amount discounts. You can also set the number of times a code can be used, and the date range for which it is valid.",
    },
    {
      question: "What types of events can I host on Evently?",
      answer:
        "We support a range of events, however the majorty of events are corporate events, networking events, and conferences. We also support webinars, workshops, and training sessions.",
    },
    {
      question: "Can I print attendee badges?",
      answer:
        "Yes. You can print attendee badges using the Evently platform. You can also print out a list of attendees, and their contact details.",
    },
    {
      question: "Can I customize the event page?",
      answer:
        "Yes. You can customize the event page to match your brand. You can add your logo, change the colors, and add images and videos.",
    },
    {
      question: "Can I host recurring events?",
      answer:
        "Yes. You can host recurring events on Evently. You can set the frequency of the event, and the number of times it will repeat.",
    },
    {
      question: "Are there any set up fees?",
      answer:
        "No. There are no set up fees for using Evently. You can create an account and start selling tickets for your event for free.",
    },
    // More questions...
  ];

  const features = [
    {
      name: "Event Creation",
      description:
        "Easily create and manage events with a few clicks. Add event details, set categories, and share with your audience instantly",
    },
    {
      name: "Promotion & Engagement",
      description:
        "Boost visibility with built-in promotion tools, including email notifications, social sharing, and direct updates to attendees.",
    },
    {
      name: "Networking & Business Cards",
      description:
        "Connect with attendees and organisers through digital business cards, making professional networking effortless and efficient.",
    },
    {
      name: "Analytics & Insights",
      description:
        "Track attendance, engagement, and RSVPs with real-time data to optimise your event strategy and maximise reach.",
    },
    {
      name: "Affordable Pricing",
      description:
        "Enjoy a cost-effective event management solution without hidden fees, making it easier to grow your events without breaking the bank.",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white relative" id="home">
      <main>
        {/* Hero section */}
        <div className="relative isolate pt-12">
          <div className="swirls">
            <img src={blueswirtls} className="opacity-20 -z-10 absolute"></img>
          </div>
          {/* Background icons */}
          {/* <div className="absolute inset-0 -z-10">
            <img
              src={EventlyIcon}
              className="absolute w-10 h-10"
              style={{
                top: "15%",
                left: "15%",
                transform: "rotate(15deg)",
              }}
            />
            <img
              src={EventlyIcon}
              className="absolute w-10 h-10"
              style={{
                top: "30%",
                left: "70%",
                transform: "rotate(-30deg)",
              }}
            />
            <img
              src={EventlyIcon}
              className="absolute w-10 h-10"
              style={{
                top: "50%",
                left: "55%",
                transform: "rotate(45deg)",
              }}
            />
            <img
              src={EventlyIcon}
              className="absolute w-10 h-10"
              style={{
                top: "70%",
                left: "20%",
                transform: "rotate(-60deg)",
              }}
            />
            <img
              src={EventlyIcon}
              className="absolute w-10 h-10"
              style={{
                top: "8%",
                left: "80%",
                transform: "rotate(-140deg)",
              }}
            />
          </div> */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-200">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-semibold text-dark-sky">
                    We’re changing things
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-px bg-gray-900/10"
                  />
                  <a
                    href="#features"
                    className="flex items-center gap-x-1 scroll-smooth"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    See what we do differently
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 size-5 text-gray-400"
                    />
                  </a>
                </div>
              </div>
              {/* className={`text-4xl md:text-6xl font-bold transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} */}

              <h1
                className={`mt-10 text-5xl md:text-6xl font-bold text-gray-900 sm:text-7xl transition-opacity duration-[1500ms] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Where events <span className="font-semibold">come to life</span>
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Join us to elevate your Gen Z corporate and networking events to
                the next level. Connect, collaborate, and create unforgettable
                experiences.
              </p>
            </div>
            <img alt="" src={ui} className="h-[90vh]" />
          </div>

          <div className="swirls">
            <img src={blueswirtls} className="flip-x"></img>
          </div>
        </div>

        {/* first feature section */}
        <div
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
          id="features"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-dark-sky">
              Sell and promote your events with ease
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to sell tickets to your events
            </p>
            <p className="mt-6 text-lg/8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="size-11 flex-none text-dark-sky"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <div className="relative">
                      <Disclosure as="div" className="mt-6">
                        {({ open }) => (
                          <>
                            <DisclosureButton className="text-sm/10 font-semibold text-dark-sky top-0">
                              Learn more <span aria-hidden="true">↓</span>
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-sm text-gray-500 absolute top-full left-0 w-full">
                              {feature.details}
                            </DisclosurePanel>
                            {
                              <img
                                src={EventlyIcon}
                                alt="Evently Icon"
                                className="mt-4 w-10 h-10"
                              />
                            }
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div
          className="mx-auto mt-64 max-w-7xl sm:mt-96 sm:px-6 lg:px-8"
          id="features"
        >
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Boost your productivity. Start using our app today.
                </h2>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla. Ac
                  euismod vel sit maecenas.
                </p>
              </div>
              <img
                alt="Product screenshot"
                src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 size-5 text-dark-sky"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-dark-sky to-midnight-sky opacity-25"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8
          gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
              <div className="col-span-2">
                <h2
                  className="text-base/7 font-semibold
            text-dark-sky"
                >
                  Everything you need
                </h2>
                <p
                  className="mt-2 text-pretty text-4xl font-semibold
              tracking-tight text-gray-900 sm:text-5xl"
                >
                  All-in-one platform
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
              <dl
                className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10
            text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-semibold text-gray-900">
                      <CheckIcon
                        aria-hidden="true"
                        className="absolute
                  left-0 top-1 size-5 text-dark-sky"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Get notified when we’re launching
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
              Be the first to know when we launch our new product.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onSubmit={console.log("Submitted")}
              >
                Notify me
              </button>
            </form>
            <p className="text-center text-stone-50 text-sm mt-5">
              By clicking the the button, you agree to our{" "}
              <a
                href="/privacypolicy"
                className="hover:text-link-color cursor-pointer text-blue-600"
              >
                privacy policy
              </a>
            </p>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
      </main>

      {/* FAQs sectiom */}
      <div className="bg-white flex justify-around row" id="faq">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 flex flex-col lg:flex-row">
          <div className="flex-1 mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-[&:not([data-open])]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
          <div className="flex-1 mt-32">
            <img
              src={FAQ}
              className="w-full lg:w-auto h-auto mb-8 lg:mb-0 lg:mr-8"
              alt="FAQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
