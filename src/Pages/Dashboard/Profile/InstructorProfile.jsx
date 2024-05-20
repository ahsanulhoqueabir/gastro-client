import React, { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingPage from "../../../Components/Loader/LoadingPage";

const InstructorProfile = () => {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  const [info, infoLoading, refetch] = useUserData();
  useEffect(() => {
    axiosSecure.get(`/courses/queryuser?id=${info?._id}`).then((res) => {
      setData(res.data.data);
      setloading(false);
    });
  }, []);
  if (infoLoading || loading) {
    return <LoadingPage />;
  }
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
        <div className="">Total Class Conducted</div>
        <div className="stat-value ">{info?.course?.length}</div>
        <div className="text-sm">
          {info?.course?.length > 0
            ? `You have conducted ${info?.course?.length} classes`
            : "You have not conducted any class"}
        </div>
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
        <div className="">Total Enrolled Students</div>
        <div className="stat-value ">{data.studentCount}</div>
        <div className="text-sm">
          {data.studentCount > 0
            ? `${data.studentCount} enrolled students in your courses`
            : "No student enrolled yet in your course"}
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
