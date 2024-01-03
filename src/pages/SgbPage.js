import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Sgb from '../components/Sgb';
//import './App.css';

function SgbPage() {
  return (
    <div className="Home">
      <Header2 />
      <Sgb />
      <Footer />
    </div>
  );
}

export default SgbPage;