import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Organisers from "./components/Organisers";
import Contact from "./components/tier2Pages/contact";
import ContactNew from "./components/tier2Pages/ContactNew";
import Footer from "./components/Footer";
import Faqs from "./components/tier2Pages/FAQs";
import AboutUs from "./components/tier2Pages/AboutUs";
import WhatsNew from "./components/tier2Pages/WhatsNew";
import Error404 from "./errors/Error404";
import Users from "./components/Users";
import LandingPageBefore from "./components/MainPage";
import PrivacyPolicy from "./components/Tier3Pages/PrivacyPolicy"; // Import the PrivacyPolicy component
import TermsOfService from "./components/Tier3Pages/TermsOfService"; // Import the TermsOfService component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-new" element={<ContactNew />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
        <Route path="/LandingPage" element={<LandingPageBefore />} />
        <Route path="/organisers" element={<Organisers />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />{" "}
        <Route path="/TermsOfService" element={<TermsOfService />} />{" "}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
