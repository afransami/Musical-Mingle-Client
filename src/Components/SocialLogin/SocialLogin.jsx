import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { saveUser } from "../../api/auth";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleGoogleLogin = () => {   
      googleSignIn()
        .then(result => {
          console.log(result.user)
          
          saveUser(result.user)
          toast.success('Successfully login!')
          navigate(from, { replace: true })
        
        })

      };

  return (
    <div>
      <div className="divider text-white">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
       
        <button  onClick={handleGoogleLogin} className="btn btn-outline btn-warning border-0 border-b-4 mt-4  bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110 text-3xl">
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaFacebook></FaFacebook>
        </button>
        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
