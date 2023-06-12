import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="About">
      <Container>
        <Row className="justify-content-center">
          <Col md>
            <h2>About</h2>
            <p>Curious about me?</p>
          </Col>
        </Row>
        <Row className="justify-content-center text-start mt-5">
          <Col md="5">
            <p>
              My name is Habib. I'm a website developer based in Indonesia. I'm 15 years old. i'm a student in Muhammadiyah Plus Junior High School and i joined IT Class in my school. There, we learn how to make a website by coding or using
              CMS like Wordpress, Blogger or something else.
            </p>
          </Col>
          <Col md="5">
            <p>
              I can make a website with ReactJS to build the UI, NodeJS & ExpressJS to make a REST:API, and MySQL as my Database Management System (DBMS). I also can make a CRUD application with HTML, CSS, and Vanilla PHP (with no
              frameworks or libraries) and MySQL.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
