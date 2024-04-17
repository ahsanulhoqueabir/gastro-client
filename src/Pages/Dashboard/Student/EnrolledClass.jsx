import React from "react";
import useSelected from "../../../Hooks/useSelected";
import PageBanner from "../../../Components/PageBanner";
import Card from "./Component/Card";

const EnrolledClass = () => {
  const [info, infoLoading, refetch] = useSelected();
  const l = info.enrolledClass.length;

  return (
    <>
      <PageBanner>My Enrolled Classes</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {infoLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : l > 0 ? (
          <div className="flex justify-center">
            <table className="">
              <tbody>
                {info.enrolledClass.map((i) => (
                  <Card i={i} key={i._id} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mx-auto">
            You Have not enrolled Any course yet!
          </p>
        )}
      </div>
    </>
  );
};

export default EnrolledClass;
