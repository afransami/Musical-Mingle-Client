import React, { useContext } from 'react';

import { Form } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddActivities = () => {
    const { user } = useContext(AuthContext);

    const handleUpload = (event) => {
      event.preventDefault();
      const form = event.target;
      const className = form.className.value;
      const classImage = form.classImage.value;
      const instructorName = form.instructorName.value;
      const instructorEmail = form.instructorEmail.value;
      const availableSeats = form.availableSeats.value;
      const subCategory = form.subCategory.value;
      const price = form.price.value;

  
      const uploadForm = {
        className,
        classImage,
        instructorName,
        instructorEmail,
        availableSeats,
        subCategory,
        price       
      };
      console.log(uploadForm);
  
      fetch("http://localhost:5000/class", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(uploadForm),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
        form.reset()
      Swal.fire({
        title: "success!",
        text: "You have added a Toy Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    };


    return (
        <div className="card-body">
      <h1 className="text-5xl text-center font-bold"> Upload Class Details </h1>

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
            className="btn btn-block btn-outline btn-info"
            type="submit"
            value="Upload confirm"
          />
        </div>
      </Form>
    </div>
    );
};

export default AddActivities;