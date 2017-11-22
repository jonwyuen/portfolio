import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Header.css';

const image = require('../images/sfbackground.jpg');

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Nav />
        <div className='header-image-wrapper'>
          <img src={image} alt='Jonathan Yuen' />
          <div className='header-info'>
            <h1>I'm Jonathan Yuen</h1>
            <h3>A Bay Area based full stack software engineer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
