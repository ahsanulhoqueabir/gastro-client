import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import ClassCard from "../Classes/ClassCard";

const ClassesInstrutor = () => {
  const location = useLocation();
  const { instructor, courses } = location?.state;
  return (
    <>
      <PageBanner>Classes of {instructor}</PageBanner>
      <section className="px-5 py-10 lg:px-24">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((item) => (
              <ClassCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyItems message={"No Course Found!"} />
        )}
      </section>
    </>
  );
};

export default ClassesInstrutor;
