import React from "react";
import { Col, Row } from "react-bootstrap";
import { usePostData } from "../hooks/usePostData";
import "./../styles/Post.css";

export default function Post() {
  const postId = 1;
  const { data, isError, error } = usePostData(postId);
  console.log(data);
  console.log(error);

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <Row>
      <Col className="mt-4 post">
        <div
          className="image"
          style={{ backgroundImage: `url("https://picsum.photos/1200")` }}
        />
        <h2>{data?.data.title}</h2>
        <p>{data?.data.body}</p>
      </Col>
    </Row>
  );
}
