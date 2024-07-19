import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imageURL, feedback, rating, customer }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imageURL}
        alt="Customer image"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex items-center gap-5 justify-center">
        <img
          src={star}
          alt="Star rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className="mt-1 font-palanquin text-center text-3xl font-bold">
          {customer}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
