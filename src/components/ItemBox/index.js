import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';

const ItemBox = ({ title, price, id, allProducts, flag, thumbnail, image }) => {
  return (
    <div className="box-item" key={id}>
      <div className="image-container">
        <img src={thumbnail || image} className="item-image" alt="displaying a woman clothing" />
      </div>
      <p className="item-title">{title}</p>
      <span className="item-price">{'$' + price}</span>
      <ViewButton {...allProducts[id]} flag={flag} />
    </div>
  );
};

export default ItemBox;
