import React, { Component } from 'react';
import { Project } from './Project';
import { projects } from '../../data/ProjectsData';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      tags: 'Filter by tags:  React.js  Ruby on Rails  Algorithms  Animations  Express.js  Responsive-Design'.split(
        '  ',
      ),
      focusedTag: '',
    };
  }

  handleClick = (event) => {
    Array.from(document.querySelector('.btn-tag')).forEach((element) =>
      element.classList.remove('btn-tag-active'),
    );
    this.setState({ focusedTag: event.target.textContent });
  };

  filterProjects = (projects) => {
    const { focusedTag } = this.state;

    if (focusedTag === 'Filter by tags:') {
      return this.allProjects(projects);
    }

    return projects
      .filter((project) => project.tags.includes(focusedTag))
      .map((project) => (
        <Project key={project + Math.random()} project={project} />
      ));
  };

  allProjects = (projects) =>
    projects.map((project) => (
      <Project key={project + Math.random()} project={project} />
    ));

  render() {
    const { tags, focusedTag } = this.state;
    const button = (tag) => (
      <button
        key={tag + Math.random()}
        className={focusedTag === tag ? 'btn-tag-active' : 'btn-tag'}
        onClick={this.handleClick}
      >
        {tag}
      </button>
    );

    return (
      <div id="projects" className="section">
        <h1 className="section-title">Projects</h1>
        <div className="d-flex justify-content-start flex-wrap">
          {tags.map(button)}
        </div>
        {focusedTag
          ? this.filterProjects(projects)
          : this.allProjects(projects)}
        <a
          className="no-decoration btn-green mt-5"
          href="https://davidholyko.github.io/dko-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="m-0 text-light">Visit my projects page</h3>
        </a>
      </div>
    );
  }
}

export default Projects;
