import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/GuojiaoPage.css';
import Guojiao from '../components/Guojiao';
//import './App.css';

function GuojiaoPage() {
  return (
    <div className="GJHome">
      <Header2 />
      <Guojiao />
      <Footer />
    </div>
  );
}

export default GuojiaoPage;