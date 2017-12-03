import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='media-icons media-icons-footer'>
          <a href="mailto:jonwyuen@gmail.com"><span className='fa fa-envelope-o'></span></a>
          <a href="https://www.linkedin.com/in/jonathanyuen"><span className='fa fa-linkedin'></span></a>
          <a href="https://github.com/jonwyuen"><span className='fa fa-github'></span></a>
        </div>
        <div className='copyright'>&#169; 2017 Jonathan Yuen</div>
      </div>
    );
  }
}

export default Footer;
