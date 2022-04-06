import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../src/styles/Header.css";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container className="header">
        <Navbar.Brand>
          <Link className="anyLink" to="/">
            USER PLACEHOLDER
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link className="anyLink menuLink" to="/">
              Home
            </Link>
            <Link className="anyLink menuLink" to="/users">
              Users
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
