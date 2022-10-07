import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';

const ItemBox = () => {
  return (
    <div className="box-item">
      <img src={'assets/images/featured.png'} alt="" srcset="" className="item-image" />
      <p className="item-title">Pueraria Mirifica And Study Phyto Estrogens</p>
      <span className="item-price">$599</span>
      <ViewButton />
    </div>
  );
};

export default ItemBox;
