import React from "react";
import items from "../jsonData/history.json";
import { Card, Button, Container, Row, Col, FormLabel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="g-4" xs={2} md={4}>
          {items.map((item) => (
            <Col className="col-4">
              <Card className="my-2">
                <Card.Img
                  className="img-fluid"
                  style={{
                    height: 300,
                    objectFit: "cover",
                  }}
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {item.title}
                  </Card.Title>
                  <FormLabel className="bg-warning text-white font-weight-bolder">
                    £{item.price}
                  </FormLabel>
                  <Button
                    className="btn-sm ml-5 font-weight-bolder"
                    variant="success"
                  >
                    Order now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
