import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaChalkboardTeacher, FaTh } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { RiUser2Fill } from "react-icons/ri";

import { Link } from "react-router-dom";
const BottomNav = () => {
  const path = "";
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white p-3 rounded-t-xl shadow-md border-t z-50">
      <div className="flex justify-around items-center">
        <Link to="/">
          <div className="flex-col items-center justify-center">
            <p className=" ">
              <AiFillHome />
            </p>
            <p className=" text-xs ">Home</p>
          </div>
        </Link>
        <Link to="/instructors">
          <div className="flex-col items-center justify-center">
            <p className=" ">
              <FaUsersRays />
            </p>
            <p className="text-xs ">Instructors</p>
          </div>
        </Link>
        <Link to="/classes">
          <div className="flex-col items-center justify-center">
            <p className=" ">
              <FaChalkboardTeacher />{" "}
            </p>
            <p className="text-xs ">Classes</p>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="flex-col items-center justify-center">
            <p className=" ">
              <FaTh />{" "}
            </p>
            <p className="text-xs ">Dashboard</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
