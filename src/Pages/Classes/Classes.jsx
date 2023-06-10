import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const Classes = ({item}) => {
    console.log({item});
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const { className, classImage, instructorName, availableSeats, price, _id } =cart;

  const handleAddClass = () => {
    if (user && user.email) {
      const classItem = {
        menuItemId: _id,
        className,
        classImage,
        instructorName,
        availableSeats,
        price,
        email: user.email,
      };

      fetch("http://localhost:5000/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Class booked successfully:", data);
          if (data.insertedId) {
            refetch(); 
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added on the list.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div data-aos="fade-left">
        <p className="mt-20 text-5xl font-semibold text-center">
          <span className="text-yellow-400 underline text-center">All</span>{" "}
          Classes
        </p>
      </div>
      <div data-aos="fade-right">
        <p className="mt-10 text-2xl w-1/2 mx-auto text-justify font-semibold">
          Popular musical classes provide a structured and guided learning
          environment for students to develop their musical skills, express
          their creativity, and pursue their passion for music. They are often
          offered by music schools, conservatories, community centers, and
          private instructors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {cart.map((item) => (
          <div
            key={item._id}
            data-aos="fade-down"
            
          >
            <div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110">
              <figure>
                <img
                  className="h-[270px] w-full"
                  src={item.classImage}
                  alt="picture"
                />
              </figure>

              <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
                <h2 className="card-title">Music Genre: {item.className}</h2>
                <p className="text-md">
                  Instructor Name: {item.instructorName}
                </p>
                <p className="text-md">
                  Available Seats: {item.availableSeats}
                </p>
                <p className="text-md">Available Price: $ {item.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleAddClass}
                    className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;

{
  /* <Classes key={item._id} item={item}></Classes> */
}
{
  /* <div data-aos="fade-down">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          <div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110">
            <figure>
              <img
                className="h-[270px] w-full"
                src={classImage}
                alt="picture"
              />
            </figure>

            <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
              <h2 className="card-title">Music Genre: {className}</h2>
              <p className="text-md">Instructor Name: {instructorName}</p>
              <p className="text-md">Available Seats: {availableSeats}</p>
              <p className="text-md">Available Price: $ {price}</p>
              <div className="card-actions justify-end">
                <button
                 onClick={() => handleAddClass(item)}
                  className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
