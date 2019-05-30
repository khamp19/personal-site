//sidebar (html5up) for personal site
import React, { Component } from 'react';

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
            <img src="/images/avatar.jpg" alt="" />
          </span>
          <h1 id="logo">Kathryn Hampton</h1>
          <p style={{ fontSize: '90%'}}>The merit of all things lies in their difficulty</p>
          <p style={{ fontSize: '80%', lineHeight: 'normal' }}> - Aramis, The Three Musketeers <br /> by Alexandre Dumas</p>
        </header>
        <nav id="nav">
          <ul>
            {tabs.map(tab => (
              <li key={tab.id} onClick={() => this.toggleActive(tab)}>
                <a href={tab.href} className={current === tab.id ? "active" : null}>
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
