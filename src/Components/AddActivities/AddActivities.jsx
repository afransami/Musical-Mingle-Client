import React, { useContext } from "react";

import { Form } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddActivities = () => {
  const { user } = useContext(AuthContext);

  const handleUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorImage = form.instructorImage.value;
    const availableSeats = form.availableSeats.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;

    const uploadForm = {
      className,
      classImage,
      instructorName,
      instructorEmail,
      instructorImage,
      availableSeats,
      subCategory,
      price,
    };
    console.log(uploadForm);

    fetch("https://music-shcool-server.vercel.app/class", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadForm),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
    Swal.fire({
      title: "success!",
      text: "You have added a Toy Successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div className="card-body">
      <h1 className="mb-10 text-5xl text-center font-bold uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110"> Upload Class Details </h1>

      <Form onSubmit={handleUpload}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Class name"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="url"
              name="classImage"
              placeholder="Class Image"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="instructorName"
              placeholder="Instructor name"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              name="instructorEmail"
              defaultValue={user?.email}
              readOnly
              placeholder="Instructor Email"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Image</span>
            </label>
            <input
              type="url"
              name="instructorImage"
              placeholder="Instructor Image"
              className="input input-bordered text-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>
            <input
              type="number"
              name="availableSeats"
              placeholder="Available Seats"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered text-black"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <select
              className="input input-bordered text-black"
              type="text"
              name="subCategory"
              placeholder="Sub Category"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Country</option>
              <option>Reggae</option>
              <option>Blues</option>
            </select>
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-xl hover:scale-110"
            type="submit"
            value="Upload confirm"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddActivities;
