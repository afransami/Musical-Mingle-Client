import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(" ");

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    createUser(data.email, data.password, data.photURL).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setError("");

      updateUserProfile(data.name, data.photURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          };
          fetch("https://music-shcool-server.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate(from, { replace: true });
                navigate("/");
              }
            });
        })
        .catch((error) => console.error(error.message));
      setError(error.message);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-bg hero min-h-screen ">
      <Helmet>
        <title>Musical Mingle | Sign Up</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 w-2/3 items-center">
        <div className="card flex-shrink-0 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 shadow-xl bg-opacity-30">
          <h1 className="text-4xl p-5 font-bold">Sign Up!</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  {...register("name", { required: true })}
                  className="text-black w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block mb-1">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  {...register("image", { required: "Please select an image" })}
                  className="w-full"
                  // onChange={handleImageChange}
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  className="text-black w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                    })}
                    className="text-black w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500" role="alert">
                      password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500" role="alert">
                      password must be at least 1 uppercase case and Password
                      must contain at least one special character
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-2 text-gray-400 "
                  >
                    {showPassword ? (
                      <FaEye className="w-5 h-5"></FaEye>
                    ) : (
                      <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword", { required: true })}
                    className="text-black w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-2 right-2 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <FaEye className="w-5 h-5"></FaEye>
                    ) : (
                      <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500">Confirm Password is required</p>
                )}
              </div>

              <p className="font-bold text-red-500 text-xl"></p>
              <div className="form-control ">
                <input
                  className="btn btn-outline bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 shadow-xl bg-opacity-30 border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center mt-5 font-semibold ">
                Already have an account? Please
                <Link className="text-green-600 font-bold" to="/login">
                  <span className="text-yellow-500"> Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
