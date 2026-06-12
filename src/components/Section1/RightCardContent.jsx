import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
      <h2 className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-lg font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="leading-relax mb-10 text-white text-sm font-semibold text-shadow-2xs">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-semibold px-8 py-1 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
