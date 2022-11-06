import './style.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row } from 'react-bootstrap';
import AvailableSizes from '../AvailableSizes';

const ViewButton = ({ title, description, flag, price, images, brand, category }) => {
  const [show, setShow] = useState(false);
  const [productImage, setProductImage] = useState(flag && images[images.length - 1]);
  /* const [sizeInfo, setSizeInfo] = useState(null); */
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.table(images);

  const handleImageClick = (e, index) => {
    const activeImage = images[index];
    setProductImage(activeImage);
  };

  /* const handleSizeInfo = (e, index) => {
    setSizeInfo(description);
  }; */

  const handleMinusButton = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusButton = (e) => {
    setQuantity(quantity + 1);
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
                    <h4 className="product-description-title">Description</h4>
                    <p className="product-description-details">{description}</p>
                  </div>

                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row" className="table-row-title">
                          {category[0].toUpperCase() + category.slice(1)}
                        </th>
                        <td>54 Jobs</td>
                      </tr>
                      <tr>
                        <th scope="row" className="table-row-title">
                          Partnership
                        </th>
                        <td>Randall Armstrong</td>
                      </tr>
                      <tr>
                        <th scope="row" className="table-row-title">
                          In Collab
                        </th>
                        <td>Augusta Mendoza</td>
                      </tr>
                    </tbody>
                  </table>
                  <AvailableSizes description={description} />
                  <div className="quantity">
                    <h4 className="product-description-title">Quantity</h4>
                    <div className="quantity-control">
                      <button className="btn-minus" onClick={(e) => handleMinusButton(e)}>
                        -
                      </button>
                      <button className="btn-quantity">{quantity}</button>
                      <button className="btn-plus" onClick={(e) => handlePlusButton(e)}>
                        +
                      </button>
                      <Button variant="secondary" className="btn-add">
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
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
