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
        <header><NavBar /></header>
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
