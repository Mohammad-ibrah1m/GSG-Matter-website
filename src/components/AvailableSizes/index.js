import React from 'react';
import './style.css';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import ContentHeader from '../ContentHeader';

const AvailableSizes = ({ description }) => {
  const [sizeInfo, setSizeInfo] = useState(null);
  const handleSizeInfo = (e, index) => {
    setSizeInfo(description);
  };

  const sizes = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="available-sizes">
        <ContentHeader sectionTitle={'Size'} />
        <Stack direction="horizontal" gap={3}>
          {sizes.map((size, index) => {
            return (
              <>
                <div className="bg-light border item-size" onClick={handleSizeInfo} key={index}>
                  {size}
                </div>
              </>
            );
          })}
        </Stack>
        <p className="size-info">{sizeInfo}</p>
      </div>
    </>
  );
};

export default AvailableSizes;
