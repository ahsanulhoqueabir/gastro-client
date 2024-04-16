import React from "react";
import cn from "../../utilities/cn";

const Explore = ({ children, className, ...restProps }) => {
  return (
      <button
          
      className={cn(
        "px-5 py-3 z-20 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group",
        className
      )}
      {...restProps}
    >
      <span className="absolute w-9 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
      {children}
    </button>
  );
};

export default Explore;
