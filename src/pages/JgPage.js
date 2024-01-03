import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Jg from '../components/Jg';
//import './App.css';

function JgPage() {
  return (
    <div className="Home">
      <Header2 />
      <Jg />
      <Footer />
    </div>
  );
}

export default JgPage;