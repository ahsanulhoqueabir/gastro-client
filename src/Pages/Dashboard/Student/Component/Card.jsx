import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../../../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import useUserData from "../../../../Hooks/useUserData";
import Payment from "../../Payment/Payment";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Card = ({ i }) => {
  const [info, , refetch] = useUserData();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = () => {
    const url = `https://server-gastronomix.netlify.app/.netlify/functions/api/v1/users/RemoveClass?id=${info._id}&course=${i._id}`;
    Swal.fire({
      title: "Want to Remove this Class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(url);
        refetch();
        Swal.fire({
          title: "Removed!",
          text: "The class is removed from your list.",
          icon: "success",
        });
      }
    });
  };
  const handlePayment = () => {};
  return (
    <tr className="">
      <td className="w-fit">
        <img src={i.classImage} alt="class" className="w-28 h-20 rounded-lg" />
      </td>
      <td className="pl-3">
        <div className=" flex-col justify-between">
          <h1 className="text-lg font-semibold">{i.className}</h1>
          <h1>
            <small>by</small> <span>{i.instructor}</span>
          </h1>
        </div>
      </td>
      <td>
        <div className=" lg:flex  items-center w-20 lg:w-36">
          <div>
            <button onClick={handleDelete} className="  px-3 py-1 rounded-lg">
              <FaTrashAlt />
            </button>
          </div>

          <div>
            <Link to={`/dashboard/payment/${i._id}`}>
              <button className="px-4 rounded-lg text-white py-0.5 bg-green-400">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Card;
