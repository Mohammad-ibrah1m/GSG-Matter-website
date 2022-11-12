import React from 'react';
import './style.css';
const HeaderTitle = ({ title, from }) => {
  return (
    <h2
      className={(from = 'productListing' ? 'header-title productsListing-title' : 'header-title')}
    >
      {title}
    </h2>
  );
};

export default HeaderTitle;
