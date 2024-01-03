import React from 'react';
import Header4 from '../components/Header4';
import Footer from '../components/Footer';
import '../styles/HirePage.css';
import HireMain from '../components/HireMain';
//import './App.css';

function HirePage() {
  return (
    <div className="Hire">
      <Header4 />
      <HireMain />
      <Footer />
    </div>
  );
}

export default HirePage;