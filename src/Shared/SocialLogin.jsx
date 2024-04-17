import React, { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, signinwithGithub } = useContext(authContext);
  //   console.log(name);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // console.log(res);
        toast.success(`Welcome ${res.user.displayName}!`);
        const data = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role: "user",
        };
        fetch("http://localhost:3000/addUser", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        navigate(from, { replace: true });
      })
      .catch((err) => toast(err.message));
  };

  return (
    <div className="w-fit mx-auto">
      <h2 className="text-center text-2xl pb-6">Sign in with:</h2>
      <div className="flex w-fit gap-10 items-center ">
        <div className="">
          <img
            onClick={handleGoogleSignIn}
            className="size-10 cursor-pointer"
            src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
            alt=""
          />
        </div>
        <div className="divider divide-x-8 divider-horizontal">OR</div>
        <div className=" ">
          <img
            className="size-10 cursor-pointer"
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
