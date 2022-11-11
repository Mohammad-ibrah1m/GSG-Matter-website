import './style.css';

import React from 'react';
import ViewButton from '../ViewButton';

const ItemBox = ({
  title,
  price,
  image,
  id,
  allProducts,
  flag,
  from,
  category,
  rating,
  thumbnail,
}) => {
  return (
    <div className="box-item" key={id}>
      <div className="image-container">
        <img src={image} className="item-image" alt="displaying a woman clothing" />
      </div>
      <p className="item-title">{title}</p>
      <span className="item-price">{'$' + price}</span>

      {from !== 'side' && <ViewButton {...allProducts[id]} flag={flag} />}
      {from === 'side' && (
        <ViewButton
          title={title}
          price={price}
          image={image}
          flag={flag}
          from={from}
          category={category}
          rate={rating.rate}
        />
      )}
    </div>
  );
};

export default ItemBox;
