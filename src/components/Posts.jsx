import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { usePostsData } from "../hooks/usePostsData";
import "../styles/Posts.css";
import Preloader from "../utils/Preloder";

export default function Posts() {
  const { data, isLoading } = usePostsData();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Row>
      <h2>Posts Details</h2>
      {data.data.map((post) => {
        return (
          <Col className="mt-2 mb-2" lg={3} md={4} sm={6}>
            <Card>
              <div className="posts" key={post.id}>
                <Card.Body>
                  <Card.Img src="https://via.placeholder.com/600x350" />

                  <Card.Title className="postsTitle">{post.title}</Card.Title>
                  <Card.Text className="postsBody">{post.body}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
