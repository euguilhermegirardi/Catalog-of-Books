import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="home">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};


