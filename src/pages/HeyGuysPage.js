import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Hg from '../Inroduction/Hg';
//import './App.css';

function HgPage() {
  return (
    <div className="Home">
      <Header2 />
      <Hg />
      <Footer />
    </div>
  );
}

export default HgPage;