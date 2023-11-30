import React from 'react';
import Header3 from '../components/Header3';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Duty from '../components/Duty';
//import './App.css';

function DutyPage() {
  return (
    <div className="Home">
      <Header3 />
      <Duty />
      <Footer />
    </div>
  );
}

export default DutyPage;