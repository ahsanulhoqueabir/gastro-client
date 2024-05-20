import Lottie from "lottie-react";
import React from "react";
import empty from "../../Assets/empty.json";

const EmptyItems = ({ message }) => {
  return (
    <div className="">
      <Lottie className="h-96" animationData={empty}></Lottie>
      <h1 className="text-2xl text-center text-red-500">{message}</h1>
    </div>
  );
};

export default EmptyItems;
