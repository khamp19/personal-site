//sidebar (html5up) for personal site
import React, { Component } from 'react';
import avatar from '../images/myAvatar.png';

//scroll fix: https://stackoverflow.com/questions/44612364/toggle-class-based-on-scroll-react-js
  //https://gist.github.com/Tybi/0c8ffb3d54df8a1c8966

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
      currentTab: 1,
    }
  }

  toggleActive = (tab) => {
    if(this.state.currentTab !== tab.id){
      this.setState({ currentTab: tab.id })
    }
  }

  render() {
    const tabs = [
      {
        id: 1,
        name: "About",
        href: "#one",
      },
      {
        id: 2,
        name: "Skills",
        href: "#two",
      },
      {
        id: 3,
        name: "Projects",
        href: "#three",
      },
      {
        id: 4,
        name: "Contact",
        href: "#four",
      },
    ];

    let current = this.state.currentTab;

    return (
      <div id="header">
        <header>
          <span className="image avatar">
            <img src={avatar} alt="avatar" style={{ border: "1px solid blue" }}/>
          </span>
          <h1 id="logo">Kathryn Hampton</h1>
        </header>
        <nav id="nav">
          <ul>
            {tabs.map(tab => (
              <li key={tab.id} onClick={() => this.toggleActive(tab)} onscroll={() => this.toggleActive(tab)}>
                <a href={tab.href} className={current === tab.id ? "active" : null}>
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <footer>
          <ul className="icons">
            <li><a href="https://gist.github.com/khamp19/eb00bd377681bd750f9946b8c1b6e7d5" target="_blank" rel="noopener noreferrer" class="icon fa-user-circle"><span class="label">Resume</span></a></li>
            <li><a href="https://www.linkedin.com/in/kathryn-hampton/" target="_blank" rel="noopener noreferrer" class="icon fa-linkedin fa-lg"><span class="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/khamp19" target="_blank" rel="noopener noreferrer" class="icon fa-github fa-lg"><span class="label">Github</span></a></li>
            <li><a href="mailto:kathrynahampton@gmail.com" target="_top" class="icon fa-envelope"><span class="label">Email</span></a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default SideBar;
