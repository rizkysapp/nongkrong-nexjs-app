import React from "react";

const Button = ({ children, onClick, full, black, className }) => {
  return (
    <button
      className={`transition ${full ? "w-full text-base" : "px-3"} ${
        black ? "bg-gray-950 hover:bg-gray-800" : "bg-green-800 hover:bg-green-950 "
      }  py-1  rounded-md text-white text-xs capitalize ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
