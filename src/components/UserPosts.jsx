import React from "react";
import { Card, Col } from "react-bootstrap";
import { useUserPosts } from "../hooks/useUserPosts";
import Preloader from "../utils/Preloder";
import Post from "./Post";

export default function UserPosts({ userId }) {
  const { isLoading, data, isError, error } = useUserPosts(userId);

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2 className="mt-4">Posts by this user:</h2>
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
    </>
  );
}
