import React from "react";

function Img() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center laptop:flex-nowrap 2xl:flex-nowrap md:items-center md:mt-0 mt-12 md:gap-12 gap-12">
      <div className="">
        <img
          className="w-full h-full object-cover"
          src="/assets/Img.png"
          alt=""
        />
      </div>
      <div className="flex md:flex-col items-center gap-4">
        <div className="w-12 h-12">
          <img
            className="w-full h-full object-cover"
            src="/assets/Instagram.png"
            alt=""
          />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full object-cover"
            src="/assets/icon.png"
            alt=""
          />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full object-cover"
            src="/assets/facebook.png"
            alt=""
          />
        </div>
        <div className="border-2 bg-gray-300 border-gray-300 md:w-1 md:h-32 w-20"></div>
      </div>
    </div>
  );
}

export default Img;
