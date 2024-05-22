import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingPage from "../../../Components/Loader/LoadingPage";

const AdminProfile = () => {
  const [loading, setloading] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  const [user, setUser] = useState([]);
  const [classes, setClasses] = useState([]);
  let student = 0,
    admin = 0,
    instructor = 0,
    approved = 0,
    pending = 0,
    deny = 0;
  useEffect(() => {
    axiosSecure.get("/users/alluser").then((res) => {
      setUser(res.data);
      setloading(false);
    });
  }, []);
  useEffect(() => {
    setloading(true);
    axiosSecure.get("/courses").then((res) => {
      setClasses(res.data);
      setloading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  user?.map((p) => {
    if (p.role === "student") {
      student++;
    } else if (p.role === "admin") {
      admin++;
    } else {
      instructor++;
    }
  });
  classes?.map((item) => {
    if (item.approveStatus === "approved") {
      approved++;
    } else if (item.approveStatus === "pending") {
      pending++;
    } else {
      deny++;
    }
  });
  return (
    <>
      <div className="stat rounded-xl w-72  bg-blue-200">
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
        <div className="font-bold">User Data</div>
        {/* <div className="stat-value ">{info?.course?.length}</div> */}
        <div className="text-sm">
          <p>Total Users: {user?.length}</p>
          <p>Total Students: {student}</p>
          <p>Total Admins: {admin}</p>
          <p>Total Instructors: {instructor}</p>
        </div>
      </div>
      <div className="stat rounded-xl w-72 bg-blue-200">
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
        <div className="font-bold">Class Data</div>
        {/* <div className="stat-value ">{data.studentCount}</div> */}
        <div className="text-sm">
          <p>Total Classes: {classes?.length}</p>
          <p>Total Approved Classes: {approved}</p>
          <p>Total Pending Classes: {pending}</p>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
