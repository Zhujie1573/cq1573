import React from 'react';
import Header4 from '../components/Header4';
import Footer from '../components/Footer';
import '../styles/Home.css';
import HireMain from '../components/HireMain';
//import './App.css';

function HirePage() {
  return (
    <div className="Home">
      <Header4 />
      <HireMain />
      <Footer />
    </div>
  );
}

export default HirePage;