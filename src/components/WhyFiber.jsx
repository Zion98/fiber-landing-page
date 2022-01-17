import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col, Card } from "react-bootstrap";
import { WhyData } from "./WhyData";

const WhyFiber = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <WhyFiberStyle ref={ref} className={`${inView ? "animate-down" : ""} `}>
      <Container>
        <h2 className="why-title">Why Fiber?</h2>
        <p className="why-content">
          A good portfolio means good employability.
        </p>
        <Row>
          {WhyData.map((item, index) => {
            return (
              <Col key={index} lg={4} md={12} className="col-card">
                <Card className="why-card" style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={item.image} alt="card" className="card-image" />
                    <Card.Title className="card-title">{item.title}</Card.Title>
                    <Card.Text className="card-content">
                      {item.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </WhyFiberStyle>
  );
};

const WhyFiberStyle = styled.div`
  .col-card {
    padding: 0;
  }
  .why-card {
    border: none !important;
    width: 100% !important;
  }

  .why-title {
    font-size: 1.2rem;
    color: #4d13d1;
  }

  .why-content {
    max-width: 40%;
    font-weight: 700;
    font-size: 2rem !important;
  }

  .card-title {
    margin-top: 1rem;
    font-size: 1.2rem !important;
    color: #000000;
  }

  .card-content {
    font-weight: 300;
  }

  @media only screen and (max-width: 999px) {
    .why-content {
      max-width: 100%;
    }
  }
`;

export default WhyFiber;
