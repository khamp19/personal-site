import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import About from './components/about';
import Main from './components/main';
import Contact from './components/contactMe';
import Projects from './components/projects';
import './components/components.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <header><NavBar className="NavBar"/></header>
        <Main className="Main"/>
        <About className="About"/>
        <Projects className="Projects"/>
        <Contact className="Contact"/>
      </div>
    );
  }
}

export default App;
