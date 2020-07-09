import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class Video extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
    };
  }

  handleClick = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.play();
      this.setState({ isPlaying: !isPlaying });
    } else {
      this.pause();
      this.setState({ isPlaying: !isPlaying });
    }
  };

  play(event) {
    event.target.play();
  }
  pause(event) {
    event.target.pause();
  }

  render() {
    const { video } = this.props;
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Click to play/pause the video</Tooltip>}
      >
        <video
          className="hover-shadow mb-3"
          src={video}
          onClick={this.handleClick}
          controls
          loop
        />
      </OverlayTrigger>
    );
  }
}

export default Video;
