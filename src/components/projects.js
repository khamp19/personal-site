import React, { Component } from 'react';
import pokemon from '../images/pokemon-login.png';
import notes from '../images/notes.png';
import dogs from '../images/dogs-rn-app.png';
import CodeExample from './code_example';
import './projects.css';


class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2>What I've Built</h2>
        <br></br>
        <CodeExample />
        <h3>React Native Dog Images App</h3>
        <div className="react-native">
          <img src={dogs} alt="rn-dogs-screenshot" />
          <div className="rn-description">
            <p>
              A simple React Native application that gets data from the Dog CEO API 
              and returns a scrolling list of images. Built with React Native, Redux, and Axios.
            </p>
            <div className="a-div">
              <p><a href="https://expo.io/@khamp19/dogs-rn" target="_blank" rel="noopener noreferrer">
                <strong>Check it out</strong></a></p>
              <br></br>
              <p><a href="https://github.com/khamp19/Dogs-react-native" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-3x" aria-hidden="true" /></a></p>
            </div>
          </div>
        </div>
        <h3>Full-stack JavaScript Applications</h3>
        <div className="projects">
          <div className="image-container">
            <img src={pokemon} alt="notes-app" />
            <div className="overlay">
              <div className="p-description">
                <p className="poke-description">A full-stack application that gets and displays Pokemon and their stats from a database, 
                  built as part of a team for Lambda School Build Week</p>
                <div className="poke-links">
                  <p>
                    <a href="https://elastic-payne-ec3741.netlify.com/" 
                      target="_blank" rel="noopener noreferrer">
                    <strong>Check it out</strong></a>
                  </p>
                  <br></br>
                  <p>
                    <a href="https://github.com/build-week2-pokemon1/backend" 
                      target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-2x" aria-hidden="true" /></a>
                  </p>
                  </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={notes} alt="notes-app" />
            <div className="overlay">
              <div className="p-description">
                <p>A note-taking app built with React, Redux, Node, Express, and MongoDB</p>
                <br></br>
                <p><a href="https://takenote.netlify.com/" target="_blank" rel="noopener noreferrer">
                  <strong>Check it out</strong></a></p>
                <br></br>
                <p><a href="https://github.com/khamp19/notes_frontend" target="_blank" rel="noopener noreferrer">
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
