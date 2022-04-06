import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../src/styles/Header.css";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container className="header">
        <Navbar.Brand>
          <Link className="menuLink" to="/">
            USER PLACEHOLDER
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="menuLink" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="menuLink" to="/post">
                Post
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="menuLink" to="user">
                User
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
