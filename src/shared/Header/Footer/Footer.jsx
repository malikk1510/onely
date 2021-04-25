import React, { useEffect } from "react";

const Footer = () => {
  return (
    <div
      className="card text-center"
      style={{ position: "absolute", left: "0", bottom: "0", right: "0" }}
    >
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Footer;
