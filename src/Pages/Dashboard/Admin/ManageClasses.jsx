import React from "react";
import useClasses from "../../../Hooks/useClasses";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import PageBanner from "../../../Components/PageBanner";
import ClassCard from "./Component/ClassCard";

const ManageClasses = () => {
  const [classes, classLoading, refetch] = useClasses();
  if (classLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <PageBanner>Manage Class</PageBanner>
      <section>
        <div className=" overflow-x-auto px-3 lg:px-20 mx-auto w-fit">
          <table className="table my-10">
            <tbody>
              {classes.map((item, idx) => (
                <ClassCard key={idx} data={item} refresh={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageClasses;
