import React from 'react';
import './style.css';
const HeaderLink = ({ text }) => {
  return (
    <a href="index.html" className="shop-btn">
      {text}
    </a>
  );
};

export default HeaderLink;
