import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import NavBar from './web-layout-components/NavBar';
import Index from './components/Index';


function App() {
  return (
    <div className="App">
      
      

      <NavBar />
      <Router>
        <Index path="/" />

      </Router>
    </div>
  );
}

export default App;
