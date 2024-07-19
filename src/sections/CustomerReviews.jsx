import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container py-20">
      <h3 className="font-palanquin text-3xl font-bold text-center">
        What Our <span className="text-coral-red"> Customers </span> Say
      </h3>
      <p className="info-text m-auto mt-4 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-20 flex flex-1 justify-evenly items-center flex-wrap">
        {reviews.map((review) => (
          <ReviewCard
            imageURL={review.imgURL}
            rating={review.rating}
            feedback={review.feedback}
            customer={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
