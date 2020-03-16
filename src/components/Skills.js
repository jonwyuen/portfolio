import React from "react";
import "../styles/Skills.css";

const Skills = () => (
  <div className="skills">
    <div className="skill-group">
      <span className="fa fa-laptop" />
      <h3>Front End Technologies</h3>
      <div className="skill-detail">
        <p>
          Some front end technologies I have learned and worked with are{" "}
          <strong>
            JavaScript, ReactJS (Hooks), Redux, Material-UI, jQuery, HTML5,
            CSS3.
          </strong>
        </p>
      </div>
    </div>
    <div className="skill-group">
      <span className="fa fa-server" />
      <h3>Back End Technologies</h3>
      <div className="skill-detail">
        <p>
          Some back end technologies I have learned and worked with are{" "}
          <strong>Node.js, Express, MongoDB, Python, Flask, PostgreSQL.</strong>
        </p>
      </div>
    </div>
    <div className="skill-group">
      <span className="fa fa-users" />
      <h3>Team Communication</h3>
      <div className="skill-detail">
        <p>
          Working previously for a small company, I have learned how crucial
          effective team communication is towards success.
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
