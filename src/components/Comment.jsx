import React from "react";
import "../styles/Comment.css";

export default function Comment(props) {
  const { name, email, body } = props.comment;
  return (
    <div className="comment">
      <div className="commentPicture">
        <img
          className="commnetPic"
          src="https://picsum.photos/200/200"
          alt="Profile Pic"
        />
      </div>
      <div className="commentDetails">
        <h4>
          <span>Name:</span> {name}
        </h4>
        <h5>
          <span>Email:</span> {email}
        </h5>
        <p>
          <span>Says:</span> {body}
        </p>
      </div>
    </div>
  );
}
