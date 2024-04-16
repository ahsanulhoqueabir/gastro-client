import React, { useContext } from "react";
import useClasses from "../../Hooks/useClasses";
import PageBanner from "../../Components/PageBanner";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Explore from "../../Components/Button/Explore";
import { authContext } from "../../ContextProvider/AuthProvider";
import ClassCard from "./ClassCard";
import RouteTitle from "../../utilities/RouteTitle";

const Classes = () => {
  RouteTitle("Classes");
  const [classes, classLoading, refetch] = useClasses();
  const { authLoading } = useContext(authContext);
  const Fclasses = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      <PageBanner>All Classes</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classLoading
            ? "Loading"
            : classes.map((item) => <ClassCard key={item._id} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default Classes;
