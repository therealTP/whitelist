import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <nav className="Sidebar">
        <h3>Sidebar Title!</h3>
        <ul>
          <li>News Sources</li>
          <li>About Us</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
