import './style.css';

import React from 'react';

const ViewButton = ({}) => {
  return (
    <button
      className="btn-view explore-btn"
      onClick={() => {
        console.log('hello');
      }}
    >
      QUICK VIEW
    </button>
  );
};

export default ViewButton;
