import React from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useClasses from "../../../../Hooks/useClasses";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";

const PopularClass = () => {
  const [classes, classLoading, refetch, sortedPopularClass] = useClasses();
  if (classLoading) {
    return <LoadingSpinner />;
  }

  //   console.log(sortedPopularClass);

  return (
    <>
      <SectionTitle>Popular Class</SectionTitle>
      <section>
        {sortedPopularClass?.length > 0 ? (
          <div>
            {sortedPopularClass.map((popularClass) => (
              <div
                key={popularClass.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-11/12 md:w-3/4 lg:w-1/2">
                  <div className="flex flex-col items-center justify-center bg-white shadow-md my-4 p-4 rounded-lg">
                    <img
                      src={popularClass.image}
                      alt={popularClass.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-semibold my-2">
                        {popularClass.title}
                      </h3>
                      <p className="text-lg text-center">
                        {popularClass.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => refetch()}
                    className="mt-8 bg-primary text-white py-2 px-4 rounded-md"
                  >
                    {" "}
                  </button>
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
