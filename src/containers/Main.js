import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/Main.css";

const Main = () => (
  <div className="main">
    <a className="main-links" id="about">
      {" "}
    </a>
    <About />
    <a className="main-links" id="skills">
      {" "}
    </a>
    <Skills />
    <a className="main-links" id="projects">
      {" "}
    </a>
    <Projects />
    <a className="main-links" id="contact">
      {" "}
    </a>
    <Contact />
  </div>
);

export default Main;
