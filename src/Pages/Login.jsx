import Lottie from "lottie-react";
import React, { useContext } from "react";
import anim from "/src/assets/loginpage.json";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import SocialLogin from "../Shared/SocialLogin";
import { authContext } from "../ContextProvider/AuthProvider";
const Login = () => {
  const { signInWithEmailAndPassword } = useContext(authContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
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
            <div className="space-y-2">
              <label className=" font-medium">Password*</label>
              <input
                type="password"
                name="password"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>
            <Button>Submit</Button>
          </form>
          <SocialLogin />
        </div>
      </section>
    </div>
  );
};

export default Login;
