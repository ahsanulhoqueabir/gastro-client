import React from "react";
import anm from "../../Assets/loadinginstructor.json";
import Lottie from "lottie-react";
const LoadingInstructor = () => {
  return (
    <div>
      <Lottie className="h-[500px]" animationData={anm}></Lottie>
    </div>
  );
};

export default LoadingInstructor;
