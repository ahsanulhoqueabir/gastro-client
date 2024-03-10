import React from "react";

const LoadingNavbar = () => {
  return (
    <div className="flex bg-base-200 py-4  gap-10 w-full justify-between lg:px-20">
      <div className="skeleton w-24 h-10"></div>
      <div className="flex gap-4">
        <div className="skeleton w-16 h-10"></div>
        <div className="skeleton w-16 h-10"></div>
        <div className="skeleton w-16 h-10"></div>
      </div>
      <div className="flex gap-5">
        <div className="skeleton rounded-full w-12 h-12"></div>
        <div className="skeleton  rounded-full w-12 h-12"></div>
      </div>
    </div>
  );
};

export default LoadingNavbar;
