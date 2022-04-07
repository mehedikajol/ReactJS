import React from "react";
import { Card } from "react-bootstrap";
import { useAlbum } from "../hooks/useAlbum";
import Preloader from "../utils/Preloder";

export default function UserAlbum({ albumId }) {
  const { data, isLoading } = useAlbum(albumId);

  if (isLoading) {
    return <Preloader />;
  }

  //console.log(data?.data);
  return (
    <Card.Body>
      {data?.data.map((album) => {
        return (
          <Card.Title key={album.id} className="todoTitle">
            {album.title}
          </Card.Title>
        );
      })}
    </Card.Body>
  );
}
