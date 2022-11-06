import React from 'react';
import './style.css';

const ContentHeader = ({ sectionTitle }) => {
  return (
    <>
      <h4 className="product-description-title">{sectionTitle}</h4>
    </>
  );
};

export default ContentHeader;
