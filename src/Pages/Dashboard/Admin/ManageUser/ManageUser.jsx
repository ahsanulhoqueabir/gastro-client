import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import PageBanner from "../../../../Components/PageBanner";
import { FaUserSecret, FaUserShield } from "react-icons/fa6";
import UserCard from "./UserCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingPage from "../../../../Components/Loader/LoadingPage";

const ManageUser = () => {
  // const [allUser, allUserLoading, refetch] = useAllUser();
  const [allUser, setUser] = useState([]);
  const [allUserLoading, setAllUserLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/users/alluser").then((res) => {
      setUser(res.data);
      setAllUserLoading(false);
    });
  }, []);
  if (allUserLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <PageBanner>Manage User</PageBanner>
      <section className="px-5 lg:px-20 py-10 ">
        <div className="flex lg:px-10 overflow-x-auto  mx-auto ">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((user, idx) => (
                <UserCard user={user} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageUser;
