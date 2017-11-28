import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <div className='skill-group'>
          <span className='fa fa-laptop'></span>
          <h3>Front End Technologies</h3>
          <div className="skill-detail">
            <p>
              Some front end technologies I have learned and worked with are <strong>JavaScript, ReactJS, Redux, jQuery, HTML5, CSS3.</strong>
            </p>
          </div>
        </div>
        <div className='skill-group'>
          <span className='fa fa-server'></span>
          <h3>Back End Technologies</h3>
          <div className="skill-detail">
            <p>
              Some back end technologies I have learned and worked with are <strong>Node.js, Express, MongoDB, Python, Flask, PostgreSQL.</strong>
            </p>
          </div>
        </div>
        <div className='skill-group'>
          <span className='fa fa-users'></span>
          <h3>Team Communication</h3>
          <div className="skill-detail">
            <p>
              Working previously for a small company, I have learned how crucial effective team communication is towards success.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
