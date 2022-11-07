import React from 'react';
import './style.css';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import ContentHeader from '../ContentHeader';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AvailableSizes = ({ description, brand }) => {
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
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip id={`tooltip-${'bottom'}`}>
                      {brand.slice(0, 1).toUpperCase() + brand.slice(1).toLowerCase()}
                    </Tooltip>
                  }
                >
                  <div
                    className="bg-light border item-size"
                    onClick={(e, index) => handleSizeInfo(e, index)}
                    key={index}
                  >
                    {size}
                  </div>
                </OverlayTrigger>
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
