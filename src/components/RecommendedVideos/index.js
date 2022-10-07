import React from 'react';
import CenterButton from '../CenterButton';
import SectionHeader from '../SectionHeader';
import './style.css';
import VideoBox from './VideoBox';

const RecommendedVideos = () => {
  return (
    <section className="recommended-videos section">
      <SectionHeader />
      <div className="container">
        <div className="videos-menu">
          {[1, 2, 3].map((video) => (
            <VideoBox />
          ))}
        </div>
        <CenterButton />
      </div>
    </section>
  );
};

export default RecommendedVideos;
