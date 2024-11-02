// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Ball from './components/Ball';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Background Balls */}
      <Ball />
      
      {/* Content Sections */}
      <div className="content">
      <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
