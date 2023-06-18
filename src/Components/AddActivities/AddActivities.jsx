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
    // const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    // const instructorImage = form.instructorImage.value;
    const availableSeats = form.availableSeats.value;
    const subCategory = form.subCategory.value;
    const status = form.status.value;
    const price = form.price.value;

    
    const classImage = form.classImage.files[0];
    const formData = new FormData ()
    formData.append("image", classImage)

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_apiKey}`      
    fetch(url, {
    method:'POST',
    body: formData
    })
    .then (res => res.json())
    .then(imgData => {

    const imageUrl = imgData.data.display_url       
    console.log(imageUrl);
    });

    const uploadForm = {
      className,
      classImage,
      instructorName,
      instructorEmail,
      instructorImage,
      availableSeats,
      subCategory,
      status,
      price,      
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
              <span className="label-text text-white">Class name <span className="text-red-500">*</span></span>
            </label>
            <input
              type="text"
              required
              name="className"
              placeholder="Class name"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Class Image <span className="text-red-500">*</span></span>
            </label>
            <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs text-black"
            name="classImage"
            required 
            placeholder="Class Image"/>         
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Instructor name <span className="text-red-500">*</span></span>
            </label>
            <input
              type="text"
              required
              defaultValue={user?.displayName}
              readOnly
              name="instructorName"
              placeholder="Instructor name"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Instructor Email <span className="text-red-500">*</span></span>
            </label>
            <input
              type="email"
              name="instructorEmail"
              defaultValue={user?.email}
              readOnly
              required
              placeholder="Instructor Email"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Available seats <span className="text-red-500">*</span></span>
            </label>
            <input
              type="number"
              name="availableSeats"
              placeholder="Available Seats"
              required
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price <span className="text-red-500">*</span></span>
            </label>
            <input
              type="number"
              name="price"
              required
              placeholder="Price"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">status <span className="text-red-500">*</span></span>
            </label>
            <input
              type="text"
              name="status"
              required
              readOnly
              defaultValue={"pending"}
              placeholder="pending"
              className="input input-bordered text-black"
            />
          </div>

          <div className="form-control w-full max-w-xs">
          <label className="label">
              <span className="label-text text-white">Category <span className="text-red-500">*</span></span>
            </label>
            <select
              className="input input-bordered text-black"
              type="text"
              required
              name="subCategory"             
            >              
              <option disabled> </option>      
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
