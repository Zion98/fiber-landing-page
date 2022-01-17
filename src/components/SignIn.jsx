import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
import home from "../assets/home.svg";
const SignIn = () => {
  return (
    <SignInStyle>
      <Row>
        <Col lg={6} md={12}>
          <div className="create-box form-box">
            <Link to="/" className="title-sign">
              Fiber
            </Link>
            <h2 className="create-title">Create your Fiber account</h2>
            <Form className="form-signup">
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="form-text">Your Name</Form.Label>
                <Form.Control type="email" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="form-text">E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="form-text">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="label-checkbox"
                  type="checkbox"
                  label="By creating an account on Fiber, you agree to the Terms & Conditions"
                />
              </Form.Group>

              <Button className="create-btn">Create Fiber Account</Button>

              <p className="already-text text-center">
                Already have an Account? <a href="/">Sign in</a>
              </p>
            </Form>
          </div>
        </Col>

        <Col lg={6} md={12}>
          <div className="image-box create-box">
            <img src={home} alt="create" className="img-fluid" />
            <h2 className="unparallel">Unparalleled Templates</h2>
            <p className="craft text-center">
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </Col>
      </Row>
    </SignInStyle>
  );
};

const SignInStyle = styled.div`
  .title-sign {
    display: inline-block;
    color: #000;
    text-decoration: none;
    font-weight: 800;
    margin: 3rem 0;
    font-size: 1.5rem;
  }
  .create-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-box {
    padding-left: 4rem;
  }
  .create-title {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .form-signup {
    min-width: 80%;
  }

  .form-text {
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
  }
  .image-box {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(
      51.74% 50% at 50% 50%,
      #7538ff 0%,
      #4d13d1 100%
    );
  }

  .unparallel {
    color: #fff;
    margin-top: 1rem;
  }

  .craft {
    width: 50%;
    color: #fff;
    font-weight: 300;
  }
  .label-checkbox {
    width: 80%;
  }

  .create-btn {
    width: 100%;
    color: #fff;
    background: #4d13d1;
    padding: 1rem 2rem;
  }

  @media only screen and (max-width: 999px) {
    padding: 2rem 1rem;
    .form-box {
      padding-left: 0rem;
    }
    .image-box {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  .create-box {
    /* height:100vh; */
    justify-content: center;
  }
`;

export default SignIn;
