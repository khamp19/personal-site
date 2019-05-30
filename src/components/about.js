import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>

        <div id="one">
          <div className="image main" data-position="center">
            <img src="images/banner.jpg" alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Software Engineer</h2>
              <p>Just an incredibly simple responsive site<br />
                template freebie by </p>
            </header>
            <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
          </div>
        </div>




      <div className="about" id="about">
        <h2>What I Do</h2>
        <div className="work">
          <p>I starting coding as a hobby, but quickly became motivated to pursue a 
            career in software development because I knew I would be challenged 
            intellectually and have the opportunity to constantly learn.
            In previous positions, my ability to stay organized, manage my time, 
            and work as part of a team, were essential to my success managing and 
            completing projects.</p>
            <br></br>
            <p>I took a class on full-stack web development with Lambda School. 
            Through this experience I have discovered a passion for backend development using
            NodeJS. I'm currently learning Python, AWS, and SQL.
          </p>
        </div>



        <div id="two">
          <div class="container">
            <h3>Things I Can Do</h3>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. 
              Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
            <ul class="feature-icons">
              <li class="fa-code">Write all the code</li>
              <li class="fa-cubes">Stack small boxes</li>
              <li class="fa-book">Read books and stuff</li>
              <li class="fa-coffee">Drink much coffee</li>
              <li class="fa-bolt">Lightning bolt</li>
              <li class="fa-users">Shadow clone technique</li>
              <li class="fa-code">Write all the code</li>
              <li class="fa-cubes">Stack small boxes</li>
              <li class="fa-book">Read books and stuff</li>
              <li class="fa-coffee">Drink much coffee</li>
              <li class="fa-bolt">Lightning bolt</li>
              <li class="fa-users">Shadow clone technique</li>
            </ul>
          </div>
        </div>



        <div className="education" id="education">
          <h3>Education</h3>
          <div className="ed cs-ed">
          <h4><a href="https://lambdaschool.com/"
              target="_blank" rel="noopener noreferrer">Lambda School</a></h4>
            <p>Intensive computer science course focused on developing full-stack web 
            applications using JavaScript. Technologies used include: CSS, LESS, React and Redux, 
            NodeJS, Express, and MongoDB. </p>
          </div>
          <div className="college">
            <div className="ed wake">
              <h4>Wake Forest University</h4>
              <p>Master of Arts in Management</p>
            </div>
            <div className="ed duke">
              <h4>Duke University</h4>
              <p>Bachelor of Arts</p>
            </div>
          </div>
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
          <p>You can access my resume <a href="https://gist.github.com/khamp19/eb00bd377681bd750f9946b8c1b6e7d5" 
            target="_blank" rel="noopener noreferrer"> here</a>
          </p>
        </div>
      </div>


      </div>
    );
  }
}

export default About;
