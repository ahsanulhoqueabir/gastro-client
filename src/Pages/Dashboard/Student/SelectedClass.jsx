import React, { useContext } from "react";
import PageBanner from "../../../Components/PageBanner";
import Card from "./Component/Card";
import useUserData from "../../../Hooks/useUserData";

const SelectedClass = () => {
  const [info, infoLoading, refetch, selectedClass, enrolledClass] =
    useUserData();

  const l = selectedClass?.length;
  return (
    <>
      <PageBanner>My Selected Class</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {infoLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : l > 0 ? (
          <div className="flex justify-center">
            <table className="">
              <tbody>
                {selectedClass.map((i) => (
                  <Card i={i} key={i._id} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mx-auto">
            You Have not added any course in cart yet!
          </p>
        )}
      </div>
    </>
  );
};

export default SelectedClass;
