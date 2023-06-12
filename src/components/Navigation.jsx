import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar variant="dark" className=" fixed-top justify-content-center text-center" style={{ backgroundColor: "#9b0e0e" }}>
      <Nav>
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Skills">Skills</Nav.Link>
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="mailto:itsmehabeeb@gmail.com">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
