import React, { Component } from 'react';
// import background from '../images/background.jpg';
import background from '../images/w-plants-safar-safarov-1509070-unsplash.jpg';

class About extends Component {
  render() {
    return (
      <div>

        <section id="one" style={{ borderBottom: "5px solid #F4F5FF", marginBottom: "30px"}}>
          <div className="image main" data-position="center">
            <img src={background} alt="a nice picture" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Software Engineer</h2>
              <p>Solving business problems with code</p>
            </header>
            <p>I have a background in business, but I was motivated to pursue a career in software development 
              because I have a deep interest in cyber security and digital privacy. 
              I took a class on full-stack web development with Lambda School, an 
              intensive computer science and software engineering academy focused on developing full-stack 
              web applications using JavaScript. Through this experience I have discovered a passion for 
              backend development using NodeJS.
            </p>
          </div>
        </section>
        



        <section id="two" style={{ borderBottom: "5px solid #F4F5FF", marginBottom: "30px" }}>
          <div className="container">
            <h3>What I Can Do</h3>
            <p>I have built several full-stack applications using tools like:</p>
            <ul className="feature-icons">
              <li class="fa-code">React/ Redux</li>
              <li class="fa-code">HTML/ CSS</li>
              <li class="fa-code">JavaScript</li>
              <li class="fa-code">Git/ GitHub</li>
              <li class="fa-code">SQL</li>
              <li class="fa-code">MongoDB</li>
              <li class="fa-code">React Native</li>
              <li class="fa-code">Material UI</li>
            </ul>
          </div>
        </section>



      </div>
    );
  }
}

export default About;
