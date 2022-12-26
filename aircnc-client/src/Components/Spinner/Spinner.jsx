import React from "react";

const Spinner = ({ className }) => {
  console.log(className);
  return (
    <div className="flex justify-center items-center h-full relative">
      <div
        className={`w-16 h-16 border-8 border-dashed rounded-3xl animate-spin  border-green-400 absolute inset-0 ${className}`}
      ></div>
    </div>
  );
};

export default Spinner;
