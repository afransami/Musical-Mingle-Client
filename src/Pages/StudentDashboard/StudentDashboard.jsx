// import React, { useEffect, useState } from "react";
import { FaPaypal, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useClassDelete from "../../Hooks/useClassDelete";

const StudentDashboard = () => {
  const [cart, refetch] = useClassDelete();

  const handleDelete = (selectClass) => {
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
        fetch(`http://localhost:5000/class/${selectClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="text-center w-2/3">
      <h1 className="mb-10 text-3xl text-center font-bold uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
        My Selected Classes
      </h1>
      <div className="overflow-x-auto w-full text-center">
        <table className="table w-full text-center">
          {/* head */}
          <thead className="w-2/3">
            <tr className="text-lg text-center font-bold uppercase btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((selectClass, index) => (
              <tr key={selectClass._id} className="text-xl">
                <td>{index + 1}</td>
                <td>
                  <img
                    className="mask mask-squircle w-20 h-20"
                    src={selectClass.classImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </td>
                <td>{selectClass.className}</td>
                <td className="text-end">$ {selectClass.price}</td>
                <td className="gap-4 flex justify-center">
                  <button
                    onClick={() => handleDelete(selectClass)}
                    className="btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-white btn-xs w-12 h-12 text-2xl"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                  <button
                    onClick={() => handlePay(selectClass)}
                    className="btn btn-outline btn-warning border-0 border-b-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-white btn-xs w-12 h-12 text-2xl"
                  >
                    <FaPaypal></FaPaypal>
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

export default StudentDashboard;
