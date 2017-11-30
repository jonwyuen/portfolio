import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project-section">
          <span />
          <h3>Tunelark</h3>
          <h4>Company Project</h4>
          <div className="project-detail">
            <div className='project-tech'>
              Technologies Used: 
              <p>
                JavaScript, ReactJS, Redux, SCSS, Ruby on Rails, ActiveRecord, PostgreSQL
              </p>
            </div>
            <p>
              Web application for learning music theory, ear training, and sight reading for all instruments in a fun and effective way.
            </p>
            <p>
              My contributions can be found on LinkedIn/resume
            </p>
          </div>
        </div>
        <div className="project-section">
          <span />
          <h3>UCSF Cams</h3>
          <h4>Company Project</h4>
          <div className="project-detail">
            <div className='project-tech'>
              Technologies Used: 
              <p>
                JavaScript, ReactJS, Python, Flask, SQLAlchemy, Boto, AWS S3, PostgreSQL
              </p>
            </div>
            <p>
              Web application for UCSF Band Lab that helps doctors diagnose mental illness in incoming patients.
            </p>
            <p>
              My contributions can be found on LinkedIn/resume
            </p>
          </div>
        </div>
        <div className="project-section">
          <div className='project-body'>
            <span />
            <h3>MapIt</h3>
            <h4>Personal Project</h4>
            <div className="project-detail">
              <div className='project-tech'>
                Technologies Used: 
                <p>
                  JavaScript, JQuery, HTML5, CSS3, Bootstrap, Python, Flask, Jinja2, SQLAlchemy, PostgreSQL, GoogleMaps API, Openweather API
                </p>
              </div>
              <p>
                Application that allows users to search and favorite locations with current weather info and time.
              </p>
            </div>
          </div>
          <div className='project-links'>
            <div><a href="https://map-it-app.herokuapp.com" target="_blank">Live Site</a></div>
            <div><a href="https://github.com/jonwyuen/map_it" target="_blank">Source Code</a></div>
          </div>
        </div>
        <div className="project-section">
          <div className='project-body'>
            <span />
            <h3>Warbler</h3>
            <h4>Personal Project</h4>
            <div className="project-detail">
              <div className='project-tech'>
                Technologies Used: 
                <p>
                  JavaScript, ReactJS, Redux, CSS3, Bootstrap, Node.js, Express, Mongoose, MongoDB
                </p>
              </div>
              <p>
                A social media platform modeled after Twitter, in which users can exchange messages.
              </p>
            </div>
          </div>
          <div className='project-links'>
            <div><a href="">Live Site</a></div>
            <div><a href="">Source Code</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
