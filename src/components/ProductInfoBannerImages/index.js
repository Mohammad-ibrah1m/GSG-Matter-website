import React from 'react';
import Style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row, Container } from 'react-bootstrap';

const ProductInfoBannerImages = () => {
  const images = [
    'assets/images/info-banner-1.png',
    'assets/images/info-banner-2.png',
    'assets/images/info-banner-2.png',
  ];
  return (
    <Container>
      <Row>
        {images.map((image) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <div className={Style.bannerCardImage}>
                <div className={Style.imageHolder}>
                  <Image
                    src={image}
                    className="d-block banner_inner_image img-fluid mx-auto"
                    fluid
                  />
                </div>
              </div>
              <p className="text-center fs-5 my-3">this is a dummy text</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductInfoBannerImages;
