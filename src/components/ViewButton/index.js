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
import { Link } from 'react-router-dom';
import { memo } from 'react';

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
  ide,
}) => {
  const [show, setShow] = useState(false);
  const [productImage, setProductImage] = useState(thumbnail);
  const [cart, setCart] = useState([]);
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
            {
              <Col lg={2}>
                <div className="d-flex align-items-center product-images">
                  {images?.map((imageLink, index) => {
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
            }
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
                      {
                        <div className="rating-holder">
                          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                          <span className="rating-value d-inline-block">{rating} out of 5</span>
                        </div>
                      }
                    </Col>
                  </Row>
                  <div className="product-description">
                    <ContentHeader sectionTitle={'Description'} />
                    <p className="product-description-details">{description}</p>
                  </div>
                  <ContentTable category={category} />
                  <AvailableSizes description={description} brand={brand} />
                  <Quantity
                    description={description}
                    title={title}
                    image={thumbnail}
                    price={price}
                    cart={cart}
                    setCart={setCart}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn-view-all-products mx-auto">
            <Link to={'products'} className="page-link">
              VIEW ALL PRODUCTS
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(ViewButton);
