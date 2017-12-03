import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./Main.css";

const Main = () => (
  <div className="main">
    <a id="about"> </a>
    <About />
    <a id="skills"> </a>
    <Skills />
    <a id="projects"> </a>
    <Projects />
    <a id="contact"> </a>
    <Contact />
  </div>
);

export default Main;
