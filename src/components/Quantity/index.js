import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ContentHeader from '../ContentHeader';
import './style.css';

const Quantity = ({ title, price, description, image, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e, quantity, title, price, description, image) => {
    e.preventDefault();
    setCart([...cart, { count: quantity, name: title, pr: price, desc: description, img: image }]);
  };
  localStorage.setItem('cart', JSON.stringify(cart));

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
        <Button
          variant="secondary"
          className="btn-add"
          onClick={(e) => handleAddToCart(e, quantity, title, price, description, image)}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
