import React from 'react';
import { Accordion, Row, Col, Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemBox from '../ItemBox';
import './style.css';

const ProductsList = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [flag, setFlag] = useState(false);
  const [sorted, setSorted] = useState([]);
  const categories = ["men's clothing", "women's clothing", 'electronics', 'jewelery'];

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setAllProducts(response.data);
    setFlag(true);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategory = (e, category, allProducts) => {
    e.preventDefault();
    e.stopPropagation();
    setAllProducts(allProducts?.filter((product) => product.category === category));
  };

  const handleSortByPrice = (e) => {
    const sortedProducts = allProducts?.sort((a, b) => {
      return a.price - b.price;
    });
    setSorted(sortedProducts);
    console.log(allProducts);
  };

  return (
    <>
      <section className="bg-grey section">
        <Container fluid>
          <Row>
            <Col lg={6} sm={6}>
              <div className="text-start mt-2">
                <h4 className="ms-3">Women</h4>
              </div>
            </Col>
            <Col lg={6} sm={6}>
              <Form.Select
                aria-label="Default select example"
                onChange={handleSortByPrice}
                id="sort"
                className="mt-2"
              >
                <option disabled selected>
                  Sort by
                </option>
                <option value="0">Price </option>
                <option value="1">Name</option>
              </Form.Select>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex justify-content-between">
                <h4 className="ms-3">Filters</h4>
                <a href="#" className="text-decoration-none reset-btn accordion-link">
                  Reset
                </a>
              </div>
              <Accordion flush className="text-start">
                <Accordion.Item eventKey={0} className="text-start">
                  <Accordion.Header>
                    <h6 className="text-start">Categories</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {categories.map((item, index) => {
                      return (
                        <>
                          <a
                            href="#"
                            variant="primary"
                            className="d-block text-decoration-none accordion-link"
                            onClick={(e) => handleCategory(e, item, allProducts)}
                            key={index}
                          >
                            {item}
                          </a>
                        </>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={9} sm={12}>
              <Row>
                {allProducts?.map((product, index) => {
                  return (
                    <>
                      <Col lg={3} md={6} sm={12}>
                        <ItemBox
                          {...product}
                          id={index}
                          allProducts={allProducts}
                          flag={flag}
                          from={'side'}
                          key={index}
                        />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductsList;
