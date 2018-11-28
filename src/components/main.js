import React, { Component } from 'react';
import avatar from '../images/myAvatar.png';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="intro" >
          <h2>I'm Kathryn. Welcome to my website.</h2>
          <p>Full-stack web developer and marketer</p>
      </div>
    </div>
    );
  }
}
export default Main;
