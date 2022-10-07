import './style.css';

import React from 'react';
import SectionHeader from '../SectionHeader';

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader />
        <div className="content-holder">
          <div className="left-content">
            <img
              src={'assets/images/about.png'}
              alt="someone making a drawing"
              className="about-image"
            />
          </div>
          <div className="right-content">
            <p className="about-description">
              Our mission is threefold - to foster designer-artisan collaborations, inspire
              consumers to value provenance and process, and pioneer industry change and
              sustainability for rural textile communities.
            </p>
            <p className="employement-days-created info-title">Artisan Employment Days Created</p>
            <h4 className="employement-days-title info-description">123456</h4>
            <p className="countries-involved info-title">Countries Involved To Date</p>
            <ul className="country-list info-description">
              <li className="country">China</li>
              <li className="country">India</li>
              <li className="country">Sri lanka</li>
            </ul>
            <p className="matter-tribe info-title">#MatterTribe</p>
            <ul className="matter-tribe-list info-description">
              <li className="matter-tribe-item">12 designers</li>
              <li className="matter-tribe-item">12 Factories</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
