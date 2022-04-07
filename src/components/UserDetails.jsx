import React from "react";
import { Col, Row } from "react-bootstrap";
import { useUserData } from "../hooks/useUserData";
import Preloader from "../utils/Preloder";
import "./../styles/UserDetails.css";

export default function UserDetails({ userId }) {
  const { data, isError, error, isLoading } = useUserData(userId);

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Col className="userDetails">
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
                className="anyLink"
                style={{ color: "rgba(0, 0, 255, 0.75)" }}
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
  );
}
