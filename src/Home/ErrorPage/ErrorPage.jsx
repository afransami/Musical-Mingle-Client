import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img
        src="https://i.ibb.co/8D5x5Jq/page-not-found-erro-404.jpg"
        alt=""
      />

      <Link to="/">
        <button className="btn btn-outline bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 my-10">Go To Homepage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;