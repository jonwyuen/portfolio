import React from "react";

const Project = ({
  logo,
  name,
  type,
  detail,
  tech,
  contrib,
  feature,
  inProgress,
  liveSite,
  sourceCode
}) => (
  <div className="project-section">
    <div className="project-body">
      <span>
        <img src={logo} alt={name} />
      </span>
      <h2>{name}</h2>
      <h4>{type}</h4>
      <div className="project-detail">
        <p>
          <em>{detail}</em>
        </p>
        {inProgress ? (
          <p>
            <strong>**Work in progress**</strong>
          </p>
        ) : null}
        <div className="project-tech">
          Technologies Used:
          <p>{tech}</p>
        </div>
        {contrib ? (
          <div>
            <p>
              <strong>Main contribution</strong>: {contrib}
            </p>
            <p>
              More detailed contributions can be found on my LinkedIn/resume
            </p>
          </div>
        ) : null}
      </div>
    </div>
    <div className="project-links">
      {feature ? <img src={feature} alt={`${name} Alt`} /> : null}
      {inProgress ? (
        <div>
          <a>N/A</a>
        </div>
      ) : (
        <div>
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </div>
      )}
      {sourceCode ? (
        <div>
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      ) : (
        <p>
          Github Repository is private. Upon requested, I can show some code
          snippets.
        </p>
      )}
    </div>
  </div>
);

export default Project;
