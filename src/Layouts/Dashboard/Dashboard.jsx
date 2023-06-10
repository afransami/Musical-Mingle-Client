import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaBook, FaBookReader, FaHome, FaUserCog, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import { useInstructor } from "../../Hooks/useInstructor";
import { useStudent } from "../../Hooks/useStudent";
import Loader from "../../Home/Shared/Loader/Loader";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isInstructor, isInstructorLoading] = useInstructor(user?.email);
  const [isStudent, isStudentLoading] = useStudent(user?.email);

  if (isAdmin && isAdminLoading) {
    return <Loader />;
  }
  if (isInstructor && isInstructorLoading) {
    return <Loader />;
  }
  if (isStudent && isStudentLoading) {
    return <Loader />;
  }

  return (
    <div className="drawer lg:drawer-open ">
      <Helmet>
        <title>Musical Mingle | Dashboard</title>
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full w-80 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">
          {/* <!-- Sidebar content here --> */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageClasses" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
                  <FaBookReader></FaBookReader> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
                  <FaUserCog></FaUserCog>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : undefined}

          {isInstructor ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/addAClass" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
                  <FaUserCog></FaUserCog>
                  Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
                  <FaUserCog></FaUserCog>
                  My Classes
                </NavLink>
              </li>
            </>
          ) : undefined}

          {isStudent ? (
            <>
              {" "}
              <li>
                <NavLink
                  to="/dashboard/studentsclasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaUserCog></FaUserCog>
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaUserCog></FaUserCog>
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaWallet></FaWallet>
                  Payment History
                </NavLink>
              </li>
            </>
          ) : undefined}

          <p className="divider"></p>

          <li>
            <NavLink to="/" className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
