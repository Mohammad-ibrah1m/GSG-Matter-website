import './style.css';

import React from 'react';

const SectionHeader = ({ title = 'Featured' }) => {
  return <h2 className="section-title">{title}</h2>;
};

export default SectionHeader;
