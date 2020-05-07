import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
// import Profile from './components/MainContent/Profile/Profile';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="app-wraper">

      <Header />
      <Nav />
      <MainContent />
      <Footer />

    </div>
  );
}


export default App;
