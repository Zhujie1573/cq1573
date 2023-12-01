import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/DaquPage.css';
import Daqu from '../components/Daqu';
//import './App.css';

function DaquPage() {
  return (
    <div className="DaquHome">
      <Header2 />
      <Daqu />
      <Footer />
    </div>
  );
}

export default DaquPage;