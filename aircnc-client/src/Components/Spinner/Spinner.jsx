import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-8 border-dashed rounded-3xl animate-spin mt-5 border-green-400"></div>
    </div>
  );
};

export default Spinner;
