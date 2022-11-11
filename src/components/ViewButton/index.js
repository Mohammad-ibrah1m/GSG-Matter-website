import './style.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row } from 'react-bootstrap';
import AvailableSizes from '../AvailableSizes';
import ContentHeader from '../ContentHeader';
import ContentTable from '../ContentTable';
import Quantity from '../Quantity';

const ViewButton = ({
  title,
  description,
  flag,
  price,
  image,
  images,
  brand,
  category,
  thumbnail,
  rating,
  from,
  rate,
}) => {
  const [show, setShow] = useState(false);
  const [productImage, setProductImage] = useState(from !== 'side' && thumbnail);
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
          <Modal.Title className="modal-main-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {from !== 'side' && (
              <Col lg={2}>
                <div className="d-flex align-items-center product-images">
                  {from !== 'side' &&
                    images?.map((imageLink, index) => {
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
            )}
            <Col lg={5}>
              {flag && (
                <div className="main-image-holder ">
                  <Image src={productImage || image} className="main-img" alt={description} />
                </div>
              )}
            </Col>
            <Col lg={5} className="ms-auto">
              {flag && (
                <div className="product-info">
                  <h2 className="product-title">{title}</h2>
                  <Row className="justify-content-between">
                    <Col lg={2}>
                      <span className="product-price">{price}</span>
                    </Col>
                    <Col lg={7}>
                      {from === 'side' && (
                        <div className="rating-holder">
                          <Rating style={{ maxWidth: 150 }} value={rate} readOnly />
                          <span className="rating-value d-inline-block">{rate} out of 5</span>
                        </div>
                      )}
                      {from !== 'side' && (
                        <div className="rating-holder">
                          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                          <span className="rating-value d-inline-block">{rating} out of 5</span>
                        </div>
                      )}
                    </Col>
                  </Row>
                  <div className="product-description">
                    <ContentHeader sectionTitle={'Description'} />
                    <p className="product-description-details">{description}</p>
                  </div>
                  <ContentTable category={category} />
                  {from === 'side' && <AvailableSizes description={description} brand={category} />}
                  {from !== 'side' && <AvailableSizes description={description} brand={brand} />}
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
