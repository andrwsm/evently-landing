import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CustomIcons from "../../assets/icons";

import dwightimg from "../../assets/photos/dwight.jpg";
import Kyle from "../../assets/photos/Kyle.jpg";
import Will from "../../assets/photos/Will.jpg";
import Finlay from "../../assets/photos/Finlay.jpg";
import Target from "../../assets/TargetIcon.png";
import World from "../../assets/WorldIcon.png";
import ShakingHands from "../../assets/images/shaking-hands.jpg";

const values = [
  {
    name: "Empowerment",
    description:
      "We equip organisers with powerful tools to create and grow their events while giving users the best experience in discovering and attending them.",
  },
  {
    name: "Community",
    description:
      "We believe in fostering strong connections between organisers and attendees, creating a space where meaningful interactions thrive.",
  },
  {
    name: "Innovation",
    description:
      "We are always evolving, integrating new technologies to make event planning, promotion, and discovery effortless and engaging.",
  },
  {
    name: "Accessibility",
    description:
      "Our platform is designed to be user-friendly and inclusive, ensuring that both organisers and attendees can easily connect and engage.",
  },
  {
    name: "Reliability",
    description:
      "We are committed to providing a seamless and trustworthy experience, ensuring events run smoothly and connections are meaningful.",
  },
  {
    name: "Growth",
    description:
      "We support organisers in expanding their reach and users in discovering new experiences, fostering both personal and professional growth.",
  },
];
const people = [
  {
    name: "Kyle Tracey",
    role: "Founder / CEO",
    imageUrl: Kyle,
    bio: "As the founder of the app, he is passionate about creating a platform that empowers organizers and enhances event experiences. He is dedicated to learning, growing, and building solutions that truly meet the needs of users.",
  },
  {
    name: "Will Jones",
    role: "CTO",
    imageUrl: Will,
    bio: "Managing the technical aspects of Evently's delivery, our CTO works to build our platforms and create forward thinking solutions for event promotion and management. Will is strongly driven to create value for our users, keeping costs low and providing a top-tier user experience.",
  },
  {
    name: "Finlay Thornell",
    role: "Chief Marketing Office",
    imageUrl: Finlay,
    bio: "As Evently’s CMO, he is focused on brand development and marketing strategy, driving visibility and engagement. His goal is to help bridge the gap between apprentices and young professionals by creating impactful networking opportunities.",
  },
  {
    name: "Andrew Smith",
    role: "Software Engineer",
    imageUrl: dwightimg,
    bio: "As a software engineer on the team, he is passionate about building innovative solutions that enhance event experiences and empower organisers. He thrives on problem-solving, continuous learning, and crafting solutions that empower organizers while enhancing user experiences.",
  },
  // More people...
];
const blogPosts = [
  {
    id: 1,
    title: "Evently is here",
    href: "#",
    description:
      "We are excited to announce the start of Evently, a new platform for event organizers to sell tickets without fees.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Feb 9, 2025",
    datetime: "2025-02-09",
    author: {
      name: "Andrew Smith",
      imageUrl: "",
    },
  },
  // More posts...
];
const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
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
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white z-10" id="aboutUs">
      <main className="isolate pb-20">
        {" "}
        {/* Add padding-bottom to create space */}
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[50rem] w-full stroke-gray-300 [mask-image:radial-gradient(50rem_24rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-10}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#33479d] to-[#2a2874] opacity-20"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-1 pt-0 sm:pt-0 lg:px-60 lg:pt-0">
              <div className="flex justify-center ">
                <div className="text-center">
                  <h1 className="text-pretty text-lg font-semibold tracking-tight text-black sm:text-lg mt-20">
                    Changing the way people connect
                  </h1>
                  <h2 className="mt-8 text-pretty text-xl font-semibold tracking-tight text-midnight-sky sm:text-6xl">
                    About us
                  </h2>
                  <p className="mt-8 text-pretty text-lg font-medium text-black sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    We are passionate apprentices who launched our platform in
                    2024 to revolutionise event connections. Unlike costly
                    alternatives, we offer an affordable, seamless solution for
                    organisers and attendees. Our goal is to make event
                    creation, discovery, and engagement effortless and
                    budget-friendly.
                  </p>
                  <p className="mt-8 text-pretty text-lg font-medium text-black sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    We value community, innovation, and accessibility. As
                    apprentices, we connect organisers and attendees, making
                    events easier and more affordable. Our goal is to help ideas
                    thrive and create unforgettable experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-40" />
        {/* Content section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 sm:mt-4 lg:px-8 xl:-mt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none text-center">
            <div className="flex flex-col lg:flex-row lg:gap-x-8">
              <div className="lg:w-1/2">
                <div>
                  <img
                    src={Target}
                    alt="Target icon"
                    className="mx-auto size-24"
                  />
                  <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Our mission
                  </h2>
                </div>
                <p className="mt-6 text-xl/8 text-gray-600">
                  Our mission is to create a seamless and engaging event
                  experience for both organisers and attendees. We empower
                  organisers with the tools to plan, promote, and grow their
                  events while helping users discover and connect with
                  experiences that matter to them. Through innovation and
                  community-driven solutions, we bridge the gap between event
                  creators and their audience.
                </p>
              </div>
              <div className="lg:w-1/2 mt-16 lg:mt-0">
                <div>
                  <img
                    src={World}
                    alt="World icon"
                    className="mx-auto size-24"
                  />
                  <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Our vision
                  </h2>
                </div>
                <p className="mt-6 text-xl/8 text-gray-600">
                  We envision a world where event organisers and attendees are
                  seamlessly connected, making every event an opportunity to
                  engage, network, and create lasting memories. By building a
                  platform that supports both creators and participants, we aim
                  to cultivate vibrant communities, fuel meaningful connections,
                  and make event discovery and management easier than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src={ShakingHands}
            className="aspect-[10/5] w-full object-cover xl:rounded-3xl"
          />
        </div>
        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our values
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our values are the guiding principles that shape our culture and
              define who we are as a company. They guide our decisions, actions,
              and interactions, ensuring we stay true to our mission and create
              a positive impact on the world.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Team section */}
        <div className="bg-white py-24 md:py-32 lg:py-40">
          <div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6
lg:px-8 xl:grid-cols-3"
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                className="text-pretty text-4xl font-semibold
        tracking-tight text-gray-900 sm:text-5xl"
              >
                Our team
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6
gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8
xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                  <h3
                    className="mt-6 text-lg/8 font-semibold
text-gray-900"
                  >
                    {person.name}
                  </h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a
                        href={person.xUrl}
                        className="text-gray-400
hover:text-gray-500"
                      >
                        <span className="sr-only">X</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            d="M11.4678 8.77491L17.2961
2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039
18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675
8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925
3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156
17.0075H13.7942L9.57608 10.9742V10.9738Z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            d="M16.338
16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601
1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675
1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005
6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337
9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1
2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582
1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Blog section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 size-0.5 flex-none fill-white/50 "
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="size-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
