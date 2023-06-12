import React from 'react';

const Admin = () => {
    return (
            <>
              <li>
                <NavLink
                  to="/dashboard/home"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaBookReader></FaBookReader> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaUserCog></FaUserCog>
                  Manage Users
                </NavLink>
              </li>
            </>
    );
};

export default Admin;