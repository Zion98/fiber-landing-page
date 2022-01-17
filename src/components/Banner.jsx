import React from "react";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";
import star from "../assets/star.png";
import Checkmark from "../assets/Checkmark.svg";
import banner from "../assets/banner1.png";

import { Container, Row, Col, Button } from "react-bootstrap";
const Banner = () => {
  const { ref, inView, } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <BannerStyle>
      <Container>
        <Row>
          <Col lg={{ span: 6, order: 1 }} md={{ span: 12, order: 0 }}>
            <img
              src={banner}
              ref={ref}
              className={`${inView ? "slider-img" : ""} img-fluid bigImg`}
              alt="banner"
            />
          </Col>
          <Col lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }}>
            <div className={`${inView ? "slider-img" : ""} content-box`}>
              <div className="stars">
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />

                <span className="rates">Rated 4.8/5.0 (243 reviews)</span>
              </div>

              <h1 className="create">Create your portfolio in minutes.</h1>
              <p className="mini-content">
                With Fiber, you can setup your own personal portfolio in minutes
                with dozens of premade, beautiful templates.
              </p>
              <div className="banner-buttons">
                <Button
                  variant="outline-success"
                  className="signup-btn banner-btn"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline-success mx-2"
                  className=" banner-btn viewex"
                >
                  View Examples
                </Button>
              </div>
              <div className="mark" classnAME="no-gutters">
                <div className="mark1">
                  <img src={Checkmark} alt="checkmark" /> No Credit
                  Card&nbsp;Required
                </div>

                <div lg={2}>
                  <img src={Checkmark} alt="checkmark" /> 10 Free Templates
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </BannerStyle>
  );
};

const BannerStyle = styled.div`
  background-color: #fbf8f3 !important;
  padding: 0 2rem;
  padding-bottom: 2rem;
  .content-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .content-box,
  .bigImg {
    transform: scale(85%);
  }

  .slider-img {
    transform: scale(100%);
    transition: all ease-out 1s;
  }

  .create {
    max-width: 70%;
    font-weight: 700;
  }

  .mini-content {
    font-weight: 400;
  }

  .rates {
    display: inline-block;
    position: relative;
    top: 0.2rem;
  }

  .stars img {
    margin-right: 0.2rem;
  }

  .mark {
    display: flex;
    margin-top: 0.5rem;
    background-color: #fbf8f3 !important;
    width: 100% !important;
  }
  .mark1 {
    margin-right: 0.5rem;
  }
  .signin-btn,
  .signup-btn {
    border: none !important;
  }

  .signin-btn {
    color: #4d13d1 !important;
    font-weight: 600;
    text-decoration: underline;
    margin: 0.5rem 0 !important;
    &:hover {
      text-decoration: none;
      background-color: #4d13d1 !important;
      color: #fff !important;
      padding: 1rem 1.5rem !important;
    }
  }
  .signup-btn {
    color: #fff;
    background-color: #4d13d1 !important;
    padding: 1rem !important;
  }

  .viewex {
    color: #4d13d1 !important;
    border: none !important;
    &:hover {
      background-color: transparent !important;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 999px) {
    .bigImg {
      margin-top: -2rem;
    }
    .stars,
    .rates {
      display: none;
    }
    .banner-buttons {
      width: 100% !important;
    }
    .banner-btn {
      display: block;
      width: 100% !important;
    }

    .mark {
      flex-direction: column;
    }
    .mark1 {
      margin: 1rem 0;
    }
  }

  @media screen and (max-width: 768px) {
    .create {
      margin-top: 2rem;
      max-width:100%;
    }
  }
`;
export default Banner;
