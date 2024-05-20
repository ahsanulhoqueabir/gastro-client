import React, { useEffect, useState } from "react";
import RouteTitle from "../../utilities/RouteTitle";
import PageBanner from "../../Components/PageBanner";
import InstructorCard from "./InstructorCard";
import LoadingInstructor from "../../Components/Loader/LoadingInstructor";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Instructors = () => {
  RouteTitle("Instructors");
  const [instructors, setInstructors] = useState([]);
  const [instructorLoading, setInstructorLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/users/instructor")
      .then((res) => {
        setInstructors(res.data);
        setInstructorLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PageBanner>Instructors</PageBanner>
      <section className=" px-5 lg:w-2/3 mx-auto py-10 divide-y-2  ">
        {instructorLoading ? (
          <LoadingInstructor />
        ) : (
          <div className=" overflow-x-auto">
            <table className="table ">
              <thead className="lg:text-2xl">
                <tr>
                  <th>Image</th>
                  <th>Info</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map((cls) => (
                  <InstructorCard key={cls._id} class={cls} />
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
