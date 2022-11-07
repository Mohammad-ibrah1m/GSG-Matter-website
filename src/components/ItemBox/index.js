import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';

const ItemBox = ({ title, price, image, id, allProducts, flag }) => {
  return (
    <div className="box-item" key={id}>
      <img src={image} className="item-image" alt="displaying a woman clothing" />
      <p className="item-title">{title}</p>
      <span className="item-price">{price}</span>

      {flag && <ViewButton {...allProducts[id]} flag={flag} />}
    </div>
  );
};

export default ItemBox;
