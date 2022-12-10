import React, { memo } from 'react';
import Style from './style.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const CartItems = () => {
  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  console.log(cartProducts);

  return (
    <>
      <Container fluid>
        <Row>
          {cartProducts?.map((product) => {
            return (
              <>
                <Col sm={12} md={6} lg={3}>
                  <Card style={{ width: 'fit-content', margin: 'auto' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.desc}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>count: {product.count}</ListGroup.Item>
                      <ListGroup.Item>price: {product.pr}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button variant="danger">remove from cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default memo(CartItems);
