import React, { Component } from 'react';
import './About.css';

const aboutImage = require('../images/profile.jpg')

class About extends Component {
  render() {
    return (
      <div className='about'>
        <span><img src={aboutImage} alt='Jonathan Yuen'/></span>
        <div className='about-text'>
          Hi, I'm Jonathan. I have always loved to solve problems, no matter the difficulty or magnitude of the problem. What I enjoy the most is not the result, but the process of solving the problem because I believe that I am always learning something new. This belief and my passion for technology is what drives me to become a successful software developer. I hope you can become part of my journey!
        </div>
      </div>
    )
  }
}

export default About;
