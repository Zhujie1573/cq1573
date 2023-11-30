import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../styles/Home.css';
import ProductMain from '../components/ProductMain';
//import './App.css';

function ProductPage() {
  return (
    <div className="Home">
      <Header2 />
      <ProductMain />
      <Footer />
    </div>
  );
}

export default ProductPage;