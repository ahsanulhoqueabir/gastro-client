import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card = ({ idx, item }) => {
  const navigate = useNavigate();
  const {
    _id,
    className,
    seatsAvailable,
    totalSeats,
    approveStatus,
    classImage,
    classDescription,
    feedback,
  } = item;
  // console.log(item);
  const handleUpdate = () => {
    navigate(`/dashboard/updateclass/${_id}`, {
      state: {
        data: item,
      },
    });
  };
  return (
    <tr className=" ">
      <td className="">
        <img
          src={classImage}
          className="w-12 h-10 object-cover lg:w-36 lg:h-20 rounded-md"
          alt="Class Image"
        />
      </td>
      <td>
        <div className="flex flex-col gap-3 text-sm lg:text-lg">
          <p className="font-medium">{` ${className}`}</p>
          <p>{`Enrolled: ${totalSeats - seatsAvailable}`}</p>
        </div>
      </td>
      <td>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          {approveStatus === "pending" ? (
            <div className="text-yellow-500">
              {" "}
              <div className="w-5 h-5 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
            </div>
          ) : (
            approveStatus === "approved" && (
              <p className="text-green-500">
                <FaRegCircleCheck />
              </p>
            )
          )}
        </div>
      </td>
      <td>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          <p className="text-wrap">{feedback}</p>
        </div>
      </td>
      <td>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          <button onClick={handleUpdate} className="rounded-md px-2 py-1">
            <FaEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Card;
