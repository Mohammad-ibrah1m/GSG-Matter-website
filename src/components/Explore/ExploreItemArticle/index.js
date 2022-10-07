import './style.css';

import React from 'react';
import ExploreItemDate from '../ExploreItemDate';
import ExploreItemDescription from './ExploreItemDescription';

const ExploreItemArticle = () => {
  return (
    <div className="explore-box">
      <ExploreItemDate />
      <ExploreItemDescription />
    </div>
  );
};

export default ExploreItemArticle;
