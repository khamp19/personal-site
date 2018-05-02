//nav bar for personal site
import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="navList">
          <li className="nb-item"><a href="#main" className="nb-link">Home</a></li>
          <li className="nb-item"><a href="#about" className="nb-link">About</a></li>
          <li className="nb-item"><a href="#projects" className="nb-link">Projects</a></li>
          <li className="nb-item"><a href="#contact" className="nb-link">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
