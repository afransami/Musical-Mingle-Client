import React from 'react';

const Student = () => {
    return (
        <>
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
    );
};

export default Student;