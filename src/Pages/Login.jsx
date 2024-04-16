import Lottie from "lottie-react";
import React, { useContext, useRef, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import anim from "/src/assets/loginpage.json";
import { useForm } from "react-hook-form";
import Button from "../Components/Button/Button";
import SocialLogin from "../Shared/SocialLogin";
import { authContext } from "../ContextProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RouteTitle from "../utilities/RouteTitle";
import { router } from "../Router/Router";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  RouteTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: "/" } };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { emailPasswordSignIn } = useContext(authContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailPasswordSignIn(data.email, data.password)
      .then((res) => {
        toast("Successfully Log in");
        navigate(from, { replace: true });
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div className="lg:px-28 px-5">
      <section className="lg:flex  gap-10 lg:justify-center lg:items-center divide-x-4 divide-teal-600 ">
        <div className="lg:w-[60%]">
          <Lottie animationData={anim}></Lottie>
        </div>
        <div className="lg:w-[40%] pl-5 space-y-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <label className=" font-medium">Email*</label>
              <input
                type="email"
                name="email"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2 relative">
              <label className=" font-medium">Password*</label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <div className="absolute top-9 right-3">
                {isPasswordVisible ? (
                  <FaEyeSlash
                    className="text-black"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <FaRegEye
                    className="text-green-700"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </div>
            </div>
            <Button>Submit</Button>
          </form>
          <SocialLogin />
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-teal-600">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
