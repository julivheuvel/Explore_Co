import './App.css';
import React from 'react';
import { Router } from '@reach/router';

// web-layout-components
import NavBar from './web-layout-components/NavBar';

// components
import Index from './components/Index';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      
      

      <NavBar />
      <Router>
        <Index path="/" />
        <About path="/about-us" />
        <Services path="/services" />
        <Contact path="/contact-us" />
        <Login path="/login" />
        <Register path="/register" />

      </Router>
    </div>
  );
}

export default App;
