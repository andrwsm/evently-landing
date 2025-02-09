import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/MainPage';
import SignUp from './components/SignUp';
import Contact from './components/tier2Pages/contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SignUp />
    </>
  );
}

export default App;