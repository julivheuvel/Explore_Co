import './App.css';
import React from 'react';
import { Router } from '@reach/router';

// components
import Index from './components/Index';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Questionaire from './components/Questionaire';


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Index path="/" />
        <About path="/about-us" />
        <Services path="/services" />
        <Contact path="/contact-us" />
        <Login path="/login" />
        <Register path="/register" />
        <Questionaire path="/questionaire" />

      </Router>
    </div>
  );
}

export default App;
