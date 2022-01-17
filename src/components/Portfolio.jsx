import React from "react";
import styled from "styled-components";
import { Container, Row, Button, Card } from "react-bootstrap";
import Port from "./Port";
const Portfolio = () => {
  return (
    <PortfolioStyle>
      <Container className="port-box">
        <Row>
          <div className="scrolling-wrapper-flexbox">
            {Port.map((item, index) => {
              return (
                <>
                  <Card style={{ width: "30%" }} className="mb-2 cards">
                    <Card.Header className="portfolio-header">
                      <img
                        src={item.avatar}
                        alt="avatar-portfolio"
                        className="avatar"
                      />
                      <div className="port-details">
                        <p className="avatarName">{item.avatarName}</p>
                        <p>{item.amount}</p>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="card-text">
                        {item.content}
                        <Button className="port-btn">{item.linkLabel}</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </Row>
      </Container>
    </PortfolioStyle>
  );
};

const PortfolioStyle = styled.div`
  padding: 3rem 0rem;

  .scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0;
  }

  .cards {
    flex: 0 0 auto;
    padding-left: 0 !important;
    margin-right: 2rem !important;
  }

  .portfolio-header {
    background-color: #fff;
    border: none !important;
    display: flex !important;
    align-items: center;
  }
  .port-details {
    margin-left: 1rem;
  }
  .port-details p {
    margin: 0 !important;
  }

  .avatarName {
    color: #4d13d1 !important;
    font-weight: bold;
  }

  .port-btn {
    margin: 1rem 0 !important;
    width: 100%;
    background-color: transparent;
    color: #4d13d1 !important;
    font-weight: bold;
    border-color: #4d13d1 !important;
  }

  @media only screen and (max-width: 999px) {
    .scrolling-wrapper-flexbox {
      flex-direction: column;
      padding: 0.5rem;
    }

    .cards {
      width: 100% !important;
    }
  }
`;

export default Portfolio;
