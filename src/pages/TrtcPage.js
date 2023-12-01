import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Trtc from '../components/Trtc';
//import './App.css';

function TrtcPage() {
  return (
    <div className="Home">
      <Header2 />
      <Trtc />
      <Footer />
    </div>
  );
}

export default TrtcPage;