import React from "react";
import { useUserData } from "../hooks/useUserData";

export default function User() {
  const userId = 1;
  const { data, isError, error } = useUserData(userId);
  console.log(data);
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h1>Personal Details</h1>
      <h2>Name: {data?.data.name}</h2>
      <h3>Username: {data?.data.user}</h3>
      <h4>Email: {data?.data.email}</h4>
      <h4>Phone: {data?.data.phone}</h4>
      <br />
      <h1>Professional Details</h1>
      <h3>Company name: {data?.data.company.name}</h3>
      <br />
      <h1>Address</h1>
      <p>Suite: {data?.data.address.suite}</p>
      <p>Street: {data?.data.address.street}</p>
      <p>
        City: {data?.data.address.city} - {data?.data.address.zipcode}
      </p>
    </>
  );
}
