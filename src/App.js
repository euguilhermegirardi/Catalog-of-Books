import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './styles/global';
import Navbar from './components/navbar';
import Routes from './routes';
import Footer from './components/footer';


export default function App() {
  return (
    <Router history={history}>
        <GlobalStyle />
        <Navbar/>
        <Routes/>
        <Footer />
    </Router>
  );
};


