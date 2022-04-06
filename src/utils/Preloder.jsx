import React from "react";
import "../styles/Preloader.css";

export default function Preloader() {
  return (
    <div className="loader-bg">
      <h3>Loading...</h3>
      <div className="loader">
        <span></span>
      </div>
    </div>
  );
}
