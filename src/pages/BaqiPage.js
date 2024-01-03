import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Baqi from '../components/baqi';
//import './App.css';

function BaqiPage() {
  return (
    <div className="Home">
      <Header2 />
      <Baqi />
      <Footer />
    </div>
  );
}

export default BaqiPage;