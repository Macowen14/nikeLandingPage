import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-wrap max-comtainer justify-center gap-5 lg:gap-18">
      {services.map((service) => (
        <div
          className="px-8 py-10 sm:w-[350px] sm:min-w-[350px] shadow-3xl"
          key={service.label}
        >
          <img
            src={service.imgURL}
            alt={service.label}
            width={25}
            height={25}
            className="bg-coral-red rounded-full "
          />
          <h2 className="font-bold font-palanquin text-2xl mt-4 leading-normal">
            {service.label}
          </h2>
          <p className="pt-3 break-words font-montserrat leading-normal text-slate-gray text-medium">
            {service.subtext}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
