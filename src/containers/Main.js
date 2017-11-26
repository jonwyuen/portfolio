import React, { Component } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Main;
