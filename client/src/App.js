import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/routes/Home';

function App() {
  return (
    <div style={{ padding: "3em 10vw" }}>
      <Router>
        <Navbar />

        <Route path="/" component={Home} exacts />
      </Router>
    </div>
  );
}

export default App;
