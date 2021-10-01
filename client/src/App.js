import React from 'react';
import { Router } from '@reach/router';

// CSS
import './css/About.css';
import './css/Contact.css';
import './css/Index.css';
import './css/Login.css';
import './css/NavBar.css';
import './css/Questionaire.css';
import './css/Register.css';
import './css/Services.css';

// components
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import Login from './components/Login';
import Questionaire from './components/Questionaire';
import Register from './components/Register';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <About path="/about-us" />
        <Contact path="/contact-us" />
        <Index path="/" />
        <Login path="/login" />
        <Questionaire path="/questionaire" />
        <Register path="/register" />
        <Services path="/services" />

      </Router>
    </div>
  );
}

export default App;
