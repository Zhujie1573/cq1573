import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Trdc from '../components/Trdc';
//import './App.css';

function TrdcPage() {
  return (
    <div className="Home">
      <Header2 />
      <Trdc />
      <Footer />
    </div>
  );
}

export default TrdcPage;