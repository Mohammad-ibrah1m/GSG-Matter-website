import React from 'react';
import HeaderTitle from './BannerTitle';
import './style.css';

const HeaderBanner = ({ title, description, image }) => {
  return (
    <header className="productListing">
      <div className={'header-content productsListing'}>
        <HeaderTitle title={title} />
        <p>{description}</p>
      </div>
      <img src={image} className="d-inline-block h-100 ms-5" />
    </header>
  );
};

export default HeaderBanner;
