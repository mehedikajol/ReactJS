import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer bg-primary text-light py-4">
      <Container>
        <Row>
          <Col>JSON-Placeholder &copy; 2022 || ALL RIGHTS RESERVED</Col>
        </Row>
      </Container>
    </div>
  );
}
