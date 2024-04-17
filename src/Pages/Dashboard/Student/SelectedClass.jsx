import React from "react";
import useSelected from "../../../Hooks/useSelected";
import PageBanner from "../../../Components/PageBanner";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Card from "./Component/Card";

const SelectedClass = () => {
  const [info, infoLoading, refetch] = useSelected();
  return (
    <>
      <PageBanner>My Selected Class</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {infoLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          //   <div className="grid grid-cols-1 gap-3 space-y-1 divide-y-2 ">
          //     {info.selectedClass.map((i) => (
          //       <Card i={i} key={i._id} />
          //     ))}
          //   </div>
          <div className="flex justify-center">
            <table className="">
              <tbody>
                {info.selectedClass.map((i) => (
                  <Card i={i} key={i._id} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedClass;
