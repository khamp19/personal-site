import React, { Component } from 'react';
// import './contactMe.css';

// make icons bigger

class Contact extends Component {
  render() {
    return (
      <div>

        {/*fix this to handle form submit */}
        <div id="four">
          <div className="container">
            <h3>Contact Me</h3>
            <p>Please send me an email or connect with me on LinkedIn</p>
            <br />
            <div style={{ display: "flex"}}>
              <ul className="icons" style={{ width: "80%", margin: "auto", display: "flex", justifyContent: "space-between"}}>
                <li style={{ padding: "0px 10px", width: "25%", textAlign: "center"}}>
                  <a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer">
                    <i class="icon fa-user-circle fa-3x" />
                    <p>Resume</p>
                  </a>
                </li>
                <li style={{ padding: "0px 10px", width: "25%", textAlign: "center" }}>
                  <a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer" >
                    <i class="icon fa-linkedin fa-3x" />
                    <p>LinkedIn</p>
                  </a>
                </li>
                <li style={{ padding: "0px 10px", width: "25%", textAlign: "center" }}>
                  <a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer">
                    <i class="icon fa-github fa-3x" />
                    <p>Github</p>
                  </a>
                </li>
                <li style={{ padding: "0px 10px", width: "25%", textAlign: "center" }}>
                  <a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer">
                    <i class="icon fa-envelope fa-3x" />
                    <p>Email</p>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        
          <div id="footer" style={{ display: 'flex', justifyContent: 'center'}}>
            <div className="container" style={{justifyContent: 'center'}}>
              <ul className="copyright" style={{fontSize: "90%"}}>
                <li>&copy; Kathryn Hampton. All rights reserved.</li>
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
