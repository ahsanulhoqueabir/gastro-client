import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useClasses from "../../../../Hooks/useClasses";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import PopularClassLoaderCard from "../../../../Components/Loader/PopularClassLoaderCard";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const PopularClass = () => {
  const AxiosPublic = useAxiosPublic();
  const [PopularClass, setClass] = useState([]);
  const [classLoading, setClassLoading] = useState(true);
  useEffect(() => {
    AxiosPublic.get("/courses/courses").then((res) => {
      setClass(res.data);
      setClassLoading(false);
    });
  }, []);

  return (
    <>
      <SectionTitle>Popular Class</SectionTitle>
      <section className="px-5 lg:px-20 py-5">
        {classLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <PopularClassLoaderCard key={idx} />
            ))}
          </div>
        )}
        {
          PopularClass?.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PopularClass.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-base-200 p-5 rounded-md space-y-2 shadow-teal-100 shadow-md"
                >
                  <div className="h-60">
                    <img
                      src={item.classImage}
                      className=" object-cover size-full rounded-md"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="lg:text-xl font-bold">{item.className}</h2>
                    <p>
                      <span className="text-xs">by</span> {item.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )
          //  : (
          //   <p className="text-center text-3xl py-10">
          //     No popular class available at the moment.
          //   </p>
          // )}
        }
      </section>
    </>
  );
};

export default PopularClass;
