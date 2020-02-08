import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export function Navbar(props) {
  return (
    <nav data-test="navbarComponent">
      <h1 onClick={() => props.history.replace('/')}>Code Jobs</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/add-job">Add Job</Link></li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);
