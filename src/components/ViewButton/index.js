import './style.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row } from 'react-bootstrap';
import AvailableSizes from '../AvailableSizes';
import ContentHeader from '../ContentHeader';
import ContentTable from '../ContentTable';
import Quantity from '../Quantity';

const ViewButton = ({ title, description, flag, price, images, brand, category }) => {
  const [show, setShow] = useState(false);
  const [productImage, setProductImage] = useState(flag && images[images.length - 1]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = (e, index) => {
    const activeImage = images[index];
    setProductImage(activeImage);
  };

  return (
    <>
      <button
        className="btn-view explore-btn"
        onClick={() => {
          handleShow();
        }}
      >
        QUICK VIEW
      </button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={2}>
              <div className="d-flex align-items-center product-images">
                {flag &&
                  images.map((imageLink, index) => {
                    return (
                      <div className="small-image-holder">
                        <Image
                          src={imageLink}
                          className="small-img"
                          onClick={(e) => handleImageClick(e, index)}
                          id={index}
                          key={index}
                        />
                      </div>
                    );
                  })}
              </div>
            </Col>
            <Col lg={5}>
              {flag && (
                <div className="main-image-holder">
                  <Image src={productImage} className="main-img" />
                </div>
              )}
            </Col>
            <Col lg={5}>
              {flag && (
                <div className="product-info">
                  <h2 className="product-title">{title}</h2>
                  <span className="product-price">{price}</span>
                  <div className="product-description">
                    <ContentHeader sectionTitle={'Description'} />
                    <p className="product-description-details">{description}</p>
                  </div>
                  <ContentTable category={category} />
                  <AvailableSizes description={description} />
                  <Quantity />
                </div>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn-view-all-products mx-auto">
            VIEW ALL PRODUCTS
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewButton;
