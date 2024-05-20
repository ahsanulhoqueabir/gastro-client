import React, { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useClasses from "../../../../Hooks/useClasses";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ClassCard = ({ data }) => {
  const [isDisabled, setDisabled] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [, , refetch] = useClasses();
  const {
    _id,
    classname,
    classinstructor,
    instructormail,
    availableseats,
    approveStatus,
    classimage,
    price,
  } = data;
  useEffect(() => {
    if (approveStatus === "pending") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [approveStatus]);
  const handleApprove = () => {
    setDisabled(true);
    axiosSecure.put(`/updateClass/${_id}`, { approveStatus: "approved" });
    toast.success("Class Approved");
    refetch();
  };
  const handleDeny = () => {
    setDisabled(true);
    axiosSecure.put(`/updateClass/${_id}`, { approveStatus: "denied" });
    toast.error("Class Denied");
    refetch();
  };
  const handleFeedback = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      theme: "bulma",
      confirmButtonText: "Send Feedback",
      confirmButtonColor: "#008000",
      showCloseButton: true,
    });
    if (text) {
      axiosSecure.put(`/updateClass/${_id}`, { feedback: text });
      toast.success("Feedback Sent");
      refetch();
    } else {
      toast.error("Feedback cannot be empty!");
    }
  };
  return (
    <tr>
      <td>
        <div>
          <img
            src={classimage}
            className="w-12 h-10   object-cover lg:w-36 lg:h-24 rounded-md"
            alt="Class Image"
          />
        </div>
      </td>
      <td>
        <div>
          <p>
            <span className="font-medium">{classname}</span>
          </p>
          <p>
            {" "}
            <span className="text-xs">by</span>
            {`  ${classinstructor}`}
          </p>
          <p>
            <span className="text-xs">Email:</span>
            {`  ${instructormail}`}
          </p>
        </div>
      </td>
      <td>
        <div className="text-sm lg:text-lg flex-col justify-between">
          <p>
            <span className="font-bold">Availabe Seats: </span>
            <span>{availableseats}</span>
          </p>
          <p>
            <span className="font-bold">Price: </span>
            <span>{price}</span>
          </p>
          <p>
            <span>Status: </span>
            <span
              className={`capitalize text-xs rounded-xl px-3 py-0.5 ${
                approveStatus === "pending"
                  ? "bg-yellow-200 text-yellow-700"
                  : approveStatus === "approved"
                  ? "bg-green-200 text-green-700"
                  : "text-red-700 bg-red-200"
              }`}
            >
              {approveStatus}
            </span>
          </p>
        </div>
      </td>
      <td>
        <div className="flex flex-col text-2xl">
          <div className="tooltip" data-tip="Approve">
            <button onClick={handleApprove} className="" disabled={isDisabled}>
              <FaRegCheckCircle className="text-green-700" />
            </button>
          </div>
          <div className="tooltip" data-tip="Don't Approve">
            <button onClick={handleDeny} className="" disabled={isDisabled}>
              <FaRegTimesCircle className="text-red-700" />
            </button>
          </div>
          <div className="tooltip" data-tip="Send Feedback">
            <button onClick={handleFeedback}>
              <FaInfoCircle className="text-teal-500" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ClassCard;
