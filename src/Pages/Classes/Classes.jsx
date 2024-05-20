import React, { useContext, useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import PageBanner from "../../Components/PageBanner";
import { authContext } from "../../ContextProvider/AuthProvider";
import ClassCard from "./ClassCard";
import RouteTitle from "../../utilities/RouteTitle";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import EmptyItems from "../../Components/Loader/EmptyItems";
import ClassLoading from "./ClassLoading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Classes = () => {
  RouteTitle("Classes");
  const [classLoading, setloading] = useState(true);
  const [classes, setClasses] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/courses/courses")
      .then((res) => {
        setClasses(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  return (
    <>
      <PageBanner>All Classes</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {classLoading ? (
          // <LoadingSpinner />
          <ClassLoading />
        ) : (
          <>
            {classes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classes.map((item) => (
                  <ClassCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <EmptyItems message={"No Course Found!"} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Classes;
