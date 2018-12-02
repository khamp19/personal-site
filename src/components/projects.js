import React, { Component } from 'react';
import nasa from '../images/nasa2.png';
import notes from '../images/notes2.png';
import CodeExample from './code_example';
import './projects.css';


class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2>What I've Built</h2>
        <CodeExample />
        <div className="projects">
          <div className="image-container">
            <img src={notes} alt="notes-app" className="image"/>
            <div className="overlay">
              <div className="p-description">
                <p>A note-taking app built with React, Redux, Node, Express, and MongoDB</p>
                <br></br>
                <p><a href="https://mynotesproject.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <strong>Check it out</strong></a></p>
                <br></br>
                <p><a href="https://github.com/khamp19/notes_frontend" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-3x" aria-hidden="true" /></a></p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={nasa} alt="nasa-app" className="image"/>
            <div className="overlay">
              <div className="p-description">
                <p>App that queries NASA's picture-of-the-day API and displays the 
                  image and information. Built with React.</p>
                <br></br>
                <p><a href="https://nasa-pic.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <strong>Check it out</strong></a></p>
                <br></br>
                <p><a href="https://github.com/khamp19/nasa-pic" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-3x" aria-hidden="true" /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
