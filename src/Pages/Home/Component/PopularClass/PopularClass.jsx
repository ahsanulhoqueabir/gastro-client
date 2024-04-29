import React from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useClasses from "../../../../Hooks/useClasses";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";

const PopularClass = () => {
  const [, classLoading, , sortedPopularClass] = useClasses();
  if (classLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SectionTitle>Popular Class</SectionTitle>
      <section className="px-5 lg:px-20 py-5">
        {sortedPopularClass?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedPopularClass.map((item, idx) => (
              <div
                key={idx}
                className="bg-base-200 p-5 rounded-md space-y-2 shadow-teal-100 shadow-md"
              >
                <div className="h-60">
                  <img
                    src={item.classimage}
                    className=" object-cover size-full rounded-md"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="lg:text-xl font-bold">{item.classname}</h2>
                  <p>
                    <span className="text-xs">by</span> {item.classinstructor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-3xl py-10">
            No popular class available at the moment.
          </p>
        )}
      </section>
    </>
  );
};

export default PopularClass;
