import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';

const ItemBox = ({ title, price, image }) => {
  return (
    <div className="box-item">
      <img src={image} alt="" srcset="" className="item-image" />
      <p className="item-title">{title}</p>
      <span className="item-price">{price}</span>
      <ViewButton />
    </div>
  );
};

export default ItemBox;
