import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
