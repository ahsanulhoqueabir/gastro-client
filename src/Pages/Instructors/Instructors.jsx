import React from "react";
import RouteTitle from "../../utilities/RouteTitle";
import PageBanner from "../../Components/PageBanner";
import useInstructor from "../../Hooks/useInstructor";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  RouteTitle("Instructors");
  const [instructors, instructorLoading, refetchInstructor] = useInstructor();
  return (
    <div>
      <PageBanner>Instructors</PageBanner>
      <section className=" px-5 lg:w-2/3 mx-auto py-10 divide-y-2  ">
        {instructorLoading ? (
          <LoadingSpinner />
        ) : (
          <div className=" overflow-x-auto">
            <table className="table ">
              <thead className="lg:text-2xl">
                <th>Image</th>
                <th>Info</th>
                <th>Details</th>
              </thead>
              <tbody>
                {instructors.map((cls) => (
                  <InstructorCard key={cls.id} class={cls} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Instructors;
