import React from "react";
import Profile from "../assets/profile.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <section id="Home">
      <Container>
        <Row id="home-row">
          <Col md="4">
            <img src={Profile} alt="PROFILE" id="Profile" width="270px" className="rounded-circle border border-5" />
          </Col>
          <Col md="5" className="text-start mt-5">
            <h5>Hi! My name is</h5>
            <h1>HABIB</h1>
            <p>I'm a website programmer from Indonesia and I'm 15 years old. Although i'm still young, i can make a professional website, company profile website, or something else.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
