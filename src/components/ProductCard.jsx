import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const ProductCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:gap-8 lg:justify-evenly ">
      {products.map((product, index) => (
        <div className="gap-2" key={index}>
          <div>
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-[200px]"
              loading="lazy"
            />
          </div>
          <span className="flex gap-3">
            {" "}
            <img src={star} alt="Rating" />{" "}
            <span className="text-slate-gray">(45)</span>
          </span>

          <p className="font-montserrat text-lg">{product.name}</p>
          <p className="text-coral-red text-[16px]">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
