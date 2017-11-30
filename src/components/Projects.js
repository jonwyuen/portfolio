import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Company Projects</h2>
        <div className="project-section">
          <span />
          <h3>Tunelark</h3>
          <div className="project-detail">
            <p />
          </div>
        </div>
        <div className="project-section">
          <span />
          <h3>UCSF Cams</h3>
          <div className="project-detail">
            <p />
          </div>
        </div>
        <h2>Solo Projects</h2>
        <div className="project-section">
          <span />
          <h3>MapIt</h3>
          <div className="project-detail">
            <p />
          </div>
        </div>
        <div className="project-section">
          <span />
          <h3>Warbler</h3>
          <div className="project-detail">
            <div className='project-tech'>
              Technologies Used: 
              <p>
                
              </p>
            </div>
            <p>
              A social media platform modeled after Twitter, in which users can exchange messages.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
