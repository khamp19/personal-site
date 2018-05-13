import React, { Component } from 'react';
// import camping from '../images/tent.png';
// import archery from '../images/archery1.png';
// import bike from '../images/mtbike.png';
// import dog from '../images/dog1.png';

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <h2>What I Do</h2>
        <div className="Work">
          <p>At work, I tell stories about people's TV and internet habits
            to convince businesses to advertise on cable. I'm currently working on expanding
            our proprietary news channel to 18 new markets across the country. </p>
          <p>I picked up coding as a hobby because I wanted to learn something new.
            I took a class on full-stack web development with Lambda School. 
            Through this experience I have discovered a passion for backend development,
            NodeJS and MongoDB.</p>
        </div>
        <h3 font-size="150%">Tools I use</h3>
        <div className="Skills">
          <ul>
            <li><i class="fab fa-js fa-5x" /></li>
            <li><i class="fab fa-react fa-5x" /></li>
            <li><i class="fab fa-node fa-5x" /></li>
          </ul>
        </div>
        <div className="Res">
        {/* add link to resume, post to google drive or github */}
          <p>You can access my resume here</p>
        </div>
        {/* <h4>What I like to Do</h4> */}
        {/* <div className="Hobbies">
          <ul>
            <li>Camping <img src={camping} height="10%" width="10%"/></li>
            <li>Archery <img src={archery} height="5%" width="5%"/></li>
            <li>Mountain biking <img src={bike} height="10%" width="10%"/></li>
            <li>Hanging out with my dog <img src={dog} height="10%" width="10%"/></li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default About;
/*
Interests- use font awesome icons?
*/
