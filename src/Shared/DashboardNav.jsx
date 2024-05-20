import React, { useEffect, useState } from "react";
import {
  FaMoneyCheck,
  FaMoneyCheckAlt,
  FaSignOutAlt,
  FaUsersCog,
} from "react-icons/fa";
import {
  FaChalkboardUser,
  FaCheckToSlot,
  FaLaptopMedical,
  FaPowerOff,
  FaPuzzlePiece,
  FaRegUser,
} from "react-icons/fa6";

import {
  FiBookmark,
  FiGrid,
  FiInfo,
  FiList,
  FiLock,
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";
const studentsRoute = [
  {
    title: "Profile",
    route: "",
    icon: <FiUser />,
  },
  {
    title: "Selected",
    route: "selectedclass",
    icon: <FiBookmark />,
  },
  {
    title: "Enrolled",
    route: "enrolled",
    icon: <FiLock />,
  },
  {
    title: "History",
    route: "history",
    icon: <FaMoneyCheckAlt />,
  },
];
const instructorRoute = [
  {
    title: "Profile",
    route: "",
    icon: <FiUser />,
  },
  {
    title: "Add New",
    route: "addNewClass",
    icon: <FiInfo />,
  },
  {
    title: "My Class",
    route: "myclass",
    icon: <FiList />,
  },
];
const adminRoute = [
  {
    title: "Profile",
    route: "",
    icon: <FiUser />,
  },
  {
    title: "Manage Class",
    route: "manageclasses",
    // icon: <FiGrid />,
    icon: <FaLaptopMedical />,
  },
  {
    title: "Manage Users",
    route: "manageuser",
    icon: <FaUsersCog />,
  },
];
const DashboardNav = ({ open, setOpen }) => {
  const [routeShown, setRoutes] = useState(studentsRoute);
  const role = useUserRole();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access-token");
    logout();
    navigate("/");
  };
  useEffect(() => {
    if (role === "instructor") {
      setRoutes(instructorRoute);
    } else if (role === "admin") {
      setRoutes(adminRoute);
    } else {
      setRoutes(studentsRoute);
    }
  });

  return (
    <div
      className={`${
        open ? "w-60" : "w-24"
      }  bg-white border-r-[1px] rounded-md text-black shadow-lg py-5 h-screen z-50`}
    >
      <div
        onClick={() => setOpen(!open)}
        className=" bg-slate-200 hidden lg:flex shadow-md rounded-md p-2 w-fit w- h-fit my-5 m-auto hover:text-green-500 cursor-pointer"
      >
        <p>
          <FiGrid />
        </p>
      </div>
      <ul className="menu w-full rounded-box pb-60 grid place-content-center">
        {routeShown?.map((item, idx) => (
          <li
            key={idx}
            className=" border w-full rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300"
          >
            <Link
              to={item.route}
              className={`${!open && "tooltip tooltip-right"}`}
              data-tip={item.title}
            >
              {item.icon}
              {open && <span>{item.title}</span>}
            </Link>
          </li>
        ))}
        <li className={`tooltip tooltip-right`} data-tip="Log Out">
          <button
            onClick={handleLogout}
            className=" border w-full rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300"
          >
            <FaSignOutAlt /> {open && <span>Log Out</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
