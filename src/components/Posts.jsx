import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { usePostsData } from "../hooks/usePostsData";
import "../styles/Posts.css";
import Preloader from "../utils/Preloder";
import Post from "./Post";

export default function Posts() {
  const { data, isLoading } = usePostsData();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Row>
      <h2>All Posts</h2>
      {data.data.map((post) => {
        return (
          <Col key={post.id} className="mt-2 mb-2" lg={4} md={6} sm={6}>
            <Card>
              <div className="posts">
                <Post postId={post.id} />
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
