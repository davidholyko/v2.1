import React, { Component } from 'react';
import { icons } from '../../data/ContactData';

class BackgroundIconOverlay extends Component {
  render () {
    const renderIcons = ({ href, src }) => (
      <a
        className=""
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={href}
      >
        <img className="img-icon-small" src={src} alt="" />
      </a>
    );
    return <div id="background-icon-overlay">{icons.map(renderIcons)}</div>;
  }
}

export default BackgroundIconOverlay;
