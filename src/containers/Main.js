import React, { Component } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <a id='about'></a>
        <About />
        <a id='skills'></a>
        <Skills />
        <a id='projects'></a>
        <Projects />
      </div>
    );
  }
}

export default Main;
