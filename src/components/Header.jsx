import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyle>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" className="brandname">
            Fiber
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                margin: "0 auto",
              }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="links">
                Community
              </Nav.Link>
              <Nav.Link href="#action2" className="links">
                Pricing
              </Nav.Link>
              <Nav.Link href="#action2" className="links">
                Features
              </Nav.Link>
            </Nav>

            <Button variant="outline-success mx-2" className="signin-btn">
              Sign In
            </Button>
            <Button variant="outline-success" className="signup-btn">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  background-color: #fbf8f3 !important;
  padding: 2rem 0;
  .brandname {
    font-weight: 700;
    color: #000000;
  }
  .links {
    font-weight: 400;
    color: #000000 !important;
  }
  .signin-btn,
  .signup-btn {
    border: none !important;
  }

  .signin-btn {
    color: #000000 !important;
    font-weight: 600;
  }
  .signup-btn {
    color: #fff;
    background-color: #4d13d1 !important;
    padding: 0.5rem 1.5rem !important;
  }

  @media only screen and (max-width: 999px) {
    padding: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    padding-top:1rem;
  }
`;

export default Header;
