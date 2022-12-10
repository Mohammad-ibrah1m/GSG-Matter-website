import React from 'react';
import Style from './style.module.css';
import { Row, Col, Image } from 'react-bootstrap';

const AsSeenOnImage = ({ images }) => {
  return (
    <>
      <Row>
        {images.map((image) => {
          return (
            <>
              <Col sm={12} md={6} lg={3}>
                <div className={Style.asSeenImageHolder + ' my-3'}>
                  <Image src={image} fluid />
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default AsSeenOnImage;
