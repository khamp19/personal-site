import React, { Component } from 'react';
import About from './components/about';
import Main from './components/main';
import Contact from './components/contactMe';
import Projects from './components/projects';
import SideBar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        {/*<div className="container">
          <NavBar />
          <Main />
          <About />
          <Projects />
          <Contact />
    </div>*/}
      <SideBar />
        <div id="main">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
