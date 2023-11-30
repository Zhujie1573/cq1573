import React from 'react';
import Header5 from '../components/Header5';
import ContactMain from '../components/ContactMain';
import Footer from '../components/Footer';
import '../styles/Home.css';
//import './App.css';

function ContactUsMain() {
  return (
    <div className="Home">
      <Header5 />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default ContactUsMain;