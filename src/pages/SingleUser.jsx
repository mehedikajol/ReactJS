import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
    <Row className="singleUser">
      <Col>
        <h1 className="text-center">Personal Details</h1>
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
          <span>Website:</span> {data?.data.website}
        </h4>
        <br />
        <h1 className="text-center">Professional Details</h1>
        <h3 className="company">
          <span>Comapany Name:</span> {data?.data.company.name}
        </h3>
        <br />
        <h1 className="text-center">Address</h1>
        <p className="address">
          {data?.data.address.suite}, {data?.data.address.street}, City:{" "}
          {data?.data.address.city}
        </p>
        <p className="address">Zipcode: {data?.data.address.zipcode}</p>
      </Col>
    </Row>
  );
}
