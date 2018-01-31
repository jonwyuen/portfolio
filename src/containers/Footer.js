import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="media-icons media-icons-footer">
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
    <div className="copyright">&#169; 2018 Jonathan Yuen</div>
  </div>
);

export default Footer;
