import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import reviews from "../assets/reviews.json";
import Lottie from "lottie-react";
import useUserData from "../Hooks/useUserData";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Review = ({ instructor }) => {
  const [userRating, setUserRating] = useState(1);
  const [info] = useUserData();
  // const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      title: form.title.value,
      review: form.review.value,
      user: info?._id,
      instructor: instructor,
      rating: parseInt(userRating),
    };
    axiosSecure
      .post("/reviews/add", data)
      .then((res) => {
        toast.success("Review submitted");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    form.reset();
  };
  return (
    <div>
      <SectionTitle>Write a Review</SectionTitle>
      <section className="lg:flex gap-5 items-center px-20">
        <div className="hidden lg:block  w-full">
          <Lottie animationData={reviews} className="h-60" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="lg:px-10 shadow-md rounded px-5 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                defaultValue={info?.email}
                required
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="review"
              >
                Review
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="review"
                name="review"
                placeholder="Write Review"
                required
              />
            </div>
            <div className="flex space-x-1 pb-5">
              <span>Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  onClick={() => setUserRating(star)}
                  className="w-7 cursor-pointer"
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
                      fill={star <= userRating ? "#1a8c1a" : "#94a3b8"}
                    />{" "}
                  </g>
                </svg>
              ))}
            </div>
            <p className="pb-1">
              <small>All Fields are required</small>
            </p>
            <div className="flex items-center justify-between">
              <button
                disabled={info ? false : true}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Review;
