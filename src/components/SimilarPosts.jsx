import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./../styles/SimilarPosts.css";
import Post from "./Post";

export default function SimilarPosts() {
  const randomPosts = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ];
  console.log(randomPosts);
  return (
    <div>
      <Container>
        <h2 className="mt-4 mb-2">You my also like: </h2>
        <Row>
          {randomPosts.map((randomPost) => {
            return (
              <Col key={randomPost} className="mt-2 mb-2" lg={4} md={6} sm={6}>
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
