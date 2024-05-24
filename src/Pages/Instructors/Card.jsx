import React, { useContext } from "react";
import { authContext } from "../../ContextProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUserData from "../../Hooks/useUserData";
import useUserRole from "../../Hooks/useUserRole";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const {
    classImage,
    className,
    instructor,
    seatsAvailable,
    classPrice,
    classDescription,
  } = item;
  const { user } = useContext(authContext);
  const axiosPublic = useAxiosPublic();
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
          axiosPublic
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
  const firstWord = () => {
    return classDescription.split(" ")[0];
  };
  return (
    <div className="pt-5">
      <div className="lg:flex gap-5">
        <div className="space-y-2 w-96">
          <img
            className="h-56 object-cover rounded-lg w-96"
            src={classImage}
            alt=""
          />
          <p>
            <span className="font-semibold">Instructor : </span>
            <span>{item?.user?.name || instructor}</span>
          </p>
          <p>
            <span className="font-semibold">Seats Available : </span>
            <span>{seatsAvailable}</span>
          </p>
          <p>
            <span className="font-semibold">Price : </span>
            <span className="text-2xl font-bold text-teal-500">
              {classPrice}
            </span>
          </p>
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-2xl font-semibold">{className}</h1>
          <p className=" text-justify indent-3 prose first-letter:text-3xl first-letter:font-bold first-letter:text-teal-400">
            {classDescription}
          </p>
        </div>
      </div>
      <div className="pt-5">
        <button
          onClick={handleEnroll}
          disabled={isDisabled()}
          className={`w-full lg:w-72 mx-auto bg-teal-500 text-white p-2 rounded-lg ${
            isDisabled() && "cursor-not-allowed"
          }`}
        >
          {/* {isDisabled() ? "Not Available" : "Enroll Now"} */}
          Add to cart
        </button>
      </div>
      
    </div>
  );
};

export default Card;
