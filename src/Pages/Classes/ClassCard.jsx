import React, { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Explore from "../../Components/Button/Explore";
import { authContext } from "../../ContextProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ClassCard = ({ item }) => {
  const { user, userRole } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isDisabled = () => {
    if (
      item.availableseats === 0 ||
      userRole === "admin" ||
      userRole === "instructor"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const redBG = () => {
    if (item.availableseats === 0) {
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
          const url = `http://localhost:3000/addSelectedClass/${user.email}`;
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire({
                  title: "Class Added Successfully",
                  icon: "success",
                });
              }
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
        src={item.classimage}
        alt={item.classname}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h1 className="text-xl font-semibold">{item.classname}</h1>
      <p className="font-bold">
        <small>by </small>
        {item.classinstructor}
      </p>
      <p>
        Available Seats:{" "}
        <span className="font-bold">{item.availableseats}</span>
      </p>
      <p className="flex">
        Price:{" "}
        <span className="font-bold flex items-center">
          {item.price} <FaBangladeshiTakaSign className="text-green-700" />
        </span>
      </p>
      <Explore className="mt-5" onClick={handleEnroll} disabled={isDisabled()}>
        Select
      </Explore>
    </div>
  );
};

export default ClassCard;
