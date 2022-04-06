import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Col className="mt-2 mb-2" lg={4} md={6} sm={6}>
            <Card>
              <div className="posts" key={post.id}>
                <Link className="anyLink" to={`/posts/${post.id}`}>
                  <Card.Body>
                    <Card.Img src="https://picsum.photos/600/350" />
                    <Card.Title className="postsTitle">{post.title}</Card.Title>
                    <Card.Text className="postsBody">{post.body}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Link>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
