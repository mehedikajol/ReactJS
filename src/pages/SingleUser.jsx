import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserAlbums from "../components/UserAlbums";
import UserDetails from "../components/UserDetails";
import UserPosts from "../components/UserPosts";
import UserTodos from "../components/UserTodos";

export default function SingleUser() {
  const { userId } = useParams();

  return (
    <>
      <Row className="singleUser">
        <UserDetails userId={userId} />
      </Row>
      <Row className="mt-4">
        <UserAlbums userId={userId} />
      </Row>
      <Row className="mt-4">
        <UserTodos userId={userId} />
      </Row>
      <Row className="mt-4">
        <UserPosts userId={userId} />
      </Row>
    </>
  );
}
