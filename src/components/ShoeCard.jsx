import React from "react";

const ShoeCard = ({ shoe, setActiveShoe, activeShoe }) => {
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer p-2 bg-card bg-center bg-cover ${
        activeShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      }`}
      onClick={() => setActiveShoe(shoe.bigShoe)}
    >
      <img
        src={shoe.thumbnail}
        alt="Shoe collection"
        width={127}
        height={103}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
