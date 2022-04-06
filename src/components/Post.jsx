import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { usePostData } from "../hooks/usePostData";
import "./../styles/Post.css";
import Comments from "./Comments";

export default function Post() {
  const { postId } = useParams();
  const { data, isError, error } = usePostData(postId);
  console.log(data);
  console.log(error);

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Row>
        <Col className="mt-4 post">
          <div
            className="image"
            style={{ backgroundImage: `url("https://picsum.photos/1200/500")` }}
          />
          <h2>{data?.data.title}</h2>
          <p>{data?.data.body}</p>
        </Col>
      </Row>
      <Comments postId={postId} />
    </>
  );
}
