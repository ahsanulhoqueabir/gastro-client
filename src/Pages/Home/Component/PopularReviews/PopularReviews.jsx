import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import ReviewCard from "./ReviewCard";

const PopularReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/reviews/all")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  });
  return (
    <div>
      <SectionTitle>Top Reveiws</SectionTitle>
      <section className="px-5 lg:px-20">
        {loading && <LoadingSpinner />}
        <div className="flex gap-3">
          <div className="grid gap-3 w-full">
            {reviews?.slice(1, 3).map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
          <div className="my-10 w-full">
            <ReviewCard review={reviews[0]} />
          </div>
          <div className="grid gap-3 w-full">
            {reviews?.slice(3, 5).map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularReviews;
