import React, { Component } from 'react';
import pokemon from '../images/pokemon-login.png';
import notes from '../images/notes.png';
import dogs from '../images/dogs-rn-app-edited.png';
import MMpic from '../images/mentor-match-img.png';
import CodeExample from './code_example';
import './projects.css';


class Projects extends Component {
  render() {
    return (
      <div>
        <section id="three" style={{ borderBottom: "5px solid #F4F5FF", marginBottom: "30px" }}>
          <div class="container">
            <h3>A Few Accomplishments</h3>
            <p>Solo work and team projects in a variety of roles.</p>
            <div class="features">
              <article>
                <a href="https://mentormatch.netlify.com/" target="_blank" rel="noopener noreferrer" class="image">
                  <img src={MMpic} alt="mentor-match" width="315px" height="191px" />
                </a>
                <div class="inner">
                  <h4>Mentor Match</h4>
                  <h5>Full-Stack Developer</h5>
                  <p>MentorMatch is a full-stack application that helps organizations facilitate mentorship programs and relationships. </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ padding: "0px 10px" }}>
                      <a href="https://github.com/labs12-mentor" target="_blank" rel="noopener noreferrer">
                        Project Repo
                      </a>
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <a href="https://takenote.netlify.com/" target="_blank" rel="noopener noreferrer" class="image"><img src={notes} alt="note-taking-app" /></a>
                <div class="inner">
                  <h4>Note Taking App</h4>
                  <h5>Full-Stack Developer</h5>
                  <p>A note-taking application built with React, Redux, Node, Express, and MongoDB.</p>
                  <div style={{ display: "flex", justifyContent: "center"}}>
                    <p style={{ padding: "0px 10px"}}>
                      <a href="https://github.com/khamp19/mynotes-v2" target="_blank" rel="noopener noreferrer">
                        Frontend Repo
                      </a>
                    </p>
                    <p style={{ padding: "0px 10px" }}>
                      <a href="https://github.com/khamp19/notes_project_II" target="_blank" rel="noopener noreferrer">
                        Backend Repo
                      </a>
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <a href="https://elastic-payne-ec3741.netlify.com/" target="_blank" rel="noopener noreferrer" class="image">
                  <img src={pokemon} alt="notes-app" width="315px" height="191px" />
                </a>
                <div class="inner">
                  <h4>Pokemon Pokedex</h4>
                  <h5>Backend Developer</h5>
                  <p>A full-stack application that gets and displays Pokemon and their stats from a database, 
                      built as part of a team for Lambda School Build Week</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ padding: "0px 10px" }}>
                      <a href="https://github.com/build-week2-pokemon1" target="_blank" rel="noopener noreferrer">
                        Project Repo
                      </a>
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <a href="https://expo.io/@khamp19/dogs-rn" target="_blank" rel="noopener noreferrer" class="image">
                  <img src={dogs} alt="rn-dogs-screenshot" width="315px" height="191px" /></a>
                <div class="inner">
                  <h4>React Native Dog Images App</h4>
                  <h5>Frontend Developer</h5>
                  <p>
                    A React Native application that gets data from the Dog CEO API 
                    and returns a scrolling list of images. Built with React Native and Redux
                  </p>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    <a href="https://github.com/khamp19/Dogs-react-native" target="_blank" rel="noopener noreferrer">
                      Frontend Repo
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>


        </section>
      </div>
    );
  }
}

export default Projects;
