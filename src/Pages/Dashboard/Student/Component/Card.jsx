import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../../../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import useUserData from "../../../../Hooks/useUserData";

const Card = ({ i }) => {
  const [, , refetch, ,] = useUserData();
  const { user } = useContext(authContext);
  const handleDelete = () => {
    // console.log(i._id);
    const url = `http://localhost:3000/deleteSelectedClass/${user?.email}/${i._id}`;
    Swal.fire({
      title: "Want to Remove this Class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, { method: "DELETE" });
        refetch();
        Swal.fire({
          title: "Removed!",
          text: "The class is removed from your list.",
          icon: "success",
        });
      }
    });
  };
  return (
    <tr className="">
      <td className="w-fit">
        <img src={i.classimage} alt="class" className="w-28 h-20 rounded-lg" />
      </td>
      <td className="pl-3">
        <div className=" flex-col justify-between">
          <h1 className="text-lg font-semibold">{i.classname}</h1>
          <h1>
            <small>by</small> <span>{i.classinstructor}</span>
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

//  <div className="flex w-full lg:w-1/2 mx-auto gap-3 items-center pt-2">
//    <div className="w-fit">
//      <img src={i.classimage} alt="class" className="w-28 h-20 rounded-lg" />
//    </div>
//    <section className="flex justify-between">
//      <div className="w-full">
//        <div className=" flex-col justify-between">
//          <h1 className="text-lg font-semibold">{i.classname}</h1>
//          <h1>
//            <small>by</small> <span>{i.classinstructor}</span>
//          </h1>
//        </div>
//      </div>
//  <div className=" lg:flex justify-between items-center w-20 lg:w-36">
//    <div>
//      <button onClick={handleDelete} className="  px-3 py-1 rounded-lg">
//        <FaTrashAlt />
//      </button>
//    </div>
//    <div>
//      <Link>
//        <button className="px-4 rounded-lg text-white py-0.5 bg-green-400">
//          Pay
//        </button>
//      </Link>
//    </div>
//  </div>
//    </section>
//  </div>;
