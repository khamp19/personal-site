import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h2>What I Do</h2>
        <div className="work">
          <p>At work, I tell stories about people's TV and internet habits
            to convince businesses to advertise on cable. I'm currently working on expanding
            our proprietary news channel to 18 new markets across the country. </p>
          <p>I picked up coding as a hobby because I wanted to learn something new.
            I took a class on full-stack web development with Lambda School. 
            Through this experience I have discovered a passion for backend development,
            NodeJS and MongoDB.</p>
        </div>
        <div className="skills">
          <h3>Tools I Use</h3>
          <ul>
            <li><i class="fab fa-js fa-5x" /></li>
            <li><i class="fab fa-react fa-5x" /></li>
            <li><i class="fab fa-node fa-5x" /></li>
          </ul>
        </div>
        <div className="res">
          <p>You can access my resume <a href="https://drive.google.com/open?id=18Wxkeod-XOgIxloaNerQ0UM_SVhBJnnc" target="_blank" rel="noopener noreferrer"> 
             here</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
