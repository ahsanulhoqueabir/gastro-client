import React from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DetailsButton from "../../Components/Button/DetailsButton";

const InstructorCard = ({ class: cls }) => {
  const { photo, name, email, course, _id } = cls;
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
      <td className="">
        <div className="flex-col flex gap-2 justify-between text-wrap">
          <h1 className="font-bold lg:text-2xl text-wrap">{name}</h1>
          <p className="text-wrap">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <span className="font-semibold">Class Conducted: </span>{" "}
            {course?.length}
          </p>
        </div>
      </td>
      <td>
        <DetailsButton
          onClick={() =>
            naviagte(`/classes/${_id}`, {
              state: { instructor: name, courses: course },
            })
          }
        >
          See Classes
        </DetailsButton>
      </td>
    </tr>
  );
};

export default InstructorCard;
