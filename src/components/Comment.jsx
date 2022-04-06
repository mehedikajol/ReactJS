import React from "react";

export default function Comment(props) {
  const { name, email, body } = props.comment;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4>Username: {name}</h4>
          <h5>Email: {email}</h5>
          <p>Says: {body}</p>
        </div>
      </div>
    </div>
  );
}
