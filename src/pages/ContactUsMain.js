import React from 'react';
import Header from '../components/Header';
import ContactMain from '../components/ContactMain';
import Footer from '../components/Footer';
import '../styles/Home.css';
//import './App.css';

function ContactUsMain() {
  return (
    <div className="Home">
      <Header />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default ContactUsMain;