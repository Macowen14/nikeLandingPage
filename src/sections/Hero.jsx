import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [activeShoe, setActiveShoe] = useState(bigShoe1);

  return (
    <section className=" flex flex-col md:flex-row lg:gap-20" id="home">
      <div className="px-4 lg:flex-1 lg:px-5">
        <p className="text-xl font-montserrat text-coral-red my-4">
          Our Summer Collection
        </p>
        <h1 className="font-palanquin lg:text-[50px] text-3xl">
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red px-4">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat lg:text-[20px] lg:text-medium mb-2 ">
          Discover stylish Nike arrivals of higher quality and innovation for
          your active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex items-center justify-between mt-8 mx-4 lg:mx-10">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-5 bg-primary bg-center bg-cover lg:w-full lg:flex-1">
        <img
          src={activeShoe}
          alt="Shoe image"
          width={510}
          height={400}
          className="object-contain mb-10"
          loading="lazy"
        />
        <div className=" absolute -bottom-12 mx-20 flex flex-row justify-center gap-4 px-6 lg:left-12">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              shoe={shoe}
              setActiveShoe={setActiveShoe}
              activeShoe={activeShoe}
            />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
