import './style.css';

import React from 'react';
import ShopItemImage from './ShopItemImage';
import ShopItemTitle from './ShopItemTitle';
import ViewButton from '../../ViewButton';
const ShopItem = () => {
  return (
    <div className="shop-item">
      <ShopItemImage />
      <ShopItemTitle />
      <ViewButton />
    </div>
  );
};

export default ShopItem;
