import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AddInstructor = () => {
  const { user } = useContext(AuthContext);

  const handleUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const instructorImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
  

    const uploadForm = {
      instructorImage,
      instructorName,
      instructorEmail,
    };
    console.log(uploadForm);

    fetch("https://music-shcool-server.vercel.app/instructor", {
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
      <h1 className="text-5xl text-center font-bold"> Upload Class Details </h1>

      <Form onSubmit={handleUpload}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110"
            type="submit"
            value="Upload confirm"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddInstructor;
