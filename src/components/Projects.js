import React from "react";
import Project from "./Project";
import "../styles/Projects.css";
import tunelarkLogo from "../images/tunelark.png";
import tunelarkFeature from "../images/tunelarkfeature.png";
import ucsfLogo from "../images/ucsf.png";
import ucsfFeature from "../images/ucsffeature.png";
import mapitLogo from "../images/mapit.png";
import colorpickerLogo from "../images/colorpicker.png";
import warblerLogo from "../images/warbler.png";
import battleshipLogo from "../images/battleship.png";

const Projects = () => {
  const projects = allProjects.map(project => (
    <Project key={project.name} {...project} />
  ));
  return <div className="projects">{projects}</div>;
};

const allProjects = [
  {
    logo: tunelarkLogo,
    name: "Tunelark",
    type: "Software Developer, Contract",
    detail:
      "Web application for learning music theory, ear training, and sight reading for all instruments in a fun and effective way.",
    tech:
      "JavaScript, ReactJS, Redux, SCSS, Ruby on Rails, ActiveRecord, PostgreSQL",
    contrib:
      "Developed account edit modal for settings menu, rendered across over 95% of front end views.",
    feature: tunelarkFeature,
    inProgress: false,
    liveSite: "https://www.tunelark.com",
    sourceCode: ""
  },
  {
    logo: ucsfLogo,
    name: "UCSF CAMS",
    type: "Software Developer, Contract",
    detail:
      "Web application for UCSF Band Lab that helps doctors diagnose mental illness in incoming patients.",
    tech:
      "JavaScript, ReactJS, Python, Flask, SQLAlchemy, AWS (S3, Boto), PostgreSQL",
    contrib:
      "Implemented feature for doctors to upload mental health assessment videos, supporting 4X more media formats and reducing playlist creation time by 70%.",
    feature: ucsfFeature,
    inProgress: false,
    liveSite: "https://cams-ucsf.herokuapp.com",
    sourceCode: ""
  },
  {
    logo: colorpickerLogo,
    name: "Color Picker",
    type: "Personal Project",
    detail:
      "Web application providing users ability to easily create their own color palettes and copy a selected color code.",
    tech: "  JavaScript, ReactJS (Hooks), Material-UI, ChromaJS",
    contrib: "",
    feature: "",
    inProgress: false,
    liveSite: "https://colorpicker-app.herokuapp.com",
    sourceCode: "https://github.com/jonwyuen/color-picker"
  },
  {
    logo: mapitLogo,
    name: "MapIt",
    type: "Personal Project",
    detail:
      "Web mapping platform providing users ability to search and favorite locations with current weather info and time.",
    tech:
      "  JavaScript, JQuery, HTML5, CSS3, Bootstrap, Python, Flask, Jinja2, SQLAlchemy, PostgreSQL, GoogleMaps API, Openweather API",
    contrib: "",
    feature: "",
    inProgress: false,
    liveSite: "https://map-it-app.herokuapp.com",
    sourceCode: "https://github.com/jonwyuen/map_it"
  },
  {
    logo: warblerLogo,
    name: "Warbler",
    type: "Personal Project",
    detail:
      "Social media platform that enables users to instantly post and interact with messages.",
    tech:
      "JavaScript, ReactJS, Redux, CSS3, Bootstrap, Node.js, Express, Mongoose, MongoDB",
    contrib: "",
    feature: "",
    inProgress: true,
    liveSite: "",
    sourceCode: "https://github.com/jonwyuen/warbler"
  },
  {
    logo: battleshipLogo,
    name: "Battleship",
    type: "Personal Project",
    detail:
      "Two player game in which each player starts with five ships randomly placed onto their boards. Each player takes turns firing at each other's board until a player sinks all of the other's ships.",
    tech: "JavaScript, HTML5, CSS3",
    contrib: "",
    feature: "",
    inProgress: false,
    liveSite: "https://jonwyuen.github.io/battleship",
    sourceCode: "https://github.com/jonwyuen/battleship"
  }
];

export default Projects;
