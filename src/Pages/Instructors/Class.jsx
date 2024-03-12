import React from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DetailsButton from "../../Components/Button/DetailsButton";

const Class = ({ class: cls }) => {
  const {
    classname,
    classimage,
    instructormail,
    classinstructor,
    availableseats,
    price,
    _id,
  } = cls;
  const naviagte = useNavigate();
  return (
    <tr className="">
      {/* img div  */}
      <td>
        <img
          className="w-32 h-20 object-cover rounded"
          src={classimage}
          alt=""
        />
      </td>
      <td className="flex-col flex justify-between">
        <h1 className="font-bold lg:text-2xl">{classinstructor}</h1>
        <p>
          <a href={`mailto:${instructormail}`}>{instructormail}</a>
        </p>
      </td>
      <td>
        <p>{classname}</p>
      </td>
      <td>
        <DetailsButton onClick={() => naviagte(`instructorDetails/${_id}`)}>
          See Details
        </DetailsButton>
      </td>
    </tr>
  );
};

export default Class;
