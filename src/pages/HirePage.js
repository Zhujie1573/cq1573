import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import HireMain from '../components/HireMain';
//import './App.css';

function HirePage() {
  return (
    <div className="Home">
      <Header />
      <HireMain />
      <Footer />
    </div>
  );
}

export default HirePage;