import { East, West } from "@mui/icons-material";
import React from "react";
import { workSlideImg } from "../../data/worksData";
import { IconButton } from "@mui/material";

function WorkImg() {
  return (
    <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] lg:px-[80px] px-[35px] py-[50px] grid gap-4">
      <div className="text-center grid gap-2 text-white">
        <p className="italic text-lg font-semibold">Testimonial</p>
        <h1 className="md:text-4xl text-xl pb-8 font-bold uppercase">
          What they says
        </h1>
      </div>
      <div className="flex flex-wrap 2xl:flex-nowrap items-center justify-center gap-16 border-b">
        <div>
          <img
            src="/assets/workslide1.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="md:text-xl text-sm text-white md:text-balance text-wrap font-semibold tracking-wider md:w-[380px] w-full">
            “ File storage made easy – including powerful features you won’t
            find anywhere else. Whether you’re.”
          </p>
          <div>
            <p className="text-white font-medium md:text-base text-sm">
              -Larry Diamond
            </p>
            <p className="text-white md:text-sm text-xs">
              Chief Executive Officer, Besnik
            </p>
          </div>
          <div className="flex laptop:justify-start 2xl:justify-start justify-center gap-4 mb-4">
            <IconButton className="!bg-white !text-black">
              <West />
            </IconButton>
            <IconButton className="!bg-white !text-black">
              <East />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-between justify-center items-center pt-8 gap-8">
        {workSlideImg.map((value, index) => {
          return (
            <div key={index} className="md:w-[120px] w-[100px]">
              <img
                src={value.img}
                className="w-max h-max object-contain"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkImg;
