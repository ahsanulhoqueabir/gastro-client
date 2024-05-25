import React from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../../Components/PageBanner";
import RouteTitle from "../../utilities/RouteTitle";
import EmptyItems from "../../Components/Loader/EmptyItems";
import Card from "./Card";
import Review from "../../Components/Review";
import MyReviews from "./MyReviews";
import useUserData from "../../Hooks/useUserData";

const ClassesInstrutor = () => {
  const location = useLocation();
  const [info] = useUserData();
  const { instructor, courses, id } = location?.state;
  RouteTitle(instructor);

  return (
    <>
      <PageBanner>Classes by {instructor}</PageBanner>
      <section className="px-5 py-10 lg:px-24">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 divide-y-2 gap-4">
            {courses.map((item, idx) => (
              // <ClassCard key={item._id} item={item} />
              <Card key={idx} item={item} />
            ))}
          </div>
        ) : (
          <EmptyItems message={"No Course Found!"} />
        )}
      </section>
      <div>
        <MyReviews id={id} />
        {info ? (
          info?.role === "admin" || info?.role === "instructor" ? (
            " "
          ) : (
            <Review instructor={id} />
          )
        ) : (
          ""
        )}
        {/* <Review instructor={id} /> */}
      </div>
    </>
  );
};

export default ClassesInstrutor;
