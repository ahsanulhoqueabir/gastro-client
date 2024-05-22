import React, { useEffect, useState } from "react";
import PageBanner from "../../../../Components/PageBanner";
import UserCard from "./UserCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingPage from "../../../../Components/Loader/LoadingPage";
import RouteTitle from "../../../../utilities/RouteTitle";

const ManageUser = () => {
  RouteTitle("Manage Users");
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
