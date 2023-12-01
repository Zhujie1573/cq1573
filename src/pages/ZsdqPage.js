import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Zsdq from '../Inroduction/Zsdq';
//import './App.css';

function ZsdqPage() {
  return (
    <div className="Home">
      <Header2 />
      <Zsdq />
      <Footer />
    </div>
  );
}

export default ZsdqPage;