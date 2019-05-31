import React, { Component } from 'react';
import pokemon from '../images/pokemon-login.png';
import notes from '../images/notes.png';
import dogs from '../images/dogs-rn-app.png';
import CodeExample from './code_example';
import './projects.css';


class Projects extends Component {
  render() {
    return (
      <div>
        <section id="three" style={{ borderBottom: "5px solid #F4F5FF", marginBottom: "30px" }}>
          <div class="container">
            <h3>A Few Accomplishments</h3>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
            <div class="features">
              <article>
                <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Possibly broke spacetime</h4>
                  <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                </div>
              </article>
              <article>
                <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Terraformed a small moon</h4>
                  <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                </div>
              </article>
              <article>
                <a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Snapped dark matter in the wild</h4>
                  <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                </div>
              </article>
            </div>
          </div>
        
      
      
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


        </section>
      </div>
    );
  }
}

export default Projects;
