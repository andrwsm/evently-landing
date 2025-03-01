"use client";

import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative">
      <main className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-dark-sky hover:text-midnight-sky"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          Back
        </button>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          These terms of service outline the rules and regulations for the use
          of our website.
        </p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
          <p className="mt-4 text-base text-gray-600">
            By accessing this website, we assume you accept these terms of
            service in full. Do not continue to use the website if you do not
            accept all of the terms of service stated on this page.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">License</h2>
          <p className="mt-4 text-base text-gray-600">
            Unless otherwise stated, we own the intellectual property rights
            for all material on the website. All intellectual property rights
            are reserved. You may view and/or print pages from the website for
            your own personal use subject to restrictions set in these terms of
            service.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">User Comments</h2>
          <p className="mt-4 text-base text-gray-600">
            Certain parts of this website offer the opportunity for users to
            post and exchange opinions, information, material, and data
            ('Comments'). We do not screen, edit, publish, or review Comments
            prior to their appearance on the website and Comments do not reflect
            our views or opinions.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Hyperlinking to our Content</h2>
          <p className="mt-4 text-base text-gray-600">
            The following organizations may link to our website without prior
            written approval:
          </p>
          <ul className="mt-4 list-disc list-inside text-base text-gray-600">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors;</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">iFrames</h2>
          <p className="mt-4 text-base text-gray-600">
            Without prior approval and express written permission, you may not
            create frames around our web pages or use other techniques that
            alter in any way the visual presentation or appearance of our
            website.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Content Liability</h2>
          <p className="mt-4 text-base text-gray-600">
            We shall have no responsibility or liability for any content
            appearing on your website. You agree to indemnify and defend us
            against all claims arising out of or based upon your website.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Reservation of Rights</h2>
          <p className="mt-4 text-base text-gray-600">
            We reserve the right at any time and in its sole discretion to
            request that you remove all links or any particular link to our
            website. You agree to immediately remove all links to our website
            upon such request.
          </p>
        </section>
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md bg-dark-sky px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-midnight-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
        </div>
      </main>
    </div>
  );
}
