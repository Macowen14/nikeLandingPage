import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center gap-6 lg:flex-row lg:gap-x-24 ">
        <div className=" flex flex-col items-start justify-start">
          <h1 className="font-bold font-palanquin capitalize text-4xl mb-5 text-center">
            <span className="text-coral-red"> Special </span>
            Offer
          </h1>
          <p className="text-medium text-slate-gray mt-2">
            {" "}
            Embark on a shopping journey that redifines your experience with
            unbeautable deals. From premium selections to incredible savings we
            offer un paralleled value that truly sets us apart.
          </p>
          <p className="py-4 text-medium text-slate-gray">
            Navigate a realm of possibilities designed to fulfill your
            desires,surpassing the loftiest expectations. Your journey with us
            is nothing short of expectations.
          </p>
          <div className="flex gap-4">
            <Button label="Shop now" iconUrl={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
        <div className="">
          <img src={offer} alt="Offer" className="object-contain w-full" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
