import { Link, useNavigate } from "react-router-dom";
import useThemeControl from "../Hooks/ThemeControl";
import logo from "../assets/favicon.png";
import {
  FaArrowRightToBracket,
  FaBars,
  FaChalkboardUser,
  FaCheckToSlot,
  FaLaptopMedical,
  FaPowerOff,
  FaPuzzlePiece,
  FaUserTie,
  FaUsersRays,
} from "react-icons/fa6";
import LoadingNavbar from "./LoadingNavbar";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import {
  FaChalkboardTeacher,
  FaHome,
  FaTh,
  FaTimes,
  FaUsersCog,
} from "react-icons/fa";

const Navbar = () => {
  const [theme, handleToggle] = useThemeControl();
  const { user, authLoading, logout } = useAuth();
  const role = useUserRole();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access-token");
    logout();
    navigate("/");
  };
  const fields = (
    <>
      <Link
        className="flex justify-start hover:bg-indigo-100 dark:hover:bg-teal-400    items-center  gap-1 rounded-md   "
        to={"/"}
      >
        <FaHome />
        <small>Home</small>
      </Link>

      <Link
        className="flex justify-start hover:bg-indigo-100   items-center  gap-1 rounded-md   "
        to={"/instructors"}
      >
        <FaUsersRays />
        <small>Instructors</small>
      </Link>

      <Link
        className="flex justify-start hover:bg-indigo-100   items-center  gap-1 rounded-md   "
        to={"/classes"}
      >
        <FaChalkboardTeacher />
        <small>Classes</small>
      </Link>

      {user && (
        <>
          <p className="text-xs"> --- Dashboard ---</p>

          <Link
            className="flex justify-start hover:bg-indigo-100   items-center  gap-1 rounded-md   "
            to={"/dashboard"}
          >
            <FaUserTie />
            <small>Profile</small>
          </Link>
        </>
      )}
      {role === "student" && (
        <>
          <Link
            to="dashboard/selectedclass"
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            <FaCheckToSlot />

            <small className=""> Selected </small>
          </Link>

          <Link
            to={"dashboard/Enrolled"}
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            <FaChalkboardUser />

            <small className=""> Enrolled </small>
          </Link>
        </>
      )}
      {role === "instructor" && (
        <>
          <Link
            to={"dashboard/addNewClass"}
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            {/* <FaMoneyCheck /> */}
            <FaLaptopMedical />

            <small className="">Add New </small>
          </Link>
          <Link
            to="dashboard/myclass"
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            <FaCheckToSlot />

            <small className=""> my Class </small>
          </Link>
        </>
      )}
      {role === "admin" && (
        <>
          <Link
            to="dashboard/manageclasses"
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            <FaPuzzlePiece />

            <small className=""> Manage Class </small>
          </Link>
          <Link
            to="dashboard/manageuser"
            className="flex  hover:bg-indigo-100   items-center justify-center gap-1 rounded-md   "
          >
            <FaUsersCog />

            <small className=""> Manage Users </small>
          </Link>
        </>
      )}
      {user && (
        <button
          onClick={handleLogout}
          className="flex  hover:bg-indigo-100   items-center justify-start gap-1 rounded-md   "
        >
          <FaPowerOff />

          <small className=""> Logout </small>
        </button>
      )}
    </>
  );
  if (authLoading) {
    return <LoadingNavbar />;
  }
  const handleClose = () => {
    document.getElementById("my-drawer").checked = false;
  };
  return (
    <div className="navbar bg-base-200 lg:px-20">
      <div className="navbar-start justify-start">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <label
              htmlFor="my-drawer"
              className=" cursor-pointer drawer-button"
            >
              {/* <FaBars className="text-3xl" /> */}
              <FaTh className="text-3xl" />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-fit  min-h-full bg-white text-black lg:text-2xl gap-3">
              <div className="flex justify-end">
                <button onClick={handleClose}>
                  <FaTimes className="text-3xl font-thin" />
                </button>
              </div>
              {fields}
            </ul>
          </div>
        </div>
        <div>
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={logo} className="size-10" alt="" />
              <div>
                <h2 className="font-bold">Gastronomix</h2>
                <p className="text-xs">Culinary Academy</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-end pr-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              className="w-10 rounded-full tooltip tooltip-left "
              data-tip={user.displayName}
            >
              <img
                className="rounded-full"
                alt={user.displayName}
                src={user.photoURL}
              />
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-5 flex gap-1 items-center py-2 border-teal-400 border mr-2 rounded-lg"
          >
            <FaArrowRightToBracket />
            <span>Login</span>
          </Link>
        )}
      </div>
      <>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </>
    </div>
  );
};

export default Navbar;
