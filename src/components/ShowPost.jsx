import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { usePostData } from "../hooks/usePostData";
import "./../styles/ShowPost.css";
import Comments from "./Comments";

export default function Post() {
  const [usersList, setUsersList] = useState([]);
  const { postId } = useParams();
  const { data, isError, error } = usePostData(postId);
  useEffect(() => {
    const usersListData = () =>
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        const usersDetails = res.data;
        setUsersList(usersDetails);
      });
    usersListData();
  }, []);

  const users = usersList?.map((user) => {
    return user.name;
  });

  if (isError) {
    return <h2>{error}</h2>;
  }
  const userId = data?.data.userId;

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
          <h2>{data?.data.title}</h2>
          <p>{data?.data.body}</p>
        </Col>
      </Row>
      <Comments postId={postId} />
    </>
  );
}
