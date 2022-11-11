import './style.css';

import React from 'react';
import SectionHeader from '../SectionHeader';
import ShopItem from './ShopItem';

const Shop = () => {
  return (
    <section className="section bg-grey shop-section">
      <SectionHeader />
      <div className="container">
        <div className="shop-content-holder">
          {[1, 2, 3, 4].map((item) => (
            <ShopItem />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
