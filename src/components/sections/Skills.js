import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { skills, technologies, languages } from '../../data/SkillsData';

class Skills extends Component {
  renderIcons = items => {
    return items.map((item, index) => (
      <OverlayTrigger
        key={index}
        placement="top"
        overlay={<Tooltip id={`tooltip-${item}`}>{item.value}</Tooltip>}
      >
        <i className={item.icon + ' icon'} />
      </OverlayTrigger>
    ));
  };

  render () {
    return (
      <div id="skills" className="section break">
        <h4 className="section-title">Skills</h4>
        <h4 className="text-center">Languages</h4>
        <div className="skills-sub-section">{this.renderIcons(languages)}</div>

        <h4 className="text-center">Libraries/Frameworks</h4>
        <div className="skills-sub-section">{this.renderIcons(skills)}</div>

        <h4 className="text-center">Technologies</h4>
        <div className="skills-sub-section">
          {this.renderIcons(technologies)}
        </div>
      </div>
    );
  }
}

export default Skills;
