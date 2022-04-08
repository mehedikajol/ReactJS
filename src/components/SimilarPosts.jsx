import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./../styles/SimilarPosts.css";
import Post from "./Post";

export default function SimilarPosts() {
  const RandomPosts = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ];

  return (
    <div>
      <Container>
        <h2 className="mt-4 mb-2">You my also like: </h2>
        <Row>
          {RandomPosts.map((randomPost) => {
            return (
              <Col className="mt-2 mb-2" lg={4} md={6} sm={6}>
                <Card>
                  <div className="posts">
                    <Post postId={randomPost} />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
