import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ padding: "3em 10vw" }}>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
