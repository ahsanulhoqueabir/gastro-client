import React, { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, signinwithGithub } = useContext(authContext);
  //   console.log(name);

  const handleGoogleSignIn = () => {
    // if (!user) {
    //   googleSignIn();
    // } else {
    //   alert("You are already logged in!");
    // }
    googleSignIn();
  };

  return (
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
  );
};

export default SocialLogin;
