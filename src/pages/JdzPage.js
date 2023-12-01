import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Jdz from '../Inroduction/Jdz';
//import './App.css';

function JdzPage() {
  return (
    <div className="Home">
      <Header2 />
      <Jdz />
      <Footer />
    </div>
  );
}

export default JdzPage;