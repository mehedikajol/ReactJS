import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserAlbums from "../components/UserAlbums";
import UserPosts from "../components/UserPosts";
import UserTodos from "../components/UserTodos";
import { useUserData } from "../hooks/useUserData";
import Preloader from "../utils/Preloder";
import "./../styles/SingleUser.css";

export default function SingleUser() {
  const { userId } = useParams();
  const { data, isError, error, isLoading } = useUserData(userId);

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Row className="singleUser">
        <Col>
          <h1 className="text-center">Personal Details</h1>
          <Row>
            <Col lg={3} md={4} sm={6} className="px-4">
              <div className="userImage">
                <img src="https://picsum.photos/300" alt="Profile Pic" />
              </div>
            </Col>
            <Col lg={9} md={8} sm={6} className="align-self-center">
              <div className="userDetailName">
                <h2 className="name">
                  <span>Name:</span> {data?.data.name}
                </h2>
                <h3 className="username">
                  <span>Username:</span> {data?.data.username}
                </h3>
                <h4 className="emailPhone">
                  <span>Email:</span> {data?.data.email}
                </h4>
                <h4 className="emailPhone">
                  <span>Phone:</span> {data?.data.phone}
                </h4>
                <h4 className="emailPhone">
                  <span>Website:</span>{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href={`https://www.${data?.data.website}`}
                    rel="noreferrer"
                  >
                    {data?.data.website}
                  </a>
                </h4>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={6} className="align-self-center text-center">
              <h2>Professional Details</h2>
              <h3 className="company">
                <span>Comapany Name:</span> {data?.data.company.name}
              </h3>
            </Col>
            <Col sm={6} className="align-self-center text-center">
              <h2>Address</h2>
              <p className="address">
                {data?.data.address.suite}, {data?.data.address.street}, City:{" "}
                {data?.data.address.city}
              </p>
              <p className="address">Zipcode: {data?.data.address.zipcode}</p>
            </Col>
          </Row>
        </Col>
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
