import './style.css';

import React from 'react';
import SectionHeader from '../SectionHeader';
import ExploreItemDate from './ExploreItemDate';
import ExploreItemArticle from './ExploreItemArticle';
import ExploreItemPhoto from './ExploreItemPhoto';

const Explore = () => {
  return (
    <section className="section bg-grey explore-section">
      <div className="container">
        <SectionHeader />
        <div className="explore-content-holder">
          <div className="explore-content-left explore-box">
            <ExploreItemDate />
            <h3 className="explore-box-title section-title">Connected Clothing: Raye Padit</h3>
            <p className="explore-box-description">
              As a voice for conscious fashion, Raye Padit is motivated by the belief that one
              person's actions, no matter how small, holds great impact. This core ideal has driven
              him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls.
            </p>
            <div className="image-holder">
              <img src={'assets/images/explore-clothing.png'} alt="" className="explore-left-img" />
            </div>
          </div>
          <div className="explore-content-right">
            <ExploreItemPhoto />
            <ExploreItemArticle />
            <ExploreItemArticle />
            <ExploreItemPhoto />
          </div>
          <button className="btn-explore">see the journal</button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
