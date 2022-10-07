import React from 'react';
import './style.css';
import { FaRegPlayCircle } from 'react-icons/fa';

const VideoImage = () => {
  return (
    <div className="video-image-holder">
      <FaRegPlayCircle className="play-icon" />
      <img src={'assets/images/recommendedvideo-1.png'} alt="jamani video" className="video-img" />
    </div>
  );
};

export default VideoImage;
