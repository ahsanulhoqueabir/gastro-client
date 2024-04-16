import React, { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Explore from "../../Components/Button/Explore";
import { authContext } from "../../ContextProvider/AuthProvider";
const ClassCard = ({ item }) => {
  const { userRole } = useContext(authContext);

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
    console.log("Enrolled");
  };

  return (
    <div
      key={item._id}
      className={`bg-white p-5 rounded-lg shadow-md ${redBG()}`}
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
        Enroll Now
      </Explore>
      {/* <button disabled ></button> */}
    </div>
  );
};

export default ClassCard;
