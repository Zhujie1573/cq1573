import React from 'react';
import Header3 from '../components/Header3';
import Footer from '../components/Footer';
import '../styles/DutyPage.css';
import Duty from '../components/Duty';
//import './App.css';

function DutyPage() {
  return (
    <div className="Duty">
      <Header3 />
      <Duty />
      <Footer />
    </div>
  );
}

export default DutyPage;