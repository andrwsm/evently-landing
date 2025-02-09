import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './components/MainPage';
import SignUp from './components/SignUp';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <LandingPage />
    <SignUp />
  </React.StrictMode>
);


