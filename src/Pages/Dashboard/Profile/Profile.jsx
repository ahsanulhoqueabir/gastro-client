import React from "react";
import PageBanner from "../../../Components/PageBanner";
import useUserData from "../../../Hooks/useUserData";
import LoadingPage from "../../../Components/Loader/LoadingPage";
import InstructorProfile from "./InstructorProfile";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import RouteTitle from "../../../utilities/RouteTitle";
const Profile = () => {
  RouteTitle("Profile");
  const [info, infoLoading, refetch] = useUserData();
  if (infoLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <div className="">
        <PageBanner>My profile</PageBanner>
      </div>
      <section className="px-1 lg:px-5 py-10">
        <div>
          <div className=" grid grid-cols-1 justify-between lg:grid-cols-3 gap-5 text-black">
            <div className="stat h-46 w-fit bg-blue-200 rounded-xl">
              <div className="stat-figure ">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={info?.photo} />
                  </div>
                </div>
              </div>
              <div className="">{info?.name}</div>
              <div className="text-sm ">
                <div className="flex justify-between">
                  <div className="text-primary">Email: </div>
                  <div className="text-black">{info?.email}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-primary">Phone: </div>
                  <div className="text-black">
                    {info?.phone || "Not Provided"}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-primary">Role: </div>
                  <div className="text-black capitalize">{info?.role}</div>
                </div>
              </div>
            </div>

            {info.role === "admin" ? (
              <AdminProfile />
            ) : info.role === "instructor" ? (
              <InstructorProfile />
            ) : (
              <StudentProfile />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
