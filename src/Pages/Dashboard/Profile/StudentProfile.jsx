import React from "react";
import useUserData from "../../../Hooks/useUserData";

const StudentProfile = () => {
  const [info, infoLoading, refetch] = useUserData();

  return (
    <>
      <div className="stat rounded-xl w-fit bg-blue-200">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block size-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="">Total Class in Cart</div>
        <div className="stat-value ">{info?.selected?.length}</div>
        <div className="text-sm">Waiting for payments!</div>
      </div>
      <div className="stat rounded-xl w-fit bg-blue-200">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="">Total Enrolled class</div>
        <div className="stat-value ">{info?.enrolled?.length}</div>
        <div className="text-sm">
          {info?.enrolled?.length > 0
            ? "You are enrolled in some classes"
            : "You are not enrolled in any class"}
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
