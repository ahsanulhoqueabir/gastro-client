import React, { useContext } from "react";
import PageBanner from "../../../Components/PageBanner";
import Card from "./Component/Card";
import useUserData from "../../../Hooks/useUserData";
import EmptyItems from "../../../Components/Loader/EmptyItems";

const SelectedClass = () => {
  let [info, infoLoading, refetch] = useUserData();

  const l = info?.selected.length;
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
                {info.selected.map((i, ind) => (
                  <Card i={i} key={ind} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyItems message={"You  haven't selected any class yet"} />
        )}
      </div>
    </>
  );
};

export default SelectedClass;
