import React, { Component } from 'react';
import nasa from '../images/nasa2.png';
import notes from '../images/notes2.png';


class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2>What I've Built</h2>
        <div className="Projects">
          <div className="image-container">
            <img src={notes} alt="notes-app" className="image"/>
            <div className="overlay">
              <div className="p-description">
                <h3>A note-taking app built with React, Redux, Node, Express, and MongoDB</h3>
                <p><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
                  Check it out</a></p>
                <p><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-2x" aria-hidden="true" /></a></p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={nasa} alt="nasa-app" className="image"/>
            <div className="overlay">
              <div className="p-description">
                <h3>App that queries NASA's picture-of-the-day API and displays the 
                  image and information. Built with React.</h3>
                <p><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
                  Check it out</a></p>
                <p><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-2x" aria-hidden="true" /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
