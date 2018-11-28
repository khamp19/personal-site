import React, { Component } from 'react';
import avatar from '../images/myAvatar.png';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main" id="main">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="intro" >
          <h2>I'm Kathryn.</h2>
          <br></br>
          <p>Full-stack web developer and marketer.</p>
          <p>Welcome to my website.</p>
      </div>
    </div>
    );
  }
}
export default Main;
