import React from "react";
import { Helmet } from "react-helmet-async";
import { FaBook, FaBookReader, FaHome, FaUserCog} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";




const Dashboard = () => {
    // const [isAdmin] =useAdmin()
    

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden "
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full w-60 bg-yellow-600">
          {/* <!-- Sidebar content here --> */}

            {/* { isAdmin? ( */}
            <>
            <li>
                <NavLink to="/dashboard/home" className="uppercase">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>              
              
              <li>
                <NavLink to="/dashboard/manageClasses" className="uppercase">
                <FaBookReader></FaBookReader> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers" className="uppercase">
                <FaUserCog></FaUserCog>
                  Manage Users
                </NavLink>
              </li>
            </>                        
           {/* ) : (
          " "
            )}                     */}
           
          <p className="divider"></p>
         
         <li>
            <NavLink to="/" className="uppercase">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
                <NavLink to="/dashboard/addActivities" className="uppercase">
                <FaBookReader></FaBookReader> User Form
                </NavLink>
              </li>
          <li>
            <NavLink to="/classes" className="uppercase">
            <FaBook></FaBook> Classes
            </NavLink>
          </li>          
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
