import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Organisers from "./components/Organisers";
import ContactNew from "./components/tier2Pages/ContactNew";
import Footer from "./components/Footer";
import Error404 from "./errors/Error404";
import Users from "./components/Users";
import LandingPageBefore from "./components/MainPage";
import PrivacyPolicy from "./components/Tier3Pages/PrivacyPolicy";
import TermsOfService from "./components/Tier3Pages/TermsOfService";
import SignUpPage from "./components/tier2Pages/SignUpPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-new" element={<ContactNew />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/LandingPage" element={<LandingPageBefore />} />
        <Route path="/organisers" element={<Organisers />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
