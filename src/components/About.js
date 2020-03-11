import React from "react";
import "../styles/About.css";
import aboutImage from "../images/profile.jpg";
import resume from "../pdfs/Jonathan_Yuen_Resume.pdf";

const About = () => (
  <div className="about">
    <span>
      <img src={aboutImage} alt="Jonathan Yuen" />
    </span>
    <h2>Hi, I'm Jonathan.</h2>
    <div className="about-text">
      I'm a software developer born and raised in San Francisco. Ever since I
      laid hands on a computer, I was fascinated by how the web contains a
      massive amount of information and how it worked. This curiosity ultimately
      sparked the desire to use my knowledge and creativity to build web
      applications that others can use and enjoy.
    </div>
    <div className="about-text">
      I have always loved to solve problems, no matter the difficulty or
      magnitude of the problem. What I enjoy the most is not the result, but the
      process of solving the problem because I firmly believe that I am always
      learning something. My passion for learning and technology is what drives
      me to become a successful software developer. I hope you can become part
      of my journey!
    </div>
    <div className="about-links">
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <a
        href="https://www.linkedin.com/in/jonathanyuen"
        target="_blank"
        rel="noopener noreferrer"
      >
        View LinkedIn
      </a>
    </div>
  </div>
);

export default About;
