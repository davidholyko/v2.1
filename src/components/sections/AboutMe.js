import React, { Component } from 'react';
import src from '../../images/selfie.webp';

class AboutMe extends Component {
  render () {
    const text = `I started my web development journey after seriously trying to make my way as professional video gamer. The game I play is Smite and at my peak, I reached Diamond II (top 1% of all players). Playing at the that level requires high individual skill, consistent teamwork and communication, and a desire for endless growth.

    My experience playing this game carries onto being web developer by allowing me to use my abilites to pickup new information quickly and apply them, by helping me practice communicating effectively at a macro and micro level, and by giving me the opportunity to share information with others and improve from feedback.`;

    return (
      <div id="about-me" className="section">
        <h1 className="section-title">My Story</h1>
        <div className="about-me-sub-section">
          <div className="col-12 col-sm-8">
            {text.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-12 col-sm-4">
            <img src={src} alt="" className="selfie" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
