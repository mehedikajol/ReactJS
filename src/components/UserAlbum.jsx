import "photoswipe/dist/default-skin/default-skin.css";
import "photoswipe/dist/photoswipe.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
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
        <Gallery>
          {data?.data.map((photo) => {
            return (
              <Col className="my-2" lg={2} md={3} sm={4} xs={6} key={photo.id}>
                <Item
                  original={photo.url}
                  thumbnail={photo.thumbnailUrl}
                  width="1024"
                  height="500"
                >
                  {({ ref, open }) => (
                    <img
                      className="photoItem"
                      ref={ref}
                      onClick={open}
                      src={photo.url}
                      alt="This is one"
                    />
                  )}
                </Item>
              </Col>
            );
          })}
        </Gallery>
      </Row>
    </div>
  );
}
