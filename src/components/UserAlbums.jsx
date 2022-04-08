import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAlbums } from "../hooks/useUserAlbums";
import Preloader from "../utils/Preloder";
import "./../styles/UserAlbums.css";

export default function UserAlbums({ userId }) {
  const { data, isLoading, isError, error } = useUserAlbums(userId);

  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <h2>{error.meesage}</h2>;
  }

  return (
    <>
      <h2>All Albums</h2>
      <div className="userAlbums ">
        {data.data.map((album) => {
          return (
            <Col
              key={album.id}
              className="mt-2 mb-2 p-2"
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Link className="anyLink" to={`/albums/${album.id}`}>
                <Card className="albumsCard w-100">
                  <Card.Title className="albumsTitle d-block">
                    {album.title}
                  </Card.Title>
                </Card>
              </Link>
            </Col>
          );
        })}
      </div>
    </>
  );
}
