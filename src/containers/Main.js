import React, { Component } from 'react';
import About from "../components/About"
import Projects from "../components/projects"
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <About />
        <Projects />
      </div>
    );
  }
}

export default Main;
