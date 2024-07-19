import React from "react";

const Button = ({
  label,
  iconUrl,
  borderColor,
  textColor,
  backgroundColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor}`
            : "bg-coral-red  text-white"
        } ${borderColor ? `${borderColor}` : " border-coral-red"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right"
          className=" w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
