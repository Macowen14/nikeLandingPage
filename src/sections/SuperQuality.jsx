import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SupperQuality = () => {
  return (
    <div
      className="flex flex-col align-center justify-center lg:flex-row"
      id="about-us"
    >
      <div>
        <h1 className="font-bold font-palanquin capitalize text-4xl">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="text-medium text-slate-gray mt-2 ">
          {" "}
          Ensuring premium comfort and style, our meticulously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality,inovation and a touch of elegance.
        </p>
        <p className="py-4 text-medium text-slate-gray">
          Our dedication to detail and excelence ensures your satisfaction
        </p>
        <Button label="View Details" />
      </div>
      <div>
        <img src={shoe8} alt="" className="w-[410px] h-[380px] lg:w-[650px] " />
      </div>
    </div>
  );
};

export default SupperQuality;
