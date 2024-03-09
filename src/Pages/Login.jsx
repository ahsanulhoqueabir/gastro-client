import Lottie from "lottie-react";
import React from "react";
import anim from "/src/assets/loginpage.json";

const Login = () => {
  return (
    <section>
      <div>
        <Lottie animationData={anim}></Lottie>
      </div>
    </section>
  );
};

export default Login;
