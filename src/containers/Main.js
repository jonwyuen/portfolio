import React, { Component } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <About />
        <Projects />
      </div>
    );
  }
}

export default Main;
