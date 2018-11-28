import React, { Component } from 'react';
import './contactMe.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">
        <div>
          <ul className="contact-logos">
            <li className="contact-links">
              <a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-3x" aria-hidden="true" /></a></li>
            <li className="contact-links">
              <a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-3x" aria-hidden="true" /></a></li>
            <li className="contact-links">
              <a href="mailto:kathrynahampton@gmail.com" target="_top">
              <i class="fa fa-envelope fa-3x" aria-hidden="true" /></a></li>
          </ul>
        </div>
        <div>
          <p>This site was built by Kathryn Hampton using React. </p>
          <p>Check out the repo 
          <a href="https://github.com/khamp19/personal-site" target="_blank" rel="noopener noreferrer"><strong> here</strong></a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
