import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import About from './components/about';
import Main from './components/main';
import Contact from './components/contactMe';
import Projects from './components/projects';
// import './components/components.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          <Main />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
