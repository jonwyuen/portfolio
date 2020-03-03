import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Header.css";
import backgroundImg from "../images/sfbackground.jpg";

const Header = () => (
  <div className="header">
    <Navigation />
    <div className="header-image-wrapper">
      <img src={backgroundImg} alt="Jonathan Yuen" />
      <div className="header-info">
        <h1>Jonathan Yuen</h1>
        <h3>
          <em>A full stack web developer from the Bay Area</em>
        </h3>
      </div>
      <div className="media-icons media-icons-header">
        <a href="mailto:jonwyuen@gmail.com">
          <span className="fa fa-envelope-o" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathanyuen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-linkedin" />
        </a>
        <a
          href="https://github.com/jonwyuen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-github" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;
