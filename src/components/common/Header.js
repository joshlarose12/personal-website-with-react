import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" className="navbar-expand-sm fixed-top">
      <Navbar.Brand as={Link} to="/home">
        Joshua LaRose
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
