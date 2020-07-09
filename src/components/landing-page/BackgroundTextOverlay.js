import React, { Component } from 'react';
import Typing, { Backspace, Delay } from 'react-typing-animation';

class BackgroundTextOverlay extends Component {
  render () {
    return (
      <div id="background-text-overlay">
        <span className="text-large">David Ko</span>
        <Typing startDelay={1000} loop>
          <span className="text-medium">Software Engineer</span>
          <Backspace count={18} delay={2000} />
          <Delay ms={1000} />
          <span className="text-medium">Full Stack Web Developer</span>
          <Backspace count={25} delay={2000} />
          <Delay ms={1000} />
          <span className="text-medium">Diamond Ranked ADC in Smite</span>
          <Backspace count={36} delay={2000} />
          <Delay ms={1000} />
        </Typing>
      </div>
    );
  }
}

export default BackgroundTextOverlay;
