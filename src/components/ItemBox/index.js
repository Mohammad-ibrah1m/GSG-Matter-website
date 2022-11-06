import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';
import { useState } from 'react';

const ItemBox = ({ title, price, image, id }) => {
  return (
    <div className="box-item" key={id}>
      <img src={image} alt="" srcset="" className="item-image" />
      <p className="item-title">{title}</p>
      <span className="item-price">{price}</span>
      <ViewButton />
    </div>
  );
};

export default ItemBox;
