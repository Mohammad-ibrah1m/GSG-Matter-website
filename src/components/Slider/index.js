import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderTitle from './HeaderTitle';
import './style.css';

const Slider = ({ from, title, link, description, headerClass }) => {
  return (
    <header className={headerClass}>
      <div
        className={(from = 'productListing' ? 'header-content productsListing' : 'header-content')}
      >
        <HeaderTitle title={title} from={from} />
        {(from = 'productListing' ? <p>{description}</p> : <HeaderLink text={link} />)}
      </div>
      {
        (from = 'productListing' ? (
          <img src="assets/images/featured-4.png" className="d-inline-block h-100 ms-5" />
        ) : (
          ''
        ))
      }
    </header>
  );
};

export default Slider;
