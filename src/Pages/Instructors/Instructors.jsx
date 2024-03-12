import React from "react";
import RouteTitle from "../../utilities/RouteTitle";
import PageBanner from "../../Components/PageBanner";
import useClasses from "../../Hooks/useClasses";
import Class from "./Class";

const Instructors = () => {
  RouteTitle("Instructors");
  const [classes, classLoading, refetch] = useClasses();
  console.log(classes);
  return (
    <div>
      <PageBanner>Instructors</PageBanner>
      <section className=" px-5 lg:w-2/3 mx-auto py-10 divide-y-2  ">
        {classLoading ? (
          "loading..."
        ) : (
          <div className=" overflow-x-auto">
            <table className="table w-full">
              <tbody>
                {classes.map((cls) => (
                  <Class key={cls.id} class={cls} />
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
