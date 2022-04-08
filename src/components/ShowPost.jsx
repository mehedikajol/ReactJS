import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { usePostData } from "../hooks/usePostData";
import { useUsersList } from "../hooks/useUsersList";
import "./../styles/ShowPost.css";
import Preloader from "./../utils/Preloder";
import Comments from "./Comments";
import SimilarPosts from "./SimilarPosts";

export default function Post() {
  const { postId } = useParams();
  const { data: post, isLoading, isError, error } = usePostData(postId);
  const { data: users } = useUsersList();
  const userId = post?.data.userId;

  if (isLoading) {
    return <Preloader />;
  }

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
          <p className="author">
            <span>Author:</span>{" "}
            <Link className="anyLink" to={`/users/${userId}`}>
              {users[userId - 1]}
            </Link>
          </p>
          <h2>{post?.data.title}</h2>
          <p>{post?.data.body}</p>
        </Col>
      </Row>
      <Comments postId={postId} />
      <SimilarPosts />
    </>
  );
}
