import React from "react";
import { Button, Card } from "react-bootstrap";
import { usePostData } from "../hooks/usePostData";
import Preloader from "../utils/Preloder";
import "./../styles/Post.css";

export default function Post({ postId }) {
  const { isLoading, data, isError, error } = usePostData(postId);

  if (isError) {
    return <h2>{error}</h2>;
  }
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Card.Body className="post">
      <div
        className="imageBack mb-2"
        style={{
          backgroundImage: `url("https://picsum.photos/600/350")`,
        }}
      />
      <Card.Title className="postTitle">{data?.data.title}</Card.Title>
      <Card.Text className="postBody">{data?.data.body}</Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  );
}
