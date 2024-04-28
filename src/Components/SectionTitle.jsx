import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex justify-between items-center lg:w-1/2 mx-auto px-5 py-16">
      <div className="w-6 h-6">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-3 w-3 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-3 w-3 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-3 w-3 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-3 w-3 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
      <div className="w-fit">
        <hr className=" border-black border-2 w-full" />
      </div>
      <div className="text-lg font-bold lg:text-2xl">{children}</div>
      <div className="w-fit">
        <hr className=" border-black border-2 w-full" />
      </div>
      <div className="w-6 h-6">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-3 w-3 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-3 w-3 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-3 w-3 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-3 w-3 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
