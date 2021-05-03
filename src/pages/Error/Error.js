import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../../images/undraw_not_found_60pq.svg";
import "./Error.css";

const Error = () => {
  return (
    <div className="err">
      <img
        style={{ height: "60vh", width: "35vw" }}
        src={errorimg}
        alt="404 error"
      />
      <h2>Page Not Found.</h2>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
