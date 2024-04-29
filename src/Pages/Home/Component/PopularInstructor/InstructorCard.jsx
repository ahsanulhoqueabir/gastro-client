import React from "react";

const InstructorCard = ({ data }) => {
  const { photo, name, email, classCount, studentCount } = data;
  return (
    <div className="size-full mx-auto  flex  items-center justify-center ">
      <div className="group relative  ">
        <img
          className="size-36 lg:size-60  object-cover scale-105 transform rounded-lg bg-black/70"
          src={photo ? photo : "https://i.ibb.co/84zM7hh/40377-1.jpg"}
          alt="profile picture"
        />
      </div>
      <div className="size-[220px] lg:size-56  space-y-5 rounded-br-lg rounded-tr-lg bg-base-200 p-5 text-center shadow-md shadow-teal-200 ">
        <div className="space-y-1">
          <h2 className="text-center font-sans  font-medium /90">{name}</h2>
          <p className="font-sans text-sm">{email}</p>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row items-start lg:items-center lg:justify-between">
          <div className="space-y-1 flex justify-center gap-3 items-center lg:block">
            <p className="font-sans text-sm  font-semibold">Class</p>
            <p className=" tracking-wider /80 ">{classCount}</p>
          </div>
          <div className="space-y-1 flex justify-center gap-3 items-center lg:block">
            <p className="font-sans text-sm font-semibold">Enrolled Students</p>
            <p className=" tracking-wider /80 ">{studentCount}</p>
          </div>
        </div>
        <div>
          <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
