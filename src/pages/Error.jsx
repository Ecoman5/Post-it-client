import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="container mt-5 ">
      <h2 className="blue-text fw-bold text-center text-danger">
        Oops, Something Went Wrong
      </h2>
      <img
        className="d-block my-3 mx-auto img-fluid"
        style={{ height: "400px", objectFit: "cover" }}
        src="https://cdn.dribbble.com/userupload/2641500/file/original-b2b4da3f25a13ff275d03cd646d1fec3.png?resize=1200x900"
        alt="error 404"
      />
      <button className="d-block my-3 mx-auto w-auto  py-1 border-0">
        <Link
          to="/"
          className="text-decoration-none fs-5 fw-medium p-3 text-danger"
        >
          Back To Homepage
        </Link>
      </button>
    </div>
  );
};

export default Error;
