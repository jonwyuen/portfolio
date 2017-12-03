import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './Header.css';
import backgroundImg from '../images/sfbackground.jpg'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navigation />
        <div className='header-image-wrapper'>
          <img src={backgroundImg} alt='Jonathan Yuen' />
          <div className='header-info'>
            <h1>Jonathan Yuen</h1>
            <h3><em>A full stack web developer from the Bay Area</em></h3>
          </div>
          <div className='media-icons media-icons-header'>
            <a href="mailto:jonwyuen@gmail.com"><span className='fa fa-envelope-o'></span></a>
            <a href="https://www.linkedin.com/in/jonathanyuen"><span className='fa fa-linkedin'></span></a>
            <a href="https://github.com/jonwyuen"><span className='fa fa-github'></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
