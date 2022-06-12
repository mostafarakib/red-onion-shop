import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="not_found-container">
        <span>404</span>
        <h3>Oops! page not found</h3>
        <p>The page you requested cannot be found</p>
        <Link to="/">Return to the Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
