//sidebar (html5up) for personal site
import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <header>
            <span className="image avatar"><img src="/images/avatar.jpg" alt="" /></span>
            <h1 id="logo"><a href="#">Willis Corto</a></h1>
            <p>I got reprogrammed by a rogue AI<br />
              and now I'm totally cray</p>
          </header>
          <nav id="nav">
            <ul>
              <li><a href="#one" className="active">About</a></li>
              <li><a href="#two">Things I Can Do</a></li>
              <li><a href="#three">A Few Accomplishments</a></li>
              <li><a href="#four">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default SideBar;
