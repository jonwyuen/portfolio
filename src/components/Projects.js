import React from "react";
import "./Projects.css";
import tunelarkLogo from "../images/tunelark.png";
import tunelarkFeature from "../images/tunelarkfeature.png";
import ucsfLogo from "../images/ucsf.png";
import ucsfFeature from "../images/ucsffeature.png";
import mapitLogo from "../images/mapit.png";
import warblerLogo from "../images/warbler.png";

const Projects = () => (
  <div className="projects">
    <div className="project-section">
      <div className="project-body">
        <span>
          <img src={tunelarkLogo} alt="Tunelark" />
        </span>
        <h2>Tunelark</h2>
        <h4>Software Engineer, Contract</h4>
        <div className="project-detail">
          <p>
            <em>
              Web application for learning music theory, ear training, and sight
              reading for all instruments in a fun and effective way.
            </em>
          </p>
          <div className="project-tech">
            Technologies Used:
            <p>
              JavaScript, ReactJS, Redux, SCSS, Ruby on Rails, ActiveRecord,
              PostgreSQL
            </p>
          </div>
          <p>
            <strong>Main contribution</strong>: Developed account edit modal for
            settings menu, rendered across over 95% of front end views.
          </p>
          <p>More detailed contributions can be found on my LinkedIn/resume</p>
        </div>
      </div>
      <div className="project-links">
        <img src={tunelarkFeature} alt="Tunelark Feature" />
        <div className="project-site">
          <a
            href="https://www.tunelark.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </div>
        <p>
          Github Repository is private. Upon requested, I can show some code
          snippets.
        </p>
      </div>
    </div>
    <div className="project-section">
      <div className="project-body">
        <span>
          <img src={ucsfLogo} alt="UCSF" />
        </span>
        <h2>UCSF CAMS</h2>
        <h4>Software Engineer, Contract</h4>
        <div className="project-detail">
          <p>
            <em>
              Web application for UCSF Band Lab that helps doctors diagnose
              mental illness in incoming patients.
            </em>
          </p>
          <div className="project-tech">
            Technologies Used:
            <p>
              JavaScript, ReactJS, Python, Flask, SQLAlchemy, AWS (S3, Boto),
              PostgreSQL
            </p>
          </div>
          <p>
            <strong>Main contribution</strong>: Implemented feature for doctors
            to upload mental health assessment videos, supporting 4X more media
            formats and reducing playlist creation time by 70%.
          </p>
          <p>More detailed contributions can be found on my LinkedIn/resume</p>
        </div>
      </div>
      <div className="project-links">
        <img src={ucsfFeature} alt="UCSF Feature" />
        <div className="project-site">
          <a
            href="https://cams-ucsf.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </div>
        <p>
          Github Repository is private. Upon requested, I can show some code
          snippets.
        </p>
      </div>
    </div>
    <div className="project-section">
      <div className="project-body">
        <span>
          <img src={mapitLogo} alt="MapIt" />
        </span>
        <h2>MapIt</h2>
        <h4>Personal Project</h4>
        <div className="project-detail">
          <p>
            <em>
              Web application that allows users to search and favorite locations
              with current weather info and time.
            </em>
          </p>
          <div className="project-tech">
            Technologies Used:
            <p>
              JavaScript, JQuery, HTML5, CSS3, Bootstrap, Python, Flask, Jinja2,
              SQLAlchemy, PostgreSQL, GoogleMaps API, Openweather API
            </p>
          </div>
        </div>
      </div>
      <div className="project-links">
        <div>
          <a
            href="https://map-it-app.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </div>
        <div>
          <a
            href="https://github.com/jonwyuen/map_it"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
    <div className="project-section">
      <div className="project-body">
        <span>
          <img src={warblerLogo} alt="Warbler" />
        </span>
        <h2>Warbler</h2>
        <h4>Personal Project</h4>
        <div className="project-detail">
          <p>
            <em>
              A social media platform modeled after Twitter, in which users can
              interact with others through following and exchanging messages.
            </em>
          </p>
          <p>**Work in progress**</p>
          <div className="project-tech">
            Technologies Used:
            <p>
              JavaScript, ReactJS, Redux, CSS3, Bootstrap, Node.js, Express,
              Mongoose, MongoDB
            </p>
          </div>
        </div>
      </div>
      <div className="project-links">
        <div>
          <a>N/A</a>
        </div>
        <div>
          <a>Work in progress</a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
