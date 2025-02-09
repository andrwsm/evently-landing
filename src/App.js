import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/MainPage';
import SignUp from './components/SignUp';
import Contact from './components/tier2Pages/contact';
import Footer from './components/Footer';
import Faqs from './components/tier2Pages/FAQs';
import AboutUs from './components/tier2Pages/AboutUs';
import WhatsNew from './components/tier2Pages/WhatsNew';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/WhatsNew" element={<WhatsNew />} />
      </Routes>
      {/* <SignUp /> */}
      <Footer />
    </>
  );
}

export default App;