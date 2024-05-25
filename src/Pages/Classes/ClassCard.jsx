import React, { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Explore from "../../Components/Button/Explore";
import { authContext } from "../../ContextProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useUserData from "../../Hooks/useUserData";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const ClassCard = ({ item }) => {
  const { user } = useContext(authContext);
  // const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  const [info] = useUserData();
  let userRole;
  if (user) {
    userRole = useUserRole();
  }
  const location = useLocation();
  const navigate = useNavigate();

  const isDisabled = () => {
    if (item.seatsAvailable === 0) {
      return true;
    } else if (user && (userRole === "admin" || userRole === "instructor")) {
      return true;
    } else {
      return false;
    }
  };
  const redBG = () => {
    if (item.seatsAvailable === 0) {
      return "bg-red-600 text-white";
    }
  };
  const handleEnroll = () => {
    if (!user) {
      Swal.fire({
        title: "You Need to Login First",
        text: " Want to login now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    } else {
      Swal.fire({
        title: "Are You Sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `/users/addSelectedClass?id=${info._id}&course=${item._id}`;

          axiosSecure
            .put(url)
            .then((res) => {
              toast.success("Class Selected Successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  };

  return (
    <div
      key={item._id}
      className={` p-5 rounded-lg shadow-md shadow-teal-300 ${redBG()}`}
    >
      <img
        src={item.classImage}
        alt={item.className}
        className="w-full h-48 object-cover rounded-lg border-2 p-2 border-teal-100"
      />
      <h1 className="text-xl font-semibold">{item.className}</h1>
      <p className="font-bold">
        <small>by </small>
        {item.user?.name || item.instructor}
      </p>
      <p>
        Available Seats:{" "}
        <span className="font-bold">{item.seatsAvailable}</span>
      </p>
      <p className="flex">
        Price:{" "}
        <span className="font-bold flex items-center">
          {item.classPrice} <FaBangladeshiTakaSign className="text-green-700" />
        </span>
      </p>
      <Explore className="mt-5" onClick={handleEnroll} disabled={isDisabled()}>
        Select
      </Explore>
    </div>
  );
};

export default ClassCard;
