//about me for personal site
import React, { Component } from 'react';
// import avatar from '../images/myAvatar.png';
import camping from '../images/tent.png';
import archery from '../images/archery1.png';
import bike from '../images/mtbike.png';
import dog from '../images/dog1.png';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h3>What I do</h3>
        <div className="Work">
          <p>At work, I tell stories about people's TV and internet habits
            to convince businesses to advertise on cable. I'm currently working on expanding
            our proprietary news channel to 18 new markets across the country. </p>
          <p>I picked up coding as a hobby because I wanted to learn something new.
            I took a class on full-stack web development with Lambda School. 
            Through this experience I have discovered a passion for backend development,
            NodeJS and MongoDB.</p>
        </div>
        <h4>My Skills</h4>
        <div className="Skills">
          <div>
            <ul>
              <li>JavaScript</li>
              <li>HTML/ CSS</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Product marketing</li>
              <li>Project Management</li>
              <li>Market research & analysis</li>
              <li>Brand management</li>
              <li>Consumer research</li>
            </ul>
          </div>
        </div>
        <div className="Hobbies">
          <ul>
            <li>Camping <img src={camping} height="10%" width="10%"/></li>
            <li>Archery <img src={archery} height="5%" width="5%"/></li>
            <li>Mountain biking <img src={bike} height="10%" width="10%"/></li>
            <li>Hanging out with my dog <img src={dog} height="10%" width="10%"/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
/*
Interests- use font awesome icons?
*/
