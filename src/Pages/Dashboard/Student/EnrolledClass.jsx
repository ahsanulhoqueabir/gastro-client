import React from "react";
import useSelected from "../../../Hooks/useUserData";
import PageBanner from "../../../Components/PageBanner";
import Card from "./Component/Card";
import CardEn from "./Component/CardEn";

const EnrolledClass = () => {
  const [, infoLoading, refetch, , enrolledClass] = useSelected();
  const l = enrolledClass?.length;

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
                {enrolledClass.map((i) => (
                  <CardEn i={i} key={i._id} />
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
