import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import diversify from "../assets/Diversify.png";
const Diversify = () => {
  return (
    <DiversifyStyle>
      <Container className="container-box">
        <Row>
          <Col lg={6} md={12}>
            <div className="diversify-section">
              <h1>Diversify your portfolio.</h1>
              <p>
                Create an even more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </p>

              <Button className="trial-btn">Start Free Trial</Button>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <img src={diversify} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </DiversifyStyle>
  );
};

const DiversifyStyle = styled.div`
  height: 100%;
  color: #fff;
  .container-box {
    background-color: #4d13d1;
    padding: 0 2rem;
    padding-top: 2rem;
    height: 100%;
  }

  .diversify-section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .trial-btn {
    max-width: 50%;
    background-color: #fff !important;
    color: #4d13d1 !important;
    border: none !important;
    padding: 1rem 1.5rem;
  }

  @media only screen and (max-width: 999px) {
    .diversify-section {
      width: 100%;
    }
    .trial-btn {
      display: block !important;
      max-width: 100%;
      width: 100%;
    }
  }

  @media only screen and (max-width: 999px) {
    .container-box {
      padding: 1rem;
    }
  }
`;

export default Diversify;
