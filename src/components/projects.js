import React, { Component } from 'react';
import nasa from '../images/nasa2.png';
import notes from '../images/notes2.png';


class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">
        <h2>What I've Built</h2>
        <img src={nasa} />
        <img src={notes} />
      </div>
    );
  }
}

export default Projects;
