import React from 'react';
import './style.css';
import VideoImage from './VideoImage';
import VideoTitle from './VideoTitle';

const VideoBox = () => {
  return (
    <div className="video-box">
      <VideoImage />
      <VideoTitle />
    </div>
  );
};

export default VideoBox;
