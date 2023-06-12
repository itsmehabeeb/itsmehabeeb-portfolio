import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <section id="Skills">
      <Container>
        <Row className="justify-content-center">
          <Col md>
            <h2>Skills</h2>
            <p>What can i use to build a website?</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md="3">
            <div className="bg-danger text-white p-2 rounded border border-2 mt-2">HTML</div>
          </Col>
          <Col md="3">
            <div className="bg-info text-white p-2 rounded border border-2 mt-2">CSS</div>
          </Col>
          <Col md="3">
            <div className="bg-purple text-white p-2 rounded border border-2 mt-2">Bootstrap</div>
          </Col>
          <Col md="3">
            <div className="bg-primary text-white p-2 rounded border border-2 mt-2">ReactJS</div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md="3">
            <div className="bg-warning text-white p-2 rounded border border-2 mt-2">JavaScript</div>
          </Col>
          <Col md="3">
            <div className="bg-success text-white p-2 rounded border border-2 mt-2">NodeJS</div>
          </Col>
          <Col md="3">
            <div className="bg-light text-dark p-2 rounded border border-dark border-2 mt-2">ExpressJS</div>
          </Col>
          <Col md="3">
            <div className="bg-purple text-white p-2 rounded border border-2 mt-2">PHP</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
