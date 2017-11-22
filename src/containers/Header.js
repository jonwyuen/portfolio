import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './Header.css';

const image = require('../images/sfbackground.jpg');

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navigation />
        <div className='header-image-wrapper'>
          <img src={image} alt='Jonathan Yuen' />
          <div className='header-info'>
            <h1>Jonathan Yuen</h1>
            <h3><em>A full stack web developer from the Bay Area</em></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
