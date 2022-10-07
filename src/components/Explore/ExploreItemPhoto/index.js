import './style.css';

import React from 'react';
import ExploreItemTitle from '../ExploreItemTitle';
import ExploreItemDate from '../ExploreItemDate';
import ExploreItemImage from './ExploreItemImage';

const ExploreItemPhoto = () => {
  return (
    <div className="explore-box">
      <ExploreItemDate />
      <ExploreItemTitle />
      <ExploreItemImage />
    </div>
  );
};

export default ExploreItemPhoto;
