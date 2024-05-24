import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Components/SectionTitle";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const MyReviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`/reviews/${id}`)
      .then((res) => {
        setReviews(res.data);
        setloading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <div className="pb-10">
      <SectionTitle>Reviews</SectionTitle>
      <section>
        {loading && <LoadingSpinner />}
        {reviews?.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20">
            {reviews?.map((review) => (
              <div
                key={review._id}
                className="flex flex-col gap-2 p-4 h-60 bg-blue-100 rounded-md text-black"
              >
                <div className="flex gap-3">
                  <img
                    src={review.user.photo}
                    alt="user"
                    className="size-12 rounded-full"
                  />
                  <div>
                    <h1 className="text-lg font-semibold">
                      {review.user.name}
                    </h1>
                    <p className="text-sm">{review.user.email}</p>
                  </div>
                </div>
                <div className=" flex-col ">
                  <div className="py-2">
                    <div className=" flex  space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-7 "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                              fill={
                                star <= review.rating ? "#297529" : "#94a3b8"
                              }
                            />{" "}
                          </g>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="grow">
                    <h1 className="text-lg font-semibold">{review.title}</h1>
                    <p className="text-sm">{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Reviews Found!</p>
        )}
      </section>
    </div>
  );
};

export default MyReviews;
