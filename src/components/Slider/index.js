import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderTitle from './HeaderTitle';
import './style.css';

const Slider = ({ title, link }) => {
  return (
    <header className={'homepage'}>
      <div className={'header-content'}>
        <HeaderTitle title={title} />
        <HeaderLink text={link} />
      </div>
    </header>
  );
};

export default Slider;
