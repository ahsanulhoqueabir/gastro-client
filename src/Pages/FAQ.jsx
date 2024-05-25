import React, { useState } from "react";
import PageBanner from "../Components/PageBanner";
import datas from "../assets/faq.json";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <PageBanner>FAQ</PageBanner>
      <section className=" px-5 lg:px-28  mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-2 md:p-6">
          {datas?.map((data, idx) => (
            <div key={idx}>
              <div
                onClick={() => handleToggle(idx)}
                className={`px-4 md:px-8 py-6 bg-teal-200 border-green-500 border-l-[3px] cursor-pointer`}
              >
                <div className="flex items-center">
                  <span>
                    <svg
                      className={`mr-4 fill-green-900 shrink-0`}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                  <h4 className={`text-green-900   text-xl`}>{data.title}</h4>
                </div>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  text-green-900 bg-teal-200 border-green-500 `}
                  >
                    {data?.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
