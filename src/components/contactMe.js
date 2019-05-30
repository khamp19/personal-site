import React, { Component } from 'react';
import './contactMe.css';

// make icons bigger

class Contact extends Component {
  render() {
    return (
      <div>

        {/*fix this to handle form submit */}
        <div id="four">
          <div class="container">
            <h3>Contact Me</h3>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non</p>
            <form method="post" action="#"> 
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                <div class="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
                <div class="col-12">
                  <ul class="actions">
                    <li><input type="submit" class="primary" value="Send Message" /></li>
                    <li><input type="reset" value="Reset Form" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          
          <div id="footer" style={{ display: 'flex', justifyContent: 'center'}}>
            <div className="container" style={{justifyContent: 'center'}}>
              <ul className="icons">
                <li><a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer" class="icon fa-github"><span class="label">Github</span></a></li>
                <li><a href="mailto:kathrynahampton@gmail.com" target="_top" class="icon fa-envelope"><span class="label">Email</span></a></li>
              </ul>
              <ul className="copyright">
                <li>&copy; Untitled. All rights reserved.</li>
                <li>Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></li>
                <li>Images: <a href="http://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></li>
                <li>Built with React. Check out the repo 
                  <a href="https://github.com/khamp19/personal-site" target="_blank" rel="noopener noreferrer"> here
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      
      
      </div>
    );
  }
}

export default Contact;
