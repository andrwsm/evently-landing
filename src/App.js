import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Contact from "./components/tier2Pages/contact";
import Footer from "./components/Footer";
import Faqs from "./components/tier2Pages/FAQs";
import AboutUs from "./components/tier2Pages/AboutUs";
import WhatsNew from "./components/tier2Pages/WhatsNew";
import Error404 from "./errors/Error404";
import LandingPageBefore from "./components/MainPage";
import PrivacyPolicy from "./components/Tier3Pages/PrivacyPolicy"; // Import the PrivacyPolicy component
import TermsOfService from "./components/Tier3Pages/TermsOfService"; // Import the TermsOfService component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
        <Route path="/LandingPage" element={<LandingPageBefore />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> {/* Add the PrivacyPolicy route */}
        <Route path="/TermsOfService" element={<TermsOfService />} /> {/* Add the TermsOfService route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
