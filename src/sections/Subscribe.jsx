import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col justify-between items-center">
      <h3 className="text-3xl leading-[68px] font-palanquin">
        Sign Up for <span className="text-coral-red">Updates </span> &
        Newsletter
      </h3>
      <div className="lg:w-[600px] flex items-center max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
