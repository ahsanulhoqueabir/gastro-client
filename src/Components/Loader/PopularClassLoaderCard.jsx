import React from "react";

const PopularClassLoaderCard = () => {
  return (
    <div className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit">
      <div className="animate-pulse">
        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
        <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
        <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
        <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
      </div>
    </div>
  );
};

export default PopularClassLoaderCard;
