import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    setIsAuthenticated(false);
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have successfully log out!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  const NavMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <span>
            <img className="border-4 btn-circle " src={user?.photoURL} />
          </span>
          <span className="flex justify-center items-center mx-4 ">
            {user?.displayName}
          </span>
          <span className="flex justify-center items-center">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110"
            >
              Log out
            </button>{" "}
          </span>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30  flex justify-between h-16 mx-auto container">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  shadow-xl rounded-box w-52 items-center justify-between flex"
          >
            {NavMenu}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 uppercase font-extrabold tracking-widest mx-auto text-center">
          <Link>
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/YWZdQWV/Musical-Mingle-logo-removebg-preview.png"
              alt=""
            />
          </Link>
          <Link>
            <p className="scale-125 text-sm font-serif font-">Musical</p>
            <p className="scale-150 text-sm font-extralight font-serif">
              Mingle
            </p>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex items-center justify-between">
        <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
