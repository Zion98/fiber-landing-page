import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div className="first-box">
              <h1>Fiber</h1>
              <p>
                With Fiber, you can setup your own personal portfolio in minutes
                with dozens of premade, beautiful templates.
              </p>

              <p>Made with ❤️ in the Netherlands.</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            <div className="second-box">
              <h2>Sitemap</h2>

              <p>Homepage</p>
              <p>Pricing</p>
              <p>Testimonials</p>
              <p>Features</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            {" "}
            <div className="third-box">
              <h2>Resources</h2>

              <p>Support</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </Col>
          <Col lg={2} sm={12}>
            {" "}
            <div className="fourth-box">
              <h2>Company</h2>

              <p>About</p>
              <p>Customers</p>
              <p>Blog</p>
            </div>
          </Col>

          <Col lg={2} sm={12}>
            <div className="fifth-box">
              <h2>Portfolios</h2>

              <p>Sarah Andrews</p>
              <p>Matthew Higgins</p>
              <p>Janice Dave</p>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  padding: 3rem 2rem;
  color: #4f4f4f;
  background: #fbf8f3;
  h1,
  h2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  @media only screen and (max-width: 999px) {
    padding: 2rem 0rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
export default Footer;
