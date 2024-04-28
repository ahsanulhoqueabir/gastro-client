import React, { useState } from "react";
import { FaUserSecret, FaUserShield } from "react-icons/fa6";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UserCard = ({ user, refetch }) => {
  const [isAdminDisabled, setIsAdminDisabled] = useState(
    user?.role === "admin"
  );
  const [isInstructorDisabled, setIsInstructorDisabled] = useState(
    user?.role === "instructor"
  );
  const [axiosSecure] = useAxiosSecure();
  const handleAdmin = () => {
    user.role = "admin";
    axiosSecure.put(`/updateUserRole/${user?.email}`, user);
    setIsAdminDisabled(!isAdminDisabled);
    setIsInstructorDisabled(false);
    toast.success("User role updated to Admin");
    refetch();
  };
  const handleInstructor = () => {
    user.role = "instructor";
    axiosSecure.put(`/updateUserRole/${user?.email}`, user);
    setIsInstructorDisabled(!isInstructorDisabled);
    setIsAdminDisabled(false);
    toast.success("User role updated to Instructor");
    refetch();
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  user.photo
                    ? user.photo
                    : "https://i.ibb.co/84zM7hh/40377-1.jpg"
                }
                alt="User Profile Photo"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.name}</div>
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td className="capitalize">{user.role}</td>
      <td className="text-2xl flex gap-3">
        <div className="tooltip" data-tip="Make Instructor">
          <button onClick={handleInstructor} disabled={isInstructorDisabled}>
            <FaUserSecret className="text-teal-600" />
          </button>
        </div>
        <div className="tooltip" data-tip="Make Admin">
          <button onClick={handleAdmin} disabled={isAdminDisabled}>
            <FaUserShield className="text-green-700" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
