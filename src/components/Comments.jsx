import React from "react";
import { Col, Row } from "react-bootstrap";
import { usePostCommnets } from "../hooks/usePostComments";
import "../styles/Comments.css";
import Comment from "./Comment";

export default function Comments({ postId }) {
  const { data } = usePostCommnets(postId);
  return (
    <Row>
      <Col className="mt-2 comments">
        <h2>What people says about this photo: </h2>
        {data?.data.map((comment) => {
          return (
            <div key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </Col>
    </Row>
  );
}
