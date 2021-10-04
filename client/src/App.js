import React from 'react';
import { Router } from '@reach/router';

// CSS
import './css/About.css';
import './css/Contact.css';
import "./css/Dashboard.css";
import './css/Index.css';
import './css/Login.css';
import './css/NavBar.css';
import './css/Questionaire.css';
import './css/Register.css';
import './css/Services.css';

// general components
import About from './general_components/About';
import Contact from './general_components/Contact';
import Index from './general_components/Index';
import Login from './general_components/Login';
import Questionaire from './general_components/Questionaire';
import Register from './general_components/Register';
import Services from './general_components/Services';

// members_only_components
import Dashboard from './members_only_components/Dashboard';

// activities_components


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <About path="/about-us" />
        <Contact path="/contact-us" />
        <Dashboard path="/dashboard" />
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
