import React from "react";
import { FaMoneyCheck, FaUsersCog } from "react-icons/fa";
import {
  FaChalkboardUser,
  FaCheckToSlot,
  FaLaptopMedical,
  FaPowerOff,
  FaPuzzlePiece,
  FaRegUser,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";

const DashboardNav = () => {
  const role = useUserRole();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access-token");
    logout();
    navigate("/");
  };
  return (
    <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
      <Link
        to="profile"
        className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
      >
        <FaRegUser />

        <small className="text-center text-xs font-medium"> Profile </small>
      </Link>
      {role === "student" && (
        <>
          <Link
            to="selectedclass"
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            <FaCheckToSlot />

            <small className="text-center text-xs font-medium">
              {" "}
              Selected{" "}
            </small>
          </Link>

          <Link
            to={"Enrolled"}
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            <FaChalkboardUser />

            <small className="text-center text-xs font-medium">
              {" "}
              Enrolled{" "}
            </small>
          </Link>
        </>
      )}
      {role === "instructor" && (
        <>
          <Link
            to={"addNewClass"}
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            {/* <FaMoneyCheck /> */}
            <FaLaptopMedical />

            <small className="text-center text-xs font-medium">Add New </small>
          </Link>
          <Link
            to="myclass"
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            <FaCheckToSlot />

            <small className="text-center text-xs font-medium">
              {" "}
              my Class{" "}
            </small>
          </Link>
        </>
      )}
      {role === "admin" && (
        <>
          <Link
            to="manageclasses"
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            <FaPuzzlePiece />

            <small className="text-center text-xs font-medium">
              {" "}
              Manage Class{" "}
            </small>
          </Link>
          <Link
            to="manageuser"
            className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
          >
            <FaUsersCog />

            <small className="text-center text-xs font-medium">
              {" "}
              Manage Users{" "}
            </small>
          </Link>
        </>
      )}
      <button
        onClick={handleLogout}
        // to="profile"

        className="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
      >
        <FaPowerOff />

        <small className="text-center text-xs font-medium"> Logout </small>
      </button>
    </nav>
  );
};

export default DashboardNav;
