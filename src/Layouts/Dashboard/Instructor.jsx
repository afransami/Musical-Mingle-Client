import React from 'react';

const Instructor = () => {
    return (
        <>
        <li>
          <NavLink
            to="/dashboard/addAClass"
            className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
          >
            <FaUserCog></FaUserCog>
            Add a Class
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myClasses"
            className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
          >
            <FaUserCog></FaUserCog>
            My Classes
          </NavLink>
        </li>
    </>
    );
};

export default Instructor;