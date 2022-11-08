import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderTitle from './HeaderTitle';
import './style.css';

const Slider = () => {
  return (
    <header className="main">
      <div className="header-content ">
        <HeaderTitle title="Perfume Tips Tricks" />
        <HeaderLink text="shop now" />
      </div>
    </header>
  );
};

export default Slider;
