import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 px-6 lg:px-18 gap-4 lg:gap-0">
      <h4 className="bg-black text-white px-6 py-1 rounded-full uppercase">
        Target Audience
      </h4>
      <button className="bg-gray-200 uppercase px-6 py-1 rounded-full tracking-widest text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
