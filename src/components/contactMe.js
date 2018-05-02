import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        {/* add your logo */}
        <ul className="contact-logos">
          <li className="contact-links">
            <a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
          <li className="contact-links">
            <a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
          <li className="contact-links">
            <a href="mailto:kathrynahampton@gmail.com" target="_top">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
          {/* link to resume- google drive */}
        </ul>
      </div>
    );
  }
}

export default Contact;
