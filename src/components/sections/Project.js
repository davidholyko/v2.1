import React, { Fragment } from 'react';
import Video from './Video';

export const Project = ({ project }) => {
  const { focus, title, tags, deployed, repo, description, video } = project;

  const renderTags = tags.split(',').map((tag, index) => (
    <p key={index} className="bg-dark text-light mr-1 px-2 py-1 rounded">
      {tag}
    </p>
  ));

  const renderDescription = description.map((item, index) => (
    <li key={index} className="mb-1">
      {item}
    </li>
  ));

  const renderButtons = (
    <Fragment>
      <button className="btn-green mr-2">
        <a
          className="no-decoration"
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-light">Codebase</span>
        </a>
      </button>

      <button className="btn-green ml-2">
        <a
          className="no-decoration"
          href={deployed}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-light">Deployment</span>
        </a>
      </button>
    </Fragment>
  );

  return (
    <div className="project animated fadeIn" key={title + deployed}>
      <div className="d-flex">
        <h3 className="project-header mt-1 font-weight-bold pr-2">{title}</h3>
      </div>
      <h5>
        <span>Focused on: </span>
        <span className="font-italic">{focus}</span>
      </h5>

      <div className="project-info">
        <div className="project-description">
          <div className="d-flex flex-wrap">{renderTags}</div>
          <ul>{renderDescription}</ul>
        </div>

        <div className="project-description">
          <Video video={video} />
          <div className="d-flex justify-content-around">{renderButtons}</div>
        </div>
      </div>
    </div>
  );
};
