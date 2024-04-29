import React from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DetailsButton from "../../Components/Button/DetailsButton";

const InstructorCard = ({ class: cls }) => {
  const { photo, name, email, classCount, _id } = cls;
  const naviagte = useNavigate();
  return (
    <tr className=" ">
      {/* img div  */}
      <td>
        <img
          className="w-32 h-20 object-cover rounded"
          src={photo ? photo : "https://via.placeholder.com/150"}
          alt=""
        />
      </td>
      <td className="flex-col flex justify-between text-wrap">
        <h1 className="font-bold lg:text-2xl text-wrap">{name}</h1>
        <p className="text-wrap">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <span className="font-semibold">Class Conducted: </span> {classCount}
        </p>
      </td>
      <td>
        <DetailsButton onClick={() => naviagte(`instructorDetails/${_id}`)}>
          See Details
        </DetailsButton>
      </td>
    </tr>
  );
};

export default InstructorCard;
