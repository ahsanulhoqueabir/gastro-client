import Lottie from "lottie-react";
import React, { useContext, useRef, useState } from "react";
import anim from "/src/assets/loginpage.json";
import { useForm } from "react-hook-form";
import Button from "../Components/Button/Button";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../ContextProvider/AuthProvider";
import RouteTitle from "../utilities/RouteTitle";
const SignUp = () => {
  const navigate = useNavigate();
  RouteTitle("Sign Up");
  const { signUpewithemail, profileUpdate } = useContext(authContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const confirmPassword = watch("repassword");
  // A@#Ahsanul
  const validatePassword = (value) => {
    const capitalLetterRegex = /[A-Z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>?]/;

    if (!capitalLetterRegex.test(value)) {
      return "Password must contain at least one capital letter";
    }

    if (!specialCharacterRegex.test(value)) {
      return "Password must contain at least one special character";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    return true;
  };
  const ConfirmPassword = () => {
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return true;
  };

  const onSubmit = (data) => {
    signUpewithemail(data.email, data.password)
      .then((res) => {
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data, (data.role = "student")),
        });
        profileUpdate(data.name, data.photo);
        toast("Your Sign Up is successfull");
        navigate("/");
      })
      .catch((err) => toast(err));
  };
  return (
    <div className="lg:px-28 px-5 py-10">
      <section
        className={`lg:flex relative  gap-10 lg:justify-center lg:items-center divide-x-4 ${
          confirmPassword !== true || validatePassword !== true
            ? "divide-teal-600"
            : "divide-teal-600"
        }`}
      >
        <div className="lg:w-[60%] sticky top-0">
          <Lottie className=" sticky top-5" animationData={anim}></Lottie>
        </div>
        <div className="lg:w-[40%] pl-5 space-y-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <label className=" font-medium">Name*</label>
              <input
                type="text"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter your Name"
                {...register("name", { required: true })}
              />
            </div>
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
            <div className="space-y-2">
              <label className=" font-medium">Password*</label>
              <input
                type="password"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  validate: validatePassword,
                })}
              />{" "}
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Confirm Password*</label>
              <input
                type="password"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Re-enter your password"
                {...register("repassword", {
                  required: true,
                  validate: ConfirmPassword,
                })}
              />
              {errors.repassword && <p>{errors.repassword.message}</p>}
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Photo URL*</label>
              <input
                type="text"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter a valid Photo URL"
                {...register("photo", { required: true })}
              />
            </div>
            <div className="space-y-2 ">
              <label className="font-medium">Gender</label>
              <select
                {...register("gender")}
                className="w-full py-2 bg-secondary px-4 focus:outline-none placeholder:text-black"
              >
                <option defaultValue={null} hidden>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Phone Number</label>
              <input
                type="phone"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter a valid Phone Number"
                {...register("phone", { required: false, minLength: 10 })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Address</label>
              <input
                type="text"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Address"
                {...register("address", { required: false })}
              />
            </div>

            <Button>Submit</Button>
          </form>
          <SocialLogin />
          <p>
            Have an account?{" "}
            <Link to="/login" className="text-teal-600">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
