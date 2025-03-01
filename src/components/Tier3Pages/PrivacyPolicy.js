"use client";

import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Your privacy is important to us. This privacy policy explains what
          personal data we collect from you and how we use it.
        </p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          <p className="mt-4 text-base text-gray-600">
            We collect information to provide better services to our users. We
            collect information in the following ways:
          </p>
          <ul className="mt-4 list-disc list-inside text-base text-gray-600">
            <li>Information you give us.</li>
            <li>Information we get from your use of our services.</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">How We Use Information</h2>
          <p className="mt-4 text-base text-gray-600">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="mt-4 list-disc list-inside text-base text-gray-600">
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Sharing Information</h2>
          <p className="mt-4 text-base text-gray-600">
            We do not share your personal information with companies,
            organizations, or individuals outside of our company except in the
            following cases:
          </p>
          <ul className="mt-4 list-disc list-inside text-base text-gray-600">
            <li>With your consent.</li>
            <li>For external processing.</li>
            <li>For legal reasons.</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
          <p className="mt-4 text-base text-gray-600">
            You have the right to access, update, or delete the information we
            have on you. If you wish to exercise any of these rights, please
            contact us.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">Changes to This Privacy Policy</h2>
          <p className="mt-4 text-base text-gray-600">
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
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
