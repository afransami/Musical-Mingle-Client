import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const Admin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success (`${user.name} is an instructor Now!`)
        }
      });
  };


  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success (`${user.name} is an instructor Now!`)         
        }
      });
  };


  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success (`${user.name} has been deleted from his role!`)              
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Musical Mingle | Manage Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto text-center mx-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr className="text-lg text-center font-bold uppercase btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin" 
                  ) : (
                    <div className="flex gap-4 justify-center items-center">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="tooltip btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-white btn-xs w-12 h-12 text-2xl" data-tip="Make admin"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                      {user.role === "instructor" ? (
                        "instructor" 
                      ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}                                                
                        className="tooltip btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-white btn-xs w-12 h-12 text-2xl" data-tip="Make instructor"
                      >
                        <FaChalkboardTeacher></FaChalkboardTeacher>
                      </button>
                      )}
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="tooltip btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-white btn-xs w-12 h-12 text-2xl" data-tip="Delete user"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
