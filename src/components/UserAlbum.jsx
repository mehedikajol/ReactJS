import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useUserAlbum } from "../hooks/useUserAlbum";
import Preloader from "../utils/Preloder";
import "./../styles/UserAlbum.css";

export default function UserAlbum() {
  const { albumId } = useParams();
  const { data, isLoading } = useUserAlbum(albumId);

  if (isLoading) {
    return <Preloader />;
  }

  console.log(data);
  return (
    <div className="userAlbum">
      <h2>Single Album</h2>
      <Row>
        {data?.data.map((photo) => {
          return (
            <Col className="my-2" lg={2} md={3} sm={4} xs={6} key={photo.id}>
              <div
                className="userAlbumBg"
                style={{
                  backgroundImage: `url(${photo.url})`,
                }}
              >
                <h2 className="usersAlbumTitle">{photo.title}</h2>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
