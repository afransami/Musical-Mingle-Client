import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "success.",
            text: "You have successfully logged in!",
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider text-white">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-circle text-3xl bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 shadow-xl"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-outline btn-circle text-3xl bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 shadow-xl">
          <FaFacebook></FaFacebook>
        </button>
        <button className="btn btn-outline btn-circle text-3xl bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 shadow-xl">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
