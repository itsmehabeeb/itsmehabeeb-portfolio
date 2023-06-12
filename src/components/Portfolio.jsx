import React from "react";
import Portfolio1 from "../assets/profile.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <section id="Portfolio">
      <Container>
        <Row className="justify-content-center">
          <Col md>
            <h2>Portfolio</h2>
            <p>What i've done?</p>
          </Col>
        </Row>
        <Row className="portfolio-row justify-content-center mt-5">
          <Col md="3">
            <img src={Portfolio1} alt="Portfolio" className="portfolio rounded mt-3" width="250px" />
          </Col>
          <Col md="3">
            <img src={Portfolio1} alt="Portfolio" className="portfolio rounded mt-3" width="250px" />
          </Col>
          <Col md="3">
            <img src={Portfolio1} alt="Portfolio" className="portfolio rounded mt-3" width="250px" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
