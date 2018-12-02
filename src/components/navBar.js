//nav bar for personal site
import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <ul className="navList">
        {/* add Education link*/}
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
