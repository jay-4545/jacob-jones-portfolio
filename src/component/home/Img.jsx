import React from "react";

function Img() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center lg:flex-wrap laptop:flex-nowrap 2xl:flex-nowrap md:items-center md:mt-0 mt-12 md:gap-12 gap-12">
      <div className="w-[500px]">
        <img
          className="w-full h-full object-cover"
          src="/assets/Img.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-max h-max object-contain"
          src="/assets/Instagram.png"
          alt=""
        />
        <img
          className="w-max h-max object-contain"
          src="/assets/icon.png"
          alt=""
        />
        <img
          className="w-max h-max object-contain"
          src="/assets/facebook.png"
          alt=""
        />
        <img
          className="w-max h-max object-contain"
          src="/assets/Line1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Img;
