import React from "react";
import { Card, Col } from "react-bootstrap";
import { useUserAlbums } from "../hooks/useUserAlbums";
import Preloader from "../utils/Preloder";

export default function UserAlbums({ userId }) {
  const { data, isLoading, isError, error } = useUserAlbums(userId);
  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <h2>{error.meesage}</h2>;
  }
  console.log(data.data);
  return (
    <>
      <h2>All Albums</h2>
      {data.data.map((album) => {
        return (
          <Col key={album.id} className="mt-2 mb-2 p-4" lg={3} md={4} sm={6}>
            <Card>
              <Card.Title>{album.title}</Card.Title>
              {/* <UserAlbum albumId={album.id} /> */}
            </Card>
          </Col>
        );
      })}
    </>
  );
}
