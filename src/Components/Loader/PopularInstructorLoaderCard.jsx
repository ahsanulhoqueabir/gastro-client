import React from "react";

const PopularInstructorLoaderCard = () => {
  return (
    <div className="size-full mx-auto  flex  items-center justify-center ">
      <div className="size-60 bg-gray-300 rounded-lg "></div>
      <div className="size-[220px] lg:size-56  pl-5 bg-white p-5 animate-pulse ">
        <div className="h-20 w-full">
          <p className="h-2 w-full bg-gray-300"></p>
          <p className="h-2 w-full bg-gray-300"></p>
        </div>
        <div className="h-20 w-full">
          <p className="h-2 w-full bg-gray-300"></p>
          <p className="h-2 w-full bg-gray-300"></p>
        </div>
        <div className="h-20 w-full">
          <p className="h-2 w-full bg-gray-300"></p>
          <p className="h-2 w-full bg-gray-300"></p>
        </div>
      </div>
      <div className="h-6 w-16"></div>
    </div>
  );
};

export default PopularInstructorLoaderCard;
