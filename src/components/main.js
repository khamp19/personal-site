import React, { Component } from 'react';
import avatar from '../images/myAvatar.png';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <img src={avatar} width="20%" height="20%" />
        <div className="intro">
          <h3>I'm Kathryn. Welcome to my website.</h3>
          <p>Full-stack web developer and marketer</p>
      </div>
    </div>
    );
  }
}
export default Main;
