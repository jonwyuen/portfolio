import React, { Component } from 'react';
import './About.css';

const aboutImage = require('../images/profile.jpg')

class About extends Component {
  render() {
    return (
      <div className='about'>
        <span><img src={aboutImage} alt='Jonathan Yuen'/></span>
        <h2>Hi, I'm Jonathan.</h2>
        <div className='about-text'>
           I'm a software developer born and raised in San Francisco. Ever since I was little, I have been fascinated by how new technologies are constantly being developed. This curiosity for technology has led to my ever growing collection of cell phones, laptops, tablets, and many other electronics. More importantly, it sparked my desire to use my knowledge and skills to create and share technology related things.  
        </div>
        <div className='about-text'>
          I have always loved to solve problems, no matter the difficulty or magnitude of the problem. What I enjoy the most is not the result, but the process of solving the problem because I firmly believe that I am always learning something. My passion for learning and technology is what drives me to become a successful software developer. I hope you can become part of my journey!
        </div>
      </div>
    )
  }
}

export default About;
