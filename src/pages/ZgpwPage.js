import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Zgpw from '../Inroduction/Zgpw';
//import './App.css';

function ZgpwPage() {
  return (
    <div className="Home">
      <Header2 />
      <Zgpw />
      <Footer />
    </div>
  );
}

export default ZgpwPage;