import './style.css';

import React from 'react';
import ItemBox from '../ItemBox';
import SectionHeader from '../SectionHeader';

const Featured = () => {
  return (
    <section className="section bg-grey">
      <div className="container">
        <SectionHeader />
        <div className="featured-items">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <>
                <ItemBox />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
