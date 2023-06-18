import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

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
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('Successfully login!')
      reset();
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-bg hero min-h-screen  ">
      <Helmet>
        <title>Musical Mingle | Login</title>
      </Helmet>
      <div className=" grid lg:grid-cols-2 w-auto items-center ">
        <Player
          autoplay
          loop
          src="../../../src/assets/38435-register.json"
          // style={{ height: '300px', width: '300px' }}
          className="w-auto"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="card flex-shrink-0 bg-gradient-to-r from-neutral-600 via-cyan-600 to-neutral-600 shadow-xl bg-opacity-30">
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  className="input input-bordered text-black"
                />
                {errors.email && (
                  <span className="text-yellow-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative ">
                <label className="label ">
                  <span>Password</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="input  input-bordered text-black"
                />
                <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-14 right-4 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <FaEye className="w-5 h-5"></FaEye>
                    ) : (
                      <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                    )}
                  </button>

                {errors.password?.type === "required" && (
                  <p className="text-yellow-500" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-yellow-500" role="alert">
                    password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-yellow-500" role="alert">
                    password must be at least 1 uppercase or letter case
                  </p>
                )}
              </div>

              {/* <p className="font-bold text-yellow-500 text-xl"></p> */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-600 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-xl hover:scale-110"
                  type="submit"
                  value="Login"
                />
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center mt-5 font-semibold">
                New to Musical Mingle? Please{" "}
                <Link className="font-bold text-yellow-500" to="/register">
                  signUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
