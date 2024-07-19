import React from "react";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
  return (
    <section id="products">
      <h1 className="font-palanquin text-4xl font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h1>
      <p className="text-slate-gray text-medium py-4">
        Experience top-notch quality with our sought after <br />{" "}
        <span>selections. Discover a world of comfort, design and value</span>
      </p>
      <ProductCard />
    </section>
  );
};

export default PopularProducts;
