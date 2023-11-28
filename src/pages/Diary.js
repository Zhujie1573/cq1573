import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/PostList';
//import './App.css';
function Diary() {
  return (
    <div className="Diary">
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default Diary;