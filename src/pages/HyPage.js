import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Hy from '../Inroduction/Hy';
//import './App.css';

function HyPage() {
  return (
    <div className="Home">
      <Header2 />
      <Hy />
      <Footer />
    </div>
  );
}

export default HyPage;