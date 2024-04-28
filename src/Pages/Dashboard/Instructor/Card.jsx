import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegCircleCheck, FaTrash } from "react-icons/fa6";

const Card = ({ idx, item }) => {
  const { classname, availableseats, totalSeats, approveStatus, classimage } =
    item;
  return (
    <tr className=" ">
      <td className="">
        <img
          src={classimage}
          className="w-12 h-10 object-cover lg:w-36 lg:h-20 rounded-md"
          alt="Class Image"
        />
      </td>
      <td>
        <div className="flex flex-col gap-3 text-sm lg:text-lg">
          <p className="font-medium">{`Class Name: ${classname}`}</p>
          <p>{`Enrolled: ${totalSeats - availableseats}`}</p>
        </div>
      </td>
      <td>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          {approveStatus === "pending" ? (
            <p className="text-yellow-500">
              {" "}
              <div className="w-5 h-5 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
            </p>
          ) : (
            <p className="text-green-500">
              <FaRegCircleCheck />
            </p>
          )}
        </div>
      </td>
      <td>
        <div className="flex flex-col justify-center items-center text-sm lg:text-lg">
          <button className="rounded-md px-2 py-1">
            <FaEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Card;
