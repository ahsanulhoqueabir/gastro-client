import React from "react";

const ClassLoading = () => {
  const Fclasses = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {Fclasses.map((item) => (
        <div key={item} className="flex flex-col gap-4  pb-5">
          <div className="skeleton h-52 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-1/3 "></div>
          <div className="skeleton h-8 w-16"></div>
        </div>
      ))}
    </div>
  );
};

export default ClassLoading;
