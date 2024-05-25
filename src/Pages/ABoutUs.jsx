import React from "react";
import data from "../assets/aboutus.json";
import PageBanner from "../Components/PageBanner";

const ABoutUs = () => {
  return (
    <>
      <PageBanner>About Us</PageBanner>
      <section className="px-5 lg:px-28 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
          {data.map((item) => (
            <div key={item.id}>
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ABoutUs;
