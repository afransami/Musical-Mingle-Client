import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>      
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 container flex justify-between px-10 h-16">
      {/* <div><div className="navbar bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl flex">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="text-center decoration-none">{NavMenu}</div>
   
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div></div> */}

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
            className="menu menu-compact dropdown-content mt-3 p-2 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  shadow-xl rounded-box w-52"
          >
            {NavMenu}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 uppercase font-extrabold tracking-widest mx-auto text-center">          
          <Link><img className="w-20 h-20" src="https://i.ibb.co/YWZdQWV/Musical-Mingle-logo-removebg-preview.png" alt="" /></Link>
          <Link>
            <p className="scale-125 text-sm font-serif font-">Musical</p>
            <p className="scale-150 text-sm font-extralight font-serif">
              Mingle
            </p>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
      </div>    


     
          
            
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/YWZdQWV/Musical-Mingle-logo-removebg-preview.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        
            
       
        
     



      {/* <div className="dropdown dropdown-end ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.ibb.co/YWZdQWV/Musical-Mingle-logo-removebg-preview.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
