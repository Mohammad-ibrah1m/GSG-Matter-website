import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ContentHeader from '../ContentHeader';
import './style.css';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleMinusButton = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusButton = (e) => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="quantity">
      <ContentHeader sectionTitle={'Quantity'} />
      <div className="quantity-control">
        <button className="btn-minus" onClick={(e) => handleMinusButton(e)}>
          -
        </button>
        <button className="btn-quantity">{quantity}</button>
        <button className="btn-plus" onClick={(e) => handlePlusButton(e)}>
          +
        </button>
        <Button variant="secondary" className="btn-add">
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
